"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";

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
  width = 700,
  height = 500,
  markers = [],
  autoRotate = true,
}: SmallGlobeProps) {
  const globeRef = useRef<any>(null);
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    )
      .then((res) => res.json())
      .then((geo) => setCountries(geo.features));
  }, []);

  useEffect(() => {
    if (globeRef.current && autoRotate) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.2;
      controls.enableZoom = false;
      controls.enablePan = false;
    }
  }, [autoRotate, countries]);

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
    <div className={`flex flex-col items-end ${className}`}>
      {/* Globe wrapper — slightly overflow to feel large and bold */}
      <div
        className="relative"
        style={{ width, height }}
      >
        {/* Soft glow halo behind the globe */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(220,60,60,0.13) 0%, transparent 70%)",
            transform: "scale(1.08)",
          }}
        />
        <Globe
          ref={globeRef}
          width={width}
          height={height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere={true}
          atmosphereColor="rgba(200,80,80,0.35)"
          atmosphereAltitude={0.18}
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
              ? "rgba(220, 60, 60, 0.82)"
              : "rgba(200, 220, 110, 0.18)"
          }
          polygonSideColor={() => "rgba(0,0,0,0.05)"}
          polygonStrokeColor={() => "#111"}
        />
      </div>

      {/* Interactive badge */}
      {showCaption && (
        <div className="mt-4 flex items-center gap-2 self-center">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
          </span>
          <p className="text-base font-medium text-base-content/60 tracking-wide">
            Interactive globe — click and drag to explore
          </p>
        </div>
      )}
    </div>
  );
}