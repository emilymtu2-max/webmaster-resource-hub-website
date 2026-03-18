"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

type Marker = {
  lat: number;
  lng: number;
  size?: number;
  color?: string;
  label?: string;
};

type SmallGlobeProps = {
  showCaption?: boolean;
  className?: string;
  width?: number;
  height?: number;
  markers?: Marker[];
  autoRotate?: boolean;
};

export default function SmallGlobe({
  showCaption = true,
  className = "",
  width = 600,
  height = 400,
  markers = [],
  autoRotate = true,
}: SmallGlobeProps) {
  const globeRef = useRef<any>(null);
  const [countries, setCountries] = useState<any[]>([]);

  // Load GeoJSON countries (ready-to-use)
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    )
      .then((res) => res.json())
      .then((geo) => setCountries(geo.features));
  }, []);

  // Auto-rotate globe
  useEffect(() => {
    if (globeRef.current && autoRotate) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.7;
      controls.enableZoom = true;
      controls.enablePan = false;
    }
  }, [autoRotate]);

  // List of major Asian countries to highlight
  const asiaCountries = [
    "China",
    "India",
    "Japan",
    "South Korea",
    "Indonesia",
    "Vietnam",
    "Thailand",
    "Philippines",
    "Pakistan",
    "Bangladesh",
    "Nepal",
    "Sri Lanka",
    "Malaysia",
    "Singapore",
    "Mongolia",
    "Kazakhstan",
  ];

  return (
    <div className={`mx-auto w-full max-w-4xl ${className}`}>
      <div style={{ width: width, height: height }}>
        <Globe
          ref={globeRef}
          width={width}
          height={height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere={true}
          pointsData={markers}
          pointLat="lat"
          pointLng="lng"
          pointColor={(d: any) => d.color || "#ffcc00"}
          pointAltitude={(d: any) => d.size || 0.02}
          pointRadius={0.3}
          pointLabel={(d: any) => d.label || ""}
          polygonsData={countries}
          polygonCapColor={(d: any) =>
            asiaCountries.includes(d.properties.name)
              ? "rgba(255, 80, 80, 0.85)" // 🔴 Asia
              : "rgba(120, 120, 120, 0.2)" // 🌑 rest
          }
          polygonSideColor={() => "rgba(0,0,0,0.05)"}
          polygonStrokeColor={() => "#111"}
        />
      </div>

      {showCaption && (
        <p className="mt-6 text-center text-lg text-base-content/70">
          Explore global connections and resources interactively.
        </p>
      )}
    </div>
  );
}