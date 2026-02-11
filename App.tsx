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
import LegacyChronicle from './components/LegacyChronicle';

import InstantBookingForm from './components/InstantBookingForm';

function App() {
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showPinPrompt, setShowPinPrompt] = useState(false);
  const [pin, setPin] = useState('');
  const longPressTimer = useRef<number | null>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Hidden access trigger: Long press on logo
  const handleLogoPressStart = () => {
    longPressTimer.current = window.setTimeout(() => {
      setShowPinPrompt(true);
    }, 2000); // 2 second hold
  };

  const handleLogoPressEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1234') { // Simple secret PIN
      setIsBookingOpen(true);
      setShowPinPrompt(false);
      setPin('');
    } else {
      alert('Incorrect PIN');
      setPin('');
    }
  };

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


      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-black/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center relative">

          {/* Logo - Left */}
          <div
            onMouseDown={handleLogoPressStart}
            onMouseUp={handleLogoPressEnd}
            onTouchStart={handleLogoPressStart}
            onTouchEnd={handleLogoPressEnd}
            className="cursor-pointer"
          >
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block pointer-events-none">
              <img
                src="/logo-legacy.png"
                alt="Legacy Tours Spain"
                className="h-20 w-auto object-contain"
              />
            </a>
          </div>

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
      <FloatingControls onOpenGuide={() => setIsGuideOpen(true)} />

      {isGuideOpen && (
        <LegacyChronicle onClose={() => setIsGuideOpen(false)} />
      )}

      {isBookingOpen && (
        <InstantBookingForm onClose={() => setIsBookingOpen(false)} />
      )}

      <FAQModal
        isOpen={isFAQOpen}
        onClose={() => setIsFAQOpen(false)}
      />

      {/* PIN Prompt Modal */}
      {showPinPrompt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-xs w-full text-center space-y-4">
            <h3 className="font-display font-bold uppercase tracking-widest">Internal Access</h3>
            <form onSubmit={handlePinSubmit} className="space-y-4">
              <input
                type="password"
                autoFocus
                className="w-full text-center text-2xl tracking-[1em] border-b-2 border-premium-gold py-2 focus:outline-none"
                value={pin}
                onChange={p => setPin(p.target.value)}
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowPinPrompt(false)}
                  className="flex-1 py-3 text-xs font-bold uppercase tracking-widest text-neutral-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-premium-gold text-white rounded-xl text-xs font-bold uppercase tracking-widest"
                >
                  Enter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;