import React, { useState } from 'react';
import PreviewSwitcher from './components/PreviewSwitcher';
import VividaDesign from './concepts/VividaDesign';
import AtelierNoirDesign from './concepts/AtelierNoirDesign';
import CelesteDesign from './concepts/CelesteDesign';
import SonderHouseDesign from './concepts/SonderHouseDesign';
import Arkitect3DDesign from './concepts/Arkitect3DDesign';
import SpazioMilanoDesign from './concepts/SpazioMilanoDesign';
import ConceptPlaceholder from './concepts/ConceptPlaceholder';
import ConsultationModal from './components/ConsultationModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  // Check URL query param for concept, default to 'vivida'
  const getInitialConcept = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('concept') || 'concept-5'; // Default to the newly requested 3D design if wanted, or retain parameter
  };

  const [currentConcept, setCurrentConcept] = useState(getInitialConcept);
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [isBarHidden, setIsBarHidden] = useState(false);
  
  // Modals state
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync concept with URL query parameter without full reload
  const handleSelectConcept = (id) => {
    setCurrentConcept(id);
    const url = new URL(window.location.href);
    url.searchParams.set('concept', id);
    window.history.replaceState({}, '', url);
  };

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col font-sans">
      
      {/* 1. Persistent Top Preview Switcher Bar */}
      <PreviewSwitcher
        currentConcept={currentConcept}
        onSelectConcept={handleSelectConcept}
        viewMode={viewMode}
        onChangeViewMode={setViewMode}
        isBarHidden={isBarHidden}
        setIsBarHidden={setIsBarHidden}
      />

      {/* 2. Main Content Wrapper with Viewport Simulation Support */}
      <main className="flex-1 w-full flex justify-center items-start overflow-x-hidden">
        <div 
          className={`transition-all duration-300 w-full ${
            viewMode === 'mobile' 
              ? 'max-w-[390px] my-6 rounded-[36px] overflow-hidden shadow-2xl border-[8px] border-neutral-800' 
              : viewMode === 'tablet' 
              ? 'max-w-[768px] my-6 rounded-[28px] overflow-hidden shadow-2xl border-[8px] border-neutral-800' 
              : 'max-w-none'
          }`}
        >
          {currentConcept === 'vivida' ? (
            <VividaDesign 
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenProject={(proj) => setSelectedProject(proj)}
            />
          ) : currentConcept === 'concept-2' ? (
            <AtelierNoirDesign
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenProject={(proj) => setSelectedProject(proj)}
            />
          ) : currentConcept === 'concept-3' ? (
            <CelesteDesign
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenProject={(proj) => setSelectedProject(proj)}
            />
          ) : currentConcept === 'concept-4' ? (
            <SonderHouseDesign
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenProject={(proj) => setSelectedProject(proj)}
            />
          ) : currentConcept === 'concept-5' ? (
            <Arkitect3DDesign
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenProject={(proj) => setSelectedProject(proj)}
            />
          ) : currentConcept === 'concept-6' ? (
            <SpazioMilanoDesign
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenProject={(proj) => setSelectedProject(proj)}
            />
          ) : (
            <ConceptPlaceholder 
              conceptId={currentConcept}
              onSwitchToVivida={() => handleSelectConcept('vivida')}
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          )}
        </div>
      </main>

      {/* 3. Global Modals */}
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <ProjectModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookConsultation={() => setIsConsultationOpen(true)}
      />

    </div>
  );
}
