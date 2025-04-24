import Image from "next/image";
import blogsData from "@/src/app/[locale]/_data/blogsData";
import BlurText from "@/src/app/[locale]/_components/BlurText";
import ReactMarkdown from "react-markdown";
import { createTranslator, useTranslations } from "next-intl"; // Import the useTranslations hook
import { notFound } from "next/navigation";
import arMessages from "@/messages/ar/BlogSlug.json";
import enMessages from "@/messages/en/BlogSlug.json";

export async function generateMetadata({ params }) {
  const { locale, slug } = params;
  const isArabic = locale === "ar";

  const blog = blogsData.find((b) => b.slug === slug);
  if (!blog) return {};

  const messages = isArabic ? arMessages : enMessages;
  const t = createTranslator({
    locale,
    messages,
  });

  const title = isArabic
    ? `${t(`${blog.title}.shortCut`)} | مدونة مصطفى ياسر`
    : `${t(`${blog.title}.shortCut`)} | Mostafa Yasser Blog`;

  const description = isArabic
    ? t(`${blog.title}.title`) ??
      "اكتشف آخر مقالات مصطفى ياسر حول نوتيون والإنتاجية."
    : "Explore the latest articles by Mostafa Yasser on Notion, productivity, and digital organization.";

  const url = `https://mostafayasser.com/blog/${slug}`;

  return {
    title,
    description,
    keywords: isArabic
      ? [
          t(`${blog.title}.title`),
          "مدونة نوتيون",
          "الإنتاجية",
          "تنظيم رقمي",
          "مقالات مصطفى ياسر",
        ]
      : [
          t(`${blog.title}.title`),
          "Notion blog",
          "productivity",
          "digital organization",
          "Mostafa Yasser articles",
        ],
    openGraph: {
      title,
      description,
      url,
      siteName: "Mostafa Yasser",
      type: "website",
      images: [
        {
          url: t(`${blog.title}.image`),
          width: 1200,
          height: 630,
          // alt: t(`${blog.title}.name`),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [t(`${blog.title}.image`)],
    },
  };
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetails({ params }) {
  const blog = blogsData.find((b) => b.slug === params.slug);
  const t = useTranslations("BlogSlug");

  const customComponents = {
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-main text-2xl font-normal cursor-pointer border-b-2 border-b-main hover:text-[25px] transition-all duration-300 hover:border-b-gray-300 hover:text-gray-300"
      >
        {children}
      </a>
    ),
    p: ({ children }) => (
      <p className="text-main leading-relaxed text-2xl font-normal">
        {children}
      </p>
    ),
  };

  if (!blog) {
    return notFound(); // Handle the case where the blog is not found
  }

  return (
    <BlurText>
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="md:col-span-1 hidden md:block">
            <div className="p-0 border-l-2 border-main pl-6 sticky top-24 max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-6 tracking-tight">
                {t(`${blog.title}.toc`)}
              </h2>
              <ul className="space-y-4">
                {blog.topics.map((topic) => (
                  <li key={topic.id} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 mt-2 rounded-full bg-main transition-all group-hover:scale-125" />
                    <a
                      href={`#${topic.id}`}
                      className="text-gray-300 hover:text-main transition-colors duration-300 font-medium"
                    >
                      {t(`${blog.title}.topics.${topic.id}.tocTitle`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <h1 className="sm:text-4xl text-3xl font-bold text-center mb-8">
              {t(`${blog.title}.title`)}
            </h1>
            <Image
              src={t(`${blog.title}.image`)}
              alt={blog.title}
              width={800}
              height={450}
              className="w-full rounded-2xl mb-10"
            />
            {blog.topics.map((topic) => (
              <section key={topic.id} id={topic.id} className="mb-16">
                <h3 className="text-2xl font-semibold text-main mb-4">
                  <ReactMarkdown components={customComponents}>
                    {t(`${blog.title}.topics.${topic.id}.heading`)}
                  </ReactMarkdown>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t(`${blog.title}.topics.${topic.id}.content`)}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </BlurText>
  );
}
