import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/projectsData';

interface WorkIndexProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const WorkIndex: React.FC<WorkIndexProps> = ({ onSelectProject }) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS_DATA[0].id);

  const activeProject = PROJECTS_DATA.find((p) => p.id === activeProjectId) || PROJECTS_DATA[0];

  return (
    <section id="work" className="py-24 border-t border-hairline bg-[#0A0A0C] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-hairline">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-hub-accent inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-hub-accent">
                INDEX 01 &mdash; 06
              </span>
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-hub-foreground">
              SELECTED PROJECTS
            </h2>
          </div>

          <div className="font-mono text-xs tracking-widest text-hub-muted max-w-sm">
            <p>
              Six production implementations spanning luxury, science, hospitality, avant-garde design, and private equity.
            </p>
          </div>
        </div>

        {/* Desktop Split Stage: Interactive Typographic List (Left) + Reactive Visual Stage (Right) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Typographic Project Index List (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-1 divide-y divide-hairline">
            {PROJECTS_DATA.map((project) => {
              const isSelected = activeProjectId === project.id;

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setActiveProjectId(project.id)}
                  onClick={() => onSelectProject(project)}
                  className={`group relative py-7 sm:py-8 px-4 -mx-4 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.03] pl-6 border-l-2'
                      : 'hover:bg-white/[0.015] border-l-2 border-transparent'
                  }`}
                  style={{
                    borderLeftColor: isSelected ? project.accentColor : 'transparent',
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProject(project);
                    }
                  }}
                  aria-label={`View ${project.title} - ${project.industry}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                    {/* Number & Title */}
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs text-hub-dim group-hover:text-hub-foreground transition-colors">
                        {project.number}
                      </span>
                      <div>
                        <h3 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-hub-foreground group-hover:text-white transition-colors flex items-center gap-3">
                          <span>{project.title}</span>
                          <ChevronRight
                            size={18}
                            className={`text-hub-muted transform transition-transform duration-300 ${
                              isSelected ? 'translate-x-1 text-white' : 'opacity-0 group-hover:opacity-100'
                            }`}
                          />
                        </h3>
                        <span className="block font-mono text-[11px] tracking-widest uppercase text-hub-muted mt-1">
                          {project.industry}
                        </span>
                      </div>
                    </div>

                    {/* Metadata pill & CTA indicator */}
                    <div className="flex items-center gap-3 self-start sm:self-auto">
                      <span className="font-mono text-[11px] tracking-widest uppercase text-hub-muted group-hover:text-white flex items-center gap-1">
                        <span>CASE STUDY</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>

                  {/* Short Descriptor */}
                  <p className="mt-3 font-sans text-xs sm:text-sm text-hub-muted line-clamp-2 max-w-xl font-light leading-relaxed">
                    {project.descriptor}
                  </p>

                  {/* Capabilities / Tech Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 bg-white/5 border border-hairline text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.capabilities.slice(0, 1).map((cap) => (
                      <span
                        key={cap}
                        className="hidden md:inline-block font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 bg-white/[0.02] border border-hairline text-hub-muted"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  {/* Mobile Compact Quick-Link (Visible only on smaller screens) */}
                  <div className="mt-4 pt-3 border-t border-hairline/40 flex lg:hidden items-center justify-between font-mono text-[10px] tracking-widest text-hub-muted">
                    <span className="text-hub-dim uppercase">{project.industry}</span>
                    <a
                      href={project.localUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-hub-foreground hover:text-white flex items-center gap-1 font-medium"
                    >
                      <span>VIEW SITE</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Reactive Visual Preview Viewport (lg:col-span-5) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 self-start">
            <div className="bg-hub-surface border border-hairline-strong overflow-hidden relative shadow-2xl transition-all duration-500">
              
              {/* Preview Window Header Bar */}
              <div className="px-5 py-3 border-b border-hairline bg-black/40 flex items-center justify-between text-xs font-mono tracking-widest text-hub-muted">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeProject.accentColor }} />
                  <span className="text-hub-foreground uppercase font-medium">{activeProject.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-emerald-400 font-mono tracking-wider">PRODUCTION BUILD</span>
                </div>
              </div>

              {/* Main Visual Display (Responsive Height) */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-black group">
                <img
                  key={activeProject.id}
                  src={activeProject.previewImage}
                  alt={`${activeProject.title} showcase`}
                  className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle technical gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/30 pointer-events-none" />

                {/* Overlay Micro-tags */}
                <div className="absolute top-4 left-4 font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 bg-black/70 backdrop-blur-sm border border-hairline text-hub-foreground">
                  {activeProject.industry}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                  <div className="space-y-1">
                    <p className="font-mono text-[9px] tracking-widest text-hub-muted uppercase">SYSTEM ARCHITECTURE</p>
                    <p className="font-sans font-medium text-xs text-white">
                      {activeProject.capabilities[0]}
                    </p>
                  </div>
                  <div className="font-mono text-[10px] text-hub-accent">
                    [{activeProject.number} / 06]
                  </div>
                </div>
              </div>

              {/* Curatorial Details Box Under Image */}
              <div className="p-6 space-y-4 bg-hub-surface/80">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-sans font-bold text-lg text-hub-foreground">
                      {activeProject.title}
                    </h4>
                    <span className="font-mono text-[10px] text-hub-muted uppercase">
                      {activeProject.subtitle}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-hub-muted leading-relaxed font-light">
                    {activeProject.experience}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="pt-2 border-t border-hairline flex flex-wrap gap-1.5">
                  {activeProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 bg-black/50 border border-hairline text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Direct Actions in Preview Box */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onSelectProject(activeProject)}
                    className="flex-1 py-3 px-4 bg-white text-hub-bg font-mono text-xs tracking-widest uppercase font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>CASE STUDY</span>
                    <ChevronRight size={14} />
                  </button>

                  <a
                    href={activeProject.localUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 border border-hairline-strong hover:border-white font-mono text-xs tracking-widest uppercase text-white hover:bg-white/5 transition-colors flex items-center gap-2"
                    title={`Open ${activeProject.title}`}
                  >
                    <span>VIEW SITE</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
