import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../../data/blogPosts';
import { useLanguage } from '../../context/LanguageContext';
import { Clock, ArrowRight, Sparkles, BookOpen, MapPin } from 'lucide-react';

interface BlogIndexProps {
  onSelectPost: (slug: string) => void;
  onOpenBooking: () => void;
}

export const BlogIndex: React.FC<BlogIndexProps> = ({ onSelectPost, onOpenBooking }) => {
  const { language, t } = useLanguage();
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
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-premium-gold/30 shadow-sm mb-6">
          <Sparkles className="w-4 h-4 text-premium-gold" />
          <span className="text-xs font-display font-bold uppercase tracking-[0.25em] text-neutral-800">
            {language === 'es' ? 'Guía Oficial de Estudio & Blog' : 'Barcelona Insider Guide & Stories'}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase text-neutral-900 tracking-tight leading-tight mb-6">
          {language === 'es' ? 'Secretos de Barcelona' : 'Barcelona Unveiled'}<br />
          <span className="text-premium-gold bg-gradient-to-r from-[#D4AF37] via-[#F1C40F] to-[#D4AF37] bg-clip-text text-transparent">
            {language === 'es' ? 'Historias con Alma y Rigor' : 'Beyond the Guidebooks'}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-neutral-600 font-sans text-base md:text-lg font-light leading-relaxed">
          {language === 'es'
            ? 'Historias reales, anécdotas contrastadas y la arquitectura viva de los 17 puntos clave de nuestro tour más exclusivo.'
            : 'Authentic histories, verified anecdotes and living architecture based on the 17 stops of our Complete 3-Hour Vintage Tour.'}
        </p>
      </div>

      {/* Featured Highlight Article */}
      {featuredPost && selectedCategory === 'all' && (
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div
            onClick={() => onSelectPost(featuredPost.slug)}
            className="group cursor-pointer relative bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-md hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-7 h-72 lg:h-auto relative overflow-hidden">
              <img
                src={featuredPost.coverImage}
                alt={language === 'es' ? featuredPost.titleEs : featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md text-white text-[10px] font-display font-bold uppercase tracking-widest">
                  {language === 'es' ? '⭐ Artículo Destacado' : '⭐ Featured Story'}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
              {featuredPost.stopNumber && (
                <div className="flex items-center gap-2 text-premium-gold text-xs font-display font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? `Parada #${featuredPost.stopNumber} del Tour de 3 Horas` : `Stop #${featuredPost.stopNumber} on 3-Hour Tour`}</span>
                </div>
              )}
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-neutral-900 uppercase tracking-tight leading-snug mb-4 group-hover:text-premium-gold transition-colors">
                {language === 'es' ? featuredPost.titleEs : featuredPost.title}
              </h2>
              <p className="text-neutral-600 font-sans text-sm leading-relaxed mb-6 font-light">
                {language === 'es' ? featuredPost.excerptEs : featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-neutral-400 font-sans mt-auto pt-4 border-t border-neutral-100">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-premium-gold" />
                  {featuredPost.readTime} min {language === 'es' ? 'de lectura' : 'read'}
                </span>
                <span className="inline-flex items-center gap-1 text-premium-gold font-display font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  {language === 'es' ? 'Leer artículo' : 'Read story'} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-neutral-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
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

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post.slug)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              <div className="h-56 relative overflow-hidden bg-neutral-100">
                <img
                  src={post.coverImage}
                  alt={language === 'es' ? post.titleEs : post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {post.stopNumber && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md text-white text-[10px] font-display font-bold uppercase tracking-widest">
                    Stop #{post.stopNumber}
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-display font-bold uppercase tracking-widest text-premium-gold px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200">
                    {post.category}
                  </span>
                  <span className="text-xs text-neutral-400 font-sans flex items-center gap-1 ml-auto">
                    <Clock className="w-3 h-3 text-premium-gold" />
                    {post.readTime} min
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-neutral-900 uppercase tracking-tight leading-snug mb-3 group-hover:text-premium-gold transition-colors line-clamp-2">
                  {language === 'es' ? post.titleEs : post.title}
                </h3>

                <p className="text-neutral-500 text-xs font-sans font-light leading-relaxed mb-6 line-clamp-3">
                  {language === 'es' ? post.excerptEs : post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-neutral-400 font-sans">{post.author.split('·')[0]}</span>
                  <span className="text-premium-gold font-display font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {language === 'es' ? 'Leer' : 'Read'} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Tour Cross-Sell CTA Banner */}
      <div className="max-w-4xl mx-auto px-6 mt-20">
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl border border-neutral-700/50">
          <div className="relative z-10 space-y-5">
            <span className="text-premium-gold text-xs font-display font-bold uppercase tracking-[0.3em]">
              {language === 'es' ? 'Vive estas historias en persona' : 'Experience These Stories in Person'}
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight">
              {language === 'es' ? 'The Complete Barcelona · 3 Hour Tour' : 'The Complete Barcelona · 3 Hour Tour'}
            </h3>
            <p className="text-neutral-300 font-sans text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'Los 17 puntos históricos de esta guía, recorridos sin prisas en nuestro coche eléctrico vintage privado. La forma más elegante y cómoda de conocer Barcelona.'
                : 'All 17 historic landmarks from this guide, experienced at your pace in our private vintage electric vehicle. Pure elegance, comfort, and insight.'}
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] via-[#F1C40F] to-[#D4AF37] hover:scale-105 active:scale-95 text-white px-9 py-4 rounded-full text-xs md:text-sm font-display font-bold tracking-widest uppercase transition-all duration-300 shadow-xl"
              >
                {language === 'es' ? 'Reservar el Tour de 3 Horas' : 'Book The 3-Hour Tour'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
