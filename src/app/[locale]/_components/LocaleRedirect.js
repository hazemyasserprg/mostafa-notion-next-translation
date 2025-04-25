// app/components/LocaleRedirect.js

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LocaleRedirect = ({ locale }) => {
  const router = useRouter();

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");

    // If a saved locale exists and is different from the current one, redirect
    if (savedLocale && savedLocale !== locale) {
      router.replace(
        `/${savedLocale}${window.location.pathname.slice(locale.length)}`
      );
    }
  }, [locale, router]);

  return null;
};

export default LocaleRedirect;
