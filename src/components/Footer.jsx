import React from 'react';
import { MapPin, Phone, MessageCircle, ArrowUpRight, ShieldCheck, Hammer } from 'lucide-react';
import { companyInfo, etihadProjects, ourOffices } from '../data/projects';

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-[#030305] text-[#F5F5F7] pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Brand Info (Col 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <img 
                src="/images/ga-monogram-white.svg" 
                alt="GA Developers Monogram" 
                className="h-10 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider text-white">
                  {companyInfo.name.toUpperCase()}
                </span>
                <span className="text-[10px] tracking-widest text-white/50 uppercase">
                  Properties &bull; Construction &bull; Design
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light max-w-sm">
              GA Developers is an elite real estate consultancy and turnkey luxury construction company based in Etihad Town Phase 1, Lahore.
            </p>

            <div className="pt-1 flex items-center gap-2">
              <a
                href={companyInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full apple-glass-deep flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full apple-glass-deep flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923274913906"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full apple-btn-whatsapp flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 6-7) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Our Projects</a></li>
              <li><a href="#construction" className="hover:text-white transition-colors">Construction</a></li>
              <li><a href="#offices" className="hover:text-white transition-colors">Our Office</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Working Projects (Col 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 font-mono">
              Etihad Projects
            </h4>
            <ul className="space-y-1.5 text-xs text-white/70 font-light">
              {etihadProjects.map(p => (
                <li key={p.id}>
                  <a href="#projects" className="hover:text-white transition-colors">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Head Office & Contact (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 font-mono">
              Head Office (Phase 1)
            </h4>
            
            <div className="p-3 rounded-xl apple-glass-deep border border-white/10 text-xs text-white/80 space-y-1.5">
              <div className="font-semibold text-white">Etihad Town Phase 1, Lahore</div>
              <div className="text-[11px] text-white/50">11:00 AM – 8:00 PM &bull; Friday Closed</div>
            </div>

            <div className="space-y-1.5 text-xs">
              {companyInfo.whatsappNumbers.map((line, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${line.raw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl apple-glass-deep flex items-center justify-between hover:border-white/30 transition-all text-white/80"
                >
                  <span className="font-medium">{line.number}</span>
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              ))}
            </div>

            <div className="pt-1 text-[11px] text-white/50">
              <span className="text-white font-medium">Founder:</span> Hafiz Haseeb Ahmad
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <div>
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved. Head Office: Etihad Town Phase 1, Lahore, Pakistan.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Real Estate Specialists</span>
            <span>&bull;</span>
            <span>Turnkey Luxury Construction</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
