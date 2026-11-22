import React from 'react';
import { ArrowLeft, Sparkles, Check, ArrowRight, Eye } from 'lucide-react';
import { CONCEPTS } from '../components/PreviewSwitcher';

export default function ConceptPlaceholder({ conceptId, onSwitchToVivida, onOpenConsultation }) {
  const concept = CONCEPTS.find(c => c.id === conceptId) || CONCEPTS[1];

  const conceptDetails = {
    'concept-2': {
      title: 'Atelier Noir',
      theme: 'High-End Dark Luxury & Editorial Drama',
      accentColor: '#C6A875',
      bgColor: '#0E0E10',
      textColor: '#FFFFFF',
      surfaceColor: '#17171C',
      heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      description: 'A moody, cinematic aesthetic featuring smoked oak, dark quartzite stone, polished bronze accents, and chiaroscuro lighting.',
      features: [
        'Dark cinematic color grade with brushed champagne brass details',
        'Dramatic full-height monolithic stone fireplaces and backsplashes',
        'Concealed warm cove LEDs (2200K sunset tones)',
        'Bespoke velvet and saddle leather furniture pairing'
      ]
    },
    'concept-3': {
      title: 'Kanso Living',
      theme: 'Organic Japandi & Serene Wabi-Sabi',
      accentColor: '#8C8275',
      bgColor: '#ECE7DE',
      textColor: '#2B2B28',
      surfaceColor: '#DFD8CC',
      heroImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80',
      description: 'A minimalist sanctuary merging Japanese wabi-sabi philosophy with Scandinavian functionality—featuring raw lime wash plaster, white ash, and linen drapery.',
      features: [
        'Soft curved corners and textured micro-cement wall finishes',
        'Tactile raw ceramics, paper lanterns, and bleached timber',
        'Sun-filled open layouts with seamless indoor greenery zones',
        'Low-slung seating and organic stone podiums'
      ]
    },
    'concept-4': {
      title: 'Forma & Space',
      theme: 'Bold Architectural & Brutalist Contemporary',
      accentColor: '#E63946',
      bgColor: '#FAFAFA',
      textColor: '#0A0A0A',
      surfaceColor: '#F0F0F0',
      heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
      description: 'High-contrast graphic design inspired by art galleries and modern museums. Features raw board-formed concrete, geometric furniture, and stark typography.',
      features: [
        'Massive expressive typography and avant-garde editorial grid',
        'Exposed architectural concrete with stainless steel millwork',
        'Sculptural statement furniture pieces acting as living art',
        'Monochrome photography paired with punchy crimson accents'
      ]
    },
    'concept-5': {
      title: 'Nordic Lumina',
      theme: 'Airy Scandinavian & Warm Natural Light',
      accentColor: '#5C715E',
      bgColor: '#FDFBF7',
      textColor: '#1F2421',
      surfaceColor: '#F3EFE6',
      heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
      description: 'A warm, light-flooded sanctuary focusing on wellness, pale birch, soft bouclé fabrics, and expansive windows embracing natural greenery.',
      features: [
        'Maximized natural daylight reflections with matte pale finishes',
        'Hygge-inspired cozy nooks with Scandinavian wool textiles',
        'Sustainable eco-certified oak flooring and living plant walls',
        'Effortless family living spaces with concealed smart storage'
      ]
    }
  };

  const details = conceptDetails[conceptId] || conceptDetails['concept-2'];

  return (
    <div 
      className="min-h-screen py-16 px-6 lg:px-12 flex flex-col justify-between"
      style={{ backgroundColor: details.bgColor, color: details.textColor }}
    >
      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Top Concept Switcher Callout */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-black/10 bg-black/5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: details.accentColor }} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Preview Mode: {concept.name}
            </span>
          </div>

          <button
            onClick={onSwitchToVivida}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Concept 1 (Vivida Completed Mockup)</span>
          </button>
        </div>

        {/* Hero Preview Visual */}
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] shadow-2xl border border-black/10">
          <img 
            src={details.heroImage} 
            alt={details.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
              Concept Concept #{concept.number}
            </span>
            <h1 className="text-3xl md:text-6xl font-extrabold uppercase font-display tracking-tight mt-2">
              {details.title}
            </h1>
            <p className="text-sm md:text-lg text-white/80 max-w-xl mt-2 font-light">
              {details.theme}
            </p>
          </div>
        </div>

        {/* Concept Architecture Overview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-2xl font-bold font-display uppercase tracking-tight">
              Design Direction & Client Aesthetic
            </h3>
            <p className="text-sm md:text-base leading-relaxed opacity-80">
              {details.description}
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-80">
              This concept is ready to be developed into full interactive sections, custom project galleries, and bespoke client contact flows just like Concept 1.
            </p>
          </div>

          <div 
            className="md:col-span-5 p-6 rounded-2xl border border-black/10 shadow-sm space-y-4"
            style={{ backgroundColor: details.surfaceColor }}
          >
            <h4 className="text-xs font-bold uppercase tracking-wider">
              Key Aesthetic Pillars
            </h4>
            <ul className="space-y-2.5 text-xs">
              {details.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: details.accentColor }} />
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs opacity-70">Client feedback note:</span>
            <span className="text-xs font-bold">Use the top dropdown anytime to switch between all 5 concepts instantly.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onSwitchToVivida}
              className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider border border-current hover:opacity-75 transition-opacity"
            >
              View Concept 1 (Active Mockup)
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors shadow-lg"
            >
              Discuss This Concept
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
