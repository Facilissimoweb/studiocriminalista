import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/forensicData';
import { Mail, Phone, MapPin, Send, Fingerprint, Terminal, Gavel, Microscope, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ContattiViewProps {
  onOpenTriage: () => void;
}

export const ContattiView: React.FC<ContattiViewProps> = ({ onOpenTriage }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipologia: 'Analisi Digitale',
    messaggio: ''
  });
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) return;
    const generated = `X-${Math.floor(100 + Math.random() * 900)}-882`;
    setSubmittedCode(generated);
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16 pt-6">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto border-l-4 border-[#00677f] pl-6 py-2">
        <span className="font-mono-tech text-xs text-[#00677f] uppercase tracking-[0.2em] font-bold block mb-2">
          UNIT CODE: EA-CNTC-2024
        </span>
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] mb-4">
          Contatti & Forensic Taskforce
        </h1>
        <p className="max-w-2xl font-body text-base text-[#44474d] leading-relaxed">
          Accesso diretto ai protocolli investigativi. Il nostro team di esperti opera attraverso una metodologia di Taskforce integrata per garantire la massima precisione scientifica in ambito forense.
        </p>
      </section>

      {/* Team Operativo Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline text-xl font-bold uppercase text-[#000000]">
            Team Operativo
          </h2>
          <div className="flex-1 h-px bg-[#c5c6cd]"></div>
          <span className="font-mono-tech text-xs text-[#75777e]">STATION_ALPHA // INDEX_01</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-[#ffffff] border border-[#c5c6cd] p-6 hover:border-[#00677f] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="mb-6 relative overflow-hidden h-72 bg-[#1b1b1d]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#000000] text-white px-2 py-0.5 font-mono-tech text-[10px] uppercase">
                    {member.authLevel}
                  </div>
                </div>

                <span className="font-mono-tech text-xs text-[#00677f] font-bold block mb-1 uppercase">
                  {member.role}
                </span>
                <h3 className="font-headline text-xl font-bold text-[#000000] mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-xs text-[#75777e] font-semibold mb-3">
                  {member.title}
                </p>
                <p className="font-body text-xs text-[#44474d] leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-[#c5c6cd] flex items-center justify-between font-mono-tech text-[10px] text-[#75777e] uppercase">
                <span>AUTORIZZAZIONE PERITALE</span>
                <span className="text-[#00677f] font-bold">ATTIVO</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Channels & Station Info Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form */}
          <div className="lg:col-span-7 bg-[#ffffff] p-6 md:p-8 border border-[#c5c6cd] relative">
            <div className="absolute top-4 right-4 font-mono-tech text-[10px] text-[#75777e] uppercase tracking-wider">
              FORM_ID: X-882
            </div>

            <h3 className="font-headline text-xl font-bold mb-6 flex items-center gap-2.5 uppercase">
              <Mail className="w-5 h-5 text-[#00677f]" />
              Richiesta di Consulenza
            </h3>

            {!submittedCode ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono-tech text-[11px] text-[#75777e] uppercase block">
                      Nome e Cognome
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Dati anagrafici o studio legale"
                      className="w-full bg-[#f5f3f5] border border-[#c5c6cd] px-4 py-3 font-body text-sm text-[#1b1b1d] focus:outline-none focus:border-[#00677f]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono-tech text-[11px] text-[#75777e] uppercase block">
                      Recapito Email Riservato
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="secure@email.com"
                      className="w-full bg-[#f5f3f5] border border-[#c5c6cd] px-4 py-3 font-body text-sm text-[#1b1b1d] focus:outline-none focus:border-[#00677f]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono-tech text-[11px] text-[#75777e] uppercase block">
                    Tipologia Intervento Forense
                  </label>
                  <select
                    value={formData.tipologia}
                    onChange={(e) => setFormData({ ...formData, tipologia: e.target.value })}
                    className="w-full bg-[#f5f3f5] border border-[#c5c6cd] px-4 py-3 font-mono-tech text-xs text-[#1b1b1d] focus:outline-none focus:border-[#00677f]"
                  >
                    <option>Analisi Digitale & Mobile Forensics</option>
                    <option>Criminalistica Biologica & DNA</option>
                    <option>Balistica Forense & Ricostruzione 3D</option>
                    <option>Consulenza Legale & Indagini Difensive</option>
                    <option>Sopralluogo Tecnico Scena del Crimine</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-mono-tech text-[11px] text-[#75777e] uppercase block">
                    Dettaglio Messaggio (Analisi Preliminare)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.messaggio}
                    onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                    placeholder="Descrivere brevemente il quesito tecnico o le scadenze processuali..."
                    className="w-full bg-[#f5f3f5] border border-[#c5c6cd] px-4 py-3 font-body text-sm text-[#1b1b1d] focus:outline-none focus:border-[#00677f]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#000000] text-white font-mono-tech text-xs uppercase tracking-widest font-bold hover:bg-[#00677f] transition-all flex items-center justify-center gap-2"
                >
                  <span>INVIA PROTOCOLLO</span>
                  <Send className="w-4 h-4 text-[#00d2ff]" />
                </button>
              </form>
            ) : (
              <div className="p-6 bg-[#efedef] border border-[#00677f] space-y-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#00677f] mx-auto" />
                <h4 className="font-headline text-lg font-bold text-[#000000]">
                  Protocollo Trasmesso // Codice: {submittedCode}
                </h4>
                <p className="font-body text-xs text-[#44474d]">
                  La richiesta è stata cifrata e registrata nei protocolli dello Studio Elena Angelini. Sarete ricontattati entro 2 ore operative.
                </p>
                <button
                  onClick={() => setSubmittedCode(null)}
                  className="px-6 py-2 bg-[#000000] text-white font-mono-tech text-xs uppercase font-bold"
                >
                  Nuova Richiesta
                </button>
              </div>
            )}
          </div>

          {/* Right Station Info & GIS Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Station Card */}
            <div className="bg-[#000000] text-white p-8 border border-gray-800 relative overflow-hidden">
              <span className="font-mono-tech text-xs text-[#00d2ff] font-bold block mb-4 tracking-widest">
                STATION // SEARCHABLE_INDEX
              </span>

              <div className="space-y-6 relative z-10">
                <div>
                  <span className="font-mono-tech text-[10px] text-gray-400 block mb-1">
                    LOCATION_LAT_LONG
                  </span>
                  <p className="font-headline text-lg font-bold">
                    Roma, Via Appia Nuova, 120
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="font-mono-tech text-[10px] text-gray-400 block mb-1">
                      COMM_SECURE_PHONE
                    </span>
                    <p className="font-body text-sm font-bold text-white flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#00d2ff]" />
                      +39 06 12345678
                    </p>
                  </div>
                  <div>
                    <span className="font-mono-tech text-[10px] text-gray-400 block mb-1">
                      SECURE_DIGITAL_MAIL
                    </span>
                    <p className="font-body text-xs font-bold underline text-[#00d2ff] flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" />
                      studio@elenangelini.it
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated GIS Map Radar */}
            <div className="bg-[#1b1b1d] border border-[#c5c6cd] relative h-64 overflow-hidden flex flex-col items-center justify-center text-center p-6 text-white">
              <div className="absolute inset-0 data-grid-dark opacity-30"></div>
              <div className="scanner-line"></div>

              <MapPin className="w-8 h-8 text-[#00d2ff] mb-2 animate-bounce" />
              <p className="font-mono-tech text-xs uppercase text-gray-300 font-bold">
                Mapping Coordinate System...
              </p>
              <p className="font-mono-tech text-[11px] text-[#00d2ff] mt-1 font-semibold">
                LAT: 41.8902 | LONG: 12.4922 (ROMA HQ)
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Final Mission Reinforcement */}
      <section className="px-6 md:px-12 py-16 border-t border-[#c5c6cd] bg-[#ffffff] text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-mono-tech text-[#00677f] text-xs font-bold tracking-[0.4em] uppercase block">
            THE FINAL VERDICT
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold italic text-[#000000]">
            "Scienza al servizio della verità"
          </h2>

          <div className="flex justify-center items-center gap-8 md:gap-16 pt-6 border-t border-[#efedef]">
            <div>
              <div className="font-headline text-2xl md:text-3xl font-bold text-[#00677f]">500+</div>
              <div className="font-mono-tech text-[10px] text-[#75777e] uppercase">Casi Risolti</div>
            </div>
            <div className="w-px h-10 bg-[#c5c6cd]"></div>
            <div>
              <div className="font-headline text-2xl md:text-3xl font-bold text-[#00677f]">15</div>
              <div className="font-mono-tech text-[10px] text-[#75777e] uppercase">Anni di Esperienza</div>
            </div>
            <div className="w-px h-10 bg-[#c5c6cd]"></div>
            <div>
              <div className="font-headline text-2xl md:text-3xl font-bold text-[#00677f]">24/7</div>
              <div className="font-mono-tech text-[10px] text-[#75777e] uppercase">Supporto Operativo</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
