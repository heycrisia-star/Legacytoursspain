import React from 'react';
import { Zap, Languages, Lock, ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '../constants';
import GridDistortion from './GridDistortion';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-12 px-6 text-center overflow-hidden min-h-[85vh]">
      
      {/* Grid Distortion Background */}
      <div className="absolute inset-0 -z-10">
        <GridDistortion 
            imageSrc="https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070&auto=format&fit=crop"
            grid={10}
            mouse={0.1}
            strength={0.25}
            relaxation={0.9}
            className="w-full h-full opacity-60 grayscale-[100%] contrast-[1.1]"
        />
        {/* Subtle overlay to ensure text readability against the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F8F6]/80 via-[#F9F8F6]/60 to-[#F9F8F6]/80 pointer-events-none"></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up relative z-10">
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-premium-text leading-[0.9] uppercase drop-shadow-sm">
          Discover<br/><span className="text-premium-gold drop-shadow-md">Barcelona</span>
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
          target="_blank"
          rel="noopener noreferrer"
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