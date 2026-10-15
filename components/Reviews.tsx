import React, { useState } from 'react';
import { Star, ExternalLink, Quote, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { REVIEWS, GOOGLE_REVIEWS_URL } from '../constants';

const PLATFORM_BADGES: Record<string, { bg: string; text: string; label: string }> = {
  'GetYourGuide': { bg: 'bg-[#FFF0ED] text-[#FF5533] border-[#FF5533]/20', text: 'text-[#FF5533]', label: 'GetYourGuide' },
  'Google Maps': { bg: 'bg-[#F1F3F4] text-[#1A73E8] border-[#1A73E8]/20', text: 'text-[#1A73E8]', label: 'Google Reviews' },
  'TripAdvisor': { bg: 'bg-[#E8FAF4] text-[#00AA6C] border-[#00AA6C]/20', text: 'text-[#00AA6C]', label: 'TripAdvisor' },
  'Facebook': { bg: 'bg-[#EDF2FA] text-[#1877F2] border-[#1877F2]/20', text: 'text-[#1877F2]', label: 'Facebook' },
};

const Reviews: React.FC = () => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const visibleReviews = expanded ? REVIEWS : REVIEWS.slice(0, 6);

  return (
    <section className="py-24 px-6 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-xs font-display font-bold tracking-[0.3em] uppercase text-premium-gold">
            {language === 'es' ? 'Opiniones 100% Auténticas' : '100% Verified Reviews'}
          </span>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 uppercase tracking-tight">
            {language === 'es' ? 'La Confianza de Nuestros Viajeros' : 'What Our Guests Say'}
          </h2>

          {/* Rating Summary Bar */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white px-8 py-4 rounded-3xl border border-neutral-200/80 shadow-sm mt-2">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 text-premium-gold fill-premium-gold" />
              ))}
              <span className="text-xl font-display font-bold text-neutral-900 ml-2">5.0 / 5.0</span>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-neutral-200" />

            <div className="flex items-center gap-2 text-xs font-sans text-neutral-500 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{language === 'es' ? '+200 valoraciones reales en' : '+200 authentic reviews on'}</span>
              <span className="font-bold text-neutral-800">Google, GetYourGuide & TripAdvisor</span>
            </div>
          </div>
        </div>

        {/* Uniform Luxury Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review: any) => {
            const platform = PLATFORM_BADGES[review.source] || {
              bg: 'bg-neutral-100 text-neutral-700 border-neutral-200',
              text: 'text-neutral-700',
              label: review.source
            };

            return (
              <div
                key={review.id}
                className="relative bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-premium-gold/10 group-hover:text-premium-gold/20 transition-colors pointer-events-none" />

                <div>
                  {/* Stars + Platform Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 text-premium-gold fill-premium-gold" />
                      ))}
                    </div>
                    <span className={`text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${platform.bg}`}>
                      {platform.label}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-neutral-700 font-sans italic text-sm leading-relaxed mb-6 font-light">
                    "{review.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-neutral-900 uppercase tracking-wide">
                      {review.author}
                    </h4>
                    <p className="text-xs text-neutral-400 font-sans mt-0.5">
                      {review.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-sans text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{language === 'es' ? 'Verificado' : 'Verified'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
          {REVIEWS.length > 6 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-8 py-3.5 rounded-full border-2 border-neutral-800 text-neutral-800 font-display font-bold uppercase tracking-widest text-xs hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              {expanded
                ? (language === 'es' ? 'Ver menos' : 'Show less')
                : (language === 'es' ? `Ver todas las opiniones (${REVIEWS.length})` : `Show all ${REVIEWS.length} reviews`)}
            </button>
          )}

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-premium-gold text-white font-display font-bold uppercase tracking-widest text-xs hover:bg-yellow-600 transition-all duration-300 shadow-md"
          >
            {language === 'es' ? 'Escribir o ver en Google' : 'Write or view on Google'}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;