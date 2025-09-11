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
      <div className="w-full px-6 py-12 mt-6 sm:mt-12">
        <section className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-main mb-8 sm:mb-10">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-6">
            <CategoryButtons />
            <AdvancedFilter />
          </div>
          <TemplateList filter={filter} pricingFilter={pricingFilter} />
        </section>
      </div>
    </BlurText>
  );
}
