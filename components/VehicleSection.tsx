import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Zap, Users, Camera, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const VehicleSection: React.FC = () => {
  const { language } = useLanguage();
  const isEs = language === 'es';
  const [activePhoto, setActivePhoto] = useState(0);

  // Curated unique authentic photos of vintage cars, travelers, couples, families, and city landmarks (no duplicates)
  const allPhotos = [
    {
      src: '/images/photo_group_large.jpeg',
      titleEs: 'Nuestros dos coches vintage con viajeros',
      titleEn: 'Our two vintage electric cars with guests',
    },
    {
      src: '/images/photo_car_montjuic_skyline.jpg',
      titleEs: 'Parada fotográfica panorámica en Montjuïc',
      titleEn: 'Panoramic photo stop at Montjuïc viewpoint',
    },
    {
      src: '/images/img_4494.jpg',
      titleEs: 'Viajeros disfrutando del tour privado',
      titleEn: 'Guests enjoying the private tour experience',
    },
    {
      src: '/images/photo_two_cars_park.jpeg',
      titleEs: 'Flota vintage en el parque de la Ciutadella',
      titleEn: 'Vintage fleet at Ciutadella Park',
    },
    {
      src: '/images/photo_couple_montjuic.jpeg',
      titleEs: 'Pareja en parada fotográfica en el mirador',
      titleEn: 'Couple enjoying scenic viewpoint photo stop',
    },
    {
      src: '/images/img_4495.jpg',
      titleEs: 'Recorrido clásico por los monumentos de Barcelona',
      titleEn: 'Classic tour past iconic Barcelona landmarks',
    },
    {
      src: '/images/photo_car_street.jpeg',
      titleEs: 'Coche vintage 100% eléctrico por las avenidas modernistas',
      titleEn: '100% electric vintage car on modernist avenues',
    },
    {
      src: '/images/img_5779.jpg',
      titleEs: 'Momentos inolvidables y sonrisas a bordo',
      titleEn: 'Unforgettable moments and smiles on board',
    },
    {
      src: '/images/photo_family_car.jpeg',
      titleEs: 'Experiencia exclusiva para familias y parejas',
      titleEn: 'Exclusive private experience for families & couples',
    },
    {
      src: '/images/img_5878.jpg',
      titleEs: 'Parada fotográfica con atención personalizada',
      titleEn: 'Photo stop with personalized local guide care',
    },
    {
      src: '/images/photo_car_night.jpeg',
      titleEs: 'Barcelona iluminada en tour nocturno vintage',
      titleEn: 'Illuminated Barcelona on our evening vintage tour',
    },
    {
      src: '/images/img_6160.jpg',
      titleEs: 'Viajeros felices descubriendo la ciudad',
      titleEn: 'Happy travelers discovering the city',
    },
    {
      src: '/images/photo_car_pedrera.jpeg',
      titleEs: 'Paso por los edificios modernistas de Gaudí',
      titleEn: 'Gliding past iconic Gaudí modernist architecture',
    },
    {
      src: '/images/img_7983.jpg',
      titleEs: 'La forma más elegante y cómoda de ver Barcelona',
      titleEn: 'The most elegant and comfortable way to see Barcelona',
    },
    {
      src: '/images/photo_group_two_cars.jpeg',
      titleEs: 'Grupos de hasta 8 personas en 2 coches privados',
      titleEn: 'Groups up to 8 guests across 2 private cars',
    },
    {
      src: '/images/photo_car_detail.jpeg',
      titleEs: 'Detalles clásicos inspirados en el Ford Modelo A',
      titleEn: 'Classic details inspired by the 1930s Ford Model A',
    },
    {
      src: '/images/img_8211.jpg',
      titleEs: 'Conectando con viajeros de todo el mundo',
      titleEn: 'Connecting with happy travelers worldwide',
    },
    {
      src: '/images/img_8507.jpg',
      titleEs: 'Parada en plazas históricas y arquitectura gótica',
      titleEn: 'Stop at historic squares and architectural icons',
    },
    {
      src: '/images/photo_couple_red.jpeg',
      titleEs: 'Celebraciones y recuerdos únicos en pareja',
      titleEn: 'Unique celebrations and memories in Barcelona',
    },
    {
      src: '/images/photo_cristian_selfie.jpeg',
      titleEs: 'Cristian con viajeros disfrutando de la ciudad',
      titleEn: 'Cristian with travelers enjoying the city',
    },
    {
      src: '/images/photo_group_garage.jpeg',
      titleEs: 'Nuestra flota en punto de salida',
      titleEn: 'Our fleet ready at departure point',
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
                  ? 'Nuestros coches vintage combinan el encanto visual de los años 30 con motores 100% eléctricos silenciosos. Diseñados con visión panorámica abierta para disfrutar de las fachadas y monumentos con paradas estratégicas donde bajar y tomar fotos espectaculares.'
                  : 'Our vintage electric cars blend 1930s vintage elegance with whisper-quiet electric motors. Crafted with open panoramic sightlines and strategic photo stops to capture stunning memories without crowds.'}
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
