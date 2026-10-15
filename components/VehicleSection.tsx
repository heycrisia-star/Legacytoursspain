import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Zap, Users, Wind, Star } from 'lucide-react';

const VehicleSection: React.FC = () => {
  const { t } = useLanguage();
  const [activePhoto, setActivePhoto] = useState(0);

  const photos = [
    { src: '/images/photo_group_large.jpeg', caption: 'Dos coches vintage 100% eléctricos inspirados en los años 30' },
    { src: '/images/photo_car_montjuic_skyline.jpg', caption: 'Vistas panorámicas sobre Barcelona en el mirador de Montjuïc' },
    { src: '/images/photo_car_street.jpeg', caption: 'Diseño clásico, silencioso y elegante recorriendo las calles' },
    { src: '/images/photo_two_cars_park.jpeg', caption: 'Flota privada con capacidad de hasta 8 pasajeros en 2 vehículos' },
    { src: '/images/photo_car_detail.jpeg', caption: 'Detalles artesanales y acabado dorado clásico' },
  ];

  const specs = [
    {
      icon: <Zap className="w-5 h-5" />,
      label: t('vehicle.spec.electric') || '100% Electric',
      desc: t('vehicle.spec.electric.desc') || 'Zero emissions. Silent. Sustainable.',
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: t('vehicle.spec.capacity') || 'Up to 4 guests per car',
      desc: t('vehicle.spec.capacity.desc') || 'Completely private. Your group only.',
    },
    {
      icon: <Wind className="w-5 h-5" />,
      label: t('vehicle.spec.roof') || 'Retractable soft top',
      desc: t('vehicle.spec.roof.desc') || 'Open-air experience. Barcelona under the sky.',
    },
    {
      icon: <Star className="w-5 h-5" />,
      label: t('vehicle.spec.vintage') || '1930s Vintage Design',
      desc: t('vehicle.spec.vintage.desc') || 'Inspired by the Ford Model A. Timeless elegance.',
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-premium-gold mb-4">
            {t('vehicle.eyebrow') || 'The Experience'}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            {t('vehicle.title') || 'Our Vintage Electric Cars'}
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {t('vehicle.subtitle') || 'Two hand-crafted electric vehicles inspired by the 1930s Ford Model A. Turn heads at every corner of Barcelona.'}
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo carousel */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                key={activePhoto}
                src={photos[activePhoto].src}
                alt={photos[activePhoto].caption}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-2xl p-3">
              <p className="text-white text-sm text-center font-light">{photos[activePhoto].caption}</p>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-4 justify-center">
              {photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activePhoto === i ? 'border-premium-gold scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={photo.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Specs + description */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-3xl font-bold text-neutral-900 mb-4">
                {t('vehicle.detail.title') || 'Barcelona Differently'}
              </h3>
              <p className="text-neutral-500 leading-relaxed text-base font-light">
                {t('vehicle.detail.desc') || 'Our vintage electric cars are not just transport — they are part of the experience. Designed to turn every street into a memory, they give you the freedom to see Barcelona at your own pace, in complete privacy, with a passionate local guide by your side.'}
              </p>
            </div>

            {/* Spec grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-stone-50 rounded-2xl p-4 border border-stone-100"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-premium-gold/10 text-premium-gold flex items-center justify-center">
                    {spec.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-neutral-800">{spec.label}</p>
                    <p className="text-neutral-400 text-xs mt-0.5">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fleet info */}
            <div className="bg-neutral-900 rounded-3xl p-6 text-white">
              <p className="text-premium-gold text-xs font-semibold tracking-widest uppercase mb-3">
                {t('vehicle.fleet.label') || 'Our Fleet'}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-white">2</p>
                  <p className="text-xs text-white/60 mt-1">{t('vehicle.fleet.cars') || 'Vintage cars'}</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-white">8</p>
                  <p className="text-xs text-white/60 mt-1">{t('vehicle.fleet.max') || 'Max guests'}</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-white">100%</p>
                  <p className="text-xs text-white/60 mt-1">{t('vehicle.fleet.private') || 'Private always'}</p>
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
