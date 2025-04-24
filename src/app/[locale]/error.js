"use client";

import Link from "next/link";

export async function generateMetadata({ params }) {
  const isArabic = params.locale === "ar";

  const title = isArabic
    ? "حدث خطأ | مصطفى ياسر"
    : "Something Went Wrong | Mostafa Yasser";
  const description = isArabic
    ? "نأسف — حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى أو العودة إلى الصفحة الرئيسية."
    : "We&apos;re sorry — an unexpected error occurred. Please try again or go back to the homepage.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: "https://mostafayasser.com", // Adjust the URL if needed
      images: [
        {
          url: "/mostafa/mostafa.webp",
          width: 800,
          height: 600,
          alt: "Mostafa Yasser",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/mostafa/mostafa.webp"],
    },
  };
}

export default function Error({ error, reset }) {
  return (
    <div className="flex items-center justify-center min-h-screen -mt-40 bg-black text-white px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Something went wrong
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          We&apos;re sorry — an unexpected error occurred. Please try again or
          go back to the homepage.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="cursor-pointer px-6 py-3 bg-main text-black font-semibold rounded-lg hover:bg-transparent hover:text-white border border-main transition-all duration-300"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-6 py-3 bg-transparent text-white border border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
