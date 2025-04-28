import { useTranslations } from "next-intl";
import { RiNotionFill } from "react-icons/ri";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import FilloutSlider from "@/src/app/[locale]/_components/FilloutSliderEmbed";
import AnimatedInView from "./AnimatedInView";

function Footer() {
  const t = useTranslations("Footer");

  return (
    <AnimatedInView threshold={0.3}>
      <div className="max-w-7xl mx-auto px-6 pt-20 lg:pt-40 pb-18 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-main font-semibold text-lg md:text-xl">
              {t("follow")}
              <div className="w-10 h-1 bg-main rounded-full mt-1"></div>
            </h4>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div className="space-y-10">
            <form
              action="https://app.gumroad.com/follow_from_embed_form"
              method="POST"
              target="_blank"
              className="flex flex-col sm:flex-row gap-4"
            >
              <input type="hidden" name="seller_id" value="1089014516697" />
              <input
                type="email"
                name="email"
                placeholder={t("emailPlaceholder")}
                required
                className="flex-1 px-5 py-3 rounded-lg bg-white/5 text-white placeholder:text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-main transition"
              />
              <button
                type="submit"
                className="cursor-pointer px-6 py-3 bg-main text-black font-semibold rounded-lg hover:bg-transparent hover:text-white border border-main transition-all duration-300"
              >
                {t("subscribe")}
              </button>
            </form>
            <div className="flex space-x-5">
              {[
                {
                  icon: BsFacebook,
                  link: "https://facebook.com/engmsyasser",
                  label: "Facebook",
                },
                {
                  icon: BsTwitterX,
                  link: "https://x.com/engmsyasser",
                  label: "Twitter",
                },
                {
                  icon: BsInstagram,
                  link: "https://instagram.com/engmsyasser",
                  label: "Instagram",
                },
                {
                  icon: BsLinkedin,
                  link: "https://linkedin.com/in/engmsyasser",
                  label: "LinkedIn",
                },
                {
                  icon: BsYoutube,
                  link: "https://youtube.com/@engmsyasser",
                  label: "YouTube",
                },
                {
                  icon: BsTelegram,
                  link: "https://t.me/engmsyasser",
                  label: "Telegram",
                },
              ].map(({ icon: Icon, link, label }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${label}`}
                  className="text-gray-400 hover:text-main transition duration-300 pl-2"
                >
                  <span className="sr-only">{label}</span>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex items-center gap-2 mb-6 border-b border-gray-700 pb-2">
            <RiNotionFill className="text-main text-2xl" size={30} />
            <h4 className="text-main font-semibold text-base md:text-lg">
              {t("popularVideos")}
            </h4>
          </div>

          <div className="space-y-4">
            {[
              {
                img: "/youtube/1.webp",
                video: "https://youtube.com/watch?v=bumkYuAexk0",
                title: t(`youtube.titleOne`),
              },
              {
                img: "/youtube/2.webp",
                video: "https://youtube.com/watch?v=tXpGGccqx60",
                title: t(`youtube.titleTwo`),
              },
              {
                img: "/youtube/3.webp",
                video: "https://youtube.com/watch?v=JMH2oLmPohw",
                title: t(`youtube.titleThree`),
              },
            ].map(({ img, video, title }, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 p-3 bg-white/5 rounded-xl border border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-[160px] h-[80px] overflow-hidden rounded-lg border border-gray-600 group shrink-0">
                  <Image
                    src={img}
                    alt={`Template ${idx + 1}`}
                    width={320}
                    height={160}
                    quality={90}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <a
                  href={video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main text-xs md:text-sm font-medium flex items-center gap-1 cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                >
                  <span>{title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-x-5">
            <h4 className="text-main font-semibold text-base mb-2">
              {t("legal")}
            </h4>
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-main transition"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-400 hover:text-main transition"
            >
              {t("terms")}
            </Link>
          </div>

          <div className="space-x-5">
            <h4 className="text-main font-semibold text-base mb-2">
              {t("customTemplate")}
            </h4>
            <FilloutSlider className="text-sm text-gray-400 hover:text-main transition cursor-pointer">
              {t("customTemplateCta")}
            </FilloutSlider>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6" />
      </div>

      <div
        className="max-w-7xl mx-auto px-6 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400"
        dir="ltr"
      >
        <p className="text-center md:text-left">{t("copyright")}</p>
        <p className="text-center md:text-right">
          {t("developedBy")}{" "}
          <a
            href="https://hazemyasser.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:text-main transition"
          >
            {t("developer")}
          </a>
        </p>
      </div>
    </AnimatedInView>
  );
}

export default Footer;
