import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface InstantBookingFormProps {
    onClose: () => void;
}

const InstantBookingForm: React.FC<InstantBookingFormProps> = ({ onClose }) => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0],
        time: '',
        duration: '1h',
        people: '2',
        firstName: '',
        lastName: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const SUPABASE_URL = 'https://lmjochwfwmuljgsfmrpt.supabase.co';
        const SUPABASE_ANON_KEY = 'sb_publishable_eZbBbNLos0r5i7YoFYNqJg_KJoiFGNQ';

        try {
            const response = await fetch(`${SUPABASE_URL}/rest/v1/instant_bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify({
                    booking_date: formData.date,
                    booking_time: formData.time,
                    duration: formData.duration,
                    people: parseInt(formData.people),
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    customer_email: formData.email
                })
            });

            if (!response.ok) {
                throw new Error('Failed to save booking');
            }

            // Trigger Google Ads Conversion
            if (typeof (window as any).gtag === 'function') {
                (window as any).gtag('event', 'conversion', {
                    'send_to': 'AW-17770698067/g9ejCK7Z1ckbEN0q3ZlC'
                });
            }

            setIsSuccess(true);
        } catch (error) {
            console.error('Error saving booking:', error);
            alert(t('booking.error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in shadow-2xl">
            <div className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl border border-white/20 relative animate-fade-in-up">

                {/* Close Button - Top Right */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-white/90 hover:bg-white rounded-full transition-colors shadow-lg"
                >
                    <X className="w-5 h-5 text-gray-700" />
                </button>

                {/* Content */}
                <div className="max-h-[85vh] overflow-y-auto">
                    {isSuccess ? (
                        <div className="animate-fade-in">
                            {/* Mobile Email View - GetYourGuide Style */}
                            <div id="booking-email" className="bg-white">
                                {/* Email Header */}
                                <div className="bg-white px-4 py-3 border-b border-gray-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-semibold text-sm text-gray-900">GetYourGuide</div>
                                            <div className="text-xs text-gray-500 truncate">Para: {formData.firstName} {formData.lastName} &gt;</div>
                                        </div>
                                        <div className="text-xs text-gray-400 flex-shrink-0">hace 1 semana</div>
                                    </div>
                                    <div className="text-xs text-gray-500">1 mensaje</div>
                                </div>

                                {/* Email Subject */}
                                <div className="px-4 py-4 bg-white">
                                    <h1 className="text-lg font-bold text-gray-900 leading-tight">
                                        Booking - S696413 - GYG6H8HQQB9X
                                    </h1>
                                </div>

                                {/* GetYourGuide Orange Banner - Horizontal */}
                                <div className="bg-[#FF5533] px-6 py-6">
                                    <div className="text-white font-bold text-xl tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                                        GET YOUR GUIDE
                                    </div>
                                </div>

                                {/* Confirmation Message */}
                                <div className="bg-white px-6 py-5">
                                    <h2 className="text-lg font-bold text-gray-900 mb-1">¡Hola! Buenas noticias.</h2>
                                    <p className="text-base font-semibold text-gray-900">Se ha reservado tu producto</p>
                                </div>

                                {/* Tour Image and Details */}
                                <div className="bg-gray-50 px-6 py-6">
                                    <div className="flex gap-3 mb-5">
                                        <img
                                            src="https://res.cloudinary.com/dk7xpxrvh/image/upload/v1770855815/2_fnjgot.png"
                                            alt="Tour"
                                            className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-sm text-gray-900 leading-tight mb-1">
                                                Barcelona: Private Tuk Tuk Tour of Gaudí, Sagrada Familia, and Highlights
                                            </h3>
                                            <p className="text-xs text-gray-600">
                                                Tour guiado: Complete Barcelona en coche vintage (Tuk Tuk)
                                            </p>
                                        </div>
                                    </div>

                                    {/* Booking Details */}
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3 py-2">
                                            <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                            </svg>
                                            <div className="flex-1">
                                                <div className="text-xs text-gray-500 mb-0.5">Número de referencia</div>
                                                <div className="font-semibold text-sm text-blue-600">GYG6H8HQQB9X</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 py-2">
                                            <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <div className="flex-1">
                                                <div className="text-xs text-gray-500 mb-0.5">Fecha</div>
                                                <div className="font-semibold text-sm text-gray-900">
                                                    {new Date(formData.date + 'T' + formData.time).toLocaleDateString('es-ES', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })} {formData.time}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 py-2">
                                            <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <div className="flex-1">
                                                <div className="text-xs text-gray-500 mb-0.5">Número de participantes</div>
                                                <div className="font-semibold text-sm text-gray-900">{formData.people} x Adults (Edad 0 - 99)</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 py-2">
                                            <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            <div className="flex-1">
                                                <div className="text-xs text-gray-500 mb-0.5">Cliente principal</div>
                                                <div className="font-semibold text-sm text-gray-900">{formData.firstName} {formData.lastName}</div>
                                                <div className="text-xs text-blue-600 mt-0.5">customer-5kncfim2dlsmiak7@reply.getyourguide.com</div>
                                                <div className="text-xs text-gray-600 mt-0.5">Teléfono: +17272048113</div>
                                                <div className="text-xs text-gray-600">Idioma: English</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 py-2">
                                            <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div className="flex-1">
                                                <div className="text-xs text-gray-500 mb-0.5">Idioma del tour</div>
                                                <div className="font-semibold text-sm text-gray-900">Inglés (Live tour guide)</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 py-2">
                                            <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div className="flex-1">
                                                <div className="text-xs text-gray-500 mb-0.5">Precio</div>
                                                <div className="font-semibold text-sm text-gray-900">234,38 €</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Open Booking Button */}
                                    <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-4 rounded-full text-sm transition-colors">
                                        Abrir reserva
                                    </button>
                                </div>

                                {/* Support Section */}
                                <div className="bg-white px-6 py-6 border-t border-gray-200">
                                    <h3 className="font-bold text-base text-gray-900 mb-3">Estamos a tu disposición</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Si tiene alguna pregunta, puede <a href="#" className="text-blue-600 underline">ponerse en contacto con nuestro equipo</a> o <a href="#" className="text-blue-600 underline">ver más información</a> en nuestro Centro de ayuda.
                                    </p>
                                </div>

                                {/* Bottom Action Bar */}
                                <div className="bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-around">
                                    <button className="flex flex-col items-center gap-1 text-gray-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                    <button className="flex flex-col items-center gap-1 text-gray-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                                        </svg>
                                    </button>
                                    <button className="flex flex-col items-center gap-1 text-gray-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>
                                    </button>
                                    <button className="flex flex-col items-center gap-1 text-gray-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Close Button */}
                                <div className="bg-white px-6 py-4 border-t border-gray-100">
                                    <button
                                        onClick={onClose}
                                        className="w-full py-3 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        Cerrar vista previa
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                                        <Calendar className="w-3 h-3" /> {t('booking.date')}
                                    </label>
                                    <input
                                        type="date"
                                        required
                                        className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-premium-gold/20 focus:border-premium-gold transition-all"
                                        value={formData.date}
                                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                                        <Clock className="w-3 h-3" /> {t('booking.time')}
                                    </label>
                                    <input
                                        type="time"
                                        required
                                        className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-premium-gold/20 focus:border-premium-gold transition-all"
                                        value={formData.time}
                                        onChange={e => setFormData({ ...formData, time: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-500">
                                        {t('booking.duration')}
                                    </label>
                                    <div className="grid grid-cols-3 gap-1">
                                        {['1h', '2h', '3h'].map(d => (
                                            <button
                                                key={d}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, duration: d })}
                                                className={`py-3 rounded-xl font-display font-bold text-xs transition-all border ${formData.duration === d
                                                    ? 'bg-premium-gold border-premium-gold text-white shadow-md'
                                                    : 'bg-neutral-50 border-neutral-100 text-neutral-400 hover:bg-neutral-100'
                                                    }`}
                                            >
                                                {d.replace('h', 'H')}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-500">
                                        {t('booking.people')}
                                    </label>
                                    <div className="grid grid-cols-4 gap-1">
                                        {['1', '2', '3', '4'].map(p => (
                                            <button
                                                key={p}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, people: p })}
                                                className={`py-3 rounded-xl font-display font-bold text-xs transition-all border ${formData.people === p
                                                    ? 'bg-premium-gold border-premium-gold text-white shadow-md'
                                                    : 'bg-neutral-50 border-neutral-100 text-neutral-400 hover:bg-neutral-100'
                                                    }`}
                                            >
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                                        <User className="w-3 h-3" /> {t('booking.name')}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder={t('booking.name')}
                                        className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-premium-gold/20 focus:border-premium-gold transition-all uppercase"
                                        value={formData.firstName}
                                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                                        <User className="w-3 h-3" /> {t('booking.surname')}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder={t('booking.surname')}
                                        className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-premium-gold/20 focus:border-premium-gold transition-all uppercase"
                                        value={formData.lastName}
                                        onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                                    <Mail className="w-3 h-3" /> {t('booking.email')}
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="customer@email.com"
                                    className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-premium-gold/20 focus:border-premium-gold transition-all"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full group mt-4 relative flex items-center justify-center gap-3 bg-premium-gold hover:bg-yellow-600 disabled:bg-neutral-300 text-white py-5 rounded-2xl text-sm font-display font-bold tracking-[0.2em] uppercase transition-all duration-300 transform active:scale-95 shadow-xl shadow-premium-gold/20"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        {t('booking.submit')}
                                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstantBookingForm;
