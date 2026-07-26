export type NavTab = 'home' | 'indagini' | 'metodologie' | 'contatti' | 'triage';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  authLevel: string;
  image: string;
  icon: string;
}

export interface Dossier {
  id: string;
  code: string;
  number: string;
  title: string;
  status: 'Confirmed' | 'Active' | 'Verified' | 'Strategic';
  statusColor: string;
  description: string;
  fullDetails: string;
  checkpoints: string[];
  category: 'Delitti' | 'Criminologia Clinica' | 'Diritto del Lavoro' | 'Geografica';
}

export interface Methodology {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  accuracy: string;
  leadTime: string;
  isoStandard: string;
  version: string;
  certified: boolean;
  digitalSecure: boolean;
  technicalDetails: string;
  equipmentUsed: string[];
}

export interface TriageFormState {
  caseType: string;
  evidenceAvailable: string[];
  urgency: 'standard' | 'urgent' | 'emergency';
  jurisdiction: string;
  notes: string;
}

export interface TriageResult {
  recommendedProtocol: string;
  estimatedLeadTime: string;
  confidenceScore: number;
  assignedTaskforceRole: string;
  requiredRepertoTypes: string[];
  protocolCode: string;
}

export interface EvidenceSample {
  id: string;
  name: string;
  type: 'DNA' | 'Ballistics' | 'CCTV Video' | 'Document Hash';
  hash: string;
  integrity: '100% Valid' | 'Tamper Detected' | 'Analyzing';
  dateAdded: string;
  details: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorRole: string;
  category: string;
  status: 'Risolto' | 'Innocenza Dimostrata' | 'Caso Riaperto' | 'Archiviato';
  caseCode?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
