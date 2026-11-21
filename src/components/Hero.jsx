import React from 'react';
import { ChevronRight, MessageCircle, Building2, MapPin, Sparkles, Hammer } from 'lucide-react';
import { companyInfo } from '../data/projects';

export default function Hero({ onExploreProjects, onConstruction, onOurOffices }) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      {/* High-Resolution Luxury Modern Building Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-architecture.jpg" 
          alt="Modern Architectural Luxury Building" 
          className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-115 scale-105 transform animate-pulse-subtle"
        />
        
        {/* Apple Glossy Radial Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/85" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.06] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-slate-400/[0.1] rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center pt-8 sm:pt-12">
        
        {/* Apple-Style Liquid Glass Monogram Badge */}
        <div className="mb-6 group cursor-pointer transition-transform duration-500 hover:scale-105">
          <div className="relative p-3.5 sm:p-4 rounded-3xl apple-glass-card inline-flex items-center justify-center shadow-liquid-glass">
            <div className="glass-specular" />
            <img 
              src="/images/ga-monogram-white.svg" 
              alt="GA Developers Monogram" 
              className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(255,255,255,0.3)]" 
            />
          </div>
        </div>

        {/* Focus Pill: Properties • Construction • Design */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-card text-xs font-medium text-white tracking-widest uppercase mb-5 border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-white/90" />
          <span>Properties &bull; Construction &bull; Design</span>
        </div>

        {/* Main Headline with Apple Metallic Gradient Text */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-4 uppercase max-w-4xl">
          WHERE VISION MEETS <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-white/40">REAL ESTATE &amp; CONSTRUCTION.</span>
        </h1>

        {/* Supporting Tagline */}
        <p className="text-base sm:text-xl md:text-2xl text-white/90 tracking-wide mb-4 font-light">
          {companyInfo.name} &bull; Building Trust. Delivering Excellence.
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base text-white/70 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
          Specializing in premier Etihad Town properties and turnkey luxury villa construction. Operated directly from our head office in Etihad Town Phase 1, Lahore.
        </p>

        {/* Transparent Shaded Apple Glass Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl">
          <button
            onClick={onExploreProjects}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase apple-btn-primary flex items-center justify-center gap-2 shadow-2xl"
          >
            <span>Explore Projects</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onConstruction}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase apple-btn-glass flex items-center justify-center gap-2"
          >
            <Hammer className="w-4 h-4 text-white/80" />
            <span>Construction</span>
          </button>

          <a
            href="https://wa.me/923274913906?text=Hello%20GA%20Developers.%20I%20am%20inquiring%20about%20Etihad%20Town%20Phase%201%20and%20construction."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase apple-btn-whatsapp flex items-center justify-center gap-2 shadow-2xl"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Direct</span>
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 w-full max-w-3xl">
          <div className="apple-glass-deep rounded-2xl p-3 sm:p-4 text-left border border-white/15">
            <div className="flex items-center gap-2 text-white text-xs font-semibold">
              <Building2 className="w-4 h-4 text-white/80" />
              <span>Etihad Town Projects</span>
            </div>
            <div className="text-[11px] text-white/60 mt-1">Working across all Phases &amp; Sialkot</div>
          </div>

          <div className="apple-glass-deep rounded-2xl p-3 sm:p-4 text-left border border-white/15">
            <div className="flex items-center gap-2 text-white text-xs font-semibold">
              <Hammer className="w-4 h-4 text-white/80" />
              <span>Turnkey Construction</span>
            </div>
            <div className="text-[11px] text-white/60 mt-1">A-Plus luxury villas &amp; gray structures</div>
          </div>

          <div className="col-span-2 md:col-span-1 apple-glass-deep rounded-2xl p-3 sm:p-4 text-left border border-white/15">
            <div className="flex items-center gap-2 text-white text-xs font-semibold">
              <MapPin className="w-4 h-4 text-white/80" />
              <span>Head Office: Phase 1</span>
            </div>
            <div className="text-[11px] text-white/60 mt-1">Etihad Town Phase 1, Lahore</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#about" 
          className="mt-10 sm:mt-12 inline-flex flex-col items-center gap-1.5 text-[10px] tracking-widest uppercase text-white/50 hover:text-white transition-colors"
        >
          <span>Scroll to Discover</span>
          <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 bg-white rounded-full animate-bounce" />
          </div>
        </a>

      </div>
    </section>
  );
}
