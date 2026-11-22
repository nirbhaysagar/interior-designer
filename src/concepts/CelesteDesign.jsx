import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles, 
  Sun, 
  Wind, 
  Heart, 
  Filter, 
  Check, 
  Layers, 
  Menu, 
  X,
  Eye,
  SlidersHorizontal,
  Compass,
  Volume2,
  VolumeX
} from 'lucide-react';

export default function CelesteDesign({ onOpenConsultation, onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [likedSpaces, setLikedSpaces] = useState({});
  const [activeMood, setActiveMood] = useState('morning'); // 'morning' | 'golden' | 'dusk'

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedSpaces(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Curated Pinterest-aesthetic ethereal photography (airy, sun-drenched, sculptural, limewash, linen)
  const heroImages = {
    morning: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
    golden: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85",
    dusk: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
  };

  const portfolios = [
    {
      id: 'cloud-penthouse',
      title: 'The Cloud Penthouse',
      location: 'Stockholm, Sweden',
      category: 'LIVING',
      area: '3,800 sq ft',
      year: '2025',
      vibe: 'Bleached birch, curved bouclé, and sheer Belgian linen',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      aspect: 'aspect-[4/5]',
      tags: ['Curved Architecture', 'Limewash', 'Morning Sun'],
      materials: ['Hand-troweled bone plaster', 'Bleached Nordic birch', 'French bouclé', 'Calacatta cream marble'],
      story: 'Designed as a sanctuary high above the city where walls curve like clouds and light moves uninterrupted across continuous lime-wash planes.'
    },
    {
      id: 'mallorca-sanctuary',
      title: 'Sanctuary on the Coast',
      location: 'Deià, Mallorca',
      category: 'SANCTUARIES',
      area: '4,600 sq ft',
      year: '2024',
      vibe: 'Warm limestone, sculpted arched nooks, sea salt breeze',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      aspect: 'aspect-[3/4]',
      tags: ['Coastal Minimal', 'Arched Portals', 'Raw Stone'],
      materials: ['Local Santanyí sandstone', 'Lime plaster', 'Weathered reclaimed oak', 'Unbleached flax linen'],
      story: 'Every window frames the Mediterranean horizon. Interiors melt seamlessly into outdoor stone loggias with no harsh thresholds.'
    },
    {
      id: 'provence-villa',
      title: 'The Alabaster Villa',
      location: 'Gordes, Provence',
      category: 'SANCTUARIES',
      area: '5,200 sq ft',
      year: '2025',
      vibe: 'Honed travertine slabs, olive garden views, whisper acoustics',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      aspect: 'aspect-[16/11]',
      tags: ['Sun Drenched', 'Travertine', 'Monolithic Baths'],
      materials: ['Honed Navona travertine', 'Raw clay paint', 'Matte bronze details', 'Handwoven wool rugs'],
      story: 'Subtle shadows stretch across honed stone floors. A quiet meditation on proportion, sunlight, and European craft.'
    },
    {
      id: 'kyoto-salon',
      title: 'Morning Light Salon',
      location: 'Kyoto, Japan',
      category: 'LIVING',
      area: '2,400 sq ft',
      year: '2024',
      vibe: 'Washi paper pendants, hinoki cedar, soft tatami borders',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      aspect: 'aspect-[4/5]',
      tags: ['Japandi Poetry', 'Hinoki Cedar', 'Shadowplay'],
      materials: ['Aromatic Hinoki wood', 'Handmade Echizen washi paper', 'Volcanic pumice stone', 'Linen screens'],
      story: 'A peaceful residence built around an internal courtyard garden. When the shoji screens slide open, birdsong fills the room.'
    },
    {
      id: 'serene-bath',
      title: 'The Alabaster Bathing Chamber',
      location: 'Zurich, Switzerland',
      category: 'BATHS & WELLNESS',
      area: '950 sq ft',
      year: '2025',
      vibe: 'Monolithic soaking tub sculpted from a single travertine block',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      aspect: 'aspect-[3/4]',
      tags: ['Wellness Sanctuary', 'Microcement', 'Rainfall Sky'],
      materials: ['Carved Roman travertine', 'Seamless micro-cement', 'Concealed thermostatic warm brass', 'Cedar slat ceiling'],
      story: 'Water cascades from a concealed ceiling slot into a heated monolithic tub surrounded by soft acoustic plaster.'
    },
    {
      id: 'linen-sleeping-suite',
      title: 'The Haven Bedchamber',
      location: 'Copenhagen, Denmark',
      category: 'BEDROOMS',
      area: '1,450 sq ft',
      year: '2025',
      vibe: 'Floating oak platform bed, acoustic fabric headwall, diffused light',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
      aspect: 'aspect-[4/5]',
      tags: ['Deep Rest', 'Acoustic Wall', 'Organic Linen'],
      materials: ['Nordic White Oak', 'Raw organic linen upholstery', 'Concealed ambient 2400K night glow', 'Wool felt padding'],
      story: 'Zero electronic clutter. Sound levels drop below 18dB thanks to architectural acoustic fabric wall wraps.'
    },
    {
      id: 'soho-solarium',
      title: 'The Glass & Plaster Solarium',
      location: 'SoHo, New York',
      category: 'JOINERY',
      area: '3,200 sq ft',
      year: '2024',
      vibe: 'High airy ceilings, fluted translucent glass, minimalist daybed',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
      aspect: 'aspect-[16/10]',
      tags: ['Light Architecture', 'Bespoke Millwork', 'Curated Art'],
      materials: ['Fluted architectural glass', 'Champagne metal frames', 'Warm lime render', 'Sculptural plaster plinths'],
      story: 'An ethereal conversion of an old cast-iron loft into a luminous light well with seamless pocketing storage.'
    },
    {
      id: 'byron-bay-retreat',
      title: 'The Linen & Stone Pavilion',
      location: 'Byron Bay, Australia',
      category: 'SANCTUARIES',
      area: '4,100 sq ft',
      year: '2025',
      vibe: 'Airy timber beams, sunken lounger, woven jute & soft ocean breeze',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      aspect: 'aspect-[4/5]',
      tags: ['Warm Earth', 'Sunken Living', 'Natural Air'],
      materials: ['Australian Blackbutt timber', 'Hand-loomed jute', 'Raw lime wash', 'Riverbed stone'],
      story: 'Floors drop 40cm into a cushioned conversation salon enveloped in floor-to-ceiling sheer linen that billows with coastal breezes.'
    }
  ];

  const filteredPortfolios = activeFilter === 'ALL'
    ? portfolios
    : portfolios.filter(p => p.category === activeFilter);

  const aestheticNotes = [
    {
      number: '01',
      title: 'LUMINOUS QUIETUDE',
      tagline: 'Light as the primary material',
      desc: 'We position walls to catch morning light and diffuse harsh midday glare into a soft, velvety radiance that calms the central nervous system.'
    },
    {
      number: '02',
      title: 'CURVED SOFTNESS',
      tagline: 'Zero aggressive angles',
      desc: 'Rooms flow naturally like water. Corners are rounded with hand-troweled lime plaster to eliminate tension and invite effortless movement.'
    },
    {
      number: '03',
      title: 'BREATHABLE MATERIALS',
      tagline: 'Pure organic tactile connection',
      desc: 'Untreated linen, raw clay plaster, honed stone, and pale cedar. Materials that breathe, regulate indoor humidity, and feel soothing to touch.'
    },
    {
      number: '04',
      title: 'ACOUSTIC SILENCE',
      tagline: 'The luxury of pure quiet',
      desc: 'Subtle sound-absorbing acoustic felts concealed behind linen panels bring reverberation times down to meditative, whisper-soft levels.'
    }
  ];

  const moodboardItems = [
    {
      title: 'Hand-Troweled Bone Plaster',
      category: 'Surface',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Sheer French Flax Linen',
      category: 'Textile',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Raw Navona Travertine',
      category: 'Stone',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Bleached European Birch',
      category: 'Joinery',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2926] font-sans selection:bg-[#EAE4DC] selection:text-[#1F1D1A]">
      
      {/* =========================================================================
          1. ETHEREAL PRE-BAR / GENTLE MOOD STATUS
          ========================================================================= */}
      <div className="w-full bg-[#F3EFEA] border-b border-[#E8E2D8] py-2 px-6 text-[10px] tracking-[0.25em] uppercase text-[#7A746B] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7B7A3] animate-pulse" />
          <span className="font-medium text-[#4D4841]">CÉLESTE · MEDITATIVE RESIDENCES & SANCTUARIES</span>
        </div>
        
        {/* Soft Mood Lighting Switcher */}
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-[9px] tracking-widest text-[#9C9488]">LIGHT MOOD:</span>
          <div className="flex items-center gap-1.5 bg-white/70 px-2 py-0.5 rounded-full border border-[#E0D8CC]">
            <button
              onClick={() => setActiveMood('morning')}
              className={`px-2 py-0.5 rounded-full text-[9px] font-semibold transition-all ${
                activeMood === 'morning' ? 'bg-[#2C2926] text-white' : 'text-[#7A746B] hover:text-black'
              }`}
            >
              Morning Sun
            </button>
            <button
              onClick={() => setActiveMood('golden')}
              className={`px-2 py-0.5 rounded-full text-[9px] font-semibold transition-all ${
                activeMood === 'golden' ? 'bg-[#2C2926] text-white' : 'text-[#7A746B] hover:text-black'
              }`}
            >
              Golden Hour
            </button>
            <button
              onClick={() => setActiveMood('dusk')}
              className={`px-2 py-0.5 rounded-full text-[9px] font-semibold transition-all ${
                activeMood === 'dusk' ? 'bg-[#2C2926] text-white' : 'text-[#7A746B] hover:text-black'
              }`}
            >
              Twilight Calm
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. DELICATE FLOATING HEADER
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/85 backdrop-blur-md border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          
          {/* Poetic Brand Logo */}
          <div className="space-y-0.5">
            <a href="#hero" className="text-2xl sm:text-3xl font-serif italic tracking-wide text-[#2C2926] hover:opacity-80 transition-opacity">
              céleste
            </a>
            <span className="block text-[9px] tracking-[0.3em] uppercase text-[#8F877C] font-light">
              ARCHITECTURE OF TRANQUILITY
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-[11px] font-medium tracking-[0.2em] uppercase text-[#6B655D]">
            <button onClick={() => scrollTo('portfolios')} className="hover:text-[#2C2926] transition-colors">
              SANCTUARIES ({portfolios.length})
            </button>
            <button onClick={() => scrollTo('aesthetic')} className="hover:text-[#2C2926] transition-colors">
              THE SENSES
            </button>
            <button onClick={() => scrollTo('moodboard')} className="hover:text-[#2C2926] transition-colors">
              MATERIAL ARCHIVE
            </button>
            <button onClick={() => scrollTo('philosophy')} className="hover:text-[#2C2926] transition-colors">
              ABOUT
            </button>
          </nav>

          {/* Consultation Action */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 bg-[#2C2926] text-[#FAF8F5] text-[11px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-black transition-all shadow-sm hover:shadow-md"
            >
              BEGIN A SANCTUARY
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#2C2926] p-2"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-b border-[#EAE4DC] px-6 py-6 space-y-4 text-center">
            <button onClick={() => scrollTo('portfolios')} className="block w-full py-2 text-xs font-medium tracking-widest uppercase text-[#2C2926]">
              SANCTUARIES
            </button>
            <button onClick={() => scrollTo('aesthetic')} className="block w-full py-2 text-xs font-medium tracking-widest uppercase text-[#2C2926]">
              THE SENSES
            </button>
            <button onClick={() => scrollTo('moodboard')} className="block w-full py-2 text-xs font-medium tracking-widest uppercase text-[#2C2926]">
              MATERIAL ARCHIVE
            </button>
            <button onClick={() => scrollTo('philosophy')} className="block w-full py-2 text-xs font-medium tracking-widest uppercase text-[#2C2926]">
              ABOUT
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-[#2C2926] text-[#FAF8F5] text-xs font-medium tracking-widest uppercase rounded-full mt-4"
            >
              BEGIN A SANCTUARY
            </button>
          </div>
        )}
      </header>


      {/* =========================================================================
          3. ETHEREAL HEAVENLY HERO SECTION
          ========================================================================= */}
      <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#EFECE6]">
        
        {/* Luminous Background Image with Soft Heavenly Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImages[activeMood]} 
            alt="Heavenly Ethereal Interior" 
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[0.98] transition-all duration-1000"
          />
          {/* Gentle ethereal gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/30 to-white/40" />
        </div>

        {/* Hero Body Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20 lg:pt-28 pb-16 flex-1 flex flex-col justify-between">
          
          {/* Subtle Tag & Poetic Headline */}
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-[#E0D8CC] text-[#7A746B] text-[10px] font-medium tracking-[0.25em] uppercase">
              <Sparkles className="w-3 h-3 text-[#A89885]" />
              <span>SPACES SCULPTED IN PURE LIGHT</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic text-[#1F1D1A] tracking-tight leading-[0.96]">
              spaces that feel<br />
              <span className="not-italic font-light text-[#59534B]">like heaven.</span>
            </h1>

            <p className="text-sm md:text-lg text-[#59534B] max-w-lg font-light leading-relaxed pt-2">
              Subtle, quiet, meditative interiors designed to soften the world outside. Natural bone limewash, warm morning sunbeams, and floating organic forms.
            </p>
          </div>

          {/* Lower Hero Grid: Pinterest-style Mood Tags & Actions */}
          <div className="pt-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-[#2C2926]/10">
            
            {/* Pinterest Mood Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {['Sunken Lounges', 'Diffused Linen Light', 'Curved Limewash', 'Zero Visual Clutter'].map((badge) => (
                <span 
                  key={badge}
                  className="px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-[#E2DAD0] text-[11px] text-[#59534B] font-light"
                >
                  #{badge}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => scrollTo('portfolios')}
                className="px-6 py-3 rounded-full bg-white/90 hover:bg-white text-[#2C2926] text-xs font-medium tracking-wider uppercase border border-[#DDD5CA] shadow-sm transition-all"
              >
                EXPLORE SANCTUARIES
              </button>

              <button 
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-full bg-[#2C2926] hover:bg-black text-[#FAF8F5] text-xs font-medium tracking-wider uppercase shadow-md transition-all flex items-center gap-2"
              >
                <span>COMMISSION A RETREAT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          4. EXTENSIVE PINTEREST-AESTHETIC PORTFOLIO GALLERY (8 Sanctuaries!)
          ========================================================================= */}
      <section id="portfolios" className="py-28 bg-[#FAF8F5] border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Section Header with Category Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E0D8CC]">
            <div>
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#8F877C]">
                CURATED ARCHIVE · 8 WORKS
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif italic text-[#1F1D1A] tracking-tight mt-1">
                living sanctuaries
              </h2>
            </div>

            {/* Aesthetic Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {['ALL', 'SANCTUARIES', 'LIVING', 'BATHS & WELLNESS', 'BEDROOMS', 'JOINERY'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full transition-all text-[11px] font-medium tracking-wider ${
                    activeFilter === cat 
                      ? 'bg-[#2C2926] text-[#FAF8F5] shadow-sm' 
                      : 'bg-white/60 text-[#7A746B] hover:bg-white hover:text-[#2C2926] border border-[#EAE4DC]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Pinterest-Inspired Editorial Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolios.map((space) => {
              const isLiked = likedSpaces[space.id];
              return (
                <div 
                  key={space.id}
                  className="group flex flex-col justify-between space-y-4"
                >
                  {/* Image Card with Subtle Hover Lift */}
                  <div 
                    onClick={() => onOpenProject({
                      title: space.title,
                      subtitle: space.vibe,
                      category: space.category,
                      location: space.location,
                      area: space.area,
                      year: space.year,
                      image: space.image,
                      materials: space.materials,
                      narrative: space.story,
                      scope: 'Turnkey Architectural Sanctuary'
                    })}
                    className={`relative ${space.aspect} rounded-2xl overflow-hidden bg-[#ECE7DF] cursor-pointer shadow-sm group-hover:shadow-xl transition-all duration-500 border border-[#EAE4DC]`}
                  >
                    <img 
                      src={space.image} 
                      alt={space.title}
                      className="w-full h-full object-cover filter brightness-[0.96] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out" 
                    />
                    
                    {/* Top Location Pill & Pinterest Pin / Save Heart */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 bg-white/85 backdrop-blur-md rounded-full text-[10px] font-medium tracking-wider text-[#4D4841] uppercase shadow-sm">
                        {space.location}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => toggleLike(space.id, e)}
                        className={`pointer-events-auto p-2 rounded-full backdrop-blur-md transition-all ${
                          isLiked 
                            ? 'bg-rose-50 text-rose-500 shadow' 
                            : 'bg-white/80 text-[#7A746B] hover:text-black hover:bg-white'
                        }`}
                        title="Save to Client Moodboard"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Bottom Reveal on Hover */}
                    <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between">
                      <span className="text-xs font-serif italic">View Spatial Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Narrative & Tags */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-serif italic text-[#1F1D1A] tracking-tight group-hover:text-[#8F877C] transition-colors">
                        {space.title}
                      </h3>
                      <span className="text-[10px] text-[#9C9488] font-mono">{space.area}</span>
                    </div>

                    <p className="text-xs text-[#6B655D] font-light leading-relaxed line-clamp-2">
                      {space.vibe}
                    </p>

                    {/* Pinterest Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {space.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-0.5 rounded-full bg-[#EFECE6] text-[10px] text-[#7A746B] font-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button 
                        onClick={() => onOpenProject({
                          title: space.title,
                          subtitle: space.vibe,
                          category: space.category,
                          location: space.location,
                          area: space.area,
                          year: space.year,
                          image: space.image,
                          materials: space.materials,
                          narrative: space.story,
                          scope: 'Turnkey Architectural Sanctuary'
                        })}
                        className="text-[11px] font-medium tracking-wider uppercase text-[#2C2926] hover:underline flex items-center gap-1"
                      >
                        <span>INSPECT SANCTUARY</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Callout */}
          <div className="mt-20 p-8 rounded-3xl bg-[#F3EFEA] border border-[#E2DAD0] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h4 className="text-xl font-serif italic text-[#1F1D1A]">
                Have a specific Pinterest board or space inspiration?
              </h4>
              <p className="text-xs text-[#7A746B] font-light mt-1">
                We translate your saved imagery into real architectural drawing sets and turnkey bespoke fabrication.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3 rounded-full bg-[#2C2926] text-[#FAF8F5] text-xs font-medium tracking-wider uppercase hover:bg-black transition-all shrink-0 shadow-sm"
            >
              SHARE YOUR INSPIRATION BOARD
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          5. THE SENSES: ARCHITECTURAL MEDITATION & CALM
          ========================================================================= */}
      <section id="aesthetic" className="py-28 bg-[#F3EFEA] border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="max-w-2xl space-y-3 mb-16">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#8F877C]">
              THE 4 PILLARS OF SERENITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif italic text-[#1F1D1A] tracking-tight">
              how calm is engineered
            </h2>
            <p className="text-xs sm:text-sm text-[#6B655D] font-light leading-relaxed">
              True aesthetic serenity is not accidental. We construct environments that gently lower blood pressure through light orientation, soft acoustic dampening, and biological tactile materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aestheticNotes.map((note) => (
              <div 
                key={note.number}
                className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E2DAD0] hover:border-[#8F877C] transition-colors flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div>
                  <span className="text-2xl font-serif italic text-[#A89885] block pb-4 border-b border-[#EAE4DC]">
                    {note.number}
                  </span>
                  <h3 className="text-base font-serif italic text-[#1F1D1A] tracking-tight mt-4">
                    {note.title}
                  </h3>
                  <p className="text-[11px] font-medium text-[#8F877C] uppercase tracking-wider mt-1">
                    {note.tagline}
                  </p>
                  <p className="text-xs text-[#6B655D] leading-relaxed font-light mt-3">
                    {note.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE4DC] flex items-center justify-between text-[10px] text-[#8F877C] uppercase tracking-wider">
                  <span>Natural Standard</span>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          6. PINTEREST MATERIAL ARCHIVE / TACTILE MOODBOARD
          ========================================================================= */}
      <section id="moodboard" className="py-28 bg-[#FAF8F5] border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E0D8CC] mb-14">
            <div>
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#8F877C]">
                TACTILE SAMPLER
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif italic text-[#1F1D1A] tracking-tight mt-1">
                the material moodboard
              </h2>
            </div>
            <p className="text-xs text-[#7A746B] font-light max-w-sm">
              We send our prospective patrons a custom wooden box containing raw plaster stones, linen swatches, and aromatic cedar blocks.
            </p>
          </div>

          {/* 4-Item Tactile Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moodboardItems.map((item, idx) => (
              <div 
                key={idx}
                className="group rounded-2xl overflow-hidden bg-white border border-[#E2DAD0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-[#ECE7DF]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.97]" 
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-[#8F877C] font-semibold">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-serif italic text-[#1F1D1A]">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          7. PHILOSOPHY & GENTLE MANIFESTO
          ========================================================================= */}
      <section id="philosophy" className="py-28 bg-[#F3EFEA] border-b border-[#EAE4DC] text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#8F877C]">
            OUR BELIEF
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-[#1F1D1A] leading-tight">
            "We believe your home should be the kindest place on earth. A soft exhale when you step through the door."
          </h2>
          <p className="text-xs sm:text-sm text-[#6B655D] font-light leading-relaxed max-w-xl mx-auto">
            Céleste is an architectural atelier creating calm, light-filled sanctuaries across Stockholm, Kyoto, Copenhagen, and Provence.
          </p>

          <div className="pt-6">
            <button 
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-full bg-[#2C2926] text-[#FAF8F5] text-xs font-medium tracking-wider uppercase hover:bg-black transition-all shadow-md"
            >
              SCHEDULE A GENTLE DISCOVERY CALL
            </button>
          </div>
        </div>
      </section>


      {/* =========================================================================
          8. FOOTER
          ========================================================================= */}
      <footer className="py-16 bg-[#FAF8F5] text-[#2C2926]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E0D8CC]">
            <div className="md:col-span-5 space-y-3">
              <span className="text-2xl font-serif italic text-[#1F1D1A]">céleste</span>
              <p className="text-xs text-[#7A746B] leading-relaxed max-w-sm font-light">
                Interior architecture atelier shaping tranquil residences, calm retreat pavilions, and bespoke natural joinery worldwide.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2">
              <h4 className="text-[10px] font-semibold uppercase tracking-widest text-[#8F877C]">Salons & Studios</h4>
              <p className="text-xs text-[#7A746B] font-light leading-relaxed">
                Strandvägen 7, Stockholm<br />
                Gion District, Kyoto<br />
                Gordes, Provence<br />
                SoHo, New York
              </p>
            </div>

            <div className="md:col-span-4 space-y-2">
              <h4 className="text-[10px] font-semibold uppercase tracking-widest text-[#8F877C]">Pinterest & Social</h4>
              <p className="text-xs text-[#7A746B] font-light">
                hello@celeste.design · Pinterest @celestestudio
              </p>
              <div className="pt-2 flex gap-4 text-xs text-[#7A746B]">
                <a href="#" className="hover:text-black">Pinterest</a>
                <a href="#" className="hover:text-black">Instagram</a>
                <a href="#" className="hover:text-black">Architectural Digest</a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#9C9488] tracking-wider uppercase">
            <p>© {new Date().getFullYear()} CÉLESTE ARCHITECTURAL ATELIER. ALL RIGHTS RESERVED.</p>
            <p>PINTEREST CURATION & CLIENT PRESENTATION</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
