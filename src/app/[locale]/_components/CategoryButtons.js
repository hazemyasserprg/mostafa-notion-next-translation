"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

const categories = ["productivity", "education", "islam", "finance"];

export default function CategoryButtons() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Categories");

  const handleFilter = (category) => {
    const params = new URLSearchParams(searchParams);

    // If the same category is clicked, remove it (toggle off)
    if (activeCategory === category) {
      params.delete("category");
    } else {
      // Otherwise, set the new category
      params.set("category", category);
    }

    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.push(newUrl, { scroll: false });
  };

  const activeCategory = searchParams.get("category");

  return (
    <div className="overflow-x-auto py-2 scrollbar-container">
      <div className="flex gap-2 justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`cursor-pointer px-6 py-2 rounded-xl border transition-all duration-300 ${activeCategory === cat
              ? "bg-main text-white border-black"
              : "bg-black text-main"
              }`}
          >
            {t(cat)}
          </button>
        ))}
      </div>
    </div>
  );
}
