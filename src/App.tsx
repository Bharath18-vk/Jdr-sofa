import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { TransformationGallery } from './components/TransformationGallery';
import { MaterialsShowcase } from './components/MaterialsShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerTrust } from './components/CustomerTrust';
import { Process } from './components/Process';
import { FAQSection } from './components/FAQSection';
import { ConversionCTA } from './components/ConversionCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileActionBar } from './components/MobileActionBar';
import { WhatsAppQuoteEstimator } from './components/WhatsAppQuoteEstimator';

export function App() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-walnut selection:text-ivory pb-16 sm:pb-0">
      {/* Sticky Editorial Navigation */}
      <Navbar onOpenEstimator={() => setIsEstimatorOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero onOpenEstimator={() => setIsEstimatorOpen(true)} />

        {/* Section 2: Introduction */}
        <Introduction />

        {/* Section 3: Our Services */}
        <Services />

        {/* Section 4: Before & After Interactive Comparison */}
        <BeforeAfterSlider />

        {/* Section 4: Transformation Gallery & Lightbox */}
        <TransformationGallery />

        {/* Section 5: Materials & Finishes */}
        <MaterialsShowcase />

        {/* Section 6: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 7: Customer Trust & Reviews */}
        <CustomerTrust />

        {/* Section 8: 4-Step Process */}
        <Process />

        {/* Helpful Guidance FAQ */}
        <FAQSection />

        {/* Section 9: Final Conversion CTA */}
        <ConversionCTA />
      </main>

      {/* Section 10: Editorial Footer */}
      <Footer />

      {/* WhatsApp Conversion Features */}
      <FloatingWhatsApp />
      <MobileActionBar onOpenEstimator={() => setIsEstimatorOpen(true)} />
      <WhatsAppQuoteEstimator
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />
    </div>
  );
}

export default App;
