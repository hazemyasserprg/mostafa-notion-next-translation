"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CheckCircle, XCircle } from "lucide-react";

export default function PricingSec({ template }) {
  const t = useTranslations("TemplateSlug");

  const basic = t.raw(`${template.name}.pricingSec.plans.basic`);
  const advanced = t.raw(`${template.name}.pricingSec.plans.advanced`);

  return (
    <section id="pricing" className="w-full space-y-16 px-4 sm:px-8">
      {/* Title & Description */}
      <h2 className="text-3xl mt-24 sm:mt-32 sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-main leading-tight text-center">
        {t(`${template.name}.pricingSec.title`)}
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed text-center mx-auto">
        {t(`${template.name}.pricingSec.description`)}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* BASIC PLAN */}
        <div className="bg-white dark:bg-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-neutral-200 dark:border-neutral-700 shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-200">
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
              {basic.label}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4">
              {basic.description}
            </p>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-bold text-neutral-900 dark:text-white">
                {basic.price}
              </span>
            </div>
            <ul className="text-sm sm:text-base space-y-2 mb-6 text-neutral-800 dark:text-neutral-300">
              {basic.features.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-main" />
                  <span>{item}</span>
                </li>
              ))}
              {basic.missingFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-neutral-400"
                >
                  <XCircle className="w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href={basic.buttonLink}
            className="mt-auto inline-block w-full text-center bg-white dark:bg-neutral-800 text-black dark:text-white font-semibold py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-main text-2xl"
          >
            {basic.button}
          </Link>
        </div>

        {/* ADVANCED PLAN */}
        <div className="relative bg-main text-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow hover:shadow-lg hover:scale-[1.05] transition-transform duration-200">
          {advanced.badge && (
            <span className="absolute top-4 right-4 bg-white text-main text-xs sm:text-sm font-medium px-2 py-0.5 rounded">
              {advanced.badge}
            </span>
          )}
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold mb-2">
              {advanced.label}
            </h3>
            <p className="text-sm sm:text-base text-neutral-800 mb-4">
              {advanced.description}
            </p>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-bold text-neutral-900 dark:text-white">
                {advanced.price}
              </span>
              {advanced.oldPrice && (
                <span className="text-lg line-through text-neutral-600">
                  {advanced.oldPrice}
                </span>
              )}
            </div>
            <ul className="text-sm sm:text-base space-y-2 mb-6 text-black">
              {advanced.features.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href={advanced.buttonLink}
            className="mt-auto inline-block w-full text-center bg-black text-white font-semibold py-3 rounded-xl hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white text-2xl"
          >
            {advanced.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
