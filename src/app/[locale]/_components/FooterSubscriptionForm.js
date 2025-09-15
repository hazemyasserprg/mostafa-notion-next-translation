"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

function FooterSubscriptionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const t = useTranslations("Subscription");
  const tFooter = useTranslations("Footer");
  const locale = useLocale();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isSubmitted || errorMessage) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        // Reset states after animation
        setTimeout(() => {
          setIsSubmitted(false);
          setErrorMessage("");
        }, 300); // Wait for fade out animation
      }, 3000); // Show message for 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isSubmitted, errorMessage]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage(t("error") || "Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          language: locale === 'ar' ? 'Arabic' : 'English'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        event.target.reset(); // Clear the form
      } else {
        setErrorMessage(data.error || t("error") || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setErrorMessage(t("error") || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {!isMounted ? (
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            name="email"
            placeholder={t("placeholder")}
            required
            disabled
            className="flex-1 px-5 py-3 rounded-lg bg-white/5 text-white placeholder:text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-main transition disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled
            className="cursor-pointer px-6 py-3 bg-main text-black font-semibold rounded-lg hover:bg-transparent hover:text-white border border-main transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t("button")}
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder={t("placeholder")}
            required
            disabled={isLoading}
            className="flex-1 px-5 py-3 rounded-lg bg-white/5 text-white placeholder:text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-main transition disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer px-6 py-3 bg-main text-black font-semibold rounded-lg hover:bg-transparent hover:text-white border border-main transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? t("loading") : t("button")}
          </button>
        </form>
      )}

      {isSubmitted && !errorMessage && showMessage && (
        <div className={`transition-all duration-500 ease-out transform ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex items-center justify-center gap-2 text-green-400 font-medium">
            <svg
              className="w-5 h-5 transition-all duration-300 ease-out"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{t("success")}</span>
          </div>
        </div>
      )}

      {errorMessage && showMessage && (
        <div className={`transition-all duration-500 ease-out transform ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex items-center justify-center gap-2 text-red-400 font-medium">
            <svg
              className="w-5 h-5 transition-all duration-300 ease-out"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default FooterSubscriptionForm;
