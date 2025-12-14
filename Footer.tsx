import React from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin, BookOpen } from 'lucide-react';
import { SOCIAL_LINKS, GOOGLE_MAPS_URL } from '../constants';

interface FooterProps {
  onOpenFAQ: () => void;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<FooterProps> = ({ onOpenFAQ, contactRef }) => {
  return (
    <footer ref={contactRef} className="border-t border-neutral-200 bg-white py-20 px-6 text-premium-text">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
        
        {/* FAQ Trigger */}
        <button 
          onClick={onOpenFAQ}
          className="text-base font-display font-bold tracking-[0.2em] text-neutral-500 hover:text-premium-gold uppercase border-b-2 border-transparent hover:border-premium-gold pb-1 transition-all"
        >
          Read Frequently Asked Questions
        </button>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-3xl font-display font-bold text-premium-text uppercase tracking-wide">Contact Us</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-neutral-600 text-base font-sans">
            <a href="tel:+34635096002" className="flex items-center gap-3 hover:text-premium-gold transition-colors group">
              <div className="p-2 bg-neutral-100 rounded-full group-hover:bg-premium-gold/20 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span>+34 635 09 60 02</span>
            </a>
            <a href="mailto:info@legacytoursspain.com" className="flex items-center gap-3 hover:text-premium-gold transition-colors group">
              <div className="p-2 bg-neutral-100 rounded-full group-hover:bg-premium-gold/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span>info@legacytoursspain.com</span>
            </a>
          </div>
          
          <div className="flex justify-center mt-2">
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-600 hover:text-premium-gold transition-colors group">
               <div className="p-2 bg-neutral-100 rounded-full group-hover:bg-premium-gold/20 transition-colors">
                 <MapPin className="w-5 h-5" />
               </div>
               <span>Barcelona, Spain</span>
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {SOCIAL_LINKS.map((link) => {
            let IconComponent: React.ReactNode;
            
            if (link.icon === 'instagram') IconComponent = <Instagram className="w-6 h-6" />;
            else if (link.icon === 'facebook') IconComponent = <Facebook className="w-6 h-6" />;
            else if (link.icon === 'notebook') IconComponent = <BookOpen className="w-6 h-6" />;
            else if (link.icon === 'tiktok') {
              IconComponent = (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                   <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              );
            } else if (link.icon === 'tripadvisor') {
              IconComponent = (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M20.9,13.2c-0.6-3.8-3.5-6.8-7.2-7.8V3.6h1.2C15.4,3.6,15.9,3,15.9,2.4s-0.5-1.2-1.2-1.2h-5.5 c-0.6,0-1.2,0.5-1.2,1.2s0.5,1.2,1.2,1.2H10.4v1.8c-3.7,1-6.6,4-7.2,7.8c-2,0.8-3.2,2.9-3.1,5.1c0.1,3,2.7,5.4,5.7,5.3 c2.6-0.1,4.9-2,5.5-4.5c0.6,2.5,2.9,4.4,5.5,4.5c3,0.1,5.6-2.3,5.7-5.3C22.6,16,22.3,14.6,20.9,13.2z M6.4,19.3 c-1.7,0-3-1.4-3-3s1.4-3,3-3s3,1.4,3,3S8.1,19.3,6.4,19.3z M12,13.7c-0.9,0-1.7-0.7-1.7-1.7s0.7-1.7,1.7-1.7s1.7,0.7,1.7,1.7 S13,13.7,12,13.7z M17.6,19.3c-1.7,0-3-1.4-3-3s1.4-3,3-3s3,1.4,3,3S19.2,19.3,17.6,19.3z"/>
                </svg>
              );
            } else if (link.icon === 'getyourguide') {
               IconComponent = (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M9 10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4Z"/>
                    <path d="M19 10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4Z"/>
                    <path d="M9 20a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4Z"/>
                    <path d="M17.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/>
                </svg>
              );
            }

            return (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="relative p-4 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-600 hover:bg-premium-gold hover:text-white hover:scale-110 shadow-sm transition-all duration-300 group" aria-label={link.name}>
                {IconComponent}
              </a>
            );
          })}
        </div>

        <div className="pt-8 text-[11px] font-display text-neutral-400 uppercase tracking-widest">
          © {new Date().getFullYear()} Legacy Tours Spain. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;