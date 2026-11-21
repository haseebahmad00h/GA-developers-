import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, ShieldCheck, CheckCircle2, Sparkles, ArrowUpRight, Hammer, Building2 } from 'lucide-react';
import { companyInfo, ourOffices, etihadProjects } from '../data/projects';

export default function ContactUs({ initialInterest, onSubmitted }) {
  const [targetNumber, setTargetNumber] = useState('923274913906');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: initialInterest && initialInterest.includes('Construction') ? 'Construction Mandate' : 'Etihad Town Real Estate',
    project: initialInterest || 'Etihad Town Phase 1',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Construct the formatted WhatsApp message with all details
    const whatsappText = 
`*NEW INQUIRY — GA DEVELOPERS*
━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${formData.name}
📞 *Phone / Contact:* ${formData.phone}
🛠️ *Service Type:* ${formData.serviceType}
🏗️ *Target Project / Plot:* ${formData.project}
📍 *Office Location:* Etihad Town Phase 1, Lahore
${formData.message ? `💬 *Details / Message:* ${formData.message}\n` : ''}━━━━━━━━━━━━━━━━━━━━
_Submitted via GA Developers Official Web Portal_`;

    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(whatsappText)}`;

    // Open WhatsApp in new tab with pre-filled details
    window.open(whatsappUrl, '_blank');

    // Also trigger on-screen glass toast notification
    onSubmitted({
      name: formData.name,
      phone: formData.phone,
      interest: `${formData.serviceType} (${formData.project})`,
      mode: 'Etihad Town Phase 1, Lahore'
    });

    setFormData({
      name: '',
      phone: '',
      serviceType: 'Etihad Town Real Estate',
      project: 'Etihad Town Phase 1',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* High-Resolution Luxury Modern Building Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/building-modern-skyline.jpg" 
          alt="Modern Architectural Skyline" 
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-115 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/85" />
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-white/[0.05] rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-card text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 border border-white/15">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Client Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-0.5 bg-white/20 mx-auto mb-5" />
          <p className="text-sm sm:text-base text-white/75 font-light max-w-xl mx-auto">
            Connect directly with <span className="text-white font-medium">{companyInfo.name}</span> executive advisors or visit our head office in Etihad Town Phase 1, Lahore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Phone Lines & Office Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Lines Card */}
            <div className="apple-glass-card rounded-3xl p-6 sm:p-8 border border-white/15 shadow-liquid-glass">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Official WhatsApp Numbers</span>
              </h3>
              <p className="text-xs text-white/60 mb-6 font-light">
                Direct mobile access to {companyInfo.name} property &amp; construction advisors:
              </p>

              <div className="space-y-3">
                {companyInfo.whatsappNumbers.map((line, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/${line.raw}?text=${encodeURIComponent('Hello GA Developers. I am inquiring about Etihad Town Phase 1 and construction services.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
                  >
                    <div>
                      <span className="text-[10px] text-white/50 uppercase tracking-wider block font-semibold">{line.label}</span>
                      <span className="text-sm font-bold text-white tracking-wide">{line.number}</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-xl apple-btn-whatsapp text-[11px] font-semibold flex items-center gap-1.5">
                      <span>Chat</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Summary Card (ONLY Etihad Town Phase 1) */}
            <div className="apple-glass-deep rounded-3xl p-6 sm:p-8 border border-white/15">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono">
                Head Office Location
              </h4>
              <div className="space-y-4 text-xs text-white/70">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white block text-sm">Etihad Town Phase 1, Lahore</span>
                    <span className="text-white/50 block mt-1 font-mono">11:00 AM – 8:00 PM &bull; Friday Closed</span>
                    <span className="text-white/40 block text-[11px] mt-0.5">Real Estate &bull; Construction &bull; Architectural Desk</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Liquid Glass Consultation Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="apple-glass-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-liquid-glass relative overflow-hidden">
              <div className="glass-specular" />

              <h3 className="text-xl font-bold text-white mb-2">
                Inquire or Request Construction Estimate
              </h3>
              <p className="text-xs text-white/60 mb-6 font-light">
                Fill out the form below. Your complete inquiry will open directly in WhatsApp for immediate response.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-1.5">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Muhammad Haseeb"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-2xl py-2.5 px-4 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input 
                      type="tel"
                      required
                      placeholder="03274913906"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-2xl py-2.5 px-4 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Type */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-1.5">
                      Service Requirement
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-[#14141B] border border-white/15 rounded-2xl py-2.5 px-3 text-xs sm:text-sm text-white focus:outline-none focus:border-white/50 transition-colors"
                    >
                      <option value="Etihad Town Real Estate">Etihad Town Real Estate</option>
                      <option value="Turnkey Luxury Construction">Turnkey Luxury Construction</option>
                      <option value="Gray Structure Construction">Gray Structure Construction</option>
                      <option value="Architectural & 3D Design">Architectural & 3D Design</option>
                    </select>
                  </div>

                  {/* Target Project / Location */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-1.5">
                      Target Project / Plot Sector
                    </label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full bg-[#14141B] border border-white/15 rounded-2xl py-2.5 px-3 text-xs sm:text-sm text-white focus:outline-none focus:border-white/50 transition-colors"
                    >
                      {etihadProjects.map(p => (
                        <option key={p.id} value={p.name}>{p.name} ({p.city})</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Specific Inquiries */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-1.5">
                    Your Requirements / Construction Details
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Provide details (e.g. plot size: 5 Marla / 10 Marla in Etihad Town Phase 1, covered area, construction timeline)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl p-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>

                {/* Select WhatsApp Line */}
                <div className="pt-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-white/60 block mb-1.5 font-mono">
                    Send Inquiry To Official WhatsApp Line:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTargetNumber('923274913906')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                        targetNumber === '923274913906'
                          ? 'apple-btn-whatsapp border-emerald-400/60 shadow-lg'
                          : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>03274913906 (Line 1)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTargetNumber('923392024906')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                        targetNumber === '923392024906'
                          ? 'apple-btn-whatsapp border-emerald-400/60 shadow-lg'
                          : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>03392024906 (Line 2)</span>
                    </button>
                  </div>
                </div>

                {/* Discretion Note */}
                <div className="flex items-center gap-2 text-[11px] text-white/50 pt-1">
                  <ShieldCheck className="w-4 h-4 text-white/70 flex-shrink-0" />
                  <span>Your privacy is protected. Direct communication from official GA Developers desk.</span>
                </div>

                {/* Submit Button via WhatsApp */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase apple-btn-whatsapp flex items-center justify-center gap-2 shadow-2xl group"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
                    <span>Submit Inquiry via WhatsApp ({targetNumber === '923274913906' ? '03274913906' : '03392024906'})</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-white/50 text-center mt-2">
                    Form details (Name, Contact, Service &amp; Project) will open directly in your WhatsApp.
                  </p>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
