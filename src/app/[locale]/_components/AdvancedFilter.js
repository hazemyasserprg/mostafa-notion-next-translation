"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Filter, ChevronDown } from "lucide-react";

export default function AdvancedFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("TemplatesPage.filters.pricing");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const pricingOptions = [
    { value: "all", label: t("all") },
    { value: "free", label: t("free") },
    { value: "premium", label: t("premium") }
  ];

  const handlePricingFilter = (pricing) => {
    const params = new URLSearchParams(searchParams);
    if (pricing === "all") {
      params.delete("pricing");
    } else {
      params.set("pricing", pricing);
    }

    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.push(newUrl, { scroll: false });
    setIsOpen(false);
  };

  const activePricing = searchParams.get("pricing") || "all";
  const activeOption = pricingOptions.find(option => option.value === activePricing);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer px-3 sm:px-6 py-2 rounded-xl border transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start text-sm sm:text-base ${isOpen
          ? "bg-main text-white border-black"
          : "bg-black text-main"
          }`}
      >
        <Filter size={16} />
        <span className="truncate">{activeOption?.label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 right-0 sm:right-auto mt-2 w-full sm:w-auto bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden min-w-[180px]"
        >
          {pricingOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handlePricingFilter(option.value)}
              className={`cursor-pointer w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-gray-50 ${activePricing === option.value
                ? "bg-main/10 text-main"
                : "text-gray-700"
                }`}
            >
              {option.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}