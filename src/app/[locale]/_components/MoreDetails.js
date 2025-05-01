import AnimatedInView from "./AnimatedInView";
import { useLocale, useTranslations } from "next-intl";
import Scrolling3DImages from "./Scrolling3DImages";

export default function TemplateSection({ template }) {
  const t = useTranslations("TemplateSlug");
  const locale = useLocale();

  return (
    <AnimatedInView>
      <section className="w-full bg-[#121212] py-16 sm:py-20 rounded-2xl">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            {/* Text Content */}
            <div
              className={`w-full lg:w-1/2 space-y-6 ${
                locale === "ar" ? "text-right" : "text-left"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F5E0A6] leading-tight">
                {t(`${template.name}.name`)}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-[#D1C7A1] leading-relaxed">
                {t(`${template.name}.description`)}
              </p>
            </div>

            {/* 3D Scrolling Images */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Scrolling3DImages />
            </div>
          </div>

          {/* More Details Section */}
          <div className="mt-16 space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5E0A6]">
                {t(`${template.name}.features`)}
              </h3>
              <ul className="list-disc list-inside text-[#D1C7A1] text-lg sm:text-xl">
                {/* Replace these items with actual template features */}
                <li>{t(`${template.name}.feature1`)}</li>
                <li>{t(`${template.name}.feature2`)}</li>
                <li>{t(`${template.name}.feature3`)}</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5E0A6]">
                {t(`${template.name}.videoDemo`)}
              </h3>
              {/* Video Demo */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="560"
                  height="315"
                  src={t(`${template.name}.videoUrl`)} // Video URL for demo
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5E0A6]">
                {t(`${template.name}.instructions`)}
              </h3>
              <p className="text-lg sm:text-xl text-[#D1C7A1]">
                {t(`${template.name}.instructionsText`)}
              </p>
            </div>

            {/* Customization Information */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5E0A6]">
                {t(`${template.name}.customization`)}
              </h3>
              <p className="text-lg sm:text-xl text-[#D1C7A1]">
                {t(`${template.name}.customizationText`)}
              </p>
            </div>

            {/* Download / Purchase Button */}
            <div className="flex justify-center mt-8">
              <a
                href={`/download/${template.slug}`} // Adjust URL to template-specific link
                className="px-8 py-3 text-lg font-semibold text-white bg-[#F5E0A6] rounded-lg hover:bg-[#D1C7A1]"
              >
                {t(`${template.name}.downloadButton`)}
              </a>
            </div>
          </div>
        </div>
      </section>
    </AnimatedInView>
  );
}
