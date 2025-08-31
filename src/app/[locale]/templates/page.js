import TemplatesPage from "./templatesPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "قوالب نوشن | مصطفى ياسر"
      : "Notion Templates | Mostafa Yasser",
    description: isArabic
      ? "اكتشف قوالب نوشن المميزة المصممة لمساعدتك على البقاء منظمًا ومنتجًا وملهمًا. استعرض أحدث التصاميم وارتقِ بتنظيمك الرقمي."
      : "Discover premium Notion templates designed to help you stay organized, productive, and inspired. Explore my latest creations and boost your digital workflow.",
    keywords: isArabic
      ? [
        "قوالب نوشن",
        "قوالب إنتاجية",
        "تنظيم نوشن",
        "قوالب مصطفى ياسر",
        "لوحة تحكم نوشن",
        "قوالب نوشن مجانية",
      ]
      : [
        "Notion templates",
        "Productivity templates",
        "Organize Notion",
        "Mostafa Yasser templates",
        "Notion dashboard",
        "Free Notion templates",
      ],
    openGraph: {
      title: isArabic
        ? "قوالب نوشن | مصطفى ياسر"
        : "Notion Templates | Mostafa Yasser",
      description: isArabic
        ? "استكشف مجموعة من قوالب نوشن المصممة لتعزيز إنتاجيتك وتنظيم حياتك."
        : "Explore a curated collection of Notion templates crafted to enhance your productivity and streamline your life.",
      url: `https://mostafayasser.com/${locale}/templates`,
      siteName: "Mostafa Yasser",
      images: [
        {
          url: isArabic
            ? "thumbnails/ARThumbnails/2.webp"
            : "thumbnails/ENThumbnails/2.webp",
          width: 1200,
          height: 630,
          alt: isArabic
            ? "معاينة قوالب نوشن من مصطفى ياسر"
            : "Mostafa Yasser Notion Templates Preview",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic
        ? "قوالب نوشن | مصطفى ياسر"
        : "Notion Templates | Mostafa Yasser",
      description: isArabic
        ? "حافظ على تنظيمك وإنتاجيتك مع قوالب نوشن المصممة خصيصًا من مصطفى ياسر."
        : "Stay organized and productive with these custom-designed Notion templates by Mostafa Yasser.",
      images: [
        isArabic
          ? "thumbnails/ARThumbnails/2.webp"
          : "thumbnails/ENThumbnails/2.webp",
      ],
    },
  };
}

export default function Templates({ params }) {
  return <TemplatesPage />;
}


