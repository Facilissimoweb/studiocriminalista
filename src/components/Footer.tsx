import React from 'react';
import { NavTab } from '../types';

interface FooterProps {
  setCurrentTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  return (
    <footer className="w-full px-6 md:px-12 py-12 flex flex-col items-center space-y-6 text-center bg-[#ffffff] border-t border-[#c5c6cd]">
      <div className="text-[#00677f] font-bold tracking-widest uppercase font-mono-tech text-xs md:text-sm">
        ELENA ANGELINI - DIGITAL SECURE VERDICT
      </div>
      
      <nav className="flex flex-wrap justify-center gap-6 font-mono-tech text-xs uppercase text-[#44474d]">
        <button 
          onClick={() => { setCurrentTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="hover:text-[#000000] transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => { setCurrentTab('indagini'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="hover:text-[#000000] transition-colors"
        >
          Indagini & Dossier
        </button>
        <button 
          onClick={() => { setCurrentTab('metodologie'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="hover:text-[#000000] transition-colors"
        >
          Metodologie
        </button>
        <button 
          onClick={() => { setCurrentTab('contatti'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="hover:text-[#000000] transition-colors"
        >
          Contatti & Taskforce
        </button>
      </nav>

      <div className="flex flex-wrap justify-center gap-6 font-mono-tech text-[11px] text-[#75777e]">
        <span>Legal Info (c.p.p. art. 391-bis)</span>
        <span>•</span>
        <span>Privacy Policy & GDPR Forense</span>
        <span>•</span>
        <span>ISO/IEC 17025 & 27037 Compliance</span>
      </div>

      <div className="font-mono-tech text-[11px] text-[#75777e] opacity-80 uppercase tracking-tight">
        © {new Date().getFullYear()} ELENA ANGELINI - STUDIO CRIMINALISTICA // FORENSIC TASKFORCE
      </div>
    </footer>
  );
};
