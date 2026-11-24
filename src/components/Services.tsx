import React from 'react';
import { SERVICES, createWhatsAppUrl } from '../data/content';
import { MessageCircle, Check, Info } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-walnut font-semibold mb-3">
            <span className="w-5 h-[1.5px] bg-walnut"></span>
            <span>Comprehensive Craftsmanship</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso tracking-tight leading-[1.1] mb-4">
            Our Services & <br />
            <span className="italic font-normal text-walnut">Upholstery Solutions</span>
          </h2>

          <p className="text-base text-charcoal/80 leading-relaxed font-light">
            From minor fabric tear repairs to complete strip-down relining and cushion core revitalization. Each piece is treated with meticulous care to deliver enduring comfort and timeless beauty.
          </p>

          {/* Business Confirmation Disclaimer */}
          <div className="mt-4 flex items-center space-x-2 text-xs text-charcoal/60 bg-ivory/70 border border-beige/60 px-3.5 py-2">
            <Info className="w-3.5 h-3.5 text-walnut flex-shrink-0" />
            <span>
              Proposed service offerings subject to business confirmation. Work is customized to your specific sofa build and fabric choice.
            </span>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col bg-ivory/40 border border-beige/70 hover:border-walnut/50 transition-all duration-300 hover:shadow-luxury overflow-hidden"
            >
              {/* Image Container with Zoom & Badge */}
              <div className="relative h-60 overflow-hidden bg-espresso/5">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent"></div>

                {service.badge && (
                  <span className="absolute top-3 right-3 bg-walnut text-ivory text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 shadow-sm">
                    {service.badge}
                  </span>
                )}

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs text-beige tracking-wider uppercase font-medium">
                    {service.tagline}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-espresso group-hover:text-walnut transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6 border-t border-beige/50 pt-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-charcoal/80">
                        <Check className="w-3.5 h-3.5 text-walnut flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card WhatsApp CTA */}
                <div className="pt-4 border-t border-beige/60">
                  <a
                    href={createWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-white hover:bg-walnut text-espresso hover:text-ivory border border-beige/90 hover:border-walnut py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-all duration-200 group/btn"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-walnut group-hover/btn:text-beige transition-colors" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-ivory p-6 sm:p-8 border border-beige flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-serif text-xl sm:text-2xl text-espresso mb-1">
              Have a unique furniture piece or custom requirement?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal/80 font-light">
              Send us photographs on WhatsApp. We provide prompt feasibility assessment and personalized fabric advice.
            </p>
          </div>
          <a
            href={createWhatsAppUrl("Hello J D R Sofa Lining Work, I have a custom furniture requirement and would like your advice.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center space-x-2 bg-walnut hover:bg-espresso text-ivory text-xs font-semibold uppercase tracking-widest px-6 py-3.5 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-beige" />
            <span>Chat With Master Craftsman</span>
          </a>
        </div>

      </div>
    </section>
  );
};
