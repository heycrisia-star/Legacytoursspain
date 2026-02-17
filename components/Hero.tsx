import React from 'react';
import { Zap, Languages, Lock, ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '../constants';
import Antigravity from './Antigravity';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-12 px-6 text-center overflow-hidden min-h-[85vh]">

      {/* Antigravity Background */}
      <div className="absolute inset-0 -z-10 bg-[#F9F8F6]">

        {/* Background Image - Enhanced visibility */}
        <div className="absolute inset-0 z-0 scale-105 transition-transform duration-[20s] ease-linear overflow-hidden">
          <img
            src="/images/gallery-2.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-[0.18] grayscale-[10%] animate-slow-zoom"
          />
        </div>

        {/* Gradient Overlay - Richer depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F8F6]/80 via-transparent to-[#F9F8F6] pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#F9F8F6_90%)] pointer-events-none z-10"></div>

        {/* Antigravity Canvas - Elevated Z-Index */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 20, pointerEvents: 'none' }}>
          <Antigravity
            count={300}
            magnetRadius={25}
            ringRadius={18}
            waveSpeed={0.4}
            waveAmplitude={2}
            particleSize={3}
            lerpSpeed={0.06}
            color={'#D4AF37'} // Premium Gold
            autoAnimate={true}
            particleVariance={2}
            particleShape="capsule"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-10 animate-fade-in-up relative z-30 flex flex-col items-center">

        {/* Tagline */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-full border border-premium-gold/20 shadow-lg">
          <span className="text-xs md:text-sm font-display font-bold uppercase tracking-[0.3em] text-premium-text">
            {t('hero.tagline')}
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight text-premium-text leading-[0.85] uppercase drop-shadow-lg">
          {t('hero.title').split(' ')[0]}<br />
          <span className="text-premium-gold drop-shadow-2xl bg-gradient-to-r from-[#D4AF37] via-[#F1C40F] to-[#D4AF37] bg-clip-text text-transparent">
            {t('hero.title').split(' ').slice(1).join(' ')}
          </span>
        </h1>

        <p className="text-base md:text-xl text-neutral-800 font-sans font-medium tracking-wide max-w-2xl mx-auto bg-white/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-8 py-2">
          {[
            { icon: Zap, text: t('hero.electric') },
            { icon: Languages, text: t('hero.translator') },
            { icon: Lock, text: t('hero.private') }
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-neutral-100/50 hover:scale-105 transition-transform duration-300">
              <Icon className="w-5 h-5 text-premium-gold" />
              <span className="text-[10px] md:text-xs font-display font-bold tracking-[0.2em] text-premium-text uppercase">{text}</span>
            </div>
          ))}
        </div>

        <a
          href={BOOKING_URL}
          className="group relative inline-flex items-center gap-4 bg-premium-gold hover:bg-yellow-600 text-white px-12 py-6 rounded-full text-base font-display font-bold tracking-widest uppercase transition-all duration-500 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] overflow-hidden shadow-2xl"
        >
          <span className="relative z-10 flex items-center gap-3">
            {t('hero.book')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;