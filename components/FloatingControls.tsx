import React from 'react';
import { MessageCircle, Star, Map, History as HistoryIcon } from 'lucide-react';
import { BOOKING_URL, GOOGLE_REVIEWS_URL, MADRID_BOOKING_URL } from '../constants';

interface FloatingControlsProps {
  onOpenGuide: () => void;
}

const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenGuide }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-fade-in-up">

      {/* 0. Interactive Guide (Pastel Green/Mint) */}
      <button
        onClick={onOpenGuide}
        className="flex items-center justify-center gap-3 bg-[#E0F2F1] text-[#2D3748] w-64 py-4 rounded-full shadow-lg border border-[#4DB6AC]/20 hover:bg-[#B2DFDB] hover:scale-105 transition-all duration-300 group"
      >
        <Map className="w-5 h-5 text-[#4DB6AC]" />
        <span className="font-display font-bold text-sm tracking-widest uppercase">Digital AI Guide</span>
      </button>

      {/* 1. Book Now (Gold) - Main Barcelona Number */}
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-[#D4AF37] text-black w-64 py-4 rounded-full shadow-lg hover:bg-[#b8962e] hover:scale-105 transition-all duration-300 group"
      >
        <MessageCircle className="w-5 h-5 fill-black" />
        <span className="font-display font-bold text-sm tracking-widest uppercase">Book Now</span>
      </a>

      {/* 2. Rate Experience (White) */}
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-white text-black w-64 py-4 rounded-full shadow-lg border border-neutral-100 hover:bg-neutral-50 hover:scale-105 transition-all duration-300 group"
      >
        <div className="bg-[#fcf8e8] p-1 rounded-full">
          <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
        </div>
        <span className="font-display font-bold text-sm tracking-widest uppercase">Rate Experience</span>
      </a>

      {/* 3. Visiting Madrid? (Blue) - Madrid Number */}
      <a
        href={MADRID_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-[#1e3a8a] text-white w-64 py-4 rounded-full shadow-lg hover:bg-[#172554] hover:scale-105 transition-all duration-300 group"
      >
        <HistoryIcon className="w-5 h-5" />
        <span className="font-display font-bold text-sm tracking-widest uppercase">Visiting Madrid?</span>
      </a>

    </div>
  );
};

export default FloatingControls;