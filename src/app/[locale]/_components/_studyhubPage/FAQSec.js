import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

function FAQSec() {
  const t = useTranslations("TemplateSlug");

  const faqs = [
    {
      question: "What is Notion?",
      answer:
        "Notion is your all-in-one digital workspace — a second brain where you can organize notes, tasks, courses, goals, and everything in between. It’s flexible, intuitive, and perfect for students who want full control over their academic life.",
    },
    {
      question: "How do I get access to the template?",
      answer:
        "Once you complete your purchase, you'll instantly receive an email with a link to duplicate the StudyHub template to your Notion workspace — no waiting.",
    },
    {
      question: "Do I need a paid Notion account?",
      answer:
        "No. You can use StudyHub with Notion’s free plan — no upgrades required.",
    },
    {
      question: "Will I know how to use it?",
      answer:
        "Yes. The template comes with detailed video tutorials and in-system written guidance to walk you through everything step-by-step.",
    },
    {
      question: "Is it worth the price?",
      answer:
        "Definitely. Instead of spending hours building a system from scratch, you get instant access to a professionally designed academic dashboard that’s ready to use. StudyHub saves you time, enhances your focus, and helps you stay on top of your learning journey.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "You are eligible for a refund if you initiate a refund request within 14 days of purchase. This follows the Marketplace refund policy where this template is distributed.",
    },
    {
      question: "Still have questions?",
      answer:
        "Feel free to email me at contact@mostafayasser.com or DM me on Twitter — I’m happy to assist anytime.",
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
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 text-main leading-tight mt-24">
        Frequently asked questions
      </h2>

      <p className="text-lg sm:text-xl md:text-3xl text-muted-foreground mb-14 max-w-6xl leading-relaxed text-center mx-auto">
        If you still have questions, feel free to get in touch with us.
      </p>

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
