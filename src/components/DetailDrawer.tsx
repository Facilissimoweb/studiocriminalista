import React from 'react';
import { Methodology, Dossier } from '../types';
import { X, ShieldCheck, Clock, Award, Cpu, FileCheck, CheckCircle2, Copy, Check } from 'lucide-react';

interface DetailDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  methodology?: Methodology | null;
  dossier?: Dossier | null;
  onSelectForTriage?: (itemCode: string) => void;
}

export const DetailDrawer: React.FC<DetailDrawerProps> = ({
  isOpen,
  onClose,
  methodology,
  dossier,
  onSelectForTriage
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || (!methodology && !dossier)) return null;

  const itemTitle = methodology ? methodology.title : dossier?.title;
  const itemCode = methodology ? methodology.code : dossier?.code;
  const itemCategory = methodology ? methodology.category : dossier?.category;

  const handleCopySpec = () => {
    const textToCopy = `[FORENSIC PROTOCOL SPECIFICATION]\nCode: ${itemCode}\nTitle: ${itemTitle}\nCategory: ${itemCategory}\nDetails: ${methodology?.technicalDetails || dossier?.fullDetails}\nElena Angelini Studio Criminalistica`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#000000]/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-lg bg-[#fbf9fb] border-l border-[#c5c6cd] shadow-2xl p-6 md:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
          
          <div>
            {/* Drawer Header */}
            <div className="flex justify-between items-center pb-4 border-b border-[#c5c6cd] mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00d2ff]"></span>
                <span className="font-mono-tech text-xs text-[#00677f] font-bold uppercase tracking-wider">
                  SPEC_INSPECTOR // {itemCode}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-[#75777e] hover:text-[#000000] hover:bg-[#eae7ea] transition-colors"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Visual Dock / Image Header */}
            <div className="relative mb-6 aspect-video bg-[#1b1b1d] border border-[#c5c6cd] overflow-hidden flex flex-col items-center justify-center p-4">
              <div className="absolute inset-0 data-grid-dark opacity-30"></div>
              <div className="scanner-line"></div>
              <div className="relative z-10 text-center space-y-1">
                <span className="font-mono-tech text-[10px] text-[#00d2ff] uppercase tracking-widest block">
                  VISUAL_EVIDENCE_DOCK
                </span>
                <h3 className="font-headline text-lg font-bold text-white uppercase">
                  {itemTitle}
                </h3>
                <span className="font-mono-tech text-[11px] text-gray-400 block">
                  REF_CODE: {itemCode}
                </span>
              </div>
            </div>

            {/* Category badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 bg-[#00677f]/10 border border-[#00677f] text-[#00677f] font-mono-tech text-[11px] font-bold uppercase">
                {itemCategory}
              </span>
              {methodology?.certified && (
                <span className="px-2.5 py-1 bg-[#000000] text-white font-mono-tech text-[11px] uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#00d2ff]" />
                  Certificato ISO
                </span>
              )}
            </div>

            {/* Technical Specs Grid */}
            {methodology && (
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 border border-[#c5c6cd] bg-[#ffffff]">
                  <span className="font-mono-tech text-[9px] text-[#75777e] uppercase block mb-0.5">
                    Accuratezza Tecnica
                  </span>
                  <span className="font-mono-tech text-base font-bold text-[#00677f]">
                    {methodology.accuracy}
                  </span>
                </div>
                <div className="p-3 border border-[#c5c6cd] bg-[#ffffff]">
                  <span className="font-mono-tech text-[9px] text-[#75777e] uppercase block mb-0.5">
                    Tempo Risultati (Lead Time)
                  </span>
                  <span className="font-mono-tech text-base font-bold text-[#1b1b1d]">
                    {methodology.leadTime}
                  </span>
                </div>
                <div className="p-3 border border-[#c5c6cd] bg-[#ffffff]">
                  <span className="font-mono-tech text-[9px] text-[#75777e] uppercase block mb-0.5">
                    Norma di Riferimento
                  </span>
                  <span className="font-mono-tech text-xs font-bold text-[#1b1b1d]">
                    {methodology.isoStandard}
                  </span>
                </div>
                <div className="p-3 border border-[#c5c6cd] bg-[#ffffff]">
                  <span className="font-mono-tech text-[9px] text-[#75777e] uppercase block mb-0.5">
                    Versione Protocollo
                  </span>
                  <span className="font-mono-tech text-xs font-bold text-[#1b1b1d]">
                    v{methodology.version}
                  </span>
                </div>
              </div>
            )}

            {/* Description & Technical Details */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="font-mono-tech text-[10px] text-[#75777e] uppercase block mb-1">
                  Descrizione Tecnica
                </label>
                <p className="font-body text-sm text-[#44474d] leading-relaxed">
                  {methodology ? methodology.description : dossier?.description}
                </p>
              </div>

              <div>
                <label className="font-mono-tech text-[10px] text-[#75777e] uppercase block mb-1">
                  Dettagli Operativi e Metodologia
                </label>
                <div className="p-3.5 bg-[#efedef] border-l-2 border-[#00677f] text-xs font-body text-[#1b1b1d] leading-relaxed">
                  {methodology ? methodology.technicalDetails : dossier?.fullDetails}
                </div>
              </div>

              {/* Equipment Used or Checkpoints */}
              {methodology?.equipmentUsed && (
                <div>
                  <label className="font-mono-tech text-[10px] text-[#75777e] uppercase block mb-1.5">
                    Strumentazione e Software di Laboratorio
                  </label>
                  <ul className="space-y-1.5">
                    {methodology.equipmentUsed.map((equip, i) => (
                      <li key={i} className="flex items-center gap-2 font-mono-tech text-[11px] text-[#1b1b1d]">
                        <Cpu className="w-3.5 h-3.5 text-[#00677f]" />
                        {equip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {dossier?.checkpoints && (
                <div>
                  <label className="font-mono-tech text-[10px] text-[#75777e] uppercase block mb-1.5">
                    Checkpoints e Risultanze del Dossier
                  </label>
                  <ul className="space-y-1.5">
                    {dossier.checkpoints.map((cp, i) => (
                      <li key={i} className="flex items-center gap-2 font-mono-tech text-[11px] text-[#1b1b1d]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00677f]" />
                        {cp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Drawer Actions */}
          <div className="pt-4 border-t border-[#c5c6cd] space-y-2">
            <button
              onClick={handleCopySpec}
              className="w-full py-2.5 border border-[#1b1b1d] text-[#1b1b1d] hover:bg-[#eae7ea] font-mono-tech text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  Specifiche Copiate!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copia Scheda Tecnica
                </>
              )}
            </button>

            {onSelectForTriage && itemCode && (
              <button
                onClick={() => {
                  onSelectForTriage(itemCode);
                  onClose();
                }}
                className="w-full py-3 bg-[#000000] text-white hover:bg-[#00677f] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all"
              >
                <FileCheck className="w-4 h-4 text-[#00d2ff]" />
                Richiedi Valutazione per {itemCode}
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
