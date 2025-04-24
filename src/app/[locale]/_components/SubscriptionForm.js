"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import BlurText from "@/src/app/[locale]/_components/BlurText";

function SubscriptionForm({ children, className }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const t = useTranslations("Subscription");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage(t("error"));
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <BlurText duration={3}>
      <form
        className={className}
        action="https://app.gumroad.com/follow_from_embed_form"
        method="POST"
        target="_blank"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="seller_id" value="1089014516697" />
        <input
          type="email"
          name="email"
          placeholder={t("placeholder")}
          required
          className="flex-1 w-full sm:w-auto px-5 py-3 rounded-lg shadow-md bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-transparent hover:text-white border border-white transition-all duration-300 cursor-pointer"
        >
          {t("button")}
        </button>
      </form>

      {isSubmitted && !errorMessage && (
        <div className="mt-4 text-green-500">{t("success")}</div>
      )}
      {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}

      {children}
    </BlurText>
  );
}

export default SubscriptionForm;
