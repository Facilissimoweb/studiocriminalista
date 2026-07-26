import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/forensicData';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onOpenTriage?: () => void;
  onContactClick?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenTriage, onContactClick }) => {
  const [openId, setOpenId] = useState<string | null>('faq-01');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutti');

  const categories = ['Tutti', 'Indagini Difensive', 'Riservatezza & Privacy', 'Costi e Tempi', 'Valore Legale', 'Gestione Reperti', 'Revisione Processi'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'Tutti' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#efedef] py-16 md:py-24 border-y border-[#c5c6cd]">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-[#00677f]/10 border border-[#00677f] px-3 py-1">
            <HelpCircle className="w-3.5 h-3.5 text-[#00677f]" />
            <span className="font-mono-tech text-xs text-[#00677f] uppercase font-bold tracking-widest">
              DOMANDE FREQUENTI // FAQ CLIENT
            </span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#000000]">
            Tutto ciò che occorre sapere prima di affidarsi allo Studio
          </h2>
          <p className="font-body text-sm md:text-base text-[#44474d] max-w-2xl mx-auto leading-relaxed">
            Risposte chiare e trasparenti sugli aspetti procedurali, la riservatezza delle indagini, i tempi peritali e la validità legale in giudizio.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#ffffff] p-4 border border-[#c5c6cd] mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca tra le domande (es: art. 391-bis, costi, reperti, WhatsApp, riservatezza)..."
              className="w-full bg-[#f5f3f5] border border-[#c5c6cd] h-11 pl-10 pr-4 font-mono-tech text-xs text-[#1b1b1d] focus:outline-none focus:border-[#00677f] placeholder:text-[#75777e]"
            />
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#75777e]" />
          </div>

          <div className="flex flex-wrap gap-1.5 font-mono-tech text-[11px]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 uppercase transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#00677f] text-white font-bold'
                    : 'bg-[#efedef] text-[#44474d] hover:bg-[#eae7ea]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        {filteredFaqs.length === 0 ? (
          <div className="bg-[#ffffff] p-8 text-center border border-[#c5c6cd]">
            <p className="font-mono-tech text-xs text-[#75777e] mb-3">
              Nessuna risposta trovata per "{searchQuery}". Potete inviarci direttamente il vostro quesito.
            </p>
            {onContactClick && (
              <button
                onClick={onContactClick}
                className="px-5 py-2.5 bg-[#000000] text-white font-mono-tech text-xs uppercase font-bold hover:bg-[#00677f]"
              >
                Contatta la Taskforce
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`bg-[#ffffff] border transition-all ${
                    isOpen ? 'border-[#00677f] shadow-sm' : 'border-[#c5c6cd] hover:border-[#00677f]'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-body"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono-tech text-xs font-bold text-[#00677f] uppercase bg-[#00677f]/10 px-2 py-0.5 shrink-0 mt-0.5">
                        {faq.category}
                      </span>
                      <span className="font-headline font-bold text-base md:text-lg text-[#000000]">
                        {faq.question}
                      </span>
                    </div>

                    <div className="text-[#00677f] shrink-0 p-1">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-[#efedef] font-body text-sm text-[#44474d] leading-relaxed animate-in fade-in slide-in-from-top-1">
                      <div className="p-4 bg-[#f5f3f5] border-l-3 border-[#00677f]">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Contact/Support Box */}
        <div className="mt-10 p-6 bg-[#ffffff] border border-[#c5c6cd] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#00677f]/10 border border-[#00677f] text-[#00677f] shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-headline font-bold text-base text-[#000000]">
                Hai un dubbio specifico o una domanda riservata?
              </h4>
              <p className="font-body text-xs text-[#75777e]">
                Il nostro team risponde entro 2 ore operative con massima riservatezza.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            {onOpenTriage && (
              <button
                onClick={onOpenTriage}
                className="px-5 py-2.5 bg-[#000000] text-white font-mono-tech text-xs uppercase font-bold hover:bg-[#00677f] transition-all"
              >
                Avvia Triage Caso
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

