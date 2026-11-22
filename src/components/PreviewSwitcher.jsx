import React, { useState } from 'react';
import { 
  ChevronDown, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Share2, 
  Check,
  Layers
} from 'lucide-react';

export const CONCEPTS = [
  {
    id: 'vivida',
    number: '01',
    name: 'Concept 1: Vivida — Warm Architectural Minimalist',
    shortName: 'Concept 1: Vivida',
    status: 'Ready (Full)',
    tagline: 'Warm oak, quiet luxury, editorial typography, structured grid',
    palette: ['#171513', '#F5F2EB', '#C4A482', '#3A2D23']
  },
  {
    id: 'concept-2',
    number: '02',
    name: 'Concept 2: Atelier Noir — High-End Dark Luxury',
    shortName: 'Concept 2: Atelier Noir',
    status: 'Ready (Full)',
    tagline: 'Moody charcoal, brushed champagne brass, chiaroscuro lighting, monolithic stone',
    palette: ['#0E0E10', '#1C1C21', '#C6A875', '#E4E4E6']
  },
  {
    id: 'concept-3',
    number: '03',
    name: 'Concept 3: Céleste — Ethereal Pinterest Sanctuary',
    shortName: 'Concept 3: Céleste',
    status: 'Ready (Full)',
    tagline: 'Sun-drenched limewash, soft cloud curves, sheer linen, heaven-like tranquility',
    palette: ['#FAF8F5', '#EAE4DC', '#8F877C', '#2C2926']
  },
  {
    id: 'concept-4',
    number: '04',
    name: 'Concept 4: Sonder House — Modern Nature Villas',
    shortName: 'Concept 4: Sonder House',
    status: 'Ready (Full)',
    tagline: 'GSAP smooth animations, modern cubic architecture, private nature reserve',
    palette: ['#FFFFFF', '#111111', '#758B9F', '#E5E7EB']
  },
  {
    id: 'concept-5',
    number: '05',
    name: 'Concept 5: Arkitect* — 3D Spatial Depth Deck',
    shortName: 'Concept 5: Arkitect*',
    status: 'Ready (Full)',
    tagline: 'Three.js depth layer, 3D card tilt & stacking, sculptural modern architecture',
    palette: ['#96A8B6', '#5A9BAE', '#A3777A', '#111113']
  },
  {
    id: 'concept-6',
    number: '06',
    name: 'Concept 6: Spazio Milano — Italian Haute Architecture',
    shortName: 'Concept 6: Spazio Milano',
    status: 'Ready (Full)',
    tagline: 'Milanese palazzos, Ceppo di Gré stone, Noce Canaletto walnut, Italian bilingual rigor',
    palette: ['#F4F1EA', '#1B1917', '#B38E5B', '#8C8C88']
  }
];

