import Image from "next/image";
import AnimatedInView from "../AnimatedInView";
import CheckoutButton from "../CheckoutButton";
import FadeInFromLeft from "../FadeInFromLeft";

function ScreenshotsDetails() {
  return (
    <section
      id="walkthrough"
      className="w-full mt-24 sm:mt-32 space-y-24 px-4 sm:px-8"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-main leading-tight text-center">
        A Visual Walkthrough of StudyHub
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl leading-relaxed text-center mx-auto">
        Take a closer look at how StudyHub helps you manage your academic life —
        from planning and studying to tracking progress and setting goals.
      </p>
      {/* === Blocks === */}
      {[
        {
          title: "Organize What You Study & When You Study",
          description:
            "View all your courses alongside your weekly schedule. Stay on track with what you're learning and exactly when you need to focus on it — all in one smart layout.",
          image: "/study-hub/designs/25.webp",
          reverse: false,
        },
        {
          title: "Structured Learning from Modules to Lessons",
          description:
            "Break down your courses into clear modules and lessons. Easily track what you've covered and what's next — no more scattered materials or missed topics.",
          image: "/study-hub/designs/26.webp",
          reverse: true,
        },
        {
          title: "Stay Ahead of Every Deadline",
          description:
            "Track all your assignments, tasks, and exams in one place. With smart filters and reminders, you'll never miss an important date again.",
          image: "/study-hub/designs/27.webp",
          reverse: false,
        },
        {
          title: "Read, Capture, and Explore",
          description:
            "Access your reading list, study notes, and valuable resources — all in one place. StudyHub keeps your knowledge organized, searchable, and always at your fingertips.",
          image: "/study-hub/designs/28.webp",
          reverse: true,
        },
        {
          title: "Set Goals. Build Projects. Make Progress.",
          description:
            "Turn your academic vision into action. Track long-term goals and manage projects with clear steps, deadlines, and progress indicators.",
          image: "/study-hub/designs/29.webp",
          reverse: false,
        },
      ].map((block, index) => (
        <div
          key={index}
          className={`max-w-7xl mx-auto rounded-3xl bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 p-6 sm:p-12 flex flex-col ${
            block.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center justify-between gap-4 sm:gap-20 shadow-2xl`}
        >
          {/* Text */}
          <div className="flex-[1.2] text-center lg:text-left">
            <FadeInFromLeft>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-main mb-4 leading-tight">
                {block.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {block.description}
              </p>
            </FadeInFromLeft>
          </div>

          {/* Image */}
          <AnimatedInView>
            <div className="flex-[0.8] w-full max-w-xl rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700">
              <Image
                src={block.image}
                alt="Notion Template Screenshot"
                width={1200}
                height={1600}
                className="w-full h-auto max-h-[75vh] object-cover rounded-2xl"
                priority
              />
            </div>
          </AnimatedInView>
        </div>
      ))}
      {/* === Horizontal Blocks === */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Block 4 */}
        <div className="flex-1 flex flex-col items-center rounded-3xl bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 p-6 sm:p-10 lg:p-12 shadow-2xl w-full h-full gap-4">
          <div className="text-center">
            <FadeInFromLeft>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-main mb-4 leading-tight">
                Everything About Your Course — In One Place
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                Click into any course to access all related tasks, exams, notes,
                resources, and more. StudyHub connects every detail so you can
                focus on learning, not searching.
              </p>
            </FadeInFromLeft>
          </div>
          <AnimatedInView className="sm:mt-10 w-full">
            <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700">
              <Image
                src="/study-hub/designs/30.webp"
                alt="Notion Template Screenshot"
                width={1600}
                height={1600}
                className="w-full h-auto max-h-[75vh] object-cover rounded-2xl"
                priority
              />
            </div>
          </AnimatedInView>
        </div>

        {/* Block 5 */}
        <div className="flex-1 flex flex-col items-center rounded-3xl bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 p-6 sm:p-10 lg:p-12 shadow-2xl w-full h-full gap-4">
          <div className="text-center">
            <FadeInFromLeft>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-main mb-4 leading-tight">
                Track Your Progress Like Never Before
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                Get a complete overview of your academic and personal growth —
                from finished courses and assignments to achieved goals and
                habits. Stay motivated with real-time progress insights.
              </p>
            </FadeInFromLeft>
          </div>
          <AnimatedInView className="w-full">
            <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700">
              <Image
                src="/study-hub/designs/31.webp"
                alt="Notion Template Screenshot"
                width={1600}
                height={1600}
                className="w-full h-auto max-h-[75vh] object-cover rounded-2xl"
                priority
              />
            </div>
          </AnimatedInView>
        </div>
      </div>
    </section>
  );
}

export default ScreenshotsDetails;
