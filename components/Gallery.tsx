import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
    const { t } = useLanguage();

    // Assuming gallery-2 is "Two Cars", gallery-5 is "Infographic"
    // gallery-3, gallery-4 are "Single Car"
    const images = [
        { src: '/images/gallery-3.jpg', span: 'col-span-1 md:col-span-1 h-64 md:h-96' }, // Single Car
        { src: '/images/gallery-2.jpg', span: 'col-span-1 md:col-span-2 h-64 md:h-96' }, // Two Cars (Center, wider)
        { src: '/images/gallery-4.jpg', span: 'col-span-1 md:col-span-1 h-64 md:h-96' }, // Single Car
        { src: '/images/gallery-5.jpg', span: 'col-span-1 md:col-span-4 h-auto aspect-[16/9]' }, // Infographic (Full width)
    ];

    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-premium-gold font-display font-bold tracking-widest uppercase text-sm mb-2 block">
                        {t('gallery.title')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] uppercase">
                        {t('gallery.subtitle')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {images.map((img, idx) => (
                        <div key={idx} className={`relative overflow-hidden rounded-2xl group ${img.span} w-full`}>
                            <img
                                src={img.src}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
