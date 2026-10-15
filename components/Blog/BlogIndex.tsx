import React, { useState } from 'react';
import { BLOG_POSTS } from '../../data/blogPosts';
import { useLanguage } from '../../context/LanguageContext';
import { Clock, ArrowRight, Sparkles, MapPin, BookOpen } from 'lucide-react';
import { BOOKING_URL } from '../../constants';

interface BlogIndexProps {
  onSelectPost: (slug: string) => void;
  onOpenBooking: () => void;
}

export const BlogIndex: React.FC<BlogIndexProps> = ({ onSelectPost }) => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: language === 'es' ? 'Todos los artículos' : 'All Stories' },
    { id: 'architecture', label: language === 'es' ? 'Arquitectura & Gaudí' : 'Architecture & Gaudí' },
    { id: 'history', label: language === 'es' ? 'Historia de Barcelona' : 'Barcelona History' },
    { id: 'culture', label: language === 'es' ? 'Cultura & Parques' : 'Culture & Parks' },
  ];

  const filteredPosts = selectedCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === selectedCategory);

  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-[#F9F8F6] pt-24 pb-20">
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-14 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-premium-gold/30 shadow-sm mb-6">
          <Sparkles className="w-4 h-4 text-premium-gold" />
          <span className="text-xs font-display font-bold uppercase tracking-[0.25em] text-neutral-800">
            {language === 'es' ? 'Blog & Guía Editorial de Barcelona' : 'Barcelona Insider Editorial Blog'}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase text-neutral-900 tracking-tight leading-tight mb-6">
          {language === 'es' ? 'Secretos de Barcelona' : 'Barcelona Secrets'}<br />
          <span className="text-premium-gold bg-gradient-to-r from-[#D4AF37] via-[#F1C40F] to-[#D4AF37] bg-clip-text text-transparent">
            {language === 'es' ? 'Historias, Anécdotas & Curiosidades' : 'Stories, Anecdotes & Heritage'}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-neutral-600 font-sans text-base md:text-lg font-light leading-relaxed">
          {language === 'es'
            ? 'Historias reales, anécdotas contrastadas y la arquitectura viva de los puntos más emblemáticos de Barcelona.'
            : 'Authentic histories, verified anecdotes and architectural insights from Barcelona’s most iconic landmarks.'}
        </p>
      </div>

      {/* Featured Highlight Article - Clean Editorial Design without stock photos */}
      {featuredPost && selectedCategory === 'all' && (
        <div className="max-w-5xl mx-auto px-6 mb-14">
          <div
            onClick={() => onSelectPost(featuredPost.slug)}
            className="group cursor-pointer relative bg-white rounded-3xl p-8 sm:p-12 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 border-l-8 border-l-premium-gold"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-[10px] font-display font-bold uppercase tracking-widest">
                {language === 'es' ? '⭐ Artículo Destacado' : '⭐ Featured Story'}
              </span>
              {featuredPost.stopNumber && (
                <div className="flex items-center gap-1.5 text-premium-gold text-xs font-display font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? `Parada #${featuredPost.stopNumber} de la ruta` : `Route Stop #${featuredPost.stopNumber}`}</span>
                </div>
              )}
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-bold text-neutral-900 uppercase tracking-tight leading-snug mb-4 group-hover:text-premium-gold transition-colors">
              {language === 'es' ? featuredPost.titleEs : featuredPost.title}
            </h2>

            <p className="text-neutral-600 font-sans text-base leading-relaxed mb-6 font-light">
              {language === 'es' ? featuredPost.excerptEs : featuredPost.excerpt}
            </p>

            <div className="flex items-center justify-between text-xs text-neutral-400 font-sans pt-4 border-t border-neutral-100">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-premium-gold" />
                {featuredPost.readTime} min {language === 'es' ? 'de lectura' : 'read'}
              </span>
              <span className="inline-flex items-center gap-1 text-premium-gold font-display font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                {language === 'es' ? 'Leer artículo completo' : 'Read full story'} <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-neutral-900 text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid - Clean Editorial Cards */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post.slug)}
              className="group cursor-pointer bg-white rounded-3xl p-7 border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/60">
                    {post.category}
                  </span>
                  {post.stopNumber && (
                    <span className="text-[10px] font-display font-bold text-neutral-400 uppercase tracking-widest">
                      #{post.stopNumber}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-display font-bold text-neutral-900 uppercase leading-snug mb-3 group-hover:text-premium-gold transition-colors">
                  {language === 'es' ? post.titleEs : post.title}
                </h3>

                <p className="text-neutral-500 font-sans text-xs leading-relaxed font-light mb-6 line-clamp-3">
                  {language === 'es' ? post.excerptEs : post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-400 font-sans pt-3 border-t border-neutral-100 mt-auto">
                <span className="flex items-center gap-1 text-[11px]">
                  <Clock className="w-3 h-3 text-premium-gold" />
                  {post.readTime} min
                </span>
                <span className="inline-flex items-center gap-1 text-premium-gold font-display font-bold uppercase tracking-wider text-[11px] group-hover:translate-x-1 transition-transform">
                  {language === 'es' ? 'Leer' : 'Read'} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom Booking CTA — Direct FareHarbor */}
      <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-5">
          <BookOpen className="w-10 h-10 text-premium-gold mx-auto" />
          <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight">
            {language === 'es' ? 'Vive estas historias en directo' : 'Experience These Stories Live'}
          </h3>
          <p className="text-neutral-400 font-sans text-sm max-w-xl mx-auto font-light leading-relaxed">
            {language === 'es'
              ? 'Nuestros tours privados en coche vintage recorren todos estos lugares emblemáticos con un guía local apasionado y paradas estratégicas.'
              : 'Our private vintage tours take you past all these iconic landmarks with a passionate local guide and strategic photo stops.'}
          </p>
          <div className="pt-2">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-premium-gold hover:bg-yellow-600 text-white font-display font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>{language === 'es' ? 'Reservar Tour en FareHarbor' : 'Book Tour on FareHarbor'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
