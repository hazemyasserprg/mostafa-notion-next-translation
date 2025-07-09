import { useTranslations } from "next-intl";
import {
  LayoutDashboard,
  Calendar,
  PlusSquare,
  BarChart3,
  BookOpen,
  CheckSquare,
  Notebook,
  BookMarked,
  Repeat,
  Target,
  CalendarDays,
  Database,
} from "lucide-react";

function FeacturesSec() {
  const t = useTranslations("TemplateSlug");

  const features = [
    {
      title: "Dashboard Overview",
      description:
        "A sleek central hub that summarizes your academic life: progress, weekly schedule, and quick actions.",
      icon: LayoutDashboard,
    },
    {
      title: "Schedule Section",
      description:
        "Plan your week with a clear and organized breakdown of your daily classes.",
      icon: Calendar,
    },
    {
      title: "Quick Actions Panel",
      description:
        "Easily add new lessons, instructors, notes, or goals with a single click.",
      icon: PlusSquare,
    },
    {
      title: "Progress Tracker",
      description:
        "Automatically updated analytics to help you measure academic performance over time.",
      icon: BarChart3,
    },
    {
      title: "Learning Hub",
      description:
        "Manage all your current and upcoming courses in one smart space.",
      icon: BookOpen,
    },
    {
      title: "To-Do Hub",
      description:
        "Stay on top of your tasks, assignments, and exams with smart date filters like Today, Upcoming, and Missed.",
      icon: CheckSquare,
    },
    {
      title: "Review Hub",
      description:
        "Keep all your learning resources and notes organized for easy access and review.",
      icon: Notebook,
    },
    {
      title: "Reading Side",
      description:
        "Track your current reads and monitor completion rates to stay consistent with your learning goals.",
      icon: BookMarked,
    },
    {
      title: "Flow Section",
      description:
        "Build daily consistency through habit tracking and journaling.",
      icon: Repeat,
    },
    {
      title: "Mission Hub",
      description:
        "Set long-term academic goals and follow your progress toward achieving them.",
      icon: Target,
    },
    {
      title: "Monthly View",
      description:
        "A calendar view that brings together your exams, tasks, notes, and events all in one place.",
      icon: CalendarDays,
    },
    {
      title: "Pre-built Databases",
      description:
        "A modular system with dedicated databases for courses, tasks, exams, instructors, resources, notes, and more.",
      icon: Database,
    },
  ];

  return (
    <section
      id="essentials"
      className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        mt-24
      "
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 text-main leading-tight">
        Everything You Need — In One Place
      </h2>

      <p className="text-lg sm:text-xl md:text-3xl text-muted-foreground mb-14 max-w-6xl leading-relaxed text-center mx-auto">
        Discover the core features that make StudyHub your ultimate
        academic companion.
      </p>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6 sm:gap-8 lg:gap-10
        "
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              rounded-3xl
              bg-white/70 dark:bg-neutral-900/50
              backdrop-blur-md
              p-6 sm:p-8
              border border-neutral-200 dark:border-neutral-700
              shadow-xl hover:shadow-2xl
              transform hover:-translate-y-1
              transition-all duration-300 ease-out
              group
              flex flex-col
              h-full
            "
          >
            <div className="flex items-center gap-3 mb-4">
              <feature.icon
                className="
                  w-6 h-6 sm:w-7 sm:h-7
                  text-main
                  group-hover:scale-110
                  transition-transform duration-300
                "
              />
              <h3
                className="
                  text-lg sm:text-xl md:text-2xl
                  font-semibold
                  text-neutral-900 dark:text-neutral-100
                  leading-tight
                "
              >
                {feature.title}
              </h3>
            </div>
            <p
              className="
                text-sm sm:text-base
                text-neutral-700 dark:text-neutral-300
                leading-relaxed
                max-w-prose
              "
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeacturesSec;
