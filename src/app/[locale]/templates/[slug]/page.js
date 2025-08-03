import TemplateDetailsClient from "./TemplateDetailsClient";
import templatesData from "@/src/app/[locale]/_data/templatesData";
import { notFound } from "next/navigation";
import { createTranslator } from "next-intl";
import arMessages from "@/messages/ar/TemplateSlug.json";
import enMessages from "@/messages/en/TemplateSlug.json";
import PremiumPage from "./PremiumPage";

export async function generateMetadata({ params }) {
  const { locale, slug } = params;
  const isArabic = locale === "ar";
  const messages = isArabic ? arMessages : enMessages;
  const t = createTranslator({ locale, messages });
  const template = templatesData.find((b) => b.slug === slug);

  if (!template) return {};

  const title = isArabic
    ? `${t(`${template.name}.name`)} | قالب نوشن من مصطفى ياسر`
    : `${t(`${template.name}.name`)} | Notion Template by Mostafa Yasser`;

  const description = isArabic
    ? t(`${template.name}.description`) ??
      "اكتشف قالب نوشن مصمم بعناية لتحسين إنتاجيتك وتنظيم حياتك الرقمية."
    : "Discover a Notion template carefully designed to improve your productivity and organize your digital life.";

  const url = `https://mostafayasser.com/${locale}/templates/${slug}`;

  const rawImage = t(`${template.name}.image`);
  const imageUrl = rawImage.startsWith("http")
    ? rawImage
    : `https://mostafayasser.com${rawImage}`;

  // ✅ Determine favicon per premium template
  let faviconPath = "/favicons/icon.webp";

  if (slug === "study-hub") {
    faviconPath = "/favicons/study-hub.webp";
  } else if (slug === "second-brain") {
    faviconPath = "/favicons/second-brain.webp";
  } else if (slug === "finance-hub") {
    faviconPath = "/favicons/finance-hub.webp";
  }

  return {
    title,
    description,
    keywords: isArabic
      ? [
          t(`${template.name}.name`),
          "قالب نوشن",
          "نوشن إنتاجية",
          "تنظيم رقمي",
          "مصطفى ياسر",
        ]
      : [
          t(`${template.name}.name`),
          "Notion template",
          "Notion productivity",
          "Digital organization",
          "Mostafa Yasser",
        ],
    openGraph: {
      title,
      description,
      url,
      siteName: "Mostafa Yasser",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: isArabic
            ? `معاينة قالب ${t(`${template.name}.name`)}`
            : `Preview of ${t(`${template.name}.name`)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    icons: {
      icon: faviconPath,
    },
    alternates: {
      canonical: url,
    },
  };
}

export async function generateStaticParams() {
  const locales = ["en", "ar"];

  return templatesData.flatMap((template) =>
    locales.map((locale) => ({
      locale,
      slug: template.slug,
    }))
  );
}

export default function TemplateDetails({ params }) {
  const template = templatesData.find((b) => b.slug === params.slug);

  if (!template) {
    return notFound();
  }

  if (
    template.slug === "study-hub" ||
    template.slug === "second-brain" ||
    template.slug === "finance-hub"
  ) {
    return <PremiumPage template={template} />;
  }

  return <TemplateDetailsClient template={template} />;
}
