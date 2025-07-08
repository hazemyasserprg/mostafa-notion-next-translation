"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "dashboard", label: "Dashboard" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "all-features", label: "All Features" },
  { id: "screenshots", label: "Screenshots" },
];

export default function FloatingNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActive(section.id);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleClick = (id) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2 z-50
        flex flex-row gap-2 px-4 py-2
        bg-neutral-900/80 backdrop-blur-md
        border border-neutral-800
        rounded-full shadow-lg
        transition
      "
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className={`
            px-3 py-1.5 text-xs sm:text-sm rounded-full transition font-medium
            ${
              active === section.id
                ? "bg-main text-black shadow-sm"
                : "text-neutral-300 hover:bg-main/20 hover:text-white"
            }
            cursor-pointer
          `}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
}
