import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  X, 
  Plus, 
  Minus,
  Maximize2,
  Compass,
  Layers,
  Sparkles,
  Ruler,
  Calendar,
  MapPin,
  Check,
  Sliders,
  ShieldCheck,
  Eye
} from 'lucide-react';

export default function Arkitect3DDesign({ onOpenConsultation, onOpenProject }) {
  const threeCanvasRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSpatialLayer, setActiveSpatialLayer] = useState(0); // 0: Core, 1: Facade, 2: Living
  const [activeArchiveFilter, setActiveArchiveFilter] = useState('ALL');

  // 3D Stacking Cards Data (matching the reference image)
  const cards = [
    {
      id: 'ocean-wave',
      number: '01',
      title: 'OCEAN WAVE',
      tagline: 'Curvilinear acoustic facade & kinetic solar fins',
      location: 'Sydney, Australia',
      year: '2025',
      bgColor: '#96A8B6', // Soft ocean grey-blue from reference image
      textColor: '#FFFFFF',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      description: 'Sculpted with continuous aerodynamic curves that deflect coastal offshore wind, channeling natural ventilation through internal open-air atrium galleries.',
      specs: {
        scale: '4,200 m²',
        facade: 'Pre-cast fiber reinforced curved ultra-concrete',
        status: 'Completed 2025',
        awards: 'WAF Shortlist 2025'
      }
    },
    {
      id: 'puzzle-tower',
      number: '02',
      title: 'PUZZLE TOWER',
      tagline: 'Faceted monolithic geometry & geometric sky-gardens',
      location: 'Copenhagen, Denmark',
      year: '2024',
      bgColor: '#5A9BAE', // Cyan / cerulean blue from reference image
      textColor: '#FFFFFF',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      description: 'An interlocking vertical volume where residential units shift diagonally, generating double-height cantilevered terraces with panoramic northern harbor views.',
      specs: {
        scale: '6,800 m²',
        facade: 'Anodized titanium-zinc panels with solar prism coatings',
        status: 'Delivered',
        awards: 'Danish Architecture Center Gold'
      }
    },
    {
      id: 'honey-comb',
      number: '03',
      title: 'HONEY COMB',
      tagline: 'Modular staggered balconies & deep solar shading',
      location: 'Barcelona, Spain',
      year: '2025',
      bgColor: '#A3777A', // Warm terracotta rose from reference image
      textColor: '#FFFFFF',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      description: 'A modular cellular residential facade balancing privacy with southern Mediterranean sunlight. Each extruded balcony acts as a thermal mass cushion.',
      specs: {
        scale: '5,100 m²',
        facade: 'Pigmented rose-terracotta mineral composite',
        status: 'Under Construction',
        awards: 'Mies Crown Hall Americas Nominee'
      }
    },
    {
      id: 'mirror-horizon',
      number: '04',
      title: 'MIRROR HORIZON',
      tagline: 'Reflective cantilevered pavilion suspended over water',
      location: 'Lake Lucerne, Switzerland',
      year: '2025',
      bgColor: '#4B6780', // Deep fjord slate
      textColor: '#FFFFFF',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: 'Floor-to-ceiling ultra-clear low-iron glass cantilevers 8 meters over the lake surface, dissolving the boundary between alpine reflection and interior salon.',
      specs: {
        scale: '3,400 m²',
        facade: 'Structural silicone glazing & dark brushed graphite',
        status: 'Commission Private',
        awards: 'Swiss Architectural Excellence'
      }
    }
  ];

  // Spatial Axonometric Layers Data
  const spatialLayers = [
    {
      id: 'core',
      step: 'LAYER 01',
      title: 'Structural Mass & Concrete Core',
      desc: 'Engineered with low-carbon post-tensioned concrete shear walls that bear the cantilevered loads without internal interior columns, granting completely uninterrupted floorplans.',
      metric: 'Zero Internal Columns · 120-Year Lifespan',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'facade',
      step: 'LAYER 02',
      title: 'Kinetic Facade & Solar Enclosure',
      desc: 'Computational parametric louvers track the sun trajectory automatically, reducing mechanical cooling loads by 42% while filtering glare into dynamic shadow patterns.',
      metric: 'A++ Passivhaus Standard · 42% Cooling Reduction',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'living',
      step: 'LAYER 03',
      title: 'Interior Volume & Atmospheric Light',
      desc: 'Bespoke interior architectural joinery, flush recessed baseboard reveals, micro-cement floor planes, and continuous cross-ventilation corridors designed for tranquil living.',
      metric: 'Acoustic Sound Floor < 20dB · 100% Daylight Autonomy',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  // Capabilities & Disciplines Data
  const disciplines = [
    {
      number: '01',
      title: 'Architecture & Masterplanning',
      focus: 'Site topography, solar vector analysis, massing geometry, zoning navigation',
      timeline: '8–14 Weeks Concept to Approved Blueprint'
    },
    {
      number: '02',
      title: 'Bespoke Interior Architecture',
      focus: 'Monolithic joinery, concealed magnetic reveals, acoustic tuning, material curation',
      timeline: 'Integrated Simultaneously with Build Shell'
    },
    {
      number: '03',
      title: 'Computational Facade Engineering',
      focus: 'Kinetic solar louvers, thermal break optimization, triple-glazed low-iron curtain walls',
      timeline: 'Direct Atelier Fabrication in Germany & Switzerland'
    },
    {
      number: '04',
      title: 'Turnkey Construction Direction',
      focus: 'General contractor site direction, structural verification, white-glove handover',
      timeline: 'Guaranteed Milestone Schedule'
    }
  ];

  // Full Archive Works Data
  const archiveWorks = [
    { title: 'The Dune Pavilion', location: 'Palm Springs, CA', category: 'RESIDENTIAL', year: '2025', scale: '720 m²', status: 'Completed' },
    { title: 'Ocean Wave Complex', location: 'Sydney, Australia', category: 'WATERFRONT', year: '2025', scale: '4,200 m²', status: 'Completed' },
    { title: 'Puzzle Tower Residence', location: 'Copenhagen, Denmark', category: 'TOWERS', year: '2024', scale: '6,800 m²', status: 'Delivered' },
    { title: 'Honeycomb Urban Block', location: 'Barcelona, Spain', category: 'RESIDENTIAL', year: '2025', scale: '5,100 m²', status: 'Under Construction' },
    { title: 'Mirror Horizon Villa', location: 'Lake Lucerne, Switzerland', category: 'WATERFRONT', year: '2025', scale: '3,400 m²', status: 'Commission Private' },
    { title: 'Monolith Alpine Retreat', location: 'St. Moritz, Switzerland', category: 'RESIDENTIAL', year: '2024', scale: '1,100 m²', status: 'Completed' },
    { title: 'Kyoto Cedar Atrium', location: 'Kyoto, Japan', category: 'CULTURAL', year: '2024', scale: '2,900 m²', status: 'Delivered' },
    { title: 'SoHo Cast-Iron Solarium', location: 'New York, USA', category: 'RESIDENTIAL', year: '2023', scale: '850 m²', status: 'Completed' }
  ];

  const filteredArchive = activeArchiveFilter === 'ALL'
    ? archiveWorks
    : archiveWorks.filter(w => w.category === activeArchiveFilter);

  // 1. Three.js Ambient 3D Depth Canvas Background
  useEffect(() => {
    if (!threeCanvasRef.current) return;

    const canvas = threeCanvasRef.current;
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      45, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 24;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Floating 3D Geometric Architectural Torus
    const geometry = new THREE.TorusGeometry(8, 2.2, 16, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0x98A9B8,
      roughness: 0.25,
      metalness: 0.1,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Floating architectural perspective grid plane
    const planeGeo = new THREE.PlaneGeometry(35, 35, 20, 20);
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0x111111,
      wireframe: true,
      transparent: true,
      opacity: 0.03
    });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.rotation.x = -Math.PI / 3;
    plane.position.y = -6;
    scene.add(plane);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(10, 15, 15);
    scene.add(pointLight);

    // Mouse Tracking for Parallax
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = x * 0.4;
      targetY = y * 0.4;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      torus.rotation.x += 0.0015;
      torus.rotation.y += 0.002;
      torus.rotation.x += (targetY - torus.rotation.x) * 0.04;
      torus.rotation.y += (targetX - torus.rotation.y) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#111113] text-[#111111] font-sans antialiased selection:bg-black selection:text-white">
      
      {/* Interactive Three.js Background Canvas */}
      <canvas 
        ref={threeCanvasRef} 
        className="fixed inset-0 pointer-events-none z-0 opacity-80"
      />

      {/* Main Elevated White Page Canvas matching reference */}
      <div className="relative z-10 max-w-6xl mx-auto my-0 sm:my-8 bg-white rounded-none sm:rounded-[36px] shadow-[0_25px_70px_rgba(0,0,0,0.45)] overflow-hidden border border-black/10">
        
        {/* =========================================================================
            1. MINIMALIST TOP BAR WITH FLOATING PILL DYNAMIC ISLAND
            ========================================================================= */}
        <header className="px-6 lg:px-12 py-7 flex items-center justify-between border-b border-black/5 bg-white/95 backdrop-blur-md sticky top-0 z-30">
          
          {/* Logo: arkitect* */}
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold tracking-tight lowercase text-black font-sans">
              arkitect<span className="text-[#5A9BAE] font-mono">*</span>
            </span>
          </div>

          {/* Center Floating Dark Island Navigation (Exact match to uploaded image) */}
          <nav className="flex items-center bg-[#18181A] text-white px-5 py-2 rounded-full text-xs font-medium tracking-wide shadow-xl gap-6 border border-white/10">
            <a href="#deck" className="text-white hover:text-neutral-300 transition-colors">
              Projects
            </a>
            <a href="#layers" className="text-neutral-400 hover:text-white transition-colors">
              3D Anatomy
            </a>
            <a href="#services" className="text-neutral-400 hover:text-white transition-colors">
              Capabilities
            </a>
            <a href="#archive" className="text-neutral-400 hover:text-white transition-colors">
              Index
            </a>
            {/* Counter Badge Dot */}
            <div className="w-5 h-5 rounded-full bg-white/15 text-[10px] font-bold flex items-center justify-center text-white border border-white/10">
              {cards.length}
            </div>
          </nav>

          {/* Right Socials & Inquire */}
          <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-neutral-500">
            <a href="#" className="hover:text-black transition-colors">TW</a>
            <a href="#" className="hover:text-black transition-colors">IG</a>
            <a href="#" className="hover:text-black transition-colors">BE</a>
          </div>
        </header>

        {/* =========================================================================
            2. HEADER TITLE: PROJECTS / DESIGN & BUILD
            ========================================================================= */}
        <div id="deck" className="pt-16 pb-12 px-6 lg:px-12 text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-400">
            PROJECTS
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-black font-display">
            Design & Build
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto leading-relaxed font-light">
            Monolithic sculptural architecture engineered with kinetic spatial geometry and continuous structural flow.
          </p>
        </div>

        {/* =========================================================================
            3. 3D STACKING DECK CARDS (Smooth, Luxurious, Interactive Depth)
            ========================================================================= */}
        <div className="px-4 sm:px-8 lg:px-12 pb-24 space-y-8" style={{ perspective: '1600px' }}>
          {cards.map((card, index) => {
            const isHovered = hoveredCard === card.id;
            
            // Dynamic subtle tilt calculation based on mouse position
            const tiltX = isHovered ? mousePos.y * 4 : 0;
            const tiltY = isHovered ? mousePos.x * -4 : 0;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedCard(card)}
                style={{
                  backgroundColor: card.bgColor,
                  color: card.textColor,
                  transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(${isHovered ? '24px' : '0px'})`,
                  transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease',
                  top: `${index * 24}px`
                }}
                className={`sticky rounded-[32px] sm:rounded-[44px] overflow-hidden p-6 sm:p-12 shadow-2xl cursor-pointer group border border-white/20 select-none`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px] sm:min-h-[460px]">
                  
                  {/* Left Column: Huge Serif Headline + Story */}
                  <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono tracking-widest uppercase opacity-75">
                          {card.number} / {card.location}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white opacity-60" />
                        <span className="text-[11px] font-mono tracking-widest uppercase opacity-75">
                          {card.year}
                        </span>
                      </div>

                      <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-white uppercase leading-[0.95]">
                        {card.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-white/80 max-w-sm leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom Specs & View Project Button */}
                    <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                      <div className="flex items-center gap-6 text-xs text-white/90">
                        <div>
                          <span className="block text-[9px] uppercase tracking-widest opacity-60">Scale</span>
                          <span className="font-semibold">{card.specs.scale}</span>
                        </div>
                        <div>
                          <span className="block text-[9px] uppercase tracking-widest opacity-60">Status</span>
                          <span className="font-semibold">{card.specs.status}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:translate-x-1.5 transition-transform">
                        <span>VIEW STUDY</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Architectural Photography with Rounded 3D Mask */}
                  <div className="lg:col-span-6">
                    <div className="relative rounded-[24px] sm:rounded-[36px] overflow-hidden aspect-[4/3] shadow-2xl border border-white/20 group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            NEW SECTION 1: INTERACTIVE 3D ANATOMY / SPATIAL AXONOMETRIC EXPLORER
            ========================================================================= */}
        <section id="layers" className="py-24 px-6 lg:px-12 border-t border-black/10 bg-[#FAFAFA]">
          <div className="max-w-5xl mx-auto space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-black/10">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400">
                  SPATIAL ANATOMY
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-black mt-1">
                  How We Construct Depth
                </h2>
              </div>
              <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                Click through the architectural layers to inspect the engineering beneath our sculptural forms.
              </p>
            </div>

            {/* Layer Navigation Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {spatialLayers.map((layer, index) => {
                const isActive = activeSpatialLayer === index;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveSpatialLayer(index)}
                    className={`p-5 rounded-2xl text-left transition-all border ${
                      isActive 
                        ? 'bg-black text-white border-black shadow-lg' 
                        : 'bg-white text-neutral-600 border-black/10 hover:border-black/30'
                    }`}
                  >
                    <span className={`text-[10px] font-mono tracking-widest block font-bold ${isActive ? 'text-[#5A9BAE]' : 'text-neutral-400'}`}>
                      {layer.step}
                    </span>
                    <h3 className="text-base font-bold font-display mt-1 tracking-tight">
                      {layer.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Active Layer Deep Dive Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 lg:p-10 rounded-[32px] border border-black/10 shadow-sm">
              <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-100 shadow border border-black/5">
                <img 
                  src={spatialLayers[activeSpatialLayer].image} 
                  alt={spatialLayers[activeSpatialLayer].title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A9BAE] font-bold">
                    SPECIFICATION BENCHMARK
                  </span>
                  <h4 className="text-2xl font-bold font-display text-black mt-1">
                    {spatialLayers[activeSpatialLayer].title}
                  </h4>
                  <p className="text-xs font-mono text-neutral-500 mt-1">
                    {spatialLayers[activeSpatialLayer].metric}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  {spatialLayers[activeSpatialLayer].desc}
                </p>

                <div className="pt-2">
                  <button 
                    onClick={onOpenConsultation}
                    className="text-xs font-bold uppercase tracking-wider text-black flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    <span>CONSULT ON ENGINEERING FEASIBILITY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            NEW SECTION 2: CAPABILITIES & SERVICES
            ========================================================================= */}
        <section id="services" className="py-24 px-6 lg:px-12 border-t border-black/10 bg-white">
          <div className="max-w-5xl mx-auto space-y-12">
            
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400">
                OUR DISCIPLINES
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-black">
                Design & Build Capabilities
              </h2>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
              {disciplines.map((disc) => (
                <div 
                  key={disc.number}
                  className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-neutral-50/70 transition-colors px-2"
                >
                  <div className="md:col-span-1 text-sm font-mono font-bold text-neutral-400">
                    {disc.number}
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-black group-hover:text-[#5A9BAE] transition-colors">
                      {disc.title}
                    </h3>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {disc.focus}
                    </p>
                  </div>
                  <div className="md:col-span-2 text-left md:text-right">
                    <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">
                      {disc.timeline}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            NEW SECTION 3: COMPLETE SELECTED WORKS INDEX (Sortable Archive Table)
            ========================================================================= */}
        <section id="archive" className="py-24 px-6 lg:px-12 border-t border-black/10 bg-[#FAFAFA]">
          <div className="max-w-5xl mx-auto space-y-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400">
                  GLOBAL CHRONOLOGY
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-black mt-1">
                  Selected Works Index
                </h2>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase">
                {['ALL', 'RESIDENTIAL', 'WATERFRONT', 'TOWERS', 'CULTURAL'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveArchiveFilter(f)}
                    className={`px-3 py-1.5 rounded-full transition-all ${
                      activeArchiveFilter === f 
                        ? 'bg-black text-white' 
                        : 'bg-white text-neutral-500 hover:text-black border border-black/10'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Works Table */}
            <div className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-50 border-b border-black/10 text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                    <tr>
                      <th className="py-4 px-6">Project Title</th>
                      <th className="py-4 px-6">Location</th>
                      <th className="py-4 px-6">Typology</th>
                      <th className="py-4 px-6">Scale</th>
                      <th className="py-4 px-6">Year</th>
                      <th className="py-4 px-6 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    {filteredArchive.map((item, idx) => (
                      <tr 
                        key={idx}
                        onClick={onOpenConsultation}
                        className="hover:bg-neutral-50 cursor-pointer transition-colors"
                      >
                        <td className="py-4 px-6 font-bold text-black font-display">
                          {item.title}
                        </td>
                        <td className="py-4 px-6 text-neutral-500 font-mono">
                          {item.location}
                        </td>
                        <td className="py-4 px-6 text-neutral-500">
                          {item.category}
                        </td>
                        <td className="py-4 px-6 text-neutral-500 font-mono">
                          {item.scale}
                        </td>
                        <td className="py-4 px-6 text-neutral-500 font-mono">
                          {item.year}
                        </td>
                        <td className="py-4 px-6 text-right font-semibold text-black">
                          {item.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            NEW SECTION 4: DIRECT STUDIO CONSULTATION CALLOUT
            ========================================================================= */}
        <section className="py-24 px-6 lg:px-12 border-t border-black/10 bg-[#18181A] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#5A9BAE]">
              DIRECT ATELIER DIALOGUE
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold font-display tracking-tight text-white uppercase">
              Start Your Architecture
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto font-light leading-relaxed">
              We collaborate on private residential and civic commissions globally. Schedule an architectural feasibility review with our lead partners.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onOpenConsultation}
                className="px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-xl"
              >
                REQUEST PROJECT CONSULTATION
              </button>
              <a 
                href="mailto:contact@arkitect.design"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                DIRECT PARTNER DESK
              </a>
            </div>
          </div>
        </section>


        {/* =========================================================================
            5. COMPACT MINIMAL FOOTER
            ========================================================================= */}
        <footer className="border-t border-black/10 py-12 px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-6 bg-white">
          <div className="space-y-1">
            <span className="font-bold text-black font-sans lowercase text-base">arkitect<span className="text-[#5A9BAE] font-mono">*</span></span>
            <p className="text-[11px] text-neutral-400">Offices: Sydney · Copenhagen · Barcelona · New York</p>
          </div>

          <div className="flex gap-8 text-neutral-600 font-medium">
            <a href="#deck" className="hover:text-black">Projects</a>
            <a href="#layers" className="hover:text-black">3D Anatomy</a>
            <a href="#services" className="hover:text-black">Capabilities</a>
            <a href="#archive" className="hover:text-black">Index</a>
          </div>
          
          <button 
            onClick={onOpenConsultation}
            className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider transition-colors shadow"
          >
            COMMISSION A PROJECT
          </button>
        </footer>

      </div>

      {/* =========================================================================
          6. 3D PROJECT CASE STUDY DRAWER MODAL
          ========================================================================= */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
          <div 
            className="relative w-full max-w-4xl bg-white text-black rounded-[36px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top */}
            <div 
              className="p-8 text-white flex items-center justify-between"
              style={{ backgroundColor: selectedCard.bgColor }}
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase opacity-80">
                  {selectedCard.number} · {selectedCard.location} · {selectedCard.year}
                </span>
                <h3 className="text-3xl sm:text-5xl font-serif uppercase tracking-tight mt-1">
                  {selectedCard.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedCard(null)}
                className="w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto space-y-6">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-black/10">
                <img src={selectedCard.image} alt={selectedCard.title} className="w-full h-full object-cover" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
                <div className="md:col-span-7 space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-black">
                    Architectural Narrative
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    {selectedCard.description}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    Engineered through dynamic computational modeling to optimize solar heat gain and natural prevailing wind currents.
                  </p>
                </div>

                <div className="md:col-span-5 bg-neutral-50 p-5 rounded-2xl border border-black/5 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-black">
                    Specifications
                  </h4>
                  <div className="space-y-2 text-xs text-neutral-600">
                    <div className="flex justify-between pb-1 border-b border-black/5">
                      <span className="text-neutral-400">Scale</span>
                      <span className="font-semibold text-black">{selectedCard.specs.scale}</span>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-black/5">
                      <span className="text-neutral-400">Facade</span>
                      <span className="font-semibold text-black">{selectedCard.specs.facade}</span>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-black/5">
                      <span className="text-neutral-400">Accolades</span>
                      <span className="font-semibold text-black">{selectedCard.specs.awards}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedCard(null);
                    onOpenConsultation();
                  }}
                  className="px-8 py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-bold tracking-widest uppercase transition-all shadow"
                >
                  INQUIRE ON THIS ARCHITECTURE
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
