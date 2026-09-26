import React from 'react';

export const Capabilities: React.FC = () => {
  const capabilitiesList = [
    {
      number: '01',
      title: 'FRONTEND',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      details: 'Strictly typed component architectures, zero layout shifts, semantic HTML5 landmarks, and scalable design token systems.',
    },
    {
      number: '02',
      title: 'INTERACTION',
      skills: ['GSAP', 'Scroll systems', 'Motion', 'Web Audio API'],
      details: 'Momentum inertia scrolling, kinetic typographic physics, tactile hover states, and procedural room-resonance audio synthesis.',
    },
    {
      number: '03',
      title: '3D & VISUALIZATION',
      skills: ['Three.js', 'WebGL', 'Custom Shaders', 'Data HUDs'],
      details: 'Hardware-accelerated 60fps WebGL scenes, procedural atmospheric shaders, interactive 3D globes, and telemetry displays.',
    },
    {
      number: '04',
      title: 'DELIVERY',
      skills: ['Responsive systems', 'Performance', 'Accessibility', 'Deployment'],
      details: 'Rigorous reflow tested across 7 viewports (1440px to 375px), sub-second LCP, WCAG AA compliance, and edge deployment.',
    },
  ];

  return (
    <section id="capabilities" className="py-24 border-t border-hairline bg-[#0A0A0C] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-hairline">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-hub-accent inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-hub-accent">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-hub-foreground">
              HOW I BUILD
            </h2>
          </div>

          <div className="font-mono text-xs tracking-widest text-hub-muted max-w-sm">
            <p>
              Focused engineering discipline designed to turn ambitious creative direction into reliable, high-performance software.
            </p>
          </div>
        </div>

        {/* Typographic Structure (4 Clean Architectural Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-hairline">
          {capabilitiesList.map((item, index) => (
            <div
              key={item.number}
              className={`space-y-8 ${index !== 0 ? 'pt-8 lg:pt-0 lg:pl-8' : ''}`}
            >
              {/* Number and Category Title */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-hub-accent tracking-widest block">
                  {item.number}
                </span>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-hub-foreground tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Core Skill Lines (Typographic Stack) */}
              <ul className="space-y-2.5 font-sans text-base sm:text-lg text-white font-medium">
                {item.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-hairline/40 pb-2 hover:pl-1 transition-all text-neutral-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-hub-muted font-light leading-relaxed">
                {item.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
