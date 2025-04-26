"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import BlurText from "@/src/app/[locale]/_components/BlurText";

export default function TemplateDetailsClient({ template }) {
  const t = useTranslations("TemplateSlug");
  const locale = useLocale();

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
          <p
            className={`text-base md:text-lg text-muted mt-4 ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
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
