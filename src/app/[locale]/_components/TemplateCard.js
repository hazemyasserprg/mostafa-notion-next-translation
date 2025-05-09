"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function TemplateCard({ template, index }) {
  const t = useTranslations("TemplateSlug");
  const locale = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-[1.01] hover:-translate-y-2 ease-in-out cursor-pointer hover:shadow-main">
        <Link href={`/${locale}/templates/${template.slug}`}>
          {/* Price Label */}
          {template.premium && (
            <span className="absolute top-9 right-0 rounded-tl-xl rounded-bl-xl border border-[#D7B180] text-[#D7B180] text-sm font-semibold px-4 py-1 -mr-1">
              PRO
            </span>
          )}

          <div className="w-full aspect-[4/3] lg:aspect-auto">
            <Image
              src={t(`${template.name}.image`)}
              alt={`Template ${t(`${template.name}.name`)}`}
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="mt-3 text-base font-semibold sm:text-lg md:text-xl">
            {t(`${template.name}.name`)}
          </h3>
          <p className="text-[#D7B180] text-lg sm:text-xl md:text-2xl font-bold mb-4 drop-shadow-[0_0_5px_rgba(215,177,128,0.4)]">
            {t(`${template.name}.price`)}
          </p>
        </Link>
      </div>
    </motion.div>
  );
}
