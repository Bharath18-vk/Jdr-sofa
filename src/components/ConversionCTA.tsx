import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/content';

export const ConversionCTA: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-espresso text-ivory overflow-hidden">
      {/* Cinematic Background Image with Dark Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury living room sofa background"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/90 to-espresso/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Pill */}
        <div className="inline-flex items-center space-x-2 bg-walnut/40 border border-beige/20 px-4 py-1.5 mb-6 text-xs uppercase tracking-[0.25em] text-beige">
          <Sparkles className="w-3.5 h-3.5 text-brass" />
          <span>Craftsmanship Consultation</span>
        </div>

        {/* Master Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.08] mb-6 text-ivory">
          Ready to Give Your Sofa <br />
          <span className="italic font-normal text-brass">A Fresh Look?</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-beige/85 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Let's discuss your furniture and find the right upholstery solution. Send us photos on WhatsApp for an immediate consultation and transparent quote.
        </p>

        {/* Primary and Secondary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          {/* WhatsApp Primary CTA */}
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-walnut hover:bg-brass text-ivory hover:text-espresso px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest shadow-2xl transition-all duration-300 group"
          >
            <MessageCircle className="w-5 h-5 text-beige group-hover:text-espresso" />
            <span>CHAT WITH US ON WHATSAPP</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Call Secondary CTA */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 text-ivory border border-beige/40 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-brass" />
            <span>CALL US TODAY ({BUSINESS_INFO.phoneDisplay})</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-8 border-t border-beige/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-beige/70 font-light">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Direct WhatsApp: {BUSINESS_INFO.whatsappNumber}</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-brass" />
            <span>Rated 4.9/5 on Google · 66 Reviews</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Doorstep Inspection & Pickup Available</span>
          </div>
        </div>

      </div>
    </section>
  );
};
