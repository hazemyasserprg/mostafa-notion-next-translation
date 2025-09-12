"use client";

import Image from "next/image";
import GoToTemplatesPageButton from "../../../_components/GoToTemplatesPageButton";
import { useTranslations } from "next-intl";
import HeroCoverImage from "./_components/HeroCoverImage";
import { useEffect, useRef, useState } from "react";

function Home({ template }) {
  const t = useTranslations("TemplateSlug");
  const [isVisible, setIsVisible] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviewRef = useRef(null);

  useEffect(() => {
    // Only set up observer if reviewSummary exists
    if (!t.has(`${template.name}.homeSec.reviewSummary`)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentRef = reviewRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [t, template.name]);

  // Auto-rotate reviews - Only if reviewSummary exists
  useEffect(() => {
    if (!t.has(`${template.name}.homeSec.reviewSummary`)) return;

    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => {
        const reviews = t.raw(`${template.name}.homeSec.reviewSummary.individualReviews`);
        return (prevIndex + 1) % (reviews?.length || 1);
      });
    }, 4000); // Change review every 4 seconds

    return () => clearInterval(interval);
  }, [t, template.name]);

  return (
    <section
      id="home"
      className="relative w-full flex flex-col items-center text-center overflow-visible px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto -mt-[50px]"
    >
      {/* Title */}
      <h1 className="flex flex-col items-center gap-4 mb-2 sm:mb-4 md:mb-6 max-w-2xl">
        <Image
          src={t(`${template.name}.homeSec.logoURL`)}
          alt={`${t(`${template.name}.name`)} Logo`}
          width={96}
          height={96}
          className="mx-auto rounded-2xl shadow-lg bg-white/80 p-2 transition-transform duration-300  hover:scale-105 hover:shadow-xl"
          quality={100}
          priority
        />
        <span className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-main leading-tight">
          {t(`${template.name}.homeSec.title`)}
        </span>
      </h1>

      {/* Description */}
      <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-2 sm:mb-4 md:mb-6 max-w-3xl  leading-relaxed">
        {t(`${template.name}.homeSec.description`)}
      </p>

      {/* CTA Buttons */}
      <div
        className="flex flex-col sm:flex-row flex-wrap 
      justify-center items-center 
      gap-2 mb-4 sm:mb-6 md:mb-8 mx-auto
      mt-2 sm:mt-0
    "
      >
        <a
          href="#pricing"
          className="
        relative inline-block overflow-hidden 
        px-6 py-3 
        text-base sm:text-lg 
        font-semibold text-black 
        bg-main rounded-full group 
        shadow-lg hover:shadow-gray-300/50 
        hover:scale-105 
        transition-all duration-500 ease-in-out
      "
        >
          <span
            className="
          absolute top-0 left-0 w-full h-full 
          bg-black transform scale-x-0 
          group-hover:scale-x-100 
          transition-all duration-500 ease-in-out origin-left
        "
          />
          <span
            className="
          relative block transform 
          transition-all duration-300 ease-in-out 
          group-hover:text-white
        "
          >
            {t(`${template.name}.checkout`)}
          </span>
        </a>

        <GoToTemplatesPageButton
          text={t(`${template.name}.homeSec.dashboardButtonText`)}
          className="
          px-6 py-3 
          text-base sm:text-lg 
          font-semibold
          "
          initial=""
          transition=""
          href="#dashboard"
        />
      </div>

      {/* Review Summary - Only show if template has reviewSummary data */}
      {t.has(`${template.name}.homeSec.reviewSummary`) && (
        <div
          ref={reviewRef}
          className={`w-full max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="bg-main/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-main/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-main/50 group">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              {/* Rating Stars */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-main fill-current drop-shadow-[0_0_3px_rgba(215,177,128,0.4)] hover:scale-110 transition-all duration-300 ${isVisible ? 'animate-pulse-star' : ''
                      }`}
                    style={{
                      animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                      animationDuration: '2s'
                    }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className={`ml-2 text-sm sm:text-base font-bold text-main drop-shadow-[0_0_3px_rgba(215,177,128,0.4)] transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: isVisible ? '0.3s' : '0s' }}>
                  {t(`${template.name}.homeSec.reviewSummary.averageRating`)}
                </span>
              </div>

              {/* Review Count and Download Count */}
              <div className={`flex items-center gap-3 text-sm sm:text-base text-secondary font-medium transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: isVisible ? '0.5s' : '0s' }}>
                <span>({t(`${template.name}.homeSec.reviewSummary.totalReviews`)} reviews)</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-main font-semibold">{t(`${template.name}.homeSec.reviewSummary.downloadCount`)} downloads</span>
              </div>
            </div>

            {/* Rotating Individual Reviews */}
            <div className="mt-4 min-h-[80px] flex items-center justify-center">
              <div className="text-center max-w-xl mx-auto">
                <p className={`text-sm sm:text-base text-muted-foreground italic leading-relaxed group-hover:text-secondary transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: isVisible ? '0.7s' : '0s' }}>
                  &ldquo;{t(`${template.name}.homeSec.reviewSummary.individualReviews.${currentReviewIndex}.text`)}&rdquo;
                </p>
                <div className={`mt-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-secondary transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: isVisible ? '0.9s' : '0s' }}>
                  <span className="font-semibold">— {t(`${template.name}.homeSec.reviewSummary.individualReviews.${currentReviewIndex}.author`)}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-muted-foreground">{t(`${template.name}.homeSec.reviewSummary.individualReviews.${currentReviewIndex}.date`)}</span>
                </div>
              </div>
            </div>

            {/* Review Indicators */}
            <div className={`flex justify-center gap-2 mt-4 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? '1.1s' : '0s' }}>
              {(() => {
                const reviews = t.raw(`${template.name}.homeSec.reviewSummary.individualReviews`);
                return reviews?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReviewIndex(index)}
                    className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ${index === currentReviewIndex
                      ? 'bg-main scale-125'
                      : 'bg-main/30 hover:bg-main/50'
                      }`}
                  />
                ));
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Cover Image */}
      <div className="w-full max-w-6xl mt-4 md:mt-6">
        <HeroCoverImage template={template} />
      </div>
    </section>
  );
}

export default Home;
