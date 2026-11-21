import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/projects';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Construction', href: '#construction' },
    { name: 'Our Office', href: '#offices' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 py-4 transition-all duration-300">
      <nav 
        className={`w-full max-w-6xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-5 sm:px-8 py-3 ${
          isScrolled 
            ? 'apple-glass-nav shadow-2xl py-2.5 sm:py-3' 
            : 'bg-black/60 backdrop-blur-2xl border border-white/10'
        }`}
      >
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative">
            <img 
              src="/images/ga-monogram-white.svg" 
              alt="GA Developers Monogram" 
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg tracking-wider text-white font-bold leading-none">
              {companyInfo.name.toUpperCase()}
            </span>
            <span className="text-[9px] tracking-widest text-white/60 uppercase font-sans mt-0.5">
              Properties &bull; Construction &bull; Design
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Quick WhatsApp Action Button */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://wa.me/923274913906?text=Hello%20GA%20Developers.%20I%20am%20inquiring%20about%20Etihad%20Town%20and%20construction."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold apple-btn-whatsapp group"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>03274913906</span>
          </a>

          <button
            onClick={() => onOpenContact('General Inquiry')}
            className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold apple-btn-primary group"
          >
            <span>Consult</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-white bg-white/10 border border-white/15 hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Glass Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 apple-glass-deep rounded-3xl p-6 shadow-2xl border border-white/20 z-50 animate-fade-in backdrop-blur-3xl bg-[#08080C]/95">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-2xl text-sm font-medium text-white hover:bg-white/10 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href="https://wa.me/923274913906?text=Hello%20GA%20Developers.%20I%20am%20inquiring%20about%20Etihad%20Town."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl apple-btn-whatsapp text-center text-xs font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: 03274913906</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('Mobile Menu Consultation');
                }}
                className="w-full py-2.5 rounded-xl apple-btn-primary text-center text-xs font-semibold flex items-center justify-center gap-2"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
