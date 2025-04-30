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
  const baseUrl = "https://www.mostafayasser.com";

  return {
    title: isArabic
      ? "قوالب نوشن الشاملة | مصطفى ياسر"
      : "All-in-One Notion Templates | Mostafa Yasser",
    description: isArabic
      ? "اكتشف قوالب نوشن القوية والبسيطة المصممة لتنظيم حياتك، وبناء عادات أفضل، وزيادة الإنتاجية."
      : "Discover powerful and simple Notion templates designed to organize your life, build better habits, and improve productivity.",
    openGraph: {
      title: isArabic
        ? "قوالب نوشن الشاملة | مصطفى ياسر"
        : "All-in-One Notion Templates | Mostafa Yasser",
      description: isArabic
        ? "اكتشف قوالب نوشن القوية والبسيطة المصممة لتنظيم حياتك، وبناء عادات أفضل، وزيادة الإنتاجية."
        : "Discover powerful and simple Notion templates designed to organize your life, build better habits, and improve productivity.",
      type: "website",
      url: `${baseUrl}/${locale}`,
      images: [
        {
          url: isArabic
            ? `${baseUrl}/metaData/ar/1.webp`
            : `${baseUrl}/metaData/en/1.webp`,
          width: 800,
          height: 600,
          alt: isArabic ? "قوالب نوشن" : "Notion Templates",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic
        ? "قوالب نوشن الشاملة | مصطفى ياسر"
        : "All-in-One Notion Templates | Mostafa Yasser",
      description: isArabic
        ? "اكتشف قوالب نوشن القوية والبسيطة المصممة لتنظيم حياتك، وبناء عادات أفضل، وزيادة الإنتاجية."
        : "Discover powerful and simple Notion templates designed to organize your life, build better habits, and improve productivity.",
      images: [
        isArabic
          ? `${baseUrl}/metaData/ar/1.webp`
          : `${baseUrl}/metaData/en/1.webp`,
      ],
    },
  };
}

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <BlurText>
      <div className="text-center">
        <AnimatedText>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2 font-extrabold leading-tight">
            <TypewriterText text={t("title")} />
          </h1>
        </AnimatedText>

        <AnimatedWrapper delay={3.5}>
          <p className="text-base sm:text-lg md:text-xl text-main mt-4 max-w-2xl mx-auto px-4 font-light tracking-tight">
            {t("subtitle")}
          </p>

          <GoToTemplatesPageButton text={t("browseButton")} />

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
