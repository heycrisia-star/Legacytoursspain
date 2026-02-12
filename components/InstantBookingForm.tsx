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

                {/* Header */}
                <div className="bg-premium-gold p-8 text-white relative">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <h2 className="text-3xl font-display font-bold uppercase tracking-widest">{t('booking.title')}</h2>
                    <p className="text-white/80 font-sans text-sm mt-1">{t('booking.internalOnly')}</p>
                </div>

                {/* Content */}
                <div className="p-8 max-h-[75vh] overflow-y-auto custom-scrollbar">
                    {isSuccess ? (
                        <div className="animate-fade-in space-y-8">
                            {/* Visual Ticket - Screenshot friendly */}
                            <div id="booking-ticket" className="bg-[#F9F8F6] border-2 border-premium-gold/30 rounded-[2rem] p-8 shadow-inner relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-premium-gold/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-premium-gold/5 rounded-full -ml-12 -mb-12 pointer-events-none"></div>

                                {/* Logo & Header */}
                                <div className="flex flex-col items-center text-center space-y-4 mb-8">
                                    <img
                                        src="/logo-legacy.png"
                                        alt="Legacy Tours Spain"
                                        className="h-16 w-auto object-contain"
                                    />
                                    <div className="h-[1px] w-24 bg-premium-gold/40"></div>
                                    <h3 className="text-2xl font-display font-bold uppercase tracking-[0.2em] text-premium-text">
                                        {t('booking.confirmed')}
                                    </h3>
                                </div>

                                {/* Details Grid */}
                                <div className="space-y-6">
                                    <div className="border-b border-premium-gold/10 pb-6">
                                        <div className="space-y-1">
                                            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-display font-bold">{t('booking.guestInfo')}</span>
                                            <p className="font-sans font-bold text-neutral-800 text-xl uppercase leading-tight">
                                                {formData.firstName} {formData.lastName}
                                            </p>
                                            <p className="font-sans text-neutral-500 text-sm italic break-all">
                                                {formData.email}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8 border-b border-premium-gold/10 pb-6">
                                        <div className="space-y-1">
                                            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-display font-bold">{t('booking.duration')}</span>
                                            <p className="font-sans font-semibold text-neutral-800 text-lg uppercase">
                                                {formData.duration.replace('h', ` ${t('common.hours')}`)}
                                            </p>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-display font-bold">{t('booking.people')}</span>
                                            <p className="font-sans font-semibold text-neutral-800 text-lg uppercase">
                                                {formData.people}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8 pb-4">
                                        <div className="space-y-1">
                                            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-display font-bold">{t('booking.date')}</span>
                                            <p className="font-sans font-semibold text-neutral-800 text-lg">
                                                {new Date(formData.date).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-display font-bold">{t('booking.time')}</span>
                                            <p className="font-sans font-semibold text-neutral-800 text-lg">
                                                {formData.time}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Note */}
                                <div className="mt-8 pt-6 border-t border-dashed border-premium-gold/30 text-center">
                                    <p className="text-[11px] font-display font-bold uppercase tracking-widest text-premium-gold/60">
                                        {t('booking.receiptNote')}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <p className="text-center text-xs text-neutral-500 font-medium italic">
                                    {t('booking.screenshotNote')}
                                </p>
                                <button
                                    onClick={onClose}
                                    className="w-full py-4 text-xs font-display font-bold uppercase tracking-[0.2em] text-neutral-400 hover:text-premium-gold transition-colors"
                                >
                                    {t('booking.finishClose')}
                                </button>
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
