"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Gift, Percent } from "lucide-react";

export default function PremiumOfferPopup({ template, isOpen, onClose }) {
  const t = useTranslations("TemplateSlug");
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Coupon code - MS30 for 30% off
  const couponCode = "MS30";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyCoupon = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy coupon code:', err);
    }
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 100 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm w-full"
        >
          {/* Popup Content */}
          <motion.div
            className="relative bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            </button>

            {/* Header with Gift Icon */}
            <div className="relative bg-gradient-to-r from-main to-main/80 p-4 text-center">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", damping: 10 }}
                  className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full"
                >
                  <Gift className="w-5 h-5 text-white" />
                </motion.div>
                <div className="flex-1 text-left">
                  <h2 className="text-lg font-bold text-white">
                    {t("premiumOffer.title")}
                  </h2>
                  <p className="text-white/90 text-xs">
                    {t("premiumOffer.subtitle")}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Discount Badge */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", damping: 10 }}
                  className="inline-flex items-center gap-2 bg-main/10 text-main px-3 py-1 rounded-full text-sm font-bold"
                >
                  <Percent className="w-4 h-4" />
                  30% OFF
                </motion.div>
              </div>

              {/* Coupon Code Section */}
              <div className="space-y-2">
                <p className="text-center text-neutral-600 dark:text-neutral-400 text-xs">
                  {t("premiumOffer.couponDescription")}
                </p>

                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 border-2 border-dashed border-main/30">
                  <div className="flex items-center justify-between gap-2">
                    <code className="flex-1 font-mono text-base font-bold text-main bg-white dark:bg-neutral-700 px-2 py-1 rounded">
                      {couponCode}
                    </code>
                    <button
                      onClick={handleCopyCoupon}
                      className={`flex items-center gap-1 px-3 py-1 rounded text-xs font-medium transition-all cursor-pointer ${copied
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-main text-black hover:bg-main/80"
                        }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3" />
                          {t("premiumOffer.copied")}
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          {t("premiumOffer.copy")}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="flex-1 px-3 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  {t("premiumOffer.maybeLater")}
                </button>
                <button
                  onClick={() => {
                    // You can add navigation to checkout or pricing section here
                    window.location.href = `#pricing`;
                    onClose();
                  }}
                  className="flex-1 px-3 py-2 bg-main text-black rounded-lg text-sm font-bold hover:bg-main/80 transition-colors cursor-pointer"
                >
                  {t("premiumOffer.getOffer")}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
