import { useTranslations } from "next-intl";
import {
  Banknote,
  Coins,
  PieChart,
  FileBarChart2,
  Target,
  LineChart,
  CreditCard,
  Bell,
  Trophy,
} from "lucide-react";

function FeacturesSec() {
  const t = useTranslations("TemplateSlug");

  const features = [
    {
      title: "Account Management",
      description:
        "Take control of your finances by categorizing income and expenses across accounts, providing a crystal-clear view of where your money flows.",
      icon: Banknote,
    },
    {
      title: "Income & Expense",
      description:
        "Easily monitor your income, expenses, budgets, and financial goals—all seamlessly managed in one powerful system.",
      icon: Coins,
    },
    {
      title: "Budget Tracking",
      description:
        "Effortlessly track your budget, monitor spending, and stay on top of your financial goals with real-time insights.",
      icon: PieChart,
    },
    {
      title: "Financial Reports",
      description:
        "Access detailed reports monthly, quarterly, yearly, to gain insights into your financial performance and make informed decisions.",
      icon: FileBarChart2,
    },
    {
      title: "Financial Goals",
      description:
        "Set, track, and achieve your financial goals with clear milestones and actionable plans tailored to your ambitions.",
      icon: Target,
    },
    {
      title: "Investment Tracker",
      description:
        "Monitor your investments and watch your wealth grow with a clear overview of your portfolio's performance.",
      icon: LineChart,
    },
    {
      title: "Debts and Liabilities",
      description:
        "Take charge of your debt—track, manage, and conquer your financial obligations with ease.",
      icon: CreditCard,
    },
    {
      title: "Subscriptions Tracker",
      description:
        "Stay on top of all your subscriptions by tracking renewals, costs, and cancellation dates in one organized place.",
      icon: Bell,
    },
    {
      title: "Net Worth Tracker",
      description:
        "Track your net worth over time and celebrate your progress towards financial stability.",
      icon: Trophy,
    },
  ];

  return (
    <section
      id="all-features"
      className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-24"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-main mb-8 text-center">
        All-in-One Finance Management
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-3xl bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-2xl hover:shadow-3xl transition-transform duration-300 ease-out group"
          >
            <div className="flex items-center gap-3 mb-4">
              <feature.icon className="w-6 h-6 text-main group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {feature.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeacturesSec;
