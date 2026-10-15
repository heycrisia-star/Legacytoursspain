import React, { useState } from 'react';
import { Star, ExternalLink, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // We show 3 reviews per page on desktop, 1 on mobile
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, REVIEWS.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleReviews = REVIEWS.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20 px-6 bg-[#F9F8F6] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <span className="text-xs font-display font-bold tracking-[0.3em] uppercase text-premium-gold">
            {language === 'es' ? 'Opiniones 100% Auténticas' : '100% Verified Reviews'}
          </span>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 uppercase tracking-tight">
            {language === 'es' ? 'La Confianza de Nuestros Viajeros' : 'What Our Guests Say'}
          </h2>

          {/* Rating Summary Bar */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white px-7 py-3.5 rounded-full border border-neutral-200/80 shadow-sm mt-2">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 text-premium-gold fill-premium-gold" />
              ))}
              <span className="text-base font-display font-bold text-neutral-900 ml-1.5">+4.9 / 5.0</span>
            </div>
            
            <div className="hidden sm:block w-px h-5 bg-neutral-200" />

            <div className="flex items-center gap-2 text-xs font-sans text-neutral-500 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{language === 'es' ? '+4.9 estrellas en más de 300 reseñas verificadas' : '+4.9 stars across 300+ verified reviews'}</span>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center justify-between absolute top-1/2 -left-4 -right-4 -translate-y-1/2 pointer-events-none z-10">
            <button
              onClick={handlePrev}
              aria-label="Previous reviews"
              className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-neutral-200 text-neutral-800 hover:bg-neutral-900 hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next reviews"
              className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-neutral-200 text-neutral-800 hover:bg-neutral-900 hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Cards Grid (Slider view of 3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleReviews.map((review: any) => {
              const platform = PLATFORM_BADGES[review.source] || {
                bg: 'bg-neutral-100 text-neutral-700 border-neutral-200',
                text: 'text-neutral-700',
                label: review.source
              };

              return (
                <div
                  key={review.id}
                  className="relative bg-white rounded-3xl p-7 border border-neutral-200/70 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group min-h-[260px]"
                >
                  <Quote className="absolute top-6 right-6 w-9 h-9 text-premium-gold/10 group-hover:text-premium-gold/20 transition-colors pointer-events-none" />

                  <div>
                    {/* Stars + Platform Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-3.5 h-3.5 text-premium-gold fill-premium-gold" />
                        ))}
                      </div>
                      <span className={`text-[9px] font-display font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${platform.bg}`}>
                        {platform.label}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-neutral-700 font-sans italic text-sm leading-relaxed mb-6 font-light line-clamp-4">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-xs text-neutral-900 uppercase tracking-wide">
                        {review.author}
                      </h4>
                      <p className="text-[11px] text-neutral-400 font-sans">
                        {review.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-sans text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{language === 'es' ? 'Verificado' : 'Verified'}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Arrows & Progress Dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="md:hidden w-10 h-10 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-700" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-6 bg-premium-gold' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next"
              className="md:hidden w-10 h-10 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-neutral-700" />
            </button>
          </div>
        </div>

        {/* Link to Google Reviews */}
        <div className="text-center mt-8">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-neutral-600 hover:text-premium-gold transition-colors"
          >
            <span>{language === 'es' ? 'Ver todas las reseñas en Google' : 'Read all reviews on Google'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;