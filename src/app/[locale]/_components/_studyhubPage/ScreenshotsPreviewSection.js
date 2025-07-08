"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { X, CheckCircle } from "lucide-react";
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
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 text-white hover:text-neutral-300"
                  aria-label="Close preview"
                >
                  <X className="w-6 h-6 cursor-pointer" />
                </button>
                {imageSrc && (
                  <div className="relative w-full h-[80vh]">
                    <Image
                      src={imageSrc}
                      alt={alt || "Preview"}
                      fill
                      className="object-contain rounded-3xl"
                      priority
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
      title: "Budget Tracking",
      description:
        "Effortlessly track your budget, monitor spending, and stay on top of your financial goals with real-time insights.",
      image: "/moreDetials/screenshot.png",
    },
    {
      title: "Income Tracker",
      description:
        "Easily manage and monitor all your income streams to stay on top of your earnings and financial growth.",
      image: "/moreDetials/screenshot.png",
    },
    {
      title: "Expense Tracker",
      description:
        "Keep a close eye on your spending habits, track every expense, and maintain control over your finances.",
      image: "/moreDetials/screenshot.png",
    },
    {
      title: "Accounts Overview",
      description:
        "Manage all your financial accounts in one place with clear insights into your assets and liabilities.",
      image: "/moreDetials/screenshot.png",
    },
  ];

  return (
    <>
      <section
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-32"
        id="screenshots"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-main mb-4 text-center">
          Seamless Finance Management Tools
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto leading-relaxed">
          Visualize your workflow and track your financial goals with these
          powerful tools designed for clarity and control.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white mb-2">
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
