import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, ArrowUpRight, Building2, CheckCircle2, Sparkles, HardHat } from 'lucide-react';
import { ourOffices, companyInfo } from '../data/projects';

export default function OurOffices({ onOpenContact }) {
  const office = ourOffices[0]; // ONLY Phase 1 Office

  return (
    <section id="offices" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      
      {/* High-Resolution Luxury Modern Building Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-architecture.jpg" 
          alt="Modern Architectural Headquarters" 
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-115 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/85" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-white/[0.05] rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-card text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 border border-white/15">
            <MapPin className="w-3.5 h-3.5" />
            <span>On-Ground Physical Office</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-4">
            Our Office
          </h2>
          <div className="w-16 h-0.5 bg-white/20 mx-auto mb-5" />
          <p className="text-sm sm:text-base text-white/75 font-light max-w-xl mx-auto">
            Permanent head office and active construction development center situated in Etihad Town Phase 1, Lahore.
          </p>
        </div>

        {/* Single Focused Office Card in Apple Liquid Glass */}
        <div className="apple-glass-card rounded-3xl overflow-hidden border border-white/15 hover:border-white/35 shadow-liquid-glass relative transition-all duration-500">
          <div className="glass-specular" />

          {/* Frosted Glass Banner */}
          <div className="relative p-6 sm:p-9 bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-transparent border-b border-white/10 overflow-hidden">
            <img 
              src="/images/ga-monogram-white.svg" 
              alt="Watermark" 
              className="absolute -right-6 -bottom-6 h-48 w-auto object-contain opacity-[0.07] pointer-events-none"
            />

            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider apple-glass-deep text-white border border-white/20 uppercase font-mono">
                {office.badge}
              </span>
              <span className="text-xs uppercase tracking-widest text-white/50 font-mono">
                {office.phaseCode}
              </span>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-inner flex-shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {office.project}
                </h3>
                <div className="text-xs sm:text-sm text-white/70 mt-1 font-light">
                  {companyInfo.name} &bull; Real Estate &amp; Construction Desk
                </div>
              </div>
            </div>
          </div>

          {/* Details & Actions */}
          <div className="p-6 sm:p-9 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Address */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/80">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider block font-semibold font-mono">Office Address</span>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {office.address}
                  </p>
                </div>
              </div>

              {/* Timing */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/80">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider block font-semibold font-mono">Office Timings</span>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {office.timing}
                  </p>
                </div>
              </div>

            </div>

            {/* Features */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <span className="text-[10px] text-white/50 uppercase tracking-wider block font-semibold font-mono mb-3">
                On-Site Facilities &amp; Advisory Services
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {office.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-white/60 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/923274913906?text=${encodeURIComponent(`Hello GA Developers. I want to visit your office in ${office.project}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl text-xs font-semibold apple-btn-whatsapp flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: 03274913906</span>
              </a>

              <button
                onClick={() => onOpenContact(`Office Meeting in ${office.project}`)}
                className="py-3 px-4 rounded-xl text-xs font-semibold apple-btn-primary flex items-center justify-center gap-2"
              >
                <span>Schedule Visit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
