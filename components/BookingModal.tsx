import React from 'react';
import { X, MessageCircle, CreditCard, ShieldCheck, Gift, Map, Star, History as HistoryIcon } from 'lucide-react';
import { BOOKING_URL, GOOGLE_REVIEWS_URL, MADRID_BOOKING_URL } from '../constants';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenGuide: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onOpenGuide }) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  // Direct WhatsApp link without pre-filled text template for maximum simplicity
  const WHATSAPP_PROMO_URL = "https://wa.me/34635096002";

  // Multi-language text for the modal UI
  const content = {
    es: {
      title: "Elige tu método de reserva",
      promoBadge: "DESCUENTO DIRECTO",
      promoTitle: "Reserva por WhatsApp",
      promoDesc: "¡Escribe y benefíciate de un descuento especial!",
      promoBtn: "Reserva mediante WhatsApp — Promoción especial",
      onlineTitle: "Reserva Online Directa",
      onlineDesc: "Paga online al instante mediante nuestra pasarela automatizada FareHarbor.",
      onlineBtn: "Reservar Online Directamente",
      guarantee: "Tours 100% privados, seguros y con regreso garantizado",
      guide: "Guía Digital",
      rate: "Valorar Tour",
      madrid: "¿Visitas Madrid?"
    },
    en: {
      title: "Choose Booking Method",
      promoBadge: "SPECIAL DISCOUNT",
      promoTitle: "Book via WhatsApp",
      promoDesc: "Message us and benefit from a special discount!",
      promoBtn: "Book via WhatsApp — Special Promotion",
      onlineTitle: "Book Online Directly",
      onlineDesc: "Book instantly online using our automated FareHarbor system. All cards accepted.",
      onlineBtn: "Book Online Now",
      guarantee: "100% Private, Safe and Guaranteed Tours",
      guide: "Digital Guide",
      rate: "Rate Tour",
      madrid: "Visiting Madrid?"
    },
    ca: {
      title: "Tria el teu mètode de reserva",
      promoBadge: "DESCOMPTE DIRECTE",
      promoTitle: "Reserva per WhatsApp",
      promoDesc: "Escriu i beneficia't d'un descompte especial!",
      promoBtn: "Reserva per WhatsApp — Promoció especial",
      onlineTitle: "Reserva Online Directa",
      onlineDesc: "Paga online a l'instant mitjançant la nostra passarel·la automatitzada FareHarbor.",
      onlineBtn: "Reservar Online Directament",
      guarantee: "Tours 100% privats, segurs i retorn garantit",
      guide: "Guia Digital",
      rate: "Valorar Tour",
      madrid: "Visites Madrid?"
    },
    fr: {
      title: "Choisissez votre mode de réservation",
      promoBadge: "RÉDUCTION DIRECTE",
      promoTitle: "Réserver via WhatsApp",
      promoDesc: "Écrivez-nous et bénéficiez d'une réduction spéciale !",
      promoBtn: "Réserver via WhatsApp — Promotion Spéciale",
      onlineTitle: "Réserver en Ligne Directement",
      onlineDesc: "Réservez instantanément en ligne via notre passerelle FareHarbor automatisée.",
      onlineBtn: "Réserver en Ligne Maintenant",
      guarantee: "Tours 100% privés, sécurisés et retour garanti",
      guide: "Guide Digital",
      rate: "Évaluer Tour",
      madrid: "Visite Madrid?"
    },
    de: {
      title: "Buchungsmethode wählen",
      promoBadge: "RABATT PROMO",
      promoTitle: "Über WhatsApp buchen",
      promoDesc: "Schreiben Sie uns und profitieren Sie von einem Sonderrabatt!",
      promoBtn: "Über WhatsApp buchen — Sonderaktion",
      onlineTitle: "Direkt Online buchen",
      onlineDesc: "Buchen Sie sofort online über unser automatisierte FareHarbor-System.",
      onlineBtn: "Jetzt Online buchen",
      guarantee: "100 % private, sichere und garantierte Touren",
      guide: "Digital Guide",
      rate: "Tour bewerten",
      madrid: "Madrid besuchen?"
    },
    it: {
      title: "Scegli il metodo di prenotazione",
      promoBadge: "SCONTO DIRETTO",
      promoTitle: "Prenota via WhatsApp",
      promoDesc: "Scrivici e approfitta di uno sconto speciale!",
      promoBtn: "Prenota tramite WhatsApp — Promozione speciale",
      onlineTitle: "Prenotazione Online Diretta",
      onlineDesc: "Paga online all'istante tramite il nostro sistema automatizzato FareHarbor.",
      onlineBtn: "Prenota Online Ora",
      guarantee: "Tour privati al 100%, sicuri e garantiti",
      guide: "Guida Digitale",
      rate: "Valuta Tour",
      madrid: "Visiti Madrid?"
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal box */}
      <div className="relative w-full max-w-lg bg-[#F9F8F6] border border-premium-gold/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 bg-white z-10">
          <h2 className="text-xl font-display font-bold text-premium-text tracking-wider uppercase">{t.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-premium-text transition-colors rounded-full hover:bg-neutral-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* WhatsApp / Cash Promo Option - FLASHY DESIGN */}
          <div className="relative p-6 rounded-2xl border-2 border-premium-gold bg-gradient-to-br from-white via-white to-amber-50/20 shadow-[0_0_25px_rgba(212,175,55,0.15)] flex flex-col space-y-4 overflow-hidden group">
            {/* Flashy Badge */}
            <div className="absolute -top-1 -right-1 px-4 py-1.5 bg-gradient-to-r from-red-600 to-amber-500 text-white rounded-bl-xl font-display font-black text-[11px] tracking-widest uppercase shadow-md animate-pulse flex items-center gap-1">
              <Gift className="w-3.5 h-3.5" />
              {t.promoBadge}
            </div>
            
            <div className="flex items-start gap-4 pr-16">
              <div className="p-3.5 bg-green-50 text-green-600 rounded-2xl shrink-0 shadow-inner">
                <MessageCircle className="w-7 h-7 fill-green-600/10" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-black text-xl text-premium-text uppercase tracking-wide flex items-center gap-2">
                  {t.promoTitle}
                </h3>
                <p className="text-sm text-neutral-700 font-sans font-medium leading-relaxed">
                  {t.promoDesc}
                </p>
              </div>
            </div>
            
            <a 
              href={WHATSAPP_PROMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full py-4.5 bg-green-600 hover:bg-green-700 text-white font-display font-black uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-green-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] border border-green-500 hover:border-green-600 text-center"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              {t.promoBtn}
            </a>
          </div>

          {/* Standard Online Booking Option */}
          <div className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3.5 bg-neutral-50 text-neutral-600 rounded-2xl shrink-0">
                <CreditCard className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-premium-text uppercase tracking-wide">
                  {t.onlineTitle}
                </h3>
                <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                  {t.onlineDesc}
                </p>
              </div>
            </div>
            
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full py-4 bg-premium-text hover:bg-neutral-800 text-white font-display font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-3 shadow-md transition-all hover:scale-[1.01]"
            >
              <CreditCard className="w-5 h-5" />
              {t.onlineBtn}
            </a>
          </div>

          {/* More Services Section */}
          <div className="pt-4 border-t border-neutral-200 grid grid-cols-3 gap-2 text-center">
            {/* 1. Digital Guide */}
            <button
              onClick={() => {
                onClose();
                onOpenGuide();
              }}
              className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#E0F2F1] text-[#2D3748] hover:bg-[#B2DFDB] transition-all border border-[#4DB6AC]/10 group"
            >
              <Map className="w-5 h-5 text-[#4DB6AC] mb-1 group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-[9px] tracking-wider uppercase leading-none">{t.guide}</span>
            </button>

            {/* 2. Rate Experience */}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex flex-col items-center justify-center p-2 rounded-xl bg-white text-premium-text hover:bg-neutral-50 transition-all border border-neutral-200 group"
            >
              <Star className="w-5 h-5 text-premium-gold fill-premium-gold mb-1 group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-[9px] tracking-wider uppercase leading-none">{t.rate}</span>
            </a>

            {/* 3. Visiting Madrid */}
            <a
              href={MADRID_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#1e3a8a] text-white hover:bg-[#172554] transition-all border border-transparent group"
            >
              <HistoryIcon className="w-5 h-5 text-white mb-1 group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-[9px] tracking-wider uppercase leading-none">{t.madrid}</span>
            </a>
          </div>

          {/* Guarantee stamp */}
          <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 font-sans pt-2">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span>{t.guarantee}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;
