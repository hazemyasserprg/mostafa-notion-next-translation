import { MdEmail } from "react-icons/md";
import BlurText from "@/src/app/[locale]/_components/BlurText";
import Image from "next/image";
import { useTranslations } from "next-intl";
import aboutImg from "/public/mostafa/mostafa.webp";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const isArabic = locale === "ar";

  const title = isArabic ? "عنّي | مصطفى ياسر" : "About | Mostafa Yasser";
  const description = isArabic
    ? "مرحبًا، أنا مصطفى ياسر. أساعد الفرق والأفراد على تحسين سير العمل باستخدام أنظمة Notion قابلة للتوسع. دعنا نتواصل لتحسين الإنتاجية!"
    : "Hi, I'm Mostafa Yasser. I help teams and individuals optimize workflows using scalable Notion systems. Let's connect and improve productivity!";

  return {
    title,
    description,
    openGraph: {
      title: isArabic ? "عن مصطفى ياسر" : "About Mostafa Yasser",
      description,
      type: "profile",
      url: `https://mostafayasser.com/${locale}/about`,
      images: [
        {
          url: "/mostafa/mostafa.webp",
          width: 800,
          height: 600,
          alt: "Mostafa Yasser",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/mostafa/mostafa.webp"],
    },
  };
}

function AboutMe() {
  const t = useTranslations("AboutPage");

  return (
    <BlurText>
      <div className="min-h-screen bg-neutral-950 text-white px-6 py-12 sm:px-12 lg:px-24 rounded-3xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="block text-gray-300">{t("greeting")}</span>
              <span className="text-main">{t("name")}</span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed border-l-4 border-main pl-4">
              {t("bio")}
            </p>

            <div>
              <a
                href="mailto:contact@mostafayasser.com"
                className="inline-flex items-center gap-3 bg-main text-black font-medium px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all shadow-lg"
              >
                <MdEmail size={22} />
                {t("connect")}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-main/20 blur-2xl rounded-3xl -z-10 rotate-1"></div>
            <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-2xl rounded-3xl overflow-hidden border border-main/20">
              <Image
                src={aboutImg}
                alt="Mostafa Yasser"
                className="w-full h-auto object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </BlurText>
  );
}

export default AboutMe;
