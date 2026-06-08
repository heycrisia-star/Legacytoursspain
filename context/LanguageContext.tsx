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

        // Post-process routes for tour1 (1h) and tour2 (2h)
        if (Array.isArray(result) && (key === 'tours.tour1.route' || key === 'tours.tour2.route')) {
            let filteredRoute = [...result];

            // 1. Filter out Barrio Gótico (for both 1h and 2h)
            filteredRoute = filteredRoute.filter(stop => {
                const s = stop.toLowerCase();
                return !(s.includes('gótico') || s.includes('gotico') || s.includes('gothic') || 
                         s.includes('gothique') || s.includes('gotische') || s.includes('готич') || 
                         s.includes('哥特') || s.includes('ゴシック') || s.includes('gòtic'));
            });

            // 2. Filter out Barceloneta Beach (for both 1h and 2h)
            filteredRoute = filteredRoute.filter(stop => {
                const s = stop.toLowerCase();
                return !(s.includes('barceloneta') || s.includes('барселонета') || 
                         s.includes('巴塞罗内塔') || s.includes('バルセロネータ'));
            });

            // 3. Filter out Port Vell / Puerto Viejo (for 2h)
            if (key === 'tours.tour2.route') {
                filteredRoute = filteredRoute.filter(stop => {
                    const s = stop.toLowerCase();
                    return !(s.includes('vell') || s.includes('viejo') || s.includes('vieux') || 
                             s.includes('hafen') || s.includes('vecchio') || s.includes('velho') || 
                             s.includes('старый порт') || s.includes('旧港') || s.includes('ベル港'));
                });
            }

            // 4. Insert Casa de les Punxes after Casa Milà
            // Find Casa Milà index
            const milaIndex = filteredRoute.findIndex(stop => {
                const s = stop.toLowerCase();
                return s.includes('milà') || s.includes('mila') || s.includes('米拉') || s.includes('ミラ');
            });

            if (milaIndex !== -1) {
                // Determine localized name for Casa de les Punxes
                let punxesName = 'Casa de les Punxes';
                if (language === 'es') punxesName = 'Casa de las Punxes';
                else if (language === 'ru') punxesName = 'Casa de les Punxes (Дом с шипами)';
                else if (language === 'zh') punxesName = 'Casa de les Punxes (特拉斯皮克斯之家)';
                else if (language === 'ja') punxesName = 'Casa de les Punxes (カサ・デ・ラス・プンシャス)';

                // Check if it's already there (to avoid duplicates)
                const alreadyHasPunxes = filteredRoute.some(stop => stop.toLowerCase().includes('punxes'));
                if (!alreadyHasPunxes) {
                    filteredRoute.splice(milaIndex + 1, 0, punxesName);
                }
            }

            return filteredRoute;
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
