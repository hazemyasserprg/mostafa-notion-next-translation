// "use client";

// import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import BlurText from "@/src/app/[locale]/_components/BlurText";
// import MoreDetails from "@/src/app/[locale]/_components/MoreDetails"; // Assuming MoreDetails is the new content component.
import AnimatedInView from "@/src/app/[locale]/_components/AnimatedInView";

export default function TemplateDetailsClient({ template }) {
  const t = useTranslations("TemplateSlug");
  const locale = useLocale();
  // const [showMore, setShowMore] = useState(false); // State to toggle between the template details and more details.

  return (
    <BlurText>
      <AnimatedInView>
        {/* Display the image and text content if `showMore` is false */}
        {/* {!showMore ? ( */}
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
              <button
                onClick={() => setShowMore(true)} // Trigger to show the "More Details"
                className="cursor-pointer relative inline-block overflow-hidden px-6 py-3 font-medium text-white bg-black rounded-full group shadow-secondary"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left" />

                <span className="relative block text-lg transform transition-all duration-300 ease-in-out group-hover:text-main">
                  {t(`${template.name}.moreDetails`)}
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* ) */}
        {/* : (
          <MoreDetails template={template} />
        )} */}
      </AnimatedInView>
    </BlurText>
  );
}
