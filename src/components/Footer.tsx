import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-hairline py-12 bg-[#0A0A0C] text-hub-muted font-mono text-xs select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 tracking-[0.25em] text-[11px] uppercase">
        {/* Left */}
        <div className="text-hub-foreground font-medium">
          ADITYASINH KHER
        </div>

        {/* Center */}
        <div className="text-hub-dim">
          DIGITAL EXPERIENCE DEVELOPER
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <span className="text-hub-dim">2026</span>
          <a
            href="mailto:infoaadi.99@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Adityasinh%20Kher"
            className="text-hub-muted hover:text-white transition-colors lowercase tracking-normal"
          >
            infoaadi.99@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
