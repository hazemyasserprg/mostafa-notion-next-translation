"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DashboardImage({ template }) {
  const t = useTranslations("TemplateSlug");
  const scrollRef = useRef(null);
  const [showIndicators, setShowIndicators] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      setShowIndicators(el.scrollTop <= 10);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full sm:max-w-7xl rounded-none sm:rounded-3xl overflow-hidden shadow-xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-md relative mx-auto">
      <div
        ref={scrollRef}
        className="relative w-full h-[300px] sm:h-[500px] md:h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent"
      >
        <Image
          src={t(`${template.name}.dashboardSec.dashboardImageURL`)}
          alt={`${template.name} Full Page Screenshot`}
          width={1920}
          height={3000}
          className="w-full h-auto object-cover"
          priority
        />

        {showIndicators && (
          <>
            {/* Scroll-down indicator */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center pointer-events-none">
              <div className="flex flex-col items-center animate-bounce">
                <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-main" />
                <span className="text-xs sm:text-xl text-white mt-0.5">
                  Scroll to see more
                </span>
              </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          </>
        )}

        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
