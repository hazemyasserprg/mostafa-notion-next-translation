"use client";

import { useTranslations } from "next-intl";
import BlurText from "../../_components/BlurText";
import FloatingNav from "../../_components/_studyhubPage/FloatingNav";

// Sections (ranked)
import HeroSec from "../../_components/_studyhubPage/HeroSec";
import MainScreenshotSec from "../../_components/_studyhubPage/MainScreenshotSec";
import ScreenshotsDetails from "../../_components/_studyhubPage/ScreenshotsDetails";
import FeacturesSec from "../../_components/_studyhubPage/FeacturesSec";
import PricingSec from "../../_components/_studyhubPage/PricingSec";
import FAQSec from "../../_components/_studyhubPage/FAQSec";
import ScreenshotsPreviewSection from "../../_components/_studyhubPage/ScreenshotsPreviewSection";

export default function StudyHubPage({ template }) {
  const t = useTranslations("TemplateSlug");

  if (!template) {
    return <div className="text-center py-20">Template not found.</div>;
  }

  return (
    <>
      <FloatingNav />
      <BlurText>
        <div className="min-h-screen py-12 px-6 mt-3 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* === 1️⃣ HERO SECTION === */}
            <HeroSec template={template} />

            {/* === 2️⃣ MAIN DASHBOARD SCREENSHOT SECTION === */}
            <MainScreenshotSec template={template} />

            {/* === 4️⃣ ALL FEATURES GRID SECTION === */}
            <FeacturesSec />

            {/* === 3️⃣ FEATURED SCREENSHOTS WITH TEXT SECTION === */}
            <ScreenshotsDetails template={template} />

            {/* === 7️⃣ FULL TEMPLATE SCREENSHOTS GALLERY === */}
            <ScreenshotsPreviewSection />

            {/* === 5️⃣ PRICING SECTION === */}
            <PricingSec />

            {/* === 6️⃣ FAQ SECTION === */}
            <FAQSec />
          </div>
        </div>
      </BlurText>
    </>
  );
}
