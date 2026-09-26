import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const AgencyMessage: React.FC = () => {
  return (
    <section id="agency-partnership" className="py-24 border-t border-hairline bg-[#0D0D10] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-hub-accent inline-block" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-hub-accent">
              AGENCY PARTNERSHIP
            </span>
          </div>

          <h2 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-hub-foreground leading-[1.05]">
            YOU BRING THE DESIGN DIRECTION. <br />
            <span className="text-hub-muted font-light">I TURN IT INTO A PRODUCTION-READY EXPERIENCE.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-hub-muted font-light leading-relaxed pt-2 max-w-2xl">
            I partner directly with art directors, creative leads, and design studios as a specialized implementation partner. No middle management or outsourced handoffs — just direct, uncompromising translation of design intent into running code.
          </p>
        </div>

        {/* Asymmetric 2-Column Layout */}
        <div className="pt-8 border-t border-hairline grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: I WORK WITH (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-1">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-hub-muted">PARTNERS</span>
              <h3 className="font-sans font-bold text-2xl text-hub-foreground">I WORK WITH</h3>
            </div>

            <div className="space-y-6 divide-y divide-hairline">
              <div className="pt-6 first:pt-0 space-y-2">
                <h4 className="font-sans font-semibold text-base text-hub-foreground">Design Studios</h4>
                <p className="font-sans text-xs sm:text-sm text-hub-muted font-light leading-relaxed">
                  Preserving exact typographic hierarchies, kerning, spatial proportions, and material subtleties without compromise.
                </p>
              </div>

              <div className="pt-6 space-y-2">
                <h4 className="font-sans font-semibold text-base text-hub-foreground">Creative Agencies</h4>
                <p className="font-sans text-xs sm:text-sm text-hub-muted font-light leading-relaxed">
                  Building complex campaign sites, scroll-driven interactive narratives, audio synthesis, and custom motion rigs for marquee launches.
                </p>
              </div>

              <div className="pt-6 space-y-2">
                <h4 className="font-sans font-semibold text-base text-hub-foreground">Brand Teams</h4>
                <p className="font-sans text-xs sm:text-sm text-hub-muted font-light leading-relaxed">
                  Bringing static brand guidelines, design systems, and identity assets to life in living, interactive browser environments.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: WHAT I HANDLE (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8 lg:border-l lg:border-hairline lg:pl-16">
            <div className="space-y-1">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-hub-muted">SCOPE & EXECUTION</span>
              <h3 className="font-sans font-bold text-2xl text-hub-foreground">WHAT I HANDLE</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-hub-accent tracking-widest uppercase">01 / ARCHITECTURE</span>
                <h4 className="font-sans font-medium text-sm text-hub-foreground">Figma &rarr; Component Systems</h4>
                <p className="font-sans text-xs text-hub-muted font-light leading-relaxed">
                  Translating design files into modular, cleanly architected React/TypeScript components with strict type safety.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] text-hub-accent tracking-widest uppercase">02 / RESPONSIVENESS</span>
                <h4 className="font-sans font-medium text-sm text-hub-foreground">Responsive Reflow Across All Devices</h4>
                <p className="font-sans text-xs text-hub-muted font-light leading-relaxed">
                  Intentional reflow engineered for 1440px desktop down to 390px mobile, avoiding awkward breakpoints and horizontal overflow.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] text-hub-accent tracking-widest uppercase">03 / MOTION</span>
                <h4 className="font-sans font-medium text-sm text-hub-foreground">Interaction & Motion Systems</h4>
                <p className="font-sans text-xs text-hub-muted font-light leading-relaxed">
                  Hardware-accelerated GSAP animations, smooth scroll mechanics, cursor physics, and real-time WebGL/3D integration.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] text-hub-accent tracking-widest uppercase">04 / QUALITY</span>
                <h4 className="font-sans font-medium text-sm text-hub-foreground">Accessibility & Performance</h4>
                <p className="font-sans text-xs text-hub-muted font-light leading-relaxed">
                  Semantic HTML, keyboard navigation, accessible contrast, 60fps rendering, and optimal Core Web Vitals.
                </p>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <span className="font-mono text-[10px] text-hub-accent tracking-widest uppercase">05 / SHIPPING</span>
                <h4 className="font-sans font-medium text-sm text-hub-foreground">Production Deployment & Client Previews</h4>
                <p className="font-sans text-xs text-hub-muted font-light leading-relaxed">
                  Clean git commit history, edge CDN deployment, preview URLs for client sign-off, and seamless handoff to internal engineering teams.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-hairline flex items-center justify-between">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-white hover:text-hub-accent transition-colors"
              >
                <span>DISCUSS AN AGENCY COLLABORATION</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
