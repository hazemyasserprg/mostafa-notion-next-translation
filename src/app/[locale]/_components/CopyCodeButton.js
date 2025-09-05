"use client";

import { useState } from "react";

export default function CopyCodeButton({ code, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy code: ", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        absolute top-3 right-3 
        px-3 py-1.5 
        text-xs font-semibold 
        rounded-lg 
        transition-all duration-300 
        hover:scale-105 
        active:scale-95
        backdrop-blur-sm
        border
        ${copied
          ? "bg-main text-black border-main shadow-lg shadow-main/30"
          : "bg-black/60 text-main border-main/40 hover:bg-main/10 hover:border-main/60 hover:text-white hover:shadow-md hover:shadow-main/20"
        }
        ${className}
      `}
      title={copied ? "Copied!" : "Copy code"}
    >
      {copied ? (
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Copied!</span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">Copy</span>
        </div>
      )}
    </button>
  );
}
