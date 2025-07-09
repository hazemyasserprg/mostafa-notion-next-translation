"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCoverImage({ template }) {
  const t = useTranslations("TemplateSlug");
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 1.05, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={imgRef}
      className="
        w-full 
        max-w-6xl 
        mx-auto 
        rounded-3xl 
        overflow-hidden 
        shadow-2xl 
        mt-8 sm:mt-12
        px-2 sm:px-4
      "
    >
      <div className="relative w-full aspect-auto">
        <Image
          src="/study-hub/heroImage.webp"
          alt={`${t(`${template.name}.name`)} Cover`}
          width={1600}
          height={900}
          className="
            w-full 
            h-auto 
            object-contain 
            rounded-3xl
          "
          quality={90}
          priority
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 90vw,
            80vw
          "
        />
      </div>
    </div>
  );
}
