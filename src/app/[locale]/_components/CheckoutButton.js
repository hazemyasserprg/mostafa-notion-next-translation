"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "next-intl";

function CheckoutButton({
  checkoutLink,
  checkoutText,
  arabicCheckoutLink,
  arabicCheckoutText,
  englishCheckoutLink,
  englishCheckoutText
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const locale = useLocale();
  const dropdownRef = useRef(null);

  // Ensure we're on the client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // If only one link is provided, use the simple version
  if (!arabicCheckoutLink && !englishCheckoutLink) {
    return (
      <a
        href={checkoutLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative inline-block overflow-hidden px-6 py-4 sm:px-6 sm:py-3 font-normal text-black bg-white rounded-full group shadow-lg hover:shadow-gray-300/50 active:scale-95 hover:scale-105 transition-all duration-300 ease-in-out w-full sm:w-auto text-center touch-manipulation`}
      >
        <span className="absolute top-0 left-0 w-full h-full bg-main transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left" />
        <span className="relative block text-base sm:text-lg transform transition-all duration-300 ease-in-out group-hover:text-white">
          {checkoutText}
        </span>
      </a>
    );
  }

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
    <div className="relative" ref={dropdownRef}>
      {/* Mobile: Show single link based on locale */}
      <div className="block sm:hidden">
        {locale === 'ar' && arabicCheckoutLink ? (
          <a
            href={arabicCheckoutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden px-6 py-4 font-normal text-black bg-white rounded-full group shadow-lg hover:shadow-gray-300/50 active:scale-95 hover:scale-105 transition-all duration-300 ease-in-out w-full text-center touch-manipulation min-h-[48px] flex items-center justify-center"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-main transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left" />
            <span className="relative block text-base transform transition-all duration-300 ease-in-out group-hover:text-white">
              {arabicCheckoutText || 'العربية'}
            </span>
          </a>
        ) : (
          <a
            href={englishCheckoutLink || checkoutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden px-6 py-4 font-normal text-black bg-white rounded-full group shadow-lg hover:shadow-gray-300/50 active:scale-95 hover:scale-105 transition-all duration-300 ease-in-out w-full text-center touch-manipulation min-h-[48px] flex items-center justify-center"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-main transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left" />
            <span className="relative block text-base transform transition-all duration-300 ease-in-out group-hover:text-white">
              {englishCheckoutText || checkoutText}
            </span>
          </a>
        )}
      </div>

      {/* Tablet: Show single link based on locale with larger sizing */}
      <div className="hidden sm:block lg:hidden">
        {locale === 'ar' && arabicCheckoutLink ? (
          <a
            href={arabicCheckoutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block overflow-hidden px-6 py-4 font-normal text-black bg-white rounded-full group shadow-lg hover:shadow-gray-300/50 hover:scale-105 transition-all duration-500 ease-in-out w-full text-center"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-main transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left" />
            <span className="relative block text-base transform transition-all duration-300 ease-in-out group-hover:text-white">
              {arabicCheckoutText || 'العربية'}
            </span>
          </a>
        ) : (
          <a
            href={englishCheckoutLink || checkoutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block overflow-hidden px-6 py-4 font-normal text-black bg-white rounded-full group shadow-lg hover:shadow-gray-300/50 hover:scale-105 transition-all duration-500 ease-in-out w-full text-center"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-main transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left" />
            <span className="relative block text-base transform transition-all duration-300 ease-in-out group-hover:text-white">
              {englishCheckoutText || checkoutText}
            </span>
          </a>
        )}
      </div>

      {/* Desktop: Show dropdown */}
      <div className="hidden lg:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`cursor-pointer relative inline-block overflow-hidden px-6 py-3 xl:px-8 xl:py-4 font-normal text-black bg-white rounded-full group shadow-lg hover:shadow-gray-300/50 transition-all duration-500 ease-in-out ${isOpen ? 'scale-105 shadow-gray-300/50' : 'hover:scale-105'} w-auto`}
        >
          <span className={`absolute top-0 left-0 w-full h-full bg-main transform transition-all duration-500 ease-in-out origin-left ${isOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
          <span className={`relative block text-lg xl:text-xl transform transition-all duration-300 ease-in-out ${isOpen ? 'text-white' : 'group-hover:text-white'}`}>
            {checkoutText} {isOpen ? '▲' : '▼'}
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 lg:mt-3 w-full min-w-[200px] lg:min-w-[220px] bg-white/95 rounded-lg lg:rounded-xl shadow-2xl border border-gray-100 z-[9999] overflow-hidden backdrop-blur-sm animate-in slide-in-from-top-2 duration-300">
            <div className="py-1 lg:py-2">
              {englishCheckoutLink && (
                <a
                  href={englishCheckoutLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-3 py-3 lg:px-5 lg:py-4 text-xs lg:text-sm font-normal text-gray-700 hover:bg-gradient-to-r hover:from-main/5 hover:to-main/10 transition-all duration-300 hover:text-main hover:shadow-sm animate-in slide-in-from-left-2 delay-100"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-center w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 text-xs font-bold text-white bg-black rounded-full group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                    EN
                  </div>
                  <span className="flex-1 text-sm lg:text-base leading-tight overflow-hidden">
                    <span className="block truncate">
                      {englishCheckoutText || 'English'}
                    </span>
                  </span>
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {arabicCheckoutLink && (
                <a
                  href={arabicCheckoutLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-3 py-3 lg:px-5 lg:py-4 text-xs lg:text-sm font-normal text-gray-700 hover:bg-gradient-to-r hover:from-main/5 hover:to-main/10 transition-all duration-300 hover:text-main hover:shadow-sm animate-in slide-in-from-left-2 delay-200"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-center w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 text-xs font-bold text-white bg-black rounded-full group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                    ع
                  </div>
                  <span className="flex-1 text-sm lg:text-base leading-tight overflow-hidden">
                    <span className="block truncate">
                      {arabicCheckoutText || 'العربية'}
                    </span>
                  </span>
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutButton;
