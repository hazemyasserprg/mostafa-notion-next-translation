"use client";

import Image from "next/image";
import BlurText from "@/src/app/[locale]/_components/BlurText";
import ReactMarkdown from "react-markdown";
import { useTranslations } from "next-intl";

export default function BlogDetailsClient({ blog }) {
  const t = useTranslations("BlogSlug");

  const customComponents = {
    h1: ({ children }) => (
      <h1 className="text-4xl sm:text-5xl font-bold text-main mb-6 leading-tight tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight border-b border-main/30 pb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-main mb-4 leading-snug tracking-tight">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-200 text-lg leading-8 mb-6 font-light">
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
      <ul className="list-disc list-inside text-gray-200 text-lg leading-8 mb-6 ml-6 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-200 text-lg leading-8 mb-6 ml-6 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="mb-2">{children}</li>,
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-main pl-6 py-4 my-8 bg-main/5 rounded-r-lg">
        <p className="text-gray-200 text-lg italic font-light">{children}</p>
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-black/40 text-main px-3 py-1 rounded-md text-sm font-mono border border-main/20">
        {children}
      </code>
    ),
  };

  return (
    <BlurText>
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="toc-scroll p-0 border-l-2 border-main pl-6 sticky top-24 max-h-[80vh] overflow-y-auto">
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
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Header */}
            <header className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-main mb-8 leading-tight tracking-tight">
                {t(`${blog.title}.title`)}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm mb-10">
                <div className="flex items-center gap-2">
                  <span>{t(`${blog.title}.blogInfo.blogBy`)}</span>
                  <span className="text-white font-semibold">
                    {t(`${blog.title}.blogInfo.by`)}
                  </span>
                </div>
                <div className="w-1.5 h-1.5 bg-main rounded-full"></div>
                <div className="flex items-center gap-2">
                  <span>{t(`${blog.title}.blogInfo.dateIn`)}</span>
                  <span className="text-white font-semibold">
                    {t(`${blog.title}.blogInfo.date`)}
                  </span>
                </div>
                <div className="w-1.5 h-1.5 bg-main rounded-full"></div>
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
                  className="w-full rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </header>

            {/* Blog Content */}
            <article className="prose prose-invert prose-lg max-w-none">
              {blog.topics.map((topic, index) => (
                <section
                  key={topic.id}
                  id={topic.id}
                  className={`mb-16 scroll-mt-28 ${index !== blog.topics.length - 1 ? 'pb-12 border-b border-gray-800' : ''
                    }`}
                >
                  <div className="mb-8">
                    <ReactMarkdown components={customComponents}>
                      {`# ${t(`${blog.title}.topics.${topic.id}.heading`)}`}
                    </ReactMarkdown>
                  </div>
                  <div className="space-y-6">
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