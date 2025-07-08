import Image from "next/image";
import AnimatedInView from "../AnimatedInView";
import CheckoutButton from "../CheckoutButton";
import { useTranslations } from "next-intl";

function ScreenshotsDetails({ template }) {
  const t = useTranslations("TemplateSlug");

  return (
    <section id="features" className="w-full mt-32 space-y-24">
      {/* === Block 1 === */}
      <div
        className="max-w-7xl mx-auto rounded-3xl
            bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md
            border border-neutral-200 dark:border-neutral-800
            p-6 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10
            shadow-2xl"
      >
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-main mb-4">
            Organize Your Workflow Seamlessly
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
            With this template, you can track your classes, manage your
            assessments, and handle your finances effortlessly in a single
            organized space.
          </p>
          <CheckoutButton
            checkoutLink={t(`${template.name}.checkoutLink`)}
            checkoutText={t(`${template.name}.checkout`)}
          />
        </div>

        {/* Image */}
        <AnimatedInView>
          <div className="flex-1 w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700">
            <Image
              src={t(`${template.name}.screenshot`)}
              alt={`${template.name} Notion Template Screenshot`}
              width={1000}
              height={template.height ?? 1600}
              className="w-full h-auto object-cover rounded-2xl"
              priority
            />
          </div>
        </AnimatedInView>
      </div>

      {/* === Block 2 (Reversed) === */}
      <div
        className="max-w-7xl mx-auto rounded-3xl bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md
          border border-neutral-200 dark:border-neutral-800
          p-6 sm:p-12 flex flex-col lg:flex-row-reverse items-center justify-between gap-10
          shadow-2xl"
      >
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-main mb-4">
            Plan Your Semester with Clarity
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
            Map out your entire semester, track your study progress, and meet
            deadlines seamlessly with clear, organized planning.
          </p>
          <CheckoutButton
            checkoutLink={t(`${template.name}.checkoutLink`)}
            checkoutText={t(`${template.name}.checkout`)}
          />
        </div>

        {/* Image */}
        <AnimatedInView>
          <div className="flex-1 w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700">
            <Image
              src={t(`${template.name}.screenshot`)}
              alt={`${template.name} Notion Template Screenshot`}
              width={1000}
              height={template.height ?? 1600}
              className="w-full h-auto object-cover rounded-2xl"
              priority
            />
          </div>
        </AnimatedInView>
      </div>

      {/* === Block 3 === */}
      <div
        className="max-w-7xl mx-auto rounded-3xl
              bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md
              border border-neutral-200 dark:border-neutral-800
              p-6 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10
              shadow-2xl"
      >
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-main mb-4">
            Master Your Academic Life
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
            Track classes, assignments, and finances within one unified,
            powerful system to help you excel in your studies.
          </p>
          <CheckoutButton
            checkoutLink={t(`${template.name}.checkoutLink`)}
            checkoutText={t(`${template.name}.checkout`)}
          />
        </div>

        {/* Image */}
        <AnimatedInView>
          <div className="flex-1 w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700">
            <Image
              src={t(`${template.name}.screenshot`)}
              alt={`${template.name} Notion Template Screenshot`}
              width={1000}
              height={template.height ?? 1600}
              className="w-full h-auto object-cover rounded-2xl"
              priority
            />
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}

export default ScreenshotsDetails;
