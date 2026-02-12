import React, { useState, useEffect, useRef } from 'react';
import { STOPS, Stop, Language } from '../stops';
import { X, Volume2, VolumeX, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './LegacyChronicle.css';

interface LegacyChronicleProps {
    onClose: () => void;
}

const LegacyChronicle: React.FC<LegacyChronicleProps> = ({ onClose }) => {
    const { language: globalLang } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const synthRef = useRef<SpeechSynthesis | null>(null);

    // Use global language directly
    const lang = globalLang;

    useEffect(() => {
        synthRef.current = window.speechSynthesis;
        return () => {
            synthRef.current?.cancel();
        };
    }, []);

    const toggleAudio = (text: string) => {
        if (isPlaying) {
            synthRef.current?.cancel();
            setIsPlaying(false);
        } else {
            const utterance = new SpeechSynthesisUtterance(text);
            const languageMap: Record<Language, string> = {
                es: 'es-ES',
                en: 'en-US',
                fr: 'fr-FR',
                de: 'de-DE',
                it: 'it-IT',
                pt: 'pt-PT',
                ru: 'ru-RU',
                zh: 'zh-CN',
                ja: 'ja-JP',
                ca: 'ca-ES'
            };
            utterance.lang = languageMap[lang] || 'es-ES';

            utterance.onend = () => setIsPlaying(false);
            utterance.onerror = () => setIsPlaying(false);

            setIsPlaying(true);
            synthRef.current?.speak(utterance);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const scrollTop = containerRef.current.scrollTop;
                const height = containerRef.current.offsetHeight;
                const index = Math.round(scrollTop / height);
                if (index !== activeIndex) {
                    setActiveIndex(index);
                    synthRef.current?.cancel();
                    setIsPlaying(false);
                }
            }
        };

        const container = containerRef.current;
        container?.addEventListener('scroll', handleScroll);
        return () => container?.removeEventListener('scroll', handleScroll);
    }, [activeIndex]);

    return (
        <div className="chronicle-container" ref={containerRef}>
            <header className="chronicle-header">
                <div className="flex flex-col gap-2">
                    <h3>The Legacy Chronicle</h3>
                </div>
                <button onClick={onClose} className="chronicle-close">
                    <X size={24} />
                </button>
            </header>

            <div className="progress-vertical">
                {STOPS.map((_, i) => (
                    <div key={i} className={`progress-step ${i === activeIndex ? 'active' : ''}`} />
                ))}
            </div>

            {STOPS.map((stop, index) => {
                const content = stop.content[lang];
                return (
                    <section
                        className={`chronicle-section ${index === activeIndex ? 'active' : ''}`}
                        key={stop.id}
                    >
                        <div
                            className="section-bg"
                            style={{ backgroundImage: `url(${stop.image})` }}
                        />
                        <div className="section-overlay" />

                        <div className="section-content">
                            <span className="stop-index">Chapter {index + 1}</span>
                            <h1 className="stop-title">{content.title}</h1>

                            <div className="audio-controls">
                                <button
                                    className={`btn-audio ${isPlaying ? 'playing' : ''}`}
                                    onClick={() => toggleAudio(`${content.legacy}. ${content.secret}`)}
                                >
                                    {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
                                    <span>
                                        {isPlaying
                                            ? (lang === 'es' ? "Detener Audio" : "Stop Audio")
                                            : (lang === 'es' ? "Escuchar Guía" : "Listen Guide")}
                                    </span>
                                </button>
                            </div>

                            <div className="chapters-grid">
                                <article className="chapter">
                                    <div className="chapter-header">
                                        <div className="chapter-icon" />
                                        <h4>{
                                            lang === 'es' ? 'EL LEGADO' :
                                                lang === 'ca' ? 'EL LLEGAT' :
                                                    lang === 'pt' ? 'O LEGADO' :
                                                        lang === 'fr' ? 'LE HÉRITAGE' :
                                                            lang === 'it' ? 'IL LEGATO' :
                                                                'THE LEGACY'
                                        }</h4>
                                    </div>
                                    <p className="chapter-text">{content.legacy}</p>
                                </article>

                                <article className="chapter">
                                    <div className="chapter-header">
                                        <div className="chapter-icon" />
                                        <h4>{
                                            lang === 'es' ? 'EL SECRETO' :
                                                lang === 'ca' ? 'EL SECRET' :
                                                    lang === 'pt' ? 'O SEGREDO' :
                                                        lang === 'fr' ? 'LE SECRET' :
                                                            lang === 'it' ? 'IL SEGRETO' :
                                                                'THE SECRET'
                                        }</h4>
                                    </div>
                                    <p className="chapter-text">{content.secret}</p>
                                </article>

                                <article className="chapter">
                                    <div className="chapter-header">
                                        <div className="chapter-icon" />
                                        <h4>{
                                            lang === 'es' ? 'OBSERVACIÓN' :
                                                lang === 'ca' ? 'OBSERVACIÓ' :
                                                    lang === 'pt' ? 'OBSERVAÇÃO' :
                                                        lang === 'fr' ? 'OBSERVATION' :
                                                            lang === 'it' ? 'OSSERVAZIONE' :
                                                                'OBSERVATION'
                                        }</h4>
                                    </div>
                                    <p className="chapter-text italic">{content.voice}</p>
                                </article>
                            </div>
                        </div>

                        {index < STOPS.length - 1 && (
                            <div className="scroll-indicator">
                                <div className="line" />
                                <span>Scroll to Continue</span>
                            </div>
                        )}
                    </section>
                );
            })}
        </div>
    );
};

export default LegacyChronicle;
