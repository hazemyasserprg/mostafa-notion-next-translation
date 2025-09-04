"use client";

import { useLocale } from "next-intl";
import { useState, useEffect } from "react";

function CheckoutButton({
  checkoutLink,
  checkoutText,
  arabicCheckoutLink,
  arabicCheckoutText,
  englishCheckoutLink,
  englishCheckoutText
}) {
  const locale = useLocale();
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Determine which link and text to use based on locale
  const getLinkAndText = () => {
    if (locale === 'ar' && arabicCheckoutLink) {
      return {
        link: arabicCheckoutLink,
        text: arabicCheckoutText || 'العربية'
      };
    } else if (englishCheckoutLink) {
      return {
        link: englishCheckoutLink,
        text: englishCheckoutText || checkoutText
      };
    } else {
      return {
        link: checkoutLink,
        text: checkoutText
      };
    }
  };

  const { link, text } = getLinkAndText();

  // Show loading state during hydration to prevent mismatch
  if (!isClient) {
    return (
      <div className="relative inline-block overflow-hidden px-6 py-4 sm:px-6 sm:py-3 font-normal text-black bg-white rounded-full group shadow-lg w-full sm:w-auto text-center touch-manipulation">
        <span className="relative block text-base sm:text-lg">
          {checkoutText}
        </span>
      </div>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block overflow-hidden px-6 py-4 sm:px-6 sm:py-3 font-normal text-black bg-white rounded-full group shadow-lg hover:shadow-gray-300/50 active:scale-95 hover:scale-105 transition-all duration-300 ease-in-out w-full sm:w-auto text-center touch-manipulation"
    >
      <span className="absolute top-0 left-0 w-full h-full bg-main transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left" />
      <span className="relative block text-base sm:text-lg transform transition-all duration-300 ease-in-out group-hover:text-white">
        {text}
      </span>
    </a>
  );
}

export default CheckoutButton;
