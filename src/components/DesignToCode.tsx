import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const DesignToCode: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'design',
      stepNumber: '01',
      title: 'DESIGN DIRECTION',
      subtitle: 'Art Direction, Spatial Hierarchy & Typography',
      desc: 'Deconstructing the architectural monograph vision: museum-grade publication pacing, Cormorant Garamond serif headings, 1px drafting lines, and intentional visual stillness.',
      badge: 'ART DIRECTION • TYPOGRAPHY • SPATIAL RHYTHM',
      details: [
        'Curated color harmony: Warm Ivory (#F9F8F5), Patinated Bronze (#9E8262), and Deep Charcoal',
        'Asymmetrical 12-column drafting layout calibrated to architectural monograph standards',
        'Micro-scale metadata (9px JetBrains Mono) juxtaposed with monumental editorial headlines',
        'Sound concept: generative room resonance calibrated to evoke physical exhibition halls',
      ],
      previewImg: '/projects/aurelis-primary.jpg',
      deliverables: [
        { label: 'Typography Spec', value: 'Cormorant Garamond (Display) + JetBrains Mono (Technical)' },
        { label: 'Layout Grammar', value: '12-Column Asymmetric Drafting Grid with 1px Rules' },
        { label: 'Tone & Atmosphere', value: 'Quiet, Museum Monograph, High-End Permanence' },
      ],
    },
    {
      id: 'system',
      stepNumber: '02',
      title: 'SYSTEM ARCHITECTURE',
      subtitle: 'Component Architecture & Responsive Contracts',
      desc: 'Translating visual concepts into modular React primitives, strict TypeScript interfaces, fluid responsive math, and state machine contracts.',
      badge: 'DESIGN TOKENS • BREAKPOINT MATRIX • STRICT TYPES',
      details: [
        'Strict breakpoint coverage: 1440px, 1280px, 1024px, 768px, 430px, 390px, 375px',
        'Zero layout shifts (CLS < 0.01) with explicit aspect-ratio containment across all folios',
        'Semantic HTML5 structure with landmark navigation, main role, and accessible drawer sheets',
        'Reduced-motion fallbacks respecting accessibility settings without breaking navigation',
      ],
      previewImg: '/projects/aurelis-secondary.jpg',
      deliverables: [
        { label: 'Core Stack', value: 'React 18, TypeScript, Tailwind CSS, Vite' },
        { label: 'Responsive Testing', value: '7 Standard Viewports Verified (Desktop to Mobile)' },
        { label: 'State Modeling', value: 'Project Inventory Drawer + Real-Time Studio Clocks' },
      ],
    },
    {
      id: 'interaction',
      stepNumber: '03',
      title: 'INTERACTION & MOTION',
      subtitle: 'CAD Viewer, Audio Synthesis & Kinetic Pacing',
      desc: 'Engineering interactive elements that serve the editorial concept: an architectural vector blueprint viewer, room-resonance Web Audio generator, and buttery drawer transitions.',
      badge: 'WEB AUDIO API • CAD VIEWER • AMBIENT SYNTHESIS',
      details: [
        'Binaural room resonance generated in real time via Web Audio API (white noise + biquad bandpass)',
        'Interactive CAD drawings viewer with live elevation layer inspection and architectural scale',
        'Sub-millisecond state updates with clean dependency management and zero UI lag',
        'Refined drawer easing curves matching physical architectural specimen cabinets',
      ],
      previewImg: '/projects/aurelis-primary.jpg',
      deliverables: [
        { label: 'Audio Engine', value: 'Web Audio API Real-time Synthesis (142.5Hz Bandpass)' },
        { label: 'Interactive Feature', value: 'Vector CAD Floorplan & Elevation Inspector' },
        { label: 'Motion Rig', value: 'Hardware-Accelerated CSS Transitions & Easing' },
      ],
    },
    {
      id: 'production',
      stepNumber: '04',
      title: 'PRODUCTION DELIVERY',
      subtitle: 'Cross-Device Polish, CWV & Edge Performance',
      desc: 'Delivering an uncompromised commercial web experience running at 60fps with instant initial load times, perfect touch handling, and global edge readiness.',
      badge: 'CORE WEB VITALS • 60FPS • PRODUCTION READY',
      details: [
        'Sub-second initial paint with optimized critical asset loading and lazy-loaded drawers',
        'Hardware-accelerated CSS transforms and composited opacity animations throughout',
        'Thoroughly tested across Safari, Chrome, Firefox, and iOS WebKit engines',
        'Production build passing strict TypeScript compilation with zero lint warnings',
      ],
      previewImg: '/projects/aurelis-secondary.jpg',
      deliverables: [
        { label: 'Largest Contentful Paint', value: '< 1.0s on standard fast 4G connection' },
        { label: 'Cumulative Layout Shift', value: '0.00 (Zero layout shifts)' },
        { label: 'Engineering Output', value: 'Production-ready build, clean git history' },
      ],
    },
  ];

  return (
    <section id="design-to-code" className="py-24 border-t border-hairline bg-[#0A0A0C] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-hairline">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-hub-accent inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-hub-accent">
                TECHNICAL EXECUTION METHODOLOGY
              </span>
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-hub-foreground">
              DESIGN &rarr; SYSTEM &rarr; INTERACTION &rarr; PRODUCTION
            </h2>
          </div>

          <div className="font-mono text-xs tracking-widest text-hub-muted max-w-md">
            <p>
              Execution Deep Dive: <span className="text-white font-semibold">01 &mdash; AURELIS</span>
              <br />
              How an ambitious editorial concept becomes a living, high-performance web monograph.
            </p>
          </div>
        </div>

        {/* 4-Step Interactive Progression Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((s, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStep(index)}
                className={`p-4 sm:p-5 text-left border transition-all duration-300 relative ${
                  isActive
                    ? 'bg-white/10 border-white text-white'
                    : 'bg-hub-surface border-hairline text-hub-muted hover:border-hairline-strong hover:text-white'
                }`}
                aria-label={`Show ${s.title}`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] tracking-widest">
                  <span className={isActive ? 'text-hub-accent font-bold' : 'text-hub-dim'}>
                    STEP {s.stepNumber}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                </div>
                <h3 className="font-sans font-bold text-sm sm:text-base mt-2 tracking-tight">
                  {s.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep Breakdown Stage */}
        <div className="bg-hub-surface border border-hairline-strong p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Step Explanations & Craft Deliverables (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-hub-accent uppercase">
                {steps[activeStep].badge}
              </span>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-hub-foreground">
                {steps[activeStep].subtitle}
              </h3>
              <p className="font-sans text-sm text-hub-muted font-light leading-relaxed pt-2">
                {steps[activeStep].desc}
              </p>
            </div>

            <div className="border-t border-hairline pt-6 space-y-3">
              <span className="font-mono text-[10px] tracking-widest text-hub-dim uppercase block">
                WHAT WAS DELIVERED IN THIS PHASE
              </span>
              <ul className="space-y-2.5 font-sans text-xs text-neutral-300 font-light">
                {steps[activeStep].details.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-mono text-hub-accent text-[10px] mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Link to Aurelis */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="https://aurelis-ivory.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-white text-hub-bg font-mono text-xs tracking-widest uppercase font-semibold hover:bg-neutral-200 transition-colors"
              >
                <span>VIEW LIVE AURELIS</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Authentic Visual & Architectural Proof (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Visual Thumbnail Stage with Authentic Screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden border border-hairline bg-black">
              <img
                key={steps[activeStep].id}
                src={steps[activeStep].previewImg}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
              <div className="absolute top-3 right-3 font-mono text-[9px] bg-black/80 backdrop-blur-sm px-2.5 py-1 text-hub-accent border border-hairline">
                PHASE {steps[activeStep].stepNumber} ARTIFACT
              </div>
            </div>

            {/* Architecture Deliverables Card */}
            <div className="bg-black/60 border border-hairline p-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-hairline text-xs font-mono tracking-widest text-hub-muted">
                <span className="text-white uppercase font-medium">PHASE DELIVERABLES</span>
                <span className="text-[10px] text-hub-dim">AURELIS MONOGRAPH</span>
              </div>
              <div className="space-y-2.5">
                {steps[activeStep].deliverables.map((del, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <span className="font-mono text-[11px] text-hub-muted flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      {del.label}
                    </span>
                    <span className="font-sans text-neutral-300 font-light text-[11px] sm:text-right">
                      {del.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
