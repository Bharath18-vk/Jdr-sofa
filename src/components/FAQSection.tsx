import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-24 bg-ivory border-b border-beige/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-walnut font-semibold mb-3">
            <span className="w-5 h-[1.5px] bg-walnut"></span>
            <span>Clarity & Guidance</span>
            <span className="w-5 h-[1.5px] bg-walnut"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-light text-espresso tracking-tight leading-[1.1] mb-4">
            Frequently Asked <br />
            <span className="italic font-normal text-walnut">Questions</span>
          </h2>

          <p className="text-sm text-charcoal/80 max-w-xl mx-auto font-light leading-relaxed">
            Everything you need to know about sofa relining, fabric selection, turnaround times, and cushion foam restuffing.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-beige/80 transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl text-espresso font-normal">
                    {faq.question}
                  </span>
                  <span className="p-1 text-walnut flex-shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light border-t border-beige/40">
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
};
