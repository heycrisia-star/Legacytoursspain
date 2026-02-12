import { Clock, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import React, { useState } from 'react';
import { Tour } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Map tour ID to translation key
  const tourKey = tour.id === 'essential' ? 'tour1' : tour.id === 'city-sea' ? 'tour2' : 'tour3';
  const translatedName = t(`tours.${tourKey}.name`);
  const translatedRoute = t(`tours.${tourKey}.route`) || [];

  return (
    <div
      className={`group relative flex flex-col h-full p-8 rounded-xl transition-all duration-300 bg-white border border-neutral-100/50
      ${isOpen ? 'shadow-xl ring-1 ring-premium-gold' : 'shadow-md hover:shadow-xl hover:-translate-y-1'}
      `}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-2 text-premium-gold font-display font-bold tracking-wider text-sm uppercase">
          <Clock className="w-4 h-4" />
          <span>{tour.duration}</span>
        </div>
      </div>

      <h3 className="text-2xl font-display font-bold text-premium-text uppercase leading-none mb-6 relative z-10">
        {translatedName}
      </h3>

      {/* Route List */}
      <div className="relative z-10">
        <div className={`space-y-3 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-80'}`}>
          <ul className="space-y-3">
            {translatedRoute.slice(0, isOpen ? undefined : 3).map((stop: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-neutral-600 text-sm font-sans">
                <MapPin className="w-4 h-4 text-premium-gold mt-0.5 shrink-0" />
                <span>{stop}</span>
              </li>
            ))}
            {!isOpen && translatedRoute.length > 3 && (
              <li className="text-neutral-400 text-xs italic pl-7">
                + {translatedRoute.length - 3} {t('tours.moreStops')}
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
            {t('tours.bookNow')}
          </a>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-3 rounded bg-premium-bg border border-neutral-200 text-premium-text font-display font-bold uppercase tracking-widest text-xs hover:bg-neutral-100 transition-all flex items-center justify-center gap-2"
        >
          {isOpen ? t('tours.closeRoute') : t('tours.viewRoute')}
          {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
      </div>
    </div>
  );
};

export default TourCard;