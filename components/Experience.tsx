import React from 'react';
import { CarFront, Zap, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience: React.FC = () => {
  const { t, language } = useLanguage();
  const isEs = language === 'es';

  return (
    <section className="py-16 px-6 bg-[#F9F8F6]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-3xl bg-white shadow-sm hover:shadow-md border border-neutral-100 group hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-stone-100 text-premium-gold flex items-center justify-center">
              <CarFront className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-display font-bold text-neutral-900 uppercase tracking-wider">
                {t('experience.vintageTitle') || (isEs ? 'Confort Vintage' : 'Vintage Comfort')}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-sans leading-relaxed font-light">
                {t('experience.vintageText') || (isEs
                  ? 'Inspirados en el legendario Ford Modelo A de los años 30. Dos vehículos elegantes diseñados para una experiencia privada y exclusiva de hasta 8 personas.'
                  : 'Inspired by the legendary 1930s Ford Model A. Two elegant vehicles designed for an exclusive private experience of up to 8 guests.')}
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-3xl bg-white shadow-sm hover:shadow-md border border-neutral-100 group hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-stone-100 text-premium-gold flex items-center justify-center">
              <Zap className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-display font-bold text-neutral-900 uppercase tracking-wider">
                {t('experience.silentTitle') || (isEs ? 'Paseo Silencioso' : 'Silent Journey')}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-sans leading-relaxed font-light">
                {t('experience.silentText') || (isEs
                  ? 'Motor 100% eléctrico que garantiza un trayecto silencioso, limpio y sereno, permitiendo disfrutar de cada monumento y sonido de la ciudad.'
                  : '100% electric motor ensuring a quiet, clean and serene ride, allowing you to immerse yourself in the sights and ambiance of Barcelona.')}
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-3xl bg-white shadow-sm hover:shadow-md border border-neutral-100 group hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-stone-100 text-premium-gold flex items-center justify-center">
              <Eye className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-display font-bold text-neutral-900 uppercase tracking-wider">
                {t('experience.urbanTitle') || (isEs ? 'Vistas Panorámicas' : 'Panoramic Views')}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-sans leading-relaxed font-light">
                {t('experience.urbanText') || (isEs
                  ? 'Capota abierta y ángulo visual privilegiado para admirar las fachadas modernistas y miradores sin cristales de autobús ni aglomeraciones.'
                  : 'Open-air design and privileged vantage point to admire modernist facades and viewpoints without bus window reflections or crowds.')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;