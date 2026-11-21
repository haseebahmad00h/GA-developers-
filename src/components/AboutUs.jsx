import React from 'react';
import { Target, Eye, ShieldCheck, MapPin, CheckCircle2, Award, ArrowUpRight, Sparkles, Hammer } from 'lucide-react';
import { companyInfo, trustPillars } from '../data/projects';

export default function AboutUs({ onOpenContact }) {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* High-Resolution Luxury Modern Building Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/building-luxury-facade.jpg" 
          alt="Modern Architectural Luxury Facade" 
          className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-115 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/85" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-white/[0.05] rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-card text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Company Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-4">
            About {companyInfo.name}
          </h2>
          <div className="w-16 h-0.5 bg-white/20 mx-auto mb-6" />
          <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-light">
            <span className="text-white font-medium">{companyInfo.name}</span> is a premier real estate consultancy and luxury turnkey construction company operating exclusively from its head office in <span className="text-white font-medium">Etihad Town Phase 1, Lahore</span>.
          </p>
          <p className="text-xs sm:text-sm text-white/65 leading-relaxed mt-3">
            We provide a complete lifecycle for clients: from acquiring prime plots in premier Etihad Town master communities to complete architectural design, structural engineering, and high-end luxury villa construction.
          </p>
        </div>

        {/* Founder & Corporate Profile Bento */}
        <div className="apple-glass-card rounded-3xl p-6 sm:p-10 mb-16 border border-white/15 relative overflow-hidden shadow-liquid-glass">
          <div className="glass-specular" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Executive Portrait of Founder Hafiz Haseeb Ahmad */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-xs sm:max-w-sm">
                <div className="absolute -inset-1 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl blur opacity-50 group-hover:opacity-80 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl">
                  <img 
                    src="/images/founder-hafiz-haseeb.jpg" 
                    alt="Hafiz Haseeb Ahmad - Founder of GA Developers" 
                    className="w-full h-auto object-cover object-center filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-3 right-3 apple-glass-deep rounded-xl p-3 border border-white/20 backdrop-blur-xl">
                    <div className="text-sm font-bold text-white">Hafiz Haseeb Ahmad</div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider">Founder &bull; GA Developers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/50 font-semibold font-mono">Leadership &amp; Vision</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Real Estate Advisory &amp; Construction Mastery
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">
                "At GA Developers, we eliminate the disconnect between property acquisition and construction. Whether you are investing in Etihad Town projects or building a bespoke luxury residence, our on-ground office in Phase 1 provides unmatched transparency, certified civil engineering, and accountable leadership."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Head office inside Etihad Town Phase 1, Lahore</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Turnkey villa construction with A-Plus materials</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Exclusive focus on Etihad Town working projects</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Full milestone transparency with zero hidden charges</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenContact('Executive Advisory with Hafiz Haseeb Ahmad')}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold apple-btn-primary flex items-center gap-2"
                >
                  <span>Consult with Founder</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://wa.me/923274913906?text=Hello%20Hafiz%20Haseeb%20Ahmad.%20I%20would%20like%20to%20consult%20regarding%20Etihad%20Town%20Phase%201%20and%20construction."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold apple-btn-glass flex items-center gap-2"
                >
                  <span>WhatsApp: 03274913906</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPillars.map((pillar) => (
            <div 
              key={pillar.num}
              className="apple-glass-deep rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="text-xs font-mono font-bold text-white/50 mb-2">{pillar.num}</div>
              <h4 className="text-sm font-bold text-white mb-2">{pillar.title}</h4>
              <p className="text-xs text-white/65 leading-relaxed font-light">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
