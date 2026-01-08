import React, { useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import BrandStory from './components/BrandStory';
import Experience from './components/Experience';
import ToursGrid from './components/ToursGrid';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import FAQModal from './components/FAQModal';
import FloatingControls from './components/FloatingControls';
import SplashCursor from './components/SplashCursor';

function App() {
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    // Basic implementation for scrolling if sections had IDs, or specific logic
    if (id === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'faq') {
      setIsFAQOpen(true);
    } else {
      // Fallback for simple page structure
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-premium-bg text-premium-text selection:bg-premium-gold/30 selection:text-black font-sans antialiased">

      {/* Fluid Cursor Effect */}
      <SplashCursor />

      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-black/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center relative">

          {/* Logo - Left */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block">
            <img
              src="/logo-legacy.png"
              alt="Legacy Tours Spain"
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {['Tours', 'Reviews', 'FAQ', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-sans font-medium text-neutral-500 hover:text-premium-gold tracking-widest uppercase transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex flex-col pt-20">
        <Hero />
        <Gallery />
        <Experience />
        <BrandStory />
        <div id="tours">
          <ToursGrid />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
      </main>

      <Footer
        onOpenFAQ={() => setIsFAQOpen(true)}
        contactRef={contactRef}
      />

      {/* New Stacked Buttons */}
      <FloatingControls />

      <FAQModal
        isOpen={isFAQOpen}
        onClose={() => setIsFAQOpen(false)}
      />
    </div>
  );
}

export default App;