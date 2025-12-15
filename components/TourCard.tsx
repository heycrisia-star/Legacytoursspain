import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`group relative flex flex-col h-full p-8 rounded-xl transition-all duration-300 bg-white border border-neutral-100
      ${isOpen ? 'shadow-xl ring-1 ring-premium-gold' : 'shadow-md hover:shadow-xl hover:-translate-y-1'}
      `}
    >
      {/* Header Section */}
      <div className="mb-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2 text-premium-gold font-display font-bold tracking-wider text-sm uppercase">
            <Clock className="w-4 h-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="px-3 py-1 bg-premium-bg rounded text-premium-text font-display font-bold text-sm tracking-wide border border-neutral-200">
            {tour.price}
          </div>
        </div>

        <h3 className="text-2xl font-display font-bold text-premium-text uppercase leading-none mb-2">
          {tour.name}
        </h3>
      </div>

      {/* Route List */}
      <div className="relative z-10">
        <div className={`space-y-3 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-80'}`}>
          <ul className="space-y-3">
            {tour.route.slice(0, isOpen ? undefined : 3).map((stop, index) => (
              <li key={index} className="flex items-start gap-3 text-neutral-600 text-sm font-sans">
                <MapPin className="w-4 h-4 text-premium-gold mt-0.5 shrink-0" />
                <span>{stop}</span>
              </li>
            ))}
            {!isOpen && tour.route.length > 3 && (
              <li className="text-neutral-400 text-xs italic pl-7">
                + {tour.route.length - 3} more stops...
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-auto pt-8 relative z-10 flex flex-col gap-3">
        {tour.bookingUrl && (
          <a
            href={tour.bookingUrl}
            className="w-full py-3 rounded bg-premium-gold text-white font-display font-bold uppercase tracking-widest text-sm hover:bg-yellow-600 transition-all flex items-center justify-center shadow-md"
          >
            Book Now
          </a>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-3 rounded bg-premium-bg border border-neutral-200 text-premium-text font-display font-bold uppercase tracking-widest text-xs hover:bg-neutral-100 transition-all flex items-center justify-center gap-2"
        >
          {isOpen ? 'Close Route' : 'View Full Route'}
          {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
      </div>
    </div>
  );
};

export default TourCard;