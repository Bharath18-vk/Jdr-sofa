import React from 'react';
import { Phone, MessageCircle, Calculator } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/content';

interface MobileActionBarProps {
  onOpenEstimator: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenEstimator }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-beige/80 px-3 py-2.5 flex items-center justify-between gap-2 shadow-2xl sm:hidden">
      {/* Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="flex-1 flex items-center justify-center space-x-1.5 bg-ivory hover:bg-beige/40 text-espresso border border-beige/90 py-2.5 px-2 text-xs font-semibold uppercase tracking-wider transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-walnut" />
        <span>Call</span>
      </a>

      {/* Estimator Button */}
      <button
        onClick={onOpenEstimator}
        className="flex-1 flex items-center justify-center space-x-1.5 bg-ivory hover:bg-beige/40 text-walnut border border-walnut/30 py-2.5 px-2 text-xs font-semibold uppercase tracking-wider transition-colors"
      >
        <Calculator className="w-3.5 h-3.5 text-walnut" />
        <span>Estimate</span>
      </button>

      {/* WhatsApp Button */}
      <a
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.5] flex items-center justify-center space-x-1.5 bg-emerald-700 hover:bg-emerald-800 text-white py-2.5 px-3 text-xs font-semibold uppercase tracking-wider shadow-md transition-colors"
      >
        <MessageCircle className="w-4 h-4 text-beige" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
