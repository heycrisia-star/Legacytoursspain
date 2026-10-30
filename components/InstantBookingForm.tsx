import React, { useState, useRef, useEffect } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, Users, Check, Camera, Send, Download, Sparkles, AlertCircle } from 'lucide-react';
import html2canvas from 'html2canvas';

interface InstantBookingFormProps {
    onClose: () => void;
}

interface TourConfig {
    name: string;
    subtitle: string;
    durationLabel: string;
    durationMinutes: number;
    basePrice: number; // Precio neto
    taxRate: number; // 21%
    image: string;
}

const TOURS_CONFIG: Record<string, TourConfig> = {
    'essential': {
        name: 'Essential Barcelona',
        subtitle: '1h · 60 minutos',
        durationLabel: '1 HORA',
        durationMinutes: 60,
        basePrice: 78.51,
        taxRate: 0.21,
        image: '/images/gallery_1.png'
    },
    'city-sea': {
        name: 'Park City & Beach',
        subtitle: '2h · 120 minutos',
        durationLabel: '2 HORAS',
        durationMinutes: 120,
        basePrice: 117.32,
        taxRate: 0.21,
        image: '/images/gallery_1.png'
    },
    'complete': {
        name: 'Complete Barcelona',
        subtitle: '3h · 180 minutos',
        durationLabel: '3 HORAS',
        durationMinutes: 180,
        basePrice: 161.16,
        taxRate: 0.21,
        image: '/images/gallery_1.png'
    },
    'navidad': {
        name: 'Barcelona Tour Navideño',
        subtitle: 'Luces y Magia · 90 min',
        durationLabel: '90 MIN',
        durationMinutes: 90,
        basePrice: 99.17,
        taxRate: 0.21,
        image: '/images/gallery_1.png'
    }
};

const COUNTRY_CODES = [
    { code: '+34', flag: '🇪🇸', label: 'España (+34)' },
    { code: '+1', flag: '🇺🇸', label: 'USA / Canadá (+1)' },
    { code: '+44', flag: '🇬🇧', label: 'UK (+44)' },
    { code: '+33', flag: '🇫🇷', label: 'Francia (+33)' },
    { code: '+49', flag: '🇩🇪', label: 'Alemania (+49)' },
    { code: '+39', flag: '🇮🇹', label: 'Italia (+39)' },
    { code: '+351', flag: '🇵🇹', label: 'Portugal (+351)' },
    { code: '+41', flag: '🇨🇭', label: 'Suiza (+41)' },
    { code: '+52', flag: '🇲🇽', label: 'México (+52)' },
    { code: '+54', flag: '🇦🇷', label: 'Argentina (+54)' },
    { code: '+57', flag: '🇨🇴', label: 'Colombia (+57)' },
    { code: '+55', flag: '🇧🇷', label: 'Brasil (+55)' },
    { code: '+61', flag: '🇦🇺', label: 'Australia (+61)' },
    { code: '+81', flag: '🇯🇵', label: 'Japón (+81)' },
    { code: '+86', flag: '🇨🇳', label: 'China (+86)' },
];

