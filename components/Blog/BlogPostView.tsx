import React, { useEffect } from 'react';
import { BlogPost, BLOG_POSTS } from '../../data/blogPosts';
import { useLanguage } from '../../context/LanguageContext';
import { Clock, Calendar, ArrowLeft, Share2, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
  onSelectPost: (slug: string) => void;
  onOpenBooking: () => void;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({
  post,
  onBack,
  onSelectPost,
  onOpenBooking
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update document title for SEO
    const title = language === 'es' ? post.seoTitleEs : post.seoTitle;
    document.title = `${title} | Legacy Tours Spain`;

    return () => {
      document.title = 'Legacy Tours Spain | Private Vintage Electric Car Tours in Barcelona';
    };
  }, [post, language]);

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: language === 'es' ? post.titleEs : post.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(language === 'es' ? '¡Enlace copiado al portapapeles!' : 'Link copied to clipboard!');
    }
  };

  return (
    <article className="min-h-screen bg-[#F9F8F6] pt-28 pb-20">
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-neutral-500 hover:text-premium-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {language === 'es' ? 'Volver a todas las historias' : 'Back to all stories'}
        </button>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 font-sans mb-4">
          <span className="text-[10px] font-display font-bold uppercase tracking-widest text-premium-gold px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
            {post.category}
          </span>
          {post.stopNumber && (
            <span className="flex items-center gap-1 font-semibold text-neutral-700">
              <MapPin className="w-3.5 h-3.5 text-premium-gold" />
              {language === 'es' ? `Parada #${post.stopNumber} de 17` : `Stop #${post.stopNumber} of 17`}
            </span>
          )}
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime} min {language === 'es' ? 'lectura' : 'read'}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-display font-bold uppercase text-neutral-900 tracking-tight leading-tight mb-6">
          {language === 'es' ? post.titleEs : post.title}
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 font-sans font-light leading-relaxed mb-6 border-l-2 border-premium-gold pl-4 italic">
          {language === 'es' ? post.excerptEs : post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-display font-bold text-sm">
              CG
            </div>
            <div>
              <p className="text-xs font-display font-bold text-neutral-900 uppercase tracking-wider">{post.author}</p>
              <p className="text-[10px] text-neutral-400 font-sans">{post.publishDate}</p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            {language === 'es' ? 'Compartir' : 'Share'}
          </button>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="rounded-3xl overflow-hidden shadow-xl aspect-[16/9] relative bg-neutral-100">
          <img
            src={post.coverImage}
            alt={language === 'es' ? post.titleEs : post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6">
        <div
          className="prose prose-neutral prose-lg max-w-none text-neutral-800 font-sans font-light leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: language === 'es' ? post.contentEs : post.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-wrap gap-2 items-center">
          <span className="text-xs text-neutral-400 uppercase tracking-widest font-display font-bold mr-2">
            Tags:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-white border border-neutral-200 rounded-full text-neutral-600 font-sans"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Tour Booking Box */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-neutral-100 shadow-xl flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
            <img
              src="/images/photo_couple_montjuic.jpeg"
              alt="Legacy Tours Spain Vintage Car"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3 flex-1 text-center md:text-left">
            <span className="text-premium-gold text-xs font-display font-bold uppercase tracking-[0.25em]">
              {language === 'es' ? 'Experiencia en Persona' : 'In-Person Experience'}
            </span>
            <h3 className="text-2xl font-display font-bold uppercase text-neutral-900">
              {language === 'es' ? 'Recorre este lugar con nosotros' : 'Experience this spot with us'}
            </h3>
            <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
              {language === 'es'
                ? 'Todos los secretos de este artículo forman parte de nuestros tours privados en coche eléctrico vintage. Conecta con Barcelona sin ruido ni prisas.'
                : 'All the insights from this story are part of our private vintage electric car tours. Pure comfort, quiet luxury and authentic local guides.'}
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-premium-gold hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-xs font-display font-bold tracking-widest uppercase transition-all shadow-md"
              >
                {language === 'es' ? 'Ver disponibilidad y reservar' : 'Check availability & book'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Stories */}
      {relatedPosts.length > 0 && (
        <div className="max-w-5xl mx-auto px-6 mt-20 pt-16 border-t border-neutral-200">
          <h3 className="text-2xl font-display font-bold uppercase text-neutral-900 tracking-wide text-center mb-10">
            {language === 'es' ? 'Otras historias de nuestro recorrido' : 'More stories from our tour'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <div
                key={related.id}
                onClick={() => onSelectPost(related.slug)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={related.coverImage}
                    alt={language === 'es' ? related.titleEs : related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-display font-bold uppercase text-premium-gold">
                    {related.category}
                  </span>
                  <h4 className="font-display font-bold text-sm text-neutral-900 uppercase leading-snug mt-1 group-hover:text-premium-gold transition-colors line-clamp-2">
                    {language === 'es' ? related.titleEs : related.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogPostView;
