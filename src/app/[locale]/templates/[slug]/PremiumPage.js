"use client";

import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import BlurText from "../../_components/BlurText";
import FloatingNav from "./premium-ones/FloatingNav";
import PremiumOfferPopup from "../../_components/PremiumOfferPopup";

// Lazy load heavy sections for better performance
const Home = dynamic(() => import("./premium-ones/HomeSec"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-800 rounded-lg"></div>
});
const Dashboard = dynamic(() => import("./premium-ones/DashboardSec"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-800 rounded-lg"></div>
});
const Essentials = dynamic(() => import("./premium-ones/EssentailsSec"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-800 rounded-lg"></div>
});
const Walkthrough = dynamic(() => import("./premium-ones/WalkthroughSec"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-800 rounded-lg"></div>
});
const Databases = dynamic(() => import("./premium-ones/DatabasesSec"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-800 rounded-lg"></div>
});
const Pricing = dynamic(() => import("./premium-ones/PricingSec"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-800 rounded-lg"></div>
});
const FAQ = dynamic(() => import("./premium-ones/FAQSec"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-800 rounded-lg"></div>
});

export default function PremiumPage({ template }) {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup after 3 seconds for premium templates
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!template) {
    return notFound();
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <FloatingNav />
      <BlurText>
        <div className="min-h-screen py-12 px-6 mt-3 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* === 1️⃣ Home SECTION === */}
            <Home template={template} />

            {/* === 2️⃣  DASHBOARD SECTION === */}
            <Dashboard template={template} />

            {/* === 4️⃣ Essentials SECTION === */}
            <Essentials template={template} />

            {/* === 3️⃣ Walkthrough SECTION === */}
            <Walkthrough template={template} />

            {/* === 7️⃣ Databases SECTION === */}
            <Databases template={template} />

            {/* === 5️⃣ PRICING SECTION === */}
            <Pricing template={template} />

            {/* === 6️⃣ FAQ SECTION === */}
            <FAQ template={template} />
          </div>
        </div>
      </BlurText>

      {/* Premium Offer Popup */}
      <PremiumOfferPopup
        template={template}
        isOpen={showPopup}
        onClose={handleClosePopup}
      />
    </>
  );
}
