import { ChevronDown, CornerDownRight } from "lucide-react";
import { useTranslations } from "next-intl";

function FAQSec() {
  const t = useTranslations("TemplateSlug");

  const faqs = [
    {
      question: "What is Notion?",
      answer:
        "Notion is your all-in-one digital workspace — a second brain where you can organize notes, tasks, courses, goals, and everything in between.",
    },
    {
      question: "How do I get access to the template?",
      answer:
        "Once you complete your purchase, you'll instantly receive an email with a link to duplicate the StudyHub template to your Notion workspace.",
    },
    {
      question: "Do I need a paid Notion account?",
      answer: "No. You can use StudyHub with Notion’s free plan.",
    },
    {
      question: "Will I know how to use it?",
      answer:
        "Yes. It comes with detailed video tutorials and in-system written guidance to walk you through everything step-by-step.",
    },
    {
      question: "Is it worth the price?",
      answer:
        "Definitely. You save hours building from scratch and get a professionally designed academic dashboard ready to use immediately.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "You can request a refund within 14 days of purchase following the Marketplace refund policy.",
    },
    {
      question: "Still have questions?",
      answer:
        "Email me at contact@mostafayasser.com or DM me on Twitter anytime.",
    },
  ];

  return (
    <section id="faq" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-12 text-main leading-tight mt-24">
        FAQ
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
              className="
                flex items-center justify-between
                cursor-pointer list-none
              "
            >
              <h3
                className="
                  text-sm sm:text-base font-medium
                  text-neutral-900 dark:text-neutral-100
                "
              >
                {faq.question}
              </h3>
              <ChevronDown
                className="
                  w-4 h-4 sm:w-5 sm:h-5 text-main
                  group-open:rotate-180
                  transform transition-transform duration-300
                "
              />
            </summary>
            <p
              className="
    mt-2 flex items-start gap-2
    text-sm sm:text-base
    text-neutral-700 dark:text-neutral-300
    text-left
  "
            >
              <CornerDownRight className="w-4 h-4 mt-0.5 text-main shrink-0" />
              <span>{faq.answer}</span>
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQSec;
