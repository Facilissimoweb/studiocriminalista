import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/forensicData';
import { Quote, CheckCircle2, UserCheck, Briefcase, Award } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenTriage?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenTriage }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Tutti');

  const categories = ['Tutti', 'Penale Societario', 'Diritto del Lavoro', 'Processo Equo', 'Grafologia Forense', 'Revisione Morti Sospette', 'Balistica & Ricostruzione 3D', 'Informatica Forense', 'Formazione Narrativa'];

  const filteredTestimonials = selectedFilter === 'Tutti'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === selectedFilter);

  return (
    <section className="bg-[#fbf9fb] py-16 md:py-24 border-t border-[#c5c6cd]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#c5c6cd] pb-6 mb-10 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#00677f]/10 border border-[#00677f] px-3 py-1">
              <UserCheck className="w-3.5 h-3.5 text-[#00677f]" />
              <span className="font-mono-tech text-xs text-[#00677f] uppercase font-bold tracking-widest">
                DICONO DI NOI // TESTIMONIANZE & RISULTATI
              </span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#000000]">
              Casi Reali & Risultati per la Nostra Clientela
            </h2>
            <p className="font-body text-sm md:text-base text-[#44474d] max-w-3xl leading-relaxed">
              I successi e la versatilità dello Studio Elena Angelini sono confermati dai risultati concreti e misurabili ottenuti per una clientela variegata: da dirigenti d'azienda a lavoratori, famiglie, legali ed enti educativi.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono-tech text-xs text-[#00677f] font-bold shrink-0">
            <Award className="w-4 h-4 text-[#00677f]" />
            <span>8/8 ESITI VERIFICATI</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono-tech text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-2 transition-all uppercase ${
                selectedFilter === cat
                  ? 'bg-[#000000] text-white font-bold shadow-sm'
                  : 'bg-[#ffffff] text-[#44474d] border border-[#c5c6cd] hover:border-[#00677f] hover:text-[#00677f]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#ffffff] border border-[#c5c6cd] p-6 md:p-7 flex flex-col justify-between hover:border-[#00677f] transition-all group shadow-xs hover:shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#00677f] group-hover:bg-[#00d2ff] transition-colors"></div>

              <div>
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between border-b border-[#efedef] pb-3 mb-4">
                  <span className="px-2.5 py-1 bg-[#00677f]/10 text-[#00677f] border border-[#00677f]/30 font-mono-tech text-[10px] uppercase font-bold">
                    {item.category}
                  </span>
                  
                  <span className="flex items-center gap-1 bg-emerald-900/10 border border-emerald-600 text-emerald-800 font-mono-tech text-[10px] px-2 py-0.5 uppercase font-bold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {item.status}
                  </span>
                </div>

                {/* Quote Icon */}
                <Quote className="w-7 h-7 text-[#00677f]/30 mb-3 group-hover:text-[#00677f] transition-colors" />

                {/* Quote Text */}
                <p className="font-body text-sm md:text-base text-[#1b1b1d] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#efedef] flex items-center justify-between">
                <div>
                  <span className="font-mono-tech text-[10px] text-[#75777e] uppercase block mb-0.5">
                    TIPOLOGIA CLIENTE / PROFILO
                  </span>
                  <div className="font-headline text-sm font-bold text-[#000000] uppercase flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#00677f]" />
                    {item.authorRole}
                  </div>
                </div>

                {item.caseCode && (
                  <span className="font-mono-tech text-[10px] text-[#75777e]">
                    {item.caseCode}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 md:p-8 bg-[#000000] text-white border border-[#39475f] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-mono-tech text-xs text-[#00d2ff] uppercase font-bold tracking-widest block">
              HAI UN QUESITO O UN CASO SIMILE DA SOTTOPORE?
            </span>
            <p className="font-headline text-lg font-bold">
              Richiedi una valutazione preliminare di fattibilità riservata e senza impegno.
            </p>
          </div>

          {onOpenTriage && (
            <button
              onClick={onOpenTriage}
              className="px-8 py-3.5 bg-[#00d2ff] text-[#001f28] font-mono-tech text-xs uppercase font-extrabold hover:bg-white transition-all shrink-0 active:scale-95"
            >
              VALUTA IL TUO CASO ORA
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

