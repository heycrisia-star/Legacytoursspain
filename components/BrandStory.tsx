import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Heart, Globe2, Compass, Sparkles } from 'lucide-react';

const BrandStory: React.FC = () => {
  const { language } = useLanguage();
  const isEs = language === 'es';

  return (
    <section className="py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Founder Poster Image / Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-md w-full">
              {/* Golden glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-premium-gold/30 to-amber-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-800">
                <img
                  src="/images/cristian_founder_story.png"
                  alt="Meet Cristian — Founder of Legacy Tours Spain"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Text Story & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-premium-gold mb-3">
                {isEs ? 'El Alma de Legacy Tours' : 'The Soul of Legacy Tours'}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase tracking-tight leading-none mb-4">
                {isEs ? 'Conoce a Cristian' : 'Meet Cristian'}
              </h2>
              <p className="text-premium-gold font-display text-sm uppercase tracking-widest font-semibold mb-6">
                {isEs ? 'Fundador y Guía · Legacy Tours Spain' : 'Founder & Guide · Legacy Tours Spain'}
              </p>
            </div>

            {/* Quote / Vision */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-3">
              <p className="text-white text-base sm:text-lg font-light italic leading-relaxed">
                {isEs
                  ? '«Creé Legacy Tours Spain porque quería una vida diferente. Después de momentos difíciles, necesitaba reconstruirme, tener tiempo para mis hijos Maxi y Milán, y conectar con personas de todo el mundo que están felices disfrutando de sus vacaciones.»'
                  : '«I created Legacy Tours Spain because I wanted a different life. After difficult moments, I needed to rebuild myself, spend time with my children Maxi and Milán, and connect with happy travelers visiting Barcelona from all over the world.»'}
              </p>
              <p className="text-xs text-premium-gold font-display uppercase tracking-widest font-bold">
                — Cristian
              </p>
            </div>

            {/* Bio Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
                <div className="flex items-center gap-3 mb-1">
                  <Award className="w-4 h-4 text-premium-gold" />
                  <p className="font-display font-bold text-xs uppercase tracking-wider text-white">
                    {isEs ? 'Ingeniero y Ex-Directivo' : 'Engineer & Former Manager'}
                  </p>
                </div>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {isEs
                    ? 'Lideró equipos de más de 660 personas y gestionó 33M € al año antes de apostar por su sueño familiar.'
                    : 'Managed teams of 660+ people and €33M/year before dedicating himself to his dream and family.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
                <div className="flex items-center gap-3 mb-1">
                  <Compass className="w-4 h-4 text-premium-gold" />
                  <p className="font-display font-bold text-xs uppercase tracking-wider text-white">
                    {isEs ? 'Paradas Estratégicas para Fotos' : 'Strategic Photo Stops'}
                  </p>
                </div>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {isEs
                    ? '3 itinerarios estudiados con paradas clave para bajar, admirar y tomar las mejores fotos de Barcelona sin prisas.'
                    : '3 curated routes with strategic stops to step out, take photos and enjoy Barcelona without rushing.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
                <div className="flex items-center gap-3 mb-1">
                  <Globe2 className="w-4 h-4 text-premium-gold" />
                  <p className="font-display font-bold text-xs uppercase tracking-wider text-white">
                    {isEs ? 'Idiomas y Atención Personal' : 'Languages & Guides'}
                  </p>
                </div>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {isEs
                    ? 'Cristian habla español y puede usar dispositivos de traducción en sus tours personales (previa confirmación). El resto del equipo cuenta con guías locales en múltiples idiomas.'
                    : 'Cristian speaks Spanish and can utilize translation devices on his personal tours upon prior confirmation. Our team also includes guides fluent in English and other languages.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
                <div className="flex items-center gap-3 mb-1">
                  <Heart className="w-4 h-4 text-premium-gold" />
                  <p className="font-display font-bold text-xs uppercase tracking-wider text-white">
                    {isEs ? 'Equilibrio y Calidez' : 'Family & Connection'}
                  </p>
                </div>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {isEs
                    ? 'Orgulloso padre de Maxi y Milán, apasionado del pádel, la bachata, la meditación y el trato humano.'
                    : 'Proud father of Maxi and Milán, lover of padel, bachata, meditation and warm human connections.'}
                </p>
              </div>
            </div>

            {/* Bottom note */}
            <div className="pt-2 flex items-center gap-3 text-xs text-neutral-400 font-sans">
              <Sparkles className="w-4 h-4 text-premium-gold shrink-0" />
              <span>
                {isEs
                  ? '+300 reseñas verificadas con más de 4.9 estrellas avalan nuestra forma de mostrar Barcelona.'
                  : '300+ verified reviews with a 4.9+ rating endorse our authentic way of experiencing Barcelona.'}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;