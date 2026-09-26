import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { ProjectItem, PROJECTS_DATA } from '../data/projectsData';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  // Find index for prev / next
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-hub-surface border border-hairline-strong shadow-2xl flex flex-col z-10 overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-hairline bg-black/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-hub-dim font-bold">{project.number}</span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor }} />
            <span className="font-mono text-xs tracking-widest uppercase text-hub-muted">
              {project.industry} // CASE STUDY
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 tracking-wider">
              PRODUCTION BUILD
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-hub-muted hover:text-white transition-colors hover:bg-white/10"
              aria-label="Close Case Study"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Stage */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-12 space-y-10">
          
          {/* Header Block: Title, Subtitle, and Direct CTA */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-hairline pb-8">
            <div className="space-y-2">
              <h2 id="case-study-title" className="font-sans font-bold text-3xl sm:text-5xl text-hub-foreground">
                {project.title}
              </h2>
              <p className="font-sans text-lg text-hub-accent font-light">
                {project.subtitle}
              </p>
              <p className="font-sans text-sm text-hub-muted max-w-2xl font-light leading-relaxed pt-1">
                {project.descriptor}
              </p>
            </div>

            {/* Launch Action */}
            <div className="flex flex-col gap-2 shrink-0">
              <a
                href={project.localUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-hub-bg font-mono text-xs tracking-widest uppercase font-semibold hover:bg-neutral-200 transition-all duration-300 shadow-lg"
              >
                <span>VIEW LIVE SITE</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Visual Showcase (Two-Image Strip) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[16/10] overflow-hidden border border-hairline bg-black">
              <img
                src={project.previewImage}
                alt={`${project.title} Primary View`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-widest bg-black/75 px-2 py-0.5 text-white/80">
                VIEWPORT 01 // OVERVIEW
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden border border-hairline bg-black">
              <img
                src={project.secondaryImage}
                alt={`${project.title} Detail View`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-widest bg-black/75 px-2 py-0.5 text-white/80">
                VIEWPORT 02 // DETAIL
              </div>
            </div>
          </div>

          {/* Structural Case Study Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-hairline pt-8">
            
            {/* Left: Role & Technology */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-[10px] tracking-widest text-hub-dim uppercase block">
                  ROLE & RESPONSIBILITY
                </span>
                <p className="font-sans font-medium text-sm text-hub-foreground">
                  {project.role}
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] tracking-widest text-hub-dim uppercase block">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 bg-white/5 border border-hairline text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] tracking-widest text-hub-dim uppercase block">
                  CAPABILITY SIGNATURES
                </span>
                <ul className="space-y-1.5 font-sans text-xs text-hub-muted font-light">
                  {project.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-hub-accent shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Objective & Experience */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-[10px] tracking-widest text-hub-dim uppercase block">
                  COMMERCIAL OBJECTIVE
                </span>
                <p className="font-sans text-sm text-neutral-300 font-light leading-relaxed">
                  {project.objective}
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] tracking-widest text-hub-dim uppercase block">
                  THE BUILT EXPERIENCE
                </span>
                <p className="font-sans text-sm text-hub-muted font-light leading-relaxed">
                  {project.experience}
                </p>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[10px] tracking-widest text-hub-dim uppercase block">
                  TECHNICAL CRAFT SPECIFICATIONS
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {project.highlightSpecs.map((spec) => (
                    <div key={spec.label} className="p-2.5 bg-black/40 border border-hairline">
                      <span className="block font-mono text-[9px] uppercase text-hub-dim">{spec.label}</span>
                      <span className="font-mono text-[10px] text-white font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Key Craft Highlights */}
          <div className="border-t border-hairline pt-8 space-y-4">
            <span className="font-mono text-[10px] tracking-widest text-hub-dim uppercase block">
              EXECUTION HIGHLIGHTS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyHighlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white/[0.02] border border-hairline">
                  <span className="font-mono text-xs text-hub-dim">0{i + 1}</span>
                  <span className="font-sans text-xs text-neutral-300 font-light leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Navigator Bar */}
        <div className="px-6 py-4 border-t border-hairline bg-black/80 flex items-center justify-between">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-hub-muted hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">PREV: {prevProject.title}</span>
            <span className="sm:hidden">PREV</span>
          </button>

          <a
            href={project.localUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-hub-accent hover:text-white flex items-center gap-1.5 font-medium underline underline-offset-4"
          >
            <span>VIEW LIVE {project.title}</span>
            <ExternalLink size={12} />
          </a>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-hub-muted hover:text-white transition-colors"
          >
            <span className="hidden sm:inline">NEXT: {nextProject.title}</span>
            <span className="sm:hidden">NEXT</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
