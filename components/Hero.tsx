import React from 'react';
import { Zap, Languages, Lock, ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '../constants';
import Antigravity from './Antigravity';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-12 px-6 text-center overflow-hidden min-h-[85vh]">

      {/* Antigravity Background */}
      <div className="absolute inset-0 -z-10 bg-[#F9F8F6]">

        {/* Background Image - Translucent */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery-2.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-[0.10] grayscale-[20%]"
          />
        </div>

        {/* Gradient Overlay - Reduced opacity for visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F8F6]/60 via-transparent to-[#F9F8F6] pointer-events-none z-10"></div>

        {/* Antigravity Canvas - Elevated Z-Index */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 20, pointerEvents: 'none' }}>
          <Antigravity
            count={300}
            magnetRadius={20}
            ringRadius={15}
            waveSpeed={0.5}
            waveAmplitude={1.5}
            particleSize={4}
            lerpSpeed={0.08}
            color={'#D4AF37'} // Premium Gold
            autoAnimate={true}
            particleVariance={1.5}
            particleShape="capsule"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up relative z-10 flex flex-col items-center">

        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-premium-text leading-[0.9] uppercase drop-shadow-sm">
          Discover<br /><span className="text-premium-gold drop-shadow-md">Barcelona</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-800 font-sans font-medium tracking-wide max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm">
          Private tours with real-time AI translation in a 100% electric vintage experience.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-4">
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-md shadow-md border border-white/50">
            <Zap className="w-5 h-5 text-premium-gold" />
            <span className="text-sm font-display font-medium tracking-wider text-premium-text uppercase">100% Electric</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-md shadow-md border border-white/50">
            <Languages className="w-5 h-5 text-premium-gold" />
            <span className="text-sm font-display font-medium tracking-wider text-premium-text uppercase">AI Translator</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-md shadow-md border border-white/50">
            <Lock className="w-5 h-5 text-premium-gold" />
            <span className="text-sm font-display font-medium tracking-wider text-premium-text uppercase">100% Private</span>
          </div>
        </div>

        <a
          href={BOOKING_URL}
          className="group inline-flex items-center gap-3 bg-premium-gold hover:bg-yellow-600 text-white px-10 py-5 rounded-full text-base font-display font-bold tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
        >
          Book Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;