import { Suspense } from "react";
import Loader from "@/src/app/[locale]/_components/Loader";
import templatesData from "@/src/app/[locale]/_data/templatesData";
import TemplateCard from "./TemplateCard";

function TemplateList({ filter }) {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredTemplates.map((template, index) => (
          <TemplateCard key={template.id} template={template} index={index} />
        ))}
      </div>
    </Suspense>
  );
}

export default TemplateList;
