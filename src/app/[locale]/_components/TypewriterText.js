"use client";

import { motion } from "framer-motion";

function TypewriterText({ text }) {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    transition: {
      duration: 0.4,
    },
  };

  return (
    <motion.div
      variants={sentence}
      initial="hidden"
      animate="visible"
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2 font-extrabold leading-tight"
    >
      {text.split("\n").map((line, index) => (
        <span key={index} className="block">
          {line.split("").map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}

export default TypewriterText;
