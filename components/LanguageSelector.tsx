import React, { useState } from 'react';
import { useLanguage, Language } from '../context/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';

const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ca', name: 'Català', flag: '🇦🇩' },
];

const LanguageSelector: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const currentLang = languages.find(l => l.code === language) || languages[0];

    return (
        <div className="relative inline-block text-left z-[1000]">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full hover:bg-black/60 transition-all duration-300"
            >
                <span className="text-lg">{currentLang.flag}</span>
                <span className="text-xs font-medium text-white/90 uppercase tracking-wider">{currentLang.code}</span>
                <ChevronDown size={14} className={`text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl z-20 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-right">
                        <div className="py-2 grid grid-cols-1 max-h-[70vh] overflow-y-auto">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setIsOpen(false);
                                    }}
                                    className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-200 ${language === lang.code
                                            ? 'bg-white/10 text-white font-semibold'
                                            : 'text-white/70 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <span className="text-xl">{lang.flag}</span>
                                    <span className="flex-1 text-left">{lang.name}</span>
                                    {language === lang.code && (
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageSelector;
