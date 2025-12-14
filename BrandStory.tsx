import React from 'react';

const BrandStory: React.FC = () => {
  return (
    <section className="px-6 pb-12 pt-4 max-w-4xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-display font-medium text-premium-text leading-normal uppercase tracking-wide">
          "The charm of vintage 1930s style <span className="text-premium-gold font-bold">fused</span> with modern AI technology."
        </h2>
        
        <p className="text-base text-neutral-600 leading-relaxed font-sans max-w-2xl mx-auto">
          Explore Barcelona in a private, eco-friendly setting. Discover iconic landmarks and hidden gems where you can experience the city like a local.
        </p>
      </div>
    </section>
  );
};

export default BrandStory;