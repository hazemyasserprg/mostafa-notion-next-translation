// app/study-hub/databases/page.tsx (or wherever you render it)
import { useTranslations } from "next-intl";
import DatabasesClient from "./_components/DatabasesClient";

export default function Databases({ template }) {
  const t = useTranslations("TemplateSlug");

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mt-24 sm:mt-32"
      id="databases"
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 text-main leading-tight">
        {t(`${template.name}.databasesSec.title`)}
      </h2>
      <p className="text-lg sm:text-xl md:text-3xl text-muted-foreground mb-14 max-w-6xl leading-relaxed text-center mx-auto">
        {t(`${template.name}.databasesSec.description`)}
      </p>

      <DatabasesClient template={template} />
    </section>
  );
}
