import BlurText from "../../_components/BlurText";
import FloatingNav from "./premium-ones/FloatingNav";

// Sections (ranked)
import Home from "./premium-ones/HomeSec";
import Dashboard from "./premium-ones/DashboardSec";
import Essentials from "./premium-ones/EssentailsSec";
import Walkthrough from "./premium-ones/WalkthroughSec";
import Databases from "./premium-ones/DatabasesSec";
import Pricing from "./premium-ones/PricingSec";
import FAQ from "./premium-ones/FAQSec";

export default function PremiumPage({ template }) {
  if (!template) {
    return notFound();
  }

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
    </>
  );
}
