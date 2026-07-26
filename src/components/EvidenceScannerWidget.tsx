import React, { useState } from 'react';
import { INITIAL_EVIDENCE_SAMPLES } from '../data/forensicData';
import { EvidenceSample } from '../types';
import { ShieldCheck, Cpu, RefreshCw, FileText, CheckCircle2, AlertTriangle, Fingerprint, Lock } from 'lucide-react';

export const EvidenceScannerWidget: React.FC = () => {
  const [samples, setSamples] = useState<EvidenceSample[]>(INITIAL_EVIDENCE_SAMPLES);
  const [selectedSample, setSelectedSample] = useState<EvidenceSample>(INITIAL_EVIDENCE_SAMPLES[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [customFileName, setCustomFileName] = useState('');
  const [verificationOutput, setVerificationOutput] = useState<string | null>(null);

  const handleVerifySample = (sample: EvidenceSample) => {
    setSelectedSample(sample);
    setIsAnalyzing(true);
    setVerificationOutput(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      setVerificationOutput(`[HASH VERIFIED] SHA-256 bitstream checksum matches official forensic register. Chain of custody intact. Timestamp verified via NTP server.`);
    }, 1200);
  };

  const handleAddCustomFile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customFileName.trim()) return;

    // Generate pseudo SHA256 hash
    const fakeHash = Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    const newSample: EvidenceSample = {
      id: `EVD-${Math.floor(1000 + Math.random() * 9000)}`,
      name: customFileName.trim(),
      type: customFileName.endsWith('.mp4') || customFileName.endsWith('.avi') ? 'CCTV Video' : customFileName.endsWith('.dna') ? 'DNA' : 'Document Hash',
      hash: fakeHash,
      integrity: '100% Valid',
      dateAdded: new Date().toISOString().replace('T', ' ').substring(0, 19),
      details: 'Acquisito in locale tramite sandbox. Bit-stream verificato con firma digitale ISO/IEC 27037.'
    };

    setSamples([newSample, ...samples]);
    setSelectedSample(newSample);
    setCustomFileName('');
    handleVerifySample(newSample);
  };

  return (
    <div className="bg-[#1b1b1d] text-white p-6 md:p-8 border border-[#c5c6cd] relative overflow-hidden my-8">
      {/* Visual Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-800 pb-4 mb-6 gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#00d2ff]/10 border border-[#00d2ff] text-[#00d2ff]">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono-tech text-[10px] text-[#00d2ff] uppercase tracking-widest block">
              FORENSIC DIGITAL VERIFIER v2.4
            </span>
            <h3 className="font-headline text-lg font-bold text-white uppercase">
              Verifica Integrità Reperti & Chain of Custody
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono-tech text-xs text-gray-400">
          <Lock className="w-3.5 h-3.5 text-[#00d2ff]" />
          <span>SHA-256 / MD5 Hash Checker</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sample Selection List */}
        <div className="lg:col-span-5 space-y-3">
          <label className="font-mono-tech text-[10px] text-gray-400 uppercase block">
            Seleziona Reperto Digitale da Verificare
          </label>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
            {samples.map((sample) => (
              <button
                key={sample.id}
                onClick={() => handleVerifySample(sample)}
                className={`w-full text-left p-3 border transition-all font-mono-tech text-xs ${
                  selectedSample.id === sample.id
                    ? 'border-[#00d2ff] bg-[#00d2ff]/10 text-white'
                    : 'border-gray-800 bg-[#242528] text-gray-300 hover:border-gray-600'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-[#00d2ff]">{sample.id}</span>
                  <span className="text-[10px] bg-black/40 px-2 py-0.5 border border-gray-700 text-gray-300">
                    {sample.type}
                  </span>
                </div>
                <div className="font-sans text-sm truncate font-medium text-white mb-1">
                  {sample.name}
                </div>
                <div className="text-[10px] text-gray-400 truncate">
                  Hash: {sample.hash.substring(0, 24)}...
                </div>
              </button>
            ))}
          </div>

          {/* Quick upload input */}
          <form onSubmit={handleAddCustomFile} className="pt-2 flex gap-2">
            <input
              type="text"
              value={customFileName}
              onChange={(e) => setCustomFileName(e.target.value)}
              placeholder="Inserisci nome file (es: chat_backup.db)..."
              className="flex-1 bg-[#242528] border border-gray-700 font-mono-tech text-xs text-white px-3 py-2 focus:outline-none focus:border-[#00d2ff]"
            />
            <button
              type="submit"
              className="bg-[#00d2ff] text-[#001f28] font-mono-tech text-xs px-3 py-2 uppercase font-bold hover:bg-white transition-colors"
            >
              Carica
            </button>
          </form>
        </div>

        {/* Verification Inspector & Output */}
        <div className="lg:col-span-7 bg-[#0d1c32] border border-[#39475f] p-5 flex flex-col justify-between relative">
          <div className="scanner-line"></div>
          
          <div className="space-y-4 relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono-tech text-[10px] text-[#00d2ff] uppercase block">
                  STATO REPERTO: {selectedSample.id}
                </span>
                <h4 className="font-headline text-base font-bold text-white">
                  {selectedSample.name}
                </h4>
              </div>
              <span className="px-2.5 py-1 bg-green-950 border border-green-500 text-green-400 font-mono-tech text-[10px] uppercase font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                {selectedSample.integrity}
              </span>
            </div>

            <div className="space-y-2">
              <label className="font-mono-tech text-[10px] text-gray-400 uppercase block">
                Algoritmo Impronta Digitale SHA-256
              </label>
              <div className="p-2.5 bg-[#1b1b1d] border border-gray-800 font-mono-tech text-xs text-[#00d2ff] break-all select-all">
                {selectedSample.hash}
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-mono-tech text-[10px] text-gray-400 uppercase block">
                Dettagli Catena di Custodia e Protocollo
              </label>
              <p className="font-body text-xs text-gray-300 leading-relaxed bg-[#1b1b1d]/80 p-3 border border-gray-800">
                {selectedSample.details}
              </p>
            </div>

            {/* Verification Status Feedback */}
            {isAnalyzing && (
              <div className="p-3 bg-blue-950/60 border border-[#00d2ff] text-[#00d2ff] font-mono-tech text-xs flex items-center gap-3 animate-pulse">
                <RefreshCw className="w-4 h-4 animate-spin shrink-0" />
                <span>Esecuzione controllo di congruenza bit-a-bit e verifica registro ISO/IEC 27037...</span>
              </div>
            )}

            {verificationOutput && !isAnalyzing && (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500 text-emerald-300 font-mono-tech text-xs flex items-start gap-2 animate-in fade-in">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block uppercase mb-0.5">ESITO VERIFICA: POSITIVO</span>
                  <span>{verificationOutput}</span>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 mt-4 border-t border-gray-800 flex justify-between items-center font-mono-tech text-[10px] text-gray-400">
            <span>DATA REGISTRAZIONE: {selectedSample.dateAdded}</span>
            <button
              onClick={() => handleVerifySample(selectedSample)}
              className="text-[#00d2ff] hover:underline flex items-center gap-1 font-bold"
            >
              <RefreshCw className="w-3 h-3" />
              Riesegui Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
