import React, { useEffect } from 'react';
import { BlogPost, BLOG_POSTS } from '../../data/blogPosts';
import { useLanguage } from '../../context/LanguageContext';
import { Clock, ArrowLeft, Share2, MapPin, ArrowRight, BookOpen } from 'lucide-react';
import { BOOKING_URL } from '../../constants';

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
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-neutral-500 hover:text-premium-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {language === 'es' ? 'Volver a todas las historias' : 'Back to all stories'}
        </button>
      </div>

      {/* Article Header — Pure Editorial, No Stock Photos */}
      <header className="max-w-3xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 font-sans mb-4">
          <span className="text-[10px] font-display font-bold uppercase tracking-widest text-premium-gold px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
            {post.category}
          </span>
          {post.stopNumber && (
            <span className="flex items-center gap-1 font-semibold text-neutral-700">
              <MapPin className="w-3.5 h-3.5 text-premium-gold" />
              {language === 'es' ? `Parada #${post.stopNumber}` : `Stop #${post.stopNumber}`}
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

        <p className="text-lg md:text-xl text-neutral-600 font-sans font-light leading-relaxed mb-6 border-l-4 border-premium-gold pl-5 italic bg-white/60 p-4 rounded-r-2xl">
          {language === 'es' ? post.excerptEs : post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-display font-bold text-sm">
              LT
            </div>
            <div>
              <p className="text-xs font-display font-bold text-neutral-900 uppercase tracking-wider">{post.author}</p>
              <p className="text-[10px] text-neutral-400 font-sans">{post.publishDate}</p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5" />
            {language === 'es' ? 'Compartir' : 'Share'}
          </button>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6">
        <div
          className="prose prose-lg max-w-none font-sans text-neutral-700 font-light leading-relaxed bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-neutral-100"
          dangerouslySetInnerHTML={{ __html: language === 'es' ? post.contentEs : post.content }}
        />
      </div>

      {/* Booking CTA Box inside Article — Direct FareHarbor */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <div className="bg-neutral-900 text-white p-8 rounded-3xl text-center space-y-4 shadow-xl">
          <h3 className="font-display font-bold text-2xl uppercase tracking-wide">
            {language === 'es' ? 'Descubre este lugar en persona' : 'See this landmark in person'}
          </h3>
          <p className="text-neutral-300 font-sans text-sm max-w-lg mx-auto font-light">
            {language === 'es'
              ? 'En nuestros tours privados en coche eléctrico vintage incluimos paradas estratégicas para fotos con explicaciones amenas y cercanas.'
              : 'Our private vintage electric tours feature strategic photo stops with engaging local commentary.'}
          </p>
          <div className="pt-2">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-premium-gold hover:bg-yellow-600 text-white font-display font-bold uppercase tracking-widest text-xs transition-all shadow-lg"
            >
              <span>{language === 'es' ? 'Reservar Tour en FareHarbor' : 'Book Tour on FareHarbor'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 mt-16 pt-12 border-t border-neutral-200">
          <h3 className="text-xl font-display font-bold uppercase text-neutral-900 mb-6 tracking-wide">
            {language === 'es' ? 'Otras historias de Barcelona' : 'More Barcelona stories'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedPosts.map(rel => (
              <div
                key={rel.id}
                onClick={() => onSelectPost(rel.slug)}
                className="cursor-pointer bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[9px] font-display font-bold uppercase tracking-wider text-premium-gold mb-1 block">
                    {rel.category}
                  </span>
                  <h4 className="font-display font-bold text-sm uppercase text-neutral-900 group-hover:text-premium-gold transition-colors line-clamp-2">
                    {language === 'es' ? rel.titleEs : rel.title}
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-neutral-400 font-sans mt-3">
                  <Clock className="w-3 h-3 text-premium-gold" />
                  {rel.readTime} min
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default BlogPostView;
