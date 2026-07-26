import { TeamMember, Dossier, Methodology, EvidenceSample } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'elena-angelini',
    name: 'Elena Angelini',
    role: 'CHIEF ANALYST',
    title: 'Esperta in Criminalistica e Digital Forensics',
    bio: 'Coordinatrice dei protocolli di verità scientifica. Oltre 15 anni di attività peritale nei principali casi giudiziari nazionali, con specializzazione in repertazione genetica e investigazioni difensive avanzate.',
    authLevel: '01 // Senior',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    icon: 'terminal'
  },
  {
    id: 'marco-valli',
    name: 'Dr. Marco Valli',
    role: 'LEGAL STRATEGIST',
    title: 'Specialista in diritto penale e supporto procedurale',
    bio: 'Consulente legale di taskforce per l’articolazione delle strategie difensive di natura tecnica. Curatore della conformità procedurale ex art. 391-bis c.p.p. per la validità probatoria in dibattimento.',
    authLevel: '02 // Legal',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    icon: 'gavel'
  },
  {
    id: 'luca-moretti',
    name: 'Ing. Luca Moretti',
    role: 'TECHNICAL OFFICER',
    title: 'Responsabile dei laboratori di analisi chimica e balistica',
    bio: 'Ingegnere forense e perito balistico iscritto all’Albo dei Periti. Direttore dei laboratori di microscopia elettronica SEM-EDX, fotogrammetria 3D e analisi di residui da sparo.',
    authLevel: '02 // Lab_Head',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800',
    icon: 'science'
  }
];

export const DOSSIERS: Dossier[] = [
  {
    id: 'dos-01',
    code: 'DET_RE_01',
    number: '01',
    title: 'Indagini difensive su delitti',
    status: 'Confirmed',
    statusColor: 'bg-[#00d2ff]/10 text-[#00677f] border-[#00d2ff]',
    description: 'Attività di investigazione volta alla ricerca di elementi di prova a favore dell\'assistito, ai sensi del Codice di Procedura Penale. Analisi del sopralluogo, escussione testimoni e consulenza tecnica sulle risultanze oggettive.',
    fullDetails: 'Il protocollo investigativo difensivo ex art. 391-bis c.p.p. permette alla difesa di svolgere indagini parallele e autonome. La nostra taskforce effettua riesami della scena del crimine, perizie fotografiche e metriche, riesame delle tracce biologiche e verbali d’udienza con supporto di consulenti peritali di alto profilo.',
    checkpoints: ['Analisi scena del crimine', 'Ricerca prove scientifiche', 'Supporto legale specializzato', 'Superperizia di parte'],
    category: 'Delitti'
  },
  {
    id: 'dos-02',
    code: 'DET_RE_02',
    number: '02',
    title: 'Morti sospette (Autopsia psicologica)',
    status: 'Active',
    statusColor: 'bg-[#00d2ff]/10 text-[#00677f] border-[#00d2ff]',
    description: 'Ricostruzione del profilo psicologico e delle circostanze di decesso in casi di dubbia interpretazione tra suicidio, omicidio o incidente. Analisi dei vissuti e delle comunicazioni pre-mortem.',
    fullDetails: 'Metodologia scientifica retrospettiva basata sullo standard NASH (Natural, Accidental, Suicide, Homicide). Analizziamo messaggi, note, registri telefonici, stato d’animo e anamnesi relazionale della vittima per distinguere eventi suicidari da simulazioni omicidiarie o infortuni.',
    checkpoints: ['Profiling vittimologico', 'Analisi documentale e digitale', 'Consulenza su cartelle cliniche', 'Valutazione stato emotivo pre-mortem'],
    category: 'Criminologia Clinica'
  },
  {
    id: 'dos-03',
    code: 'DET_RE_03',
    number: '03',
    title: 'Diritto del lavoro (Mobbing/Bossing)',
    status: 'Verified',
    statusColor: 'bg-[#00d2ff]/10 text-[#00677f] border-[#00d2ff]',
    description: 'Accertamento tecnico delle condotte vessatorie in ambito lavorativo. Valutazione dell\'impatto psicologico e documentazione cronologica delle azioni moleste per fini risarcitori.',
    fullDetails: 'Indagine tecnico-peritale volta a documentare la sistematicità delle condotte di emarginazione, demansionamento e persecuzione aziendale. Vengono incrociati log di posta aziendale, orari di timbratura, messaggistica e testimonianze per strutturare un fascicolo inattaccabile in sede giudiziale.',
    checkpoints: ['Analisi gerarchica', 'Rilevazione danno biologico', 'Perizia tecnica di parte', 'Relazione cronologica eventi'],
    category: 'Diritto del Lavoro'
  },
  {
    id: 'dos-04',
    code: 'DET_RE_04',
    number: '04',
    title: 'Analisi criminologica geografica',
    status: 'Strategic',
    statusColor: 'bg-[#00d2ff]/10 text-[#00677f] border-[#00d2ff]',
    description: 'Studio del territorio e dei pattern comportamentali del reo. Utilizzo di software GIS e modelli statistici per determinare l\'area di base o prevedere spostamenti criminali.',
    fullDetails: 'Geographic Profiling applicato sia alle investigazioni preventive che repressive. Permette di circoscrivere l’area di residenza o di ancoraggio operativo di soggetti ignoti attraverso algoritmi di dispersione spaziale e analisi delle celle telefoniche agganciate.',
    checkpoints: ['Mapping criminale', 'Analisi hot-spot', 'Profilazione spaziale', 'Incrocio tabulati e celle'],
    category: 'Geografica'
  },
  {
    id: 'dos-05',
    code: 'DET_RE_05',
    number: '05',
    title: 'Acquisizione Forense Digital & Chain of Custody',
    status: 'Confirmed',
    statusColor: 'bg-[#00d2ff]/10 text-[#00677f] border-[#00d2ff]',
    description: 'Preservazione delle prove digitali (smartphone, PC, cloud) mediante copie bit-stream, calcolo dell’hash SHA-256 e verbalizzazione della catena di custodia inattaccabile.',
    fullDetails: 'Estrazione rigorosa in modalità Write-Blocker per evitare qualsiasi alterazione del supporto originale. Garantisce la piena utilizzabilità della prova informatica in sede processuale penale o civile.',
    checkpoints: ['Copia Bit-Stream hardware', 'Verifica SHA-256 e MD5', 'Verbalizzazione Catena di Custodia', 'Report di leggibilità Giudiziaria'],
    category: 'Delitti'
  }
];

