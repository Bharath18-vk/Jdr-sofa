import React from 'react';
import { Star, ArrowRight, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/content';

interface HeroProps {
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-20 flex flex-col justify-between overflow-hidden bg-ivory">
      {/* Background Architectural Texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-grow flex flex-col justify-center">
        {/* Top Trust Indicator */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="inline-flex items-center space-x-2 bg-white/90 border border-beige/60 px-3.5 py-1.5 shadow-sm">
            <div className="flex items-center text-amber-600">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-semibold text-espresso tracking-tight">
              Rated {BUSINESS_INFO.rating}/5 on Google
            </span>
            <span className="text-charcoal/40 text-xs">·</span>
            <span className="text-xs text-charcoal/80 font-medium">
              {BUSINESS_INFO.reviewsCount} Reviews
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-medium text-walnut uppercase tracking-widest bg-walnut/5 px-3 py-1.5 border border-walnut/10">
            <ShieldCheck className="w-3.5 h-3.5 text-walnut" />
            <span>Master Upholstery & Cushion Craft</span>
          </div>
        </div>

        {/* Hero Grid: Editorial Typography Left, Cinematic Hero Image Center-Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-walnut font-semibold mb-3">
              <span className="w-6 h-[1.5px] bg-walnut"></span>
              <span>Bespoke Furniture Rebirth</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-espresso tracking-tight leading-[1.05] mb-5 sm:mb-6">
              Give Your Sofa<br />
              <span className="font-normal italic text-walnut">A New Life.</span>
            </h1>

            <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed font-light mb-8 max-w-xl">
              Transforming everyday furniture into beautiful, comfortable spaces through quality sofa lining and upholstery craftsmanship.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-walnut hover:bg-espresso text-ivory px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group"
              >
                <MessageCircle className="w-4 h-4 text-beige" />
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#transformations"
                className="inline-flex items-center justify-center space-x-2 bg-white/80 hover:bg-white text-espresso border border-beige/90 px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest hover:border-walnut transition-all duration-200"
              >
                <span>EXPLORE OUR WORK</span>
              </a>
            </div>

            {/* Quick Consultation Badge */}
            <div className="border-t border-beige/60 pt-5 flex items-center justify-between text-xs text-charcoal/80">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>WhatsApp Active for Instant Quotes</span>
              </div>
              <button
                onClick={onOpenEstimator}
                className="text-walnut hover:text-espresso font-semibold underline underline-offset-4"
              >
                Try Price Estimator →
              </button>
            </div>
          </div>

          {/* Right Column: Cinematic Photography of Upholstered Luxury Sofa */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-none overflow-hidden shadow-2xl bg-espresso/5 border border-beige/70 group">
              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=85"
                alt="Beautifully upholstered luxury emerald green sofa in a sophisticated contemporary interior"
                className="w-full h-[360px] sm:h-[480px] lg:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="eager"
              />

              {/* Ambient Shadow & Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/15 to-transparent"></div>

              {/* Bottom Image Overlay Badges */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-ivory">
                <div className="bg-espresso/85 backdrop-blur-md p-3 sm:p-4 border border-beige/30 max-w-sm">
                  <div className="flex items-center space-x-2 text-brass text-xs font-serif uppercase tracking-widest mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Signature Upholstery Standard</span>
                  </div>
                  <p className="text-xs text-ivory/90 font-light leading-snug">
                    Deep emerald micro-velvet, reinforced coil foundation, and high-resilience foam restuffing.
                  </p>
                </div>

                <div className="bg-ivory/95 backdrop-blur-md text-espresso px-4 py-2.5 border border-beige text-xs font-semibold uppercase tracking-wider hidden sm:block">
                  Doorstep Inspection Available
                </div>
              </div>
            </div>

            {/* Subtle floating craftsmanship pill */}
            <div className="absolute -top-3 -right-3 hidden sm:flex items-center space-x-2 bg-white border border-beige px-4 py-2 shadow-card text-xs font-medium text-espresso">
              <span className="w-2 h-2 rounded-full bg-walnut"></span>
              <span>100% Hand-Tailored Lining</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Strip: 4 Craft Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-b border-beige/60 py-5 sm:py-6">
          <div className="space-y-1">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-walnut font-semibold block">Craftsmanship</span>
            <p className="text-xs sm:text-sm font-medium text-espresso">Double-Stitched Precision</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-walnut font-semibold block">Materials</span>
            <p className="text-xs sm:text-sm font-medium text-espresso">Velvets, Linens & Leatherettes</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-walnut font-semibold block">Comfort Core</span>
            <p className="text-xs sm:text-sm font-medium text-espresso">32D–50D High-Resilience Foam</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-walnut font-semibold block">Customer Trust</span>
            <p className="text-xs sm:text-sm font-medium text-espresso">4.9/5 Rating · 66 Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};
