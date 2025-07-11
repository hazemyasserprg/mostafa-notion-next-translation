import { useTranslations } from "next-intl";
import DashboardImage from "./_components/DashboardImage";

export default function Dashboard({ template }) {
  const t = useTranslations("TemplateSlug");

  return (
    <section
      id="dashboard"
      className=" w-full px-4 flex flex-col items-center text-center"
    >
      <h2 className="mt-32 text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 text-main leading-tight">
        {t(`${template.name}.dashboardSec.title`)}
      </h2>

      <p className="text-lg sm:text-xl md:text-3xl text-muted-foreground mb-14 max-w-4xl leading-relaxed">
        {t(`${template.name}.dashboardSec.description`)}
      </p>

      <DashboardImage template={template} />
    </section>
  );
}
