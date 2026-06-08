import React from 'react';
import { X, MessageCircle, CreditCard, ShieldCheck, Gift } from 'lucide-react';
import { BOOKING_URL } from '../constants';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  // Multi-language text for the modal
  const content = {
    es: {
      title: "Elige tu método de reserva",
      promoBadge: "DESCUENTO DIRECTO",
      promoTitle: "Reserva por WhatsApp",
      promoDesc: "¡Haz tu reserva por WhatsApp y obtén un descuento especial pagando en efectivo el día del tour!",
      promoBtn: "Reserva mediante WhatsApp — Promoción especial",
      onlineTitle: "Reserva Online Directa",
      onlineDesc: "Paga online al instante mediante nuestra pasarela automatizada FareHarbor.",
      onlineBtn: "Reservar Online Directamente",
      guarantee: "Tours 100% privados, seguros y con regreso garantizado",
      whatsappText: "Hola%20buenas%20tardes%2C%20somos%20xx%20personas%2C%20de%20los%20cuales%20xx%20ni%C3%B1os%20o%20sin%20ni%C3%B1os%2C%20miden%20mas%20de%201%2C05%20metros%2C%20pense%20el%20dia%20xxx%20a%20la%20hora%20xxx%2C%20el%20tour%20de%20xxh%2C%20vi%20que%20si%20lo%20hago%20mediante%20wasa%20hay%20alguna%20oferta%20especial%2C%20podrias%20comentarme..."
    },
    en: {
      title: "Choose Booking Method",
      promoBadge: "SPECIAL DISCOUNT",
      promoTitle: "Book via WhatsApp",
      promoDesc: "Book directly via WhatsApp and receive an exclusive cash discount on the day of your tour!",
      promoBtn: "Book via WhatsApp — Special Promotion",
      onlineTitle: "Book Online Directly",
      onlineDesc: "Book instantly online using our automated FareHarbor system. All cards accepted.",
      onlineBtn: "Book Online Now",
      guarantee: "100% Private, Safe and Guaranteed Tours",
      whatsappText: "Hi%21%20We%20are%20xx%20people%2C%20including%20xx%20children%20%28are%20they%20over%201.05%20meters%20tall%3F%3A%20yes%2Fno%29.%20We%20are%20planning%20to%20do%20the%20xxh%20tour%20on%20xxx%20%28date%29%20at%20xxx%20%28time%29.%20I%20saw%20that%20if%20I%20book%20via%20WhatsApp%20there%20is%20a%20special%20offer%2C%20could%20you%20tell%20me%20more%20about%20it%3F"
    },
    ca: {
      title: "Tria el teu mètode de reserva",
      promoBadge: "DESCOMPTE DIRECTE",
      promoTitle: "Reserva per WhatsApp",
      promoDesc: "Fes la teva reserva per WhatsApp i obtén un descompte especial pagant en efectiu el dia del tour!",
      promoBtn: "Reserva per WhatsApp — Promoció especial",
      onlineTitle: "Reserva Online Directa",
      onlineDesc: "Paga online a l'instant mitjançant la nostra passarel·la automatitzada FareHarbor.",
      onlineBtn: "Reservar Online Directament",
      guarantee: "Tours 100% privats, segurs i retorn garantit",
      whatsappText: "Hola%20bona%20tarda%2C%20som%20xx%20persones%2C%20de%20les%20quals%20xx%20nens%20o%20sense%20nens%2C%20mesuren%20m%C3%A9s%20de%201%2C05%20metres%2C%20vam%20pensar%20el%20dia%20xxx%20a%20l%27hora%20xxx%2C%20el%20tour%20de%20xxh%2C%20he%20vist%20que%20si%20ho%20faig%20per%20wasa%20hi%20ha%20una%20oferta%20especial%2C%20em%20podries%20comentar..."
    },
    fr: {
      title: "Choisissez votre mode de réservation",
      promoBadge: "RÉDUCTION DIRECTE",
      promoTitle: "Réserver via WhatsApp",
      promoDesc: "Réservez directement via WhatsApp et bénéficiez d'une réduction spéciale en payant en espèces le jour du tour !",
      promoBtn: "Réserver via WhatsApp — Promotion Spéciale",
      onlineTitle: "Réserver en Ligne Directement",
      onlineDesc: "Réservez instantanément en ligne via notre passerelle FareHarbor automatisée.",
      onlineBtn: "Réserver en Ligne Maintenant",
      guarantee: "Tours 100% privés, sécurisés et retour garanti",
      whatsappText: "Bonjour%21%20Nous%20sommes%20xx%20personnes%2C%20dont%20xx%20enfants%20%28mesurent-ils%20plus%20de%201%2C05%20m%C3%A8tre%3F%20oui%2Fnon%29.%20Nous%20envisageons%20de%20faire%20le%20tour%20de%20xxh%20le%20xxx%20%28date%29%20%C3%A0%20xxx%20%28heure%29.%20J%27ai%20vu%20que%20si%20je%20r%C3%A9serve%20via%20WhatsApp%2C%20il%20y%20a%20une%20offre%20sp%C3%A9ciale%2C%20pourriez-vous%20m%27en%20dire%20plus%20%3F"
    },
    de: {
      title: "Buchungsmethode wählen",
      promoBadge: "RABATT PROMO",
      promoTitle: "Über WhatsApp buchen",
      promoDesc: "Buchen Sie direkt über WhatsApp und erhalten Sie am Tag der Tour einen Sonderrabatt bei Barzahlung!",
      promoBtn: "Über WhatsApp buchen — Sonderaktion",
      onlineTitle: "Direkt Online buchen",
      onlineDesc: "Buchen Sie sofort online über unser automatisiertes FareHarbor-System.",
      onlineBtn: "Jetzt Online buchen",
      guarantee: "100 % private, sichere und garantierte Touren",
      whatsappText: "Hallo%21%20Wir%20sind%20xx%20Personen%2C%20davon%20xx%20Kinder%20%28sind%20sie%20%C3%BCber%201%2C05%20Meter%20gro%C3%9F%3F%20ja%2Fnein%29.%20Wir%20planen%20die%20xxh-Tour%20am%20xxx%20%28Datum%29%20um%20xxx%20%28Uhrzeit%29.%20Ich%20habe%20gesehen%2C%20dass%20es%20bei%20Buchung%20%C3%BCber%20WhatsApp%20ein%20Sonderangebot%20gibt.%20K%C3%B6nnten%20Sie%20mir%20mehr%20dar%C3%BCber%20erz%C3%A4hlen%3F"
    },
    it: {
      title: "Scegli il metodo di prenotazione",
      promoBadge: "SCONTO DIRETTO",
      promoTitle: "Prenota via WhatsApp",
      promoDesc: "Effettua la tua prenotazione tramite WhatsApp e ottieni uno sconto speciale pagando in contanti il giorno del tour!",
      promoBtn: "Prenota tramite WhatsApp — Promozione speciale",
      onlineTitle: "Prenotazione Online Diretta",
      onlineDesc: "Paga online all'istante tramite il nostro sistema automatizzato FareHarbor.",
      onlineBtn: "Prenota Online Ora",
      guarantee: "Tour privati al 100%, sicuri e garantiti",
      whatsappText: "Ciao%21%20Siamo%20xx%20persone%2C%20di%20cui%20xx%20bambini%20%28sono%20alti%20pi%C3%B9%20di%201%2C05%20metri%3F%20s%C3%AC%2Fno%29.%20Pensiamo%20di%20fare%20il%20tour%20di%20xxh%20il%20giorno%20xxx%20alle%20ore%20xxx.%20Ho%20visto%20che%20se%20prenoto%20tramite%20WhatsApp%20c%27%C3%A8%20un%27offerta%20speciale%2C%20potresti%20dirmi%20di%20pi%C3%B9%3F"
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  // WhatsApp Barcelona direct booking link with localized template text
  const WHATSAPP_PROMO_URL = `https://wa.me/34635096002?text=${t.whatsappText}`;

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
