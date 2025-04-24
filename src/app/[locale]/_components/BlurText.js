"use client";

import { motion } from "framer-motion";

function BlurText({ children, duration = 1 }) {
  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
}

export default BlurText;
