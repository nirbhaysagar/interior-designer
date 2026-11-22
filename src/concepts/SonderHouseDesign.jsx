import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { 
  ArrowRight, 
  Sparkles, 
  Phone, 
  MapPin, 
  Check, 
  ShieldCheck, 
  TreePine, 
  Home, 
  Maximize2, 
  Menu, 
  X,
  Compass,
  ArrowUpRight,
  Sun,
  Layers
} from 'lucide-react';

export default function SonderHouseDesign({ onOpenConsultation, onOpenProject }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLayoutTab, setActiveLayoutTab] = useState('villa-a');
  const [layoutModalOpen, setLayoutModalOpen] = useState(false);

  // Animation Refs for GSAP
  const containerRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroBadgeRef = useRef(null);

  // Modern architectural imagery matching the uploaded reference
  const heroHouse = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85";
  const mainFeatureHouse = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80";
  const terraceHouse = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80";
  const minimalExterior = "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80";
  const aerialPlan = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80";
  const energyTech = "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80";

  // GSAP Initial Mount Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Load Vibe: Hero title stagger
      gsap.fromTo(
        heroTitleRef.current.children,
        { opacity: 0, y: 60, skewY: 3 },
        { 
          opacity: 1, 
          y: 0, 
          skewY: 0, 
          duration: 1.2, 
          stagger: 0.2, 
          ease: 'power3.out' 
        }
      );

      // 2. Hero Image Reveal with smooth subtle scale
      gsap.fromTo(
        heroImageRef.current,
        { opacity: 0, scale: 1.08 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1.6, 
          ease: 'power2.out',
          delay: 0.3
        }
      );

      // 3. Floating Client Badge with delay & bounce
      gsap.fromTo(
        heroBadgeRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.1,
          delay: 0.9,
          ease: 'back.out(1.7)'
        }
      );

      // 4. Staggered Delayed Scroll Reveals for Images (1s smooth delay as requested)
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { opacity: 0, y: 45, filter: 'blur(4px)' },
              {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 1.1,
                delay: 0.2,
                ease: 'power3.out'
              }
            );
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      document.querySelectorAll('.gsap-reveal').forEach((el) => {
        observer.observe(el);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const villaLayouts = {
    'villa-a': {
      name: 'Villa Aura (Type A)',
      area: '285 m² (3,067 sq ft)',
      floors: '2 Levels',
      bedrooms: '4 Suites',
      bathrooms: '4.5 Baths',
      plot: '1,200 m² Private Territory',
      features: ['Double-height living atrium', 'Private pool & stone terrace', 'Master suite with private solarium', 'Concealed 2-car garage'],
      image: terraceHouse
    },
    'villa-b': {
      name: 'Villa Sol (Type B)',
      area: '340 m² (3,660 sq ft)',
      floors: '2 Levels + Rooftop',
      bedrooms: '5 Suites',
      bathrooms: '5.5 Baths',
      plot: '1,500 m² Forest Plot',
      features: ['Panoramic rooftop lounge', 'Outdoor wellness sauna & cold plunge', 'Integrated solar pergola roof', 'Wine cellar & tasting nook'],
      image: minimalExterior
    },
    'villa-c': {
      name: 'Villa Monolith (Type C)',
      area: '420 m² (4,520 sq ft)',
      floors: '3 Levels (With Walkout)',
      bedrooms: '6 Suites',
      bathrooms: '7 Baths',
      plot: '2,100 m² Prime Nature Edge',
      features: ['Infinity pool merging into pine forest', 'Subterranean cinema & fitness suite', 'Private gate & guard barrier', 'Smart geothermal heating'],
      image: mainFeatureHouse
    }
  };

  const currentLayout = villaLayouts[activeLayoutTab];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#758B9F] py-0 sm:py-8 px-0 sm:px-4 md:px-8 font-sans antialiased selection:bg-black selection:text-white">
      
      {/* Outer Slate Blue Border Frame matching the uploaded image */}
      <div className="max-w-[1440px] mx-auto bg-white text-[#111111] rounded-none sm:rounded-[32px] overflow-hidden shadow-2xl border border-white/20">
        
        {/* =========================================================================
            1. TOP NAVIGATION (Exact layout from the image)
            ========================================================================= */}
        <header className="w-full bg-white/95 backdrop-blur-md px-6 lg:px-12 py-5 flex items-center justify-between border-b border-black/5">
          
          {/* Logo & S monogram */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm tracking-tighter">
              <span className="italic font-display font-black text-base">S</span>
            </div>
            <span className="font-extrabold text-base tracking-tight uppercase font-display">
              SONDER HOUSE
            </span>
          </div>

          {/* Center Links */}
          <nav className="hidden lg:flex items-center gap-9 text-xs font-semibold tracking-wider text-neutral-600">
            <a href="#hero" className="hover:text-black transition-colors">Gallery</a>
            <a href="#manifesto" className="hover:text-black transition-colors">About us</a>
            <button onClick={() => setLayoutModalOpen(true)} className="hover:text-black transition-colors">
              Apartments & Villas
            </button>
            <a href="#why-choose" className="hover:text-black transition-colors">Features</a>
            <button onClick={onOpenConsultation} className="hover:text-black transition-colors">
              Contacts
            </button>
            <a href="#location" className="hover:text-black transition-colors">Location</a>
          </nav>

          {/* Right Language & Phone Pill */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center text-[11px] font-semibold tracking-wider text-neutral-500 gap-1.5">
              <span className="text-black font-bold">EN</span>
              <span>/</span>
              <span className="hover:text-black cursor-pointer">UA</span>
            </div>

            <a 
              href="tel:+380000001110" 
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-xs font-bold text-black transition-all shadow-sm"
            >
              <span>+38 (000) 000-11-10</span>
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                <Phone className="w-3 h-3" />
              </div>
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-black"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-black/10 px-6 py-6 space-y-4 text-center">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-bold tracking-widest uppercase">Gallery</a>
            <a href="#manifesto" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-bold tracking-widest uppercase">About us</a>
            <button onClick={() => { setMobileMenuOpen(false); setLayoutModalOpen(true); }} className="block w-full py-2 text-xs font-bold tracking-widest uppercase">Apartments & Villas</button>
            <a href="#why-choose" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-bold tracking-widest uppercase">Features</a>
            <button onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }} className="w-full py-3 bg-black text-white text-xs font-bold tracking-widest uppercase mt-2">
              Book a Site Tour
            </button>
          </div>
        )}

        {/* =========================================================================
            2. HERO SECTION (Faithfully matching the uploaded image)
            ========================================================================= */}
        <section id="hero" className="relative w-full bg-[#FAFAFA] pt-8 lg:pt-12 px-6 lg:px-12 pb-16 overflow-hidden">
          
          {/* Top Tagline & Star Pill */}
          <div className="flex items-center justify-between pb-4">
            <span className="text-[11px] font-medium tracking-wider text-neutral-500">
              Your Dream · Property · Reality
            </span>
            <div className="flex items-center gap-2 text-right">
              <Sparkles className="w-4 h-4 text-neutral-400" />
              <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                WE BUILD MODERN HOUSES IN NATURE
              </span>
            </div>
          </div>

          {/* Giant Bold Headline: SONDER HOUSE with Copyright */}
          <div ref={heroTitleRef} className="relative z-20 pointer-events-none select-none">
            <div className="flex items-start">
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[132px] font-black tracking-tighter uppercase font-display leading-[0.88] text-[#111111]">
                SONDER
              </h1>
              <span className="text-2xl sm:text-4xl font-light text-neutral-400 ml-2">©</span>
            </div>
            <div className="flex justify-end -mt-3 sm:-mt-8 lg:-mt-12">
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[132px] font-black tracking-tighter uppercase font-display leading-[0.88] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
                HOUSE
              </h1>
            </div>
          </div>

          {/* Hero Architectural Image & Floating Badges */}
          <div className="relative -mt-16 sm:-mt-24 lg:-mt-32 rounded-3xl overflow-hidden aspect-[16/10] lg:aspect-[21/10] shadow-2xl border border-black/10">
            <img 
              ref={heroImageRef}
              src={heroHouse} 
              alt="Sonder House Modern Villa" 
              className="w-full h-full object-cover object-center"
            />
            
            {/* Subtle Gradient for Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

            {/* Left Mid Overlay: "01/05 WHERE TRANQUILITY MEETS MODERN LIVING" + Button */}
            <div className="absolute top-1/3 left-6 sm:left-12 max-w-xs space-y-4 text-white z-10">
              <span className="text-[11px] font-mono tracking-widest text-neutral-300 font-semibold block">
                01/05
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight leading-tight">
                WHERE TRANQUILITY MEETS MODERN LIVING
              </h3>
              <button 
                onClick={() => setLayoutModalOpen(true)}
                className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-neutral-100 text-xs font-bold tracking-wider uppercase transition-all shadow-lg flex items-center gap-2 group"
              >
                <span>VIEW LAYOUTS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Bottom Left Badge: Private Homes in Nature */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 max-w-xs text-white z-10">
              <p className="text-[11px] font-bold tracking-widest uppercase leading-snug drop-shadow">
                PRIVATE HOMES SURROUNDED BY NATURE, 20 MINUTES FROM THE CITY CENTER
              </p>
            </div>

            {/* Bottom Right Floating Review Badge: "+300 clients have left positive reviews" */}
            <div 
              ref={heroBadgeRef}
              className="absolute bottom-6 sm:bottom-10 right-6 sm:right-12 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-black/10 z-10 max-w-[240px]"
            >
              <span className="text-3xl font-black font-display text-black block tracking-tight">
                +300
              </span>
              <p className="text-[11px] text-neutral-600 leading-tight mt-1 font-medium">
                clients have left positive reviews about our work
              </p>
              
              {/* Client Avatars */}
              <div className="flex items-center -space-x-2 mt-3">
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Client" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Client" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80" alt="Client" />
                <div className="w-7 h-7 rounded-full bg-neutral-900 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">
                  ★ 5.0
                </div>
              </div>
            </div>

          </div>

        </section>


        {/* =========================================================================
            3. SECTION 2: "A PLACE THAT FEELS RIGHT / NOT JUST A HOUSE" (Exact Image Layout)
            ========================================================================= */}
        <section id="manifesto" className="relative w-full bg-white py-24 px-6 lg:px-12 border-b border-black/5">
          <div className="max-w-7xl mx-auto">
            
            {/* Top Row: Giant Text Left + Center Hero Photo + Giant Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: "A PLACE THAT FEELS RIGHT" */}
              <div className="lg:col-span-4 space-y-6">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tighter leading-[0.92] text-black">
                  A PLACE<br />
                  THAT FEELS<br />
                  RIGHT
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium max-w-sm pt-4">
                  Sonder House is a private residential complex of just 12 homes — surrounded by nature, designed with modern simplicity, and built for those who value peace and quality.
                </p>
              </div>

              {/* Center Column: Clean Cubic Villa Image with GSAP Reveal */}
              <div className="lg:col-span-5 gsap-reveal">
                <div 
                  onClick={() => onOpenProject({
                    title: 'Sonder House Core Villa',
                    subtitle: 'Clean monolithic white cubic volume with seamless nature glass',
                    category: 'PRIVATE RESIDENCE',
                    location: 'Pine Reserve, Kyiv Suburbs',
                    area: '340 m²',
                    year: '2025',
                    image: mainFeatureHouse,
                    materials: ['Self-cleaning Austrian facade render', 'Triple-pane solar-gain glazing', 'Natural thermo-treated ash decking', 'Integrated smart microclimate system'],
                    scope: 'Ground-Up Architectural Complex'
                  })}
                  className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 shadow-xl border border-black/10 cursor-pointer group"
                >
                  <img 
                    src={mainFeatureHouse} 
                    alt="Sonder House Minimal Architecture" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Right Column: "/ NOT JUST A HOUSE" */}
              <div className="lg:col-span-3 space-y-8 flex flex-col justify-between">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tighter leading-[0.92] text-neutral-300">
                  / NOT<br />
                  JUST<br />
                  A HOUSE
                </h2>

                <div className="pt-6 border-t border-black/10 flex items-start gap-2.5">
                  <div className="w-2.5 h-2.5 rotate-45 bg-[#758B9F] shrink-0 mt-1" />
                  <p className="text-[11px] font-bold tracking-widest uppercase text-neutral-700 leading-snug">
                    WHEN YOU CLOSE THE GATE — THE WORLD QUIETS DOWN
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            4. SECTION 3: ASYMMETRICAL FLOATING HIGHLIGHTS (Exact Image Layout)
            ========================================================================= */}
        <section className="relative w-full bg-[#FAFAFA] py-24 px-6 lg:px-12 border-b border-black/5">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
              
              {/* Highlight 1: ONLY 12 HOMES */}
              <div className="space-y-3 gsap-reveal">
                <span className="text-sm font-black font-display uppercase tracking-wider text-black block">
                  ONLY<br />12 HOMES
                </span>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-black/10 bg-neutral-200">
                  <img src={terraceHouse} alt="Only 12 Homes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-[11px] text-neutral-500 font-medium">
                  Guaranteed privacy, low population density, and quiet neighbors.
                </p>
              </div>

              {/* Highlight 2: MINIMALIST ARCHITECTURE */}
              <div className="space-y-3 lg:translate-y-12 gsap-reveal">
                <span className="text-sm font-black font-display uppercase tracking-wider text-black block">
                  MINIMALIST<br />ARCHITECTURE
                </span>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-black/10 bg-neutral-200">
                  <img src={minimalExterior} alt="Minimalist Architecture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-[11px] text-neutral-500 font-medium">
                  Purity of geometric lines, cantilevered volumes, and expansive glass.
                </p>
              </div>

              {/* Highlight 3: PRIVATE TERRITORY & LANDSCAPE */}
              <div className="space-y-3 gsap-reveal">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-black/10 bg-neutral-200">
                  <img src={aerialPlan} alt="Private Territory" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <span className="text-sm font-black font-display uppercase tracking-wider text-black block pt-1">
                  PRIVATE<br />TERRITORY & LANDSCAPE
                </span>
                <p className="text-[11px] text-neutral-500 font-medium">
                  Individual 15–20 acre parcels enveloped by mature pine forest.
                </p>
              </div>

              {/* Highlight 4: ENERGY-EFFICIENT DESIGN */}
              <div className="space-y-3 lg:translate-y-12 gsap-reveal">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-black/10 bg-neutral-200">
                  <img src={energyTech} alt="Energy Efficient" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <span className="text-sm font-black font-display uppercase tracking-wider text-black block pt-1">
                  ENERGY-EFFICIENT<br />DESIGN
                </span>
                <p className="text-[11px] text-neutral-500 font-medium">
                  A++ energy rating, geothermal heat pumps, and solar integration.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            5. SECTION 4: "/ Why choose Sonder House?" (Exact Image Layout)
            ========================================================================= */}
        <section id="why-choose" className="relative w-full bg-white py-28 px-6 lg:px-12 border-b border-black/5">
          <div className="max-w-5xl mx-auto space-y-14">
            
            {/* Title with Forward Slash */}
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-black">
              / Why choose<br />Sonder House?
            </h2>

            {/* Clean Numbered Horizontal Rows */}
            <div className="divide-y divide-black/10 border-y border-black/10">
              
              {/* Row 1 */}
              <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-neutral-50/70 transition-colors px-2">
                <div className="md:col-span-1 text-sm font-bold font-mono text-neutral-400">
                  1
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-black">
                    Thoughtful planning
                  </h3>
                </div>
                <div className="md:col-span-5 text-left md:text-right">
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                    Functional layouts designed for real life
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-neutral-50/70 transition-colors px-2">
                <div className="md:col-span-1 text-sm font-bold font-mono text-neutral-400">
                  2
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-black">
                    Green & quiet
                  </h3>
                </div>
                <div className="md:col-span-5 text-left md:text-right">
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                    Private territory, no city noise, only trees and air
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-neutral-50/70 transition-colors px-2">
                <div className="md:col-span-1 text-sm font-bold font-mono text-neutral-400">
                  3
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-black">
                    Modern minimalist design
                  </h3>
                </div>
                <div className="md:col-span-5 text-left md:text-right">
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                    Natural textures, clean lines, timeless aesthetic
                  </p>
                </div>
              </div>

              {/* Row 4 */}
              <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-neutral-50/70 transition-colors px-2">
                <div className="md:col-span-1 text-sm font-bold font-mono text-neutral-400">
                  4
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-black">
                    Safe & private
                  </h3>
                </div>
                <div className="md:col-span-5 text-left md:text-right">
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                    Gated area, no through traffic, security
                  </p>
                </div>
              </div>

            </div>

            {/* Action Row */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                Status: 9 OF 12 VILLAS RESERVED · 3 REMAINING
              </span>

              <button
                onClick={() => setLayoutModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-bold tracking-widest uppercase transition-all shadow-lg flex items-center gap-2"
              >
                <span>EXPLORE AVAILABLE LAYOUTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </section>


        {/* =========================================================================
            6. LOCATION & PRIVATE NATURE TOUR CALLOUT
            ========================================================================= */}
        <section id="location" className="relative w-full bg-[#FAFAFA] py-24 px-6 lg:px-12 border-b border-black/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#758B9F]">
                PRIME LOCATION & ACCESS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-black uppercase">
                20 MINUTES TO CENTER.<br />ZERO CITY NOISE.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                Situated in an ancient pine reserve with direct high-speed highway connection. Enjoy the silence of forest air without disconnecting from the urban pulse.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-black/10">
                  <span className="text-2xl font-black font-display text-black">12 min</span>
                  <span className="block text-[10px] uppercase font-bold text-neutral-500 mt-1">To International Airport</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-black/10">
                  <span className="text-2xl font-black font-display text-black">8 min</span>
                  <span className="block text-[10px] uppercase font-bold text-neutral-500 mt-1">To Yacht Club & Marina</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden aspect-[16/10] shadow-xl border border-black/10 relative">
                <img src={aerialPlan} alt="Sonder House Masterplan" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center text-white">
                  <div className="space-y-3">
                    <MapPin className="w-8 h-8 mx-auto text-amber-300" />
                    <h4 className="text-xl font-bold font-display uppercase tracking-tight">
                      Private Site Tours by Appointment
                    </h4>
                    <button 
                      onClick={onOpenConsultation}
                      className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-all shadow"
                    >
                      BOOK AN ON-SITE VISIT
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            7. FOOTER
            ========================================================================= */}
        <footer className="w-full bg-white py-14 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-b border-black/10 pb-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm">
                S
              </div>
              <span className="font-black text-lg tracking-tight uppercase font-display">
                SONDER HOUSE
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-neutral-600">
              <a href="#hero" className="hover:text-black">Gallery</a>
              <a href="#manifesto" className="hover:text-black">About us</a>
              <button onClick={() => setLayoutModalOpen(true)} className="hover:text-black">Apartments & Villas</button>
              <a href="#why-choose" className="hover:text-black">Features</a>
              <a href="#location" className="hover:text-black">Location</a>
            </div>

            <a href="tel:+380000001110" className="text-sm font-bold text-black hover:underline">
              +38 (000) 000-11-10
            </a>
          </div>

          <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
            <p>© {new Date().getFullYear()} SONDER HOUSE RESIDENTIAL COMPLEX. ALL RIGHTS RESERVED.</p>
            <p className="font-mono">12 PRIVATE RESIDENCES · DESIGNED FOR REAL LIFE</p>
          </div>
        </footer>

      </div>

      {/* =========================================================================
          INTERACTIVE VILLA LAYOUTS MODAL
          ========================================================================= */}
      {layoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div 
            className="relative w-full max-w-4xl bg-white text-black rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-black/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-black/10 bg-[#FAFAFA]">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500">
                  SONDER HOUSE ARCHITECTURAL PLANS
                </span>
                <h3 className="text-2xl font-black font-display uppercase tracking-tight text-black">
                  Available Villa Layouts
                </h3>
              </div>
              <button 
                onClick={() => setLayoutModalOpen(false)}
                className="p-2 rounded-full hover:bg-black/5 text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto space-y-8">
              {/* Layout Switcher Tabs */}
              <div className="flex gap-2 border-b border-black/10 pb-4">
                {Object.keys(villaLayouts).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveLayoutTab(key)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                      activeLayoutTab === key 
                        ? 'bg-black text-white shadow' 
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    {villaLayouts[key].name}
                  </button>
                ))}
              </div>

              {/* Selected Layout Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 shadow border border-black/10">
                  <img src={currentLayout.image} alt={currentLayout.name} className="w-full h-full object-cover" />
                </div>

                <div className="md:col-span-5 space-y-5">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#758B9F] uppercase">
                      TURNKEY SPECIFICATION
                    </span>
                    <h4 className="text-2xl font-black font-display uppercase text-black mt-1">
                      {currentLayout.name}
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs bg-neutral-50 p-4 rounded-xl border border-black/5">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block">Total Area</span>
                      <span className="font-bold text-black text-sm">{currentLayout.area}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block">Plot Size</span>
                      <span className="font-bold text-black text-sm">{currentLayout.plot}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block">Rooms</span>
                      <span className="font-bold text-black text-sm">{currentLayout.bedrooms}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block">Levels</span>
                      <span className="font-bold text-black text-sm">{currentLayout.floors}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-black">Architectural Features:</span>
                    <ul className="space-y-1.5 text-xs text-neutral-600">
                      {currentLayout.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setLayoutModalOpen(false);
                        onOpenConsultation();
                      }}
                      className="w-full py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-bold tracking-widest uppercase transition-all shadow flex items-center justify-center gap-2"
                    >
                      <span>INQUIRE ABOUT THIS VILLA</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
