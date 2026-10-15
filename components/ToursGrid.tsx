import React from 'react';
import { TOURS } from '../constants';
import TourCard from './TourCard';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface ToursGridProps {
  onOpenBooking: () => void;
}

const ToursGrid: React.FC<ToursGridProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-premium-gold mb-4">
            {t('tours.eyebrow') || 'Choose Your Tour'}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4 uppercase">
            {t('tours.title') || '3 Tours. 1 Unforgettable City.'}
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto font-light">
            {t('tours.subtitle') || 'Private, electric, vintage. Pick the duration that fits your day.'}
          </p>
        </div>

        {/* Tour cards — ordered: Essential (1h), Parc & City (2h), Complete (3h) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sort: essential first, then city-sea, then complete */}
          {['essential', 'city-sea', 'complete'].map((id) => {
            const tour = TOURS.find((t) => t.id === id);
            if (!tour) return null;
            return (
              <div key={tour.id} className="flex flex-col">
                <TourCard tour={tour} onOpenBooking={onOpenBooking} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3 px-10 py-4 bg-neutral-900 text-white font-display font-bold uppercase tracking-widest text-sm rounded-full hover:bg-premium-gold transition-all duration-300 group"
          >
            {t('tours.compareAll') || 'Compare & Book'}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToursGrid;