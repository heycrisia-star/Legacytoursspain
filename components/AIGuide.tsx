import React, { useState } from 'react';
import { STOPS, Stop } from '../stops';
import { X, History as HistoryIcon, Lightbulb, Headphones, Map as MapIcon, Info } from 'lucide-react';
import LegacyMap from './LegacyMap';
import './AIGuide.css';

interface AIGuideProps {
    onClose: () => void;
}

const AIGuide: React.FC<AIGuideProps> = ({ onClose }) => {
    const [selectedStop, setSelectedStop] = useState<Stop | null>(null);

    return (
        <div className="ai-guide-canvas">
            {/* Map Section */}
            <div className="map-viewport">
                <LegacyMap
                    onSelectStop={(stop) => setSelectedStop(stop)}
                    selectedStopId={selectedStop?.id || 0}
                />
            </div>

            {/* Side Detail Panel */}
            <aside className="guide-side-panel">
                <header className="guide-header">
                    <h3>Legacy Explorer</h3>
                    <button onClick={onClose} className="close-btn">
                        <X size={20} />
                    </button>
                </header>

                {selectedStop ? (
                    <div className="stop-details" key={selectedStop.id}>
                        <h1 className="stop-title">📍 {selectedStop.name}</h1>

                        <div className="bubble-v2 mint-bg">
                            <div className="bubble-icon mint-icon">
                                <HistoryIcon size={18} />
                            </div>
                            <span className="bubble-label-v2">BURBUJA EL LEGADO</span>
                            <p className="bubble-text">{selectedStop.legacyBubble}</p>
                        </div>

                        <div className="bubble-v2 lavender-bg">
                            <div className="bubble-icon lavender-icon">
                                <Lightbulb size={18} />
                            </div>
                            <span className="bubble-label-v2">BURBUJA CASO DE INTERÉS</span>
                            <p className="bubble-text">{selectedStop.interestBubble}</p>
                        </div>

                        <div className="bubble-v2 cream-bg">
                            <div className="bubble-icon cream-icon">
                                <Headphones size={18} />
                            </div>
                            <span className="bubble-label-v2">AUDIO-GUÍA</span>
                            <p className="bubble-text italic">{selectedStop.audioGuide}</p>
                        </div>

                        <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                            <Info className="text-slate-400 mt-1 shrink-0" size={18} />
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Selecciona otros iconos en el mapa para descubrir más secretos del legado de Barcelona.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="empty-state">
                        <MapIcon className="empty-icon" size={64} />
                        <h2 className="text-xl font-bold text-slate-400 mb-2">Comienza tu viaje</h2>
                        <p className="text-slate-400 text-sm max-w-[250px]">
                            Toca un punto de interés en el mapa para ver la historia detrás del monumento.
                        </p>
                    </div>
                )}
            </aside>
        </div>
    );
};

export default AIGuide;
