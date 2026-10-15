import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Zap, Users, Wind, Sparkles } from 'lucide-react';

const VehicleSection: React.FC = () => {
  const { language } = useLanguage();
  const isEs = language === 'es';
  const [activePhoto, setActivePhoto] = useState(0);

  const photos = [
    {
      src: '/images/photo_group_large.jpeg',
      captionEs: 'Dos vehículos vintage 100% eléctricos inspirados en los años 30',
      captionEn: 'Two 100% electric vintage cars inspired by the 1930s Ford Model A'
    },
    {
      src: '/images/photo_car_montjuic_skyline.jpg',
      captionEs: 'Vistas panorámicas sobre Barcelona en el mirador de Montjuïc',
      captionEn: 'Panoramic skyline views of Barcelona from Montjuïc viewpoint'
    },
    {
      src: '/images/photo_car_street.jpeg',
      captionEs: 'Diseño clásico, silencioso y elegante recorriendo las calles de Barcelona',
      captionEn: 'Classic, silent and elegant design gliding through Barcelona streets'
    },
    {
      src: '/images/photo_two_cars_park.jpeg',
      captionEs: 'Flota privada con capacidad de hasta 8 pasajeros en 2 vehículos',
      captionEn: 'Private fleet accommodating up to 8 guests across 2 vehicles'
    },
    {
      src: '/images/photo_car_detail.jpeg',
      captionEs: 'Detalles artesanales y acabado dorado clásico',
      captionEn: 'Hand-crafted details and classic gold trim'
    },
  ];

  const specs = [
    {
      icon: <Zap className="w-5 h-5 text-premium-gold" />,
      label: isEs ? '100% Eléctrico' : '100% Electric',
      desc: isEs ? 'Cero emisiones. Silencioso y sostenible por toda la ciudad.' : 'Zero emissions. Silent and sustainable across the city.',
    },
    {
      icon: <Users className="w-5 h-5 text-premium-gold" />,
      label: isEs ? 'Hasta 4 personas por coche' : 'Up to 4 guests per car',
      desc: isEs ? 'Completamente privado para tu grupo (hasta 8 en 2 vehículos).' : 'Completely private for your group (up to 8 in 2 cars).',
    },
    {
      icon: <Wind className="w-5 h-5 text-premium-gold" />,
      label: isEs ? 'Capota panorámica retráctil' : 'Retractable open-air roof',
      desc: isEs ? 'Vistas despejadas de fachadas y cielo abierto mediterráneo.' : 'Unobstructed views of architecture and Mediterranean sky.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-premium-gold" />,
      label: isEs ? 'Diseño Vintage Años 30' : '1930s Vintage Design',
      desc: isEs ? 'Inspirado en el clásico Ford Modelo A. Elegancia atemporal.' : 'Inspired by the classic Ford Model A. Timeless elegance.',
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-premium-gold mb-3">
            {isEs ? 'Nuestros Vehículos' : 'Our Fleet'}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-neutral-900 mb-4 uppercase tracking-tight">
            {isEs ? 'Coches Eléctricos Vintage de los Años 30' : '1930s Vintage Electric Cars'}
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {isEs
              ? 'Dos vehículos artesanales inspirados en el legendario Ford Modelo A. Un viaje silencioso, íntimo y elegante por el corazón de Barcelona.'
              : 'Two hand-crafted vehicles inspired by the legendary Ford Model A. A silent, intimate and elegant journey through Barcelona.'}
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">

          {/* Photo carousel with fixed caption and thumbnails below */}
          <div className="flex flex-col space-y-4">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-xl bg-stone-100">
              <img
                key={activePhoto}
                src={photos[activePhoto].src}
                alt={isEs ? photos[activePhoto].captionEs : photos[activePhoto].captionEn}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Caption pinned safely inside the photo bottom with gradient */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-10 pointer-events-none">
                <p className="text-white text-xs sm:text-sm text-center font-light leading-snug">
                  {isEs ? photos[activePhoto].captionEs : photos[activePhoto].captionEn}
                </p>
              </div>
            </div>

            {/* Thumbnail strip cleanly below image container */}
            <div className="flex gap-2.5 justify-center flex-wrap">
              {photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activePhoto === i ? 'border-premium-gold scale-105 shadow-md' : 'border-neutral-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={photo.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Specs + Description */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-3 uppercase">
                {isEs ? 'Barcelona desde una perspectiva única' : 'Barcelona from a Unique Perspective'}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm md:text-base font-light">
                {isEs
                  ? 'Nuestros coches vintage no son solo un medio de transporte: son el alma de la experiencia. Con vistas panorámicas de 360 grados, un desplazamiento silencioso y la distinción de un clásico de época, recorrer Barcelona se convierte en un recuerdo inolvidable.'
                  : 'Our vintage cars are not just transportation: they are the soul of the experience. With 360-degree panoramic views, a silent electric ride and the distinction of a period classic, touring Barcelona becomes an unforgettable memory.'}
              </p>
            </div>

            {/* Spec grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 bg-stone-50 rounded-2xl p-4 border border-stone-200/60"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-premium-gold/15 flex items-center justify-center">
                    {spec.icon}
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs uppercase tracking-wider text-neutral-900">{spec.label}</p>
                    <p className="text-neutral-500 text-xs font-sans mt-0.5 leading-relaxed">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fleet Counter Box */}
            <div className="bg-neutral-900 rounded-3xl p-6 text-white shadow-xl">
              <p className="text-premium-gold text-[10px] font-display font-bold tracking-[0.25em] uppercase mb-4 text-center sm:text-left">
                {isEs ? 'Capacidad de Nuestra Flota' : 'Fleet Capacity'}
              </p>
              <div className="grid grid-cols-3 divide-x divide-white/15 text-center">
                <div className="px-2">
                  <p className="text-3xl sm:text-4xl font-display font-black text-white">2</p>
                  <p className="text-[11px] text-white/70 font-sans mt-1 uppercase tracking-wider">
                    {isEs ? 'Coches vintage' : 'Vintage cars'}
                  </p>
                </div>
                <div className="px-2">
                  <p className="text-3xl sm:text-4xl font-display font-black text-white">8</p>
                  <p className="text-[11px] text-white/70 font-sans mt-1 uppercase tracking-wider">
                    {isEs ? 'Máx. pasajeros' : 'Max guests'}
                  </p>
                </div>
                <div className="px-2">
                  <p className="text-3xl sm:text-4xl font-display font-black text-premium-gold">100%</p>
                  <p className="text-[11px] text-white/70 font-sans mt-1 uppercase tracking-wider">
                    {isEs ? 'Privado siempre' : 'Private always'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;
