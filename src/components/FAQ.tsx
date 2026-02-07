"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/i18n";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState < number | null > (null);
  const { t, tArray } = useTranslation();

  const faqs = tArray < { question: string; answer: string } > ('faq.questions');

  return (
    <section className="py-16 bg-[#0c1015]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#c9a96e] text-center mb-12">
          {t('faq.title')}
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-600"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 flex items-center justify-between text-left"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <span className="text-[#c9a96e] text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-400 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
