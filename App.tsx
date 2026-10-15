import React, { useState, useRef } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import BrandStory from './components/BrandStory';
import Experience from './components/Experience';
import ToursGrid from './components/ToursGrid';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import FAQModal from './components/FAQModal';
import FloatingControls from './components/FloatingControls';
import InstantBookingForm from './components/InstantBookingForm';
import { useLanguage } from './context/LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import CruiseLanding from './components/CruiseLanding';
import VehicleSection from './components/VehicleSection';
import BookingModal from './components/BookingModal';
import BlogIndex from './components/Blog/BlogIndex';
import BlogPostView from './components/Blog/BlogPostView';
import { BLOG_POSTS } from './data/blogPosts';

function App() {
  const { t, language } = useLanguage();
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showPinPrompt, setShowPinPrompt] = useState(false);
  const [pin, setPin] = useState('');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const longPressTimer = useRef<number | null>(null);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Track GA4 pageviews on client-side route navigation
  React.useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-RS5S51C7J5', {
        page_path: currentPath,
        page_location: window.location.href,
      });
    }
  }, [currentPath]);

  const contactRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { key: 'tours', label: t('nav.tours') || 'Tours' },
    { key: 'reviews', label: t('nav.reviews') || 'Reviews' },
    { key: 'blog', label: 'Blog' },
    { key: 'faq', label: t('nav.faq') || 'FAQ' },
    { key: 'contact', label: t('nav.contact') || 'Contact' }
  ];

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
      alert(t('admin.incorrect'));
      setPin('');
    }
  };

  // Smooth scroll handler / navigation handler
  const scrollToSection = (id: string) => {
    if (id === 'blog') {
      navigate('/blog');
      return;
    }

    if (currentPath !== '/') {
      navigate('/');
      setTimeout(() => {
        if (id === 'contact' && contactRef.current) {
          contactRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (id === 'faq') {
          setIsFAQOpen(true);
        } else {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    if (id === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'faq') {
      setIsFAQOpen(true);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine which post to view if on /blog/:slug
  const currentPostSlug = currentPath.startsWith('/blog/') ? currentPath.replace('/blog/', '') : null;
  const currentPost = currentPostSlug ? BLOG_POSTS.find(p => p.slug === currentPostSlug) : null;

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
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="block">
              <img
                src="https://res.cloudinary.com/dk7xpxrvh/image/upload/v1771317526/ultimo_intento_yrsutn.png"
                alt="Legacy Tours Spain"
                className="h-24 w-auto object-contain"
              />
            </a>
          </div>

          <div className="flex items-center gap-6">
            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`text-sm font-sans font-medium tracking-widest uppercase transition-colors ${
                    (item.key === 'blog' && currentPath.startsWith('/blog'))
                      ? 'text-premium-gold font-bold'
                      : 'text-neutral-500 hover:text-premium-gold'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="flex flex-col pt-20">
        {currentPath === '/barcelona-cruise-private-tour' ? (
          <CruiseLanding />
        ) : currentPath.startsWith('/blog/') && currentPost ? (
          <BlogPostView
            post={currentPost}
            onBack={() => navigate('/blog')}
            onSelectPost={(slug) => navigate(`/blog/${slug}`)}
            onOpenBooking={() => setIsBookingModalOpen(true)}
          />
        ) : currentPath === '/blog' || currentPath.startsWith('/blog/') ? (
          <BlogIndex
            onSelectPost={(slug) => navigate(`/blog/${slug}`)}
            onOpenBooking={() => setIsBookingModalOpen(true)}
          />
        ) : (
          <>
            <Hero onOpenBooking={() => setIsBookingModalOpen(true)} />
            <div id="reviews">
              <Reviews />
            </div>
            <div id="tours">
              <ToursGrid />
            </div>
            <VehicleSection />
            <Experience />
            <BrandStory />
          </>
        )}
      </main>

      <Footer
        onOpenFAQ={() => setIsFAQOpen(true)}
        contactRef={contactRef}
      />

      <FloatingControls />
      {isBookingOpen && (
        <InstantBookingForm onClose={() => setIsBookingOpen(false)} />
      )}

      <FAQModal
        isOpen={isFAQOpen}
        onClose={() => setIsFAQOpen(false)}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onOpenGuide={() => {}}
      />

      {/* PIN Prompt Modal */}
      {showPinPrompt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-xs w-full text-center space-y-4">
            <h3 className="font-display font-bold uppercase tracking-widest">{t('admin.title')}</h3>
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
                  {t('admin.cancel')}
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-premium-gold text-white rounded-xl text-xs font-bold uppercase tracking-widest"
                >
                  {t('admin.enter')}
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