import React from 'react';
import { TOURS, BOOKING_URL } from '../constants';
import TourCard from './TourCard';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ToursGridProps {
  onOpenBooking?: () => void;
}

const ToursGrid: React.FC<ToursGridProps> = () => {
  const { language } = useLanguage();
  const isEs = language === 'es';

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-premium-gold mb-3">
            {isEs ? 'Nuestros 3 Tours Exclusivos' : 'Our 3 Exclusive Tours'}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4 uppercase">
            {isEs ? '3 Experiencias Únicas. 1 Ciudad Inolvidable.' : '3 Unique Experiences. 1 Unforgettable City.'}
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {isEs
              ? 'Tours privados diseñados con paradas estratégicas para fotos en los mejores monumentos y miradores de Barcelona, en elegantes coches vintage 100% eléctricos.'
              : 'Private tours designed with strategic photo stops at Barcelona\'s finest monuments and panoramic viewpoints, in 100% electric vintage cars.'}
          </p>
        </div>

        {/* Tour cards — ordered: Essential (1h), Park City & Beach (2h), Complete (3h) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['essential', 'city-sea', 'complete'].map((id) => {
            const tour = TOURS.find((t) => t.id === id);
            if (!tour) return null;
            return (
              <div key={tour.id} className="flex flex-col">
                <TourCard tour={tour} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToursGrid;