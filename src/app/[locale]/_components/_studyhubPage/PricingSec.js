import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

function PricingSec() {
  const t = useTranslations("TemplateSlug");

  return (
    <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 text-main leading-tight mt-24">
        Choose Your Plan
      </h2>

      <p className="text-lg sm:text-xl md:text-3xl text-muted-foreground mb-14 max-w-6xl leading-relaxed text-center mx-auto">
        Two options. Same goal: your academic success.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* BASIC (Standard) */}
        <div className="bg-white dark:bg-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-neutral-200 dark:border-neutral-700 shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-200">
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
              Basic
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4">
              A free, simplified version to get you started.
            </p>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-bold text-neutral-900 dark:text-white">
                $0
              </span>
            </div>
            <ul className="text-sm sm:text-base space-y-2 mb-6 text-neutral-800 dark:text-neutral-300">
              {[
                "Life time updates",
                "Courses (Simple)",
                "Assignments & Exams (Simple)",
                "Notes, Books (Simple)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-main" />
                  <span>{item}</span>
                </li>
              ))}
              {[
                "Modules & Lessons",
                "Dashboard Overview",
                "Weekly & Monthly Schedule",
                "Progress Tracker",
                "Tasks, Goals & Projects",
                "Habits & Journal",
                "Smart Filters & Automations",
                "Archive",
                "Linked Databases",
                "Advanced Views & Layouts",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-neutral-400"
                >
                  <XCircle className="w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="https://www.notion.so/marketplace/templates/studyhub-free"
            className="mt-auto inline-block w-full text-center bg-white dark:bg-neutral-800 text-black dark:text-white font-semibold py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 text-2xl focus-visible:ring-main"
          >
            Get for Free
          </Link>
        </div>

        {/* ADVANCED */}
        <div className="relative bg-main text-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow hover:shadow-lg hover:scale-[1.05] transition-transform duration-200">
          <span className="absolute top-4 right-4 bg-white text-main text-xs sm:text-sm font-medium px-2 py-0.5 rounded">
            Best Value
          </span>
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold mb-2">Advanced</h3>
            <p className="text-sm sm:text-base text-neutral-800 mb-4">
              Unlock your full academic productivity potential.
            </p>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-bold text-neutral-900 dark:text-white">
                $59
              </span>
              <span className="text-lg line-through text-neutral-600">$80</span>
            </div>
            <ul className="text-sm sm:text-base space-y-2 mb-6 text-black">
              {[
                "Life time updates",
                "Courses (Advanced)",
                "Modules & Lessons",
                "Assignments & Exams (Advanced)",
                "Review Hub",
                "Dashboard Overview",
                "Weekly & Monthly Schedule",
                "Progress Tracker",
                "Tasks, Goals & Projects",
                "Habits & Journal",
                "Smart Filters & Automations",
                "Archive",
                "Linked Databases",
                "Advanced Views & Layouts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="https://www.notion.so/marketplace/templates/studyhub-premium?checkout=true"
            className="mt-auto inline-block w-full text-center bg-black text-white font-semibold py-3 rounded-xl hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white text-2xl"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PricingSec;
