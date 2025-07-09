import Image from "next/image";
import AnimatedInView from "../AnimatedInView";
import CheckoutButton from "../CheckoutButton";
import GoToTemplatesPageButton from "../GoToTemplatesPageButton";
import { useTranslations } from "next-intl";
import HeroCoverImage from "./HeroCoverImage";

function HeroSec({ template }) {
  const t = useTranslations("TemplateSlug");

  return (
    <section
      id="home"
      className="relative w-full flex flex-col items-center text-center overflow-visible px-4 sm:px-8 lg:px-12 "
    >
      {/* Title */}
      <h1 className="flex flex-col items-center gap-4 mb-4 sm:mb-6">
        <Image
          src={t(`${template.name}.logo`)}
          alt={`${t(`${template.name}.name`)} Logo`}
          width={96}
          height={96}
          className="
            mx-auto 
            rounded-2xl 
            shadow-lg 
            bg-white/80 
            p-2 
            transition-transform 
            duration-300 
            hover:scale-105 
            hover:shadow-xl
          "
          quality={100}
          priority
        />
        <span
          className="
          text-3xl 
          sm:text-5xl 
          md:text-6xl 
          font-extrabold 
          tracking-tight 
          text-main 
          leading-tight
        "
        >
          {t(`${template.name}.name`)}
        </span>
      </h1>

      {/* Description */}
      <p
        className="
        text-base 
        sm:text-lg 
        md:text-2xl 
        text-muted-foreground 
        mb-8 
        sm:mb-10 
        max-w-2xl 
        leading-relaxed
      "
      >
        {t(`${template.name}.description`)}
      </p>

      {/* CTA Buttons */}
      <div
        className="
        flex flex-col sm:flex-row flex-wrap 
        justify-center items-center 
        gap-4 mb-10 sm:mb-12
      "
      >
        <a
          href="#dashboard"
          className="
            relative inline-block overflow-hidden 
            px-6 py-3 
            text-base sm:text-lg 
            font-semibold text-black 
            bg-white rounded-full group 
            shadow-lg hover:shadow-gray-300/50 
            hover:scale-105 
            transition-all duration-500 ease-in-out
          "
        >
          <span
            className="
            absolute top-0 left-0 w-full h-full 
            bg-main transform scale-x-0 
            group-hover:scale-x-100 
            transition-all duration-500 ease-in-out origin-left
          "
          />
          <span
            className="
            relative block transform 
            transition-all duration-300 ease-in-out 
            group-hover:text-white
          "
          >
            Dashboard
          </span>
        </a>

        <GoToTemplatesPageButton
          text="Check Prices"
          className="
            px-6 py-3 
            text-base sm:text-lg 
            font-semibold
          "
          initial=""
          transition=""
          href="#pricing"
        />
      </div>

      {/* Cover Image */}
      <div className="w-full max-w-6xl">
        <HeroCoverImage template={template} />
      </div>
    </section>
  );
}

export default HeroSec;