export const METHODOLOGIES: Methodology[] = [
  {
    id: 'met-dna-01',
    code: 'MET_DNA_01',
    title: 'Criminalistica Biologica (DNA Forense)',
    category: 'Biologia Forense',
    description: 'Analisi avanzata di profili genetici, campionamento da tracce biologiche degradate e comparazione con database forensi internazionali tramite protocolli standardizzati ISO/IEC 17025.',
    accuracy: '99.999%',
    leadTime: '48-72H',
    isoStandard: 'ISO/IEC 17025',
    version: '4.2.1',
    certified: true,
    digitalSecure: true,
    technicalDetails: 'Estrazione del DNA nucleare e mitocondriale da reperti complessi (ossa, campioni ossei antichi, micro-tracce da contatto "touch DNA"). Tipizzazione STR (Short Tandem Repeats) su 24 loci e quantificazione fluorimetrica con Real-Time PCR.',
    equipmentUsed: ['Termociclatore Applied Biosystems 3500xl', 'Sequenziatore Capillare NGS', 'Cappa ad Flusso Laminare Classe II']
  },
  {
    id: 'met-bal-02',
    code: 'MET_BAL_02',
    title: 'Balistica Forense (Ricostruzione 3D)',
    category: 'Balistica & Fisica',
    description: 'Modellazione tridimensionale di traiettorie balistiche, analisi residui di sparo tramite SEM-EDX e analisi comparativa di bossoli e proiettili mediante microscopia stereoscopica.',
    accuracy: '99.8%',
    leadTime: '24-48H',
    isoStandard: 'UNI EN ISO 9001',
    version: '2.1.0',
    certified: true,
    digitalSecure: false,
    technicalDetails: 'Determinazione del calibro, della direzione di impatto e dell’angolo di tiro mediante scansione laser 3D e ricostruzione vettoriale della traiettoria. Analisi qualitativa delle particelle di GSR (Lead, Barium, Antimony) per la verifica dell’arma impiegata.',
    equipmentUsed: ['Microscopio Elettronico a Scansione (SEM-EDX)', 'Laser Scanner Leica RTC360', 'Comparatore Balistico Ottico']
  },
  {
    id: 'met-aut-03',
    code: 'MET_AUT_03',
    title: 'Criminologia Clinica (Autopsia Psicologica)',
    category: 'Criminologia',
    description: 'Investigazione retrospettiva del profilo psicologico e delle intenzioni della vittima (unequivocal deaths) mediante analisi documentale e interviste strutturate secondo standard NASH.',
    accuracy: '95.5%',
    leadTime: '5-7 Giorni',
    isoStandard: 'NASH Protocol',
    version: '1.5.5',
    certified: true,
    digitalSecure: false,
    technicalDetails: 'Valutazione multifattoriale del comportamento antecedente il decesso. Integrazione di dati clinici, storico psicologico, analisi dei contenuti digitali (social, chat, note) e colloqui psicodiagnostici con i prossimi congiunti.',
    equipmentUsed: ['Griglia di Valutazione NASH', 'Software di Analisi Testuale LIWC', 'Protocolli di Intervista Strutturata']
  },
  {
    id: 'met-bpa-04',
    code: 'MET_BPA_04',
    title: 'Scena del Crimine (Analisi macchie di sangue - BPA)',
    category: 'Trattamento Scena',
    description: 'Bloodstain Pattern Analysis (BPA): determinazione di origine, traiettoria e sequenza degli eventi ematici mediante calcoli matematici e software di simulazione vettoriale.',
    accuracy: '98.9%',
    leadTime: '36-48H',
    isoStandard: 'IABPA Certified',
    version: '3.3.0',
    certified: true,
    digitalSecure: true,
    technicalDetails: 'Classificazione geometrica delle macchie ematiche (proiezione, contatto, gocciolamento pascolante, impatto ad alta/bassa velocità). Calcolo dell’Area di Origine (AoO) nello spazio tridimensionale mediante analisi trigonometrica con stringing virtuale.',
    equipmentUsed: ['Software Faro Zone 3D BPA', 'Luce Alternativa Polifunzionale (LUMATECH)', 'Reattivi al Luminolo/Luminol G-100']
  },
  {
    id: 'met-ctv-07',
    code: 'MET_CTV_07',
    title: 'Digital Forensics (CCTV & Video Analysis)',
    category: 'Digital Forensics',
    description: 'Miglioramento fotogrammetrico, analisi dei metadati e verifica dell\'integrità dei flussi video di sorveglianza per accertamento identità e ricostruzione dinamiche.',
    accuracy: '99.2%',
    leadTime: '12-24H',
    isoStandard: 'ISO/IEC 27037',
    version: '5.0.1',
    certified: true,
    digitalSecure: true,
    technicalDetails: 'Processing di flussi video a bassa risoluzione mediante deblurring, super-resolution basata su AI forense, stabilizzazione ottica e misurazione antropometrica 3D per l\'identificazione di soggetti camuffati o targhe automobilistiche sfuocate.',
    equipmentUsed: ['Amped FIVE Forensic Video', 'Cognitech Video Investigator', 'Hardware workstation con GPU CUDA isolata']
  },
  {
    id: 'met-cyb-09',
    code: 'MET_CYB_09',
    title: 'Cyber Crime & Mobile Forensics (Extraction)',
    category: 'Digital Forensics',
    description: 'Estrazione fisica e logica da dispositivi mobili iOS/Android e chip Memory BGA. Decrittazione chat crittografate (WhatsApp, Signal, Telegram) e ricostruzione timeline.',
    accuracy: '99.9%',
    leadTime: '24-72H',
    isoStandard: 'ISO/IEC 27037',
    version: '2.4.0',
    certified: true,
    digitalSecure: true,
    technicalDetails: 'Estrazione di basso livello Physical Dump, recupero database SQLite corrotti, bypass di blocchi schermo o passcodes e geolocalizzazione dai metadati EXIF e dai log di rete Wi-Fi.',
    equipmentUsed: ['Cellebrite UFED Ultimate', 'Oxygen Forensic Detective', 'Cellebrite Premium System']
  },
  {
    id: 'met-grf-12',
    code: 'MET_GRF_12',
    title: 'Perizia Grafotecnica & Documentale',
    category: 'Documentoscopia',
    description: 'Analisi comparativa di scritture, firme e documenti d\'identità contraffatti mediante spettrofotometria infrarossa e analisi dei solchi a pressione.',
    accuracy: '97.8%',
    leadTime: '3-5 Giorni',
    isoStandard: 'ENFSI Guidelines',
    version: '1.8.0',
    certified: true,
    digitalSecure: false,
    technicalDetails: 'Verifica dell\'autenticità del gesto grafico, rilievo di manomissioni chimiche/fisiche mediante spettro IR e UV, analisi del solco cieco con stereomicroscopio ad incidenza di luce pascolante.',
    equipmentUsed: ['Spettrofotometro VSC8000 Foster+Freeman', 'Microscopio Stereoscopico Leica', 'Micro-densitometro Ottico']
  }
];

export const INITIAL_EVIDENCE_SAMPLES: EvidenceSample[] = [
  {
    id: 'EVD-9921',
    name: 'Reperto_B3_WhatsApp_Chat.db',
    type: 'Document Hash',
    hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    integrity: '100% Valid',
    dateAdded: '2026-07-25 14:32:01',
    details: 'Database estratto tramite UFED Physical Acquisition. Copia bit-stream verificata senza alterazioni di timestamp.'
  },
  {
    id: 'EVD-8842',
    name: 'CCTV_Camera_02_AppiaNuova.mp4',
    type: 'CCTV Video',
    hash: '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4',
    integrity: '100% Valid',
    dateAdded: '2026-07-25 16:10:45',
    details: 'Video DVR registrato a 15 fps. Applicato protocollo deblurring Amped FIVE per lettura targa veicolo.'
  },
  {
    id: 'EVD-1102',
    name: 'Traccia_Biologica_Tampone_04.dna',
    type: 'DNA',
    hash: 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e',
    integrity: '100% Valid',
    dateAdded: '2026-07-26 09:15:22',
    details: 'Profilo genetico estratto da touch DNA. STR tipizzato su 24 loci. Corrispondenza esclusione sospetto A.'
  }
];
