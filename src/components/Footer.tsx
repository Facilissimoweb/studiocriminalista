import React from 'react';
import { NavTab } from '../types';

interface FooterProps {
  setCurrentTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  return (
    <footer className="w-full px-6 md:px-12 py-12 flex flex-col items-center space-y-6 text-center bg-[#ffffff] border-t border-[#c5c6cd]">
      <div className="space-y-1">
        <div className="text-[#000000] font-headline font-bold text-base uppercase">
          Studio Criminalistica Elena Angelini
        </div>
        <div className="text-[#00677f] font-mono-tech text-xs">
          Rimini (RN) - c/o Arbor Vitae, Via Fabio Filzi 9, 47923 | Tel: +39 3661236464
        </div>
      </div>
      
      <nav className="flex flex-wrap justify-center gap-6 font-mono-tech text-xs uppercase text-[#44474d]">
        <button 
          onClick={() => { setCurrentTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="hover:text-[#000000] transition-colors"
        >
          Home Page
        </button>
        <button 
          onClick={() => { setCurrentTab('elena'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="hover:text-[#000000] transition-colors font-bold text-[#00677f]"
        >
          Elena Angelini (Bio)
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

      {/* Regulatory & IA Notices */}
      <div className="max-w-4xl space-y-3 pt-4 border-t border-[#efedef] font-mono-tech text-[11px] text-[#75777e] leading-relaxed">
        <div>
          <strong className="text-[#00677f] block">CONFIDENTIALITY_ESTABLISHMENT // SECRECY_REGULATED</strong>
          Nota: Tutte le informazioni condivise durante le fasi di colloquio e di analisi sono coperte dal segreto professionale regolamentato dal codice civile e penale.
        </div>
        <div>
          <strong className="text-[#00677f] block">AI_ASSISTED_SYSTEM // INFORMATIVA IA</strong>
          Si dichiara che questo sito si avvale di strumenti di Intelligenza Artificiale (IA) per l'ottimizzazione dell'esperienza di navigazione, il supporto interattivo dell'assistente virtuale e la generazione di elementi informativi.
        </div>
      </div>

      <div className="pt-2 font-mono-tech text-[11px] text-[#75777e] space-y-1">
        <div>
          © 2026 Studio Criminalistica Elena Angelini. Tutti i diritti riservati. | P.IVA 01234567890
        </div>
        <div className="text-[10px] opacity-75">
          Designed by <a href="https://facilissimoweb.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#00677f]">facilissimoweb.com</a> di M.Teresa Rogani
        </div>
      </div>
    </footer>
  );
};

