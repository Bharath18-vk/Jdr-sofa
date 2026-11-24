import React from 'react';
import { WHY_CHOOSE_US } from '../data/content';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-walnut font-semibold mb-3">
            <span className="w-5 h-[1.5px] bg-walnut"></span>
            <span>Uncompromising Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso tracking-tight leading-[1.1] mb-4">
            Craftsmanship <br />
            <span className="italic font-normal text-walnut">You Can See.</span>
          </h2>

          <p className="text-base text-charcoal/80 leading-relaxed font-light">
            Every piece of furniture that enters our workshop receives dedicated attention. We combine structural integrity with tactile luxury, ensuring your sofa endures daily living with grace.
          </p>
        </div>

        {/* 5 Pillars Layout with Large Image Complement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 5 Refined Craftsmanship Cards */}
          <div className="lg:col-span-7 space-y-6">
            {WHY_CHOOSE_US.map((pillar) => (
              <div
                key={pillar.number}
                className="group p-6 bg-ivory/50 border border-beige/70 hover:border-walnut/60 transition-all duration-200 hover:bg-white hover:shadow-card flex items-start space-x-5"
              >
                <span className="font-serif text-3xl font-light text-walnut/60 group-hover:text-walnut transition-colors flex-shrink-0">
                  {pillar.number}
                </span>

                <div>
                  <h3 className="font-serif text-xl font-normal text-espresso group-hover:text-walnut transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Architectural Craft Imagery & Callouts */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden bg-espresso/5 border border-beige shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1739109136649-8ebdddc2a6c9?auto=format&fit=crop&w=1200&q=85"
                alt="Master artisan hand-guiding fabric and stitching at industrial sewing machine in workshop"
                className="w-full h-[520px] object-cover object-center"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent"></div>

              {/* Artisan Quote Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 border border-beige shadow-card">
                <div className="flex items-center space-x-2 text-walnut text-xs font-semibold uppercase tracking-widest mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The J D R Approach</span>
                </div>
                <blockquote className="font-serif text-base sm:text-lg text-espresso italic font-light leading-snug mb-3">
                  "Upholstery is not merely wrapping cloth over foam; it is sculpting comfortable, enduring architecture for your home."
                </blockquote>
                <div className="flex items-center space-x-2 text-xs text-charcoal/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-walnut" />
                  <span>Individualized frame & fabric alignment on every project</span>
                </div>
              </div>
            </div>

            {/* Corner Accent Box */}
            <div className="absolute -top-3 -left-3 bg-walnut text-ivory px-4 py-2 text-xs font-semibold uppercase tracking-widest hidden sm:block shadow-md">
              Hand-Guided Stitching
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
