import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/forensicData';
import { Quote, CheckCircle2, UserCheck, Briefcase, Award, Search, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenTriage?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenTriage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutti');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  const categories = ['Tutti', 'Penale Societario', 'Diritto del Lavoro', 'Processo Equo', 'Grafologia Forense', 'Revisione Morti Sospette', 'Balistica & Ricostruzione 3D', 'Informatica Forense', 'Formazione Narrativa'];

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSelectedCategory('Tutti');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    const matchesCategory = selectedCategory === 'Tutti' || t.category === selectedCategory;
    const matchesSearch =
      t.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.authorRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.caseCode && t.caseCode.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage) || 1;
  const paginatedTestimonials = filteredTestimonials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const startItem = filteredTestimonials.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = Math.min(currentPage * itemsPerPage, filteredTestimonials.length);

  return (
    <section className="bg-[#fbf9fb] py-16 md:py-24 border-t border-[#c5c6cd]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#c5c6cd] pb-6 mb-8 gap-6">
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

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 font-mono-tech text-xs text-[#00677f] font-bold shrink-0">
            <div className="flex items-center gap-1.5 bg-[#ffffff] border border-[#c5c6cd] px-3 py-1.5 shadow-2xs">
              <Award className="w-4 h-4 text-[#00677f]" />
              <span>{TESTIMONIALS.length}/{TESTIMONIALS.length} ESITI VERIFICATI</span>
            </div>
          </div>
        </div>

        {/* Query Loop Toolbar: Category Filter & Search */}
        <div className="bg-[#ffffff] border border-[#c5c6cd] p-4 md:p-5 mb-8 space-y-4 shadow-2xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-1.5 font-mono-tech text-xs">
              {categories.map((cat) => {
                const count =
                  cat === 'Tutti'
                    ? TESTIMONIALS.length
                    : TESTIMONIALS.filter((t) => t.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-3 py-1.5 uppercase transition-all font-bold flex items-center gap-2 ${
                      selectedCategory === cat
                        ? 'bg-[#000000] text-white shadow-2xs'
                        : 'bg-[#f5f3f5] text-[#44474d] border border-[#c5c6cd] hover:border-[#00677f] hover:text-[#00677f]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono-tech ${
                        selectedCategory === cat
                          ? 'bg-[#00677f] text-white'
                          : 'bg-[#c5c6cd] text-[#1b1b1d]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative w-full lg:w-72 flex items-center gap-2 shrink-0">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Cerca nelle testimonianze..."
                  className="w-full bg-[#f5f3f5] border border-[#c5c6cd] h-9 pl-8 pr-3 font-mono-tech text-xs text-[#1b1b1d] focus:outline-none focus:border-[#00677f]"
                />
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#75777e]" />
              </div>

              {(searchQuery || selectedCategory !== 'Tutti') && (
                <button
                  onClick={resetFilters}
                  className="h-9 px-2.5 bg-[#efedef] hover:bg-[#c5c6cd] text-xs font-mono-tech font-bold uppercase transition-colors shrink-0 flex items-center gap-1"
                  title="Azzera filtri"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Results Status Bar */}
          <div className="flex items-center justify-between pt-3 border-t border-[#efedef] font-mono-tech text-xs text-[#75777e]">
            <span>
              Mostrando <strong className="text-[#000000]">{startItem}-{endItem}</strong> di <strong className="text-[#000000]">{filteredTestimonials.length}</strong> testimonianze
            </span>
            <span>
              PAGINA {currentPage} DI {totalPages}
            </span>
          </div>
        </div>

        {/* Query Loop Results Grid */}
        {filteredTestimonials.length === 0 ? (
          <div className="bg-[#ffffff] border border-[#c5c6cd] p-10 text-center font-mono-tech text-xs text-[#75777e] space-y-4">
            <p className="text-sm text-[#1b1b1d]">Nessuna testimonianza trovata con i filtri inseriti.</p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 bg-[#00677f] text-white font-bold uppercase hover:bg-[#000000] transition-colors inline-flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Azzera Criteri di Ricerca</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedTestimonials.map((item, index) => {
              const globalIndex = (currentPage - 1) * itemsPerPage + index + 1;
              return (
                <div
                  key={item.id}
                  className="bg-[#ffffff] border border-[#c5c6cd] border-l-4 border-l-[#00677f] p-6 flex flex-col justify-between hover:border-[#00677f] transition-all group shadow-2xs hover:shadow-md relative overflow-hidden"
                >
                  <div>
                    {/* Card Header & Reference */}
                    <div className="flex items-center justify-between border-b border-[#efedef] pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-tech text-[10px] text-[#75777e] font-bold">
                          REF #{globalIndex.toString().padStart(2, '0')}
                        </span>
                        <span className="px-2 py-0.5 bg-[#00677f]/10 text-[#00677f] border border-[#00677f]/30 font-mono-tech text-[10px] uppercase font-bold">
                          {item.category}
                        </span>
                      </div>
                      
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
                      <span className="font-mono-tech text-[10px] text-[#75777e] bg-[#f5f3f5] px-2 py-1 border border-[#c5c6cd]">
                        {item.caseCode}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination Controls (Query Loop Navigation) */}
        {totalPages > 1 && (
          <div className="mt-8 pt-6 border-t border-[#c5c6cd] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`px-4 py-2.5 border border-[#c5c6cd] uppercase font-bold transition-all flex items-center gap-2 ${
                currentPage === 1
                  ? 'opacity-40 cursor-not-allowed bg-[#efedef] text-[#75777e]'
                  : 'bg-white text-[#1b1b1d] hover:bg-[#00677f] hover:text-white shadow-2xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Precedente</span>
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 flex items-center justify-center border font-bold transition-all ${
                    currentPage === page
                      ? 'bg-[#000000] text-white border-[#000000] shadow-2xs'
                      : 'bg-white text-[#44474d] border-[#c5c6cd] hover:border-[#00677f] hover:text-[#00677f]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={`px-4 py-2.5 border border-[#c5c6cd] uppercase font-bold transition-all flex items-center gap-2 ${
                currentPage === totalPages
                  ? 'opacity-40 cursor-not-allowed bg-[#efedef] text-[#75777e]'
                  : 'bg-white text-[#1b1b1d] hover:bg-[#00677f] hover:text-white shadow-2xs'
              }`}
            >
              <span>Successivo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

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


