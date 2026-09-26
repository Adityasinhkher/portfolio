import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, ExternalLink, Activity } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/projectsData';

interface NavbarProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickLaunchOpen, setQuickLaunchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0C]/90 backdrop-blur-md border-b border-hairline py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Identity Wordmark */}
          <a
            href="#hero"
            className="group flex flex-col focus:outline-none"
            aria-label="Adityasinh Kher - Home"
          >
            <span className="font-sans font-bold tracking-[0.2em] text-sm md:text-base text-hub-foreground group-hover:text-hub-accent transition-colors">
              ADITYASINH KHER
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-hub-muted uppercase">
              DIGITAL EXPERIENCE DEVELOPER
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            <a
              href="#work"
              className="font-mono text-xs tracking-[0.2em] uppercase text-hub-muted hover:text-hub-foreground transition-colors"
            >
              Work [06]
            </a>
            <a
              href="#capabilities"
              className="font-mono text-xs tracking-[0.2em] uppercase text-hub-muted hover:text-hub-foreground transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#design-to-code"
              className="font-mono text-xs tracking-[0.2em] uppercase text-hub-muted hover:text-hub-foreground transition-colors"
            >
              Design &rarr; Code
            </a>
            <a
              href="#process"
              className="font-mono text-xs tracking-[0.2em] uppercase text-hub-muted hover:text-hub-foreground transition-colors"
            >
              Process
            </a>
            <a
              href="#about"
              className="font-mono text-xs tracking-[0.2em] uppercase text-hub-muted hover:text-hub-foreground transition-colors"
            >
              About
            </a>
          </nav>

          {/* Right Action: Quick Launch Projects & Start Project */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Quick Switcher Trigger */}
            <button
              onClick={() => setQuickLaunchOpen(!quickLaunchOpen)}
              className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline hover:border-hairline-strong bg-hub-surface/60 text-[10px] font-mono tracking-widest text-hub-muted hover:text-hub-foreground transition-all"
              aria-label="Toggle Project Index"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>PROJECT INDEX</span>
            </button>

            {/* Main Contact CTA */}
            <a
              href="#contact"
              className="group flex items-center gap-2 px-4 py-2 border border-hairline-strong hover:border-white text-xs font-mono tracking-widest uppercase bg-white/5 hover:bg-white text-hub-foreground hover:text-hub-bg transition-all duration-300"
            >
              <span>CONTACT</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-hub-foreground hover:text-hub-accent transition-colors"
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Quick Launch Dropdown Panel */}
        {quickLaunchOpen && (
          <div className="absolute top-full right-6 md:right-12 mt-2 w-80 bg-hub-surface border border-hairline-strong p-4 shadow-2xl z-50">
            <div className="flex items-center justify-between pb-3 border-b border-hairline">
              <span className="font-mono text-[10px] tracking-widest text-hub-muted uppercase flex items-center gap-1.5">
                <Activity size={12} className="text-emerald-400" />
                6 PRODUCTION BUILDS
              </span>
              <button
                onClick={() => setQuickLaunchOpen(false)}
                className="text-hub-muted hover:text-hub-foreground text-xs"
              >
                &times;
              </button>
            </div>
            <div className="divide-y divide-hairline mt-1">
              {PROJECTS_DATA.map((proj) => (
                <div
                  key={proj.id}
                  className="py-2.5 flex items-center justify-between group hover:bg-white/5 px-2 -mx-2 transition-colors cursor-pointer"
                  onClick={() => {
                    onSelectProject(proj);
                    setQuickLaunchOpen(false);
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-hub-muted">{proj.number}</span>
                      <span className="font-sans font-medium text-xs text-hub-foreground group-hover:text-hub-accent">
                        {proj.title}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-hub-muted">{proj.industry}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-emerald-400 tracking-wider">
                      VIEW
                    </span>
                    <a
                      href={proj.localUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1 text-hub-muted hover:text-white"
                      title={`Open ${proj.title}`}
                    >
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0A0A0C]/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-fade-in">
          <div className="space-y-6">
            <span className="font-mono text-[10px] tracking-widest text-hub-muted uppercase">
              NAVIGATION
            </span>
            <div className="flex flex-col gap-4 font-sans text-xl font-medium">
              <a
                href="#work"
                onClick={() => setMobileMenuOpen(false)}
                className="text-hub-foreground hover:text-hub-accent transition-colors"
              >
                01 &mdash; Selected Work [06]
              </a>
              <a
                href="#capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="text-hub-foreground hover:text-hub-accent transition-colors"
              >
                02 &mdash; How I Build
              </a>
              <a
                href="#agency-partnership"
                onClick={() => setMobileMenuOpen(false)}
                className="text-hub-foreground hover:text-hub-accent transition-colors"
              >
                03 &mdash; Agency Partnership
              </a>
              <a
                href="#design-to-code"
                onClick={() => setMobileMenuOpen(false)}
                className="text-hub-foreground hover:text-hub-accent transition-colors"
              >
                04 &mdash; Design &rarr; Code
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="text-hub-foreground hover:text-hub-accent transition-colors"
              >
                05 &mdash; Process
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-hub-foreground hover:text-hub-accent transition-colors"
              >
                06 &mdash; About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-hub-foreground hover:text-hub-accent transition-colors"
              >
                07 &mdash; Contact
              </a>
            </div>
          </div>

          <div className="border-t border-hairline pt-6 space-y-4">
            <p className="font-mono text-[10px] tracking-widest text-hub-muted uppercase">
              INDEPENDENT FRONTEND • MOTION • DEPLOYMENT
            </p>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white text-hub-bg font-mono text-xs tracking-widest uppercase font-semibold"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
