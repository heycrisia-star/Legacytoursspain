import { Clock, ChevronDown, ChevronUp, MapPin, Users, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { Tour } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface TourCardProps {
  tour: Tour;
  onOpenBooking: () => void;
}

// Map tour ID to infographic image
const TOUR_MAPS: Record<string, string> = {
  'essential': '/images/tour_essential_map.jpeg',
  'city-sea': '/images/tour_parc_city_map.jpeg',
  'complete': '/images/tour_complete_map.jpeg',
};

const TOUR_BADGES: Record<string, { label: string; color: string }> = {
  'essential': { label: '1 h', color: 'bg-teal-600' },
  'city-sea': { label: 'Bestseller · 2 h', color: 'bg-premium-gold' },
  'complete': { label: '3 h', color: 'bg-neutral-800' },
};

const TourCard: React.FC<TourCardProps> = ({ tour, onOpenBooking }) => {
  const { t } = useLanguage();
  const [showMap, setShowMap] = useState(false);

  // Map tour ID to translation key
  const tourKey = tour.id === 'essential' ? 'tour1' : tour.id === 'city-sea' ? 'tour2' : 'tour3';
  const translatedName = t(`tours.${tourKey}.name`);
  const translatedRoute = t(`tours.${tourKey}.route`) || [];
  const mapImg = TOUR_MAPS[tour.id];
  const badge = TOUR_BADGES[tour.id];

  return (
    <div className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-neutral-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      {/* Tour infographic / map image */}
      <div className="relative overflow-hidden cursor-pointer" onClick={() => setShowMap(!showMap)}>
        {mapImg ? (
          <img
            src={mapImg}
            alt={`${translatedName} route map`}
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="h-48 bg-stone-100 flex items-center justify-center">
            <MapPin className="w-12 h-12 text-neutral-300" />
          </div>
        )}

        {/* Badge overlay */}
        {badge && (
          <span className={`absolute top-4 left-4 ${badge.color} text-white text-[10px] font-display font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow`}>
            {badge.label}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-display font-bold text-premium-text uppercase leading-tight mb-3">
          {translatedName}
        </h3>

        {/* Key specs row */}
        <div className="flex items-center gap-4 text-xs text-neutral-500 font-sans mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-premium-gold" />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-premium-gold" />
            {t('tours.private') || 'Private group'}
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-premium-gold" />
            {t('tours.electric') || '100% Electric'}
          </span>
        </div>

        {/* Route list (collapsible) */}
        <div className="mb-4">
          <ul className="space-y-2">
            {(translatedRoute as string[]).slice(0, showMap ? undefined : 3).map((stop: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-neutral-600 text-sm font-sans">
                <MapPin className="w-3.5 h-3.5 text-premium-gold mt-0.5 shrink-0" />
                <span>{stop}</span>
              </li>
            ))}
            {!showMap && (translatedRoute as string[]).length > 3 && (
              <li className="text-neutral-400 text-xs italic pl-5">
                + {(translatedRoute as string[]).length - 3} {t('tours.moreStops')}
              </li>
            )}
          </ul>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="flex flex-col gap-3 mt-4">
          {tour.bookingUrl && (
            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 rounded-xl bg-premium-gold text-white font-display font-bold uppercase tracking-widest text-sm hover:bg-yellow-600 transition-all flex items-center justify-center shadow-md"
            >
              {t('tours.bookNow')}
            </button>
          )}
          <button
            onClick={() => setShowMap(!showMap)}
            className="w-full py-3 rounded-xl bg-stone-50 border border-neutral-200 text-premium-text font-display font-bold uppercase tracking-widest text-xs hover:bg-neutral-100 transition-all flex items-center justify-center gap-2"
          >
            {showMap ? t('tours.closeRoute') : t('tours.viewRoute')}
            {showMap ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;