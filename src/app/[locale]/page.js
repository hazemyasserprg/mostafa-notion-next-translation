import { useTranslations } from "next-intl";
import TemplatesShowcase from "@/src/app/[locale]/_components/TempaltesShowCase";
import AnimatedText from "@/src/app/[locale]/_components/AnimatedText";
import TypewriterText from "@/src/app/[locale]/_components/TypewriterText";
import AnimatedWrapper from "@/src/app/[locale]/_components/AnimatedWrapper";
import BlurText from "@/src/app/[locale]/_components/BlurText";
import SubscriptionForm from "@/src/app/[locale]/_components/SubscriptionForm";
import GoToTemplatesPageButton from "@/src/app/[locale]/_components/GoToTemplatesPageButton";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const isArabic = locale === "ar";

  const baseUrl = "https://mostafayasser.com";
  const imageUrl = isArabic
    ? `${baseUrl}/metaData/ar/1.webp`
    : `${baseUrl}/metaData/en/1.webp`;

  const title = isArabic
    ? "مصطفى ياسر | قوالب نوشن لتنظيم حياتك"
    : "Mostafa Yasser | Notion Templates to Organize Your Life";

  const description = isArabic
    ? "استكشف قوالب نوشن المصممة بعناية لتعزيز الإنتاجية وتنظيم سير عملك وجعل حياتك أكثر وضوحًا. من تصميم مصطفى ياسر."
    : "Explore beautifully crafted Notion templates designed to boost productivity, streamline your workflow, and bring clarity to your life. Created by Mostafa Yasser.";

  return {
    title: {
      template: "%s",
      default: title,
    },
    description,
    openGraph: {
      title,
      description: isArabic
        ? "عزز إنتاجيتك مع قوالب نوشن الاحترافية من مصطفى ياسر. بسيطة وفعالة وجميلة."
        : "Boost your productivity with premium Notion templates by Mostafa Yasser. Simple, effective, and beautifully designed.",
      url: baseUrl,
      siteName: "Mostafa Yasser",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: isArabic
            ? "مصطفى ياسر - قوالب نوشن"
            : "Mostafa Yasser - Notion Templates",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic
        ? "مصطفى ياسر | قوالب نوشن"
        : "Mostafa Yasser | Notion Templates",
      description: isArabic
        ? "اكتشف قوالب نوشن لتنظيم حياتك وزيادة إنتاجيتك. من تصميم مصطفى ياسر."
        : "Discover Notion templates that organize your life and boost productivity. Built by Mostafa Yasser.",
      creator: "@engmsyasser",
      images: [imageUrl],
    },
  };
}

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <BlurText>
      <div className="text-center">
        <AnimatedText className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2 font-extrabold leading-tight">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2 font-extrabold leading-tight">
            <TypewriterText text={t("title")} />
          </h1>
        </AnimatedText>

        <AnimatedWrapper delay={2.5}>
          <p className="text-base sm:text-lg md:text-xl text-main mt-4 max-w-2xl mx-auto px-4 font-light tracking-tight">
            {t("subtitle")}
          </p>

          <GoToTemplatesPageButton
            text={t("browseButton")}
            className={"flex justify-center mt-6 sm:mt-10 relative z-10 px-4"}
          />

          <SubscriptionForm className="mt-15 w-full max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 px-4 sm:px-6">
            <p className="text-center text-sm sm:text-base mt-4 max-w-md px-4 sm:px-0 mx-auto text-gray-400 font-light tracking-tight leading-relaxed">
              {t.rich("newsletter", {
                span: (chunks) => (
                  <span className="font-medium text-white">{chunks}</span>
                ),
              })}
            </p>
          </SubscriptionForm>
        </AnimatedWrapper>
      </div>

      <TemplatesShowcase />
    </BlurText>
  );
}
