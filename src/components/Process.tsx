import React from 'react';
import { PROCESS_STEPS, createWhatsAppUrl } from '../data/content';
import { MessageSquare, Sparkles, FileText, Armchair, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareQuote':
        return <MessageSquare className="w-5 h-5 text-walnut" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-walnut" />;
      case 'ReceiptCheck':
        return <FileText className="w-5 h-5 text-walnut" />;
      case 'Armchair':
      default:
        return <Armchair className="w-5 h-5 text-walnut" />;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-walnut font-semibold mb-3">
            <span className="w-5 h-[1.5px] bg-walnut"></span>
            <span>Seamless Experience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso tracking-tight leading-[1.1] mb-4">
            Your Sofa Transformation, <br />
            <span className="italic font-normal text-walnut">Made Simple.</span>
          </h2>

          <p className="text-base text-charcoal/80 leading-relaxed font-light">
            Revitalizing your furniture doesn't have to be complicated. Our straightforward 4-step workflow brings workshop precision directly to your home with zero fuss.
          </p>
        </div>

        {/* Timeline Grid: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Subtle horizontal timeline line on desktop */}
          <div className="hidden lg:block absolute top-14 left-12 right-12 h-[1px] bg-beige/80 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="bg-ivory/40 p-6 sm:p-7 border border-beige/70 hover:border-walnut transition-all duration-300 hover:shadow-card flex flex-col justify-between group"
              >
                <div>
                  {/* Step Badge and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white border border-beige flex items-center justify-center shadow-sm group-hover:bg-walnut group-hover:text-ivory transition-colors">
                      {getIcon(step.iconName)}
                    </div>
                    <span className="font-serif text-3xl font-light text-walnut/70 group-hover:text-walnut transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <span className="text-[10px] uppercase tracking-widest text-walnut font-bold block mb-1">
                    {step.title}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-espresso leading-snug mb-3">
                    {step.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Bullet details */}
                <div className="border-t border-beige/60 pt-4 space-y-1.5">
                  {step.bulletPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center space-x-1.5 text-xs text-charcoal/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-walnut flex-shrink-0"></span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive CTA Strip */}
        <div className="mt-14 p-6 sm:p-8 bg-ivory border border-beige flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-walnut/10 border border-walnut/30 flex items-center justify-center text-walnut flex-shrink-0">
              <span className="font-serif font-bold text-sm">01</span>
            </div>
            <div>
              <h4 className="font-serif text-lg text-espresso">
                Step 1 starts in under 60 seconds
              </h4>
              <p className="text-xs text-charcoal/70">
                Snap 2 photos of your sofa right now and message us on WhatsApp (+91 96000 94172).
              </p>
            </div>
          </div>

          <a
            href={createWhatsAppUrl("Hello J D R Sofa Lining Work, I am starting Step 1! Here are photos of my sofa for a free estimate.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center space-x-2 bg-walnut hover:bg-espresso text-ivory text-xs font-semibold uppercase tracking-widest px-6 py-3.5 transition-colors shadow-sm"
          >
            <span>Start Step 1 on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-beige" />
          </a>
        </div>

      </div>
    </section>
  );
};
