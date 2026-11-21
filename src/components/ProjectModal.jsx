import React from 'react';
import { X, MapPin, CheckCircle2, MessageCircle, ShieldCheck, Phone, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/projects';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const whatsappMsg1 = encodeURIComponent(
    `Hello GAH Holdings. I am inquiring about ${project.name} located at ${project.location}. Please provide project prospectus and available advisory options.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl apple-glass-deep rounded-3xl overflow-hidden shadow-2xl border border-white/20 my-8 max-h-[90vh] flex flex-col bg-[#0A0A0E]/95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
          
          {/* Apple Frosted Glass Header (No Stock Images) */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent border border-white/10 overflow-hidden">
            <img 
              src="/images/ga-monogram-white.svg" 
              alt="Watermark" 
              className="absolute -right-6 -bottom-6 h-44 w-auto object-contain opacity-[0.05] pointer-events-none"
            />

            <div className="flex items-center justify-between mb-4">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider apple-glass-card text-white border border-white/20 uppercase">
                {project.status}
              </span>
              <span className="text-xs uppercase tracking-widest text-white/50 font-mono">
                {project.city} &bull; {project.categoryTag}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/10 border border-white/20 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-white/80" />
              <span className="text-xs font-bold tracking-widest text-white font-mono uppercase">
                {project.phaseBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase mb-2">
              {project.name}
            </h2>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
              <MapPin className="w-4 h-4 text-white/70" />
              <span>{project.location}</span>
            </div>
          </div>

          {/* Project Tagline */}
          <p className="text-sm sm:text-base text-white/80 font-light">
            {project.tagline}
          </p>

          {/* Project Overview */}
          <div className="apple-glass-card rounded-2xl p-5 border border-white/10 space-y-2">
            <h4 className="text-xs uppercase tracking-widest text-white/50 font-semibold font-mono">
              Master Community Architecture
            </h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              {project.overview}
            </p>
          </div>

          {/* Key Community Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-3 font-mono">
              Project Highlights &amp; Infrastructure
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Direct Desks */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Direct Consultations via Phase 1 &amp; Phase 2 Offices</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`https://wa.me/923274913906?text=${whatsappMsg1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full text-xs font-semibold apple-btn-whatsapp flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: 03274913906</span>
              </a>

              <a
                href={`https://wa.me/923392024906?text=${whatsappMsg1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full text-xs font-semibold apple-btn-glass flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>03392024906</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
