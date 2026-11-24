import React, { useState } from 'react';
import { GALLERY_ITEMS, createWhatsAppUrl } from '../data/content';
import { GalleryItem } from '../types';
import { X, MessageCircle, Maximize2, Tag, Info } from 'lucide-react';

export const TransformationGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'modern' | 'velvet-leather' | 'classic' | 'cushions'>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { key: 'all', label: 'All Projects' },
    { key: 'modern', label: 'Modern Sofas' },
    { key: 'velvet-leather', label: 'Velvet & Leatherette' },
    { key: 'classic', label: 'Classic & Chesterfield' },
    { key: 'cushions', label: 'Cushions & Detailing' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-walnut font-semibold mb-3">
              <span className="w-5 h-[1.5px] bg-walnut"></span>
              <span>Craftsmanship Portfolio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso tracking-tight leading-[1.1] mb-4">
              Our Work & <br />
              <span className="italic font-normal text-walnut">Design Gallery</span>
            </h2>

            <p className="text-base text-charcoal/80 leading-relaxed font-light">
              Explore diverse fabric selections, structural restorations, and custom upholstery details. Each sofa reflects our commitment to clean lines and enduring support.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === tab.key
                    ? 'bg-walnut text-ivory shadow-sm'
                    : 'bg-ivory text-charcoal/80 hover:text-espresso hover:bg-beige/40 border border-beige/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative bg-ivory cursor-pointer overflow-hidden border border-beige/80 hover:border-walnut transition-all duration-300 hover:shadow-luxury flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-espresso/5">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>

                {/* View Details Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 text-espresso p-3 rounded-full shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Tag Badge */}
                <span className="absolute top-3 left-3 bg-espresso/80 backdrop-blur-sm text-ivory text-[10px] font-medium uppercase tracking-wider px-2.5 py-1">
                  {item.categoryLabel}
                </span>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-ivory">
                  <h3 className="font-serif text-xl font-normal leading-tight mb-1 group-hover:text-beige transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs text-beige/90">
                    <Tag className="w-3 h-3 text-brass" />
                    <span>{item.fabric}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demonstration Disclaimer Note */}
        <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-charcoal/60 bg-ivory/50 border border-beige/60 py-3 px-4 text-center">
          <Info className="w-4 h-4 text-walnut flex-shrink-0" />
          <span>
            Representative demonstration portfolio showcasing craftsmanship standards and restoration capabilities. Every client piece is hand-tailored to order.
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/90 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-beige flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="md:w-3/5 bg-espresso/10 relative h-72 md:h-auto min-h-[340px]">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute top-4 left-4 bg-espresso/90 text-ivory text-xs px-3 py-1 uppercase tracking-wider">
                {activeModalItem.categoryLabel}
              </span>
            </div>

            {/* Modal Content */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-ivory">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-widest text-walnut font-bold">
                    Project Showcase
                  </span>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="p-1.5 text-charcoal hover:text-walnut bg-white rounded-full border border-beige/80 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="font-serif text-2xl font-light text-espresso mb-3">
                  {activeModalItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light mb-6">
                  {activeModalItem.description}
                </p>

                <div className="space-y-3 bg-white p-4 border border-beige/80 mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-walnut font-bold block">Upholstery Specification</span>
                    <span className="text-xs font-semibold text-espresso">{activeModalItem.fabric}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-walnut font-bold block">Craft Standard</span>
                    <span className="text-xs text-charcoal/80">Reinforced webbing, anti-sag foam, hand-piped seams</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Action inside Modal */}
              <div className="pt-4 border-t border-beige/60">
                <a
                  href={createWhatsAppUrl(`Hello J D R Sofa Lining Work, I am viewing the "${activeModalItem.title}" from your gallery. Can I get a quote for similar upholstery for my sofa?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-walnut hover:bg-espresso text-ivory py-3 px-4 text-xs font-semibold uppercase tracking-widest shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-beige" />
                  <span>Enquire for Similar Sofa</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
