import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkIndex } from './components/WorkIndex';
import { AgencyMessage } from './components/AgencyMessage';
import { DesignToCode } from './components/DesignToCode';
import { Capabilities } from './components/Capabilities';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProjectItem } from './data/projectsData';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F4F4F6] font-sans antialiased relative selection:bg-white selection:text-black">
      {/* Background Architectural Grid Pattern */}
      <div className="fixed inset-0 bg-curator-grid pointer-events-none opacity-40 z-0" />

      {/* Primary Navigation */}
      <Navbar onSelectProject={(project) => setSelectedProject(project)} />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* Section 01: Hero & Positioning */}
        <Hero />

        {/* Section 02: Distinctive Interactive Work Index (The Focus) */}
        <WorkIndex onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 03: Agency Message ("YOU BRING THE DESIGN. I TURN IT INTO A WORKING PRODUCT.") */}
        <AgencyMessage />

        {/* Section 04: Design → System → Code → Live Experience */}
        <DesignToCode />

        {/* Section 05: How I Build */}
        <Capabilities />

        {/* Section 06: 5-Step Process */}
        <Process />

        {/* Section 08: About the Practice */}
        <About />

        {/* Section 09: Contact & Agency Brief */}
        <Contact />
      </main>

      {/* Footer & Global Local Port Directory */}
      <Footer />

      {/* Deep Dive Case Study Inspector Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
      />
    </div>
  );
};

export default App;
