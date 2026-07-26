import React from 'react';
import { NavTab } from '../types';

interface FooterProps {
  setCurrentTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  return (
    <footer className="w-full bg-[#ffffff] border-t border-[#c5c6cd] px-6 md:px-12 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* Main Grid for Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 text-left">
          
          {/* Column 1: Studio Info & Contact */}
          <div className="space-y-4">
            <div>
              <div className="text-[#000000] font-headline font-bold text-base md:text-lg uppercase tracking-tight">
                Studio Criminalistica
              </div>
              <div className="text-[#00677f] font-headline font-bold text-sm md:text-base uppercase tracking-tight">
                Elena Angelini
              </div>
            </div>

            <p className="text-[#44474d] font-mono-tech text-xs leading-relaxed">
              Consulenze peritali, investigazioni difensive e repertamento digitale ad alta specializzazione scientifica.
            </p>

            <div className="text-[#00677f] font-mono-tech text-xs leading-relaxed pt-2 border-t border-[#efedef] space-y-1">
              <div><strong>Sede:</strong> Rimini (RN)</div>
              <div>c/o Arbor Vitae, Via Fabio Filzi 9, 47923</div>
              <div className="pt-1"><strong>Tel:</strong> <a href="tel:+393661236464" className="underline hover:text-[#000000]">+39 3661236464</a></div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <div className="text-[#00677f] font-mono-tech text-xs uppercase font-bold tracking-wider border-b border-[#00677f]/20 pb-2">
              // Mappa del Sito
            </div>
            <nav className="flex flex-col space-y-2.5 font-mono-tech text-xs uppercase text-[#44474d]">
              <button 
                onClick={() => { setCurrentTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="text-left hover:text-[#000000] hover:translate-x-1 transition-all duration-150"
              >
                → Home Page
              </button>
              <button 
                onClick={() => { setCurrentTab('elena'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="text-left hover:text-[#000000] hover:translate-x-1 transition-all duration-150 font-bold text-[#00677f]"
              >
                → Elena Angelini (Bio)
              </button>
              <button 
                onClick={() => { setCurrentTab('indagini'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="text-left hover:text-[#000000] hover:translate-x-1 transition-all duration-150"
              >
                → Indagini & Dossier
              </button>
              <button 
                onClick={() => { setCurrentTab('metodologie'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="text-left hover:text-[#000000] hover:translate-x-1 transition-all duration-150"
              >
                → Servizi & Protocolli
              </button>
              <button 
                onClick={() => { setCurrentTab('contatti'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="text-left hover:text-[#000000] hover:translate-x-1 transition-all duration-150"
              >
                → Contatti & Taskforce
              </button>
            </nav>
          </div>

          {/* Column 3: Confidentiality Notice */}
          <div className="space-y-3 font-mono-tech text-xs text-[#75777e] leading-relaxed">
            <div className="text-[#00677f] uppercase font-bold tracking-wider border-b border-[#00677f]/20 pb-2">
              // SECRECY_REGULATED
            </div>
            <strong className="text-[#00677f] block text-[11px] uppercase">
              Riservatezza & Segreto Professionale
            </strong>
            <p className="text-[11px]">
              Tutte le informazioni condivise durante le fasi di colloquio, consulenza e analisi investigativa sono strettamente coperte dal segreto professionale regolamentato dal Codice Penale e Civile italiano.
            </p>
          </div>

          {/* Column 4: AI Assisted System Notice */}
          <div className="space-y-3 font-mono-tech text-xs text-[#75777e] leading-relaxed">
            <div className="text-[#00677f] uppercase font-bold tracking-wider border-b border-[#00677f]/20 pb-2">
              // INFORMATIVA_IA
            </div>
            <strong className="text-[#00677f] block text-[11px] uppercase">
              Sistemi di Assistenza IA
            </strong>
            <p className="text-[11px]">
              Questo sito si avvale di strumenti di Intelligenza Artificiale per l'ottimizzazione dell'esperienza di navigazione, il supporto interattivo dell'assistente virtuale e la generazione di contenuti informativi.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#c5c6cd] flex flex-col md:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-[#75777e] text-center md:text-left">
          <div>
            © 2026 Studio Criminalistica Elena Angelini. Tutti i diritti riservati. | P.IVA 01234567890
          </div>
          <div className="text-[11px]">
            Designed by <a href="https://facilissimoweb.com" target="_blank" rel="noopener noreferrer" className="underline text-[#00677f] hover:text-[#000000] transition-colors">facilissimoweb.com</a> di M.Teresa Rogani
          </div>
        </div>

      </div>
    </footer>
  );
};

