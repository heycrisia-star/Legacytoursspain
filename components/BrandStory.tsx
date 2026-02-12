import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const BrandStory: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="px-6 pb-12 pt-4 max-w-4xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-display font-medium text-premium-text leading-normal uppercase tracking-wide">
          {t('brand.quote')}
        </h2>

        <p className="text-base text-neutral-600 leading-relaxed font-sans max-w-2xl mx-auto">
          {t('brand.description')}
        </p>
      </div>
    </section>
  );
};

export default BrandStory;