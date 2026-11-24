import React, { useState } from 'react';
import { X, MessageCircle, ArrowRight, Check, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface EstimatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppQuoteEstimator: React.FC<EstimatorProps> = ({ isOpen, onClose }) => {
  const [sofaType, setSofaType] = useState('3-Seater Classic Sofa');
  const [serviceType, setServiceType] = useState('Full Relining & Fabric Upholstery');
  const [material, setMaterial] = useState('Royal Micro-Velvet');
  const [customerCity, setCustomerCity] = useState('');

  if (!isOpen) return null;

  const sofaTypes = [
    '1-Seater Armchair',
    '2-Seater Loveseat',
    '3-Seater Classic Sofa',
    '3+1+1 Full Sofa Set',
    'L-Shape Sectional Couch',
    'Dining Chairs (4–6 chairs)',
    'Recliner or Custom Piece'
  ];

  const serviceOptions = [
    'Full Relining & Fabric Upholstery',
    'Fabric Replacement Only',
    'Cushion Foam Restuffing (Anti-Sag)',
    'Comprehensive Frame & Fabric Overhaul'
  ];

  const materialOptions = [
    'Royal Micro-Velvet',
    'Heavyweight Textured Linen',
    'Premium Vegan Leatherette',
    'Stain-Defend Performance Weave',
    'Bring Swatches / Need Recommendation'
  ];

  const handleSendWhatsApp = () => {
    let message = `Hello J D R Sofa Lining Work,\n\nI used your online website estimator to request a quotation:\n`;
    message += `🛋️ Furniture Type: ${sofaType}\n`;
    message += `✂️ Service Needed: ${serviceType}\n`;
    message += `🧵 Desired Material: ${material}\n`;
    if (customerCity.trim()) {
      message += `📍 My Location: ${customerCity.trim()}\n`;
    }
    message += `\nI will send photos of my sofa here in this chat. Please provide an estimated quote.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919600094172?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/80 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-beige shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-beige/60 pb-4 mb-6">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-walnut text-beige">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-walnut font-bold block">
                Instant WhatsApp Estimator
              </span>
              <h3 className="font-serif text-2xl font-normal text-espresso">
                Calculate Your Sofa Quote
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-charcoal/70 hover:text-espresso bg-ivory border border-beige/60 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-charcoal/80 mb-6 font-light">
          Select your sofa details below. We will instantly compose a personalized quotation message directly in WhatsApp with {BUSINESS_INFO.name}.
        </p>

        {/* Step 1: Sofa Type */}
        <div className="mb-6">
          <label className="text-xs font-semibold uppercase tracking-wider text-espresso block mb-2.5">
            1. Select Your Furniture Type
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {sofaTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSofaType(type)}
                className={`p-2.5 text-xs text-left border transition-all ${
                  sofaType === type
                    ? 'border-walnut bg-walnut/5 font-semibold text-espresso ring-1 ring-walnut'
                    : 'border-beige/80 bg-ivory/50 text-charcoal/80 hover:bg-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Service Type */}
        <div className="mb-6">
          <label className="text-xs font-semibold uppercase tracking-wider text-espresso block mb-2.5">
            2. What Service Does It Require?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {serviceOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setServiceType(opt)}
                className={`p-3 text-xs text-left border transition-all flex items-center justify-between ${
                  serviceType === opt
                    ? 'border-walnut bg-walnut/5 font-semibold text-espresso ring-1 ring-walnut'
                    : 'border-beige/80 bg-ivory/50 text-charcoal/80 hover:bg-white'
                }`}
              >
                <span>{opt}</span>
                {serviceType === opt && <Check className="w-4 h-4 text-walnut" />}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Material Preference */}
        <div className="mb-6">
          <label className="text-xs font-semibold uppercase tracking-wider text-espresso block mb-2.5">
            3. Preferred Fabric / Finish
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {materialOptions.map((mat) => (
              <button
                key={mat}
                type="button"
                onClick={() => setMaterial(mat)}
                className={`p-2.5 text-xs text-left border transition-all flex items-center justify-between ${
                  material === mat
                    ? 'border-walnut bg-walnut/5 font-semibold text-espresso ring-1 ring-walnut'
                    : 'border-beige/80 bg-ivory/50 text-charcoal/80 hover:bg-white'
                }`}
              >
                <span>{mat}</span>
                {material === mat && <Check className="w-4 h-4 text-walnut" />}
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Location (Optional) */}
        <div className="mb-8">
          <label className="text-xs font-semibold uppercase tracking-wider text-espresso block mb-1.5">
            4. Your Area / City (Optional for Doorstep Pickup)
          </label>
          <input
            type="text"
            value={customerCity}
            onChange={(e) => setCustomerCity(e.target.value)}
            placeholder="e.g. Area name, landmark or pincode"
            className="w-full p-3 text-xs border border-beige/80 focus:border-walnut focus:outline-none bg-ivory/30 text-espresso"
          />
        </div>

        {/* Action Button */}
        <div className="border-t border-beige/60 pt-6">
          <button
            onClick={handleSendWhatsApp}
            className="w-full flex items-center justify-center space-x-3 bg-walnut hover:bg-espresso text-ivory py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest shadow-luxury transition-all"
          >
            <MessageCircle className="w-5 h-5 text-beige" />
            <span>Generate & Send WhatsApp Quote Request</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-[11px] text-center text-charcoal/60 mt-2">
            Opens directly in WhatsApp with {BUSINESS_INFO.whatsappNumber} · Free, zero-obligation estimate
          </p>
        </div>

      </div>
    </div>
  );
};
