"use client";

import { useLocale } from "next-intl";
import { useState, useEffect, useRef } from "react";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(locale === 'ar' ? 'ar' : 'en');
  const [isTextTransitioning, setIsTextTransitioning] = useState(false);
  const dropdownRef = useRef(null);

  // Ensure we're on the client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Determine which link and text to use based on selected language
  const getLinkAndText = () => {
    if (selectedLanguage === 'ar' && arabicCheckoutLink) {
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

  const handleLanguageSelect = (lang) => {
    if (lang === selectedLanguage) {
      setIsDropdownOpen(false);
      return;
    }

    // Start transition
    setIsTextTransitioning(true);
    setIsDropdownOpen(false);

    // Change language after fade out
    setTimeout(() => {
      setSelectedLanguage(lang);
      // End transition after text changes
      setTimeout(() => {
        setIsTextTransitioning(false);
      }, 50);
    }, 200);
  };

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
    <div className="relative inline-flex" ref={dropdownRef}>
      {/* Main Checkout Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative inline-block overflow-hidden px-6 py-4 sm:px-6 sm:py-3 font-normal text-black bg-white group shadow-lg hover:shadow-gray-300/50 active:scale-95 hover:scale-105 transition-all duration-300 ease-in-out w-full sm:w-auto text-center touch-manipulation ${locale === 'ar' ? 'rounded-r-full' : 'rounded-l-full'
          }`}
      >
        <span className="absolute top-0 left-0 w-full h-full bg-main transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left" />
        <span className="relative block text-base sm:text-lg transform transition-all duration-500 ease-in-out group-hover:text-white min-w-0">
          <span className={`inline-block transition-all duration-300 ease-in-out ${isTextTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {text}
          </span>
        </span>
      </a>

      {/* Dropdown Toggle Button */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`relative inline-flex items-center justify-center px-3 py-4 sm:py-3 bg-white border-gray-200 shadow-lg hover:shadow-gray-300/50 active:scale-95 hover:scale-105 transition-all duration-300 ease-in-out touch-manipulation group cursor-pointer ${locale === 'ar'
          ? 'border-r rounded-l-full'
          : 'border-l rounded-r-full'
          }`}
        aria-label="Select language"
      >
        <div className="relative">
          <svg
            className={`w-4 h-4 text-gray-600 group-hover:text-main transition-all duration-300 ease-in-out ${isDropdownOpen ? 'rotate-180' : 'rotate-0'
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              transformOrigin: 'center',
              transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          {/* Animated background circle */}
          <div className={`absolute inset-0 w-6 h-6 -m-1 rounded-full bg-main/10 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out ${isDropdownOpen ? 'scale-100' : ''
            }`}></div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className={`absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200 ${locale === 'ar' ? 'right-0' : 'left-0'
          }`}>
          <div className="py-2">
            <button
              onClick={() => handleLanguageSelect('ar')}
              className={`w-full px-6 py-3 text-right text-sm font-medium hover:bg-main/5 transition-all duration-200 group cursor-pointer ${selectedLanguage === 'ar'
                ? 'bg-main/10 text-main border-r-2 border-main'
                : 'text-gray-700 hover:text-main'
                }`}
            >
              <span className="flex items-center justify-end gap-2">
                <span>العربية</span>
                {selectedLanguage === 'ar' && (
                  <svg className="w-4 h-4 text-main" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </button>
            <div className="border-t border-gray-100 my-1"></div>
            <button
              onClick={() => handleLanguageSelect('en')}
              className={`w-full px-6 py-3 text-left text-sm font-medium hover:bg-main/5 transition-all duration-200 group cursor-pointer ${selectedLanguage === 'en'
                ? 'bg-main/10 text-main border-l-2 border-main'
                : 'text-gray-700 hover:text-main'
                }`}
            >
              <span className="flex items-center justify-start gap-2">
                <span>English</span>
                {selectedLanguage === 'en' && (
                  <svg className="w-4 h-4 text-main" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutButton;
