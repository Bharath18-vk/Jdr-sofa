import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { createWhatsAppUrl } from '../data/content';

export const Introduction: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-ivory relative border-b border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Editorial Sofa Photograph with Artisan Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden bg-espresso/10 border border-beige/80 shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85"
                alt="Artisan crafted upholstered sofa in a warm, architectural interior"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent"></div>

              {/* Artisan Detail Callout Box */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 border border-beige shadow-card">
                <div className="flex items-center justify-between border-b border-beige/60 pb-3 mb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-walnut font-bold block">Artisan Focus</span>
                    <span className="font-serif text-lg text-espresso font-medium">Bespoke Fit & Lasting Cushion Density</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-ivory text-walnut border border-walnut/20">
                    Hand-Finished
                  </span>
                </div>
                <p className="text-xs text-charcoal/80 leading-relaxed font-light">
                  Every sofa frame has unique geometry. We cut each panel by hand, align seams with surgical precision, and install internal reinforcements designed for enduring everyday living.
                </p>
              </div>
            </div>

            {/* Accent decorative border */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-walnut pointer-events-none hidden sm:block"></div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-walnut font-semibold mb-3">
              <span className="w-5 h-[1.5px] bg-walnut"></span>
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso tracking-tight leading-[1.1] mb-6">
              Your Furniture <br />
              <span className="italic font-normal text-walnut">Deserves Better.</span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal/90 leading-relaxed mb-6 font-light">
              At <strong className="font-semibold text-espresso">J D R SOFA LINING WORK</strong>, we believe quality furniture shouldn't be discarded when fabric fades or cushions begin to sag. Most older sofas possess robust, seasoned wooden frames that far outshine mass-produced modern alternatives.
            </p>

            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed mb-8 font-light">
              We specialize in revitalizing your treasured seating with exceptional sofa lining, fabric replacement, and custom cushion rebuilds. By pairing hand-guided upholstery with premium materials, we restore structural comfort and sophisticated aesthetic appeal.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3 bg-white/70 p-3.5 border border-beige/60">
                <CheckCircle2 className="w-4 h-4 text-walnut flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-espresso">Preserve Solid Frames</h4>
                  <p className="text-xs text-charcoal/70 mt-0.5">Retain your durable furniture frame while upgrading surface aesthetics.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white/70 p-3.5 border border-beige/60">
                <CheckCircle2 className="w-4 h-4 text-walnut flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-espresso">Custom Material Selection</h4>
                  <p className="text-xs text-charcoal/70 mt-0.5">Velvets, performance weaves, linens, and durable leatherettes.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white/70 p-3.5 border border-beige/60">
                <CheckCircle2 className="w-4 h-4 text-walnut flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-espresso">High-Resilience Comfort</h4>
                  <p className="text-xs text-charcoal/70 mt-0.5">Ergonomic foam restuffing tailored to your desired firmness.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white/70 p-3.5 border border-beige/60">
                <CheckCircle2 className="w-4 h-4 text-walnut flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-espresso">Transparent Quotations</h4>
                  <p className="text-xs text-charcoal/70 mt-0.5">Clear pricing upfront on WhatsApp before any work commences.</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Discussion CTA */}
            <div>
              <a
                href={createWhatsAppUrl("Hello J D R Sofa Lining Work, I would like to consult with you about restoring my furniture.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-espresso hover:text-walnut border-b-2 border-espresso hover:border-walnut pb-1.5 transition-colors group"
              >
                <span>Discuss Your Furniture Requirements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
