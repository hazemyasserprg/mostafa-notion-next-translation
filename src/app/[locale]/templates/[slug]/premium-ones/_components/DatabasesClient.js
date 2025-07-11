"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ImagePreviewModal from "./ImagePreviewModal";
import AnimatedInView from "@/src/app/[locale]/_components/AnimatedInView";
import FadeInFromLeft from "@/src/app/[locale]/_components/FadeInFromLeft";

function DatabasesClient({ template }) {
  const t = useTranslations("TemplateSlug");

  const [previewSrc, setPreviewSrc] = useState(null);
  const [previewAlt, setPreviewAlt] = useState("");

  // Get database keys dynamically
  const databaseKeys = Object.keys(
    t.raw(`${template.name}.databasesSec.features`)
  );

  return (
    // <section id="databases" className="w-full space-y-24 px-4 sm:px-8">
    <>
      {/* Database Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {databaseKeys.map((key, index) => (
          <div
            key={index}
            onClick={() => {
              setPreviewSrc(
                t(`${template.name}.databasesSec.features.${key}.image`)
              );
              setPreviewAlt(
                t(`${template.name}.databasesSec.features.${key}.title`)
              );
            }}
            className="
              group cursor-zoom-in rounded-3xl overflow-hidden
              bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md
              border border-neutral-200 dark:border-neutral-800
              shadow-xl hover:shadow-2xl hover:scale-[1.02]
              transition-transform duration-200
              flex flex-col items-center text-center p-4 sm:p-6
            "
          >
            {/* Image */}
            <div className="relative w-full aspect-[4/3] mb-4 rounded-2xl overflow-hidden shadow-md border border-neutral-200 dark:border-neutral-700">
              <Image
                src={t(`${template.name}.databasesSec.features.${key}.image`)}
                alt={t(`${template.name}.databasesSec.features.${key}.title`)}
                fill
                className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority
              />
            </div>

            {/* Title */}
            <FadeInFromLeft>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                {t(`${template.name}.databasesSec.features.${key}.title`)}
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                {t(`${template.name}.databasesSec.features.${key}.description`)}
              </p>
            </FadeInFromLeft>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ImagePreviewModal
        isOpen={!!previewSrc}
        onClose={() => setPreviewSrc(null)}
        imageSrc={previewSrc}
        alt={previewAlt}
      />
    </>

    // </section>
  );
}

export default DatabasesClient;
