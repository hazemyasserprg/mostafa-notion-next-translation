import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // 1️⃣ Redirect www → non-www (or flip if you prefer www)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mostafayasser.com" }],
        destination: "https://mostafayasser.com/:path*",
        permanent: true,
      },
      // 2️⃣ Redirect http → https (for non-www)
      {
        source: "/:path*",
        has: [
          { type: "host", value: "mostafayasser.com" },
          { type: "protocol", value: "http" },
        ],
        destination: "https://mostafayasser.com/:path*",
        permanent: true,
      },
      // 3️⃣ Redirect http → https (for www)
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.mostafayasser.com" },
          { type: "protocol", value: "http" },
        ],
        destination: "https://mostafayasser.com/:path*",
        permanent: true,
      },
      // 🟢 Your existing internal redirects below:
      {
        source: "/",
        destination: "/en/",
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
