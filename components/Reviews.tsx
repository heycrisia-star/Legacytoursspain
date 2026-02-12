import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Reviews: React.FC = () => {
  const { t } = useLanguage();
  const reviewItems = t('reviews.items') || [];

  return (
    <section className="pt-8 pb-32 px-6 bg-[#F9F8F6]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 space-y-2">
          <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 text-premium-gold fill-premium-gold" />
            ))}
          </div>
          <h2 className="text-3xl font-display font-bold text-premium-text uppercase tracking-wide">
            {t('reviews.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewItems.map((review: any) => (
            <div key={review.id} className="relative p-8 rounded-xl bg-white shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300 flex flex-col">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-premium-gold/20" />

              <p className="text-neutral-600 font-sans italic mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="mt-auto">
                <div className="text-premium-text font-display font-bold tracking-wide uppercase text-sm">
                  {review.author}
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400 font-sans mt-1">
                  <span>{review.location}</span>
                  <span>•</span>
                  <span className="text-premium-gold">{review.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;