"use client";

import { useRouter } from "@/src/i18n/navigation";
import { usePathname } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const locales = {
  en: "ar",
  ar: "en",
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchTo = locales[currentLocale];

  const handleClick = () => {
    // Use replace instead of push to prevent adding to history stack
    router.replace(pathname, { locale: switchTo });
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center rounded-full border lg:border-white/20 border-none bg-transparent hover:bg-white/5 backdrop-blur-sm hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      <span className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] flex items-center justify-center text-main hover:opacity-50 transition duration-200 mt-0.5 lg:mt-0">
        <GlobeAltIcon className="w-8 h-8" />
      </span>
    </button>
  );
}
