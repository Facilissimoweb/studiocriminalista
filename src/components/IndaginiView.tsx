import React, { useState } from 'react';
import { DOSSIERS } from '../data/forensicData';
import { Dossier } from '../types';
import { TestimonialsSection } from './TestimonialsSection';
import { FaqSection } from './FaqSection';
import { ChevronDown, ChevronUp, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

interface IndaginiViewProps {
  onOpenDossier: (dossier: Dossier) => void;
  onOpenTriage: () => void;
}

export const IndaginiView: React.FC<IndaginiViewProps> = ({ onOpenDossier, onOpenTriage }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Tutti');
  const [expandedId, setExpandedId] = useState<string | null>('dos-01');

  const categories = ['Tutti', 'Delitti', 'Criminologia Clinica', 'Diritto del Lavoro', 'Geografica'];

  const filteredDossiers = activeCategory === 'Tutti'
    ? DOSSIERS
    : DOSSIERS.filter((d) => d.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-16 md:space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[480px] md:min-h-[550px] flex items-center overflow-hidden border-b border-[#c5c6cd]">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1920"
            alt="Aree di Intervento e Metodologia Taskforce Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 py-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <span className="font-mono-tech text-xs text-[#00d2ff] tracking-[0.2em] uppercase font-bold block bg-[#00677f]/40 border border-[#00d2ff]/60 px-3 py-1 w-fit backdrop-blur-sm">
                SERVICE PORTFOLIO V.4.0 // TASKFORCE INDEX
              </span>
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
                Aree di Intervento e Metodologia Taskforce
              </h1>
              <p className="font-body text-base text-gray-200 leading-relaxed max-w-2xl">
                Protocolli investigativi integrati per la difesa penale, analisi criminologica di casi complessi, digital forensics certificata e perizie medico-legali.
              </p>
            </div>
            <div className="hidden md:block text-right font-mono-tech text-xs text-gray-300 bg-black/60 p-4 border border-white/20 backdrop-blur-md">
              <p className="uppercase font-bold text-[#00d2ff]">COORDINATE SYSTEM</p>
              <p className="text-white font-bold">41°54'10"N 12°29'47"E</p>
              <p className="text-[10px] text-gray-400 mt-1">EVIDENCE CHAIN CERTIFIED</p>
            </div>
          </div>
        </div>
      </section>

      {/* Taskforce Methodology Highlight */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          <div className="md:col-span-5 relative p-6 sm:p-8 border border-[#000000] bg-[#ffffff] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-[#00677f]" />
                <h3 className="font-headline text-xl font-bold uppercase text-[#000000]">
                  Metodologia Taskforce
                </h3>
              </div>
              
              <p className="font-body text-sm text-[#44474d] mb-6 leading-relaxed">
                Ogni caso criminalistico richiede una competenza specifica. Non crediamo nel generalismo, ma nell'eccellenza coordinata.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-[#f5f3f5] border-l-4 border-[#00677f]">
                  <span className="font-mono-tech text-[#00677f] font-bold text-xs">01</span>
                  <p className="font-body text-xs text-[#1b1b1d]">Selezione mirata di consulenti tecnici, medici legali e analisti informatici.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#f5f3f5] border-l-4 border-[#00677f]">
                  <span className="font-mono-tech text-[#00677f] font-bold text-xs">02</span>
                  <p className="font-body text-xs text-[#1b1b1d]">Coordinamento centrale dell'indagine per garantire la coerenza delle prove.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#f5f3f5] border-l-4 border-[#00677f]">
                  <span className="font-mono-tech text-[#00677f] font-bold text-xs">03</span>
                  <p className="font-body text-xs text-[#1b1b1d]">Sintesi forense e produzione di dossier tecnici per uso giudiziario.</p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenTriage}
              className="mt-6 w-full py-3 bg-[#000000] text-white font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-[#00677f] transition-all"
            >
              Richiedi Consulenza Taskforce <ArrowRight className="w-4 h-4 text-[#00d2ff]" />
            </button>
          </div>

          <div className="md:col-span-7 h-72 md:h-auto overflow-hidden relative border border-[#c5c6cd] bg-[#1b1b1d]">
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800"
              alt="Forensic Laboratory Workbench"
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-[#00677f]/10 pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 bg-[#000000] text-white p-3 font-mono-tech text-[10px] uppercase tracking-wider border border-gray-700 font-bold">
              Ref: LAB_PROC_772 // Environment: Analysis Room A
            </div>
          </div>

        </div>
      </section>

      {/* Technical Dossiers List */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#00677f]"></span>
            <h2 className="font-mono-tech text-xs font-bold text-[#00677f] uppercase tracking-[0.25em]">
              INDAGINI E DOSSIER TECNICI
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-1.5 font-mono-tech text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 transition-colors uppercase ${
                  activeCategory === cat
                    ? 'bg-[#000000] text-white font-bold'
                    : 'bg-[#efedef] text-[#44474d] border border-[#c5c6cd] hover:bg-[#eae7ea]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dossiers Accordion */}
        <div className="space-y-4">
          {filteredDossiers.map((dossier) => {
            const isExpanded = expandedId === dossier.id;

            return (
              <div
                key={dossier.id}
                className={`bg-[#ffffff] border transition-all ${
                  isExpanded ? 'border-[#00677f] shadow-md' : 'border-[#c5c6cd] hover:border-[#00677f]'
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Sidebar Index */}
                  <div className="md:w-16 bg-[#000000] text-white flex md:flex-col items-center justify-center p-3 gap-1 shrink-0">
                    <span className="font-mono-tech text-[10px] opacity-60">ID</span>
                    <span className="font-mono-tech font-bold text-lg text-[#00d2ff]">{dossier.number}</span>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-5 md:p-6">
                    <div 
                      onClick={() => toggleExpand(dossier.id)}
                      className="cursor-pointer flex flex-wrap justify-between items-start gap-4 mb-2"
                    >
                      <div className="space-y-1">
                        <span className="font-mono-tech text-xs text-[#00677f] font-bold block">
                          CODE: {dossier.code}
                        </span>
                        <h3 className="font-headline text-lg sm:text-xl font-bold uppercase text-[#000000]">
                          {dossier.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 bg-[#00677f]/10 border border-[#00677f] text-[#00677f] font-mono-tech text-[10px] uppercase font-bold">
                          Report: {dossier.status}
                        </span>
                        <button className="p-1 text-[#75777e] hover:text-[#000000]">
                          {isExpanded ? <ChevronUp className="w-5 h-5 text-[#00677f]" /> : <ChevronDown className="w-5 h-5 text-[#00677f]" />}
                        </button>
                      </div>
                    </div>

                    {/* Expandable Body */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-[#efedef] mt-4 animate-in fade-in slide-in-from-top-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <p className="font-body text-sm text-[#44474d] leading-relaxed mb-4">
                              {dossier.description}
                            </p>
                            <p className="font-body text-xs text-[#1b1b1d] leading-relaxed p-3 bg-[#f5f3f5] border-l-2 border-[#00677f]">
                              {dossier.fullDetails}
                            </p>
                          </div>

                          <div>
                            <span className="font-mono-tech text-[10px] text-[#75777e] uppercase block mb-2 font-bold">
                              PUNTI DI ACCERTAMENTO PERITALE
                            </span>
                            <ul className="space-y-2">
                              {dossier.checkpoints.map((cp, idx) => (
                                <li key={idx} className="flex items-center gap-2 font-mono-tech text-xs text-[#1b1b1d]">
                                  <CheckCircle2 className="w-4 h-4 text-[#00677f] shrink-0" />
                                  <span>{cp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center gap-3 pt-3 border-t border-[#efedef]">
                          <span className="font-mono-tech text-[10px] text-[#75777e] uppercase">
                            Catena di Custodia & Protocollo c.p.p. art. 391-bis
                          </span>
                          <button
                            onClick={() => onOpenDossier(dossier)}
                            className="px-4 py-2 border border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-white font-mono-tech text-xs uppercase font-bold transition-all"
                          >
                            Ispeziona Scheda Dossier
                          </button>
                        </div>
                      </div>
                    )}

                    {!isExpanded && (
                      <div 
                        onClick={() => toggleExpand(dossier.id)}
                        className="cursor-pointer mt-2 flex justify-between items-center font-mono-tech text-[10px] text-[#75777e] uppercase hover:text-[#00677f]"
                      >
                        <span>Espandi per consultare il protocollo dettagliato</span>
                        <span className="h-0.5 w-16 bg-[#efedef]"></span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* High Precision Metrics Banner */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-[#000000] text-white p-8 border border-[#39475f] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 border-r border-[#39475f] last:border-r-0">
            <span className="font-mono-tech text-3xl font-extrabold text-[#00d2ff] block mb-1">98%</span>
            <span className="font-mono-tech text-[10px] uppercase text-gray-400">Technical Accuracy</span>
          </div>
          <div className="p-4 border-r border-[#39475f] last:border-r-0">
            <span className="font-mono-tech text-3xl font-extrabold text-[#00d2ff] block mb-1">15+</span>
            <span className="font-mono-tech text-[10px] uppercase text-gray-400">Specialized Experts</span>
          </div>
          <div className="p-4 border-r border-[#39475f] last:border-r-0">
            <span className="font-mono-tech text-3xl font-extrabold text-[#00d2ff] block mb-1">24/7</span>
            <span className="font-mono-tech text-[10px] uppercase text-gray-400">Evidence Processing</span>
          </div>
          <div className="p-4">
            <span className="font-mono-tech text-3xl font-extrabold text-[#00d2ff] block mb-1">∞</span>
            <span className="font-mono-tech text-[10px] uppercase text-gray-400">Analytical Rigor</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection onOpenTriage={onOpenTriage} />

      {/* FAQ */}
      <FaqSection onOpenTriage={onOpenTriage} />
    </div>
  );
};


