import Script from "next/script";
import { Oswald, Tajawal } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { NextIntlClientProvider } from "next-intl";

import Navigation from "@/src/app/[locale]/_components/Navigation";
import Footer from "@/src/app/[locale]/_components/Footer";
import "@/src/app/[locale]/_styles/globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export async function generateMetadata({ params }) {
  const { locale } = params;
  const isArabic = locale === "ar";

  return {
    title: {
      template: isArabic
        ? "%s | قوالب نوشن من مصطفى ياسر"
        : "%s | Notion Templates by Mostafa Yasser",
      default: isArabic
        ? "مصطفى ياسر | قوالب نوشن لتنظيم حياتك"
        : "Mostafa Yasser | Notion Templates to Organize Your Life",
    },
    description: isArabic
      ? "استكشف قوالب نوشن المصممة بعناية لتعزيز الإنتاجية وتنظيم سير عملك وجعل حياتك أكثر وضوحًا. من تصميم مصطفى ياسر."
      : "Explore beautifully crafted Notion templates designed to boost productivity, streamline your workflow, and bring clarity to your life. Created by Mostafa Yasser.",
    openGraph: {
      title: isArabic
        ? "مصطفى ياسر | قوالب نوشن لتنظيم حياتك"
        : "Mostafa Yasser | Notion Templates to Organize Your Life",
      description: isArabic
        ? "عزز إنتاجيتك مع قوالب نوشن الاحترافية من مصطفى ياسر. بسيطة وفعالة وجميلة."
        : "Boost your productivity with premium Notion templates by Mostafa Yasser. Simple, effective, and beautifully designed.",
      url: "https://mostafayasser.com",
      siteName: "Mostafa Yasser",
      images: [
        {
          url: "/icon.png",
          width: 1200,
          height: 630,
          alt: isArabic
            ? "مصطفى ياسر - قوالب نوشن"
            : "Mostafa Yasser - Notion Templates",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic
        ? "مصطفى ياسر | قوالب نوشن"
        : "Mostafa Yasser | Notion Templates",
      description: isArabic
        ? "اكتشف قوالب نوشن لتنظيم حياتك وزيادة إنتاجيتك. من تصميم مصطفى ياسر."
        : "Discover Notion templates that organize your life and boost productivity. Built by Mostafa Yasser.",
      creator: "@engmsyasser",
      images: ["/icon.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const dir = locale === "ar" ? "rtl" : "ltr";

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={dir}
      className={locale === "ar" ? tajawal.className : oswald.className}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KZRKNHCJSW"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZRKNHCJSW');
          `}
        </Script>
      </head>
      <body
        className="bg-black text-white min-h-screen flex flex-col"
        cz-shortcut-listen="true"
      >
        <NextIntlClientProvider locale={locale}>
          <Navigation />
          <main className="flex-1 px-2 sm:px-8 py-26">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
