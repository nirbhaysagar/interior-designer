import React from 'react';
import { X, ArrowRight, Check, MapPin, Calendar, Ruler, Layers } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose, onBookConsultation }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#F5F2EB] text-[#171513] rounded-2xl shadow-2xl border border-[#DED8CB] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-[#DED8CB] bg-[#EFECE4]">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#6E6B65] uppercase">
              {project.category || 'Architectural Project'}
            </span>
            <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#171513]">
              {project.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/10 text-[#171513] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-8 space-y-8">
          {/* Main Visual */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] shadow-lg border border-[#DED8CB]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-sm font-medium tracking-wide drop-shadow">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-[#EDEAE1] border border-[#DED8CB]">
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#6E6B65] flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Location
              </span>
              <p className="text-xs font-semibold text-[#171513]">{project.location || 'Zurich, Switzerland'}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#6E6B65] flex items-center gap-1">
                <Ruler className="w-3 h-3" /> Area
              </span>
              <p className="text-xs font-semibold text-[#171513]">{project.area || '3,450 sq ft'}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#6E6B65] flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Completion
              </span>
              <p className="text-xs font-semibold text-[#171513]">{project.year || '2025'}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#6E6B65] flex items-center gap-1">
                <Layers className="w-3 h-3" /> Scope
              </span>
              <p className="text-xs font-semibold text-[#171513]">{project.scope || 'Full Joinery & Architecture'}</p>
            </div>
          </div>

          {/* Description & Materials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#171513]">
                Design Narrative & Execution
              </h4>
              <p className="text-[#6E6B65] text-sm leading-relaxed">
                {project.narrative || `This architectural interior balances bespoke craftsmanship with timeless restraint. Every junction between material planes—from the fluted natural oak to the dark patinated bronze cabinetry—was engineered to conceal hardware and accentuate the purity of natural light.`}
              </p>
              <p className="text-[#6E6B65] text-sm leading-relaxed">
                By integrating tailored architectural storage and custom acoustic wall treatments, the space serves both as an intimate retreat and an elevated salon for entertaining.
              </p>
            </div>

            <div className="space-y-3 bg-[#EFECE4] p-5 rounded-xl border border-[#DED8CB]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#171513]">
                Materiality & Specs
              </h4>
              <ul className="space-y-2 text-xs text-[#6E6B65]">
                {(project.materials || [
                  'Quarter-sawn Natural European Oak',
                  'Patinated bronze & copper trim profiles',
                  'Calacatta Viola & Nero Marquina marble',
                  'Integrated architectural shadowline reveals',
                  'Dimmable 2700K museum-grade linear optics'
                ]).map((mat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Secondary Gallery */}
          {project.secondaryImages && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#6E6B65]">
                Detail Perspectives
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.secondaryImages.map((img, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden border border-[#DED8CB]">
                    <img src={img} alt="Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Banner inside modal */}
          <div className="p-6 rounded-xl bg-[#1D1916] text-[#F5F2EB] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold font-display uppercase tracking-wide">
                Envision a similar atmosphere for your space?
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Schedule a concept planning session with our lead architects.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="px-5 py-2.5 bg-[#F5F2EB] text-[#171513] text-xs font-bold uppercase tracking-wider rounded hover:bg-white transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Consult On This Style</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
