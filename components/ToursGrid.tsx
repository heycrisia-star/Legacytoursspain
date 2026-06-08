import React from 'react';
import { TOURS } from '../constants';
import TourCard from './TourCard';

interface ToursGridProps {
  onOpenBooking: () => void;
}

const ToursGrid: React.FC<ToursGridProps> = ({ onOpenBooking }) => {
  return (
    <section className="px-6 pb-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOURS.map((tour) => (
          <div key={tour.id} className="transition-transform hover:scale-[1.01]">
            <TourCard tour={tour} onOpenBooking={onOpenBooking} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToursGrid;