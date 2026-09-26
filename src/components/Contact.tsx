import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'infoaadi.99@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative w-full pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#0A0A0C] text-[#F4F4F6] select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Subtle Section Label */}
        <div className="mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-hub-muted">
            CONTACT
          </span>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Controlled Typographic Statement + Discipline Tags (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-12 sm:space-y-16">
            {/* The Main Question */}
            <h2 className="font-sans font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.04] text-hub-foreground">
              <span className="block">HAVE A DESIGN</span>
              <span className="block">THAT NEEDS</span>
              <span className="block text-hub-muted font-extralight">TO BECOME REAL?</span>
            </h2>

            {/* Much Smaller Discipline Metadata */}
            <div className="space-y-2 font-mono text-xs sm:text-sm tracking-[0.28em] text-hub-muted uppercase pt-4 sm:pt-6">
              <p className="hover:text-hub-foreground transition-colors">DESIGN IMPLEMENTATION</p>
              <p className="hover:text-hub-foreground transition-colors">FRONTEND</p>
              <p className="hover:text-hub-foreground transition-colors">INTERACTION</p>
              <p className="hover:text-hub-foreground transition-colors">MOTION</p>
            </div>
          </div>

          {/* Right Column: Email, Copy Trigger, and Subdued Direct Action (lg:col-span-5) */}
          <div className="lg:col-span-5 lg:pt-8 flex flex-col items-start lg:items-end justify-between space-y-12">
            
            {/* Primary Email Block */}
            <div className="space-y-4 text-left lg:text-right w-full">
              <div>
                <a
                  href={`mailto:${email}?subject=Project%20Inquiry%20%E2%80%94%20Adityasinh%20Kher`}
                  className="font-mono text-xl sm:text-2xl md:text-3xl text-hub-foreground hover:text-white transition-all duration-300 hover:tracking-wide inline-block py-2 focus:outline-none focus:underline"
                  aria-label={`Send email to ${email}`}
                >
                  {email}
                </a>
              </div>

              {/* Secondary Subtle Action: Copy Email */}
              <div>
                <button
                  onClick={handleCopyEmail}
                  className="font-mono text-xs tracking-[0.24em] uppercase text-hub-muted hover:text-white transition-colors duration-200 py-2 inline-flex items-center min-h-[44px] focus:outline-none"
                  aria-label="Copy email address to clipboard"
                >
                  <span className={copied ? 'text-hub-accent font-semibold tracking-widest' : ''}>
                    {copied ? 'COPIED' : 'COPY EMAIL'}
                  </span>
                </button>
              </div>
            </div>

            {/* Subdued Editorial Call to Action */}
            <div className="pt-4 text-left lg:text-right w-full">
              <a
                href={`mailto:${email}?subject=Project%20Inquiry%20%E2%80%94%20Adityasinh%20Kher`}
                className="group inline-flex items-center gap-3 font-mono text-sm sm:text-base tracking-[0.25em] uppercase text-hub-foreground hover:text-white transition-colors py-3 min-h-[44px] focus:outline-none"
              >
                <span>LET&apos;S TALK</span>
                <span className="text-hub-muted group-hover:text-white transition-transform duration-300 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
