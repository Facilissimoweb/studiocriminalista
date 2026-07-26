import React, { useState } from 'react';
import { TriageFormState, TriageResult } from '../types';
import { X, ShieldCheck, ArrowRight, ArrowLeft, FileText, CheckCircle2, Clock, AlertTriangle, Send } from 'lucide-react';

interface TriageModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCode?: string;
  onSubmitInquiry: (summary: string) => void;
}

export const TriageModal: React.FC<TriageModalProps> = ({
  isOpen,
  onClose,
  preselectedCode,
  onSubmitInquiry
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formState, setFormState] = useState<TriageFormState>({
    caseType: preselectedCode || 'delitti',
    evidenceAvailable: [],
    urgency: 'standard',
    jurisdiction: 'Roma e Penisola Italiana',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  if (!isOpen) return null;

  const handleEvidenceToggle = (evidence: string) => {
    if (formState.evidenceAvailable.includes(evidence)) {
      setFormState({
        ...formState,
        evidenceAvailable: formState.evidenceAvailable.filter((e) => e !== evidence)
      });
    } else {
      setFormState({
        ...formState,
        evidenceAvailable: [...formState.evidenceAvailable, evidence]
      });
    }
  };

  const calculateResult = (): TriageResult => {
    if (formState.caseType.toLowerCase().includes('dna') || formState.caseType === 'delitti') {
      return {
        recommendedProtocol: 'Protocollo Integrato EA-DNA-391 (Indagini Difensive Biologiche & Genettiche)',
        estimatedLeadTime: '48 - 72 Ore',
        confidenceScore: 98,
        assignedTaskforceRole: 'Chief Analyst Elena Angelini + Taskforce Genetica',
        requiredRepertoTypes: ['Tracce biologiche', 'Reperti peritali', 'Fascicolo PM'],
        protocolCode: 'MET_DNA_01'
      };
    } else if (formState.caseType.toLowerCase().includes('ctv') || formState.caseType === 'cyber') {
      return {
        recommendedProtocol: 'Protocollo Digital Forensics & Video Enhancing ISO 27037',
        estimatedLeadTime: '24 - 48 Ore',
        confidenceScore: 99,
        assignedTaskforceRole: 'Chief Analyst Elena Angelini + Lab Digital Forensics',
        requiredRepertoTypes: ['Copia bit-stream DVR/Smartphone', 'Log di rete', 'File originali'],
        protocolCode: 'MET_CTV_07'
      };
    } else {
      return {
        recommendedProtocol: 'Protocollo Multidisciplinare di Criminologia Clinica e Balistica',
        estimatedLeadTime: '3 - 5 Giorni',
        confidenceScore: 96,
        assignedTaskforceRole: 'Dr. Marco Valli (Legal) + Ing. Luca Moretti (Lab)',
        requiredRepertoTypes: ['Fascicolo processuale completo', 'Verbale di sopralluogo', 'Cartelle cliniche'],
        protocolCode: 'MET_BAL_02'
      };
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateResult();
    const generatedCode = `EA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryCode(generatedCode);
    setSubmitted(true);
    onSubmitInquiry(`Protocollo ${result.protocolCode} - Codice Richiesta ${generatedCode}`);
  };

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#fbf9fb] border border-[#c5c6cd] w-full max-w-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 my-8">
        
        {/* Header */}
        <div className="bg-[#1b1b1d] text-white p-5 flex justify-between items-center border-b border-[#00d2ff]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#00d2ff]" />
            <div>
              <span className="font-mono-tech text-[10px] text-[#00d2ff] uppercase tracking-widest block">
                SYSTEM // FORENSIC CASE TRIAGE
              </span>
              <h3 className="font-headline text-base font-bold uppercase">
                Valutatore di Fattibilità & Protocollo Forense
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Steps */}
        {!submitted ? (
          <div className="p-6 md:p-8 space-y-6">
            
            {/* Step Indicator */}
            <div className="flex items-center justify-between border-b border-[#c5c6cd] pb-4">
              <span className="font-mono-tech text-xs text-[#00677f] font-bold uppercase">
                FASE {step} DI 3: {step === 1 ? 'Tipologia Quesito' : step === 2 ? 'Elementi & Reperti' : 'Valutazione & Urgenza'}
              </span>
              <div className="flex gap-1.5">
                <span className={`w-3 h-3 ${step >= 1 ? 'bg-[#00677f]' : 'bg-[#c5c6cd]'}`}></span>
                <span className={`w-3 h-3 ${step >= 2 ? 'bg-[#00677f]' : 'bg-[#c5c6cd]'}`}></span>
                <span className={`w-3 h-3 ${step >= 3 ? 'bg-[#00677f]' : 'bg-[#c5c6cd]'}`}></span>
              </div>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-4">
                <label className="font-mono-tech text-xs text-[#75777e] uppercase block font-bold">
                  1. Seleziona l'ambito principale del caso giudiziario o stragiudiziale:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'delitti', label: 'Indagini Difensive / Delitti Penali', code: 'DET_RE_01' },
                    { id: 'morti', label: 'Morti Sospette & Autopsia Psicologica', code: 'DET_RE_02' },
                    { id: 'mobbing', label: 'Diritto del Lavoro / Mobbing & Bossing', code: 'DET_RE_03' },
                    { id: 'cyber', label: 'Digital Forensics & Mobile Extraction', code: 'MET_CYB_09' },
                    { id: 'dna', label: 'Criminalistica Biologica & DNA', code: 'MET_DNA_01' },
                    { id: 'grafica', label: 'Perizia Grafotecnica e Firma', code: 'MET_GRF_12' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormState({ ...formState, caseType: item.id })}
                      className={`p-4 border text-left font-mono-tech text-xs transition-all ${
                        formState.caseType === item.id
                          ? 'border-[#00677f] bg-[#00677f]/10 text-[#00677f] font-bold ring-1 ring-[#00677f]'
                          : 'border-[#c5c6cd] bg-[#ffffff] text-[#1b1b1d] hover:border-[#00677f]'
                      }`}
                    >
                      <span className="text-[10px] text-[#75777e] block mb-1">{item.code}</span>
                      <span className="font-body text-sm text-[#1b1b1d] block font-semibold">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-4">
                <label className="font-mono-tech text-xs text-[#75777e] uppercase block font-bold">
                  2. Quali reperti o fonti di prova sono disponibili? (Seleziona più opzioni)
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Tracce Biologiche / Tamponi',
                    'Filmati CCTV / Video DVR',
                    'Smartphone / PC da esaminare',
                    'Fascicolo Processuale PM',
                    'Verbali & Testimonianze',
                    'Documenti Scrittura Cartacei'
                  ].map((evidence) => {
                    const isChecked = formState.evidenceAvailable.includes(evidence);
                    return (
                      <button
                        key={evidence}
                        type="button"
                        onClick={() => handleEvidenceToggle(evidence)}
                        className={`p-3.5 border text-left font-mono-tech text-xs flex items-center justify-between transition-all ${
                          isChecked
                            ? 'border-[#00677f] bg-[#00677f]/10 text-[#00677f] font-bold'
                            : 'border-[#c5c6cd] bg-[#ffffff] text-[#1b1b1d] hover:border-gray-400'
                        }`}
                      >
                        <span className="font-body text-xs font-medium text-[#1b1b1d]">{evidence}</span>
                        <CheckCircle2 className={`w-4 h-4 ${isChecked ? 'text-[#00677f]' : 'text-gray-300'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-4">
                <label className="font-mono-tech text-xs text-[#75777e] uppercase block font-bold">
                  3. Tempistica processuale e note aggiuntive:
                </label>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'standard', label: 'Ordinaria (Fase Indagini)', time: '5-7 gg' },
                    { id: 'urgent', label: 'Urgente (Prossima Udienza)', time: '48-72h' },
                    { id: 'emergency', label: 'Emergenza H24 (Irripetibile)', time: 'Immediata' }
                  ].map((urg) => (
                    <button
                      key={urg.id}
                      type="button"
                      onClick={() => setFormState({ ...formState, urgency: urg.id as any })}
                      className={`p-3 border text-center font-mono-tech text-xs transition-all ${
                        formState.urgency === urg.id
                          ? 'border-[#00677f] bg-[#00677f]/10 text-[#00677f] font-bold'
                          : 'border-[#c5c6cd] bg-[#ffffff] text-[#1b1b1d]'
                      }`}
                    >
                      <span className="font-bold block text-sm">{urg.time}</span>
                      <span className="text-[10px] text-[#75777e] block">{urg.label}</span>
                    </button>
                  ))}
                </div>

                <div className="space-y-1">
                  <label className="font-mono-tech text-[10px] text-[#75777e] uppercase block">
                    Sintesi del quesito o riferimento legali/avvocato
                  </label>
                  <textarea
                    rows={3}
                    value={formState.notes}
                    onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                    placeholder="Descrivi brevemente l'oggetto dell'accertamento o i termini dell'udienza..."
                    className="w-full bg-[#ffffff] border border-[#c5c6cd] p-3 font-body text-xs focus:outline-none focus:border-[#00677f]"
                  />
                </div>

                {/* Instant Assessment Preview */}
                {(() => {
                  const res = calculateResult();
                  return (
                    <div className="p-4 bg-[#0d1c32] text-white border-l-4 border-[#00d2ff] space-y-2">
                      <div className="flex justify-between items-center font-mono-tech text-xs text-[#00d2ff]">
                        <span className="uppercase font-bold">PROTOCOL MATCH: {res.confidenceScore}%</span>
                        <span>{res.estimatedLeadTime}</span>
                      </div>
                      <div className="font-headline text-sm font-bold">{res.recommendedProtocol}</div>
                      <div className="font-mono-tech text-[11px] text-gray-300">
                        Taskforce Responsabile: {res.assignedTaskforceRole}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-4 border-t border-[#c5c6cd]">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((step - 1) as any)}
                  className="px-4 py-2 border border-[#1b1b1d] font-mono-tech text-xs uppercase flex items-center gap-1 hover:bg-[#eae7ea]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Indietro
                </button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep((step + 1) as any)}
                  className="px-6 py-2.5 bg-[#00677f] text-white font-mono-tech text-xs uppercase font-bold flex items-center gap-1.5 hover:bg-[#00566a]"
                >
                  Prosegui <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  className="px-6 py-2.5 bg-[#000000] text-white font-mono-tech text-xs uppercase font-bold flex items-center gap-2 hover:bg-[#00677f] transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-[#00d2ff]" /> Invia Protocollo Caso
                </button>
              )}
            </div>

          </div>
        ) : (
          /* Submission Confirmation */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#00d2ff]/20 text-[#00677f] border border-[#00d2ff] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#00677f]" />
            </div>

            <div>
              <span className="font-mono-tech text-xs text-[#00677f] uppercase font-bold block mb-1">
                FASCICOLO REGISTRATO NEL SISTEMA
              </span>
              <h3 className="font-headline text-2xl font-bold text-[#1b1b1d]">
                Codice Incarico: {inquiryCode}
              </h3>
              <p className="font-body text-sm text-[#44474d] max-w-md mx-auto mt-2">
                La valutazione preliminare è stata trasmessa con successo alla Taskforce dello Studio Elena Angelini. Un analista vi ricontatterà al più presto.
              </p>
            </div>

            <div className="p-4 bg-[#efedef] border border-[#c5c6cd] text-left font-mono-tech text-xs space-y-1.5 max-w-md mx-auto">
              <div className="text-[10px] text-[#75777e] uppercase">Sintesi Incarico:</div>
              <div>• Protocollo consigliato: {calculateResult().recommendedProtocol}</div>
              <div>• Priorità: {formState.urgency.toUpperCase()}</div>
              <div>• Presidio operativo: Roma, Via Appia Nuova 120</div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#000000] text-white font-mono-tech text-xs uppercase tracking-widest font-bold hover:bg-[#00677f] transition-colors"
            >
              Chiudi Finestra
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
