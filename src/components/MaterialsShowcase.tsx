import React, { useState } from 'react';
import { MATERIAL_SWATCHES, createWhatsAppUrl } from '../data/content';
import { Shield, Sparkles, MessageCircle, Info, Feather, Droplets } from 'lucide-react';

export const MaterialsShowcase: React.FC = () => {
  const [selectedSwatch, setSelectedSwatch] = useState(MATERIAL_SWATCHES[0]);

  return (
    <section id="materials" className="py-20 sm:py-28 bg-ivory border-b border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-walnut font-semibold mb-3">
            <span className="w-5 h-[1.5px] bg-walnut"></span>
            <span>Finishes & Textures</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso tracking-tight leading-[1.1] mb-4">
            Find the <br />
            <span className="italic font-normal text-walnut">Perfect Finish.</span>
          </h2>

          <p className="text-base text-charcoal/80 leading-relaxed font-light">
            Touch, durability, and aesthetics go hand in hand. Select from a curated spectrum of luxury velvets, durable textured linens, stain-defying performance weaves, and supple leatherettes.
          </p>
        </div>

        {/* Interactive Material Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Material Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-walnut font-bold block mb-2">
              Select Material to Inspect:
            </span>
            
            {MATERIAL_SWATCHES.map((swatch) => {
              const isSelected = selectedSwatch.id === swatch.id;
              return (
                <button
                  key={swatch.id}
                  onClick={() => setSelectedSwatch(swatch)}
                  className={`w-full text-left p-4 sm:p-5 border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-walnut shadow-md ring-1 ring-walnut'
                      : 'bg-white/60 border-beige/70 hover:bg-white hover:border-walnut/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Color Swatch Circle */}
                    <div
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                      style={{ backgroundColor: swatch.hexCode }}
                    ></div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-walnut font-bold block">
                        {swatch.category}
                      </span>
                      <h4 className="font-serif text-lg text-espresso font-normal leading-tight">
                        {swatch.name}
                      </h4>
                      <span className="text-xs text-charcoal/60 line-clamp-1">
                        {swatch.colorName}
                      </span>
                    </div>
                  </div>

                  <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 ${
                    isSelected ? 'bg-walnut text-ivory' : 'bg-ivory text-charcoal/70'
                  }`}>
                    {isSelected ? 'Active' : 'View'}
                  </span>
                </button>
              );
            })}

            {/* Note on availability */}
            <div className="mt-4 flex items-center space-x-2 text-xs text-charcoal/60 bg-white/70 border border-beige/60 p-3">
              <Info className="w-4 h-4 text-walnut flex-shrink-0" />
              <span>
                Actual material availability and shade books will be confirmed during personal consultation.
              </span>
            </div>
          </div>

          {/* Right Column: Close-up Texture Viewer & Deep Specs */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-beige/80 shadow-luxury flex flex-col justify-between">
            <div>
              {/* Macro Texture Close-up */}
              <div className="relative h-64 sm:h-80 overflow-hidden bg-espresso/10 border border-beige/60 mb-6 group">
                <img
                  src={selectedSwatch.textureImageUrl}
                  alt={selectedSwatch.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4 bg-espresso/90 text-ivory px-3.5 py-1 text-xs uppercase tracking-wider font-semibold">
                  Macro Texture Preview
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-ivory">
                  <span className="text-[10px] uppercase tracking-widest text-brass font-bold block">
                    {selectedSwatch.category}
                  </span>
                  <h3 className="font-serif text-2xl font-light">
                    {selectedSwatch.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-charcoal/85 leading-relaxed font-light mb-6">
                {selectedSwatch.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-beige/60 pt-5 mb-6">
                <div className="flex items-start space-x-3 bg-ivory/60 p-3.5 border border-beige/50">
                  <Feather className="w-4 h-4 text-walnut flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-walnut font-bold block">Tactile Feel</span>
                    <p className="text-xs text-charcoal/90 mt-0.5">{selectedSwatch.feel}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-ivory/60 p-3.5 border border-beige/50">
                  <Shield className="w-4 h-4 text-walnut flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-walnut font-bold block">Durability Rating</span>
                    <p className="text-xs text-charcoal/90 mt-0.5">{selectedSwatch.durability}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-ivory/60 p-3.5 border border-beige/50">
                  <Sparkles className="w-4 h-4 text-walnut flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-walnut font-bold block">Best Suited For</span>
                    <p className="text-xs text-charcoal/90 mt-0.5">{selectedSwatch.recommendedFor}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-ivory/60 p-3.5 border border-beige/50">
                  <Droplets className="w-4 h-4 text-walnut flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-walnut font-bold block">Care & Cleaning</span>
                    <p className="text-xs text-charcoal/90 mt-0.5">{selectedSwatch.cleaning}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquire on WhatsApp for this fabric */}
            <div className="pt-4 border-t border-beige/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-charcoal/70">
                Want to see physical swatches for <strong className="text-espresso">{selectedSwatch.name}</strong>?
              </span>
              <a
                href={createWhatsAppUrl(`Hello J D R Sofa Lining Work, I am interested in the "${selectedSwatch.name}" fabric for my sofa. Could you share colour options and pricing?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-walnut hover:bg-espresso text-ivory px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-beige" />
                <span>Enquire About This Fabric</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
