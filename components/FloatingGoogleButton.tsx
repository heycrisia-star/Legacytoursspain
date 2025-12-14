import React from 'react';
import { Star } from 'lucide-react';
import { GOOGLE_REVIEWS_URL } from '../constants';

const FloatingGoogleButton: React.FC = () => {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-full hover:bg-white/20 transition-all duration-300 animate-fade-in-up group"
      aria-label="Rate us on Google"
    >
      <div className="bg-premium-gold/20 p-1.5 rounded-full">
         <Star className="w-4 h-4 text-premium-gold fill-premium-gold" />
      </div>
      <span className="font-display font-bold text-xs tracking-wider uppercase hidden sm:inline">Rate Experience</span>
    </a>
  );
};

export default FloatingGoogleButton;