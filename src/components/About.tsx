import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-hairline bg-[#0D0D10]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-hub-accent inline-block" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-hub-accent">
              ABOUT THE PRACTICE
            </span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-5xl tracking-tight text-hub-foreground">
            ADITYASINH KHER
          </h2>
          <p className="font-mono text-xs tracking-widest text-hub-muted uppercase">
            CREATIVE DEVELOPMENT • FRONTEND ENGINEERING • INTERACTION • PRODUCTION IMPLEMENTATION
          </p>
        </div>

        {/* Short, Positioned Manifesto (No Long Personal Bio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-hub-muted font-light leading-relaxed">
            <p className="text-white font-normal text-xl sm:text-2xl leading-snug">
              I operate at the intersection of rigorous visual aesthetics and resilient frontend engineering.
            </p>
            <p>
              Too many ambitious design systems fall apart during handoff: spacing drifts, typography degrades, and interactions feel rigid. My sole focus is acting as the technical translator who preserves the designer's intent with obsessive fidelity, backed by clean code and sub-second load times.
            </p>
            <p>
              Whether working with a boutique branding studio on an editorial fashion showcase or engineering a 60fps WebGL telemetry dashboard for an aerospace enterprise, I build digital experiences meant to be remembered.
            </p>
          </div>

          {/* Quick Metrics & Availability Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 bg-hub-surface border border-hairline space-y-6">
            <div className="space-y-1 border-b border-hairline pb-4">
              <span className="font-mono text-[10px] tracking-widest text-hub-dim uppercase">ENGAGEMENT MODEL</span>
              <p className="font-sans font-medium text-sm text-white">
                Independent Implementation Partner
              </p>
            </div>

            <div className="space-y-1 border-b border-hairline pb-4">
              <span className="font-mono text-[10px] tracking-widest text-hub-dim uppercase">CORE FOCUS</span>
              <p className="font-sans text-xs text-neutral-300">
                Design to Code · Custom Interaction · Scroll Architecture · Motion Systems
              </p>
            </div>

            <div className="space-y-1 border-b border-hairline pb-4">
              <span className="font-mono text-[10px] tracking-widest text-hub-dim uppercase">COMMERCIAL AVAILABILITY</span>
              <p className="font-sans text-xs text-emerald-400 font-mono">
                Booking Q3 / Q4 2026 Collaborations
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-white hover:text-hub-accent transition-colors"
            >
              <span>CONNECT WITH ADITYASINH</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
