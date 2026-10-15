import { Clock, ShieldCheck, Zap } from 'lucide-react';
import React from 'react';
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

const TOUR_BADGES: Record<string, { labelEs: string; labelEn: string; color: string }> = {
  'essential': { labelEs: '1 HORA', labelEn: '1 HOUR', color: 'bg-neutral-800' },
  'city-sea': { labelEs: 'BESTSELLER · 2 HORAS', labelEn: 'BESTSELLER · 2 HOURS', color: 'bg-premium-gold' },
  'complete': { labelEs: 'COMPLETO · 3 HORAS', labelEn: 'COMPLETE · 3 HOURS', color: 'bg-neutral-900' },
};

const TOUR_NAMES: Record<string, { es: string; en: string }> = {
  'essential': { es: 'Essential Barcelona', en: 'Essential Barcelona' },
  'city-sea': { es: 'Park City & Beach', en: 'Park City & Beach' },
  'complete': { es: 'Complete Barcelona', en: 'Complete Barcelona' },
};

const TOUR_SUBTITLES: Record<string, { es: string; en: string }> = {
  'essential': {
    es: 'Recorrido cerrado de 1 hora por los iconos imprescindibles del centro modernista.',
    en: '1-hour curated route through the essential modernist landmarks.'
  },
  'city-sea': {
    es: 'Recorrido cerrado de 2 horas uniendo arquitectura, parques y costa mediterránea.',
    en: '2-hour curated route connecting architecture, parks and the Mediterranean coast.'
  },
  'complete': {
    es: 'La experiencia definitiva de 3 horas: monumentos, mirador de Montjuïc y toda la ciudad.',
    en: 'The ultimate 3-hour experience: monuments, Montjuïc panoramic views and the entire city.'
  },
};

const TourCard: React.FC<TourCardProps> = ({ tour, onOpenBooking }) => {
  const { language } = useLanguage();
  const isEs = language === 'es';

  const mapImg = TOUR_MAPS[tour.id];
  const badge = TOUR_BADGES[tour.id];
  const name = TOUR_NAMES[tour.id]?.[isEs ? 'es' : 'en'] || tour.name;
  const subtitle = TOUR_SUBTITLES[tour.id]?.[isEs ? 'es' : 'en'];

  return (
    <div className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-white border border-neutral-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

      {/* Tour infographic / map image */}
      <div className="relative overflow-hidden bg-stone-100">
        {mapImg && (
          <img
            src={mapImg}
            alt={`${name} route infographic`}
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        )}

        {/* Badge overlay */}
        {badge && (
          <span className={`absolute top-4 left-4 ${badge.color} text-white text-[11px] font-display font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg`}>
            {isEs ? badge.labelEs : badge.labelEn}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-2xl font-display font-bold text-neutral-900 uppercase leading-tight mb-2">
          {name}
        </h3>

        {subtitle && (
          <p className="text-neutral-500 text-sm font-sans font-light leading-relaxed mb-5">
            {subtitle}
          </p>
        )}

        {/* Key specs row */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600 font-sans mb-6 pt-2 border-t border-neutral-100">
          <span className="inline-flex items-center gap-1.5 bg-stone-50 px-2.5 py-1.5 rounded-lg border border-stone-200/60 font-medium">
            <Clock className="w-3.5 h-3.5 text-premium-gold" />
            {tour.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-stone-50 px-2.5 py-1.5 rounded-lg border border-stone-200/60 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-premium-gold" />
            {isEs ? 'Ruta cerrada y exclusiva' : 'Curated private route'}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-stone-50 px-2.5 py-1.5 rounded-lg border border-stone-200/60 font-medium">
            <Zap className="w-3.5 h-3.5 text-premium-gold" />
            {isEs ? '100% Eléctrico' : '100% Electric'}
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Direct Action */}
        <button
          onClick={onOpenBooking}
          className="w-full py-4 rounded-2xl bg-neutral-900 text-white font-display font-bold uppercase tracking-widest text-xs hover:bg-premium-gold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl active:scale-[0.99]"
        >
          {isEs ? 'Reservar Ahora' : 'Book Now'}
        </button>
      </div>
    </div>
  );
};

export default TourCard;