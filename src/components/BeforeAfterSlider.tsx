import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_SETS, createWhatsAppUrl } from '../data/content';
import { MessageCircle, CheckCircle, MoveHorizontal, Sparkles } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [selectedSetIndex, setSelectedSetIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentSet = BEFORE_AFTER_SETS[selectedSetIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="py-20 sm:py-28 bg-ivory border-b border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-walnut font-semibold mb-3">
            <span className="w-5 h-[1.5px] bg-walnut"></span>
            <span>Interactive Comparison</span>
            <span className="w-5 h-[1.5px] bg-walnut"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso tracking-tight leading-[1.1] mb-4">
            From Worn Out <br />
            <span className="italic font-normal text-walnut">to Wonderful.</span>
          </h2>

          <p className="text-base text-charcoal/80 leading-relaxed font-light">
            Slide left and right to reveal the transformation. Witness how skilled lining, new high-density cushioning, and luxury upholstery completely reinvent tired furniture.
          </p>

          {/* Toggle between Before/After Projects */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mt-6 p-1.5 bg-white border border-beige/80">
            {BEFORE_AFTER_SETS.map((set, idx) => (
              <button
                key={set.id}
                onClick={() => {
                  setSelectedSetIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  selectedSetIndex === idx
                    ? 'bg-walnut text-ivory shadow-sm'
                    : 'text-charcoal/80 hover:text-espresso hover:bg-beige/20'
                }`}
              >
                {set.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Slider Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: The Drag Comparison Canvas */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              className="relative h-[380px] sm:h-[480px] md:h-[520px] select-none overflow-hidden cursor-ew-resize border-2 border-beige/80 shadow-luxury bg-espresso/10"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* "AFTER" Image (Full background) */}
              <img
                src={currentSet.afterImage}
                alt="After transformation"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />
              
              {/* After Label */}
              <div className="absolute top-4 right-4 bg-espresso/90 text-ivory px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider border border-beige/30 shadow-md">
                {currentSet.afterTag}
              </div>

              {/* "BEFORE" Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentSet.beforeImage}
                  alt="Before transformation"
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%'
                  }}
                />
                
                {/* Before Label */}
                <div className="absolute top-4 left-4 bg-charcoal/90 text-ivory px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider border border-white/20 shadow-md">
                  {currentSet.beforeTag}
                </div>
              </div>

              {/* Divider Line & Drag Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-walnut text-ivory flex items-center justify-center shadow-xl border-2 border-white pointer-events-auto">
                  <MoveHorizontal className="w-5 h-5 text-beige" />
                </div>
              </div>

              {/* Instructional hint at bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-1.5 text-[11px] font-medium text-espresso uppercase tracking-wider shadow-sm pointer-events-none border border-beige/60">
                Drag handle horizontally to compare
              </div>
            </div>
          </div>

          {/* Right: Craft Details & WhatsApp Quote */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 border border-beige/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-walnut text-xs font-semibold uppercase tracking-widest mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Transformation Case Study</span>
              </div>

              <h3 className="font-serif text-2xl font-normal text-espresso mb-3">
                {currentSet.title}
              </h3>

              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light mb-6">
                {currentSet.description}
              </p>

              {/* Scope of Work */}
              <div className="space-y-3 mb-6 border-t border-beige/60 pt-4">
                <span className="text-[11px] uppercase tracking-wider text-walnut font-bold block">
                  Artisanal Work Undertaken:
                </span>
                {currentSet.workDone.map((item, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-charcoal/85">
                    <CheckCircle className="w-3.5 h-3.5 text-walnut flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="pt-4 border-t border-beige/60">
              <a
                href={createWhatsAppUrl(`Hello J D R Sofa Lining Work, I saw the "${currentSet.title}" transformation. I have a similar sofa that needs restoration. Could you give me a quote?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-walnut hover:bg-espresso text-ivory py-3 px-4 text-xs font-semibold uppercase tracking-widest shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-beige" />
                <span>Get a Quote for Similar Work</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
