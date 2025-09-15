import { NextResponse } from 'next/server';

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DB_ID = process.env.NOTION_DB_ID;

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    console.log('📧 New subscription request for:', email);
    console.log('🗄️ Using Notion database ID:', NOTION_DB_ID);
    console.log('📅 Subscription date:', new Date().toISOString());

    // First, let's try to get the database schema to understand the structure
    const dbResponse = await fetch(`https://api.notion.com/v1/databases/${NOTION_DB_ID}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
    });

    if (!dbResponse.ok) {
      const dbError = await dbResponse.json();
      console.error('Database access error:', dbError);
      return NextResponse.json(
        { error: `Database access failed: ${dbError.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    const dbData = await dbResponse.json();
    console.log('Database properties:', Object.keys(dbData.properties));
    console.log('Available properties:', dbData.properties);

    // Get available properties for duplicate check
    const availableProps = Object.keys(dbData.properties);

    // Check if email already exists in the database
    const emailProp = availableProps.find(prop =>
      dbData.properties[prop].type === 'email' ||
      prop.toLowerCase().includes('email')
    );

    if (emailProp) {
      const checkDuplicateResponse = await fetch(`https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NOTION_TOKEN}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
          filter: {
            property: emailProp,
            email: {
              equals: email
            }
          }
        }),
      });

      if (checkDuplicateResponse.ok) {
        const duplicateData = await checkDuplicateResponse.json();
        if (duplicateData.results && duplicateData.results.length > 0) {
          console.log('⚠️ Email already exists in database:', email);
          return NextResponse.json(
            {
              error: 'Email already subscribed',
              message: 'This email address is already subscribed to our newsletter.',
              alreadySubscribed: true
            },
            { status: 409 }
          );
        }
      } else {
        console.log('⚠️ Could not check for duplicates, continuing with subscription');
      }
    } else {
      console.log('⚠️ No email property found, cannot check for duplicates');
    }

    // Build properties object dynamically based on what's available
    const properties = {};

    // Check for email property (reuse the one found earlier)
    if (emailProp) {
      properties[emailProp] = {
        email: email,
      };
      console.log(`✅ Using email property: "${emailProp}"`);
    } else {
      console.log('⚠️ No email property found');
    }

    // Check for date property
    const dateProp = availableProps.find(prop =>
      dbData.properties[prop].type === 'date' ||
      prop.toLowerCase().includes('date')
    );

    if (dateProp) {
      properties[dateProp] = {
        date: {
          start: new Date().toISOString().split('T')[0],
        },
      };
      console.log(`✅ Using date property: "${dateProp}"`);
    } else {
      console.log('⚠️ No date property found');
    }

    // Check for status property
    const statusProp = availableProps.find(prop =>
      dbData.properties[prop].type === 'select' &&
      prop.toLowerCase().includes('status')
    );

    if (statusProp) {
      properties[statusProp] = {
        select: {
          name: 'Active',
        },
      };
      console.log(`✅ Using status property: "${statusProp}"`);
    } else {
      console.log('⚠️ No status property found');
    }

    // Check for title property (optional)
    const titleProp = availableProps.find(prop =>
      dbData.properties[prop].type === 'title'
    );

    if (titleProp) {
      properties[titleProp] = {
        title: [
          {
            text: {
              content: `Subscriber: ${email}`,
            },
          },
        ],
      };
      console.log(`✅ Using title property: "${titleProp}"`);
    } else {
      console.log('ℹ️ No title property found - continuing without title');
    }

    // Ensure we have at least one property for Notion
    if (Object.keys(properties).length === 0) {
      console.log('❌ No properties found to create page');
      return NextResponse.json(
        { error: 'Database configuration error: No suitable properties found' },
        { status: 500 }
      );
    }

    console.log('📝 Final properties being sent:', JSON.stringify(properties, null, 2));

    // Create a new page in the Notion database
    const response = await fetch(`https://api.notion.com/v1/pages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: {
          database_id: NOTION_DB_ID,
        },
        properties: properties,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Notion API error:', errorData);
      return NextResponse.json(
        { error: `Failed to save subscription: ${errorData.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log('✅ Subscription successfully added to Notion database');
    console.log('🆔 Notion page ID:', data.id);

    return NextResponse.json(
      {
        message: 'Subscription successful',
        id: data.id,
        email: email,
        subscriptionDate: new Date().toISOString()
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Subscription processing error:', error);
    return NextResponse.json(
      {
        error: `Failed to process subscription: ${error.message}`,
        details: 'Please try again later or contact support if the issue persists'
      },
      { status: 500 }
    );
  }
}
