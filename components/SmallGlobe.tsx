"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

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

  return (
    <div className={`mx-auto w-full max-w-4xl ${className}`}>
      <div className="h-[400px] w-full">
        <Globe
        ref={globeRef}
        width={width}
        height={height}
        backgroundColor="rgba(0,0,0,0)"
        
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        cloudsImageUrl="https://unpkg.com/three-globe/example/img/earth-clouds.png"
        cloudsAltitude={0.004}

        pointsData={markers}
        pointLat="lat"
        pointLng="lng"
        pointColor={(d: Marker) => d.color || "#ffcc00"}
        pointAltitude={(d: Marker) => d.size || 0.02}
        pointRadius={0.3}
        pointLabel={(d: Marker) => d.label || ""}
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