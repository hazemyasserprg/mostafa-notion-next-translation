import BlogDetailsClient from "./BlogDetailsClient";
import blogsData from "@/src/app/[locale]/_data/blogsData";
import { notFound } from "next/navigation";
import { createTranslator } from "next-intl";
import arMessages from "@/messages/ar/BlogSlug.json";
import enMessages from "@/messages/en/BlogSlug.json";

export async function generateMetadata({ params }) {
  const { locale, slug } = params;
  const isArabic = locale === "ar";

  const blog = blogsData.find((b) => b.slug === slug);
  if (!blog) return {};

  const messages = isArabic ? arMessages : enMessages;
  const t = createTranslator({ locale, messages });

  const title = isArabic
    ? `${t(`${blog.title}.shortCut`)} | مدونة مصطفى ياسر`
    : `${t(`${blog.title}.shortCut`)} | Mostafa Yasser Blog`;

  const description = isArabic
    ? t(`${blog.title}.title`) ??
      "اكتشف آخر مقالات مصطفى ياسر حول نوشن والإنتاجية."
    : "Explore the latest articles by Mostafa Yasser on Notion, productivity, and digital organization.";

  const url = `https://mostafayasser.com/blog/${slug}`;

  return {
    title,
    description,
    keywords: isArabic
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

export default function BlogDetails({ params }) {
  const blog = blogsData.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return <BlogDetailsClient blog={blog} />;
}
