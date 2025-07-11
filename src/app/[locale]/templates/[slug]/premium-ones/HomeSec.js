import Image from "next/image";
import GoToTemplatesPageButton from "../../../_components/GoToTemplatesPageButton";
import { useTranslations } from "next-intl";
import HeroCoverImage from "./_components/HeroCoverImage";

function Home({ template }) {
  const t = useTranslations("TemplateSlug");

  return (
    <section
      id="home"
      className="relative w-full 
    flex flex-col items-center text-center 
    overflow-visible 
    px-4 sm:px-8 lg:px-12 
    max-w-7xl mx-auto
    -mt-[50px]
  "
    >
      {/* Title */}
      <h1 className="flex flex-col items-center gap-4 mb-2 sm:mb-4 md:mb-6 max-w-2xl">
        <Image
          src={t(`${template.name}.homeSec.logoURL`)}
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
        md:text-7xl 
        font-extrabold 
        tracking-tight 
        text-main 
        leading-tight
      "
        >
          {t(`${template.name}.homeSec.title`)}
        </span>
      </h1>

      {/* Description */}
      <p
        className="
      text-base
      sm:text-xl 
      md:text-2xl 
      text-muted-foreground 
      mb-2 sm:mb-4 md:mb-6 
      max-w-3xl 
      leading-relaxed
    "
      >
        {t(`${template.name}.homeSec.description`)}
      </p>

      {/* CTA Buttons */}
      <div
        className="
      flex flex-col sm:flex-row flex-wrap 
      justify-center items-center 
      gap-2 mb-4 sm:mb-6 md:mb-8 mx-auto
      mt-2 sm:mt-0
    "
      >
        <a
          href="#pricing"
          className="
        relative inline-block overflow-hidden 
        px-6 py-3 
        text-base sm:text-lg 
        font-semibold text-black 
        bg-main rounded-full group 
        shadow-lg hover:shadow-gray-300/50 
        hover:scale-105 
        transition-all duration-500 ease-in-out
      "
        >
          <span
            className="
          absolute top-0 left-0 w-full h-full 
          bg-black transform scale-x-0 
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
            Get {t(`${template.name}.name`)}
          </span>
        </a>

        <GoToTemplatesPageButton
          text="Dashboard"
          className="
        px-6 py-3 
        text-base sm:text-lg 
        font-semibold
      "
          initial=""
          transition=""
          href="#dashboard"
        />
      </div>

      {/* Cover Image */}
      <div className="w-full max-w-6xl mt-4 md:mt-6">
        <HeroCoverImage template={template} />
      </div>
    </section>
  );
}

export default Home;