export default function PreviewSwitcher({ 
  currentConcept, 
  onSelectConcept, 
  viewMode, 
  onChangeViewMode,
  isBarHidden,
  setIsBarHidden
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeConcept = CONCEPTS.find(c => c.id === currentConcept) || CONCEPTS[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isBarHidden) {
    return (
      <button
        onClick={() => setIsBarHidden(false)}
        className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-[#171513]/90 backdrop-blur-md text-white text-xs font-medium px-3.5 py-2 rounded-full shadow-2xl hover:bg-black transition-all border border-white/20 animate-fade-in"
      >
        <Layers className="w-3.5 h-3.5 text-amber-300" />
        <span>Switch Design ({activeConcept.number})</span>
        <Eye className="w-3.5 h-3.5 opacity-70" />
      </button>
    );
  }

  return (
    <div className="sticky top-0 z-50 bg-[#171513] text-white border-b border-white/10 shadow-xl backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        
        {/* Left: Client Presentation Branding & Dropdown */}
        <div className="flex items-center gap-3 relative">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/10 text-[11px] font-semibold tracking-wider text-amber-300 uppercase">
            <Sparkles className="w-3 h-3" />
            <span>Design Studio Mockup</span>
          </div>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide border border-white/10 transition-colors"
            >
              <span className="text-white">{activeConcept.name}</span>
              <span className="px-1.5 py-0.2 text-[10px] rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                {activeConcept.status}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setDropdownOpen(false)}
                />
                <div className="absolute left-0 mt-2 w-96 rounded-lg bg-[#1E1B18] border border-white/15 shadow-2xl z-50 overflow-hidden py-1.5 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-2 border-b border-white/10 text-[11px] font-medium text-neutral-400 uppercase tracking-wider flex justify-between items-center">
                    <span>Select Client Concept to View</span>
                    <span className="text-[10px] text-neutral-400">5 Options</span>
                  </div>
                  
                  <div className="divide-y divide-white/5">
                    {CONCEPTS.map((concept) => {
                      const isSelected = concept.id === currentConcept;
                      return (
                        <button
                          key={concept.id}
                          onClick={() => {
                            onSelectConcept(concept.id);
                            setDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2.5 hover:bg-white/10 transition-colors flex items-start justify-between gap-3 ${
                            isSelected ? 'bg-white/15 border-l-4 border-amber-400' : ''
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-white tracking-tight">
                                {concept.name}
                              </span>
                              {concept.status.includes('Ready') ? (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium">
                                  Current Mockup
                                </span>
                              ) : (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-neutral-400 font-normal">
                                  Concept
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                              {concept.tagline}
                            </p>
                          </div>

                          {/* Color Swatches */}
                          <div className="flex gap-1 items-center pt-1">
                            {concept.palette.map((color, idx) => (
                              <span 
                                key={idx} 
                                className="w-2.5 h-2.5 rounded-full border border-black/40"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="px-3 py-2 bg-black/40 border-t border-white/10 text-[11px] text-neutral-400 flex items-center justify-between">
                    <span>Client switches seamlessly on 1 link</span>
                    <span className="text-amber-300 font-semibold">Zero lost tabs</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Center: Design Vibe Pill (Desktop Only) */}
        <div className="hidden xl:flex items-center gap-2 text-xs text-neutral-400 max-w-md truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="truncate italic">{activeConcept.tagline}</span>
        </div>

        {/* Right: Device Viewport Simulation & Actions */}
        <div className="flex items-center gap-2">
          {/* Viewport Toggles */}
          <div className="hidden sm:flex items-center bg-white/10 p-0.5 rounded-md border border-white/10">
            <button
              onClick={() => onChangeViewMode('desktop')}
              title="Desktop View (Full Width)"
              className={`p-1.5 rounded text-xs transition-colors ${viewMode === 'desktop' ? 'bg-white text-black font-semibold shadow' : 'text-neutral-400 hover:text-white'}`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onChangeViewMode('tablet')}
              title="Tablet Preview (768px)"
              className={`p-1.5 rounded text-xs transition-colors ${viewMode === 'tablet' ? 'bg-white text-black font-semibold shadow' : 'text-neutral-400 hover:text-white'}`}
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onChangeViewMode('mobile')}
              title="Mobile Preview (390px)"
              className={`p-1.5 rounded text-xs transition-colors ${viewMode === 'mobile' ? 'bg-white text-black font-semibold shadow' : 'text-neutral-400 hover:text-white'}`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Copy Shareable Link */}
          <button
            onClick={handleCopyLink}
            title="Copy presentation link with current design"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/15 text-xs text-neutral-300 hover:text-white transition-colors border border-white/10"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Share</span>
              </>
            )}
          </button>

          {/* Hide Toolbar for Pure Client Experience */}
          <button
            onClick={() => setIsBarHidden(true)}
            title="Hide switcher bar to see full website without top bar"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-xs text-neutral-300 hover:text-white transition-colors border border-white/10"
          >
            <EyeOff className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Hide Bar</span>
          </button>
        </div>

      </div>
    </div>
  );
}
