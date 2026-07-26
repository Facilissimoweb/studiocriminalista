import React from 'react';
import { NavTab } from '../types';
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
      <section className="relative min-h-[620px] md:min-h-[720px] flex items-center justify-center overflow-hidden border-b border-[#c5c6cd]">
        {/* Full-bleed background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1920"
            alt="Studio Criminalistica Hero Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/55 backdrop-blur-[1px]"></div>
        </div>

        {/* Registration corner marks */}
        <div className="hidden sm:block absolute top-6 left-6 registration-mark mark-tl border-white/40"></div>
        <div className="hidden sm:block absolute top-6 right-6 registration-mark mark-tr border-white/40"></div>
        <div className="hidden sm:block absolute bottom-6 left-6 registration-mark mark-bl border-white/40"></div>
        <div className="hidden sm:block absolute bottom-6 right-6 registration-mark mark-br border-white/40"></div>

        <div className="container mx-auto px-6 md:px-12 py-16 relative z-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#00677f]/30 border border-[#00d2ff]/60 px-3 py-1.5 w-fit backdrop-blur-sm">
              <span className="w-2.5 h-2.5 bg-[#00d2ff] rounded-full animate-pulse"></span>
              <span className="font-mono-tech text-xs text-[#00d2ff] font-bold uppercase tracking-widest">
                Forensic Intelligence & Taskforce
              </span>
            </div>

            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-3xl leading-[1.1] tracking-tight drop-shadow-md">
              Ogni persona ha il diritto di essere difesa con la{' '}
              <span className="text-[#00d2ff] italic underline decoration-[#00d2ff] decoration-4">scienza.</span>
            </h1>

            <p className="font-body text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed">
              Il rigore metodologico al servizio della verità. Studio di criminalistica specializzato in indagini difensive, perizie medico-legali e digital forensics avanzata.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onOpenTriage}
                className="bg-[#00d2ff] text-black px-8 py-4 font-mono-tech text-xs uppercase tracking-widest font-extrabold flex items-center justify-center gap-2 group hover:bg-white transition-all shadow-lg active:scale-98"
              >
                <span>INIZIA INDAGINE</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setCurrentTab('contatti');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-white/70 text-white bg-black/40 backdrop-blur-sm px-8 py-4 font-mono-tech text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all active:scale-98 text-center"
              >
                CONTATTA LO STUDIO
              </button>
            </div>
          </div>

          {/* Evidence Highlight Image Box */}
          <div className="hidden md:flex md:col-span-4 justify-end items-center">
            <div className="relative w-full aspect-square border border-white/30 p-2 bg-black/60 shadow-2xl overflow-hidden group backdrop-blur-md">
              <div className="absolute inset-0 bg-[#00677f]/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800"
                alt="Forensic Evidence Analysis"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/80 border border-white/20 p-2 z-20">
                <span className="font-mono-tech text-[10px] text-[#00d2ff] uppercase font-bold block">LAB_REPORT // LIVE_FEED</span>
                <span className="font-mono-tech text-[9px] text-gray-300 uppercase block">EVIDENCE SCANNER ONLINE</span>
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
              Operiamo con assoluta indipendenza e rigore, fornendo consulenza criminalistica avanzata a studi legali e privati. In un sistema penale complesso, la verità non emerge spontaneamente: deve essere estratta dai dati, dai reperti e dalle testimonianze attraverso metodologie validate dalla comunità scientifica internazionale.
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
