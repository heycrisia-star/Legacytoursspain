import React from 'react';
import { TOURS } from '../constants';
import TourCard from './TourCard';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface ToursGridProps {
  onOpenBooking: () => void;
}

const ToursGrid: React.FC<ToursGridProps> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const isEs = language === 'es';

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-premium-gold mb-4">
            {isEs ? 'Nuestros 3 Recorridos' : 'Our 3 Curated Tours'}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4 uppercase">
            {isEs ? '3 Tours Privados. 1 Ciudad Inolvidable.' : '3 Private Tours. 1 Unforgettable City.'}
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            {isEs
              ? 'Rutas cerradas y cuidadosamente seleccionadas en coches vintage 100% eléctricos. Elige la duración que mejor se adapte a tu viaje.'
              : 'Curated closed routes in 100% electric vintage cars. Choose the duration that best fits your visit.'}
          </p>
        </div>

        {/* Tour cards — ordered: Essential (1h), Park City & Beach (2h), Complete (3h) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            className="inline-flex items-center gap-3 px-10 py-4 bg-neutral-900 text-white font-display font-bold uppercase tracking-widest text-xs rounded-full hover:bg-premium-gold transition-all duration-300 group shadow-lg"
          >
            {isEs ? 'Comparar y Reservar Tour' : 'Compare & Book Tour'}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToursGrid;