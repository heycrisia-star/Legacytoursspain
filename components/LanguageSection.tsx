import React from 'react';
import { Globe, MessageCircle, Users, Sparkles, Languages as LanguagesIcon, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSection: React.FC = () => {
    const { t } = useLanguage();

    const features = [
        { icon: MessageCircle, text: t('languages.features.realtime') },
        { icon: Globe, text: t('languages.features.over50') },
        { icon: Users, text: t('languages.features.ask') },
        { icon: Sparkles, text: t('languages.features.natural') },
        { icon: CheckCircle2, text: t('languages.features.nobarriers') },
        { icon: LanguagesIcon, text: t('languages.features.families') }
    ];

    const languages = [
        'English (US, UK, AU, IN)',
        'Spanish (Spain & America)',
        'French (France & Canada)',
        'German',
        'Italian',
        'Portuguese (Portugal & Brazil)',
        'Dutch',
        'Swedish',
        'Norwegian',
        'Danish',
        'Finnish',
        'Polish',
        'Czech',
        'Slovak',
        'Hungarian',
        'Romanian',
        'Bulgarian',
        'Croatian',
        'Serbian',
        'Greek',
        'Russian',
        'Ukrainian',
        'Arabic',
        'Hindi',
        'Bengali',
        'Punjabi',
        'Gujarati',
        'Kannada',
        'Malayalam',
        'Tamil',
        'Indonesian',
        'Malay',
        'Thai',
        'Vietnamese',
        'Filipino',
        'Japanese',
        'Korean',
        'Chinese (Simplified, Traditional, Cantonese)',
        'Afrikaans',
        'Catalan',
        'Icelandic',
        'Latvian',
        'Lithuanian',
        'Turkish'
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-white to-neutral-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-premium-gold/10 rounded-full mb-4">
                        <Globe className="w-5 h-5 text-premium-gold" />
                        <span className="text-sm font-display font-bold uppercase tracking-widest text-premium-gold">
                            {t('languages.badge')}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold text-premium-text">
                        {t('languages.title')}
                    </h2>

                    <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                        {t('languages.subtitle')}
                    </p>
                </div>

                {/* Description */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-neutral-100 mb-12">
                    <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-8">
                        {t('languages.description')}
                    </p>

                    <div className="space-y-3 mb-8">
                        <p className="text-neutral-700 font-medium">{t('languages.makes')}</p>
                        <ul className="space-y-2 text-neutral-600">
                            <li className="flex items-start gap-2">
                                <span className="text-premium-gold mt-1">•</span>
                                <span>{t('languages.benefits.comfortable')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-premium-gold mt-1">•</span>
                                <span>{t('languages.benefits.personal')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-premium-gold mt-1">•</span>
                                <span>{t('languages.benefits.interactive')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-premium-gold mt-1">•</span>
                                <span>{t('languages.benefits.premium')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {features.map(({ icon: Icon, text }, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-premium-gold/10 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-premium-gold" />
                                </div>
                                <span className="text-sm font-medium text-neutral-700">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Languages Grid */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-neutral-100 mb-12">
                    <h3 className="text-2xl font-display font-bold text-premium-text mb-6 text-center">
                        {t('languages.supported')}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {languages.map((lang, i) => (
                            <div key={i} className="flex items-center gap-2 p-3 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-premium-gold/30 transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-premium-gold flex-shrink-0" />
                                <span className="text-xs text-neutral-700">{lang}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <p className="text-lg md:text-xl font-medium text-neutral-800">
                        {t('languages.closing.line1')}
                    </p>
                    <p className="text-base md:text-lg text-neutral-600">
                        {t('languages.closing.line2')}
                    </p>
                    <p className="text-lg font-display font-bold text-premium-gold uppercase tracking-wider">
                        {t('languages.closing.line3')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LanguageSection;
