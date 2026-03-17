"use client";

import { useState } from "react";

interface FAQSectionProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-xl overflow-hidden bg-white transition-all duration-300 ${
              isOpen
                ? "border-[var(--accent)] shadow-sm"
                : "border-[var(--border)] hover:border-[var(--accent)]/50"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-[var(--dark)] hover:bg-gray-50/50 transition-colors cursor-pointer"
            >
              <span>{faq.question}</span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? "bg-[var(--accent)] text-white rotate-180"
                    : "bg-[var(--primary-light)] text-[var(--text-light)]"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <div
              className="transition-all duration-300 overflow-hidden"
              style={{
                maxHeight: isOpen ? "500px" : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="px-6 pb-5 text-sm text-[var(--text-light)] leading-relaxed border-t border-[var(--border)]/50 pt-4">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
