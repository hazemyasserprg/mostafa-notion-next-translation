import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

function PricingSec() {
  const t = useTranslations("TemplateSlug");

  return (
    <section
      id="pricing"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-24"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-main mb-12 text-center">
        Choose Your Plan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* STANDARD */}
        <div className="bg-white dark:bg-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-neutral-200 dark:border-neutral-700 shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-200">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
              Standard
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4">
              For individuals who want just the basics
            </p>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-bold text-neutral-900 dark:text-white">
                $45
              </span>
            </div>
            <ul className="text-sm sm:text-base space-y-2 mb-6 text-neutral-800 dark:text-neutral-300">
              {[
                "Incomes and expenses",
                "Wish List",
                "Loan Tracker",
                "Subscription Tracker",
                "Bill Tracker",
                "Reports",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-main" />
                  <span>{item}</span>
                </li>
              ))}
              {[
                "Neobanks",
                "Built-in financial institutions",
                "Investments/Stock Portfolio",
                "TradingView Charts/Widgets",
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
            href="/checkout/standard"
            className="mt-auto inline-block w-full text-center bg-white dark:bg-neutral-800 text-black dark:text-white font-semibold py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-main"
          >
            Buy Now
          </Link>
        </div>

        {/* ESSENTIALS */}
        <div className="relative bg-yellow-100/60 dark:bg-yellow-900/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-yellow-200 dark:border-main/20 shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-200">
          <span className="absolute top-4 right-4 bg-main text-black text-xs sm:text-sm font-medium px-2 py-0.5 rounded">
            MOST POPULAR
          </span>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-neutral-900 dark:text-white">
              Essentials
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mb-4">
              For users seeking expanded functionality
            </p>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-bold text-neutral-900 dark:text-white">
                $69
              </span>
              <span className="text-lg line-through text-neutral-400">
                $89.99
              </span>
            </div>
            <ul className="text-sm sm:text-base space-y-2 mb-6 text-neutral-800 dark:text-neutral-300">
              {[
                "Incomes and expenses",
                "Wish List",
                "Loan Tracker",
                "Subscription Tracker",
                "Bill Tracker",
                "Reports",
                "Neobanks",
                "Built-in financial institutions",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-main" />
                  <span>{item}</span>
                </li>
              ))}
              {[
                "Investments/Stock Portfolio",
                "TradingView Charts/Widgets",
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
            href="/checkout/essentials"
            className="mt-auto inline-block w-full text-center bg-main text-black font-semibold py-3 rounded-xl hover:bg-main/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
          >
            Buy Now
          </Link>
        </div>

        {/* ADVANCED */}
        <div className="relative bg-main text-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-200">
          <span className="absolute top-4 right-4 bg-white text-main text-xs sm:text-sm font-medium px-2 py-0.5 rounded">
            Best Value
          </span>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Advanced</h3>
            <p className="text-sm sm:text-base text-neutral-800 mb-4">
              Suited for users who want more features
            </p>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-bold">$79</span>
              <span className="text-lg line-through text-neutral-600">
                $119.99
              </span>
            </div>
            <ul className="text-sm sm:text-base space-y-2 mb-6 text-black">
              {[
                "Incomes and expenses",
                "Wish List",
                "Loan Tracker",
                "Subscription Tracker",
                "Bill Tracker",
                "Reports",
                "Neobanks",
                "Built-in financial institutions",
                "Investments/Stock Portfolio",
                "TradingView Charts/Widgets",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/checkout/advanced"
            className="mt-auto inline-block w-full text-center bg-black text-white font-semibold py-3 rounded-xl hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PricingSec;
