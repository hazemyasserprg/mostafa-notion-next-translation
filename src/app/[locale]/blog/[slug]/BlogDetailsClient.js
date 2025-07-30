"use client";

import Image from "next/image";
import BlurText from "@/src/app/[locale]/_components/BlurText";
import ReactMarkdown from "react-markdown";
import { useTranslations } from "next-intl";

export default function BlogDetailsClient({ blog }) {
  const t = useTranslations("BlogSlug");

  const customComponents = {
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-main text-2xl font-normal cursor-pointer border-b-2 border-b-main hover:text-[25px] transition-all duration-300 hover:border-b-gray-300 hover:text-gray-300"
      >
        {children}
      </a>
    ),
    p: ({ children }) => (
      <p className="text-main leading-relaxed text-2xl font-normal">
        {children}
      </p>
    ),
  };

  return (
    <BlurText>
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="md:col-span-1 hidden md:block">
            <div className="p-0 border-l-2 border-main pl-6 sticky top-24 max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-6 tracking-tight">
                {t(`${blog.title}.toc`)}
              </h2>
              <ul className="space-y-4">
                {blog.topics.map((topic) => (
                  <li key={topic.id} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 mt-2 rounded-full bg-main transition-all group-hover:scale-125" />
                    <a
                      href={`#${topic.id}`}
                      className="text-gray-300 hover:text-main transition-colors duration-300 font-medium"
                    >
                      {t(`${blog.title}.topics.${topic.id}.tocTitle`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <h1 className="sm:text-4xl text-3xl font-bold text-center mb-2">
              {t(`${blog.title}.title`)}
            </h1>

            <p className="text-gray-400 text-center text-sm mb-6">
              {t(`${blog.title}.blogInfo.blogBy`)}
              <span className="text-white font-medium">
                {t(`${blog.title}.blogInfo.by`)}
              </span>
              {t(`${blog.title}.blogInfo.dateIn`)}
              <span className="text-white font-medium">
                {t(`${blog.title}.blogInfo.date`)}
              </span>
              {t(`${blog.title}.blogInfo.typeOf`)}
              <span className="text-white font-medium">
                {t(`${blog.title}.blogInfo.type`)}
              </span>
            </p>

            <Image
              src={t(`${blog.title}.image`)}
              alt={t(`${blog.title}.title`)}
              width={800}
              height={450}
              className="w-full rounded-2xl mb-10"
            />

            {blog.topics.map((topic) => (
              <section key={topic.id} id={topic.id} className="mb-16">
                {/* Heading with Markdown support */}
                <h3 className="text-3xl font-bold text-main mb-4">
                  <ReactMarkdown components={customComponents}>
                    {t(`${blog.title}.topics.${topic.id}.heading`)}
                  </ReactMarkdown>
                </h3>

                {/* Content as plain text with line breaks */}
                <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                  {t(`${blog.title}.topics.${topic.id}.content`)}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </BlurText>
  );
}
