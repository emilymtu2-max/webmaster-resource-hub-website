"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* Fly to selected marker */
function FlyToLocation({ location, markersRef }: any) {
  const map = useMap();

  useEffect(() => {
    if (location?.lat && location?.lng) {
      map.flyTo([location.lat, location.lng], 14, { duration: 1.5 });

      const marker = markersRef.current?.[location.name];
      if (marker) marker.openPopup();
    }
  }, [location, map, markersRef]);

  return null;
}

/* Map marker colors by category */
const categoryColors: { [key: string]: string } = {
  Legal: "#1E3A8A", // blue
  Health: "#DC2626", // red
  Education: "#16A34A", // green
  Culture: "#F97316", // orange
  Career: "#7C3AED", // purple
};

export default function LeafletMapInner({ locations = [], selectedLocation }: any) {
  const markersRef = useRef<{ [key: string]: any }>({});

  const createColoredDivIcon = (color: string) =>
    new L.DivIcon({
      className: "custom-pin",
      html: `<span style="
        display:block;
        width:18px;
        height:18px;
        background-color:${color};
        border-radius:50%;
        border: 2px solid white;
        box-shadow: 0 0 2px #555;
        "></span>`,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
      popupAnchor: [0, -10],
    });

  return (
    <MapContainer
      center={[47.6062, -122.3321]}
      zoom={11}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FlyToLocation location={selectedLocation} markersRef={markersRef} />

      {locations.map((loc: any) => (
        <Marker
          key={loc.name}
          position={[loc.lat, loc.lng]}
          icon={createColoredDivIcon(categoryColors[loc.category] || "#6B7280")} // default gray
          ref={(marker) => {
            if (marker) markersRef.current[loc.name] = marker;
          }}
        >
          <Popup>
            <strong>{loc.name}</strong>
            <br />
            {loc.category}
            <br />
            {loc.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}