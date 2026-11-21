import React, { useEffect } from 'react';
import { CheckCircle2, X, MessageCircle } from 'lucide-react';

export default function GlassToast({ notification, onDismiss }) {
  if (!notification) return null;

  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 7000);
    return () => clearTimeout(timer);
  }, [notification, onDismiss]);

  return (
    <div className="fixed bottom-24 right-6 z-50 max-w-sm w-full animate-slide-up">
      <div className="apple-glass-deep rounded-3xl p-5 border border-white/25 shadow-2xl relative overflow-hidden backdrop-blur-3xl bg-[#0D0D12]/95">
        <div className="glass-specular" />

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                  Inquiry Dispatched
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              
              <h4 className="text-sm font-bold text-white mt-0.5">
                Thank You, {notification.name}
              </h4>

              <p className="text-xs text-white/70 mt-1 font-light leading-relaxed">
                Your mandate for <span className="font-semibold text-white">{notification.interest}</span> has been transmitted to our on-site desk at <span className="text-white font-medium">{notification.mode}</span>.
              </p>

              <div className="mt-2 text-[10px] text-white/50">
                Official contact line: 03274913906 / 03392024906
              </div>
            </div>
          </div>

          <button
            onClick={onDismiss}
            className="text-white/40 hover:text-white p-1 rounded-full transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Apple subtle progress bar */}
        <div className="mt-4 w-full bg-white/10 h-1 rounded-full overflow-hidden">
          <div className="bg-white h-full w-full animate-[shrink_7s_linear_forwards]" />
        </div>
      </div>
    </div>
  );
}
