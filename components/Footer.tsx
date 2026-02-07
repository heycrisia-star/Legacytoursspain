import React from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin, BookOpen } from 'lucide-react';
import { SOCIAL_LINKS, GOOGLE_MAPS_URL } from '../constants';

interface FooterProps {
  onOpenFAQ: () => void;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<FooterProps> = ({ onOpenFAQ, contactRef }) => {
  return (
    <footer ref={contactRef} className="border-t border-neutral-200 bg-white py-12 px-6 text-premium-text">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
        {/* Contact Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="flex flex-col items-center space-y-3">
            <div className="p-3 bg-neutral-50 rounded-full text-premium-gold">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm">Call Us</h4>
            <div className="space-y-1">
              <a href="tel:+34635096002" className="block text-neutral-600 hover:text-premium-gold transition-colors font-sans">+34 635 096 002</a>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="p-3 bg-neutral-50 rounded-full text-premium-gold">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm">Email</h4>
            <a href="mailto:info@legacytoursspain.com" className="text-neutral-600 hover:text-premium-gold transition-colors font-sans text-sm">info@legacytoursspain.com</a>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="p-3 bg-neutral-50 rounded-full text-premium-gold">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm">Locate Us</h4>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-premium-gold transition-colors font-sans text-xs px-4">Carrer de València, 270, Eixample, 08007 Barcelona</a>
          </div>
        </div>

        {/* Logo */}
        <div className="mb-4 pt-12 border-t border-neutral-100 w-full flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/dk7xpxrvh/image/upload/v1770493355/Gemini_Generated_Image_ambwwrambwwrambw_tct4wy.png"
            alt="Legacy Tours Spain"
            className="h-32 w-auto object-contain"
          />
        </div>

        {/* Socials - TikTok & Instagram only */}
        <div className="flex flex-wrap justify-center items-center gap-8 pb-12">

          {SOCIAL_LINKS.map((link) => {
            let IconComponent: React.ReactNode;

            if (link.icon === 'instagram') IconComponent = <Instagram className="w-8 h-8" />;
            else if (link.icon === 'tiktok') {
              IconComponent = (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              );
            }

            if (!IconComponent) return null;

            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-5 rounded-2xl bg-neutral-50 border border-neutral-100 text-neutral-600 hover:bg-premium-gold hover:text-white hover:scale-110 shadow-sm transition-all duration-300 group"
                aria-label={link.name}
              >
                {IconComponent}
              </a>
            );
          })}
        </div>

      </div>
    </footer>

  );
};

export default Footer;