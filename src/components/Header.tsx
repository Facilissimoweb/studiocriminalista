import React, { useState } from 'react';
import { NavTab } from '../types';
import { Menu, X, Search, Terminal, Fingerprint, Microscope, HelpCircle, ShieldCheck, UserCheck } from 'lucide-react';

interface HeaderProps {
  currentTab: NavTab;
  setCurrentTab: (tab: NavTab) => void;
  onOpenTriage: () => void;
  onSearchQuery?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  onOpenTriage,
  onSearchQuery
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const handleNavClick = (tab: NavTab) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchQuery) {
      onSearchQuery(searchVal);
    }
    setCurrentTab('metodologie');
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-12 h-16 bg-[#fbf9fb]/90 backdrop-blur-md border-b border-[#c5c6cd]">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1b1b1d] hover:bg-[#eae7ea] rounded-none transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-2 group"
          >
            <div className="w-2.5 h-2.5 bg-[#00677f] group-hover:bg-[#00d2ff] transition-colors"></div>
            <span className="font-headline text-[15px] md:text-[18px] font-extrabold text-[#1b1b1d] tracking-tight uppercase">
              ELENA ANGELINI - STUDIO CRIMINALISTICA
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          <button
            onClick={() => handleNavClick('home')}
            className={`font-mono-tech text-[12px] uppercase tracking-widest px-2.5 py-1.5 transition-colors ${
              currentTab === 'home' 
                ? 'text-[#00677f] font-bold border-b-2 border-[#00677f]' 
                : 'text-[#44474d] hover:text-[#00677f]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('elena')}
            className={`font-mono-tech text-[12px] uppercase tracking-widest px-2.5 py-1.5 transition-colors ${
              currentTab === 'elena' 
                ? 'text-[#00677f] font-bold border-b-2 border-[#00677f]' 
                : 'text-[#44474d] hover:text-[#00677f]'
            }`}
          >
            Elena Angelini
          </button>
          <button
            onClick={() => handleNavClick('indagini')}
            className={`font-mono-tech text-[12px] uppercase tracking-widest px-2.5 py-1.5 transition-colors ${
              currentTab === 'indagini' 
                ? 'text-[#00677f] font-bold border-b-2 border-[#00677f]' 
                : 'text-[#44474d] hover:text-[#00677f]'
            }`}
          >
            Indagini
          </button>
          <button
            onClick={() => handleNavClick('metodologie')}
            className={`font-mono-tech text-[12px] uppercase tracking-widest px-2.5 py-1.5 transition-colors ${
              currentTab === 'metodologie' 
                ? 'text-[#00677f] font-bold border-b-2 border-[#00677f]' 
                : 'text-[#44474d] hover:text-[#00677f]'
            }`}
          >
            Metodologie
          </button>
          <button
            onClick={() => handleNavClick('contatti')}
            className={`font-mono-tech text-[12px] uppercase tracking-widest px-2.5 py-1.5 transition-colors ${
              currentTab === 'contatti' 
                ? 'text-[#00677f] font-bold border-b-2 border-[#00677f]' 
                : 'text-[#44474d] hover:text-[#00677f]'
            }`}
          >
            Contatti
          </button>

          <button
            onClick={onOpenTriage}
            className="font-mono-tech text-[11px] uppercase tracking-wider bg-[#000000] text-white font-bold px-3.5 py-2 hover:bg-[#00677f] transition-all flex items-center gap-2"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#00d2ff]" />
            Analisi Caso
          </button>
        </nav>

        {/* Header Right Action Tools */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchBarOpen(!searchBarOpen)}
            className="p-2 text-[#1b1b1d] hover:bg-[#eae7ea] transition-colors"
            title="Cerca protocollo o reperti"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Expandable Search Overlay */}
      {searchBarOpen && (
        <div className="fixed top-16 left-0 w-full z-40 bg-[#1b1b1d] text-white p-4 border-b border-[#00677f] shadow-xl animate-in slide-in-from-top-2">
          <form onSubmit={handleSearchSubmit} className="max-w-4xl mx-auto flex items-center gap-3">
            <Search className="w-5 h-5 text-[#00d2ff] shrink-0" />
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Cerca protocollo (es: MET_DNA_01, Balistica, CCTV, Hash)..."
              className="w-full bg-transparent font-mono-tech text-sm text-white focus:outline-none placeholder:text-gray-400"
              autoFocus
            />
            <button
              type="submit"
              className="bg-[#00d2ff] text-[#001f28] px-4 py-1.5 font-mono-tech text-xs uppercase font-bold hover:bg-white transition-colors"
            >
              Cerca
            </button>
            <button
              type="button"
              onClick={() => setSearchBarOpen(false)}
              className="text-gray-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-[#fbf9fb] border-b border-[#c5c6cd] md:hidden p-6 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="font-mono-tech text-[10px] text-[#00677f] uppercase tracking-widest pb-2 border-b border-[#c5c6cd]">
              STATION_INDEX // NAVIGATION_PROTOCOL
            </div>
            
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full flex items-center gap-4 p-3 text-left font-headline text-lg uppercase ${
                currentTab === 'home' ? 'bg-[#efedef] font-bold text-[#00677f] border-l-4 border-[#00677f]' : 'text-[#1b1b1d]'
              }`}
            >
              <Terminal className="w-5 h-5 text-[#00677f]" />
              Home Page
            </button>

            <button
              onClick={() => handleNavClick('elena')}
              className={`w-full flex items-center gap-4 p-3 text-left font-headline text-lg uppercase ${
                currentTab === 'elena' ? 'bg-[#efedef] font-bold text-[#00677f] border-l-4 border-[#00677f]' : 'text-[#1b1b1d]'
              }`}
            >
              <UserCheck className="w-5 h-5 text-[#00677f]" />
              Elena Angelini (Bio & Attività)
            </button>

            <button
              onClick={() => handleNavClick('indagini')}
              className={`w-full flex items-center gap-4 p-3 text-left font-headline text-lg uppercase ${
                currentTab === 'indagini' ? 'bg-[#efedef] font-bold text-[#00677f] border-l-4 border-[#00677f]' : 'text-[#1b1b1d]'
              }`}
            >
              <Fingerprint className="w-5 h-5 text-[#00677f]" />
              Indagini & Dossier
            </button>

            <button
              onClick={() => handleNavClick('metodologie')}
              className={`w-full flex items-center gap-4 p-3 text-left font-headline text-lg uppercase ${
                currentTab === 'metodologie' ? 'bg-[#efedef] font-bold text-[#00677f] border-l-4 border-[#00677f]' : 'text-[#1b1b1d]'
              }`}
            >
              <Microscope className="w-5 h-5 text-[#00677f]" />
              Metodologie Scientifiche
            </button>

            <button
              onClick={() => handleNavClick('contatti')}
              className={`w-full flex items-center gap-4 p-3 text-left font-headline text-lg uppercase ${
                currentTab === 'contatti' ? 'bg-[#efedef] font-bold text-[#00677f] border-l-4 border-[#00677f]' : 'text-[#1b1b1d]'
              }`}
            >
              <HelpCircle className="w-5 h-5 text-[#00677f]" />
              Contatti Taskforce
            </button>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#c5c6cd]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTriage();
              }}
              className="w-full bg-[#000000] text-white py-3 font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-[#00677f] transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-[#00d2ff]" />
              Avvia Valutazione Caso
            </button>
            <p className="font-mono-tech text-[10px] text-[#75777e] text-center">
              REPERIBILITÀ H24: +39 06 12345678
            </p>
          </div>
        </div>
      )}
    </>
  );
};
