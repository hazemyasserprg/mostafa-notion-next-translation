"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useLocale } from "next-intl";

function GoToTemplatesPageButton({
  text,
  className,
  initial = { opacity: 0, y: 20 },
  transition = { duration: 0.1, ease: "easeOut" },
}) {
  const locale = useLocale();

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute w-56 sm:w-72 h-20 sm:h-24 blur-2xl bg-gradient-to-br from-white/70 to-transparent rounded-full"
      />

      <Link href="/templates" passHref>
        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(215, 177, 128, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-black text-white font-medium text-sm sm:text-base relative overflow-hidden transition-all duration-300 cursor-pointer"
        >
          {text}
          {locale === "ar" ? (
            <BsArrowLeft className="ml-1 sm:ml-2" />
          ) : (
            <BsArrowRight className="ml-1 sm:ml-2" />
          )}
          <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute left-1/2 top-0 w-32 sm:w-40 h-32 sm:h-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl opacity-50 pointer-events-none" />
        </motion.div>
      </Link>
    </div>
  );
}

export default GoToTemplatesPageButton;
