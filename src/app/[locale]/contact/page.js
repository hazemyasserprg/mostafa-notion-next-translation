import FilloutSlider from "@/src/app/[locale]/_components/FilloutSliderEmbed";
import BlurText from "@/src/app/[locale]/_components/BlurText";
import { GrTemplate } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  const title = isArabic
    ? "اتصل بنا | مصطفى ياسر | قوالب نوشن والعمل المخصص"
    : "Contact | Mostafa Yasser | Notion Templates & Custom Work";

  const description = isArabic
    ? "تواصل مع مصطفى ياسر للحصول على قوالب نوشن مخصصة، التعاون، فرص التسويق بالعمولة، أو أي استفسارات. دعونا نعمل معًا لتنظيم حياتك الرقمية."
    : "Reach out to Mostafa Yasser for custom Notion templates, collaborations, affiliate opportunities, or any inquiries. Let's work together to organize your digital life.";

  const openGraphDescription = isArabic
    ? "راسل مصطفى ياسر مباشرة للحصول على قالب نوشن مخصص، بدء التعاون، أو الانضمام إلى برنامج التسويق بالعمولة."
    : "Message Mostafa Yasser directly to get a custom Notion template, start a collaboration, or join the affiliate program.";

  return {
    title,
    description,
    keywords: isArabic
      ? [
        "اتصل بمصطفى ياسر",
        "قالب نوشن مخصص",
        "التعاون مع نوشن",
        "برنامج التسويق بالعمولة نوشن",
        "خبير نوشن",
        "توظيف مصمم نوشن",
      ]
      : [
        "Contact Mostafa Yasser",
        "Custom Notion template",
        "Notion collaboration",
        "Notion affiliate program",
        "Notion expert",
        "Hire Notion designer",
      ],
    openGraph: {
      title,
      description: openGraphDescription,
      url: `https://mostafayasser.com/${locale}/contact`,
      siteName: "Mostafa Yasser",
      images: [
        {
          url: "/logos/icon.webp",
          width: 1200,
          height: 630,
          alt: isArabic ? "اتصل بمصطفى ياسر" : "Contact Mostafa Yasser",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic
        ? "اتصل بمصطفى ياسر – دعونا نصنع شيئًا في نوشن"
        : "Contact Mostafa Yasser – Let’s Create Something in Notion",
      description: isArabic
        ? "هل ترغب في قالب نوشن مخصص أو التعاون مع مصطفى ياسر؟ دعونا نتواصل!"
        : "Want a custom Notion template or to collaborate with Mostafa Yasser? Let’s connect!",
      images: ["/logos/icon.webp"],
    },
  };
}

function ContactAffiliates() {
  const t = useTranslations("ContactPage");

  return (
    <BlurText>
      <div className="min-h-screen py-12 px-6 mt-6 sm:mt-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-main mb-8 sm:mb-10">
            {t("subtitle")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-20 max-w-xl sm:max-w-3xl mx-auto">
            <a
              href="mailto:contact@mostafayasser.com"
              className="cursor-pointer inline-flex items-center justify-center gap-4 text-main text-lg font-semibold border border-main px-8 py-4 rounded-2xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#d7b180] to-[#fff] hover:text-gray-800"
            >
              <MdEmail size={28} />
              {t("contactBtn")}
            </a>

            <FilloutSlider
              className={
                "cursor-pointer inline-flex items-center justify-center gap-4 text-main text-lg font-semibold border border-main px-8 py-4 rounded-2xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#d7b180] to-[#fff] hover:text-gray-800"
              }
            >
              <GrTemplate size={28} />
              {t("customTemplateBtn")}
            </FilloutSlider>
          </div>
        </div>
      </div>
    </BlurText>
  );
}

export default ContactAffiliates;
