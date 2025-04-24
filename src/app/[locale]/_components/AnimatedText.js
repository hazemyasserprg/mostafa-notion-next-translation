"use client";

import { motion } from "framer-motion";

function AnimatedText({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2 font-extrabold leading-tight"
    >
      {children}
    </motion.div>
  );
}

export default AnimatedText;
