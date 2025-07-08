import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import BlurText from "@/src/app/[locale]/_components/BlurText";
// import MoreDetails from "@/src/app/[locale]/_components/MoreDetails";
import AnimatedInView from "@/src/app/[locale]/_components/AnimatedInView";
import StudyHubPage from "./StudyHubPage";
import CheckoutButton from "../../_components/CheckoutButton";
// import Link from "next/link";

export default function TemplateDetailsClient({ template }) {
  const t = useTranslations("TemplateSlug");
  const locale = useLocale();

  if (template.slug === "study-hub") {
    return <StudyHubPage />;
  }

  return (
    <BlurText>
      <AnimatedInView>
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
            <h1
              className={`text-2xl md:text-4xl font-bold mb-1 text-center ${
                locale === "ar" ? "lg:text-right" : "lg:text-left"
              }`}
            >
              {t(`${template.name}.name`)}
            </h1>
            <p
              className={`text-xl md:text-2xl mt-2 text-main text-center ${
                locale === "ar" ? "lg:text-right" : "lg:text-left"
              }`}
            >
              {t(`${template.name}.price`)}
            </p>
            <p
              className={`text-base md:text-lg text-muted mt-4 text-center ${
                locale === "ar" ? "lg:text-right" : "lg:text-left"
              }`}
            >
              {t(`${template.name}.description`)}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center mt-8 gap-4">
              {t(`${template.name}.price`) !== "soon" && (
                <CheckoutButton
                  checkoutLink={t(`${template.name}.checkoutLink`)}
                  checkoutText={t(`${template.name}.checkout`)}
                />
              )}
            </div>
          </div>
        </div>
      </AnimatedInView>
    </BlurText>
  );
}
