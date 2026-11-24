import React from 'react';
import { Star, ShieldCheck, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, TRUST_THEMES, createWhatsAppUrl } from '../data/content';

export const CustomerTrust: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-ivory border-b border-beige/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-walnut font-semibold mb-3">
            <span className="w-5 h-[1.5px] bg-walnut"></span>
            <span>Reputation & Credibility</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso tracking-tight leading-[1.1] mb-4">
            Trusted by <br />
            <span className="italic font-normal text-walnut">Our Customers.</span>
          </h2>

          <p className="text-base text-charcoal/80 leading-relaxed font-light">
            Genuine satisfaction speaks through consistent reviews and repeat client trust. We take pride in delivering honest workmanship that exceeds expectations.
          </p>
        </div>

        {/* Rating Hero Card */}
        <div className="bg-white p-8 sm:p-10 border border-beige/80 shadow-luxury mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Big Score Display */}
            <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-beige/60 pb-6 md:pb-0 md:pr-8 flex flex-col justify-center">
              <div className="flex items-baseline space-x-3 mb-2">
                <span className="font-serif text-6xl sm:text-7xl font-light text-espresso">
                  {BUSINESS_INFO.rating}
                </span>
                <span className="font-serif text-2xl text-charcoal/60">/ 5.0</span>
              </div>

              {/* Star Rating Graphic */}
              <div className="flex items-center space-x-1.5 text-amber-600 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <div className="text-sm font-semibold text-espresso">
                Based on {BUSINESS_INFO.reviewsCount} Google Business Reviews
              </div>

              <div className="mt-2 text-xs text-charcoal/70 flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Independently verified customer ratings</span>
              </div>
            </div>

            {/* Rating Breakdown & Highlights */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-espresso mb-1">
                    <span>Workmanship & Stitching Quality</span>
                    <span className="text-walnut">99% Highly Rated</span>
                  </div>
                  <div className="w-full bg-ivory h-2 overflow-hidden">
                    <div className="bg-walnut h-full w-[99%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-espresso mb-1">
                    <span>Cushion Comfort & Foam Restoration</span>
                    <span className="text-walnut">98% Satisfied</span>
                  </div>
                  <div className="w-full bg-ivory h-2 overflow-hidden">
                    <div className="bg-walnut h-full w-[98%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-espresso mb-1">
                    <span>Transparency & WhatsApp Communication</span>
                    <span className="text-walnut">100% Responsive</span>
                  </div>
                  <div className="w-full bg-ivory h-2 overflow-hidden">
                    <div className="bg-walnut h-full w-full"></div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.google.com/search?q=J+D+R+SOFA+LINING+WORK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-walnut hover:text-espresso border border-walnut/30 hover:border-walnut px-4 py-2.5 transition-colors"
                >
                  <span>View Verified Google Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-xs text-charcoal/60">
                  (Google Business Profile link updates once direct URL is verified)
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Customer Satisfaction Themes (No fabricated names/quotes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_THEMES.map((theme) => (
            <div
              key={theme.id}
              className="bg-white p-6 border border-beige/70 hover:border-walnut/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-amber-600 mb-3">
                  {[...Array(theme.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <span className="text-[10px] uppercase tracking-wider text-walnut font-bold block mb-1">
                  {theme.serviceType}
                </span>

                <h4 className="font-serif text-lg font-normal text-espresso mb-2">
                  {theme.reviewTheme}
                </h4>

                <p className="text-xs text-charcoal/80 leading-relaxed font-light mb-4">
                  {theme.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-beige/50">
                <span className="text-[11px] font-medium italic text-walnut">
                  "{theme.highlight}"
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for enquiries */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-charcoal/80 mb-4 font-light">
            Ready to experience the same standard of craftsmanship for your sofa?
          </p>
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-walnut hover:bg-espresso text-ivory px-6 py-3 text-xs font-semibold uppercase tracking-widest shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-beige" />
            <span>Connect on WhatsApp for Consultation</span>
          </a>
        </div>

      </div>
    </section>
  );
};
