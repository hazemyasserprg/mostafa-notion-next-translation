"use client";

import { FilloutSliderEmbed } from "@fillout/react";
import "@fillout/react/style.css";
import { useState } from "react";

function FilloutSlider({ children, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={className} onClick={() => setIsOpen(true)}>
        {children}
      </button>
      <FilloutSliderEmbed
        filloutId="6VeTu9jHKhus"
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
