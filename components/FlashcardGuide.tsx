import React, { useState, useRef, useEffect } from 'react';
import { STOPS, Stop } from '../stops';
import { X, ChevronRight, History, Lightbulb, Headphones, MousePointer2 } from 'lucide-react';
import './FlashcardGuide.css';

interface FlashcardGuideProps {
    onClose: () => void;
}

const FlashcardGuide: React.FC<FlashcardGuideProps> = ({ onClose }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollerRef.current) {
            const scrollLeft = scrollerRef.current.scrollLeft;
            const width = scrollerRef.current.offsetWidth;
            const index = Math.round(scrollLeft / width);
            setActiveIndex(index);
        }
    };

    return (
        <div className="flashcard-guide-container">
            <header className="flashcard-header">
                <h3>Story of Barcelona</h3>
                <button onClick={onClose} className="flashcard-close">
                    <X size={24} />
                </button>
            </header>

            <div className="pagination-dots">
                {STOPS.map((_, i) => (
                    <div key={i} className={`dot ${i === activeIndex ? 'active' : ''}`} />
                ))}
            </div>

            <div
                className="cards-scroller"
                ref={scrollerRef}
                onScroll={handleScroll}
            >
                {STOPS.map((stop, index) => (
                    <div className="flashcard-item" key={stop.id}>
                        <div
                            className="flashcard-bg"
                            style={{
                                backgroundImage: `url(${stop.image})`,
                                transform: `translateX(${(activeIndex - index) * 20}px)`
                            }}
                        />
                        <div className="flashcard-overlay" />

                        <div className="flashcard-content">
                            <h1 className="flashcard-stop-name">{stop.name}</h1>

                            <div className="bubbles-container">
                                <div className="flash-bubble mint-border">
                                    <span className="bubble-tag accent-mint">LEGISLATIVE LEGACY</span>
                                    <p className="bubble-text-main">
                                        <History size={16} className="inline mr-2 opacity-50" />
                                        {stop.legacyBubble}
                                    </p>
                                </div>

                                <div className="flash-bubble lavender-border">
                                    <span className="bubble-tag accent-lavender">HIDDEN SECRET</span>
                                    <p className="bubble-text-main">
                                        <Lightbulb size={16} className="inline mr-2 opacity-50" />
                                        {stop.interestBubble}
                                    </p>
                                </div>

                                <div className="flash-bubble cream-border">
                                    <span className="bubble-tag accent-cream">VOICE GUIDE</span>
                                    <p className="bubble-text-main italic opacity-90">
                                        <Headphones size={16} className="inline mr-2 opacity-50" />
                                        {stop.audioGuide}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="scroll-hint">
                <ChevronRight size={24} />
                <span>Swipe to Explore</span>
            </div>
        </div>
    );
};

export default FlashcardGuide;
