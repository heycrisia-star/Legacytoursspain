import React from 'react';
import { CarFront, Zap, Eye } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-[#F9F8F6]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center space-y-5 p-8 rounded-2xl bg-white shadow-md border border-neutral-100 group hover:-translate-y-2 transition-transform duration-300">
                <div className="p-4 rounded-full bg-premium-bg text-premium-gold">
                    <CarFront className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-display font-bold text-premium-text uppercase tracking-widest">
                      Vintage Comfort
                  </h3>
                  <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                      Inspired reproduction of the legendary 1930s Ford Model A. A spacious, elegant vehicle designed for an exclusive and comfortable experience.
                  </p>
                </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center space-y-5 p-8 rounded-2xl bg-white shadow-md border border-neutral-100 group hover:-translate-y-2 transition-transform duration-300">
                <div className="p-4 rounded-full bg-premium-bg text-premium-gold">
                    <Zap className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-display font-bold text-premium-text uppercase tracking-widest">
                      Silent Ride
                  </h3>
                  <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                      100% electric engine ensuring a silent and smooth journey, without noise or vibrations, allowing you to fully enjoy the surroundings.
                  </p>
                </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center space-y-5 p-8 rounded-2xl bg-white shadow-md border border-neutral-100 group hover:-translate-y-2 transition-transform duration-300">
                <div className="p-4 rounded-full bg-premium-bg text-premium-gold">
                    <Eye className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-display font-bold text-premium-text uppercase tracking-widest">
                      Urban View
                  </h3>
                  <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                      Discover the city from a unique perspective, with clear views of its main corners and most famous landmarks.
                  </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;