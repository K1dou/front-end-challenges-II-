import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapUpdater } from './MapUpdaterProps';

const customIcon = new Icon({
    iconUrl: '/icon-location.svg',
    iconSize: [32, 40],
});

interface MapProps {
    lat: number;
    lng: number;
}

export default function Map({ lat, lng }: MapProps) {
    return (
        <MapContainer
            zoomControl={false}
            center={[lat, lng]}
            zoom={16}
            scrollWheelZoom={false}
            className="w-full h-[650px] md:h-[880px] lg:h-[650px] z-0"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapUpdater lat={lat} lng={lng} />
            <ZoomControl position="bottomleft" />
            <Marker position={[lat, lng]} icon={customIcon}>
                <Popup>IP localizado aqui</Popup>
            </Marker>
        </MapContainer>
    );
}
