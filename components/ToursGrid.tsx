import React from 'react';
import { TOURS } from '../constants';
import TourCard from './TourCard';

const ToursGrid: React.FC = () => {
  return (
    <section className="px-6 pb-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOURS.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-center space-y-3 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <p className="text-neutral-500 text-sm font-light tracking-wide max-w-2xl">
          We offer complimentary pickup and drop-off at central locations or your preferred spot.
        </p>
        <p className="text-neutral-500 text-sm font-light tracking-wide">
          Custom flexible tours are available starting from <span className="text-premium-text font-medium">30 minutes</span>.
        </p>
      </div>
    </section>
  );
};

export default ToursGrid;