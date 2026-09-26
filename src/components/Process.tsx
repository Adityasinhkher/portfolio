import React from 'react';

export const Process: React.FC = () => {
  const processSteps = [
    {
      number: '01',
      title: 'READ THE DESIGN',
      sentence: 'Deconstruct typography scale, kerning, spatial rhythm, and interaction intent before writing a single line of code.',
    },
    {
      number: '02',
      title: 'BUILD THE SYSTEM',
      sentence: 'Architect modular component hierarchies, strict TypeScript interfaces, responsive breakpoint rules, and design tokens.',
    },
    {
      number: '03',
      title: 'ENGINEER THE EXPERIENCE',
      sentence: 'Implement GPU-accelerated motion, smooth scroll physics, WebGL/3D scenes, audio synthesis, and interactive states.',
    },
    {
      number: '04',
      title: 'POLISH',
      sentence: 'Stress-test across 7 viewports (1440px to 375px), audit 60fps frame rates, optimize Core Web Vitals, and verify keyboard accessibility.',
    },
    {
      number: '05',
      title: 'SHIP',
      sentence: 'Clean production builds, automated edge deployment, client preview links, and zero-headache handoff.',
    },
  ];

  return (
    <section id="process" className="py-24 border-t border-hairline bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-hairline">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-hub-accent inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-hub-accent">
                DISCIPLINE & CADENCE
              </span>
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-hub-foreground">
              DEVELOPMENT PROCESS
            </h2>
          </div>

          <div className="font-mono text-xs tracking-widest text-hub-muted max-w-sm">
            <p>
              Linear, predictable execution designed for studio deadlines and zero surprise bottlenecks.
            </p>
          </div>
        </div>

        {/* Minimal Linear Typographic Structure (NOT Generic Cards) */}
        <div className="space-y-0 divide-y divide-hairline">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group hover:bg-white/[0.02] px-4 -mx-4 transition-colors"
            >
              {/* Step Number */}
              <div className="md:col-span-2 font-mono text-sm sm:text-base text-hub-dim group-hover:text-hub-accent transition-colors font-medium">
                {step.number}
              </div>

              {/* Step Title */}
              <div className="md:col-span-3">
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-hub-foreground tracking-tight group-hover:text-white transition-colors">
                  {step.title}
                </h3>
              </div>

              {/* Single Short Sentence Explanation */}
              <div className="md:col-span-7">
                <p className="font-sans text-sm sm:text-base text-hub-muted font-light leading-relaxed">
                  {step.sentence}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
