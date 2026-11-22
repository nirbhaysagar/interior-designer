import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ChevronDown, 
  Plus, 
  Minus, 
  ArrowRight, 
  Menu, 
  X,
  Sparkles,
  Compass,
  Check,
  Layers,
  Sliders,
  MoveRight
} from 'lucide-react';

export default function VividaDesign({ onOpenConsultation, onOpenProject }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [sliderPosition, setSliderPosition] = useState(50); // Before/After slider position
  const [activeMaterial, setActiveMaterial] = useState(0);

  // High-res curated architectural photography
  const heroImage = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85";
  const aboutCardImage = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80";

  // Before/After comparison images
  const beforeImage = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"; // Raw / initial space
  const afterImage = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80";  // Refined architectural space

  const materials = [
    {
      name: 'Quarter-Sawn European Oak',
      code: 'MAT-01',
      tone: 'Warm natural matte oil',
      swatch: '#D5C4A8',
      desc: 'Sourced from sustainably managed alpine forests, kiln-dried and finished with zero-VOC organic hardwax.'
    },
    {
      name: 'Patinated Dark Bronze',
      code: 'MAT-02',
      tone: 'Hand-burnished sulfur patina',
      swatch: '#3A2E25',
      desc: 'Hand-finished metal profiles designed to develop an organic, tactile luster through years of daily touch.'
    },
    {
      name: 'Honed Calacatta Viola',
      code: 'MAT-03',
      tone: 'Satin matte honed stone',
      swatch: '#E8E2D8',
      desc: 'Direct quarry selection in Tuscany; seamless vein matching across kitchen waterfall monoliths.'
    },
    {
      name: 'Fluted Smoked Glass',
      code: 'MAT-04',
      tone: 'Opti-clear acoustic glass',
      swatch: '#7A756D',
      desc: 'Custom extruded vertical ribbing providing spatial privacy while refracting daylight into golden rays.'
    }
  ];

  const projects = [
    {
      id: 'warm-oak-02',
      number: '01',
      title: 'WARM OAK 02',
      subtitle: 'Custom storage system with metal profiles and natural oak',
      category: 'RESIDENTIAL',
      location: 'Zurich, Switzerland',
      area: '3,200 sq ft',
      year: '2025',
      scope: 'Full Interior Architecture & Custom Joinery',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      secondaryImages: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'glass-metal-19',
      number: '02',
      title: 'GLASS & METAL 19',
      subtitle: 'Modular storage architecture with metal structures and glass panels',
      category: 'RESIDENTIAL',
      location: 'Milan, Italy',
      area: '4,100 sq ft',
      year: '2024',
      scope: 'Kitchen Architecture & Integrated Living',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      isCenterTall: true,
      secondaryImages: [
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'brown-truffle',
      number: '03',
      title: 'BROWN TRUFFLE',
      subtitle: 'Custom storage system with metal profiles and painted copper',
      category: 'PENTHOUSE',
      location: 'London, UK',
      area: '2,800 sq ft',
      year: '2025',
      scope: 'Master Suite & Acoustic Cladding',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
      secondaryImages: [
        'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'canyon-residence',
      number: '04',
      title: 'CANYON RESIDENCE 04',
      subtitle: 'Sculptural stone fireplace, floor-to-ceiling glass & fluted walnut',
      category: 'RESIDENTIAL',
      location: 'Aspen, Colorado',
      area: '5,600 sq ft',
      year: '2024',
      scope: 'Complete Ground-Up Interior Architecture',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      secondaryImages: [
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'monolith-suite',
      number: '05',
      title: 'MONOLITH SUITE 11',
      subtitle: 'Honed travertine vanity monoliths and concealed ambient lighting',
      category: 'HOSPITALITY',
      location: 'Paris, France',
      area: '1,950 sq ft',
      year: '2025',
      scope: 'Boutique Hotel Presidential Suite',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      secondaryImages: [
        'https://images.unsplash.com/photo-1600566753086-2d3a3d53a298?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'stone-pavilion',
      number: '06',
      title: 'VALLEY PAVILION 07',
      subtitle: 'Seamless indoor-outdoor entertaining salon with dark metal frames',
      category: 'COMMERCIAL',
      location: 'Kyoto, Japan',
      area: '3,800 sq ft',
      year: '2024',
      scope: 'Private Tasting Room & Salon',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      secondaryImages: [
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
      ]
    }
  ];

  const filteredProjects = activeCategory === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const processSteps = [
    {
      number: '01',
      title: 'DISCOVERY & ARCHITECTURAL BRIEF',
      subtitle: 'Spatial volume analysis, lifestyle mapping, and solar study',
      description: 'We initiate every partnership with deep listening. We analyze your daily circulation routines, daylight orientation, and tactile preferences to establish a timeless vision.'
    },
    {
      number: '02',
      title: 'SPATIAL PLANNING & 3D VISUALIZATION',
      subtitle: 'Photorealistic architectural renders and millwork drawing sets',
      description: 'Our atelier produces millimeter-precise CAD/BIM floorplans and hyper-realistic 3D visualizations so you experience materiality, light, and proportions prior to construction.'
    },
    {
      number: '03',
      title: 'BESPOKE JOINERY & MATERIAL CURATION',
      subtitle: 'Direct sourcing with master European wood & stone artisans',
      description: 'We partner with heritage woodturners, metal artisans, and quarry masters across Switzerland, Italy, and Scandinavia to craft one-of-one built-in architectural elements.'
    },
    {
      number: '04',
      title: 'SITE DIRECTION & WHITE-GLOVE HANDOVER',
      subtitle: 'Turnkey site coordination down to art curation and scents',
      description: 'From contractor coordination and structural verification to the final curated art placement, our lead architects oversee the delivery until your home is completely serene.'
    }
  ];

  const faqs = [
    {
      q: 'How does the design consultation process begin?',
      a: 'The journey begins with an initial spatial discovery session. We review your architectural blueprints or current residence, discuss your timeline and budget parameters, and present an initial conceptual roadmap tailored to your lifestyle.'
    },
    {
      q: 'Do you manage custom furniture and bespoke joinery fabrication?',
      a: 'Yes. Custom architectural joinery is the core of our studio DNA. Over 80% of the storage, cabinetry, wall paneling, and statement furniture in our projects is custom designed by Vivida and fabricated by our master artisans.'
    },
    {
      q: 'Can you work with our existing architect or general contractor?',
      a: 'Absolutely. We regularly operate either as lead interior architects or in tight collaboration with your existing build team, providing detailed CAD/BIM drawing sets, mechanical specifications, and daily site coordination.'
    },
    {
      q: 'What is the typical timeframe for a full residential transformation?',
      a: 'A comprehensive interior architecture project typically ranges from 4 to 9 months depending on scope, structural permits, and custom fabrication timelines. We provide a milestone-locked project calendar during phase one.'
    },
    {
      q: 'Do you undertake international projects outside your primary studios?',
      a: 'Yes, our team currently oversees private residential commissions across Switzerland, the UK, the United States, France, and Japan.'
    }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#181614] font-sans selection:bg-[#181614] selection:text-[#F6F4EE] antialiased">
      
      {/* =========================================================================
          TOP ARCHITECTURAL TICKER / COORDINATES (Refined minimal touch)
          ========================================================================= */}
      <div className="w-full bg-[#12100E] border-b border-white/10 py-1.5 px-6 lg:px-12 text-[10px] tracking-[0.25em] uppercase text-neutral-400 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D5C4A8] animate-pulse" />
          <span className="font-semibold text-neutral-300">VIVIDA STUDIO · INTERIOR ARCHITECTURE</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 font-mono text-[9px] text-neutral-400">
          <span>47°22'N 8°32'E ZURICH</span>
          <span>·</span>
          <span>45°28'N 9°11'E MILAN</span>
          <span>·</span>
          <span>51°30'N 0°07'W LONDON</span>
          <span>·</span>
          <span className="text-[#D5C4A8]">RESIDENTIAL & PENTHOUSES</span>
        </div>
      </div>

      {/* =========================================================================
          1. HERO SECTION & HEADER (Refurbished with elevated spacing & typography)
          ========================================================================= */}
      <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#181614]">
        
        {/* Cinematic Hero Background with Subtle Architectural Grain */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Warm Architectural Interior" 
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08]"
          />
          {/* Subtle multi-layer gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-black/35 to-black/50" />
        </div>

        {/* Global Navigation Bar */}
        <header className="relative z-20 w-full border-b border-white/15 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
            
            {/* Brand Logo - 'vivida' in lowercase geometric font */}
            <a 
              href="#hero" 
              className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white font-sans lowercase hover:opacity-80 transition-opacity"
            >
              vivida
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.25em] text-white/90 uppercase">
              <button onClick={() => scrollToSection('about')} className="hover:text-amber-200 transition-colors">
                ABOUT
              </button>
              <button onClick={() => scrollToSection('materials')} className="hover:text-amber-200 transition-colors">
                MATERIALITY
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-amber-200 transition-colors">
                PROJECTS
              </button>
              <button onClick={() => scrollToSection('transformation')} className="hover:text-amber-200 transition-colors">
                SPATIAL STUDY
              </button>
              <button onClick={() => scrollToSection('process')} className="hover:text-amber-200 transition-colors">
                PROCESS
              </button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-amber-200 transition-colors">
                FAQ
              </button>
            </nav>

            {/* Contact Button */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={onOpenConsultation}
                className="px-6 py-2.5 border border-white/60 hover:border-white text-white text-[11px] font-bold tracking-[0.2em] uppercase rounded-none hover:bg-white hover:text-black transition-all shadow-sm"
              >
                CONTACT US
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#181614]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 text-center">
              <button onClick={() => scrollToSection('about')} className="block w-full py-2 text-xs font-bold tracking-widest uppercase text-white">
                ABOUT
              </button>
              <button onClick={() => scrollToSection('materials')} className="block w-full py-2 text-xs font-bold tracking-widest uppercase text-white">
                MATERIALITY
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full py-2 text-xs font-bold tracking-widest uppercase text-white">
                PROJECTS
              </button>
              <button onClick={() => scrollToSection('transformation')} className="block w-full py-2 text-xs font-bold tracking-widest uppercase text-white">
                SPATIAL STUDY
              </button>
              <button onClick={() => scrollToSection('process')} className="block w-full py-2 text-xs font-bold tracking-widest uppercase text-white">
                PROCESS
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full py-2 text-xs font-bold tracking-widest uppercase text-white">
                FAQ
              </button>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }} 
                className="w-full mt-3 py-3 bg-white text-black text-xs font-bold tracking-widest uppercase"
              >
                CONTACT US
              </button>
            </div>
          )}
        </header>

        {/* Hero Body Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20 pb-16 flex-1 flex flex-col justify-between">
          
          {/* Upper Hero Grid: Main Title & Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 lg:pt-14">
            
            {/* Left Headline: "SPACES THAT SPEAK TO YOUR HEART" */}
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-300 font-semibold block">
                ATELIER OF INTERIOR ARCHITECTURE
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.92] drop-shadow-md">
                SPACES<br />
                THAT SPEAK<br />
                TO YOUR HEART
              </h1>
            </div>

            {/* Right Subtext Statement */}
            <div className="lg:col-span-4 lg:pt-8 flex flex-col items-start lg:items-end text-left lg:text-right space-y-4">
              <p className="text-white/85 text-sm md:text-base font-light tracking-wide max-w-sm leading-relaxed drop-shadow">
                We design interiors people fall in love with — warm, considered, and made to be lived in.
              </p>
              <span className="hidden lg:inline-block text-[10px] tracking-[0.25em] uppercase text-neutral-400 border-t border-white/20 pt-3">
                ZURICH · MILAN · LONDON · NYC
              </span>
            </div>
          </div>

          {/* Lower Hero Grid: Scroll Trigger & Consultation Action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-20 border-t border-white/10">
            
            {/* Scroll Indicator */}
            <button 
              onClick={() => scrollToSection('about')}
              className="group flex items-center gap-2.5 text-white/80 hover:text-white text-xs font-medium tracking-wider transition-colors"
            >
              <span className="uppercase text-[11px] tracking-widest">Scroll to explore</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </button>

            {/* Consultation Action Button */}
            <button 
              onClick={onOpenConsultation}
              className="px-8 py-4 border border-white text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-xl backdrop-blur-sm"
            >
              GET A CONSULTATION
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          2. ABOUT SECTION (Refurbished with cleaner spacing, hairlines, and stats)
          ========================================================================= */}
      <section id="about" className="relative w-full bg-[#F6F4EE] pt-24 pb-32 border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Section Header with Ultra-Fine Hairline Divider */}
          <div className="space-y-4">
            <div className="flex items-end justify-between">
              <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-[#181614]">
                ABOUT
              </h2>
              <span className="text-[11px] font-mono tracking-widest text-[#78736B] uppercase hidden sm:block">
                01 / MANIFESTO & NUMBERS
              </span>
            </div>
            <div className="w-full h-[1px] bg-[#181614]/15" />
          </div>

          {/* Manifesto Statement (Uppercase editorial style matching image with refined kerning) */}
          <div className="py-14 max-w-5xl">
            <p className="text-lg md:text-2xl lg:text-[28px] font-medium uppercase tracking-tight text-[#181614] leading-[1.38]">
              WE WORK CLOSELY WITH OUR CLIENTS TO CREATE INTERIORS THAT ARE{' '}
              <span className="font-extrabold text-black underline decoration-[#C2A684]/40 underline-offset-8">
                NOT ONLY VISUALLY STUNNING BUT ALSO DEEPLY FUNCTIONAL.
              </span>{' '}
              FROM CONCEPT TO COMPLETION, WE GUIDE YOU THROUGH EVERY STEP, ENSURING AN ENJOYABLE JOURNEY.
            </p>
          </div>

          {/* Asymmetrical Stat Boxes Grid (Exact layout from the image with refined borders & hover) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[#E2DDD3] shadow-sm">
            
            {/* Box 1: 6+ Years */}
            <div className="border-r border-b border-[#E2DDD3] p-10 flex flex-col justify-between min-h-[280px] bg-white/60 hover:bg-white transition-all group">
              <p className="text-xs font-semibold text-[#78736B] max-w-[190px] leading-relaxed uppercase tracking-wider">
                Years of expertise in interior design and space planning
              </p>
              <div className="flex items-baseline justify-between pt-8">
                <span className="text-6xl md:text-7xl font-bold font-display text-[#181614] tracking-tight tabular-nums">
                  6
                </span>
                <span className="text-3xl font-light text-[#78736B] group-hover:text-black transition-colors">
                  +
                </span>
              </div>
            </div>

            {/* Box 2: 82+ Projects (Offset down/staggered feel from the image) */}
            <div className="border-r border-b border-[#E2DDD3] p-10 flex flex-col justify-between min-h-[280px] bg-[#EFECE4] hover:bg-white transition-all group lg:translate-y-8 lg:border-t lg:border-l shadow-sm">
              <p className="text-xs font-semibold text-[#78736B] max-w-[200px] leading-relaxed uppercase tracking-wider">
                Completed projects across residential and commercial spaces
              </p>
              <div className="flex items-baseline justify-between pt-8">
                <span className="text-6xl md:text-7xl font-bold font-display text-[#181614] tracking-tight tabular-nums">
                  82
                </span>
                <span className="text-3xl font-light text-[#78736B] group-hover:text-black transition-colors">
                  +
                </span>
              </div>
            </div>

            {/* Box 3: 44+ Professionals */}
            <div className="border-r border-b border-[#E2DDD3] p-10 flex flex-col justify-between min-h-[280px] bg-white/60 hover:bg-white transition-all group">
              <p className="text-xs font-semibold text-[#78736B] max-w-[190px] leading-relaxed uppercase tracking-wider">
                Professionals delivering thoughtful and functional interiors
              </p>
              <div className="flex items-baseline justify-between pt-8">
                <span className="text-6xl md:text-7xl font-bold font-display text-[#181614] tracking-tight tabular-nums">
                  44
                </span>
                <span className="text-3xl font-light text-[#78736B] group-hover:text-black transition-colors">
                  +
                </span>
              </div>
            </div>

            {/* Box 4: Dark Espresso Action Card with Living Room Photo */}
            <div className="border-r border-b border-[#E2DDD3] bg-[#1A1613] text-[#F6F4EE] flex flex-col justify-between overflow-hidden shadow-xl">
              <div className="p-8 space-y-4">
                <p className="text-xs font-light text-neutral-300 leading-relaxed">
                  Receive expert guidance and discover the best interior solution tailored to your space, goals, and lifestyle.
                </p>
                <button 
                  onClick={onOpenConsultation}
                  className="group flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-white hover:text-amber-200 transition-colors"
                >
                  <span>CONTACT US</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>

              {/* Photo Thumbnail under the text */}
              <div className="h-32 w-full overflow-hidden border-t border-white/10">
                <img 
                  src={aboutCardImage} 
                  alt="Moody warm interior" 
                  className="w-full h-full object-cover filter brightness-[0.8] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          NEW SECTION: TACTILE MATERIALITY & PALETTE (Elevated Architectural Touch)
          ========================================================================= */}
      <section id="materials" className="relative w-full bg-[#EFECE4] py-24 border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#78736B]">
                TACTILE CURATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight uppercase text-[#181614] mt-1">
                MATERIALITY & SPECIFICATIONS
              </h2>
            </div>
            <p className="text-xs text-[#78736B] max-w-sm leading-relaxed">
              Every timber grain, patinated metal reveal, and honed marble slab is hand-selected block-by-block.
            </p>
          </div>
          <div className="w-full h-[1px] bg-[#181614]/15 mb-12" />

          {/* Interactive Material Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((mat, i) => {
              const isSelected = activeMaterial === i;
              return (
                <div
                  key={mat.code}
                  onClick={() => setActiveMaterial(i)}
                  className={`p-6 rounded-none border transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-white border-[#181614] shadow-md -translate-y-1' 
                      : 'bg-white/40 border-[#E2DDD3] hover:bg-white hover:border-[#78736B]'
                  }`}
                >
                  <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD3]">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#78736B]">
                      {mat.code}
                    </span>
                    <span 
                      className="w-4 h-4 rounded-full border border-black/20 shadow-inner"
                      style={{ backgroundColor: mat.swatch }}
                    />
                  </div>

                  <h3 className="text-base font-bold font-display uppercase tracking-tight text-[#181614] mt-4">
                    {mat.name}
                  </h3>
                  <span className="text-[11px] font-medium text-amber-900 block mt-1">
                    {mat.tone}
                  </span>
                  <p className="text-xs text-[#78736B] leading-relaxed mt-3">
                    {mat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          3. PROJECTS SECTION (Faithfully matching the mockup with refined layout)
          ========================================================================= */}
      <section id="projects" className="relative w-full bg-[#F6F4EE] py-28 border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Section Header with Category Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#78736B]">
                PORTFOLIO ARCHIVE
              </span>
              <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-[#181614] mt-1">
                PROJECTS
              </h2>
            </div>

            {/* Filter Pills with Refined Architectural Styling */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-wider uppercase">
              {['ALL', 'RESIDENTIAL', 'PENTHOUSE', 'HOSPITALITY', 'COMMERCIAL'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 transition-all rounded-none ${
                    activeCategory === cat 
                      ? 'bg-[#181614] text-[#F6F4EE] shadow-sm' 
                      : 'bg-white/60 text-[#78736B] hover:text-[#181614] hover:bg-white border border-[#E2DDD3]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#181614]/15 mb-14" />

          {/* Primary Editorial Gallery Grid (Exact layout from the image) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Card 1: WARM OAK 02 (Left column) */}
            {filteredProjects[0] && (
              <div className="md:col-span-4 space-y-4 group">
                <div 
                  onClick={() => onOpenProject(filteredProjects[0])}
                  className="aspect-[4/5] rounded-none overflow-hidden bg-neutral-200 cursor-pointer relative shadow-sm border border-[#E2DDD3]"
                >
                  <img 
                    src={filteredProjects[0].image} 
                    alt={filteredProjects[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/70 backdrop-blur-md text-white text-[9px] font-mono tracking-widest uppercase">
                    NO. 01 / {filteredProjects[0].location}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                </div>
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#181614]">
                    {filteredProjects[0].title}
                  </h3>
                  <p className="text-xs text-[#78736B] leading-relaxed line-clamp-2">
                    {filteredProjects[0].subtitle}
                  </p>
                  <button 
                    onClick={() => onOpenProject(filteredProjects[0])}
                    className="pt-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#181614] flex items-center gap-2 hover:text-[#78736B] transition-colors"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* Card 2: GLASS & METAL 19 (Center tall centerpiece) */}
            {filteredProjects[1] && (
              <div className="md:col-span-5 space-y-4 group md:-mt-6">
                <div 
                  onClick={() => onOpenProject(filteredProjects[1])}
                  className="aspect-[3/4] rounded-none overflow-hidden bg-neutral-200 cursor-pointer relative shadow-lg border border-[#E2DDD3]"
                >
                  <img 
                    src={filteredProjects[1].image} 
                    alt={filteredProjects[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>FEATURED COMMISSION</span>
                  </div>
                </div>
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#181614]">
                    {filteredProjects[1].title}
                  </h3>
                  <p className="text-xs text-[#78736B] leading-relaxed line-clamp-2">
                    {filteredProjects[1].subtitle}
                  </p>
                  <button 
                    onClick={() => onOpenProject(filteredProjects[1])}
                    className="pt-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#181614] flex items-center gap-2 hover:text-[#78736B] transition-colors"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* Card 3: BROWN TRUFFLE (Right column) */}
            {filteredProjects[2] && (
              <div className="md:col-span-3 space-y-4 group">
                <div 
                  onClick={() => onOpenProject(filteredProjects[2])}
                  className="aspect-[4/5] rounded-none overflow-hidden bg-neutral-200 cursor-pointer relative shadow-sm border border-[#E2DDD3]"
                >
                  <img 
                    src={filteredProjects[2].image} 
                    alt={filteredProjects[2].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/70 backdrop-blur-md text-white text-[9px] font-mono tracking-widest uppercase">
                    NO. 03 / {filteredProjects[2].location}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                </div>
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#181614]">
                    {filteredProjects[2].title}
                  </h3>
                  <p className="text-xs text-[#78736B] leading-relaxed line-clamp-2">
                    {filteredProjects[2].subtitle}
                  </p>
                  <button 
                    onClick={() => onOpenProject(filteredProjects[2])}
                    className="pt-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#181614] flex items-center gap-2 hover:text-[#78736B] transition-colors"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Secondary Projects Row */}
          {filteredProjects.length > 3 && (
            <div className="mt-16 pt-12 border-t border-[#E2DDD3] grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProjects.slice(3, 6).map((project) => (
                <div key={project.id} className="space-y-3 group">
                  <div 
                    onClick={() => onOpenProject(project)}
                    className="aspect-[16/10] overflow-hidden bg-neutral-200 cursor-pointer relative border border-[#E2DDD3]"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <h4 className="text-base font-bold font-display uppercase tracking-tight text-[#181614]">
                      {project.title}
                    </h4>
                    <span className="text-[10px] text-[#78736B] uppercase font-mono font-semibold">
                      {project.location}
                    </span>
                  </div>
                  <p className="text-xs text-[#78736B] line-clamp-2">{project.subtitle}</p>
                  <button 
                    onClick={() => onOpenProject(project)}
                    className="text-[10px] font-bold tracking-widest uppercase text-[#181614] flex items-center gap-1 hover:text-[#78736B]"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Commission Button */}
          <div className="mt-16 text-center">
            <button 
              onClick={onOpenConsultation}
              className="px-10 py-4 border border-[#181614] text-[#181614] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#181614] hover:text-[#F6F4EE] transition-all shadow-sm"
            >
              COMMISSION A BESPOKE PROJECT
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          INTERACTIVE SPATIAL STUDY: BEFORE / AFTER TRANSFORMATION
          ========================================================================= */}
      <section id="transformation" className="py-28 bg-[#EFECE4] border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DDD3] mb-12">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#78736B]">
                ARCHITECTURAL TRANSFORMATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase text-[#181614] mt-1">
                FROM RAW VOLUME TO LIVING SANCTUARY
              </h2>
            </div>
            <p className="text-xs text-[#78736B] tracking-wider max-w-sm">
              Drag the interactive slider below to inspect how custom architectural millwork completely redefines light and volume.
            </p>
          </div>

          {/* Interactive Comparison Slider */}
          <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-none overflow-hidden select-none border border-[#E2DDD3] shadow-xl">
            {/* After Image (Full width background) */}
            <img 
              src={afterImage} 
              alt="After Transformation" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/75 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase">
              COMPLETED ARCHITECTURAL SPECIFICATION
            </div>

            {/* Before Image (Clipped by slider position) */}
            <div 
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={beforeImage} 
                alt="Before Transformation" 
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100vw' }}
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/75 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase">
                RAW SPACE / INITIAL DISCOVERY
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div 
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-[#181614] text-white flex items-center justify-center shadow-xl border-2 border-white">
                <Sliders className="w-3.5 h-3.5 rotate-90" />
              </div>
            </div>

            {/* Invisible Input Range Slider Overlay */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#78736B] uppercase">
            <span>← Raw Unfinished Volume</span>
            <span>Drag slider to compare</span>
            <span>Vivida Bespoke Execution →</span>
          </div>

        </div>
      </section>


      {/* =========================================================================
          4. PROCESS SECTION (Refurbished 4-stage architectural methodology)
          ========================================================================= */}
      <section id="process" className="relative w-full bg-[#F6F4EE] py-28 border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#78736B]">
                  METHODOLOGY
                </span>
                <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-[#181614] mt-1">
                  PROCESS
                </h2>
              </div>
              <p className="text-xs text-[#78736B] font-semibold uppercase tracking-widest max-w-xs">
                From Raw Concrete & Sunlight to Finished Living Art
              </p>
            </div>
            <div className="w-full h-[1px] bg-[#181614]/15" />
          </div>

          {/* 4-Step Linear Architectural Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div 
                key={step.number}
                className="bg-white/70 p-8 border border-[#E2DDD3] flex flex-col justify-between hover:border-[#181614] hover:bg-white transition-all space-y-8 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#E2DDD3]">
                    <span className="text-3xl font-extrabold font-display text-[#181614]">
                      {step.number}
                    </span>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#78736B]">
                      Phase 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-display uppercase tracking-tight text-[#181614] mt-5">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-900 mt-1">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-[#78736B] leading-relaxed mt-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DDD3] flex items-center justify-between text-[11px] font-bold text-[#181614]">
                  <span>Deliverable Ready</span>
                  <Check className="w-4 h-4 text-emerald-700" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          5. FAQ SECTION (Refurbished clean accordion)
          ========================================================================= */}
      <section id="faq" className="relative w-full bg-[#EFECE4] py-28 border-b border-[#E2DDD3]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#78736B]">
              DISCOVERY & POLICIES
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-[#181614]">
              FREQUENTLY ASKED
            </h2>
            <div className="w-full h-[1px] bg-[#181614]/15" />
          </div>

          <div className="mt-12 divide-y divide-[#E2DDD3] border-y border-[#E2DDD3]">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-base md:text-lg font-bold font-display uppercase tracking-tight text-[#181614] group-hover:text-[#78736B] transition-colors pr-6">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[#E2DDD3] flex items-center justify-center shrink-0 group-hover:border-[#181614] transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#181614]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#181614]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pr-12 animate-in fade-in slide-in-from-top-1">
                      <p className="text-sm text-[#78736B] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          6. EDITORIAL CALL-TO-ACTION & CONSULTATION BANNER
          ========================================================================= */}
      <section className="relative w-full bg-[#181614] text-[#F6F4EE] py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#D5C4A8] uppercase">
                Private Commissions & Partnerships
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight leading-[1.02]">
                Ready to elevate your residential space?
              </h2>
              <p className="text-neutral-400 text-sm md:text-base max-w-xl leading-relaxed">
                We accept a limited number of residential commissions each quarter to safeguard absolute precision and undivided architectural attention.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button 
                onClick={onOpenConsultation}
                className="w-full py-4 px-8 bg-[#F6F4EE] text-[#181614] text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-all shadow-xl text-center"
              >
                REQUEST A CONSULTATION
              </button>
              <a 
                href="mailto:studio@vivida.design"
                className="w-full py-4 px-8 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all text-center"
              >
                DIRECT STUDIO INQUIRY
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          7. FOOTER SECTION
          ========================================================================= */}
      <footer className="w-full bg-[#12100E] text-white pt-16 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
            {/* Col 1: Brand & Bio */}
            <div className="md:col-span-5 space-y-4">
              <span className="text-3xl font-extrabold font-sans lowercase tracking-tight">vivida</span>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
                International interior architecture & bespoke joinery atelier crafting refined environments across Zurich, Milan, London, and New York.
              </p>
            </div>

            {/* Col 2: Studio Locations */}
            <div className="md:col-span-3 space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#D5C4A8]">Ateliers</h4>
              <ul className="text-xs text-neutral-300 space-y-1.5 font-medium">
                <li>Bahnhofstrasse 48, 8001 Zurich</li>
                <li>Via Montenapoleone 14, 20121 Milan</li>
                <li>Mayfair, London W1K</li>
                <li>Tribeca, New York NY 10013</li>
              </ul>
            </div>

            {/* Col 3: Navigation */}
            <div className="md:col-span-2 space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#D5C4A8]">Directory</h4>
              <ul className="text-xs text-neutral-300 space-y-1.5">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white">About</button></li>
                <li><button onClick={() => scrollToSection('materials')} className="hover:text-white">Materiality</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-white">Projects</button></li>
                <li><button onClick={() => scrollToSection('transformation')} className="hover:text-white">Spatial Study</button></li>
                <li><button onClick={() => scrollToSection('process')} className="hover:text-white">Process</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-white">FAQ</button></li>
              </ul>
            </div>

            {/* Col 4: Social */}
            <div className="md:col-span-2 space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#D5C4A8]">Follow</h4>
              <ul className="text-xs text-neutral-300 space-y-1.5">
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Pinterest</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Architectural Digest</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
            <p>© {new Date().getFullYear()} Vivida Interior Architecture Atelier. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-400">Terms of Commission</a>
              <a href="#" className="hover:text-neutral-400">Imprint</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
