import React from 'react';
import { NavTab } from '../types';
import { EvidenceScannerWidget } from './EvidenceScannerWidget';
import { TestimonialsSection } from './TestimonialsSection';
import { FaqSection } from './FaqSection';
import { ArrowRight, FolderKanban, Box, Brain, Dna, Gavel } from 'lucide-react';

interface HomeViewProps {
  setCurrentTab: (tab: NavTab) => void;
  onOpenTriage: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentTab, onOpenTriage }) => {
  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      {/* Hero Section */}
      <section className="relative min-h-[640px] md:min-h-[720px] flex items-center justify-center overflow-hidden data-grid-bg border-b border-[#c5c6cd]">
        <div className="scanner-line opacity-30"></div>
        
        {/* Registration corner marks */}
        <div className="hidden sm:block absolute top-6 left-6 registration-mark mark-tl"></div>
        <div className="hidden sm:block absolute top-6 right-6 registration-mark mark-tr"></div>
        <div className="hidden sm:block absolute bottom-6 left-6 registration-mark mark-bl"></div>
        <div className="hidden sm:block absolute bottom-6 right-6 registration-mark mark-br"></div>

        <div className="container mx-auto px-6 md:px-12 py-12 relative z-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#00677f]/10 border border-[#00677f] px-3 py-1 w-fit">
              <span className="w-2 h-2 bg-[#00d2ff] animate-pulse"></span>
              <span className="font-mono-tech text-xs text-[#00677f] font-bold uppercase tracking-widest">
                Forensic Intelligence & Taskforce
              </span>
            </div>

            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#000000] max-w-3xl leading-[1.1] tracking-tight">
              Ogni persona ha il diritto di essere difesa con la{' '}
              <span className="text-[#00677f] italic underline decoration-[#00d2ff] decoration-4">scienza.</span>
            </h1>

            <p className="font-body text-base md:text-lg text-[#44474d] max-w-2xl leading-relaxed">
              Il rigore metodologico al servizio della verità. Studio di criminalistica specializzato in indagini difensive, perizie medico-legali e digital forensics avanzata.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onOpenTriage}
                className="bg-[#000000] text-white px-8 py-4 font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 group hover:bg-[#00677f] transition-all shadow-md active:scale-98"
              >
                <span>INIZIA INDAGINE</span>
                <ArrowRight className="w-4 h-4 text-[#00d2ff] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setCurrentTab('contatti');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-[#00677f] text-[#00677f] px-8 py-4 font-mono-tech text-xs uppercase tracking-widest font-bold hover:bg-[#00677f]/10 transition-colors active:scale-98 text-center"
              >
                CONTATTA LO STUDIO
              </button>
            </div>
          </div>

          {/* Evidence Highlight Image Box */}
          <div className="hidden md:flex md:col-span-4 justify-end items-center">
            <div className="relative w-full aspect-square border border-[#75777e] p-2 bg-[#ffffff] shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#00677f]/5 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800"
                alt="Forensic Evidence Analysis"
                className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-700 scale-105"
              />
              <div className="absolute top-4 left-4 z-20 font-mono-tech text-[10px] bg-[#000000] text-white px-2.5 py-1 uppercase tracking-wider">
                EVIDENCE_REF: 00249-X
              </div>
              <div className="absolute bottom-4 right-4 z-20 font-mono-tech text-[10px] bg-[#00677f] text-white px-2 py-0.5 uppercase">
                ISO/IEC 17025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <div className="font-mono-tech text-xs text-[#00677f] uppercase font-bold tracking-widest mb-2">
              MISSIONE & PRINCIPI
            </div>
            <h2 className="font-headline text-2xl md:text-3xl font-extrabold text-[#000000] mb-6 border-l-4 border-[#00677f] pl-4">
              L'Analisi Forense come Garanzia Costituzionale
            </h2>
          </div>

          <div className="md:col-span-7 space-y-6">
            <p className="font-body text-base md:text-lg text-[#44474d] leading-relaxed">
              Lo Studio Elena Angelini nasce con una missione precisa: rendere la scienza accessibile alla difesa. Crediamo che il diritto di essere difesi non debba dipendere dalla reputazione o dal reddito, ma dalla qualità tecnica degli accertamenti.
            </p>
            <p className="font-body text-sm text-[#44474d] leading-relaxed">
              Operiamo con assoluta indipendenza e rigore, fornendo consulenza criminalistica avanzata a studi legali e privati. In un sistema penale complesso, la verità non emerge spontaneamente: deve essere estratta dai dati, dai reperti e dalle testimonianze attraverso metodologies validate dalla comunità scientifica internazionale.
            </p>

            <div className="pt-6 border-t border-[#c5c6cd] grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="font-mono-tech text-[#00677f] text-xl sm:text-2xl font-bold">100%</div>
                <div className="font-mono-tech text-[11px] text-[#75777e] uppercase font-semibold">Rigore Scientifico</div>
              </div>
              <div>
                <div className="font-mono-tech text-[#00677f] text-xl sm:text-2xl font-bold">24/7</div>
                <div className="font-mono-tech text-[11px] text-[#75777e] uppercase font-semibold">Reperibilità Taskforce</div>
              </div>
              <div>
                <div className="font-mono-tech text-[#00677f] text-xl sm:text-2xl font-bold">ISO</div>
                <div className="font-mono-tech text-[11px] text-[#75777e] uppercase font-semibold">Standard Protocol</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Workflow Grid */}
      <section className="bg-[#efedef] py-16 border-y border-[#c5c6cd] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="font-mono-tech text-xs text-[#00677f] font-bold uppercase tracking-[0.2em] mb-2">
              METODOLOGIA OPERATIVA
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-extrabold text-[#000000] uppercase tracking-tight">
              Il Protocollo di Indagine
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 border border-[#c5c6cd] bg-[#ffffff]">
            {/* Step 1 */}
            <div className="p-6 md:p-8 border-b sm:border-r border-[#c5c6cd] hover:bg-[#00677f]/5 transition-colors group">
              <div className="font-mono-tech text-xs text-[#75777e] mb-4 font-bold">01 / ANALISI FASCICOLO</div>
              <FolderKanban className="w-10 h-10 text-[#00677f] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-lg font-bold mb-2">Studio Documentale</h3>
              <p className="font-body text-xs text-[#44474d] leading-relaxed">
                Esame analitico degli atti d'indagine, rilievi fotografici e verbali per identificare lacune o incongruenze procedurali.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 md:p-8 border-b lg:border-r border-[#c5c6cd] hover:bg-[#00677f]/5 transition-colors group">
              <div className="font-mono-tech text-xs text-[#75777e] mb-4 font-bold">02 / VERIFICA SCENARI</div>
              <Box className="w-10 h-10 text-[#00677f] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-lg font-bold mb-2">Ricostruzione 3D</h3>
              <p className="font-body text-xs text-[#44474d] leading-relaxed">
                Simulazione scientifica delle dinamiche dell'evento per validare o confutare le ipotesi accusatorie.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 md:p-8 border-b sm:border-r border-[#c5c6cd] hover:bg-[#00677f]/5 transition-colors group">
              <div className="font-mono-tech text-xs text-[#75777e] mb-4 font-bold">03 / TESTIMONIALE</div>
              <Brain className="w-10 h-10 text-[#00677f] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-lg font-bold mb-2">Verifica Attendibilità</h3>
              <p className="font-body text-xs text-[#44474d] leading-relaxed">
                Studio delle dichiarazioni attraverso parametri di psicologia della testimonianza e coerenza logico-scientifica.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 md:p-8 hover:bg-[#00677f]/5 transition-colors group">
              <div className="font-mono-tech text-xs text-[#75777e] mb-4 font-bold">04 / ACCERTAMENTI</div>
              <Dna className="w-10 h-10 text-[#00677f] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-lg font-bold mb-2">Assistenza Tecnica</h3>
              <p className="font-body text-xs text-[#44474d] leading-relaxed">
                Presenza agli accertamenti tecnici irripetibili per garantire la correttezza della repertazione e delle analisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Evidence Scanner Section */}
      <section className="container mx-auto px-6 md:px-12">
        <EvidenceScannerWidget />
      </section>

      {/* Testimonials - Dicono di Noi */}
      <TestimonialsSection onOpenTriage={onOpenTriage} />

      {/* FAQ Section */}
      <FaqSection
        onOpenTriage={onOpenTriage}
        onContactClick={() => {
          setCurrentTab('contatti');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Call to Action Section */}
      <section className="bg-[#000000] text-white py-16 md:py-24 border-y border-[#39475f]">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl space-y-6">
          <Gavel className="w-12 h-12 text-[#00d2ff] mx-auto" />
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            Ogni dettaglio è una prova.
          </h2>
          <p className="font-body text-base text-gray-300">
            La vostra difesa inizia con un'analisi corretta. Contattate lo studio per una prima valutazione riservata del caso con la nostra Taskforce.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenTriage}
              className="inline-block bg-[#00d2ff] text-[#001f28] font-mono-tech text-xs uppercase px-10 py-4 font-extrabold hover:bg-white transition-all shadow-lg active:scale-95"
            >
              INIZIA VALUTAZIONE CASO ORA
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
