import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Tour } from '../types';

// Fix for default Leaflet marker icons in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom Premium Gold Icon
// Custom Premium Gold Icon with Number
const createGoldIcon = (number: number) => new L.DivIcon({
    className: 'custom-div-icon',
    html: `
    <div style="
      background-color: #D4AF37;
      width: 24px;
      height: 24px;
      border-radius: 50% 50% 50% 0;
      border: 2px solid #FFFFFF;
      box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      transform: rotate(-45deg);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    ">
      <div style="
        transform: rotate(45deg);
        color: white;
        font-weight: bold;
        font-size: 12px;
        font-family: sans-serif;
      ">${number}</div>
    </div>
  `,
    iconSize: [24, 24],
    iconAnchor: [12, 24], // Bottom point
});

interface TourMapProps {
    tours: Tour[];
    activeTourId: string;
}

// Component to handle map view updates
const MapUpdater: React.FC<{ coordinates: [number, number][] }> = ({ coordinates }) => {
    const map = useMap();

    useEffect(() => {
        if (coordinates && coordinates.length > 0) {
            const bounds = L.latLngBounds(coordinates);
            map.fitBounds(bounds, { padding: [20, 20], animate: true, duration: 1.5 });
        }
    }, [coordinates, map]);

    return null;
};

const TourMap: React.FC<TourMapProps> = ({ tours, activeTourId }) => {
    const activeTour = tours.find(t => t.id === activeTourId) || tours[0];
    const coordinates = activeTour.coordinates || [];

    if (!coordinates.length) return null;

    return (
        <div className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative z-0">
            <style>
                {`
          .leaflet-container {
            background-color: #1a1a1a;
            font-family: 'Outfit', sans-serif;
          }
          .leaflet-popup-content-wrapper {
            background-color: rgba(0, 0, 0, 0.9);
            color: #D4AF37;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            backdrop-filter: blur(8px);
          }
          .leaflet-popup-tip {
            background-color: rgba(0, 0, 0, 0.9);
          }
        `}
            </style>
            <MapContainer
                center={[41.3851, 2.1734]}
                zoom={13}
                scrollWheelZoom={false}
                className="w-full h-full z-0"
                style={{ height: '500px', width: '100%', background: '#1a1a1a' }}
            >
                {/* Dark Matter Tiles for Premium Look */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                {/* Route Line */}
                <Polyline
                    positions={coordinates}
                    pathOptions={{ color: '#D4AF37', weight: 4, opacity: 0.8, lineCap: 'round' }}
                />

                {/* Markers */}
                {coordinates.map((coord, index) => (
                    <Marker key={index} position={coord} icon={createGoldIcon(index + 1)}>
                        <Popup>
                            <div className="text-sm font-medium">
                                <span className="text-premium-gold font-bold">Stop {index + 1}:</span> {activeTour.route[index] || 'Point ' + (index + 1)}
                            </div>
                        </Popup>
                    </Marker>
                ))}

                <MapUpdater coordinates={coordinates} />
            </MapContainer>
        </div>
    );
};

export default TourMap;
