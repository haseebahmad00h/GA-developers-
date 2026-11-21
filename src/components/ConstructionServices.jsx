import React from 'react';
import { Hammer, CheckCircle2, ShieldCheck, ArrowUpRight, MessageCircle, Ruler, HardHat, FileText, Sparkles } from 'lucide-react';
import { constructionServices, companyInfo } from '../data/projects';

export default function ConstructionServices({ onOpenContact }) {
  return (
    <section id="construction" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      
      {/* High-Resolution Luxury Modern Building Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/building-commercial-tower.jpg" 
          alt="Modern Architectural Construction Structure" 
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-115 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/85" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-white/[0.05] rounded-full blur-[160px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-card text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 border border-white/15">
            <HardHat className="w-3.5 h-3.5 text-white/80" />
            <span>Turnkey Building Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-4">
            Construction Services
          </h2>
          <div className="w-16 h-0.5 bg-white/20 mx-auto mb-5" />
          <p className="text-sm sm:text-base text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Beyond property advisory, <span className="text-white font-medium">{companyInfo.name}</span> delivers complete, turnkey architectural and structural construction directly inside <span className="text-white font-medium">Etihad Town Phase 1, Lahore</span>.
          </p>
        </div>

        {/* 4 Construction Pillars Grid in Apple Liquid Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {constructionServices.map((service) => (
            <div
              key={service.id}
              className="apple-glass-card rounded-3xl p-6 sm:p-9 border border-white/15 hover:border-white/35 shadow-liquid-glass relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="glass-specular" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider apple-glass-deep text-white border border-white/20 uppercase font-mono">
                    {service.badge}
                  </span>
                  <Hammer className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-6">
                  {service.desc}
                </p>

                {/* Specification Points */}
                <div className="space-y-2.5 py-4 border-t border-white/10 text-xs text-white/80">
                  {service.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-white/70 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3">
                <span className="text-[11px] text-white/50 font-mono">
                  Etihad Town Ph 1 Sites
                </span>
                <a
                  href={`https://wa.me/923274913906?text=${encodeURIComponent(`Hello GA Developers. I want a construction quotation for my plot in Etihad Town Phase 1 (${service.title}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 rounded-xl text-xs font-semibold apple-btn-whatsapp flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Get Quotation</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Construction Trust & Standards Banner */}
        <div className="apple-glass-deep rounded-3xl p-8 sm:p-10 border border-white/15 relative overflow-hidden shadow-liquid-glass">
          <div className="glass-specular" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-3 mx-auto md:mx-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                A-Plus Material Quality
              </h4>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Grade-60 steel, certified OPC cement, solid red bricks, and laboratory test reports for every batch.
              </p>
            </div>

            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-3 mx-auto md:mx-0">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                Milestone-Based Billing
              </h4>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Pay in clear stages (Foundation, Plinth, Slabs, Brickwork, Finishes). Zero advance risk.
              </p>
            </div>

            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-3 mx-auto md:mx-0">
                <Ruler className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                On-Ground Phase 1 Office
              </h4>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Direct daily site inspections and transparent reporting from our head office inside Etihad Town Phase 1.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-white/75">
              Own a plot in Etihad Town Phase 1? Build your dream luxury home with GA Developers.
            </span>
            <button
              onClick={() => onOpenContact('Construction Quotation & Estimate')}
              className="px-6 py-2.5 rounded-full text-xs font-semibold apple-btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              <span>Schedule Construction Meeting</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
