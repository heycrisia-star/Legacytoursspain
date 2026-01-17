import React, { useMemo } from 'react';
import { STOPS, Stop } from '../stops';
import {
    Building2,
    Palmtree,
    MapPin,
    History,
    Anchor,
    Waves,
    Sun,
    Camera,
    Castle,
    Tent,
    Mountain,
    UtensilsCrossed,
    Music,
    ShoppingBag
} from 'lucide-react';
import './LegacyMap.css';

interface LegacyMapProps {
    onSelectStop: (stop: Stop) => void;
    selectedStopId: number;
}

const getIconForStop = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('sagrada')) return <Building2 size={24} />;
    if (n.includes('batlló') || n.includes('milà')) return <History size={24} />;
    if (n.includes('ramblas') || n.includes('parc')) return <Palmtree size={24} />;
    if (n.includes('port') || n.includes('mar')) return <Anchor size={24} />;
    if (n.includes('beach') || n.includes('olímpico')) return <Waves size={24} />;
    if (n.includes('mnac') || n.includes('estadio')) return <Castle size={24} />;
    if (n.includes('fuente')) return <Sun size={24} />;
    return <MapPin size={24} />;
};

const LegacyMap: React.FC<LegacyMapProps> = ({ onSelectStop, selectedStopId }) => {
    // Generate SVG path points
    const pathData = useMemo(() => {
        return STOPS.map((stop, i) => `${i === 0 ? 'M' : 'L'} ${stop.x}% ${stop.y}%`).join(' ');
    }, []);

    return (
        <div className="legacy-map-container">
            <div className="map-grid" />

            <svg className="map-path-svg" preserveAspectRatio="none">
                <path d={pathData} className="map-path" />
            </svg>

            {STOPS.map((stop) => (
                <div
                    key={stop.id}
                    className={`monument-marker ${selectedStopId === stop.id ? 'active' : ''}`}
                    style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
                    onClick={() => onSelectStop(stop)}
                >
                    <div className="marker-icon-wrapper">
                        {selectedStopId === stop.id && <div className="active-pulse" />}
                        {getIconForStop(stop.name)}
                    </div>
                    <div className="marker-label">
                        {stop.name}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LegacyMap;
