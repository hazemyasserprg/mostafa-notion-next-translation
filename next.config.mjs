import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  // Optional: Add any NextIntl config if needed
  locales: ["en", "ar"],
  defaultLocale: "en",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Don't include i18n manually here; let next-intl handle it
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/en/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/en/terms-of-service",
        permanent: true,
      },
      {
        source: "/templates",
        destination: "/en/templates",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
