import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'fr' | 'de' | 'it' | 'pt' | 'ru' | 'zh' | 'ja' | 'ca';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import { translations } from '../translations';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Default to English - no auto-detection
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem('language');
        if (saved && ['es', 'en', 'fr', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ca'].includes(saved)) {
            return saved as Language;
        }
        const params = new URLSearchParams(window.location.search);
        const langParam = params.get('lang');
        if (langParam && ['es', 'en', 'fr', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ca'].includes(langParam)) {
            return langParam as Language;
        }
        return 'en'; // Always default to English
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        // Update URL without refreshing
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        window.history.pushState({}, '', url);
    };

    const t = (key: string): any => {
        const keys = key.split('.');
        let result: any = translations[language];

        for (const k of keys) {
            if (result && result[k] !== undefined) {
                result = result[k];
            } else {
                return key; // Return key if not found
            }
        }

        return (typeof result === 'string' || Array.isArray(result)) ? result : key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
