import BlogDetailsClient from "./BlogDetailsClient";
import blogsData from "@/src/app/[locale]/_data/blogsData";
import { notFound } from "next/navigation";
import { createTranslator } from "next-intl";
import arMessages from "@/messages/ar/BlogSlug.json";
import enMessages from "@/messages/en/BlogSlug.json";
import SEOOptimizer from "../../_components/SEOOptimizer";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;

  const blog = blogsData.find((b) => b.slug === slug);
  if (!blog) return {};

  const messages = locale === "ar" ? arMessages : enMessages;
  const t = createTranslator({ locale, messages });

  const title = locale === "ar"
    ? `${t(`${blog.title}.shortCut`)} | مدونة مصطفى ياسر`
    : `${t(`${blog.title}.shortCut`)} | Mostafa Yasser Blog`;

  const description = locale === "ar"
    ? t(`${blog.title}.title`) ??
    "اكتشف آخر مقالات مصطفى ياسر حول نوشن والإنتاجية."
    : "Explore the latest articles by Mostafa Yasser on Notion, productivity, and digital organization.";

  const url = `https://www.mostafayasser.com/${locale}/blog/${slug}`;

  return {
    title,
    description,
    keywords: locale === "ar"
      ? [
        t(`${blog.title}.title`),
        "مدونة نوشن",
        "الإنتاجية",
        "تنظيم رقمي",
        "مقالات مصطفى ياسر",
      ]
      : [
        t(`${blog.title}.title`),
        "Notion blog",
        "productivity",
        "digital organization",
        "Mostafa Yasser articles",
      ],
    openGraph: {
      title,
      description,
      url,
      siteName: "Mostafa Yasser",
      type: "website",
      images: [
        {
          url: t(`${blog.title}.image`),
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [t(`${blog.title}.image`)],
    },
    alternates: {
      canonical: url,
    },
    other: {
      "google-site-verification": "SKiO5RTFyP9KeXKJAJ14FVn-qZUFpXut8_41TWNG_9o",
    },
  };
}

export async function generateStaticParams() {
  const locales = ["en", "ar"];
  return blogsData.flatMap((blog) =>
    locales.map((locale) => ({
      locale,
      slug: blog.slug,
    }))
  );
}

export default async function BlogDetails({ params }) {
  const { locale, slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <>
      <SEOOptimizer
        type="blog"
        title={blog.title}
        description={blog.description || "Explore the latest articles by Mostafa Yasser on Notion, productivity, and digital organization."}
        url={`https://www.mostafayasser.com/${locale}/blog/${blog.slug}`}
        image={blog.image}
        locale={locale}
        blogData={{
          publishedAt: blog.publishedAt,
          updatedAt: blog.updatedAt
        }}
      />
      <BlogDetailsClient blog={blog} />
    </>
  );
}
