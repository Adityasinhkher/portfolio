export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  industry: string;
  descriptor: string;
  previewImage: string;
  secondaryImage: string;
  accentColor: string;
  localPort: number;
  localUrl: string;
  technologies: string[];
  capabilities: string[];
  role: string;
  objective: string;
  experience: string;
  highlightSpecs: { label: string; value: string }[];
  keyHighlights: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'aurelis',
    number: '01',
    title: 'AURELIS',
    subtitle: 'Architecture & Spatial Practice',
    industry: 'LUXURY ARCHITECTURE',
    descriptor: 'Museum-grade digital monograph and spatial archive celebrating atmospheric permanence, material honesty, and restrained editorial stillness.',
    previewImage: '/projects/aurelis-primary.jpg',
    secondaryImage: '/projects/aurelis-secondary.jpg',
    accentColor: '#9E8262',
    localPort: 5174,
    localUrl: 'https://aurelis-aadi.vercel.app/',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Web Audio API', 'Vite'],
    capabilities: ['Editorial Monograph System', 'CAD Drawings Viewer', 'Atmospheric Sound Synthesis', 'Museum Typography Hierarchy'],
    role: 'Frontend Engineering · Editorial Art Direction · Spatial Interface Design',
    objective: 'Create an uncompromising architectural digital archive rejecting all SaaS tropes in favor of an archival, tactile publication experience.',
    experience: 'Aurelis introduces an asymmetrical 12-column layout governed by 1px drafting lines, Cormorant Garamond display serif, interactive architectural drafting viewer, and real-time procedural room-resonance audio synthesis.',
    highlightSpecs: [
      { label: 'Typography', value: 'Cormorant Garamond + JetBrains Mono' },
      { label: 'Grid System', value: '12-Column Asymmetric Drafting Grid' },
      { label: 'Acoustics', value: 'Binaural Room Noise Synthesizer' },
      { label: 'Asset Model', value: 'Architectural Blueprint Folios' },
    ],
    keyHighlights: [
      'Architectural CAD vector viewer with scale markings and elevation views',
      'Ambient binaural sound generator calibrated to physical exhibition halls',
      'Zero generic gradients or floating cards; pure museum monograph structure',
      'Editorial index drawer with comprehensive project inventory and local studio times',
    ],
  },
  {
    id: 'noire',
    number: '02',
    title: 'NOIRÉ',
    subtitle: 'Haute Couture & Ready-to-Wear Atelier',
    industry: 'LUXURY FASHION',
    descriptor: 'High-contrast runway editorial fused with high-end luxury ecommerce, kinetic inertia scrolling, and interactive fabric zoom magnification.',
    previewImage: '/projects/noire-hero.jpg',
    secondaryImage: '/projects/noire-secondary.jpg',
    accentColor: '#FFFFFF',
    localPort: 3000,
    localUrl: 'https://noire-aadi.vercel.app/',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    capabilities: ['Horizontal Collection Drag Reel', 'Interactive Fabric Loupe', 'Multi-Currency Cart System', 'Runway Sound Design'],
    role: 'Frontend Architecture · Kinetic Scroll Engineering · Ecommerce State Modeling',
    objective: 'Translate the austere elegance of Parisian runway shows into a tactile, high-conversion commercial digital experience.',
    experience: 'Features stark monochrome art direction, oversized condensed typography (Big Shoulders Display), zero-card vertical monolith product showcases, mouse-coordinate fabric loupe zoom, and an appointment booking drawer.',
    highlightSpecs: [
      { label: 'Palette', value: 'True Black (#000) & Optic White (#FFF)' },
      { label: 'Display Type', value: 'Big Shoulders Display + Italiana' },
      { label: 'Interaction', value: 'Fabric Inspection Loupe (2.5x)' },
      { label: 'Navigation', value: 'Multi-Currency Maison Header + Cart Drawer' },
    ],
    keyHighlights: [
      'Sub-pixel horizontal drag momentum for runway collection browsing',
      'Interactive fabric zoom loupe exposing high-resolution textile weaves',
      'Multi-currency commerce engine (EUR, USD, GBP, JPY) with real-time cart state',
      'Editorial runway stage with oversized typography cutting through photography',
    ],
  },
  {
    id: 'orbital',
    number: '03',
    title: 'ORBITAL',
    subtitle: 'Earth Observation & Satellite Constellations',
    industry: 'AEROSPACE TECHNOLOGY',
    descriptor: 'Scientific telemetry interface with real-time 3D Three.js orbital globe rendering, tactical ground station maps, and mission lifecycle modeling.',
    previewImage: '/projects/orbital-primary.jpg',
    secondaryImage: '/projects/orbital-secondary.jpg',
    accentColor: '#00F0FF',
    localPort: 5176,
    localUrl: 'https://orbital-aadi.vercel.app/',
    technologies: ['React 19', 'Three.js WebGL', 'GSAP', 'Lenis Scroll', 'Tailwind v4', 'Vite'],
    capabilities: ['60FPS WebGL Globe Simulation', 'Satellite CAD 3D Scene', 'Live UTC Ground Telemetry', 'Multi-Layer HUD Interface'],
    role: 'Creative Development · 3D WebGL Engineering · Mathematical Animation',
    objective: 'Engineer an authoritative aerospace data visualization system for institutional satellite operators and mission directors.',
    experience: 'Orbital features an interactive 3D WebGL Earth globe with custom atmospheric glow shaders, a 6-phase pinned GSAP scroll sequence, live ground station signal triangulation, and satellite constellation filtering.',
    highlightSpecs: [
      { label: '3D Engine', value: 'Three.js r186 with Custom GLSL Shaders' },
      { label: 'Scroll Rig', value: 'Pinned 6-Phase GSAP Mission Narrative' },
      { label: 'HUD Aesthetic', value: 'Electric Cyan (#00f0ff) & Space Obsidian' },
      { label: 'Telemetry', value: 'Live UTC Clock & Ground Uplink Feeds' },
    ],
    keyHighlights: [
      'Interactive WebGL Earth and satellite 3D models with responsive camera controls',
      'Tactical geospatial ground station terminal with live ping latency simulation',
      'High-throughput network topology matrix displaying uplink/downlink gigabits',
      'Precision aerospace HUD reticles and frame markers across viewport corners',
    ],
  },
  {
    id: 'monument',
    number: '04',
    title: 'MONUMENT',
    subtitle: 'Private Coastal Sanctuary Above the Indian Ocean',
    industry: 'LUXURY HOSPITALITY',
    descriptor: 'Immersive cinematic retreat experience driven by full-bleed ocean videography, generative coastal wave audio, and poetic typographic pacing.',
    previewImage: '/projects/monument-primary.jpg',
    secondaryImage: '/projects/monument-secondary.jpg',
    accentColor: '#C4A77D',
    localPort: 5177,
    localUrl: 'https://monument-aadi.vercel.app/',
    technologies: ['React 18', 'GSAP Motion', 'Lenis Smooth Scroll', 'Web Audio API', 'Vite'],
    capabilities: ['Cinematic Silence Intro', 'Ambient Ocean Wave Generator', 'Villa Suite Architecture Inspector', 'Film Grain Overlay'],
    role: 'Frontend Engineering · Audio Experience Design · Motion Direction',
    objective: 'Transport ultra-high-net-worth guests into the sensorial tranquility of a secluded coastal sanctuary before they ever arrive.',
    experience: 'Begins with an intentional atmospheric ocean prologue, layering full-bleed ocean cinematography with Cinzel classical typography, interactive villa floorplan inspection, and an ocean tide audio oscillator.',
    highlightSpecs: [
      { label: 'Opening Scene', value: 'Atmospheric Ocean Prologue & Z-Space Entry' },
      { label: 'Color System', value: 'Coastal Charcoal (#11100F) & Bronze (#C4A77D)' },
      { label: 'Soundscape', value: 'Synthesized Ocean Surf Ambient Sound' },
      { label: 'Typography', value: 'Cinzel Classical + Cormorant Garamond' },
    ],
    keyHighlights: [
      'Atmospheric multi-layer video hero with dynamic fallback handling',
      'Procedural ocean tide audio synthesizer generated entirely via Web Audio API',
      'Curated private residence suite explorer with architectural specifications',
      'Bespoke reservation concierge interface with date verification',
    ],
  },
  {
    id: 'forma',
    number: '05',
    title: 'FORMA',
    subtitle: 'Experimental Creative Technology Studio',
    industry: 'CREATIVE TECHNOLOGY',
    descriptor: 'Radical neo-brutalist studio showcase with 4-corner pinned navigation, keyboard hotkey routing [1-4], and a spring-physics custom cursor.',
    previewImage: '/projects/forma-primary.jpg',
    secondaryImage: '/projects/forma-secondary.jpg',
    accentColor: '#CCFF00',
    localPort: 5178,
    localUrl: 'https://forma-aadi.vercel.app/',
    technologies: ['React 18', 'TypeScript', 'GSAP', 'Lenis Scroll', 'Tailwind CSS', 'Vite'],
    capabilities: ['4-Corner Fixed Navigation', 'Dynamic State Cursor', 'Keyboard Quick-Jump [1-4]', 'Acid Brutalist Aesthetics'],
    role: 'Creative Technology · Experimental Interaction · Frontend Engineering',
    objective: 'Demonstrate cutting-edge, rule-breaking frontend interaction design for avant-garde brands and forward-thinking cultural institutions.',
    experience: 'Breaks conventional layout grids with 4-corner pinned persistent navigation, keyboard chapter jumping [1=Work, 2=Manifesto, 3=Services, 4=Contact], a multi-mode custom cursor with magnetic text states, and high-voltage acid lime accents.',
    highlightSpecs: [
      { label: 'Interface Model', value: '4-Corner Spatial Viewport Anchors' },
      { label: 'Keyboard System', value: 'Instant Chapter Access [1, 2, 3, 4]' },
      { label: 'Typography', value: 'Syne Display Heavy + JetBrains Mono' },
      { label: 'Accent Tone', value: 'High-Voltage Acid Lime (#CCFF00)' },
    ],
    keyHighlights: [
      'Non-standard 4-corner boundary navigation anchoring the screen edges',
      'Reactive cursor physics with contextual labels (VIEW, DRAG, EXPAND, READ)',
      'Interactive studio manifesto ticker tape with kinetic horizontal movement',
      'Full case study inspector drawer with deep technical architecture breakdowns',
    ],
  },
  {
    id: 'atlas',
    number: '06',
    title: 'ATLAS',
    subtitle: 'Global Private Capital & Investment Advisory',
    industry: 'PRIVATE CAPITAL',
    descriptor: 'Pure Swiss International Typographic Style with rigorous 12-column layouts, synchronous global financial clocks, and tabular capital disclosures.',
    previewImage: '/projects/atlas-primary.jpg',
    secondaryImage: '/projects/atlas-secondary.jpg',
    accentColor: '#141413',
    localPort: 5188,
    localUrl: 'https://atlas-aadi.vercel.app/',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'],
    capabilities: ['Synchronized World Clocks', 'Tabular Portfolio System', 'Restrained Financial SVGs', 'Simulated 256-Bit LP Portal'],
    role: 'Institutional Frontend Engineering · Information Architecture · Data Design',
    objective: 'Project institutional permanence, fiduciary rigor, and European private banking discretion through immaculate Swiss typographic restraint.',
    experience: 'Rejects all startup clichés; executed on warm archival paper (#F9F8F5) with dense ink typography, synchronous real-time clocks for Geneva, Singapore, and London, expandable portfolio disclosures, and an accredited investor portal.',
    highlightSpecs: [
      { label: 'Design Grammar', value: 'Swiss International Typographic Style' },
      { label: 'Color System', value: 'Archival Paper (#F9F8F5) & Charcoal Ink' },
      { label: 'Clocks', value: 'Synchronous Live Geneva, Singapore & London' },
      { label: 'Security UI', value: 'Simulated 256-bit Encrypted LP Auth' },
    ],
    keyHighlights: [
      'Live synchronized multi-jurisdiction financial trading clocks',
      'Tabular portfolio disclosure matrix with expandable asset metrics and holding data',
      'Accredited investor LP portal with simulated 2-factor security protocol',
      'Editorial research publication reader with institutional print stylesheet',
    ],
  },
];
