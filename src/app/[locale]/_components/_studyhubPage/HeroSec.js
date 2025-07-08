import Image from "next/image";
import AnimatedInView from "../AnimatedInView";
import CheckoutButton from "../CheckoutButton";
import GoToTemplatesPageButton from "../GoToTemplatesPageButton";
import { useTranslations } from "next-intl";

function HeroSec({ template }) {
  const t = useTranslations("TemplateSlug");

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col items-center text-center overflow-visible px-4"
    >
      {/* Title */}
      <h1 className="flex flex-col items-center gap-4 mb-6">
        <Image
          src={t(`${template.name}.logo`)}
          alt={`${t(`${template.name}.name`)} Logo`}
          width={96}
          height={96}
          className="mx-auto rounded-2xl shadow-lg"
          priority
        />
        <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-main leading-tight">
          {t(`${template.name}.name`)}
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
        {t(`${template.name}.description`)}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
        <CheckoutButton
          checkoutLink={t(`${template.name}.checkoutLink`)}
          checkoutText={t(`${template.name}.checkout`)}
          className="px-6 py-3 text-base sm:text-lg font-semibold"
        />
        <GoToTemplatesPageButton
          text="Explore Other Templates"
          className="px-6 py-3 text-base sm:text-lg font-semibold"
          initial=""
          transition=""
        />
      </div>

      {/* Background Gradients */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-52 h-[70%] rounded-full bg-main/20 blur-[120px] -z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-52 h-[70%] rounded-full bg-main/20 blur-[120px] -z-20 pointer-events-none"></div>
      <div className="absolute inset-0 flex justify-center items-center -z-10 pointer-events-none">
        <div className="w-[85%] h-[85%] max-w-4xl rounded-3xl bg-white/30 dark:bg-neutral-900/30 blur-[120px]"></div>
      </div>

      {/* Screenshot */}
      <div className="w-full max-w-4xl sm:w-[70%] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 relative z-10">
        <AnimatedInView>
          <Image
            src={t(`${template.name}.screenshot`)}
            alt={`${template.name} Notion Template Screenshot`}
            width={1200}
            height={template.height ?? 3000}
            className="w-full h-auto object-cover rounded-3xl"
            priority
          />
        </AnimatedInView>
      </div>
    </section>
  );
}

export default HeroSec;
