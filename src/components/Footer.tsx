import React from 'react';
import { Phone, MessageCircle, Star, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso-900 text-ivory border-t border-walnut/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-light text-ivory tracking-tight block">
                J D R <span className="text-brass font-normal">SOFA LINING</span> WORK
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-beige/70 block mt-1">
                Sofa Upholstery, Sofa Lining & Furniture Restoration
              </span>
            </div>

            <p className="text-xs sm:text-sm text-beige/75 leading-relaxed font-light max-w-md">
              Dedicated to renewing everyday furniture into comfortable, enduring living centerpieces. We specialize in precision sofa lining, custom fabric replacement, high-resilience foam restuffing, and comprehensive furniture restoration.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/5 border border-beige/20 p-3">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-ivory">{BUSINESS_INFO.rating} / 5.0 Rating</span>
                <span className="text-beige/60 ml-1">({BUSINESS_INFO.reviewsCount} Google Reviews)</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brass">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-beige/80">
              <li><a href="#home" className="hover:text-ivory transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-ivory transition-colors">Our Services</a></li>
              <li><a href="#transformations" className="hover:text-ivory transition-colors">Before & After</a></li>
              <li><a href="#gallery" className="hover:text-ivory transition-colors">Transformation Gallery</a></li>
              <li><a href="#materials" className="hover:text-ivory transition-colors">Materials & Finishes</a></li>
              <li><a href="#process" className="hover:text-ivory transition-colors">Our 4-Step Process</a></li>
              <li><a href="#about" className="hover:text-ivory transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-ivory transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Proposed Services Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brass">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-beige/80">
              <li><a href="#services" className="hover:text-ivory transition-colors">Sofa Lining & Upholstery</a></li>
              <li><a href="#services" className="hover:text-ivory transition-colors">Sofa Fabric Replacement</a></li>
              <li><a href="#services" className="hover:text-ivory transition-colors">Cushion Foam Restuffing</a></li>
              <li><a href="#services" className="hover:text-ivory transition-colors">Sofa Restoration</a></li>
              <li><a href="#services" className="hover:text-ivory transition-colors">Furniture Upholstery</a></li>
              <li><a href="#services" className="hover:text-ivory transition-colors">Custom Upholstery</a></li>
            </ul>
          </div>

          {/* Direct Contact Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brass">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-beige/85">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-ivory hover:text-brass transition-colors p-2.5 bg-white/5 border border-beige/15"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: {BUSINESS_INFO.whatsappNumber}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center space-x-2 text-ivory hover:text-brass transition-colors p-2.5 bg-white/5 border border-beige/15"
              >
                <Phone className="w-4 h-4 text-brass flex-shrink-0" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <div className="pt-2 text-[11px] text-beige/65 leading-relaxed">
                <span className="font-semibold text-ivory block mb-0.5">Service Area & Workshop:</span>
                <span>Doorstep inspection and pickup service available across the region. Contact on WhatsApp to confirm service availability for your location.</span>
              </div>

              <div className="pt-1">
                <a
                  href="https://www.google.com/search?q=J+D+R+SOFA+LINING+WORK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[11px] text-brass hover:underline"
                >
                  <span>Google Business Profile (Link placeholder)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-beige/60 gap-4">
          <div>
            © {new Date().getFullYear()} J D R SOFA LINING WORK. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-ivory">Bespoke Furniture Upholstery & Lining</span>
            <span>·</span>
            <span>Hand-Finished Craftsmanship</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
