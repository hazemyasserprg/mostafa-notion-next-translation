import { ChevronDown, CornerDownRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function FAQ({ template }) {
  const t = useTranslations("TemplateSlug");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const faqs = t.raw(`${template.name}.faqSec.faqs`);

  return (
    <section
      id="faq"
      className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32"
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-12 text-main leading-tight text-center">
        {t(`${template.name}.faqSec.title`)}
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="
              group rounded-xl
              border border-neutral-200 dark:border-neutral-700
              bg-white dark:bg-neutral-900
              p-3 sm:p-4
              transition-all duration-200
            "
          >
            <summary
              className={`
                flex items-center justify-between
                cursor-pointer list-none
              `}
            >
              <h3
                className={`
                  text-sm sm:text-base font-medium
                  text-neutral-900 dark:text-neutral-100
                  ${isRTL ? "text-right" : "text-left"}
                `}
              >
                {faq.question}
              </h3>
              <ChevronDown
                className={`
                  w-4 h-4 sm:w-5 sm:h-5 text-main
                  group-open:rotate-180
                  transform transition-transform duration-300
                `}
              />
            </summary>
            <p
              className={`
                mt-2 flex items-start gap-2
                text-sm sm:text-base
                text-neutral-700 dark:text-neutral-300
                ${isRTL ? "text-right" : "text-left"}
              `}
            >
              <CornerDownRight
                className={`
    w-4 h-4 mt-0.5 text-main shrink-0
    ${isRTL ? "scale-x-[-1]" : ""}
  `}
              />
              <span>{faq.answer}</span>
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
