import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Moon, 
  Sun, 
  Layers, 
  ChevronRight, 
  X, 
  Menu,
  ShieldCheck,
  Check,
  MapPin,
  Calendar,
  Ruler
} from 'lucide-react';

export default function AtelierNoirDesign({ onOpenConsultation, onOpenProject }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightingMood, setLightingMood] = useState('midnight'); // 'midnight' | 'ambient'
  const [activeMaterial, setActiveMaterial] = useState(0);
  const [activeTab, setActiveTab] = useState('ALL');

  // Curated dark luxury architectural imagery
  const heroImages = {
    midnight: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85",
    ambient: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85"
  };

  const residences = [
    {
      id: 'residence-09-mayfair',
      number: '01',
      title: 'THE MAYFAIR PENTHOUSE',
      location: 'Mayfair, London',
      type: 'Duplex Penthouse Residence',
      area: '4,850 sq ft',
      year: '2025',
      palette: 'Smoked Bog Oak · Brushed Brass · Nero Marquina',
      heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
      description: 'A monolithic dark sanctuary suspended above London. Features a 12-meter continuous smoked oak storage spine, patinated unlacquered brass reveal transitions, and custom 2200K cove illumination.',
      details: [
        'Quarter-sawn European smoked bog oak wall architecture',
        'Bookmatched Nero Marquina kitchen island with brass shadowline',
        'Concealed pivot doors with magnetic touch-latch technology',
        'Private wine cellar framed in fluted dark bronze glass'
      ]
    },
    {
      id: 'villa-obsidiana',
      number: '02',
      title: 'VILLA OBSIDIANA',
      location: 'Lake Como, Italy',
      type: 'Waterfront Cliff Residence',
      area: '6,400 sq ft',
      year: '2024',
      palette: 'Honed Basalt · Dark Bronze · Calacatta Viola',
      heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
      description: 'Sculpted directly into the rock face of Lake Como. An interplay of dark water reflections, raw honed basalt floors, and floor-to-ceiling minimal frame motorized glass.',
      details: [
        'Continuous seamless honed basalt slabs through terrace & salon',
        'Sunken conversation pit with tactile charcoal bouclé upholstery',
        'Monolithic Calacatta Viola bathroom basins carved from solid blocks',
        'Custom acoustic ceiling baffles finished in Belgian graphite linen'
      ]
    },
    {
      id: 'tribeca-monolith',
      number: '03',
      title: 'THE TRIBECA LOFT',
      location: 'Tribeca, New York',
      type: 'Historic Industrial Conversion',
      area: '5,100 sq ft',
      year: '2025',
      palette: 'Blackened Steel · Espresso Leather · Travertine',
      heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
      description: 'Transforming a 1910 cast-iron warehouse into an ultra-restrained private gallery residence. Raw brick enveloped in dark plaster, blackened steel screens, and vintage collector furnishings.',
      details: [
        'Custom hot-rolled blackened steel pivot screens and room dividers',
        'Cast bronze door levers cast by third-generation Tuscan foundry',
        'Hand-finished Italian espresso saddle leather wall panels',
        'Museum-quality variable focal spot lighting system'
      ]
    },
    {
      id: 'zurich-sanctuary',
      number: '04',
      title: 'ZURICH PRIVATE SALON',
      location: 'Zurichberg, Switzerland',
      type: 'Alpine Hillside Residence',
      area: '3,900 sq ft',
      year: '2024',
      palette: 'Dark Walnut · Charcoal Plaster · Polished Titanium',
      heroImage: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=80',
      description: 'A cozy, ultra-luxurious retreat overlooking the lake. Custom deep acoustic walnut joinery, integrated fireplace ribbon, and hidden library bar.',
      details: [
        'Solid walnut ribbing with integrated micro-perforated sound absorption',
        'Ribbon fireplace surrounded by hand-hammered titanium granite',
        'Motorized pocketing bookcase revealing a bespoke cocktail laboratory',
        'Heated dark basalt master bathroom with steam shower chamber'
      ]
    }
  ];

  const materials = [
    {
      name: 'Smoked European Bog Oak',
      origin: 'Bavaria & Black Forest, Germany',
      texture: 'Deep charcoal-brown with visible open grain and matte oil finish',
      description: 'Submerged and fumed using traditional ammonia oxidation to achieve a deep, natural espresso color that penetrates the full depth of the timber.',
      image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Honed Nero Marquina Marble',
      origin: 'Markina, Basque Country, Spain',
      texture: 'Matte velvet black with dramatic, fine white calcite veining',
      description: 'Selected block-by-block at the quarry and honed to a tactile matte leather finish without artificial gloss, providing timeless acoustic and visual depth.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Hand-Patinated Champagne Brass',
      origin: 'Florence, Italy',
      texture: 'Soft brushed warm gold with subtle organic micro-patina',
      description: 'Hand-rubbed with sulfur solutions and finished with natural beeswax. Will gracefully evolve and deepen over decades of human touch.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Vegetable-Tanned Saddle Leather',
      origin: 'Scandicci, Tuscany',
      texture: 'Full-grain espresso leather with hand-waxed saddlery stitching',
      description: 'Crafted by master saddlers into custom architectural wall inserts, drawer linings, and tactile door handle wraps.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const pillars = [
    {
      number: '01',
      title: 'THE POETRY OF CHIAROSCURO',
      subtitle: 'Shadow as a Sculptural Material',
      text: 'Rather than flooding spaces with uniform illumination, we compose rooms through deliberate shadow and localized warm pools of light (2200K - 2700K), heightening privacy and intimacy.'
    },
    {
      number: '02',
      title: 'MONOLITHIC SUBTRACTION',
      subtitle: 'Seamless Architectural Permanence',
      text: 'Every joinery element is designed as architectural mass rather than furniture. Baseboards are recessed into flush shadowlines; hardware is concealed into magnetic stone reveals.'
    },
    {
      number: '03',
      title: 'TACTILE SENSORY RICHNESS',
      subtitle: 'The Luxury of Unlacquered Materials',
      text: 'We reject synthetic imitations. Our environments celebrate raw stone that holds room temperature, hand-scraped oak that warms under bare feet, and patinated bronze.'
    }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E5E5E8] font-sans selection:bg-[#C8A97E] selection:text-black">
      
      {/* =========================================================================
          TOP PRE-HEADER / GLOBAL ATELIER TICKER
          ========================================================================= */}
      <div className="w-full bg-[#070708] border-b border-white/5 py-2 px-6 text-[10px] tracking-[0.25em] uppercase text-neutral-400 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] animate-pulse" />
          <span className="font-semibold text-neutral-300">ATELIER NOIR · ARCHITECTURAL RESIDENCES</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>LONDON</span>
          <span>·</span>
          <span>MILANO</span>
          <span>·</span>
          <span>PARIS</span>
          <span>·</span>
          <span>NEW YORK</span>
          <span>·</span>
          <span className="text-[#C8A97E]">AD100 PRIVATE COMMISSIONS</span>
        </div>
      </div>

      {/* =========================================================================
          NAVIGATION BAR
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#0A0A0C]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          
          {/* Logo with High-End Serif / Fashion Editorial Feel */}
          <div className="space-y-0.5">
            <a href="#hero" className="text-xl sm:text-2xl font-serif tracking-[0.2em] uppercase text-white font-medium flex items-center gap-2">
              <span>ATELIER NOIR</span>
            </a>
            <span className="block text-[9px] tracking-[0.3em] uppercase text-[#C8A97E] font-medium">
              HAUTE INTERIOR ARCHITECTURE
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 text-[11px] font-semibold tracking-[0.25em] uppercase text-neutral-400">
            <button onClick={() => scrollTo('philosophy')} className="hover:text-[#C8A97E] transition-colors">
              PHILOSOPHY
            </button>
            <button onClick={() => scrollTo('residences')} className="hover:text-[#C8A97E] transition-colors">
              RESIDENCES
            </button>
            <button onClick={() => scrollTo('materials')} className="hover:text-[#C8A97E] transition-colors">
              MATERIALS
            </button>
            <button onClick={() => scrollTo('atelier')} className="hover:text-[#C8A97E] transition-colors">
              THE ATELIER
            </button>
          </nav>

          {/* Right Action: Commission CTA & Lighting Mood Switcher */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Interactive Ambient / Midnight Lighting Mode Toggle */}
            <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10 text-xs">
              <button
                onClick={() => setLightingMood('midnight')}
                className={`px-3 py-1 rounded-full text-[10px] tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                  lightingMood === 'midnight' 
                    ? 'bg-[#C8A97E] text-black font-bold shadow' 
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Midnight Mood (2200K Warm Ambient)"
              >
                <Moon className="w-3 h-3" />
                <span>Midnight</span>
              </button>
              <button
                onClick={() => setLightingMood('ambient')}
                className={`px-3 py-1 rounded-full text-[10px] tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                  lightingMood === 'ambient' 
                    ? 'bg-[#C8A97E] text-black font-bold shadow' 
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Twilight Mood (3000K Soft Gallery)"
              >
                <Sun className="w-3 h-3" />
                <span>Gallery</span>
              </button>
            </div>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 bg-gradient-to-r from-[#C8A97E] to-[#B39365] text-black text-[11px] font-bold tracking-[0.2em] uppercase rounded-none hover:brightness-110 transition-all shadow-lg hover:shadow-[#C8A97E]/20"
            >
              COMMISSION AN ATELIER
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F0F12] border-b border-white/10 px-6 py-6 space-y-4 text-center">
            <button onClick={() => scrollTo('philosophy')} className="block w-full py-2 text-xs font-bold tracking-widest uppercase text-neutral-300">
              PHILOSOPHY
            </button>
            <button onClick={() => scrollTo('residences')} className="block w-full py-2 text-xs font-bold tracking-widest uppercase text-neutral-300">
              RESIDENCES
            </button>
            <button onClick={() => scrollTo('materials')} className="block w-full py-2 text-xs font-bold tracking-widest uppercase text-neutral-300">
              MATERIALS
            </button>
            <button onClick={() => scrollTo('atelier')} className="block w-full py-2 text-xs font-bold tracking-widest uppercase text-neutral-300">
              THE ATELIER
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-[#C8A97E] text-black text-xs font-bold tracking-widest uppercase mt-4"
            >
              COMMISSION AN ATELIER
            </button>
          </div>
        )}
      </header>


      {/* =========================================================================
          HERO SECTION: CINEMATIC DARK LUXURY
          ========================================================================= */}
      <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0A0A0C]">
        
        {/* Atmospheric Hero Background Image with Smooth Lighting Mood Transitions */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImages[lightingMood]} 
            alt="Atelier Noir Architectural Space" 
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.12] transition-all duration-1000"
          />
          {/* Multi-layered cinematic vignette & dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-black/60" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20 lg:pt-28 pb-16 flex-1 flex flex-col justify-between">
          
          {/* Eyebrow & Headline */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-black/60 backdrop-blur-md border border-[#C8A97E]/30 text-[#C8A97E] text-[10px] font-bold tracking-[0.3em] uppercase">
              <Sparkles className="w-3 h-3 text-[#C8A97E]" />
              <span>PRIVATE ARCHITECTURAL COMMISSION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white uppercase leading-[0.95]">
              THE POETRY<br />
              <span className="italic font-light text-neutral-300">OF SHADOW</span><br />
              & STONE.
            </h1>

            <p className="text-sm md:text-lg text-neutral-300 max-w-xl font-light tracking-wide leading-relaxed pt-2">
              Curating private penthouses and cliffside estates defined by chiaroscuro lighting, monolithic Belgian stone, and quiet timeless grandeur.
            </p>

            {/* Interactive Hero Lighting Scene Switcher */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-mono">
                Lighting Scene:
              </span>
              <div className="inline-flex items-center bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20">
                <button
                  type="button"
                  onClick={() => setLightingMood('midnight')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5 ${
                    lightingMood === 'midnight'
                      ? 'bg-[#C8A97E] text-black shadow-lg scale-105'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Midnight 2200K</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLightingMood('ambient')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5 ${
                    lightingMood === 'ambient'
                      ? 'bg-[#C8A97E] text-black shadow-lg scale-105'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Gallery 3000K</span>
                </button>
              </div>
            </div>
          </div>

          {/* Lower Hero Controls & Metrics */}
          <div className="pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-white/10">
            
            {/* Left: Direct Inquire Actions */}
            <div className="md:col-span-5 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-[#C8A97E] hover:bg-[#D4AF37] text-black text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-xl flex items-center gap-2 group"
              >
                <span>COMMISSION THIS AESTHETIC</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('residences')}
                className="px-6 py-4 border border-white/20 hover:border-white text-white text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-white/5"
              >
                EXPLORE RESIDENCES
              </button>
            </div>

            {/* Right: Key Curatorial Metrics */}
            <div className="md:col-span-7 grid grid-cols-3 gap-6 text-left md:text-right">
              <div>
                <span className="block text-2xl lg:text-3xl font-serif text-[#C8A97E] font-medium">100%</span>
                <span className="text-[10px] tracking-widest uppercase text-neutral-400">Custom Joinery</span>
              </div>
              <div>
                <span className="block text-2xl lg:text-3xl font-serif text-[#C8A97E] font-medium">8 Max</span>
                <span className="text-[10px] tracking-widest uppercase text-neutral-400">Commissions / Year</span>
              </div>
              <div>
                <span className="block text-2xl lg:text-3xl font-serif text-[#C8A97E] font-medium">AD100</span>
                <span className="text-[10px] tracking-widest uppercase text-neutral-400">Global Atelier</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          PHILOSOPHY & 3 PILLARS SECTION
          ========================================================================= */}
      <section id="philosophy" className="py-28 bg-[#0F0F12] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Curatorial Manifesto Statement */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C8A97E]">
                ATELIER PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-white leading-tight">
                "TRUE LUXURY IS NOT OSTENTATION, BUT THE SILENT TENSION BETWEEN SHADOW AND RAW ELEMENTAL MASS."
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                Founded by bespoke interior architects in Milan and London, Atelier Noir rejects fleeting stylistic trends in favor of monolithic permanence. We treat architecture as a backdrop for human tranquility.
              </p>
            </div>

            {/* Right: 3 Core Aesthetic Tenets */}
            <div className="lg:col-span-7 space-y-6">
              {pillars.map((p) => (
                <div 
                  key={p.number} 
                  className="p-8 bg-[#15151A] border border-white/5 hover:border-[#C8A97E]/40 transition-all rounded-none group"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <span className="text-xs font-serif text-[#C8A97E] font-bold tracking-widest">
                      TENET {p.number}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                      {p.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-white tracking-wide mt-4 group-hover:text-[#C8A97E] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mt-2.5 font-light">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          FEATURED PRIVATE RESIDENCES PORTFOLIO
          ========================================================================= */}
      <section id="residences" className="py-28 bg-[#0A0A0C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C8A97E]">
                RECENT COMMISSIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white uppercase mt-2">
                CURATED RESIDENCES
              </h2>
            </div>
            <p className="text-xs text-neutral-400 tracking-wider max-w-sm font-light">
              Each commission is a unique composition, engineered down to bespoke door pulls and quarry-matched marble blocks.
            </p>
          </div>

          {/* Residence Cards - Asymmetrical Dark Luxury Layout */}
          <div className="mt-16 space-y-20">
            {residences.map((res, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={res.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group"
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div 
                      onClick={() => onOpenProject({
                        title: res.title,
                        subtitle: res.description,
                        category: res.type,
                        location: res.location,
                        area: res.area,
                        year: res.year,
                        image: res.heroImage,
                        materials: res.details,
                        scope: 'Complete Turnkey Haute Architecture'
                      })}
                      className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer shadow-2xl"
                    >
                      <img 
                        src={res.heroImage} 
                        alt={res.title}
                        className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 group-hover:brightness-95 transition-all duration-700" 
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/75 backdrop-blur-md border border-white/10 text-white text-[10px] font-serif tracking-widest uppercase">
                        {res.number} / {res.location}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <span className="text-[#C8A97E] text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
                          <span>INSPECT ARCHITECTURAL CASE STUDY</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Narrative Column */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C8A97E]">
                        {res.type}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight uppercase">
                        {res.title}
                      </h3>
                      <p className="text-xs text-neutral-400 font-mono tracking-wider pt-1">
                        {res.palette}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                      {res.description}
                    </p>

                    {/* Spec Pills */}
                    <div className="grid grid-cols-2 gap-3 py-2 border-y border-white/5 text-xs text-neutral-400">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider block text-neutral-400">Total Scale</span>
                        <span className="font-semibold text-white">{res.area}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider block text-neutral-400">Delivery</span>
                        <span className="font-semibold text-white">{res.year}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 text-xs text-neutral-300 font-light">
                      {res.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#C8A97E] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <button 
                        onClick={() => onOpenProject({
                          title: res.title,
                          subtitle: res.description,
                          category: res.type,
                          location: res.location,
                          area: res.area,
                          year: res.year,
                          image: res.heroImage,
                          materials: res.details,
                          scope: 'Complete Turnkey Haute Architecture'
                        })}
                        className="text-xs font-bold tracking-[0.2em] uppercase text-[#C8A97E] hover:text-white transition-colors flex items-center gap-2"
                      >
                        <span>VIEW COMPLETE SPECIFICATIONS</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          MATERIALS LABORATORY / TACTILE CURATION
          ========================================================================= */}
      <section id="materials" className="py-28 bg-[#0F0F12] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C8A97E]">
              AUTHENTICITY OF SUBSTANCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white uppercase">
              THE MATERIAL ARCHIVE
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              We work exclusively with uncompromised, living raw materials that age with grace and carry individual provenance.
            </p>
          </div>

          {/* Interactive Material Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#15151A] p-6 lg:p-10 border border-white/10">
            
            {/* Left: Material Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {materials.map((mat, i) => {
                const isSelected = activeMaterial === i;
                return (
                  <button
                    key={mat.name}
                    onClick={() => setActiveMaterial(i)}
                    className={`w-full text-left p-4 transition-all border ${
                      isSelected 
                        ? 'bg-[#1C1C24] border-[#C8A97E] text-white pl-6' 
                        : 'bg-black/30 border-white/5 text-neutral-400 hover:text-white hover:bg-black/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-serif tracking-wider font-semibold">
                        {mat.name}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#C8A97E] rotate-90 sm:rotate-0' : 'opacity-40'}`} />
                    </div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#C8A97E]/80 mt-1">
                      {mat.origin}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Material Detailed Macro View */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="aspect-square rounded-none overflow-hidden border border-white/10 relative shadow-2xl">
                <img 
                  src={materials[activeMaterial].image} 
                  alt={materials[activeMaterial].name} 
                  className="w-full h-full object-cover filter contrast-[1.1] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-md text-[9px] font-mono tracking-widest text-[#C8A97E] uppercase">
                  MACRO SAMPLE · 100% UNTREATED
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A97E] font-bold">
                    SPECIFICATION & TOUCH
                  </span>
                  <h3 className="text-xl font-serif text-white tracking-wide mt-1">
                    {materials[activeMaterial].name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 italic">
                    "{materials[activeMaterial].texture}"
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  {materials[activeMaterial].description}
                </p>
                <div className="pt-2">
                  <button 
                    onClick={onOpenConsultation}
                    className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C8A97E] hover:underline"
                  >
                    REQUEST A MATERIAL SWATCH BOX →
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          THE ATELIER PROCESS (DISCOVERY TO COMMISSION)
          ========================================================================= */}
      <section id="atelier" className="py-28 bg-[#0A0A0C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-16">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C8A97E]">
                HOW WE OPERATE
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white uppercase mt-2">
                THE COMMISSIONS JOURNEY
              </h2>
            </div>
            <p className="text-xs text-neutral-400 tracking-wider max-w-sm font-light">
              Limited to 8 global commissions per year to ensure partner-level execution on every square meter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                name: 'PRIVATE SALON DIALOGUE',
                sub: 'Lifestyle Audit & Site Geometry',
                desc: 'An intimate discussion over blueprints, natural sunlight trajectories, art collections, and acoustic lifestyle demands.'
              },
              {
                step: '02',
                name: 'BIM ARCHITECTURAL VOLUME',
                sub: 'Shadow Simulation & 3D Realism',
                desc: 'Every junction, recessed floor track, and lighting scene is engineered in 3D down to 0.5mm tolerances before quarry cutting.'
              },
              {
                step: '03',
                name: 'QUARRY & ATELIER FABRICATION',
                sub: 'Master Italian Joinery & Metal',
                desc: 'Direct stone inspection in Carrara and Verona; bespoke joinery engineered in our Northern Italian craft ateliers.'
              },
              {
                step: '04',
                name: 'WHITE-GLOVE HANDOVER',
                sub: 'Acoustic Tuning, Art & Living',
                desc: 'Complete turnkey delivery: custom linen, curated art pieces, tailored ambient scent, and architectural maintenance guide.'
              }
            ].map((s) => (
              <div 
                key={s.step} 
                className="p-8 bg-[#131317] border border-white/5 hover:border-[#C8A97E]/50 transition-colors flex flex-col justify-between space-y-8"
              >
                <div>
                  <span className="text-3xl font-serif font-light text-[#C8A97E] block pb-4 border-b border-white/10">
                    {s.step}
                  </span>
                  <h4 className="text-sm font-serif tracking-widest text-white uppercase mt-4">
                    {s.name}
                  </h4>
                  <p className="text-[11px] text-[#C8A97E]/90 mt-1 font-mono uppercase">
                    {s.sub}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed mt-4 font-light">
                    {s.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] tracking-wider uppercase text-neutral-400">
                  <span>Atelier Standard</span>
                  <ShieldCheck className="w-4 h-4 text-[#C8A97E]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          VIP COMMISSION INQUIRY BANNER
          ========================================================================= */}
      <section className="py-28 bg-gradient-to-b from-[#131318] to-[#0A0A0C] border-b border-white/10 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 space-y-6">
          <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A97E]">
            PRIVATE RESIDENTIAL COMMISSION
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif tracking-tight text-white uppercase leading-tight">
            COMMISSION YOUR PRIVATE RETREAT
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto font-light leading-relaxed">
            Our principal architects consult on prime residences worldwide. We invite prospective patrons to initiate a discreet dialogue.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-10 py-4 bg-[#C8A97E] hover:bg-[#D4AF37] text-black text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-2xl"
            >
              SCHEDULE PRIVATE CONSULTATION
            </button>
            <a
              href="mailto:curator@ateliernoir.design"
              className="px-8 py-4 border border-white/20 hover:border-white text-white text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-white/5"
            >
              DIRECT ATELIER DESK
            </a>
          </div>
        </div>
      </section>


      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className="py-16 bg-[#070709] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            <div className="md:col-span-5 space-y-3">
              <span className="text-2xl font-serif tracking-[0.2em] uppercase text-white">ATELIER NOIR</span>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-sm font-light">
                Haute interior architecture & monolithic joinery atelier for international private collectors and discerning patrons.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C8A97E]">Atelier Salons</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Via della Spiga 22, Milano<br />
                Berkeley Square, London W1<br />
                Place des Vosges, Paris 75004<br />
                Franklin Street, Tribeca, NYC
              </p>
            </div>

            <div className="md:col-span-4 space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C8A97E]">Discreet Inquiries</h4>
              <p className="text-xs text-neutral-400 font-light">
                private@ateliernoir.design · +44 20 7946 0982
              </p>
              <div className="pt-2 flex gap-4 text-xs text-neutral-400">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Architectural Digest</a>
                <a href="#" className="hover:text-white transition-colors">Private Press</a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-neutral-400 tracking-wider uppercase">
            <p>© {new Date().getFullYear()} ATELIER NOIR ARCHITECTURAL ATELIER. ALL RIGHTS RESERVED.</p>
            <p>DESIGNED FOR PRIVATE CLIENT PRESENTATION</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
