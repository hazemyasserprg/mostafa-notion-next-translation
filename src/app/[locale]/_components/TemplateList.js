import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loader from "@/src/app/[locale]/_components/Loader";
import templatesData from "@/src/app/[locale]/_data/templatesData";
import { useLocale, useTranslations } from "next-intl";

function TemplateList({ filter }) {
  const t = useTranslations("TemplateSlug");
  const locale = useLocale();

  let filteredTemplates;

  if (filter === "all") filteredTemplates = templatesData;

  if (filter === "islam")
    filteredTemplates = templatesData.filter(
      (template) => template.category === "islam"
    );

  if (filter === "productivity")
    filteredTemplates = templatesData.filter(
      (template) => template.category === "productivity"
    );

  if (filter === "education")
    filteredTemplates = templatesData.filter(
      (template) => template.category === "education"
    );

  return (
    <Suspense fallback={<Loader />} key={filter}>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredTemplates.map((template) => (
          <Link
            key={template.id}
            href={`/${locale}/templates/${template.slug}`}
            className="relative rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.01] hover:-translate-y-2 overflow-hidden ease-in-out cursor-pointer hover:shadow-main"
          >
            {/* 💰 Price Label */}
            {/* {template.premium && (
              <span className="absolute top-9 right-0 rounded-tl-xl rounded-bl-xl border border-[#D7B180] text-[#D7B180] text-sm font-semibold px-4 py-1 -mr-1">
                PRO
              </span>
            )} */}

            <div className="w-full aspect-[4/3] lg:aspect-auto">
              <Image
                src={t(`${template.name}.image`)}
                alt={`Template ${t(`${template.name}.name`)}`}
                width={400}
                height={400}
              />
            </div>
            <h3 className="mt-3 text-base font-semibold sm:text-lg md:text-xl">
              {t(`${template.name}.name`)}
            </h3>
            <p className="text-[#D7B180] text-lg sm:text-xl md:text-2xl font-bold mb-4 drop-shadow-[0_0_5px_rgba(215,177,128,0.4)]">
              {t(`${template.name}.price`)}
            </p>
          </Link>
        ))}
      </div>
    </Suspense>
  );
}

export default TemplateList;
