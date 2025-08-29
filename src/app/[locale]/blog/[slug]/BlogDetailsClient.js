"use client";

import Image from "next/image";
import BlurText from "@/src/app/[locale]/_components/BlurText";
import ReactMarkdown from "react-markdown";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function BlogDetailsClient({ blog }) {
  const t = useTranslations("BlogSlug");
  const [isTocOpen, setIsTocOpen] = useState(false);

  const customComponents = {
    h1: ({ children }) => (
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-main mb-4 sm:mb-6 leading-tight tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight border-b border-main/30 pb-2 sm:pb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-main mb-3 sm:mb-4 leading-snug tracking-tight">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 mb-4 sm:mb-6 font-light">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-main hover:text-white transition-colors duration-200 font-bold border-b border-main/50 hover:border-white"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-gray-200 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 mb-4 sm:mb-6 ml-4 sm:ml-6 space-y-1 sm:space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-200 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 mb-4 sm:mb-6 ml-4 sm:ml-6 space-y-1 sm:space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="mb-1 sm:mb-2">{children}</li>,
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-main pl-3 sm:pl-4 md:pl-6 py-3 sm:py-4 my-4 sm:my-6 md:my-8 bg-main/5 rounded-r-lg">
        <p className="text-gray-200 text-sm sm:text-base md:text-lg italic font-light">{children}</p>
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-black/40 text-main px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-mono border border-main/20">
        {children}
      </code>
    ),
  };

  return (
    <BlurText>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        {/* Mobile Table of Contents Toggle - Hidden on small screens */}
        <div className="hidden md:block lg:hidden mb-6">
          <button
            onClick={() => setIsTocOpen(!isTocOpen)}
            className="w-full bg-main/10 border border-main/30 rounded-lg p-4 text-left hover:bg-main/20 transition-all duration-200 ease-in-out"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-main">
                {t(`${blog.title}.toc`)}
              </h2>
              <svg
                className={`w-5 h-5 text-main transition-transform duration-200 ease-in-out ${isTocOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {/* Mobile TOC Dropdown */}
          <div className={`mt-4 bg-black/20 border border-main/20 rounded-lg p-4 max-h-64 overflow-y-auto transition-all duration-200 ease-in-out ${isTocOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
            <ul className="space-y-3">
              {blog.topics.map((topic) => (
                <li key={topic.id} className="flex items-start gap-3 group">
                  <div className="w-2 h-2 mt-2 rounded-full bg-main transition-all duration-200 group-hover:scale-125 flex-shrink-0" />
                  <a
                    href={`#${topic.id}`}
                    className="text-gray-300 hover:text-main transition-colors duration-300 font-medium text-sm"
                    onClick={() => setIsTocOpen(false)}
                  >
                    {t(`${blog.title}.topics.${topic.id}.tocTitle`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Desktop Table of Contents */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="toc-scroll p-0 border-l-2 border-main pl-6 sticky top-24 max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-6 tracking-tight">
                {t(`${blog.title}.toc`)}
              </h2>
              <ul className="space-y-4">
                {blog.topics.map((topic) => (
                  <li key={topic.id} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 mt-2 rounded-full bg-main transition-all duration-200 group-hover:scale-125" />
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
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Header */}
            <header className="text-center mb-8 sm:mb-12 md:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-main mb-6 sm:mb-8 leading-tight tracking-tight">
                {t(`${blog.title}.title`)}
              </h1>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8 md:mb-10">
                <div className="flex items-center gap-2">
                  <span>{t(`${blog.title}.blogInfo.blogBy`)}</span>
                  <span className="text-white font-semibold">
                    {t(`${blog.title}.blogInfo.by`)}
                  </span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 bg-main rounded-full"></div>
                <div className="flex items-center gap-2">
                  <span>{t(`${blog.title}.blogInfo.dateIn`)}</span>
                  <span className="text-white font-semibold">
                    {t(`${blog.title}.blogInfo.date`)}
                  </span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 bg-main rounded-full"></div>
                <div className="flex items-center gap-2">
                  <span>{t(`${blog.title}.blogInfo.typeOf`)}</span>
                  <span className="text-white font-semibold">
                    {t(`${blog.title}.blogInfo.type`)}
                  </span>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={t(`${blog.title}.image`)}
                  alt={t(`${blog.title}.title`)}
                  width={800}
                  height={450}
                  className="w-full rounded-xl sm:rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl sm:rounded-2xl"></div>
              </div>
            </header>

            {/* Blog Content */}
            <article className="prose prose-invert prose-lg max-w-none">
              {blog.topics.map((topic, index) => (
                <section
                  key={topic.id}
                  id={topic.id}
                  className={`mb-8 sm:mb-12 md:mb-16 scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 ${index !== blog.topics.length - 1 ? 'pb-6 sm:pb-8 md:pb-12 border-b border-gray-800' : ''}`}
                >
                  <div className="mb-6 sm:mb-8">
                    <ReactMarkdown components={customComponents}>
                      {`# ${t(`${blog.title}.topics.${topic.id}.heading`)}`}
                    </ReactMarkdown>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    <ReactMarkdown components={customComponents}>
                      {t(`${blog.title}.topics.${topic.id}.content`)}
                    </ReactMarkdown>
                  </div>
                </section>
              ))}
            </article>
          </main>
        </div>
      </div>
    </BlurText>
  );
}