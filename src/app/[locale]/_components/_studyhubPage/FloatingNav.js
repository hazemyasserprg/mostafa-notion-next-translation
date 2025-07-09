"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "dashboard", label: "Dashboard" },
  { id: "all-features", label: "All Features" },
  { id: "features", label: "Features" },
  { id: "databases", label: "Databases" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

export default function FloatingNav() {
  const [active, setActive] = useState("home");

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
        fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        sm:flex flex-wrap justify-center gap-2
        max-w-[95vw]
        px-4 py-2
        bg-neutral-900/80 backdrop-blur-md
        border border-neutral-800
        rounded-full shadow-lg
        hidden
      "
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className={`
            px-3 py-2 
            text-xs sm:text-sm md:text-base 
            rounded-full transition font-medium
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
