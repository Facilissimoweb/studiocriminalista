import React, { useState } from 'react';
import { METHODOLOGIES } from '../data/forensicData';
import { Methodology } from '../types';
import { Search, Filter, ShieldCheck, History, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

interface MetodologieViewProps {
  onOpenMethodology: (m: Methodology) => void;
  initialQuery?: string;
}

export const MetodologieView: React.FC<MetodologieViewProps> = ({
  onOpenMethodology,
  initialQuery = ''
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutti');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const categories = ['Tutti', 'Biologia Forense', 'Balistica & Fisica', 'Criminologia', 'Digital Forensics', 'Documentoscopia'];

  const filtered = METHODOLOGIES.filter((m) => {
    const matchesCategory = selectedCategory === 'Tutti' || m.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      m.title.toLowerCase().includes(q) ||
      m.code.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  const paginatedItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="space-y-12 pb-16 pt-6">
      {/* Header Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto border-l-4 border-[#000000] pl-6 py-2">
        <span className="font-mono-tech text-xs text-[#00677f] uppercase tracking-[0.2em] block mb-2 font-bold">
          Technical Registry / Forensic Index
        </span>
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] max-w-4xl">
          Indice Completo delle Metodologie & Protocolli Scientifici
        </h1>

        {/* Search & Filter Bar */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch justify-between border-t border-[#c5c6cd] pt-6">
          <div className="flex-1 relative">
            <label className="font-mono-tech text-[10px] text-[#75777e] uppercase mb-1 block">
              Cerca Protocollo o Codice Metodologico
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Es: MET_DNA_01, Balistica, CCTV o ISO..."
                className="w-full bg-[#ffffff] border border-[#c5c6cd] focus:border-[#00677f] h-12 pl-10 pr-4 font-mono-tech text-xs text-[#1b1b1d] focus:outline-none transition-all"
              />
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#75777e]" />
            </div>
          </div>

          <div className="flex gap-2 items-end">
            <div className="flex-1 md:w-auto">
              <label className="font-mono-tech text-[10px] text-[#75777e] uppercase mb-1 block">
                Filtra Categoria
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="h-12 bg-[#ffffff] border border-[#c5c6cd] px-3 font-mono-tech text-xs text-[#1b1b1d] focus:outline-none focus:border-[#00677f] uppercase"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Registry Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        {paginatedItems.length === 0 ? (
          <div className="p-12 text-center bg-[#ffffff] border border-[#c5c6cd]">
            <p className="font-mono-tech text-sm text-[#75777e]">
              Nessun protocollo trovato per "{searchQuery}". Riprova con un altro codice (es: MET_DNA_01).
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Tutti');
              }}
              className="mt-4 px-4 py-2 bg-[#000000] text-white font-mono-tech text-xs uppercase"
            >
              Reset Filtri
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-px bg-[#c5c6cd] border border-[#c5c6cd]">
            {paginatedItems.map((methodology) => (
              <article
                key={methodology.id}
                className="bg-[#ffffff] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:bg-[#f5f3f5] transition-colors relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#00677f] group-hover:h-full transition-all duration-300"></div>

                {/* Left ID block */}
                <div className="w-full md:w-48 shrink-0">
                  <div className="font-mono-tech text-[10px] text-[#75777e] mb-1 font-bold">REGISTRY_ID</div>
                  <div className="font-mono-tech text-[#00677f] font-bold text-lg">{methodology.code}</div>
                  
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {methodology.certified && (
                      <span className="px-2 py-0.5 bg-[#00677f]/10 border border-[#00677f] text-[#00677f] font-mono-tech text-[10px] uppercase font-bold">
                        CERTIFICATO
                      </span>
                    )}
                    {methodology.digitalSecure && (
                      <span className="px-2 py-0.5 bg-[#000000] text-white font-mono-tech text-[10px] uppercase">
                        DIGITAL_SECURE
                      </span>
                    )}
                  </div>
                </div>

                {/* Main Body */}
                <div className="flex-1 space-y-3">
                  <h3 className="font-headline text-xl font-bold text-[#000000]">
                    {methodology.title}
                  </h3>
                  <p className="font-body text-sm text-[#44474d] leading-relaxed max-w-3xl">
                    {methodology.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 pt-2 font-mono-tech text-[11px] text-[#75777e]">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#00677f]" />
                      <span className="uppercase">ISO: {methodology.isoStandard}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <History className="w-4 h-4 text-[#75777e]" />
                      <span className="uppercase">Ver: {methodology.version}</span>
                    </div>
                    <div className="text-[#00677f] font-bold">
                      Accuratezza: {methodology.accuracy}
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <div className="w-full md:w-auto self-stretch flex items-end">
                  <button
                    onClick={() => onOpenMethodology(methodology)}
                    className="w-full md:w-auto px-6 py-3 border border-[#000000] text-[#000000] font-mono-tech text-xs uppercase font-bold hover:bg-[#000000] hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    Dettagli Protocollo <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-[#c5c6cd] pt-6 gap-4">
          <div className="font-mono-tech text-xs text-[#75777e]">
            VISUALIZZAZIONE {paginatedItems.length} DI {filtered.length} METODOLOGIE
          </div>

          {totalPages > 1 && (
            <div className="flex gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-3 py-1.5 border border-[#c5c6cd] font-mono-tech text-xs disabled:opacity-40 hover:bg-[#eae7ea]"
              >
                &lt; Precedente
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`w-8 h-8 font-mono-tech text-xs flex items-center justify-center ${
                    currentPage === p ? 'bg-[#000000] text-white font-bold' : 'border border-[#c5c6cd] hover:bg-[#eae7ea]'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-3 py-1.5 border border-[#c5c6cd] font-mono-tech text-xs disabled:opacity-40 hover:bg-[#eae7ea]"
              >
                Successivo &gt;
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
