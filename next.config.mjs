import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  // Optional: Add any NextIntl config if needed
  locales: ["en", "ar"],
  defaultLocale: "en",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Don't include i18n manually here; let next-intl handle it

  // Performance optimizations
  compress: true,
  poweredByHeader: false,



  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          },
        ],
      },
    ];
  },

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
