/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section 
      id="faq"
      className="bg-brand-bg py-24 px-4 md:px-8 border-b border-brand-border"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Title blocks */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase block font-bold">
            QUESTIONS
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase italic text-white leading-none">
            EVERYTHING YOU NEED TO KNOW.
          </h2>
        </div>

        {/* 7 Accordion items */}
        <div className="space-y-3 text-left">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-brand-surface border border-brand-border shadow-md"
              >
                {/* Trigger Button bar */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 md:p-6 flex items-center justify-between text-left focus:outline-none focus:ring-0 select-none cursor-pointer group"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-brand-lime shrink-0" />
                    <span className="font-display font-semibold text-white text-base md:text-lg group-hover:text-brand-lime transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-lime transition-transform duration-300 shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Answer pane with height transition or clean text reveals */}
                {isOpen && (
                  <div className="p-5 md:p-6 pt-0 border-t border-brand-border/40 text-sm text-[#B2BAC7] font-sans font-light leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
