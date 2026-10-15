import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Zap, Users, Camera, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const VehicleSection: React.FC = () => {
  const { language } = useLanguage();
  const isEs = language === 'es';
  const [activePhoto, setActivePhoto] = useState(0);

  // Exact curated collection of 14 non-repetitive photos (1 to 14) showcasing the best moments first
  const allPhotos = [
    {
      src: '/images/gallery_1.png',
      titleEs: 'Coche vintage en el mirador panorámico de Montjuïc',
      titleEn: 'Vintage electric car at Montjuïc panoramic viewpoint',
    },
    {
      src: '/images/gallery_2.jpg',
      titleEs: 'Atardecer dorado en Montjuïc a bordo del coche vintage',
      titleEn: 'Golden hour sunset at Montjuïc aboard our vintage car',
    },
    {
      src: '/images/gallery_3.jpeg',
      titleEs: 'Nuestra flota de coches vintage en punto de encuentro',
      titleEn: 'Our vintage electric fleet at departure point',
    },
    {
      src: '/images/gallery_4.jpeg',
      titleEs: 'Experiencia privada y exclusiva para parejas',
      titleEn: 'Exclusive private tour experience for couples',
    },
    {
      src: '/images/gallery_5.jpeg',
      titleEs: 'Grupo de amigos disfrutando del tour por Barcelona',
      titleEn: 'Friends group tour discovering Barcelona',
    },
    {
      src: '/images/gallery_6.jpeg',
      titleEs: 'Nuestros dos coches vintage clásicos juntos',
      titleEn: 'Our two classic vintage electric cars together',
    },
    {
      src: '/images/gallery_7.jpeg',
      titleEs: 'Diseño clásico descapotable frente a la arquitectura modernista',
      titleEn: 'Classic convertible design past modernist architecture',
    },
    {
      src: '/images/gallery_8.jpeg',
      titleEs: 'Pareja en parada fotográfica en el mirador',
      titleEn: 'Couple enjoying scenic viewpoint photo stop',
    },
    {
      src: '/images/gallery_9.jpeg',
      titleEs: 'Viajeros descubriendo los rincones icónicos de la ciudad',
      titleEn: 'Travelers discovering Barcelona’s iconic sights',
    },
    {
      src: '/images/gallery_10.jpeg',
      titleEs: 'Familias disfrutando de un paseo cómodo y privado',
      titleEn: 'Families enjoying a comfortable private ride',
    },
    {
      src: '/images/gallery_11.jpeg',
      titleEs: 'Momentos inolvidables y sonrisas a bordo',
      titleEn: 'Unforgettable smiles and moments on board',
    },
    {
      src: '/images/gallery_12.jpeg',
      titleEs: 'Conectando con viajeros de todo el mundo',
      titleEn: 'Connecting with happy travelers worldwide',
    },
    {
      src: '/images/gallery_13.jpeg',
      titleEs: 'Recorriendo Barcelona en coche eléctrico vintage',
      titleEn: 'Touring Barcelona in our vintage electric car',
    },
    {
      src: '/images/gallery_14.jpeg',
      titleEs: 'Atención personalizada y cercana con Cristian',
      titleEn: 'Personalized friendly guidance with Cristian',
    },
  ];


  const handlePrev = () => {
    setActivePhoto((prev) => (prev > 0 ? prev - 1 : allPhotos.length - 1));
  };

  const handleNext = () => {
    setActivePhoto((prev) => (prev < allPhotos.length - 1 ? prev + 1 : 0));
  };

  const specs = [
    {
      icon: <Zap className="w-5 h-5 text-premium-gold" />,
      label: isEs ? '100% Eléctrico y Silencioso' : '100% Electric & Silent',
      desc: isEs ? 'Cero emisiones. Paseo suave y sostenible por toda la ciudad.' : 'Zero emissions. Smooth and sustainable ride across Barcelona.',
    },
    {
      icon: <Users className="w-5 h-5 text-premium-gold" />,
      label: isEs ? 'Hasta 4 personas por coche' : 'Up to 4 guests per car',
      desc: isEs ? '100% privado para tu grupo. Hasta 8 personas en nuestros 2 coches.' : '100% private. Up to 8 guests across our 2 vintage cars.',
    },
    {
      icon: <Camera className="w-5 h-5 text-premium-gold" />,
      label: isEs ? 'Paradas Estratégicas para Fotos' : 'Strategic Photo Stops',
      desc: isEs ? 'Pausas en los miradores y monumentos más espectaculares de Barcelona.' : 'Stops at the most stunning viewpoints and monuments in Barcelona.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-premium-gold" />,
      label: isEs ? 'Diseño Vintage Ford Modelo A' : '1930s Ford Model A Design',
      desc: isEs ? 'Elegancia atemporal de los años 30 que roba miradas en cada rincón.' : 'Timeless 1930s elegance turning heads at every corner.',
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="vehiculos">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-premium-gold mb-3">
            {isEs ? 'Nuestros Coches & Experiencia Real' : 'Our Fleet & Real Experience'}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-neutral-900 mb-4 uppercase tracking-tight">
            {isEs ? 'Coches Eléctricos Vintage de los Años 30' : '1930s Vintage Electric Cars'}
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {isEs
              ? 'Dos vehículos artesanales inspirados en el Ford Modelo A. Descubre Barcelona con vistas panorámicas de 360°, paradas fotográficas estratégicas y total privacidad.'
              : 'Two hand-crafted electric cars inspired by the Ford Model A. Experience Barcelona with 360° views, strategic photo stops and complete privacy.'}
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">

          {/* Featured Large Photo Showcase */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl bg-stone-100 group">
              <img
                key={activePhoto}
                src={allPhotos[activePhoto].src}
                alt={isEs ? allPhotos[activePhoto].titleEs : allPhotos[activePhoto].titleEn}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Prev/Next buttons over photo */}
              <button
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-80 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-80 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Caption gradient bar inside image */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-12 pointer-events-none flex items-center justify-between">
                <p className="text-white text-xs sm:text-sm font-light leading-snug">
                  {isEs ? allPhotos[activePhoto].titleEs : allPhotos[activePhoto].titleEn}
                </p>
                <span className="text-[11px] font-display font-bold text-premium-gold uppercase tracking-wider pl-4 shrink-0">
                  {activePhoto + 1} / {allPhotos.length}
                </span>
              </div>
            </div>

            {/* Scrollable thumbnail carousel showcasing all 20+ photos */}
            <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-thin">
              {allPhotos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                    activePhoto === i
                      ? 'border-premium-gold scale-105 shadow-md'
                      : 'border-neutral-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={photo.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Specs & Fleet info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-3 uppercase">
                {isEs ? 'Barcelona desde una perspectiva única' : 'Barcelona from a Unique Perspective'}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm md:text-base font-light">
                {isEs
                  ? 'La evolución prémium del tour en tuk tuk por Barcelona: nuestros coches de diseño vintage combinan el encanto visual de los años 30 con motores 100% eléctricos silenciosos. Diseñados con visión panorámica abierta para disfrutar de las fachadas y monumentos con paradas estratégicas para fotos espectaculares.'
                  : 'The premium evolution of Barcelona tuk tuk tours: our vintage electric cars blend 1930s elegance with whisper-quiet electric motors. Crafted with open panoramic sightlines and strategic photo stops to capture stunning memories without crowds.'}
              </p>
            </div>

            {/* Spec grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-stone-50 rounded-2xl p-3.5 border border-stone-200/60"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-premium-gold/15 flex items-center justify-center">
                    {spec.icon}
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs uppercase tracking-wider text-neutral-900">{spec.label}</p>
                    <p className="text-neutral-500 text-xs font-sans mt-0.5 leading-relaxed">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fleet counter */}
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
