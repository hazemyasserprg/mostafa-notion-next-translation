/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mostafayasser.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false, // disables sitemap index to avoid empty sitemaps
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,

  // MANUALLY include your localized routes:
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/en"),
    await config.transform(config, "/ar"),
    await config.transform(config, "/en/about"),
    await config.transform(config, "/ar/about"),
    await config.transform(config, "/en/templates"),
    await config.transform(config, "/ar/templates"),
    // Add all important localized pages here
  ],
};
