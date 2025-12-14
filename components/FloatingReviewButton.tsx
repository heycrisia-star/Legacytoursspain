import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BOOKING_URL } from '../constants';

const FloatingReviewButton: React.FC = () => {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#D4AF37] text-black px-6 py-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 animate-fade-in-up group"
      aria-label="Book via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-display font-bold text-sm tracking-widest uppercase">Book Now</span>
    </a>
  );
};

export default FloatingReviewButton;