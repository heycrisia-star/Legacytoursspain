import React, { useState } from 'react';
import { TOURS } from '../constants';
import TourCard from './TourCard';
import TourMap from './TourMap';

const ToursGrid: React.FC = () => {
  const [activeTourId, setActiveTourId] = useState(TOURS[0].id);

  return (
    <section className="px-6 pb-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOURS.map((tour) => (
          <div key={tour.id} onClick={() => setActiveTourId(tour.id)} className="cursor-pointer transition-transform hover:scale-[1.01]">
            <TourCard tour={tour} />
          </div>
        ))}
      </div>

      <div className="mt-16 mb-12">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-premium-text uppercase tracking-widest mb-3">
            Interactive Route Map
          </h2>
          <p className="text-neutral-600 font-sans font-light">Explore the stops for the selected tour</p>

          <div className="flex gap-4 mt-6 flex-wrap justify-center">
            {TOURS.map(tour => (
              <button
                key={tour.id}
                onClick={() => setActiveTourId(tour.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeTourId === tour.id
                  ? 'bg-premium-gold text-black border-premium-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-transparent text-neutral-400 border-neutral-700 hover:border-premium-gold/50 hover:text-premium-gold'
                  }`}
              >
                {tour.name}
              </button>
            ))}
          </div>
        </div>

        <TourMap tours={TOURS} activeTourId={activeTourId} />
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