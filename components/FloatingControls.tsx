import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { DINING_URL } from '../constants';
import { useLanguage } from '../context/LanguageContext';

interface FloatingControlsProps {
  onOpenBooking: () => void;
}

const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenBooking }) => {
  const { language, t } = useLanguage();
  const [showBookBtn, setShowBookBtn] = useState(false);
  const diningUrlWithLang = `${DINING_URL}?lang=${language}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBookBtn(true);
      } else {
        setShowBookBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-fade-in-up">
      {/* Floating Booking Button - Scroll triggered */}
      {showBookBtn && (
        <button
          onClick={onOpenBooking}
          className="flex items-center gap-2 bg-premium-gold hover:bg-yellow-600 text-white px-5 py-3 rounded-full shadow-lg border border-premium-gold/30 hover:scale-105 active:scale-95 transition-all duration-300 font-display font-bold text-xs uppercase tracking-wider animate-fade-in-up"
        >
          <Calendar className="w-4 h-4" />
          <span>{t('common.bookNow') || 'Book Now'}</span>
        </button>
      )}

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