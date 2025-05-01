"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import imageOne from "@/public/moreDetials/1.png";
import imageTwo from "@/public/moreDetials/1.png";
import imageThree from "@/public/moreDetials/1.png";
import { useLocale } from "next-intl";

export default function Scrolling3DImages() {
  const locale = useLocale();

  return (
    <div className="w-full max-w-full bg-[#1A1A1A] shadow-2xl overflow-hidden border-8 border-[#2D2D2D] rounded-2xl">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <div
          className="w-[1100px] h-[1100px]"
          style={{ perspective: "6000px" }}
        >
          <motion.div
            className={`flex gap-4 w-full h-full origin-top-left ${
              locale === "ar" ? "translate-x-[-200px]" : "translate-x-[-500px]"
            }`}
            initial={{ rotateX: 50, rotateY: 0, rotateZ: -30 }}
            animate={{ rotateX: 50, rotateY: 0, rotateZ: -30 }}
            transition={{ duration: 0 }}
          >
            {[imageOne, imageTwo, imageThree].map((img, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col gap-10"
                animate={{ y: idx === 1 ? "30%" : "-50%" }}
                transition={{
                  duration: 70 + idx * 5,
                  ease: "linear",
                  repeat: 0,
                }}
              >
                <Image
                  src={img}
                  alt={`Image ${idx + 1}`}
                  className="rounded-xl w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto object-cover shadow-lg"
                />
                <Image
                  src={img}
                  alt={`Image ${idx + 1} repeat`}
                  className="rounded-xl w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto object-cover shadow-lg"
                />
                <Image
                  src={img}
                  alt={`Image ${idx + 1} repeat`}
                  className="rounded-xl w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto object-cover shadow-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
