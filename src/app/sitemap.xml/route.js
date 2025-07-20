import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.mostafayasser.com";

  // Add your static routes here
  const staticRoutes = [
    "/",
    "/en",
    "/ar",
    "/en/templates",
    "/ar/templates",
    "/en/blogs",
    "/ar/blogs",
    "/en/contact",
    "/ar/contact",
    "/en/about",
    "/ar/about",
  ];

  // Add your dynamic routes here manually for now
  const dynamicRoutes = [
    "/en/templates/second-brain",
    "/ar/templates/second-brain",
    "/en/templates/finance-hub",
    "/ar/templates/finance-hub",
    "/en/templates/study-hub",
    "/ar/templates/study-hub",
    "/en/templates/quran-tracker-premium",
    "/ar/templates/quran-tracker-premium",
    "/en/templates/90-day-challenge-premium",
    "/ar/templates/90-day-challenge-premium",
    "/en/templates/priority-compass",
    "/ar/templates/priority-compass",
    "/en/templates/task-manager",
    "/ar/templates/task-manager",
    "/en/templates/prayer-times",
    "/ar/templates/prayer-times",
    "/en/templates/ibadat-tracker",
    "/ar/templates/ibadat-tracker",
    "/en/templates/quran-tracker",
    "/ar/templates/quran-tracker",
    "/en/templates/study-planner",
    "/ar/templates/study-planner",
    "/en/templates/weekly-planner",
    "/ar/templates/weekly-planner",
    "/en/templates/habit-tracker",
    "/ar/templates/habit-tracker",
    "/en/templates/reading-tracker",
    "/ar/templates/reading-tracker",
    "/en/templates/90-day-challenge",
    "/ar/templates/90-day-challenge",
    "/en/templates/quran-memorization",
    "/ar/templates/quran-memorization",
    "/en/templates/ramadan-tracker",
    "/ar/templates/ramadan-tracker",
    "/en/templates/notion-starter-pack",
    "/ar/templates/notion-starter-pack",
    "/en/templates/idea-flow-team",
    "/ar/templates/idea-flow-team",
    "/en/templates/idea-flow-solo",
    "/ar/templates/idea-flow-solo",
    "/en/templates/notion-me",
    "/ar/templates/notion-me",
    "/en/templates/studyhub-minimal",
    "/ar/templates/studyhub-minimal",
    "/en/templates/second-brain-minimal",
    "/ar/templates/second-brain-minimal",
    "/en/templates/finance-hub-minimal",
    "/ar/templates/finance-hub-minimal",
    "/en/blog/what-is-notion",
    "/ar/blog/what-is-notion",
    "/en/blog/notion-external-tools",
    "/ar/blog/notion-external-tools",
    "/en/blog/best-notion-widgets-2025",
    "/ar/blog/best-notion-widgets-2025",
  ];

  // Combine all routes
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  // Generate the XML sitemap string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allRoutes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
