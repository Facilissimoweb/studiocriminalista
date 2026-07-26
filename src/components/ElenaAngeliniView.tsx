import React, { useState } from 'react';
import { 
  UserCheck, 
  Award, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Search, 
  FileText, 
  Quote, 
  Building2, 
  Calendar,
  CheckCircle2,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

type ActivityCategory = 'Tutte le attività' | 'Consulenza' | 'Formazione' | 'Ricerca' | 'Pubblicazioni';

interface ActivityItem {
  id: string;
  date: string;
  category: 'Consulenza' | 'Formazione' | 'Ricerca' | 'Pubblicazioni';
  title: string;
  description: string;
  bullets?: string[];
  location?: string;
  status?: string;
}

const ACTIVITIES: ActivityItem[] = [
  // CONSULENZA
  {
    id: 'cons-1',
    date: 'OTTOBRE 2023',
    category: 'Consulenza',
    title: 'Progettazione partecipata ex Quartiere 4, Rimini',
    description: "Partecipa alla progettazione partecipata dell'ex Quartiere 4, Rimini, puntando sulla continuità delle attività di capacitazione delle persone portate avanti dai collettivi e dalle associazioni locali (relazione socio-criminologica disponibile su Academia)."
  },
  {
    id: 'cons-2',
    date: 'SETTEMBRE - NOVEMBRE 2022',
    category: 'Consulenza',
    title: 'Avvio del Protocollo Zeus a Rimini',
    description: 'Insieme alla Dottoressa Ilaria Laghi e CIPM (Centro Italiano per la Promozione della Mediazione), avvia il Protocollo Zeus tra il CIPM e la Questura di Rimini, volto alla prevenzione della violenza e al recupero dei soggetti maltrattanti.'
  },
  {
    id: 'cons-3',
    date: 'SETTEMBRE - NOVEMBRE 2022',
    category: 'Consulenza',
    title: 'Profilazione digitale e stalking',
    description: 'Insieme alla Dottoressa Sara Bardi ricostruisce il comportamento digitale e stila il profilo di uno stalker (procedimento in corso).'
  },
  {
    id: 'cons-4',
    date: 'DA GENNAIO 2022',
    category: 'Consulenza',
    title: 'Pool difensivo per il caso Federico Carnicci',
    description: 'Insieme alla Dottoressa Sara Bardi partecipa al Pool difensivo per richiedere la riapertura del caso concernente la morte di Federico Carnicci, avvenuta a Roma nel 2015.'
  },
  {
    id: 'cons-5',
    date: 'DAL 10 MAGGIO 2022',
    category: 'Consulenza',
    title: 'Supporto gratuito con Autodifesa Transfemminista',
    description: "Collaborazione a titolo gratuito con AUTODIFESA TRANSFEMMINISTA (Pride OFF, Non Una di Meno e Casa Madiba di Rimini) per l'accoglienza e il supporto legale-criminologico delle vittime di violenza."
  },
  {
    id: 'cons-6',
    date: 'SETTEMBRE 2021 - OTTOBRE 2022',
    category: 'Consulenza',
    title: 'Pool difensivo per serie di incendi a Grosseto',
    description: 'Insieme alla Dottoressa Sara Bardi e all’Avvocato Fornaciari Chittoni, partecipa al Pool difensivo di V. M. in relazione all’imputazione di 50 incendi boschivi e rurali verificatisi a Grosseto negli anni 2016-2017.'
  },
  {
    id: 'cons-7',
    date: 'OTTOBRE - NOVEMBRE 2021',
    category: 'Consulenza',
    title: 'Consulenza stragiudiziale per omicidio (Rimini)',
    description: 'Consulenza stragiudiziale tecnica per G. L., in merito a un caso di omicidio avvenuto a Rimini nel 2020.'
  },
  {
    id: 'cons-8',
    date: 'SETTEMBRE 2021',
    category: 'Consulenza',
    title: 'Progetto SAIV, Sportelli DIANA e ZEUS',
    description: 'Presentazione del “Progetto SAIV, Sportelli DIANA e ZEUS contro la violenza”, elaborato in collaborazione con la Dott.ssa Sara Bardi in occasione delle elezioni comunali di Grosseto per la prevenzione della violenza domestica e di genere.'
  },
  {
    id: 'cons-9',
    date: 'DA GENNAIO 2019',
    category: 'Consulenza',
    title: 'Collaborazione con Forensic Consultants Associates',
    description: 'Collaborazione attiva sul territorio e in procedimenti tecnici complessi con Forensic Consultants Associates, insieme alle dottoresse Ilaria Laghi e Daniela Cavuoto.'
  },
  {
    id: 'cons-10',
    date: 'OTTOBRE 2018',
    category: 'Consulenza',
    title: 'Graduatoria Esperto Criminologo Clinico ex art. 80',
    description: 'Inserimento in graduatoria come Esperto Criminologo clinico ex. art. 80 Legge 354/75 per gli istituti penitenziari dell’Emilia-Romagna e delle Marche.'
  },
  {
    id: 'cons-11',
    date: 'DA NOVEMBRE 2014',
    category: 'Consulenza',
    title: 'PROGETTO PROMETEO: Sportello Antiviolenza',
    description: 'Avvio e coordinamento del PROGETTO PROMETEO: Sportello di ascolto e orientamento contro Violenza, Mobbing, Stalking e Bullismo rivolto a donne e uomini, attivo a Rimini presso il centro Arbor Vitae.'
  },

  // FORMAZIONE
  {
    id: 'form-1',
    date: '14 OTTOBRE 2023',
    category: 'Formazione',
    title: 'Settimana della Sociologia 2023',
    description: 'Relatrice al workshop online "Il Mestiere del Sociologo in Criminologia" trasmesso in diretta sul canale YouTube, analizzando le potenzialità della Sociologia nell\'investigare le reti sociali (Hachen, 2018) e le dinamiche di potere (Gordon, 2022).',
    bullets: [
      'Analisi sul ruolo del Criminologo di formazione sociologica nei confronti di PM, avvocati e investigatori.',
      'Spiegazione teorico-pratica di una consulenza di analisi criminale sociologica e workshop di 6 ore.'
    ]
  },
  {
    id: 'form-2',
    date: '24 NOVEMBRE 2022',
    category: 'Formazione',
    title: 'Audizione al Consiglio Comunale di Rimini',
    description: "Audizione ufficiale presso il Consiglio Comunale di Rimini in merito all'attivazione del Protocollo Zeus e all'efficacia delle misure di ammonimento del Questore nei casi di stalking e violenza domestica."
  },
  {
    id: 'form-3',
    date: '22 NOVEMBRE 2021',
    category: 'Formazione',
    title: 'Formazione Arbor Vitae su Stalking e Relazioni Abusive',
    description: 'Corso di formazione interna online rivolto ai professionisti di Arbor Vitae intitolato "Stalking e relazioni abusive: red flags e delicatezza della relazione di aiuto".'
  },
  {
    id: 'form-4',
    date: 'AGOSTO - SETTEMBRE 2021',
    category: 'Formazione',
    title: 'Docenza AICIS per Zero Academy',
    description: 'Co-relatrice con la Dott.ssa Ilaria Laghi per Zero Academy per il corso nazionale AICIS su “Giustizia Riparativa e Mediazione Penale”, curando i moduli relativi a “Nozioni di Vittimologia” e “Strumenti della Giustizia riparativa”.'
  },
  {
    id: 'form-5',
    date: '7 APRILE 2021',
    category: 'Formazione',
    title: 'Le tecniche di interrogatorio - Associazione Primola',
    description: 'Co-relatrice al corso specialistico di Criminologia per l’Associazione Primola (Imola, online) sul tema cardine de “Le tecniche di interrogatorio”.'
  },
  {
    id: 'form-6',
    date: '28 NOVEMBRE 2020',
    category: 'Formazione',
    title: 'Le Radici della violenza - Convegno Nazionale',
    description: 'Relatrice accreditata sul tema “Le Radici della violenza” al convegno nazionale intitolato “Storie di violenza e storie di rinascita”, organizzato online in cooperazione con l’Università di Pisa e il CAFRE.'
  },
  {
    id: 'form-7',
    date: '25 NOVEMBRE 2017',
    category: 'Formazione',
    title: 'Io non sono tua - Butterfly Riccione',
    description: 'Relatrice al convegno pubblico “Io non sono tua” incentrato sul contrasto alla violenza di genere, organizzato dall’associazione Butterfly presso il Palazzo del Turismo di Riccione.'
  },
  {
    id: 'form-8',
    date: '18 NOVEMBRE 2017',
    category: 'Formazione',
    title: 'La violenza domestica omosessuale e sindrome di Procne',
    description: 'Relatrice alla presentazione del volume di Gloria Mazzeo “GELOSA-MENTE. Riflessioni per conoscere, educare, prevenire” a Riccione, con un intervento specialistico incentrato su “La sindrome di Procne e la violenza domestica nelle coppie omosessuali”.'
  },
  {
    id: 'form-9',
    date: '2016 - 2017',
    category: 'Formazione',
    title: 'Collaborazione Arcigay Rimini "Alan Turing"',
    description: 'Attività seminariale e interventi come relatrice in dibattiti socio-culturali organizzati da Arcigay Rimini:',
    bullets: [
      '2 Aprile 2017: Relatrice al dibattito teatrale post-rappresentazione "Masculu e Fìammina" a Montescudo (RN).',
      '12 Dicembre 2016: Relatrice al panel "Cinema e Psicoanalisi: relazioni affettive nel cinema di Ang Lee (Brokeback Mountain)", insieme al Dr. Cottone e alla Dott.ssa Vannini a Sant’Arcangelo di Romagna.',
      '29 Novembre 2016: Relatrice al dibattito sul film "Dallas Buyers Club" con il Circolo Giovani Democratici a Cesena.',
      '11 Marzo 2016: Relatrice in merito a "Migrazioni e diritti LGBTI" a Cesena.'
    ]
  },
  {
    id: 'form-10',
    date: 'GENNAIO - MARZO 2015',
    category: 'Formazione',
    title: 'Docenza Comunicazione e Negoziazione Iscom-ER',
    description: 'Docente incaricata per l’insegnamento delle materie “Comunicazione professionale e Stili negoziali” per Iscom-ER, all’interno del percorso formativo obbligatorio per Apprendisti.'
  },

  // RICERCA
  {
    id: 'ric-1',
    date: 'DA SETTEMBRE 2022',
    category: 'Ricerca',
    title: 'Analisi incidenti stradali per ASAPS & IlCentauro',
    description: 'Collaborazione attiva con ASAPS (Associazione Sostenitori ed Amici della Polizia Stradale) per la rivista scientifico-professionale IlCentauro (Sapidata Editore), curando la reportistica statistica ed empirica sugli incidenti stradali su scala nazionale.'
  },
  {
    id: 'ric-2',
    date: 'GENNAIO 2020 - LUGLIO 2021',
    category: 'Ricerca',
    title: 'Progetto "Dal focolare al mondo" (Regione ER)',
    description: 'Ricercatrice sul campo e co-curatrice editoriale dell’indagine sociologica finanziata dalla Regione Emilia-Romagna tramite l’associazione “Per Le Donne”, volta ad esaminare la qualità della vita e i carichi di lavoro delle donne lavoratrici nel territorio circondariale imolese.'
  },
  {
    id: 'ric-3',
    date: 'GIUGNO - NOVEMBRE 2017',
    category: 'Ricerca',
    title: 'Start Up e analisi di mercato (Rimini)',
    description: 'Elaborazione del progetto di impresa e conduzione di una approfondita ricerca di mercato sul settore della sigaretta elettronica e dei relativi riflessi sociali ed economici sul territorio, ottenendo finanziamento d’impresa agevolato in sinergia con Banca Etica e Primo Miglio.'
  },

  // PUBBLICAZIONI
  {
    id: 'pub-1',
    date: 'SETTEMBRE 2021',
    category: 'Pubblicazioni',
    title: 'Competizione aziendale ed evoluzione delle dinamiche lavorative',
    description: 'Autrice del saggio accademico “Competizione funzionale e disfunzionale all’interno dell’azienda. Due casi” inserito nel volume a cura di Serena Gianfaldoni "Competizione funzionale e disfunzionale. Le radici della competizione e l\'esercizio in ambito lavorativo", Collana Risorse Umane n.8, Master Risorse Umane CAFRE, Università di Pisa.'
  },
  {
    id: 'pub-2',
    date: 'GENNAIO 2016',
    category: 'Pubblicazioni',
    title: 'Psicopatologia sessuale o crimine? - Rivista di Sessuologia',
    description: 'Co-autrice insieme alla Dottoressa Sara Bardi del saggio scientifico "Psicopatologia sessuale o crimine?" focalizzato sull\'analisi criminologica dei reati sessuali, pubblicato sulla prestigiosa "RIVISTA DI SESSUOLOGIA" (Vol. 39 - n.1/2015) all’interno dello speciale "La violenza sessuale".'
  },
  {
    id: 'pub-3',
    date: 'LUGLIO 2007',
    category: 'Pubblicazioni',
    title: 'I culti distruttivi - Monografia',
    description: 'Autrice del volume monografico "I culti distruttivi. Il lavoro del consulente di investigazioni e sicurezza per le associazioni di aiuto alle vittime" (Edizioni Il Ponte Vecchio, Cesena), testo di riferimento per gli analisti della devianza cultuale e dei gruppi coercitivi.'
  }
];

const CATEGORIES: ActivityCategory[] = [
  'Tutte le attività',
  'Consulenza',
  'Formazione',
  'Ricerca',
  'Pubblicazioni'
];

interface ElenaAngeliniViewProps {
  onOpenTriage?: () => void;
}

export const ElenaAngeliniView: React.FC<ElenaAngeliniViewProps> = ({ onOpenTriage }) => {
  const [selectedFilter, setSelectedFilter] = useState<ActivityCategory>('Tutte le attività');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Reset page on filter or search change
  const handleFilterChange = (cat: ActivityCategory) => {
    setSelectedFilter(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const filteredActivities = ACTIVITIES.filter((item) => {
    const matchesCategory = selectedFilter === 'Tutte le attività' || item.category === selectedFilter;
    const matchesQuery = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage) || 1;
  const paginatedActivities = filteredActivities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getCategoryCount = (cat: ActivityCategory) => {
    if (cat === 'Tutte le attività') return ACTIVITIES.length;
    return ACTIVITIES.filter((a) => a.category === cat).length;
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Consulenza':
        return 'bg-[#00677f]/10 text-[#00677f] border-[#00677f]/30';
      case 'Formazione':
        return 'bg-purple-900/10 text-purple-900 border-purple-300';
      case 'Ricerca':
        return 'bg-blue-900/10 text-blue-900 border-blue-300';
      case 'Pubblicazioni':
        return 'bg-amber-900/10 text-amber-900 border-amber-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Consulenza':
        return <Briefcase className="w-3.5 h-3.5" />;
      case 'Formazione':
        return <GraduationCap className="w-3.5 h-3.5" />;
      case 'Ricerca':
        return <Search className="w-3.5 h-3.5" />;
      case 'Pubblicazioni':
        return <BookOpen className="w-3.5 h-3.5" />;
      default:
        return <FileText className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Full-Page Background Hero Section */}
      <section className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden border-b border-[#c5c6cd]">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920"
            alt="Elena Angelini - Studio Criminalistica Hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/65"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 py-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="space-y-5 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#00677f]/40 border border-[#00d2ff]/60 px-3 py-1 font-mono-tech text-xs font-bold text-[#00d2ff] uppercase tracking-wider backdrop-blur-sm">
                STATION // CONSULTANT_PROFILE // BIO_V1.0
              </div>

              <div>
                <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
                  Elena Angelini
                </h1>
                <p className="font-mono-tech text-xs sm:text-sm text-[#00d2ff] uppercase font-bold tracking-widest mt-1">
                  Criminologia // Criminalistica // Scienze Forensi
                </p>
              </div>

              {/* Philosophical Quote Block */}
              <div className="p-5 bg-black/60 border-l-4 border-[#00d2ff] space-y-2 backdrop-blur-md border-y border-r border-white/10">
                <Quote className="w-6 h-6 text-[#00d2ff] opacity-80" />
                <p className="font-headline text-base sm:text-lg italic font-semibold text-white leading-snug">
                  "Una cicala potrebbe impiegare 17 anni a schiudersi..."
                </p>
                <p className="font-body text-xs sm:text-sm text-gray-300 font-medium">
                  ...così come l'eventuale emergere dei fatti di un delitto.
                </p>
              </div>
            </div>

            {/* Profile Summary Card / Callout */}
            <div className="w-full md:w-80 bg-black/75 border border-white/20 p-6 shrink-0 space-y-4 backdrop-blur-md shadow-2xl">
              <div className="font-mono-tech text-xs text-[#00d2ff] uppercase font-bold tracking-wider pb-2 border-b border-white/15">
                INFORMAZIONI GENERALI
              </div>
              <div className="space-y-2.5 font-body text-xs text-gray-200">
                <p><strong className="text-white">Ruolo:</strong> Consulente Criminologa e Criminalista</p>
                <p><strong className="text-white">Iscrizione:</strong> Esperto Criminologo Clinico ex art. 80</p>
                <p><strong className="text-white">Sede:</strong> Rimini (RN) - c/o Arbor Vitae</p>
                <p><strong className="text-white">Specializzazione:</strong> Profilazione, Stalking, Indagini Difensive e Vittimologia</p>
              </div>

              {onOpenTriage && (
                <button
                  onClick={onOpenTriage}
                  className="w-full py-3 bg-[#00d2ff] text-black font-mono-tech text-xs font-extrabold uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>RICHIEDI CONSULENZA</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Extended Bio Text Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-white border border-[#c5c6cd] p-6 md:p-8 grid md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <h2 className="font-headline text-xl font-bold uppercase text-[#000000] border-l-3 border-[#00677f] pl-3">
              La Consulente Elena Angelini
            </h2>
          </div>
          <div className="md:col-span-9 space-y-4 font-body text-sm md:text-base text-[#44474d] leading-relaxed">
            <p>
              Alla sinergica collaborazione di aziende, studi legali e altri professionisti di ambito criminologico ha affiancato la sensibilità coltivata nel supporto alle vittime di stalking e mobbing.
            </p>
            <p>
              Mette a disposizione la propria esperienza e conoscenza per la difesa e la parte civile nei procedimenti penali e per le associazioni e gli enti di prevenzione del crimine e della violenza.
            </p>
          </div>
        </div>
      </section>

      {/* Activity Register Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-6">
        <div className="border-b border-[#c5c6cd] pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono-tech text-xs text-[#00677f] uppercase font-bold tracking-widest block mb-1">
              // REGISTRO ATTIVITÀ
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-extrabold text-[#000000] tracking-tight">
              Cronologia delle Attività
            </h2>
          </div>

          <div className="text-xs font-mono-tech text-[#75777e]">
            Mostrando {paginatedActivities.length} di {filteredActivities.length} attività ({ACTIVITIES.length} totali)
          </div>
        </div>

        {/* Category Filter & Search Bar */}
        <div className="bg-[#ffffff] border border-[#c5c6cd] p-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5 font-mono-tech text-xs">
              {CATEGORIES.map((cat) => {
                const count = getCategoryCount(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => handleFilterChange(cat)}
                    className={`px-3 py-2 uppercase transition-all font-bold flex items-center gap-2 ${
                      selectedFilter === cat
                        ? 'bg-[#000000] text-white shadow-xs'
                        : 'bg-[#efedef] text-[#44474d] hover:bg-[#eae7ea] hover:text-[#000000]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono-tech ${
                        selectedFilter === cat
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

            <div className="relative w-full md:w-72 flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Filtra attività per parola..."
                  className="w-full bg-[#f5f3f5] border border-[#c5c6cd] h-9 pl-8 pr-3 font-mono-tech text-xs text-[#1b1b1d] focus:outline-none focus:border-[#00677f]"
                />
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#75777e]" />
              </div>

              {(searchQuery || selectedFilter !== 'Tutte le attività') && (
                <button
                  onClick={() => {
                    setSelectedFilter('Tutte le attività');
                    setSearchQuery('');
                    setCurrentPage(1);
                  }}
                  className="h-9 px-2.5 bg-[#efedef] hover:bg-[#c5c6cd] text-xs font-mono-tech font-bold uppercase transition-colors shrink-0"
                  title="Azzera filtri"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Timeline Items Query Loop */}
        <div className="space-y-4">
          {filteredActivities.length === 0 ? (
            <div className="bg-[#ffffff] border border-[#c5c6cd] p-8 text-center font-mono-tech text-xs text-[#75777e] space-y-3">
              <p>Nessuna attività trovata per il filtro o la ricerca applicata.</p>
              <button
                onClick={() => {
                  setSelectedFilter('Tutte le attività');
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="px-4 py-2 bg-[#00677f] text-white uppercase font-bold text-xs hover:bg-[#000000] transition-colors"
              >
                Azzera Filtri
              </button>
            </div>
          ) : (
            paginatedActivities.map((act, index) => {
              const globalIndex = (currentPage - 1) * itemsPerPage + index + 1;
              return (
                <div
                  key={act.id}
                  className="bg-[#ffffff] border border-[#c5c6cd] border-l-4 border-l-[#00677f] p-5 sm:p-6 hover:border-[#00677f] transition-all relative overflow-hidden group shadow-xs hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-[#efedef] pb-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono-tech text-[10px] text-[#75777e] font-bold">
                        REF #{globalIndex.toString().padStart(2, '0')}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 border font-mono-tech text-[10px] font-bold uppercase ${getCategoryBadgeColor(act.category)}`}>
                        {getCategoryIcon(act.category)}
                        {act.category}
                      </span>
                      <span className="font-mono-tech text-xs font-bold text-[#00677f] uppercase">
                        {act.date}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-headline text-lg md:text-xl font-bold text-[#000000] mb-2 group-hover:text-[#00677f] transition-colors">
                    {act.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#44474d] leading-relaxed">
                    {act.description}
                  </p>

                  {act.bullets && act.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5 pl-2 border-l-2 border-[#00677f]/40 font-body text-xs text-[#1b1b1d]">
                      {act.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#00677f] font-bold">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-[#c5c6cd] pt-6 font-mono-tech text-xs">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`px-4 py-2 border border-[#c5c6cd] uppercase font-bold transition-all ${
                currentPage === 1
                  ? 'opacity-40 cursor-not-allowed bg-[#efedef]'
                  : 'bg-white hover:bg-[#00677f] hover:text-white'
              }`}
            >
              ← Precedente
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center border font-bold transition-all ${
                    currentPage === page
                      ? 'bg-[#000000] text-white border-[#000000]'
                      : 'bg-white text-[#44474d] border-[#c5c6cd] hover:border-[#00677f]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={`px-4 py-2 border border-[#c5c6cd] uppercase font-bold transition-all ${
                currentPage === totalPages
                  ? 'opacity-40 cursor-not-allowed bg-[#efedef]'
                  : 'bg-white hover:bg-[#00677f] hover:text-white'
              }`}
            >
              Successivo →
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
