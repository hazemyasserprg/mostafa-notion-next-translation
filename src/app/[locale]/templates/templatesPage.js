"use client";

import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import BlurText from "@/src/app/[locale]/_components/BlurText";
import TemplateList from "@/src/app/[locale]/_components/TemplateList";
import CategoryButtons from "@/src/app/[locale]/_components/CategoryButtons";
import AdvancedFilter from "@/src/app/[locale]/_components/AdvancedFilter";

export default function TemplatesPage() {
  const t = useTranslations("TemplatesPage");
  const searchParams = useSearchParams();
  const filter = searchParams?.get("category");
  const pricingFilter = searchParams?.get("pricing") || "all";

  return (
    <BlurText>
      <div className="w-full px-4 sm:px-6 py-8 sm:py-12 mt-4 sm:mt-6 lg:mt-12">
        <section className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            {t("title")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-main mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 my-4 sm:my-6 max-w-4xl mx-auto">
            <div className="w-full sm:flex-1">
              <CategoryButtons />
            </div>
            <div className="w-full sm:w-auto sm:flex-shrink-0">
              <AdvancedFilter />
            </div>
          </div>
          <TemplateList filter={filter} pricingFilter={pricingFilter} />
        </section>
      </div>
    </BlurText>
  );
}
