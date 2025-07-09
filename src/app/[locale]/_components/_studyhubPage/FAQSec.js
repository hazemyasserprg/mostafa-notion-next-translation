import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

function FAQSec() {
  const t = useTranslations("TemplateSlug");

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and Apple Pay for secure and fast checkout.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, if you're not satisfied with your template within 7 days of purchase, we offer a full refund—no questions asked.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Absolutely! You can upgrade from Standard to Essentials or Advanced anytime by paying only the price difference.",
    },
    {
      question: "How will I receive the template after purchase?",
      answer:
        "You'll get instant access via email with a link to duplicate the Notion template directly into your workspace.",
    },
  ];

  return (
    <section
      id="faq"
      className="
        max-w-3xl mx-auto
        px-4 sm:px-6 lg:px-8
        mt-24
      "
    >
      <h2
        className="
          text-3xl sm:text-4xl md:text-5xl
          font-extrabold
          text-main
          mb-10
          text-center
          leading-tight
        "
      >
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="
              group rounded-2xl
              border border-neutral-200 dark:border-neutral-700
              bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md
              p-4 sm:p-6
              shadow-sm hover:shadow-md
              transition-all duration-300 ease-out
              overflow-hidden
            "
          >
            <summary
              className="
                flex items-center justify-between
                cursor-pointer list-none
                py-2 sm:py-3
                hover:text-main
                transition-colors duration-200
              "
            >
              <h3
                className="
                  text-lg sm:text-xl md:text-2xl
                  font-semibold
                  text-neutral-900 dark:text-neutral-100
                  transition-colors duration-200
                "
              >
                {faq.question}
              </h3>
              <ChevronDown
                className="
                  w-5 h-5 sm:w-6 sm:h-6
                  text-main
                  group-open:rotate-180
                  transform transition-transform duration-300
                "
              />
            </summary>
            <p
              className="
                mt-3 sm:mt-4
                text-base sm:text-lg
                text-neutral-700 dark:text-neutral-300
                leading-relaxed
              "
            >
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQSec;