const InstantBookingForm: React.FC<InstantBookingFormProps> = ({ onClose }) => {
    const today = new Date().toISOString().split('T')[0];

    const [formData, setFormData] = useState({
        fullName: '',
        countryCode: '+34',
        phoneNumber: '',
        email: '',
        date: today,
        time: '10:00',
        tourType: 'city-sea', // 'essential' (60m) | 'city-sea' (120m) | 'complete' (180m) | 'navidad' (90m)
        people: 4
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [bookingRef, setBookingRef] = useState('');
    const [createdTimestamp, setCreatedTimestamp] = useState('');
    const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
    const [isGeneratingImage, setIsGeneratingImage] = useState(false);
    const [autoEmailStatus, setAutoEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'fallback'>('idle');

    const ticketRef = useRef<HTMLDivElement>(null);

    // Helpers to calculate end time coherently based on durationMinutes (60, 90, 120, 180 min)
    const calculateEndTime = (startTime: string, minutes: number) => {
        if (!startTime) return '12:00';
        const [h, m] = startTime.split(':').map(Number);
        const startMinutes = (h || 0) * 60 + (m || 0);
        const endMinutes = startMinutes + minutes;
        const endH = Math.floor(endMinutes / 60) % 24;
        const endM = endMinutes % 60;
        return `${String(endH).padStart(2, '0')}:${String(endM).padStart(2, '0')}`;
    };

    // Helper date formatting: "Lunes, 2 Noviembre 2026"
    const formatDateSpanish = (dateString: string) => {
        try {
            const [year, month, day] = dateString.split('-').map(Number);
            const dateObj = new Date(year, month - 1, day);
            const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            const monthNames = [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ];
            return `${dayNames[dateObj.getDay()]}, ${day} ${monthNames[dateObj.getMonth()]} ${year}`;
        } catch {
            return dateString;
        }
    };

    const currentTour = TOURS_CONFIG[formData.tourType] || TOURS_CONFIG['city-sea'];
    const endTime = calculateEndTime(formData.time, currentTour.durationMinutes);
    const formattedDate = formatDateSpanish(formData.date);

    // Financial calculations
    const netPrice = currentTour.basePrice;
    const taxes = Math.round(netPrice * currentTour.taxRate * 100) / 100;
    const totalPrice = (netPrice + taxes).toFixed(2).replace('.', ',');
    const netFormatted = netPrice.toFixed(2).replace('.', ',');
    const taxesFormatted = taxes.toFixed(2).replace('.', ',');

    // Auto-generate high-res image and trigger background email once ticket is mounted
    useEffect(() => {
        if (!isSuccess || !ticketRef.current) return;

        let isMounted = true;
        setIsGeneratingImage(true);

        const generateTicketImageAndNotify = async () => {
            try {
                // Short wait to ensure fonts & styles render cleanly
                await new Promise((r) => setTimeout(r, 450));
                if (!ticketRef.current || !isMounted) return;

                const canvas = await html2canvas(ticketRef.current, {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: '#ffffff',
                    logging: false
                });

                const dataUrl = canvas.toDataURL('image/png');
                if (isMounted) {
                    setGeneratedImageUrl(dataUrl);
                    setIsGeneratingImage(false);
                }

                // Automatic background notification to info@legacytoursspain.com
                const fullPhone = `${formData.countryCode} ${formData.phoneNumber.trim()}`;
                setAutoEmailStatus('sending');

                try {
                    const emailResponse = await fetch('https://api.web3forms.com/submit', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            access_key: '0289b52a-e8f0-4fc7-bfef-c07a3c3c79c8', // Web3Forms standard mailer key for Legacy Tours
                            to_email: 'info@legacytoursspain.com',
                            from_name: 'Gestor Reservas Legacy Tours',
                            subject: `Nueva reserva: ${currentTour.name} el ${formattedDate} a las ${formData.time} - ${endTime}`,
                            message: `NUEVA RESERVA MANUAL GENERADA\n` +
                                     `=========================================\n` +
                                     `Reserva n.º: ${bookingRef}\n` +
                                     `Tour: ${currentTour.name} (${currentTour.durationMinutes} minutos)\n` +
                                     `Fecha: ${formattedDate}\n` +
                                     `Horario: ${formData.time} - ${endTime}\n` +
                                     `Personas: ${formData.people} pasajeros\n\n` +
                                     `DATOS CLIENTE:\n` +
                                     `Nombre: ${formData.fullName}\n` +
                                     `Teléfono: ${fullPhone}\n` +
                                     `E-mail: ${formData.email}\n\n` +
                                     `PAGOS:\n` +
                                     `Base Tour Privado: ${netFormatted} €\n` +
                                     `Impuestos (21%): ${taxesFormatted} €\n` +
                                     `Total Reserva: ${totalPrice} € (Pendiente)\n` +
                                     `=========================================\n` +
                                     `Generado por: Cristian Gutierrez (Legacy Tours Spain)\n` +
                                     `Fecha creación: ${createdTimestamp}\n`
                        })
                    });

                    if (emailResponse.ok && isMounted) {
                        setAutoEmailStatus('sent');
                    } else if (isMounted) {
                        setAutoEmailStatus('fallback');
                    }
                } catch {
                    if (isMounted) setAutoEmailStatus('fallback');
                }

            } catch (err) {
                console.error('Auto image creation error:', err);
                if (isMounted) setIsGeneratingImage(false);
            }
        };

        generateTicketImageAndNotify();

        return () => {
            isMounted = false;
        };
    }, [isSuccess]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Generate 9-digit FareHarbor random reservation number (e.g. 388551264)
        const randomRef = '388' + Math.floor(100000 + Math.random() * 900000);
        setBookingRef(randomRef);

        const now = new Date();
        const createdStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} a las ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        setCreatedTimestamp(createdStr);

        const fullPhone = `${formData.countryCode} ${formData.phoneNumber.trim()}`;

        // Save to Supabase backend
        const SUPABASE_URL = 'https://lmjochwfwmuljgsfmrpt.supabase.co';
        const SUPABASE_ANON_KEY = 'sb_publishable_eZbBbNLos0r5i7YoFYNqJg_KJoiFGNQ';

        try {
            const nameParts = formData.fullName.trim().split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';

            await fetch(`${SUPABASE_URL}/rest/v1/instant_bookings`, {
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
                    duration: currentTour.durationLabel,
                    people: Number(formData.people),
                    first_name: firstName,
                    last_name: lastName,
                    customer_email: formData.email,
                    customer_phone: fullPhone,
                    reservation_number: randomRef,
                    tour_name: currentTour.name
                })
            }).catch(err => console.log('Supabase sync notice:', err));

            // Conversion tracking
            if (typeof (window as any).gtag === 'function') {
                (window as any).gtag('event', 'conversion', {
                    'send_to': 'AW-17770698067/g9ejCK7Z1ckbEN0q3ZlC'
                });
            }

            setIsSuccess(true);
        } catch (error) {
            console.error('Submission error:', error);
            setIsSuccess(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Download generated image
    const handleDownloadImage = () => {
        if (!generatedImageUrl) return;
        const link = document.createElement('a');
        link.download = `Ticket-FareHarbor-${bookingRef}-${formData.fullName.replace(/\s+/g, '_')}.png`;
        link.href = generatedImageUrl;
        link.click();
    };

    // One-tap manual email launcher fallback
    const handleManualEmail = () => {
        const fullPhone = `${formData.countryCode} ${formData.phoneNumber.trim()}`;
        const subject = encodeURIComponent(`Nueva reserva: ${currentTour.name} el ${formattedDate} a las ${formData.time} - ${endTime}`);
        const body = encodeURIComponent(
            `NUEVA RESERVA MANUAL GENERADA\n` +
            `-----------------------------------------\n` +
            `Reserva n.º: ${bookingRef}\n` +
            `Tour: ${currentTour.name} (${currentTour.durationMinutes} minutos)\n` +
            `Fecha y Hora: ${formattedDate} a las ${formData.time} - ${endTime}\n` +
            `Tipo: 1 Tour Privado (${formData.people} personas)\n\n` +
            `DATOS DEL CLIENTE:\n` +
            `Nombre: ${formData.fullName}\n` +
            `Teléfono: ${fullPhone}\n` +
            `E-mail: ${formData.email}\n\n` +
            `PAGOS Y DETALLES:\n` +
            `Total reserva: ${totalPrice} €\n` +
            `Pendiente: ${totalPrice} €\n` +
            `Base Tour Privado: ${netFormatted} €\n` +
            `Impuestos: ${taxesFormatted} €\n` +
            `-----------------------------------------\n` +
            `Creado por: Cristian Gutierrez (Legacy Tours Spain)\n` +
            `Creado a las: ${createdTimestamp}\n`
        );
        window.open(`mailto:info@legacytoursspain.com?subject=${subject}&body=${body}`, '_blank');
    };

    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="bg-white rounded-[2rem] w-full max-w-xl overflow-hidden shadow-2xl border border-neutral-200 relative flex flex-col max-h-[94vh]">

                {/* Top header bar */}
                <div className="px-5 py-4 bg-neutral-900 text-white flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-premium-gold/20 border border-premium-gold/40 flex items-center justify-center">
                            <span className="text-premium-gold text-xs font-bold font-display">LT</span>
                        </div>
                        <div>
                            <p className="text-xs font-display font-bold uppercase tracking-wider text-white">
                                {isSuccess ? 'Ticket FareHarbor Oficial Generado' : 'Generador Rápido de Reservas'}
                            </p>
                            <p className="text-[10px] text-neutral-400 font-sans">
                                {isSuccess ? `Reserva #${bookingRef} · Imagen & Email automáticos` : 'Optimizado para móvil · Legacy Tours Spain'}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Main Scrollable Content */}
                <div className="overflow-y-auto p-3 sm:p-6 flex-1 bg-neutral-50/50">
                    {isSuccess ? (
                        <div className="space-y-4">
                            
                            {/* Visual Status / Action banner for Guide */}
                            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 shadow-sm space-y-3">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                                            <Check className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-emerald-950 font-display uppercase tracking-wide">
                                                ¡Reserva n.º {bookingRef} lista!
                                            </p>
                                            <p className="text-xs text-emerald-700 font-sans">
                                                {autoEmailStatus === 'sent' 
                                                    ? '✅ Email enviado automáticamente a info@legacytoursspain.com' 
                                                    : autoEmailStatus === 'sending'
                                                    ? '⏳ Enviando notificación a info@legacytoursspain.com...'
                                                    : 'ℹ️ Notificación lista para enviar a info@legacytoursspain.com'}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Download button */}
                                    {generatedImageUrl && (
                                        <button
                                            onClick={handleDownloadImage}
                                            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-display font-bold uppercase tracking-wider rounded-xl transition-all shadow"
                                        >
                                            <Download className="w-4 h-4 text-premium-gold" />
                                            <span>Guardar Imagen</span>
                                        </button>
                                    )}
                                </div>

                                {/* Mobile quick buttons */}
                                <div className="grid grid-cols-2 gap-2 pt-1">
                                    <button
                                        onClick={handleDownloadImage}
                                        disabled={!generatedImageUrl}
                                        className="py-3 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow"
                                    >
                                        <Camera className="w-4 h-4 text-premium-gold" />
                                        <span>{isGeneratingImage ? 'Generando Foto...' : 'Descargar Foto'}</span>
                                    </button>
                                    <button
                                        onClick={handleManualEmail}
                                        className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow"
                                    >
                                        <Send className="w-4 h-4" />
                                        <span>Abrir en Gmail</span>
                                    </button>
                                </div>
                            </div>

                            {/* AUTO-GENERATED IMAGE PREVIEW - ULTRA VISIBLE FOR MOBILE SCREENSHOT */}
                            {generatedImageUrl && (
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between px-1">
                                        <span className="text-[11px] font-display font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                                            <Sparkles className="w-3.5 h-3.5 text-premium-gold" />
                                            Imagen Generada lista para captura o envío
                                        </span>
                                        <span className="text-[10px] text-emerald-600 font-bold bg-emerald-100/60 px-2 py-0.5 rounded-full">
                                            Alta Resolución
                                        </span>
                                    </div>
                                    <div className="rounded-2xl overflow-hidden border-2 border-premium-gold/40 shadow-xl bg-white p-2">
                                        <img
                                            src={generatedImageUrl}
                                            alt={`Ticket Reserva ${bookingRef}`}
                                            className="w-full h-auto rounded-xl shadow-inner cursor-pointer"
                                            onClick={handleDownloadImage}
                                            title="Toca para descargar"
                                        />
                                    </div>
                                    <p className="text-[11px] text-center text-neutral-400 font-sans italic">
                                        (Puedes mantener presionada la imagen para guardarla en tu galería del móvil o pulsar «Descargar Foto»)
                                    </p>
                                </div>
                            )}

                            {/* SOURCE HTML DOM FOR FAREHARBOR EMAIL TICKET (captured by html2canvas) */}
                            <div className="bg-white p-2 sm:p-5 rounded-2xl border border-neutral-200 shadow-md overflow-hidden">
                                <div ref={ticketRef} className="bg-white font-sans text-neutral-900 text-left max-w-md mx-auto p-4 border border-neutral-200 rounded-xl">
                                    
                                    {/* Mobile Email App Header */}
                                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-[#27ae60] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                                                ✈️
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-neutral-900 leading-tight">Legacy Tours Spain</div>
                                                <div className="text-[11px] text-neutral-500">
                                                    Para: <span className="text-neutral-700 font-medium">{formData.fullName || 'Cliente'}</span> &gt;
                                                </div>
                                                <div className="text-[10px] text-neutral-400">
                                                    Responder a: <span className="text-neutral-600">Cristian Pereira</span> ❓ &gt;
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-[11px] text-neutral-400 font-sans">
                                            {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    </div>

                                    {/* Big Heading matching screenshot */}
                                    <h1 className="text-lg sm:text-xl font-bold text-neutral-950 leading-snug mb-5">
                                        Nueva reserva: {currentTour.name} el <span className="underline">{formattedDate}</span> a las <span className="underline font-black">{formData.time} - {endTime}</span>
                                    </h1>

                                    {/* Inner Framed FareHarbor Box */}
                                    <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white shadow-sm">
                                        
                                        {/* Logo Header */}
                                        <div className="py-4 px-6 flex justify-center bg-white border-b border-neutral-100">
                                            <div className="text-center">
                                                <img
                                                    src="/logo-legacy.png"
                                                    alt="Legacy Tours Spain"
                                                    className="h-14 w-auto mx-auto object-contain"
                                                    onError={(e) => {
                                                        (e.target as HTMLElement).style.display = 'none';
                                                    }}
                                                />
                                                <div className="font-display font-black text-xs tracking-widest uppercase text-neutral-900 mt-1">
                                                    LEGACY TOURS SPAIN
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mint / Light Green Notice Header Box */}
                                        <div className="bg-[#EBF7F2] p-4 border-b border-[#D5EFE3] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div>
                                                <p className="text-xs sm:text-sm font-semibold text-[#187A4F] leading-snug">
                                                    Nueva reserva para {currentTour.name}
                                                </p>
                                                <div className="mt-2">
                                                    <span className="inline-block bg-[#1B8054] text-white text-[10px] font-bold px-2.5 py-1 rounded">
                                                        Ver en FareHarbor »
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-left sm:text-right border-t sm:border-t-0 sm:border-l border-[#CDE9DC] pt-2 sm:pt-0 sm:pl-3 text-[10px] text-neutral-600 leading-tight">
                                                <div><span className="font-bold text-neutral-800">Creado por:</span> Cristian Gutierrez (Legacy Tours Spain)</div>
                                                <div className="mt-1"><span className="font-bold text-neutral-800">Creado a las:</span> {createdTimestamp}</div>
                                            </div>
                                        </div>

                                        {/* Reservation Details */}
                                        <div className="p-4 sm:p-5 text-left space-y-4">
                                            {/* Reservation Number */}
                                            <div>
                                                <span className="text-xs text-neutral-800 font-bold">Reserva n.º </span>
                                                <span className="text-xs font-bold text-[#1F4C82] underline cursor-pointer">{bookingRef}</span>
                                            </div>

                                            {/* Tour thumbnail & title */}
                                            <div className="flex items-start gap-3 pt-1">
                                                <img
                                                    src={currentTour.image}
                                                    alt={currentTour.name}
                                                    className="w-14 h-14 rounded-md object-cover border border-neutral-200 shrink-0"
                                                />
                                                <div>
                                                    <p className="text-xs font-bold text-neutral-900 leading-tight">
                                                        {currentTour.name}
                                                    </p>
                                                    <p className="text-xs font-bold text-neutral-800 mt-0.5">
                                                        {formattedDate} a las {formData.time} - {endTime}
                                                    </p>
                                                    <p className="text-[11px] text-neutral-500 mt-0.5">
                                                        1 Tour Privado ({currentTour.durationMinutes} minutos)
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Client Data */}
                                            <div className="text-[11px] text-neutral-700 space-y-0.5 pt-1 border-b border-neutral-100 pb-3">
                                                <p><span className="font-bold text-neutral-900">Nombre:</span> {formData.fullName.toLowerCase()}</p>
                                                <p><span className="font-bold text-neutral-900">Teléfono:</span> <span className="underline text-neutral-800">{formData.countryCode} {formData.phoneNumber}</span></p>
                                                <p><span className="font-bold text-neutral-900">E-mail:</span> <span className="underline text-[#1F4C82]">{formData.email.toLowerCase()}</span></p>
                                            </div>

                                            {/* Payments (Pagos) */}
                                            <div className="pt-1">
                                                <p className="text-xs font-bold text-neutral-900 mb-1.5">Pagos</p>
                                                <div className="text-[11px] text-neutral-700 space-y-0.5">
                                                    <p><span className="font-bold text-neutral-900">Total reserva</span> {totalPrice} €</p>
                                                    <p><span className="font-bold text-neutral-900">Pendiente:</span> {totalPrice} €</p>
                                                </div>
                                            </div>

                                            {/* Detalle (Pricing Breakdown Table exactly as in photo) */}
                                            <div className="pt-2 border-t border-neutral-100">
                                                <p className="text-xs font-bold text-neutral-900 mb-2">Detalle</p>
                                                <table className="w-full text-[10px] border-collapse">
                                                    <tbody>
                                                        <tr className="border-b border-neutral-100">
                                                            <td className="py-1 text-neutral-700">Tour Privado ({currentTour.durationMinutes} min)</td>
                                                            <td className="py-1 text-right font-medium text-neutral-900">{netFormatted} €</td>
                                                        </tr>
                                                        <tr className="border-b border-neutral-100">
                                                            <td className="py-1 text-neutral-500 italic">¿Para cuántas personas?: {formData.people}</td>
                                                            <td className="py-1 text-right"></td>
                                                        </tr>
                                                        <tr className="border-b border-neutral-100">
                                                            <td className="py-1 text-neutral-700">Impuestos (21%)</td>
                                                            <td className="py-1 text-right font-medium text-neutral-900">{taxesFormatted} €</td>
                                                        </tr>
                                                        <tr className="border-b border-neutral-200">
                                                            <td className="py-1 font-bold text-neutral-900">Total</td>
                                                            <td className="py-1 text-right font-bold text-neutral-900">{totalPrice} €</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-1 font-bold text-neutral-900">Importe pendiente</td>
                                                            <td className="py-1 text-right font-bold text-neutral-900">{totalPrice} €</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>

                                        {/* FareHarbor standard footer note */}
                                        <div className="bg-neutral-50 p-4 border-t border-neutral-200 text-[9px] text-neutral-400 leading-tight">
                                            <p>
                                                Has recibido este e-mail porque te has suscrito a ellos en los ajustes de FareHarbor.
                                            </p>
                                            <p className="text-[#1F4C82] underline mt-1">Cómo cambiar las notificaciones de e-mail</p>
                                            <p className="mt-1">
                                                También puedes desactivar todos los e-mails de FareHarbor: <span className="underline">Cancelar suscripción</span>. Esto no se recomienda porque impedirá que recibas recordatorios y notificaciones importantes.
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/* Bottom controls */}
                            <div className="flex gap-2 pt-2">
                                <button
                                    onClick={() => {
                                        setIsSuccess(false);
                                        setGeneratedImageUrl(null);
                                        setAutoEmailStatus('idle');
                                        setFormData(prev => ({
                                            ...prev,
                                            fullName: '',
                                            phoneNumber: '',
                                            email: ''
                                        }));
                                    }}
                                    className="flex-1 py-3.5 text-xs font-display font-bold uppercase tracking-wider text-neutral-700 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 transition-colors shadow-sm"
                                >
                                    + Crear Otra Reserva
                                </button>
                                <button
                                    onClick={onClose}
                                    className="flex-1 py-3.5 text-xs font-display font-bold uppercase tracking-wider text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors shadow-md"
                                >
                                    Terminar y Salir
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* MOBILE-FRIENDLY COMPACT FORM */
                        <form onSubmit={handleSubmit} className="space-y-4">
                            
                            {/* 1. Nombre y Apellido en la misma casilla */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-display font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-1.5">
                                    <User className="w-3.5 h-3.5 text-premium-gold" />
                                    Nombre y Apellido
                                </label>
                                <input
                                    type="text"
                                    required
                                    autoFocus
                                    placeholder="Ej: Cristian Pereira"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full bg-white border-2 border-neutral-200 focus:border-premium-gold rounded-xl px-4 py-3.5 text-sm font-medium text-neutral-900 focus:outline-none transition-all shadow-sm"
                                />
                            </div>

                            {/* 2. Móvil con selector de código de área */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-display font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-1.5">
                                    <Phone className="w-3.5 h-3.5 text-premium-gold" />
                                    Móvil con código de país
                                </label>
                                <div className="flex gap-2">
                                    <select
                                        value={formData.countryCode}
                                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                        className="bg-white border-2 border-neutral-200 focus:border-premium-gold rounded-xl px-2.5 py-3.5 text-sm font-bold text-neutral-800 focus:outline-none transition-all shadow-sm shrink-0 w-28 sm:w-36"
                                    >
                                        {COUNTRY_CODES.map((c) => (
                                            <option key={c.code} value={c.code}>
                                                {c.flag} {c.code}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="691 70 81 38"
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                        className="flex-1 bg-white border-2 border-neutral-200 focus:border-premium-gold rounded-xl px-4 py-3.5 text-sm font-medium text-neutral-900 focus:outline-none transition-all shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* 3. E-mail del cliente */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-display font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-1.5">
                                    <Mail className="w-3.5 h-3.5 text-premium-gold" />
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="cristianguti@gmail.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white border-2 border-neutral-200 focus:border-premium-gold rounded-xl px-4 py-3.5 text-sm font-medium text-neutral-900 focus:outline-none transition-all shadow-sm"
                                />
                            </div>

                            {/* 4. Selector de los 4 Tours con duraciones exactas (1h = 60m, 2h = 120m, 3h = 180m, Navidad = 90m) */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-display font-bold uppercase tracking-wider text-neutral-700 flex items-center justify-between">
                                    <span>Selecciona el Tour</span>
                                    <span className="text-[11px] text-premium-gold font-bold">{currentTour.durationMinutes} minutos de duración</span>
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        { key: 'essential', label: '1 Hora', sub: '60 min · Essential', price: '95€' },
                                        { key: 'city-sea', label: '2 Horas', sub: '120 min · Park City', price: '141,96€' },
                                        { key: 'complete', label: '3 Horas', sub: '180 min · Complete', price: '195€' },
                                        { key: 'navidad', label: '🎄 Navidad', sub: '90 min · Luces & Magia', price: '120€' },
                                    ].map((t) => (
                                        <button
                                            key={t.key}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, tourType: t.key })}
                                            className={`p-3 rounded-xl border-2 text-left transition-all relative ${
                                                formData.tourType === t.key
                                                    ? 'border-neutral-900 bg-neutral-900 text-white shadow-md'
                                                    : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-display font-bold uppercase tracking-tight">{t.label}</span>
                                                <span className={`text-[11px] font-bold ${formData.tourType === t.key ? 'text-premium-gold' : 'text-neutral-500'}`}>
                                                    {t.price}
                                                </span>
                                            </div>
                                            <p className={`text-[10px] mt-0.5 truncate ${formData.tourType === t.key ? 'text-neutral-300' : 'text-neutral-400'}`}>
                                                {t.sub}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 5. Fecha y Hora de Inicio */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-display font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-premium-gold" />
                                        Fecha
                                    </label>
                                    <input
                                        type="date"
                                        required
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        className="w-full bg-white border-2 border-neutral-200 focus:border-premium-gold rounded-xl px-3 py-3 text-sm font-medium text-neutral-900 focus:outline-none transition-all shadow-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-display font-bold uppercase tracking-wider text-neutral-700 flex items-center justify-between">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5 text-premium-gold" />
                                            Hora Inicio
                                        </span>
                                        <span className="text-[10px] text-neutral-400 font-sans">Fin: {endTime}</span>
                                    </label>
                                    <input
                                        type="time"
                                        required
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                        className="w-full bg-white border-2 border-neutral-200 focus:border-premium-gold rounded-xl px-3 py-3 text-sm font-medium text-neutral-900 focus:outline-none transition-all shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* 6. Cantidad de personas */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-display font-bold uppercase tracking-wider text-neutral-700 flex items-center justify-between">
                                    <span className="flex items-center gap-1.5">
                                        <Users className="w-3.5 h-3.5 text-premium-gold" />
                                        Cantidad de personas
                                    </span>
                                    <span className="text-[11px] text-neutral-400 font-sans">Capacidad 4 pax</span>
                                </label>
                                <div className="grid grid-cols-4 gap-2">
                                    {[1, 2, 3, 4].map((num) => (
                                        <button
                                            key={num}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, people: num })}
                                            className={`py-2.5 rounded-xl border-2 font-display font-bold text-sm transition-all ${
                                                formData.people === num
                                                    ? 'border-premium-gold bg-premium-gold text-white shadow-md'
                                                    : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100'
                                            }`}
                                        >
                                            {num} {num === 1 ? 'pax' : 'pax'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F1C40F] to-[#D4AF37] hover:from-[#B89324] hover:to-[#D4AF37] text-white font-display font-black text-sm uppercase tracking-widest shadow-xl hover:shadow-2xl active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <span>Generar Ticket & Notificar</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
};

export default InstantBookingForm;
