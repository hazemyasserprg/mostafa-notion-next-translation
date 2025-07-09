import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function MainScreenshotSec({ template }) {
  const t = useTranslations("TemplateSlug");

  return (
    <section
      id="dashboard"
      className="mt-16 sm:mt-24 lg:mt-32 w-full px-4 flex flex-col items-center text-center"
    >
      <h2
        className="
        text-2xl 
        sm:text-4xl 
        md:text-5xl 
        font-extrabold 
        mb-4 sm:mb-6 
        text-main 
        leading-tight
      "
      >
        Take Complete Control of Your Life with Notion
      </h2>

      <p
        className="
        text-base 
        sm:text-lg 
        md:text-2xl 
        text-muted-foreground 
        mb-6 sm:mb-10 
        max-w-2xl 
        leading-relaxed
      "
      >
        Built on the proven PARA organization method, Second Brain OS has
        everything you need to organize your life seamlessly. <br /> Discover
        the main dashboard.
      </p>

      <div
        className="
        w-full 
        max-w-7xl 
        rounded-3xl 
        overflow-hidden 
        shadow-xl 
        border border-neutral-800 
        bg-neutral-900/60 
        backdrop-blur-md 
        relative mx-auto
      "
      >
        <div
          className="
          relative w-full 
          h-[400px] 
          sm:h-[500px] 
          md:h-[600px] 
          overflow-y-auto 
          scrollbar-thin 
          scrollbar-thumb-neutral-700 
          scrollbar-track-transparent
        "
        >
          <Image
            src={t(`${template.name}.dashboard`)}
            alt={`${template.name} Full Page Screenshot`}
            width={1920}
            height={template.bigHeight ?? 3000}
            className="w-full h-auto object-cover"
            priority
          />

          {/* Scroll-down indicator */}
          <div
            className="
            absolute bottom-4 left-0 
            w-full flex justify-center 
            pointer-events-none
          "
          >
            <div className="flex flex-col items-center animate-bounce">
              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-main" />
              <span className="text-xs sm:text-sm text-white mt-0.5">
                Scroll to see more
              </span>
            </div>
          </div>

          {/* Top & bottom gradient fades */}
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

export default MainScreenshotSec;
