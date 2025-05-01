import { Oswald, Tajawal } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { NextIntlClientProvider } from "next-intl";

import Navigation from "@/src/app/[locale]/_components/Navigation";
import Footer from "@/src/app/[locale]/_components/Footer";
import "@/src/app/[locale]/_styles/globals.css";
import Script from "next/script";

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

export const metadata = {
  metadataBase: new URL("https://mostafayasser.com"),
  icons: {
    icon: "/icon.png",
  },
};

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
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BPZ882BE5Y"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BPZ882BE5Y');
          `}
        </Script>
      </head>
      <body
        className="bg-black text-white min-h-screen flex flex-col"
        cz-shortcut-listen="true"
      >
        <NextIntlClientProvider locale={locale}>
          <Navigation />
          <main className="flex-1 px-2 sm:px-8 pt-26">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
