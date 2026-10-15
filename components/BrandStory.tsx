import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Award, MapPin } from 'lucide-react';

const BrandStory: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="/images/photo_cristian_selfie.jpeg"
                alt="Cristian — Founder of Legacy Tours Spain"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-display font-bold text-lg uppercase tracking-widest">Cristian</p>
                <p className="text-white/70 text-sm font-sans">{t('brand.founder.title') || 'Founder & Guide — Legacy Tours Spain'}</p>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -top-6 -right-6 bg-premium-gold text-white rounded-2xl p-5 shadow-xl text-center hidden lg:block">
              <p className="text-3xl font-display font-black">+200</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-90">
                {t('brand.stat.reviews') || 'Verified\nreviews'}
              </p>
            </div>

            {/* Second floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-neutral-900 rounded-2xl p-5 shadow-xl text-center hidden lg:block">
              <p className="text-3xl font-display font-black">5★</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                {t('brand.stat.rating') || 'Average\nrating'}
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <p className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-premium-gold mb-4">
                {t('brand.eyebrow') || 'Our Story'}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {t('brand.title') || 'Born from a passion for Barcelona'}
              </h2>
              <p className="text-white/70 leading-relaxed text-base font-light mb-4">
                {t('brand.description') || 'Legacy Tours Spain was born from Cristian\'s desire to share Barcelona in the most authentic and personal way. Not just a tour — a real conversation with the city, riding through its streets in a vintage electric car that turns every corner into a story.'}
              </p>
              <p className="text-white/70 leading-relaxed text-base font-light">
                {t('brand.description2') || 'Cristian speaks Spanish and, on the tours he guides personally, can use a translation device upon prior request — so nothing gets lost between you and Barcelona. Our other guides speak English, French, Italian, German and Catalan natively.'}
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {[
                {
                  icon: <Heart className="w-5 h-5" />,
                  title: t('brand.value1.title') || 'Personal attention',
                  desc: t('brand.value1.desc') || 'Every tour is unique. We adapt to you, your group and your pace.',
                },
                {
                  icon: <Award className="w-5 h-5" />,
                  title: t('brand.value2.title') || 'Verified 5-star experience',
                  desc: t('brand.value2.desc') || 'Over 200 real reviews on GetYourGuide, Google and TripAdvisor.',
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  title: t('brand.value3.title') || 'Local knowledge',
                  desc: t('brand.value3.desc') || 'Hidden corners, local stories, genuine passion for this city.',
                },
              ].map((v, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-premium-gold/20 text-premium-gold flex items-center justify-center">
                    {v.icon}
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm uppercase tracking-wide">{v.title}</p>
                    <p className="text-white/60 text-sm font-light mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;