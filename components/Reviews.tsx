import React, { useState } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { REVIEWS, GOOGLE_REVIEWS_URL } from '../constants';

const PLATFORM_COLORS: Record<string, string> = {
  'GetYourGuide': 'bg-[#FF5533] text-white',
  'Google Maps': 'bg-white text-neutral-700 border border-neutral-200',
  'TripAdvisor': 'bg-[#34E0A1] text-white',
  'Facebook': 'bg-[#1877F2] text-white',
};

const Reviews: React.FC = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const visibleReviews = expanded ? REVIEWS : REVIEWS.slice(0, 6);

  return (
    <section className="pt-16 pb-24 px-6 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-4">
          <p className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-premium-gold">
            {t('reviews.eyebrow') || 'Real Experiences'}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-premium-text uppercase tracking-wide">
            {t('reviews.title')}
          </h2>

          {/* Star rating summary */}
          <div className="flex flex-col items-center gap-2 mt-2">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className="w-6 h-6 text-premium-gold fill-premium-gold" />
              ))}
            </div>
            <p className="text-neutral-500 text-sm font-sans">
              <strong className="text-neutral-800 font-bold">5.0</strong> · {t('reviews.subtitle') || 'Based on 200+ verified reviews'}
            </p>
            {/* Platform badges */}
            <div className="flex gap-2 mt-1 flex-wrap justify-center">
              {['GetYourGuide', 'Google Maps', 'TripAdvisor'].map((p) => (
                <span key={p} className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${PLATFORM_COLORS[p]}`}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Review Cards Grid — shows real review card photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review: any) => (
            <div
              key={review.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {review.reviewPhoto ? (
                /* Real screenshot of the review card */
                <div className="w-full">
                  <img
                    src={review.reviewPhoto}
                    alt={`Review by ${review.author}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ) : (
                /* Fallback text card */
                <div className="p-7 flex flex-col h-full min-h-[220px]">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-premium-gold text-premium-gold" />)}
                  </div>
                  <p className="text-neutral-600 font-sans italic leading-relaxed text-sm flex-1">
                    "{review.text}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-neutral-50">
                    <p className="font-display font-bold text-sm text-premium-text uppercase tracking-wide">{review.author}</p>
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mt-1">
                      <span>{review.location}</span>
                      <span>·</span>
                      <span className={`font-bold px-2 py-0.5 rounded-full text-[9px] uppercase tracking-widest ${PLATFORM_COLORS[review.source] || 'bg-neutral-100 text-neutral-500'}`}>
                        {review.source}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show more / Write review */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          {REVIEWS.length > 6 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-8 py-3 rounded-full border-2 border-premium-gold text-premium-gold font-display font-bold uppercase tracking-widest text-xs hover:bg-premium-gold hover:text-white transition-all duration-300"
            >
              {expanded
                ? (t('reviews.showLess') || 'Show less')
                : (t('reviews.showMore') || `See all ${REVIEWS.length} reviews`)}
            </button>
          )}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-premium-gold text-white font-display font-bold uppercase tracking-widest text-xs hover:bg-yellow-600 transition-all duration-300"
          >
            {t('reviews.writeReview') || 'Leave your review'}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;