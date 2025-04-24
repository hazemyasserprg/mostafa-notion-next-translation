import { createTranslator, useTranslations } from "next-intl";
import BlurText from "@/src/app/[locale]/_components/BlurText";
import Image from "next/image";
import templatesData from "@/src/app/[locale]/_data/templatesData";
import { notFound } from "next/navigation";
import arMessages from "@/messages/ar/TemplateSlug.json";
import enMessages from "@/messages/en/TemplateSlug.json";

export async function generateMetadata({ params }) {
  const { locale, slug } = params;
  const isArabic = locale === "ar";

  const template = templatesData.find((b) => b.slug === slug);
  if (!template) return {};

  const messages = isArabic ? arMessages : enMessages;
  const t = createTranslator({
    locale,
    messages,
  });

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
            ? `معاينة قالب ${t(`${template.name}.name`)}}`
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

// Static paths for the templates
export async function generateStaticParams() {
  return templatesData.map((template) => ({
    slug: template.slug,
  }));
}

export default function TemplateDetails({ params }) {
  const t = useTranslations("TemplateSlug");
  const template = templatesData.find((b) => b.slug === params.slug);

  if (!template) return notFound();

  return (
    <BlurText>
      <div className="min-h-screen px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row lg:gap-10 gap-5 items-start">
        <Image
          src={t(`${template.name}.image`)}
          alt={t(`${template.name}.name`)}
          width={800}
          height={600}
          className="w-full lg:w-7/12 aspect-[4/3] lg:aspect-auto rounded-xl shadow-lg"
          priority={true}
        />
        <div className="w-full lg:w-1/3 flex flex-col justify-start items-center lg:items-start text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-1">
            {t(`${template.name}.name`)}
          </h1>
          <p className="text-xl md:text-2xl mt-2 text-main">
            {t(`${template.name}.price`)}
          </p>
          <p className="text-base md:text-lg text-muted mt-4">
            {t(`${template.name}.description`)}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center mt-8 gap-4">
            <a
              href={t(`${template.name}.checkoutLink`)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block overflow-hidden px-6 py-3 font-medium text-white bg-black rounded-full group shadow-secondary"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left" />
              <span className="relative block text-lg transform transition-all duration-300 ease-in-out group-hover:text-main">
                {t(`${template.name}.checkout`)}
              </span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-not-allowed opacity-50 overflow-hidden px-6 py-3 font-medium text-white bg-black rounded-full shadow-secondary"
            >
              <span className="block text-lg">
                {t(`${template.name}.moreDetails`)}
              </span>
            </a>
          </div>
        </div>
      </div>
    </BlurText>
  );
}
