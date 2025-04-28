import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface MapUpdaterProps {
    lat: number;
    lng: number;
}

export function MapUpdater({ lat, lng }: MapUpdaterProps) {
    const map = useMap();

    useEffect(() => {
        map.setView([lat, lng], map.getZoom()); // atualiza o centro mantendo o zoom atual
    }, [lat, lng, map]);

    return null;
}
