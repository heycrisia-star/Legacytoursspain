import React from 'react';
import { Ship, Clock, HardHat, Shield, MapPin, CheckCircle2, Star, Users, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CruiseLanding: React.FC = () => {
    const { t } = useLanguage();

    React.useEffect(() => {
        document.title = "Barcelona Cruise Private Tour | Exclusive Shore Excursion | Legacy Tours Spain";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Book a private Barcelona shore excursion in a vintage electric car. Guaranteed return to ship, port pick-up, and localized tours. Highly optimized for cruise passengers.");
        }
    }, []);

    const bookingUrls = {
        h1: "https://fareharbor.com/embeds/book/legacytoursspain/items/688410/?full-items=yes&flow=1528104",
        h2: "https://fareharbor.com/embeds/book/legacytoursspain/items/688412/?full-items=yes&flow=1528104",
        h3: "https://fareharbor.com/embeds/book/legacytoursspain/items/688414/?full-items=yes&flow=1528104"
    };

    return (
        <div className="bg-[#F9F8F6] font-sans text-neutral-900 overflow-hidden">
            {/* 1. Hero Section - Premium Visuals */}
            <section className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/dk7xpxrvh/image/upload/v1770855815/2_fnjgot.png"
                        alt="Vintage Electric Car in Barcelona"
                        className="w-full h-full object-cover opacity-[0.4] grayscale-[10%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#F9F8F6]"></div>
                </div>

                <div className="relative z-10 max-w-5xl space-y-8 animate-fade-in-up">
                    <h1 className="text-5xl md:text-8xl font-display font-bold text-white uppercase tracking-tight leading-tight drop-shadow-2xl">
                        {t('cruise.heroTitle')}
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 font-medium max-w-3xl mx-auto drop-shadow-md">
                        {t('cruise.heroSubtitle')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <a href={bookingUrls.h1} className="bg-premium-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1">
                            {t('cruise.pricing1h')}
                        </a>
                        <a href={bookingUrls.h2} className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
                            {t('cruise.pricing2h')}
                        </a>
                        <a href={bookingUrls.h3} className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
                            {t('cruise.pricing3h')}
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Specific Benefits for Cruise Passengers */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100 space-y-4 hover:shadow-xl transition-shadow">
                        <div className="h-14 w-14 bg-premium-gold/10 rounded-2xl flex items-center justify-center">
                            <MapPin className="text-premium-gold w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-display font-bold uppercase">{t('cruise.benefitsPickup')}</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            {t('cruise.benefitsPickupDetail')}
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100 space-y-4 hover:shadow-xl transition-shadow">
                        <div className="h-14 w-14 bg-premium-gold/10 rounded-2xl flex items-center justify-center">
                            <Ship className="text-premium-gold w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-display font-bold uppercase">{t('cruise.benefitsReturn')}</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            {t('cruise.benefitsReturnDetail')}
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100 space-y-4 hover:shadow-xl transition-shadow">
                        <div className="h-14 w-14 bg-premium-gold/10 rounded-2xl flex items-center justify-center">
                            <Users className="text-premium-gold w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-display font-bold uppercase">{t('cruise.benefitsPrivate')}</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            {t('cruise.benefitsPrivateDetail')}
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. The Uniqueness (Visuals focusing on the experience) */}
            <section className="py-24 bg-premium-bg text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">
                            Why it's <span className="text-premium-gold italic font-serif">Different</span>
                        </h2>
                        <ul className="space-y-6">
                            {[
                                { title: "No Crowded Buses", desc: "Private groups only. No waiting for 50 other people." },
                                { title: "Vintage Style", desc: "Our 100% electric 1930s-style cars are showstoppers." },
                                { title: "AI Real-Time Translation", desc: "Understand everything in your own language instantly." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="mt-1 h-6 w-6 rounded-full bg-premium-gold flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{item.title}</h4>
                                        <p className="text-neutral-400">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                            <img src="https://res.cloudinary.com/dk7xpxrvh/image/upload/v1770855815/2_fnjgot.png" alt="Exclusive experience" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-premium-gold p-8 rounded-3xl shadow-2xl animate-bounce-slow">
                            <div className="flex gap-2 mb-2">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-white text-white" />)}
                            </div>
                            <p className="font-display font-bold text-white uppercase text-sm tracking-widest">
                                #1 PRIVATE TOUR IN BCN
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Experience Highlights (Scannable list with icons) */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase">{t('cruise.highlightsTitle')}</h2>
                    <div className="h-1 w-20 bg-premium-gold mx-auto"></div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        "Sagrada Familia", "Las Ramblas", "Gothic Quarter", "Passeig de Gràcia",
                        "Casa Batlló", "Park Güell", "Montjuïc Hill", "Barceloneta Beach"
                    ].map((poi, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-neutral-100">
                            <Navigation className="w-5 h-5 text-premium-gold" />
                            <span className="font-medium text-neutral-800">{poi}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Simple, Transparent Pricing */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase">{t('cruise.pricingTitle')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border-2 border-neutral-100 rounded-[2.5rem] hover:border-premium-gold transition-colors space-y-2">
                            <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">{t('cruise.pricing1h')}</span>
                            <p className="text-4xl font-display font-bold">€100</p>
                        </div>
                        <div className="p-8 border-2 border-premium-gold bg-[#FFFDF5] rounded-[2.5rem] shadow-xl space-y-2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-premium-gold text-white text-[10px] px-3 py-1 font-bold uppercase">Popular</div>
                            <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">{t('cruise.pricing2h')}</span>
                            <p className="text-4xl font-display font-bold">€189</p>
                        </div>
                        <div className="p-8 border-2 border-neutral-100 rounded-[2.5rem] hover:border-premium-gold transition-colors space-y-2">
                            <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">{t('cruise.pricing3h')}</span>
                            <p className="text-4xl font-display font-bold">€289</p>
                        </div>
                    </div>
                    <p className="text-neutral-500 font-medium">
                        {t('cruise.pricingGuests')}
                    </p>
                </div>
            </section>

            {/* 6. "Peace of Mind" Section (Trust signals) */}
            <section className="py-24 border-y border-neutral-100 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12 items-center">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-green-50 rounded-2xl">
                            <CheckCircle2 className="text-green-600 w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-wide">{t('cruise.trustLicensed')}</h4>
                            <p className="text-sm text-neutral-500">Official SP License</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-blue-50 rounded-2xl">
                            <Shield className="text-blue-600 w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-wide">{t('cruise.trustInsured')}</h4>
                            <p className="text-sm text-neutral-500">Certified by AXA</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-premium-gold/10 rounded-2xl">
                            <HardHat className="text-premium-gold w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-wide">{t('cruise.trustProfessional')}</h4>
                            <p className="text-sm text-neutral-500">10+ Years Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Final CTA Section (Urgency) */}
            <section className="py-32 px-6 bg-gradient-to-br from-premium-text to-black text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <img src="https://res.cloudinary.com/dk7xpxrvh/image/upload/v1770855815/2_fnjgot.png" alt="BG" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                    <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tight">
                        {t('cruise.ctaTitle')}
                    </h2>
                    <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                        Limited daily departures. Secure your private tour while your ship is in port.
                    </p>
                    <a
                        href={bookingUrls.h2}
                        className="inline-flex items-center gap-4 bg-premium-gold hover:bg-yellow-600 text-white px-12 py-6 rounded-full text-lg font-bold uppercase tracking-widest transition-all shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:-translate-y-2"
                    >
                        {t('cruise.ctaButton')}
                        <Clock className="w-6 h-6 animate-pulse" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default CruiseLanding;
