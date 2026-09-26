import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[680px] lg:min-h-[780px] pt-28 sm:pt-32 pb-12 sm:pb-16 flex flex-col justify-between max-w-7xl mx-auto px-6 md:px-12 select-none"
    >
      {/* Top Editorial Datum Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-hairline pb-5 sm:pb-6 pt-3 sm:pt-4 font-mono text-[10px] sm:text-xs tracking-wider sm:tracking-widest text-hub-muted">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse shrink-0" />
          <span className="uppercase text-hub-foreground">STATUS: AVAILABLE FOR SELECT COMMISSIONS</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 uppercase text-hub-muted">
          <span className="hidden md:inline">INDEPENDENT CREATIVE DEVELOPER</span>
          <span>WORLDWIDE / REMOTE</span>
        </div>
      </div>

      {/* Main Statement Stage */}
      <div className="my-auto py-10 md:py-16 space-y-8">
        {/* Discipline Tag */}
        <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] text-hub-muted uppercase flex flex-wrap items-center gap-x-2.5 gap-y-1">
          <span>FRONTEND DEVELOPMENT</span>
          <span className="text-hub-dim">•</span>
          <span>INTERACTION</span>
          <span className="text-hub-dim">•</span>
          <span>MOTION</span>
          <span className="text-hub-dim">•</span>
          <span>DEPLOYMENT</span>
        </div>

        {/* Master Statement */}
        <div className="space-y-4 max-w-5xl">
          <h1 className="font-sans font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.96] text-hub-foreground">
            I BUILD HIGH-END <br />
            <span className="text-transparent font-light" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.7)' }}>WEB EXPERIENCES</span> <br />
            FROM CONCEPT TO PRODUCTION.
          </h1>
        </div>

        {/* Commercial Sub-statement */}
        <p className="max-w-2xl font-sans text-base sm:text-lg md:text-xl text-hub-muted font-light leading-relaxed">
          I partner with design studios, creative agencies, and ambitious brands to translate ambitious art direction into flawless, interactive, production-ready web platforms.
        </p>

        {/* Call to Actions */}
        <div className="pt-4 flex flex-wrap items-center gap-5">
          <a
            href="#work"
            className="group flex items-center gap-3 px-6 py-4 bg-white text-hub-bg font-mono text-xs tracking-widest uppercase font-semibold hover:bg-neutral-200 transition-all duration-300"
          >
            <span>EXPLORE WORK [06]</span>
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#agency-partnership"
            className="group flex items-center gap-3 px-6 py-4 border border-hairline-strong hover:border-white font-mono text-xs tracking-widest uppercase text-hub-foreground hover:bg-white/5 transition-all duration-300"
          >
            <span>AGENCY PARTNERSHIPS</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="pt-6 sm:pt-8 border-t border-hairline flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 font-mono text-[10px] sm:text-xs tracking-wider sm:tracking-widest text-hub-muted">
        <div className="space-y-1">
          <span className="block text-[9px] sm:text-[10px] text-hub-dim uppercase">EXHIBITED PRODUCTION ARTIFACTS</span>
          <span className="text-hub-foreground">06 INDEPENDENT PRODUCTION BUILDS</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-8 text-[10px] sm:text-[11px]">
          <div>
            <span className="text-hub-dim">01. </span>
            <span className="text-hub-foreground">ARCHITECTURE</span>
          </div>
          <div>
            <span className="text-hub-dim">02. </span>
            <span className="text-hub-foreground">FASHION</span>
          </div>
          <div>
            <span className="text-hub-dim">03. </span>
            <span className="text-hub-foreground">AEROSPACE</span>
          </div>
          <div>
            <span className="text-hub-dim">04. </span>
            <span className="text-hub-foreground">HOSPITALITY</span>
          </div>
          <div>
            <span className="text-hub-dim">05. </span>
            <span className="text-hub-foreground">CREATIVE TECH</span>
          </div>
          <div>
            <span className="text-hub-dim">06. </span>
            <span className="text-hub-foreground">PRIVATE CAPITAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};
