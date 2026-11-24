import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Show tooltip after 2 seconds, auto-hide after 8 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Tooltip prompt bubble */}
      {showTooltip && (
        <div className="mb-2 bg-white text-espresso p-3 sm:p-4 rounded-none shadow-2xl border border-beige/80 max-w-xs animate-fade-in relative flex items-start space-x-2">
          <div className="flex-grow">
            <div className="flex items-center space-x-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-walnut">
                Online for Quotes
              </span>
            </div>
            <p className="text-xs text-charcoal/90 leading-tight">
              Need a quote for your sofa? Send photos on WhatsApp for an estimate.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-charcoal/50 hover:text-charcoal p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 bg-emerald-700 hover:bg-emerald-800 text-white shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Chat with J D R Sofa Lining Work on WhatsApp"
      >
        {/* Pulsating ring */}
        <span className="absolute inset-0 rounded-none bg-emerald-600 animate-ping opacity-25 pointer-events-none"></span>

        <MessageCircle className="w-7 h-7 text-white" />

        {/* Floating text on hover for desktop */}
        <span className="absolute right-16 bg-espresso text-ivory text-xs uppercase tracking-wider font-semibold py-2 px-3 whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block border border-beige/20">
          Chat on WhatsApp ({BUSINESS_INFO.whatsappNumber})
        </span>
      </a>
    </div>
  );
};
