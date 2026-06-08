import React from 'react';
import { Utensils } from 'lucide-react';
import { DINING_URL } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const FloatingControls: React.FC = () => {
  const { language } = useLanguage();
  const diningUrlWithLang = `${DINING_URL}?lang=${language}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      {/* Comida y Tips - Small Floating Circle Button with Emoji */}
      <a
        href={diningUrlWithLang}
        target="_blank"
        rel="noopener noreferrer"
        title="Dining & Recommendations"
        className="flex items-center justify-center bg-[#FFF8E1] text-[#795548] w-10 h-10 rounded-full shadow-md border border-[#FFE082] hover:bg-[#FFECB3] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <span className="text-xl group-hover:rotate-12 transition-transform duration-300">🍴</span>
      </a>
    </div>
  );
};

export default FloatingControls;