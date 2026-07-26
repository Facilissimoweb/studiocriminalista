import React, { useState } from 'react';
import { NavTab, Methodology, Dossier } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { IndaginiView } from './components/IndaginiView';
import { MetodologieView } from './components/MetodologieView';
import { ContattiView } from './components/ContattiView';
import { DetailDrawer } from './components/DetailDrawer';
import { TriageModal } from './components/TriageModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedMethodology, setSelectedMethodology] = useState<Methodology | null>(null);
  const [selectedDossier, setSelectedDossier] = useState<Dossier | null>(null);
  const [isTriageOpen, setIsTriageOpen] = useState(false);
  const [preselectedCode, setPreselectedCode] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenMethodologyDetail = (m: Methodology) => {
    setSelectedMethodology(m);
    setSelectedDossier(null);
    setIsDrawerOpen(true);
  };

  const handleOpenDossierDetail = (d: Dossier) => {
    setSelectedDossier(d);
    setSelectedMethodology(null);
    setIsDrawerOpen(true);
  };

  const handleOpenTriage = (code?: string) => {
    setPreselectedCode(code);
    setIsTriageOpen(true);
  };

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query);
    setCurrentTab('metodologie');
  };

  return (
    <div className="min-h-screen bg-[#fbf9fb] text-[#1b1b1d] flex flex-col justify-between selection:bg-[#00d2ff] selection:text-[#00566a]">
      {/* Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenTriage={() => handleOpenTriage()}
        onSearchQuery={handleSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-16 pb-20 md:pb-8">
        {currentTab === 'home' && (
          <HomeView
            setCurrentTab={setCurrentTab}
            onOpenTriage={() => handleOpenTriage()}
          />
        )}

        {currentTab === 'indagini' && (
          <IndaginiView
            onOpenDossier={handleOpenDossierDetail}
            onOpenTriage={() => handleOpenTriage()}
          />
        )}

        {currentTab === 'metodologie' && (
          <MetodologieView
            onOpenMethodology={handleOpenMethodologyDetail}
            initialQuery={searchQuery}
          />
        )}

        {currentTab === 'contatti' && (
          <ContattiView
            onOpenTriage={() => handleOpenTriage()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Bottom Mobile Navbar */}
      <BottomNav
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {/* Slide-over Inspection Drawer */}
      <DetailDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        methodology={selectedMethodology}
        dossier={selectedDossier}
        onSelectForTriage={(code) => handleOpenTriage(code)}
      />

      {/* Interactive Triage & Case Assessment Modal */}
      <TriageModal
        isOpen={isTriageOpen}
        onClose={() => setIsTriageOpen(false)}
        preselectedCode={preselectedCode}
        onSubmitInquiry={(summary) => {
          console.log('Case Inquiry Submitted:', summary);
        }}
      />
    </div>
  );
}
