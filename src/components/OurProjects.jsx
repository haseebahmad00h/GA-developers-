import React, { useState } from 'react';
import { Building2, MapPin, ArrowUpRight, MessageCircle, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { etihadProjects } from '../data/projects';

export default function OurProjects({ onSelectProject }) {
  const [cityFilter, setCityFilter] = useState('all');

  const filtered = cityFilter === 'all' 
    ? etihadProjects 
    : etihadProjects.filter(p => p.city.toLowerCase() === cityFilter.toLowerCase());

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* High-Resolution Luxury Modern Building Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/building-modern-skyline.jpg" 
          alt="Modern Architectural Buildings Skyline" 
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-115 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/85" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-white/[0.05] rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-card text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 border border-white/15">
            <Building2 className="w-3.5 h-3.5" />
            <span>Dedicated Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-4">
            Our Projects
          </h2>
          <div className="w-16 h-0.5 bg-white/20 mx-auto mb-5" />
          <p className="text-sm sm:text-base text-white/75 font-light max-w-xl mx-auto">
            GA Developers exclusively represents and operates across premier master-planned Etihad Town communities in Lahore and Sialkot.
          </p>
        </div>

        {/* City Filter Tabs (Apple Capsule) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full apple-glass-deep border border-white/15">
            <button
              onClick={() => setCityFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                cityFilter === 'all' 
                  ? 'apple-btn-primary shadow-lg' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              All Projects ({etihadProjects.length})
            </button>
            <button
              onClick={() => setCityFilter('lahore')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                cityFilter === 'lahore' 
                  ? 'apple-btn-primary shadow-lg' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Lahore (5)
            </button>
            <button
              onClick={() => setCityFilter('sialkot')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                cityFilter === 'sialkot' 
                  ? 'apple-btn-primary shadow-lg' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Sialkot (1)
            </button>
          </div>
        </div>

        {/* 6 Projects Grid in Apple Liquid Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((proj) => {
            const whatsappText = encodeURIComponent(
              `Hello GA Developers. I am interested in inquiring about ${proj.name} (${proj.location}). Please share the latest project details.`
            );

            return (
              <div 
                key={proj.id}
                className="apple-glass-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-white/15 hover:border-white/35 shadow-liquid-glass relative transition-all duration-500"
              >
                <div className="glass-specular" />

                {/* Apple Frosted Glass Graphic Header */}
                <div className="relative p-6 sm:p-7 bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-transparent border-b border-white/10 overflow-hidden">
                  
                  {/* Subtle Background Architectural Building Silhouette & Monogram */}
                  <div className="absolute -right-2 -bottom-2 opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity duration-500">
                    <Building2 className="w-28 h-28 text-white" />
                  </div>
                  <img 
                    src="/images/ga-monogram-white.svg" 
                    alt="Watermark" 
                    className="absolute right-12 -bottom-4 h-28 w-auto object-contain opacity-[0.05] pointer-events-none group-hover:opacity-[0.1] transition-opacity duration-500"
                  />

                  {/* Top Header Row: Status Badge & Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider apple-glass-deep text-white/90 border border-white/20 uppercase">
                      {proj.status.split('•')[0]}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono">
                      {proj.city}
                    </span>
                  </div>

                  {/* Phase Emblem Visual Icon */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/10 border border-white/20 mb-3 shadow-inner">
                    <Sparkles className="w-3.5 h-3.5 text-white/80" />
                    <span className="text-xs font-bold tracking-widest text-white font-mono uppercase">
                      {proj.phaseBadge}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors mb-2 leading-tight">
                    {proj.name}
                  </h3>

                  {/* Location Bar */}
                  <div className="flex items-center gap-1.5 text-xs text-white/70">
                    <MapPin className="w-3.5 h-3.5 text-white/70 flex-shrink-0" />
                    <span className="truncate">{proj.location}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-1.5 font-mono">
                      {proj.categoryTag}
                    </div>
                    
                    <p className="text-xs text-white/70 leading-relaxed font-light mb-5">
                      {proj.tagline}
                    </p>

                    {/* Quick Highlights */}
                    <div className="space-y-2 py-3 border-y border-white/10 text-xs text-white/80">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-white/70 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{proj.highlights[0]}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-white/70 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{proj.highlights[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Dual Action Buttons (Explore Project & WhatsApp Inquiry) */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={() => onSelectProject(proj)}
                      className="py-2.5 px-3 rounded-xl text-xs font-semibold apple-btn-glass flex items-center justify-center gap-1.5"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/923274913906?text=${whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl text-xs font-semibold apple-btn-whatsapp flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Advisory Banner */}
        <div className="mt-16 apple-glass-deep rounded-3xl p-6 sm:p-8 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-1">
              Direct Guidance on All Etihad Town Phases
            </h4>
            <p className="text-xs text-white/60 font-light max-w-xl">
              Visit our head office in Etihad Town Phase 1 for masterplans, site walkthroughs, and direct developer verification.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/923392024906?text=Hello%20GA%20Developers.%20I%20would%20like%20to%20inquire%20about%20Etihad%20Town."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-xs font-semibold apple-btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              <span>Direct Desk: 03392024906</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
