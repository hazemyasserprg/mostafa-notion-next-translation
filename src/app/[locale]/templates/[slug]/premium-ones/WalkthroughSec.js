import Image from "next/image";
import AnimatedInView from "../../../_components/AnimatedInView";
import FadeInFromLeft from "../../../_components/FadeInFromLeft";
import { useTranslations, useLocale } from "next-intl";

function Walkthrough({ template }) {
  const t = useTranslations("TemplateSlug");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const rowBlocks = Object.keys(
    t.raw(`${template.name}.walkthroughSec.rowBlocks`)
  );

  return (
    <section
      id="walkthrough"
      className="w-full mt-24 sm:mt-32 space-y-24 px-4 sm:px-8"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-main leading-tight text-center">
        {t(`${template.name}.walkthroughSec.title`)}
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl leading-relaxed text-center mx-auto">
        {t(`${template.name}.walkthroughSec.description`)}
      </p>

      {/* === row Blocks === */}
      {rowBlocks.map((block, index) => (
        <div
          key={index}
          className={`
            max-w-7xl mx-auto rounded-3xl
            bg-white/70 dark:bg-neutral-900/50
            backdrop-blur-md border border-neutral-200 dark:border-neutral-800
            p-6 sm:p-12 flex flex-col
            ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}
            items-center justify-between gap-6 sm:gap-16
            shadow-xl hover:shadow-2xl
            transform hover:-translate-y-1
            transition-all duration-300 ease-out
          `}
        >
          {/* === Text === */}
          <div
            className={`flex-[1.2] text-center ${isRTL ? "lg:text-right" : "lg:text-left"
              }`}
          >
            <FadeInFromLeft>
              <h3
                className="
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                  font-extrabold text-main mb-4 leading-tight
                "
              >
                {t(`${template.name}.walkthroughSec.rowBlocks.${block}.title`)}
              </h3>
              <p
                className="
                  text-base sm:text-lg md:text-xl lg:text-2xl
                  text-muted-foreground mb-6
                  leading-relaxed max-w-2xl mx-auto lg:mx-0
                "
              >
                {t(
                  `${template.name}.walkthroughSec.rowBlocks.${block}.description`
                )}
              </p>
            </FadeInFromLeft>
          </div>

          {/* === Image === */}
          <AnimatedInView>
            <div className="flex-[0.8] w-full max-w-xl rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700">
              <Image
                src={t(
                  `${template.name}.walkthroughSec.rowBlocks.${block}.image`
                )}
                alt={t(
                  `${template.name}.walkthroughSec.rowBlocks.${block}.title`
                )}
                width={1200}
                height={1600}
                className="w-full h-auto max-h-[75vh] object-cover rounded-2xl"
                priority
              />
            </div>
          </AnimatedInView>
        </div>
      ))}

      {/* === column Blocks === */}
      {t.raw(`${template.name}.walkthroughSec`)?.columnBlocks && (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Block 4 */}
          <div className="flex-1 flex flex-col items-center rounded-3xl bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 p-6 sm:p-10 lg:p-12 shadow-2xl w-full h-full gap-4">
            <div className="text-center">
              <FadeInFromLeft>
                <h3
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-main mb-4 leading-tight`}
                >
                  {t(
                    `${template.name}.walkthroughSec.columnBlocks.firstOne.title`
                  )}
                </h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                  {t(
                    `${template.name}.walkthroughSec.columnBlocks.firstOne.description`
                  )}
                </p>
              </FadeInFromLeft>
            </div>
            <AnimatedInView className="w-full">
              <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700">
                <Image
                  src={t(
                    `${template.name}.walkthroughSec.columnBlocks.firstOne.image`
                  )}
                  alt="Notion Template Screenshot"
                  width={1600}
                  height={1600}
                  className="w-full h-auto max-h-[75vh] object-cover rounded-2xl"
                  priority
                />
              </div>
            </AnimatedInView>
          </div>

          {/* Block 5 */}
          <div className="flex-1 flex flex-col items-center rounded-3xl bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 p-6 sm:p-10 lg:p-12 shadow-2xl w-full h-full gap-4">
            <div className="text-center">
              <FadeInFromLeft>
                <h3
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-main mb-4 leading-tight`}
                >
                  {t(
                    `${template.name}.walkthroughSec.columnBlocks.secondOne.title`
                  )}
                </h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                  {t(
                    `${template.name}.walkthroughSec.columnBlocks.secondOne.description`
                  )}
                </p>
              </FadeInFromLeft>
            </div>
            <AnimatedInView className="w-full">
              <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700">
                <Image
                  src={t(
                    `${template.name}.walkthroughSec.columnBlocks.secondOne.image`
                  )}
                  alt="Notion Template Screenshot"
                  width={1600}
                  height={1600}
                  className="w-full h-auto max-h-[75vh] object-cover rounded-2xl"
                  priority
                />
              </div>
            </AnimatedInView>
          </div>
        </div>
      )}
    </section>
  );
}

export default Walkthrough;
