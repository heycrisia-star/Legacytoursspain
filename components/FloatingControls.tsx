import { Star, Map, History as HistoryIcon, Utensils } from 'lucide-react';
import { GOOGLE_REVIEWS_URL, MADRID_BOOKING_URL, DINING_URL } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

interface FloatingControlsProps {
  onOpenGuide: () => void;
}

const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenGuide }) => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const diningUrlWithLang = `${DINING_URL}?lang=${language}`;

  return (
    <>
      {/* Left Side: Recommendations & Guide (Desktop only) */}
      <div className="fixed bottom-6 left-6 z-50 hidden md:flex flex-col items-start gap-3 animate-fade-in-up">
        {/* 1. Dining & Recommendations (Soft Orange/Amber) */}
        <a
          href={diningUrlWithLang}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#FFF8E1] text-[#795548] w-64 py-4 rounded-full shadow-lg border border-[#FFE082] hover:bg-[#FFECB3] hover:scale-105 transition-all duration-300 group"
        >
          <Utensils className="w-5 h-5 text-[#FFA000]" />
          <span className="font-display font-bold text-sm tracking-widest uppercase">{t.dining}</span>
        </a>

        {/* 2. Interactive Guide (Pastel Green/Mint) */}
        <button
          onClick={onOpenGuide}
          className="flex items-center justify-center gap-3 bg-[#E0F2F1] text-[#2D3748] w-64 py-4 rounded-full shadow-lg border border-[#4DB6AC]/20 hover:bg-[#B2DFDB] hover:scale-105 transition-all duration-300 group"
        >
          <Map className="w-5 h-5 text-[#4DB6AC]" />
          <span className="font-display font-bold text-sm tracking-widest uppercase">{t.guide}</span>
        </button>
      </div>

      {/* Right Side: Stacked view for Mobile, Reviews & Others for Desktop */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-fade-in-up">
        {/* Mobile Group (only visible on small screens) */}
        <div className="flex md:hidden flex-col items-end gap-3 mb-1">
          <a
            href={diningUrlWithLang}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#FFF8E1] text-[#795548] w-56 py-3 rounded-full shadow-lg border border-[#FFE082] group"
          >
            <Utensils className="w-4 h-4 text-[#FFA000]" />
            <span className="font-display font-bold text-xs tracking-widest uppercase">{t.dining}</span>
          </a>
          <button
            onClick={onOpenGuide}
            className="flex items-center justify-center gap-3 bg-[#E0F2F1] text-[#2D3748] w-56 py-3 rounded-full shadow-lg border border-[#4DB6AC]/20 group"
          >
            <Map className="w-4 h-4 text-[#4DB6AC]" />
            <span className="font-display font-bold text-xs tracking-widest uppercase">{t.guide}</span>
          </button>
        </div>

        {/* Rate Experience - Shared */}
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-white text-black w-56 md:w-64 py-3 md:py-4 rounded-full shadow-lg border border-neutral-100 hover:bg-neutral-50 hover:scale-105 transition-all duration-300 group"
        >
          <div className="bg-[#fcf8e8] p-1 rounded-full">
            <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
          </div>
          <span className="font-display font-bold text-xs md:text-sm tracking-widest uppercase">{t.rate}</span>
        </a>

        {/* Visiting Madrid? - Shared */}
        <a
          href={MADRID_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#1e3a8a] text-white w-56 md:w-64 py-3 md:py-4 rounded-full shadow-lg hover:bg-[#172554] hover:scale-105 transition-all duration-300 group"
        >
          <HistoryIcon className="w-4 h-4 md:w-5 md:h-5" />
          <span className="font-display font-bold text-xs md:text-sm tracking-widest uppercase">{t.madrid}</span>
        </a>
      </div>
    </>
  );
};

export default FloatingControls;