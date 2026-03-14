"use client";

import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

export default function GlobeComponent() {
  const globeRef = useRef();

  // Basic globe with submarine cables example
  // You can add real cable data to arcsData here if you want
  const cablesExample = [
    {
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: 51.5074,
      endLng: -0.1278,
      name: "Example Cable",
    },
  ];

  return (
    <div className="w-full h-72">
      <Globe
        ref={globeRef}
        arcsData={cablesExample}
        arcColor={() => "#ffcc00"}
        arcDashLength={0.4}
        arcDashGap={4}
        arcDashAnimateTime={2000}
        globeBackgroundColor="rgba(0,0,0,0)" // transparent
      />
    </div>
  );
}