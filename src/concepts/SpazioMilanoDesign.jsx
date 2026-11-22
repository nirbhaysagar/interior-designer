import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Layers, 
  Check, 
  Menu, 
  X,
  MapPin,
  Calendar,
  Ruler,
  Globe,
  Sliders
} from 'lucide-react';

export default function SpazioMilanoDesign({ onOpenConsultation, onOpenProject }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN'); // 'EN' | 'IT'
  const [activeMaterial, setActiveMaterial] = useState(0);
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Curated high-res Italian architectural & palazzo interior imagery
  const heroImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85";
  const palazzoBrera = "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80";
  const villaBellagio = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80";
  const tribecaItalian = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80";
  const atticoMilano = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80";

  const materials = [
    {
      code: '01',
      name: 'Ceppo di Gré',
      origin: 'Gré, Lake Iseo, Lombardy',
      desc: 'The iconic sedimentary stone of historic Milanese palazzos. Celebrated by Piero Portaluppi and Gio Ponti for its natural aggregate texture and monumental quiet.',
      swatch: '#8C8C88',
      image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80'
    },
    {
      code: '02',
      name: 'Noce Canaletto (Italian Walnut)',
      origin: 'Brianza Craft Ateliers, Italy',
      desc: 'Selected for its rich chocolate grain and deep acoustic warmth. Finished with artisanal cold-pressed natural oils to honor the tree’s living grain.',
      swatch: '#4A3525',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    },
    {
      code: '03',
      name: 'Travertino Romano Ascolano',
      origin: 'Tivoli & Ascoli Piceno, Italy',
      desc: 'Cut with the vein from ancient Roman quarries. Honed to a velvet matte touch without synthetic resin fillers to preserve timeless porosity.',
      swatch: '#D8D0C5',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    },
    {
      code: '04',
      name: 'Ottone Brunito a Mano (Burnished Brass)',
      origin: 'Florence Artisans, Tuscany',
      desc: 'Custom-patinated architectural profiles and shadowline trims hand-rubbed with natural liver of sulfur. Ages gracefully alongside human touch.',
      swatch: '#A88B58',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const projects = [
    {
      id: 'palazzo-brera',
      num: 'PROGETTO I',
      title: 'PALAZZO BRERA',
      location: 'Brera, Milano',
      category: 'RESIDENZE NOBILI',
      scale: '450 m² (4,840 sq ft)',
      year: '2025',
      image: palazzoBrera,
      subtitle: 'Restoration of an 18th-century noble piano nobile with monolithic Ceppo di Gré blocks and custom bronze boiserie.',
      materials: ['Original restored stucco cornices', 'Honed Ceppo di Gré stone island', 'Chevron Italian walnut parquet', 'Custom Flos x Bellini lighting']
    },
    {
      id: 'villa-bellagio',
      num: 'PROGETTO II',
      title: 'VILLA BELLAGIO',
      location: 'Lake Como, Italy',
      category: 'VILLAS',
      scale: '680 m² (7,320 sq ft)',
      year: '2024',
      image: villaBellagio,
      subtitle: 'Cliffside waterfront salon with 14-meter frameless glass sliding into the rock, overlooking the tranquil waters of Como.',
      materials: ['Roman travertine terraces', 'Bleached chestnut joinery', 'Hand-loomed Bellagio silks', 'Monolithic outdoor fire table']
    },
    {
      id: 'tribeca-loft',
      num: 'PROGETTO III',
      title: 'THE TRIBECA PALAZZO',
      location: 'Franklin Street, New York',
      category: 'TRANSATLANTIC',
      scale: '520 m² (5,600 sq ft)',
      year: '2025',
      image: tribecaItalian,
      subtitle: 'An American cast-iron industrial volume transformed with Italian architectural proportion, Brianza millwork, and Venetian plaster.',
      materials: ['Tuscan calacatta viola stone', 'Blackened patinated steel', 'Italian full-grain saddle leather', 'Acoustic micro-slat ceilings']
    },
    {
      id: 'attico-quadrilatero',
      num: 'PROGETTO IV',
      title: 'ATTICO QUADRILATERO',
      location: 'Via Montenapoleone, Milano',
      category: 'RESIDENZE NOBILI',
      scale: '390 m² (4,200 sq ft)',
      year: '2024',
      image: atticoMilano,
      subtitle: 'Duplex penthouse suspended above Milan’s fashion district, featuring private rooftop solarium and custom Poliform joinery.',
      materials: ['Noce Canaletto ribbing', 'Smoked bronze glass partitions', 'Nero Marquina fireplace hearth', 'Integrated Boffi kitchen architecture']
    }
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const copy = {
    EN: {
      tag: 'MILANESE ARCHITECTURAL ATELIER · EST. 1988',
      heroTitle: "L'ARTE DELL'ABITARE.",
      heroSub: "Where Renaissance spatial proportion meets radical Milanese modernism. We craft private palazzos and penthouses that transcend generations.",
      consultBtn: 'COMMISSION AN ARCHITECTURE',
      viewWorks: 'EXPLORE OPERE & PROJECTS',
      manifestoTitle: 'THE MILANESE RIGOR',
      manifestoText: 'Italian design is not merely decoration; it is an uncompromising pursuit of spatial harmony, raw substance, and the quiet authority of noble materials.',
      materialsTitle: 'MATERIA & SOSTANZA',
      materialsSubtitle: 'Direct quarry selection in Lombardy, Tuscany, and Veneto',
      processTitle: 'IL METODO ITALIANO',
      processSub: 'From raw blueprint sketch in Brera to white-glove handover'
    },
    IT: {
      tag: 'ATELIER D’ARCHITETTURA MILANESE · FONDATO NEL 1988',
      heroTitle: "L'ARTE DELL'ABITARE.",
      heroSub: "Dove la proporzione rinascimentale incontra il rigore del modernismo milanese. Realizziamo residenze e palazzi privati senza tempo.",
      consultBtn: 'COMMISSIONA UN PROGETTO',
      viewWorks: 'ESPLORA LE OPERE',
      manifestoTitle: 'IL RIGORE MILANESE',
      manifestoText: 'Il design italiano non è semplice decorazione; è la ricerca incessante dell’armonia spaziale, della materia pura e dell’autorità dei materiali nobili.',
      materialsTitle: 'MATERIA & SOSTANZA',
      materialsSubtitle: 'Selezione diretta nelle cave di Lombardia, Toscana e Veneto',
      processTitle: 'IL METODO ITALIANO',
      processSub: 'Dal disegno iniziale a Brera fino alla consegna chiavi in mano'
    }
  }[language];

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1B1917] font-sans selection:bg-[#B38E5B] selection:text-white antialiased">
      
      {/* =========================================================================
          1. MILANESE TOP PRE-HEADER
          ========================================================================= */}
      <div className="w-full bg-[#141210] border-b border-white/10 py-2 px-6 lg:px-12 text-[10px] tracking-[0.25em] uppercase text-neutral-400 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B38E5B] animate-pulse" />
          <span className="font-semibold text-neutral-200">SPAZIO MILANO · ARCHITETTURA D’INTERNI</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4 text-[9px] font-mono text-neutral-400">
            <span>VIA MONTE DI PIETÀ 12, MILANO</span>
            <span>·</span>
            <span>MADISON AVENUE, NYC</span>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded text-[10px] font-bold">
            <button
              onClick={() => setLanguage('EN')}
              className={`transition-colors ${language === 'EN' ? 'text-[#B38E5B]' : 'text-neutral-400 hover:text-white'}`}
            >
              EN
            </button>
            <span className="text-neutral-500">/</span>
            <button
              onClick={() => setLanguage('IT')}
              className={`transition-colors ${language === 'IT' ? 'text-[#B38E5B]' : 'text-neutral-400 hover:text-white'}`}
            >
              IT
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. ELEGANT ITALIAN HEADER
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#F4F1EA]/90 backdrop-blur-md border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          
          {/* Logo with Italian Bodoni / Grotesque balance */}
          <div className="space-y-0.5">
            <a href="#hero" className="text-2xl sm:text-3xl font-serif tracking-tight uppercase text-[#1B1917] font-bold">
              SPAZIO MILANO
            </a>
            <span className="block text-[9px] tracking-[0.3em] uppercase text-[#8C7A6B] font-mono">
              STUDIO BELLINI & ASSOCIATI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9 text-[11px] font-bold tracking-[0.2em] uppercase text-[#6E6358]">
            <a href="#progetti" className="hover:text-black transition-colors">PROGETTI (WORKS)</a>
            <a href="#filosofia" className="hover:text-black transition-colors">LA FILOSOFIA</a>
            <a href="#materia" className="hover:text-black transition-colors">MATERIA (MATERIALS)</a>
            <a href="#metodo" className="hover:text-black transition-colors">IL METODO</a>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 bg-[#1B1917] hover:bg-[#B38E5B] text-[#F4F1EA] text-[11px] font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-300 shadow"
            >
              {copy.consultBtn}
            </button>
          </div>

          {/* Mobile Menu */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#1B1917] p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F4F1EA] border-b border-[#E2DDD3] px-6 py-6 space-y-4 text-center">
            <a href="#progetti" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-bold tracking-widest uppercase">PROGETTI</a>
            <a href="#filosofia" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-bold tracking-widest uppercase">LA FILOSOFIA</a>
            <a href="#materia" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-bold tracking-widest uppercase">MATERIA</a>
            <a href="#metodo" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-bold tracking-widest uppercase">IL METODO</a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-[#1B1917] text-white text-xs font-bold tracking-widest uppercase mt-3"
            >
              {copy.consultBtn}
            </button>
          </div>
        )}
      </header>


      {/* =========================================================================
          3. HERO SECTION: MILANESE MODERNISM MEETS RENAISSANCE HARMONY
          ========================================================================= */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#1B1917]">
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Spazio Milano Architecture" 
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1917] via-black/35 to-black/55" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20 lg:pt-28 pb-16 flex-1 flex flex-col justify-between">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-black/60 backdrop-blur-md border border-[#B38E5B]/40 text-[#B38E5B] text-[10px] font-bold tracking-[0.3em] uppercase">
              <Sparkles className="w-3 h-3 text-[#B38E5B]" />
              <span>{copy.tag}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif uppercase tracking-tight text-white leading-[0.92]">
              {copy.heroTitle}
            </h1>

            <p className="text-sm md:text-lg text-neutral-300 max-w-xl font-light tracking-wide leading-relaxed pt-2">
              {copy.heroSub}
            </p>
          </div>

          {/* Lower Hero Controls */}
          <div className="pt-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-white/10">
            
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-[#B38E5B] hover:bg-[#C4A06B] text-black text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-xl flex items-center gap-2 group"
              >
                <span>{copy.consultBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#progetti"
                className="px-6 py-4 border border-white/30 hover:border-white text-white text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-white/5"
              >
                {copy.viewWorks}
              </a>
            </div>

            <div className="text-left sm:text-right font-mono text-[10px] tracking-widest uppercase text-neutral-400">
              <p>TRIENNALE DI MILANO GOLD MEDAL</p>
              <p className="text-[#B38E5B] mt-0.5">SALONE DEL MOBILE · AD100 ARCHITECTURE</p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          4. MANIFESTO: IL RIGORE MILANESE
          ========================================================================= */}
      <section id="filosofia" className="py-28 bg-[#ECE8DF] border-b border-[#DDD7CB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#8C7A6B]">
                LA NOSTRA VISIONE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif uppercase tracking-tight text-[#1B1917]">
                {copy.manifestoTitle}
              </h2>
              <div className="w-12 h-0.5 bg-[#B38E5B]" />
            </div>

            <div className="lg:col-span-8">
              <p className="text-lg md:text-2xl font-serif text-[#1B1917] leading-relaxed">
                "{copy.manifestoText}"
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#DDD7CB] text-xs">
                <div>
                  <span className="font-bold font-mono text-sm text-[#B38E5B]">01. SPATIAL PURITY</span>
                  <p className="text-[#6E6358] mt-1.5 leading-relaxed">
                    Axial alignments inspired by Palladian geometry, eliminating visual dissonance.
                  </p>
                </div>
                <div>
                  <span className="font-bold font-mono text-sm text-[#B38E5B]">02. NOBLE SUBSTANCE</span>
                  <p className="text-[#6E6358] mt-1.5 leading-relaxed">
                    Uncompromising selection of Ceppo di Gré stone, Italian walnut, and Tuscan brass.
                  </p>
                </div>
                <div>
                  <span className="font-bold font-mono text-sm text-[#B38E5B]">03. MILANESE DISCRETION</span>
                  <p className="text-[#6E6358] mt-1.5 leading-relaxed">
                    Concealed millwork joints and shadowline reveals engineered to millimetric tolerances.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          5. PROGETTI (THE WORKS ARCHIVE)
          ========================================================================= */}
      <section id="progetti" className="py-28 bg-[#F4F1EA] border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DDD3] mb-14">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#8C7A6B]">
                OPERE SCELTE
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif tracking-tight uppercase text-[#1B1917] mt-1">
                RESIDENZE & PROGETTI
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
              {['ALL', 'RESIDENZE NOBILI', 'VILLAS', 'TRANSATLANTIC'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 transition-all uppercase tracking-wider text-[11px] ${
                    activeFilter === cat 
                      ? 'bg-[#1B1917] text-[#F4F1EA]' 
                      : 'bg-white/60 text-[#6E6358] hover:bg-white hover:text-black border border-[#E2DDD3]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((p) => (
              <div 
                key={p.id}
                onClick={() => onOpenProject({
                  title: p.title,
                  subtitle: p.subtitle,
                  category: p.category,
                  location: p.location,
                  area: p.scale,
                  year: p.year,
                  image: p.image,
                  materials: p.materials,
                  scope: 'Turnkey Haute Architecture & Custom Brianza Millwork'
                })}
                className="group cursor-pointer space-y-4"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-neutral-200 border border-[#E2DDD3] shadow-md">
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-mono tracking-widest uppercase">
                    {p.num} · {p.location}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-[#B38E5B] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                      <span>ISPEZIONA L'ARCHITETTURA</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-serif uppercase tracking-tight text-[#1B1917] group-hover:text-[#B38E5B] transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-xs font-mono text-[#8C7A6B]">{p.scale}</span>
                  </div>
                  <p className="text-xs text-[#6E6358] leading-relaxed line-clamp-2">
                    {p.subtitle}
                  </p>
                  
                  <div className="pt-2 flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#1B1917] group-hover:underline">
                    <span>EXPLORE PROJECT SHEET</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          6. MATERIA & SOSTANZA (INTERACTIVE ITALIAN MATERIAL ARCHIVE)
          ========================================================================= */}
      <section id="materia" className="py-28 bg-[#ECE8DF] border-b border-[#DDD7CB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#8C7A6B]">
              L'ANIMA DEI MATERIALI
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif tracking-tight uppercase text-[#1B1917]">
              {copy.materialsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6358]">
              {copy.materialsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F4F1EA] p-8 lg:p-12 border border-[#DDD7CB] shadow-sm">
            
            {/* Left Material List */}
            <div className="lg:col-span-5 space-y-3">
              {materials.map((m, idx) => {
                const isSelected = activeMaterial === idx;
                return (
                  <button
                    key={m.code}
                    onClick={() => setActiveMaterial(idx)}
                    className={`w-full text-left p-5 transition-all border ${
                      isSelected 
                        ? 'bg-white border-[#1B1917] shadow-md pl-7' 
                        : 'bg-white/40 border-[#E2DDD3] text-[#6E6358] hover:bg-white hover:text-black'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-serif font-bold uppercase tracking-wide">
                        {m.name}
                      </span>
                      <span className="w-4 h-4 rounded-full border border-black/20" style={{ backgroundColor: m.swatch }} />
                    </div>
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-[#B38E5B] mt-1">
                      {m.origin}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Selected Detail */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square rounded-none overflow-hidden border border-[#E2DDD3] shadow-lg">
                <img 
                  src={materials[activeMaterial].image} 
                  alt={materials[activeMaterial].name} 
                  className="w-full h-full object-cover filter contrast-[1.08] hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#B38E5B]">
                  CAMPIONE N. {materials[activeMaterial].code}
                </span>
                <h4 className="text-2xl font-serif uppercase tracking-tight text-[#1B1917]">
                  {materials[activeMaterial].name}
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6358] leading-relaxed">
                  {materials[activeMaterial].desc}
                </p>
                <div className="pt-2">
                  <button 
                    onClick={onOpenConsultation}
                    className="text-xs font-bold tracking-widest uppercase text-[#B38E5B] hover:underline"
                  >
                    REQUEST ARCHITECTURAL SAMPLE BOX →
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          7. IL METODO ITALIANO (THE 4-STAGE ARCHITECTURAL ATELIER PROCESS)
          ========================================================================= */}
      <section id="metodo" className="py-28 bg-[#F4F1EA] border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="space-y-4 mb-14">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#8C7A6B]">
              DALL'IDEA ALLA REALTÀ
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif tracking-tight uppercase text-[#1B1917]">
              {copy.processTitle}
            </h2>
            <div className="w-full h-[1px] bg-[#1B1917]/15" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: 'I',
                title: 'LA VISIONE',
                sub: 'Spatial Harmonics & Hand Sketches',
                desc: 'Intimate design dialogues in our Brera atelier. Analyzing structural light, ceiling volumes, and lifestyle requirements.'
              },
              {
                num: 'II',
                title: 'LA SOSTANZA',
                sub: 'Direct Quarry Sourcing',
                desc: 'Selecting marble blocks in Carrara and seasoned walnut logs in Brianza. No third-party middlemen or synthetic veneers.'
              },
              {
                num: 'III',
                title: 'IL DETTAGLIO',
                sub: 'Millimetric Engineering',
                desc: 'CAD/BIM millimeter coordination of flush pivot doors, concealed magnetic reveals, and bespoke architectural hardware.'
              },
              {
                num: 'IV',
                title: 'L\'ARMONIA',
                sub: 'Turnkey Handover',
                desc: 'White-glove delivery down to custom lighting scene calibration, custom textile linens, and Italian collector artwork placement.'
              }
            ].map((st) => (
              <div 
                key={st.num}
                className="p-8 bg-white border border-[#E2DDD3] hover:border-[#B38E5B] transition-colors flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div>
                  <span className="text-3xl font-serif font-bold text-[#B38E5B] block pb-4 border-b border-[#E2DDD3]">
                    {st.num}
                  </span>
                  <h4 className="text-base font-serif uppercase tracking-wider text-[#1B1917] mt-4 font-bold">
                    {st.title}
                  </h4>
                  <p className="text-[11px] font-mono uppercase text-[#8C7A6B] mt-1 font-semibold">
                    {st.sub}
                  </p>
                  <p className="text-xs text-[#6E6358] leading-relaxed mt-4">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DDD3] flex items-center justify-between text-[10px] font-mono uppercase text-[#8C7A6B]">
                  <span>STANDARD ATELIER</span>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          8. PRIVATE COMMISSION CTA
          ========================================================================= */}
      <section className="py-28 bg-[#1B1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#B38E5B]">
            COMMISSIONI PRIVATE & PROGETTI SPECIALI
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif uppercase tracking-tight leading-tight">
            INIZIA IL DIALOGO
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto font-light leading-relaxed">
            Accettiamo un numero limitato di residenze private all'anno per garantire una direzione d'autore su ogni singolo dettaglio costruttivo.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-10 py-4 bg-[#B38E5B] hover:bg-[#C4A06B] text-black text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-xl"
            >
              PRENOTA UNA CONSULENZA
            </button>
            <a
              href="mailto:studio@spaziomilano.it"
              className="px-8 py-4 border border-white/20 hover:border-white text-white text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-white/5"
            >
              SCRIVI AL NOSTRO ATELIER
            </a>
          </div>
        </div>
      </section>


      {/* =========================================================================
          9. FOOTER
          ========================================================================= */}
      <footer className="py-16 bg-[#12100E] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            <div className="md:col-span-5 space-y-3">
              <span className="text-2xl font-serif uppercase tracking-tight text-white font-bold">SPAZIO MILANO</span>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
                Studio d'architettura d'interni e atelier di alta falegnameria milanese per collezionisti e committenti internazionali.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#B38E5B]">Sedi / Ateliers</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Via Monte di Pietà 12, 20121 Milano<br />
                Madison Avenue, New York NY 10022<br />
                Piazza di Spagna 34, Roma
              </p>
            </div>

            <div className="md:col-span-4 space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#B38E5B]">Contatti</h4>
              <p className="text-xs text-neutral-400">
                milano@spaziomilano.it · +39 02 8901 4452
              </p>
              <div className="pt-2 flex gap-4 text-xs text-neutral-400">
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">Salone del Mobile</a>
                <a href="#" className="hover:text-white">Triennale</a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-neutral-500 tracking-wider uppercase">
            <p>© {new Date().getFullYear()} SPAZIO MILANO STUDIO ASSOCIATI. ALL RIGHTS RESERVED.</p>
            <p>ITALIAN ARCHITECTURE & AMERICAN TRANSATLANTIC GUILD</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
