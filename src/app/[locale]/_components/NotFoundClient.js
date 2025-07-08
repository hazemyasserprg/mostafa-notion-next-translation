"use client";

import AnimatedText from "@/src/app/[locale]/_components/AnimatedText";
import AnimatedWrapper from "@/src/app/[locale]/_components/AnimatedWrapper";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFoundClient() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex items-start justify-center min-h-screen bg-black text-white py-16">
      <div className="text-center px-6">
        <AnimatedText className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2 font-extrabold leading-tight">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2 font-extrabold leading-tight">
            {t("title")}
          </h1>
        </AnimatedText>

        <AnimatedWrapper delay={0.5}>
          <p className="text-base sm:text-lg md:text-xl text-main mt-4 max-w-2xl mx-auto px-4 font-light tracking-tight">
            {t("description")}
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper delay={1.5}>
          <Link
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-main text-black font-semibold rounded-lg hover:bg-transparent hover:text-white border border-main transition-all duration-300"
          >
            {t("button")}
          </Link>
        </AnimatedWrapper>

        <AnimatedWrapper delay={2}>
          <p className="text-sm sm:text-base mt-6 text-gray-400 font-light tracking-tight">
            {t("note")}
          </p>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
