import React from 'react';
import { NavTab } from '../types';
import { Home, UserCheck, Fingerprint, Microscope, MessageSquareText } from 'lucide-react';

interface BottomNavProps {
  currentTab: NavTab;
  setCurrentTab: (tab: NavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, setCurrentTab }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-1 pb-safe h-16 bg-[#fbf9fb] border-t border-[#c5c6cd] shadow-lg">
      <button
        onClick={() => {
          setCurrentTab('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
          currentTab === 'home'
            ? 'text-[#00677f] font-bold scale-105'
            : 'text-[#44474d] opacity-75 hover:opacity-100'
        }`}
      >
        <Home className="w-5 h-5 mb-0.5" />
        <span className="font-mono-tech text-[10px]">Home</span>
      </button>

      <button
        onClick={() => {
          setCurrentTab('elena');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
          currentTab === 'elena'
            ? 'text-[#00677f] font-bold scale-105'
            : 'text-[#44474d] opacity-75 hover:opacity-100'
        }`}
      >
        <UserCheck className="w-5 h-5 mb-0.5" />
        <span className="font-mono-tech text-[10px]">Bio</span>
      </button>

      <button
        onClick={() => {
          setCurrentTab('indagini');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
          currentTab === 'indagini'
            ? 'text-[#00677f] font-bold scale-105'
            : 'text-[#44474d] opacity-75 hover:opacity-100'
        }`}
      >
        <Fingerprint className="w-5 h-5 mb-0.5" />
        <span className="font-mono-tech text-[10px]">Indagini</span>
      </button>

      <button
        onClick={() => {
          setCurrentTab('metodologie');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
          currentTab === 'metodologie'
            ? 'text-[#00677f] font-bold scale-105'
            : 'text-[#44474d] opacity-75 hover:opacity-100'
        }`}
      >
        <Microscope className="w-5 h-5 mb-0.5" />
        <span className="font-mono-tech text-[10px]">Metodi</span>
      </button>

      <button
        onClick={() => {
          setCurrentTab('contatti');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
          currentTab === 'contatti'
            ? 'text-[#00677f] font-bold scale-105'
            : 'text-[#44474d] opacity-75 hover:opacity-100'
        }`}
      >
        <MessageSquareText className="w-5 h-5 mb-0.5" />
        <span className="font-mono-tech text-[10px]">Contatti</span>
      </button>
    </nav>
  );
};
