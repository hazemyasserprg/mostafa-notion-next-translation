"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import BlurText from "@/src/app/[locale]/_components/BlurText";

function SubscriptionForm({ children, className }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const t = useTranslations("Subscription");
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
      setErrorMessage(t("error"));
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
        setErrorMessage(data.error || t("error"));
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setErrorMessage(t("error"));
    } finally {
      setIsLoading(false);
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <BlurText duration={3}>
        <form className={className}>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            disabled
            className="flex-1 w-full sm:w-auto px-5 py-3 rounded-lg shadow-md bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled
            className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-transparent hover:text-white border border-white transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Subscribe
          </button>
        </form>
        {children}
      </BlurText>
    );
  }

  return (
    <BlurText duration={3}>
      <form
        className={className}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder={t("placeholder")}
          required
          disabled={isLoading}
          className="flex-1 w-full sm:w-auto px-5 py-3 rounded-lg shadow-md bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-transparent hover:text-white border border-white transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? t("loading") || "Loading..." : t("button")}
        </button>
      </form>

      {isSubmitted && !errorMessage && showMessage && (
        <div className={`mt-4 text-center transition-all duration-500 ease-out transform ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
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
        <div className={`mt-4 text-center transition-all duration-500 ease-out transform ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
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

      {children}
    </BlurText>
  );
}

export default SubscriptionForm;
