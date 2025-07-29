"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Fuse from "fuse.js";
import { Suspense } from "react";
import { Search } from "lucide-react";
import Loader from "@/src/app/[locale]/_components/Loader";
import templatesData from "@/src/app/[locale]/_data/templatesData";
import TemplateCard from "./TemplateCard";
import { useTranslations, useLocale } from "next-intl";

function TemplateList({ filter }) {
  const t = useTranslations("TemplatesPage");
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Filter by category
  const filteredTemplates =
    filter === "all"
      ? templatesData
      : templatesData.filter((template) => template.category === filter);

  // Setup Fuse.js with language-aware keys
  const fuse = new Fuse(filteredTemplates, {
    keys: locale === "ar" ? ["name_ar", "tags_ar"] : ["name", "tags"],
    threshold: 0.4,
  });

  const searchedTemplates =
    searchTerm.trim() === ""
      ? filteredTemplates
      : fuse.search(searchTerm).map((result) => result.item);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-4 flex justify-center"
      >
        <motion.div
          animate={{
            width: isFocused ? 320 : 200,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative"
        >
          <input
            type="text"
            placeholder={t("placeholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-main transition-all duration-300 text-sm"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        </motion.div>
      </motion.div>

      <Suspense fallback={<Loader />} key={filter + searchTerm}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
        >
          {searchedTemplates.length > 0 ? (
            searchedTemplates.map((template, index) => (
              <TemplateCard
                key={template.id}
                template={template}
                index={index}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 mt-8">
              No templates found.
            </p>
          )}
        </motion.div>
      </Suspense>
    </>
  );
}

export default TemplateList;
