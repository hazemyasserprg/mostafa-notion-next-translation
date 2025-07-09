"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";

/**
 * ImagePreviewModal component
 */
function ImagePreviewModal({ isOpen, onClose, imageSrc, alt }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal Content */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="
                  relative w-full max-w-5xl max-h-[90vh] overflow-hidden
                  rounded-3xl bg-neutral-900 shadow-2xl
                "
              >
                <button
                  onClick={onClose}
                  className="
                    absolute top-3 right-3 z-10 text-white hover:text-neutral-300
                    p-2 rounded-full bg-neutral-700/50 hover:bg-neutral-600/70
                  "
                  aria-label="Close preview"
                >
                  <X className="w-6 h-6" />
                </button>
                {imageSrc && (
                  <div className="relative w-full h-[70vh] sm:h-[80vh]">
                    <Image
                      src={imageSrc}
                      alt={alt || "Preview"}
                      fill
                      className="object-contain rounded-3xl"
                      priority
                      sizes="100vw"
                    />
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

/**
 * ScreenshotsPreviewSection component
 */
export default function ScreenshotsPreviewSection() {
  const [previewSrc, setPreviewSrc] = useState(null);
  const [previewAlt, setPreviewAlt] = useState("");

  const featureImages = [
    {
      title: "Courses",
      description:
        "Organize all your academic courses in one place — each with linked lessons, tasks, notes, and progress.",
      image: "/study-hub/screenshots/1.webp",
    },
    {
      title: "Modules",
      description:
        "Break down each course into structured modules or units for easier navigation and focused learning.",
      image: "/study-hub/screenshots/2.webp",
    },
    {
      title: "Lessons",
      description:
        "Track individual lessons, their topics, progress, and related materials — all connected to your modules and courses.",
      image: "/study-hub/screenshots/3.webp",
    },
    {
      title: "Assignments",
      description:
        "Stay on top of every assignment, due date, and submission with smart filters and priority tags.",
      image: "/study-hub/screenshots/4.webp",
    },
    {
      title: "Exams",
      description:
        "Plan and prepare for upcoming quizzes, midterms, and finals — with space for dates, study material, and linked courses.",
      image: "/study-hub/screenshots/5.webp",
    },
    {
      title: "Instructors",
      description:
        "Manage details for all your professors and instructors, including contact info and courses they teach.",
      image: "/study-hub/screenshots/6.webp",
    },
    {
      title: "Schedule",
      description:
        "Visualize your weekly timetable — classes, sessions, and events all organized and easy to access.",
      image: "/study-hub/screenshots/7.webp",
    },
    {
      title: "Notes",
      description:
        "Capture and organize your study notes, ideas, and summaries — linked to lessons and courses.",
      image: "/study-hub/screenshots/8.webp",
    },
    {
      title: "Resources",
      description:
        "Store useful materials like PDFs, links, and videos, categorized and tagged for easy access.",
      image: "/study-hub/screenshots/9.webp",
    },
    {
      title: "Flow",
      description:
        "Build daily consistency with integrated Habits and Journaling — boost focus and self-reflection.",
      image: "/study-hub/screenshots/10.webp",
    },
    {
      title: "Books",
      description:
        "Track your current and past readings, with progress bars, categories, and personal ratings.",
      image: "/study-hub/screenshots/11.webp",
    },
    {
      title: "Archive",
      description:
        "Move completed courses, lessons, and tasks here to keep your workspace clean and focused.",
      image: "/study-hub/screenshots/12.webp",
    },
    {
      title: "Goals",
      description:
        "Define academic and personal goals, track progress, and break them into actionable steps.",
      image: "/study-hub/screenshots/13.webp",
    },
    {
      title: "Projects",
      description:
        "Manage long-term assignments, research, or capstone projects — with status, deadlines, and subtasks.",
      image: "/study-hub/screenshots/14.webp",
    },
    {
      title: "Tasks",
      description:
        "All your to-dos in one place — assignments, reviews, chores, and more, with flexible filters and views.",
      image: "/study-hub/screenshots/15.webp",
    },
  ];

  return (
    <>
      <section
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mt-24 sm:mt-32"
        id="databases"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 text-main leading-tight">
          The Backbone of StudyHub
        </h2>

        <p className="text-lg sm:text-xl md:text-3xl text-muted-foreground mb-14 max-w-6xl leading-relaxed text-center mx-auto">
          At the heart of StudyHub is a powerful system of interconnected
          databases designed to organize, connect, and simplify your entire
          academic journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featureImages.map((feature, index) => (
            <div
              key={index}
              onClick={() => {
                setPreviewSrc(feature.image);
                setPreviewAlt(feature.title);
              }}
              className="
                group cursor-zoom-in rounded-3xl overflow-hidden
                bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md
                border border-neutral-200 dark:border-neutral-800
                shadow-xl hover:shadow-2xl hover:scale-[1.02]
                transition-transform duration-200
                flex flex-col items-center text-center p-4 sm:p-6
              "
            >
              <div className="relative w-full aspect-[4/3] mb-4 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ImagePreviewModal
        isOpen={!!previewSrc}
        onClose={() => setPreviewSrc(null)}
        imageSrc={previewSrc}
        alt={previewAlt}
      />
    </>
  );
}
