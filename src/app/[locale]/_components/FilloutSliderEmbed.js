"use client";

import { FilloutSliderEmbed } from "@fillout/react";
import "@fillout/react/style.css";
import { useState } from "react";
import { useLocale } from "next-intl"; // assuming you're using next-intl

function FilloutSlider({ children, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale(); // get current locale

  // Determine which form ID to use based on the locale
  const filloutId = locale === "ar" ? "d5CcFiBZsvus" : "6VeTu9jHKhus";

  return (
    <>
      <button className={className} onClick={() => setIsOpen(true)}>
        {children}
      </button>
      <FilloutSliderEmbed
        filloutId={filloutId}
        inheritParameters
        parameters={{
          example: "abc",
        }}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        sliderDirection="right"
      />
    </>
  );
}

export default FilloutSlider;
