import { useTranslations } from "next-intl";
import BlurText from "@/src/app/[locale]/_components/BlurText";
import TemplateList from "@/src/app/[locale]/_components/TemplateList";
import CategoryButtons from "@/src/app/[locale]/_components/CategoryButtons";

export async function generateMetadata({ params }) {
  const { locale } = params;
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
      url: "https://mostafayasser.com/templates",
      siteName: "Mostafa Yasser",
      images: [
        {
          url: "@/src/public/thumbnails/ENThumbnails/2.webp",
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
      images: ["@/src/public/thumbnails/ENThumbnails/2.webp"],
    },
  };
}

export default function Templates({ searchParams }) {
  const t = useTranslations("TemplatesPage");

  const filter = searchParams?.category || "all";

  return (
    <BlurText>
      <div className="w-full px-6 py-12 mt-6 sm:mt-12">
        <section className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-main mb-8 sm:mb-10">
            {t("subtitle")}
          </p>

          <CategoryButtons />
          <TemplateList filter={filter} />
        </section>
      </div>
    </BlurText>
  );
}
