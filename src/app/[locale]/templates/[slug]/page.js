// app/[locale]/templates/[slug]/page.js
import TemplateDetailsClient from "./TemplateDetailsClient";
import templatesData from "@/src/app/[locale]/_data/templatesData";
import { notFound } from "next/navigation";
import { createTranslator } from "next-intl";
import arMessages from "@/messages/ar/TemplateSlug.json";
import enMessages from "@/messages/en/TemplateSlug.json";

export async function generateMetadata({ params }) {
  const { locale, slug } = params;
  const isArabic = locale === "ar";

  const template = templatesData.find((b) => b.slug === slug);
  if (!template) return {};

  const messages = isArabic ? arMessages : enMessages;
  const t = createTranslator({ locale, messages });

  const title = isArabic
    ? `${t(`${template.name}.name`)} | قالب نوتيون من مصطفى ياسر`
    : `${t(`${template.name}.name`)} | Notion Template by Mostafa Yasser`;

  const description = isArabic
    ? t(`${template.name}.description`) ??
      "اكتشف قالب نوتيون مصمم بعناية لتحسين إنتاجيتك وتنظيم حياتك الرقمية."
    : "Discover a Notion template carefully designed to improve your productivity and organize your digital life.";

  const url = `https://mostafayasser.com/templates/${slug}`;

  return {
    title,
    description,
    keywords: isArabic
      ? [
          t(`${template.name}.name`),
          "قالب نوتيون",
          "نوتيون إنتاجية",
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
          url: t(`${template.name}.image`),
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
      images: [t(`${template.name}.image`)],
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

  return <TemplateDetailsClient template={template} />;
}
