import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/content';

interface NavbarProps {
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'Before & After', href: '#transformations' },
    { name: 'Our Work', href: '#gallery' },
    { name: 'Materials', href: '#materials' },
    { name: 'Process', href: '#process' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-luxury py-3 border-b border-walnut/10'
            : 'bg-ivory/90 backdrop-blur-md py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Wordmark */}
            <a href="#home" className="flex flex-col group">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-espresso group-hover:text-walnut transition-colors">
                J D R <span className="font-normal text-walnut">SOFA LINING</span> WORK
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-charcoal/70 font-medium">
                Atelier of Fine Upholstery & Restoration
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-charcoal/85 hover:text-walnut transition-colors tracking-wide py-1 border-b-2 border-transparent hover:border-walnut"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-walnut transition-colors px-3 py-2"
                title="Call for enquiry"
              >
                <Phone className="w-3.5 h-3.5 text-walnut" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={onOpenEstimator}
                className="hidden xl:inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-walnut border border-walnut/30 hover:border-walnut px-4 py-2.5 rounded-none transition-all hover:bg-walnut/5"
              >
                <span>Instant Estimator</span>
              </button>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-walnut hover:bg-espresso text-ivory text-xs font-medium uppercase tracking-widest px-5 py-2.5 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-beige" />
                <span>Quote on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-beige" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center space-x-3 lg:hidden">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-walnut text-ivory rounded-none"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-beige" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-espresso hover:text-walnut focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-nav border-b border-walnut/20 px-6 pt-4 pb-6 mt-3 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-espresso hover:text-walnut py-2 border-b border-beige/40 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-walnut/50" />
                </a>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full flex items-center justify-center space-x-2 border border-walnut text-walnut font-medium text-sm py-3 uppercase tracking-wider"
              >
                <span>Calculate Sofa Quote</span>
              </button>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 bg-walnut text-ivory font-medium text-sm py-3.5 uppercase tracking-wider shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-beige" />
                <span>Get a Free Quote on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center space-x-2 bg-ivory text-charcoal border border-beige/80 text-sm py-2.5 font-medium"
              >
                <Phone className="w-4 h-4 text-walnut" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
