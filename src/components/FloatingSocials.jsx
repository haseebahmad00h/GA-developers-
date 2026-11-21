import React, { useState } from 'react';
import { MessageCircle, X, PhoneCall, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/projects';

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function FloatingSocials() {
  const [whatsappMenuOpen, setWhatsappMenuOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* WhatsApp Submenu Drawer if open */}
      {whatsappMenuOpen && (
        <div className="apple-glass-card rounded-2xl p-4 shadow-2xl border border-white/20 mb-2 w-72 animate-fade-in backdrop-blur-2xl bg-[#0D0D12]/95">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Contact via WhatsApp
              </span>
            </div>
            <button 
              onClick={() => setWhatsappMenuOpen(false)}
              className="text-white/60 hover:text-white p-1 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {companyInfo.whatsappNumbers.map((item, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${item.raw}?text=${encodeURIComponent('Hello GAH Holdings. I am inquiring about Etihad Town projects.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setWhatsappMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
              >
                <div>
                  <div className="text-[11px] text-white/60">{item.label}</div>
                  <div className="text-xs font-semibold text-white tracking-wide">{item.number}</div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
          <div className="text-[10px] text-white/50 text-center mt-3">
            Immediate Response &bull; GAH Holdings Official Desk
          </div>
        </div>
      )}

      {/* Floating Buttons Bar (3 attractive floating buttons as requested) */}
      <div className="flex items-center gap-2.5">
        
        {/* 1. Facebook Floating Button */}
        <a
          href={companyInfo.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-glass-pill w-12 h-12 rounded-full flex items-center justify-center text-white/80 hover:text-white shadow-xl group"
          title="Connect on Facebook"
          aria-label="Facebook"
        >
          <FacebookIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </a>

        {/* 2. Instagram Floating Button */}
        <a
          href={companyInfo.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-glass-pill w-12 h-12 rounded-full flex items-center justify-center text-white/80 hover:text-white shadow-xl group"
          title="Follow on Instagram"
          aria-label="Instagram"
        >
          <InstagramIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </a>

        {/* 3. WhatsApp Floating Button (Primary Glow) */}
        <button
          onClick={() => setWhatsappMenuOpen(!whatsappMenuOpen)}
          className="apple-btn-whatsapp w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-2xl group focus:outline-none"
          title="Chat on WhatsApp"
          aria-label="WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-black animate-pulse" />
          </div>
        </button>

      </div>
    </div>
  );
}
