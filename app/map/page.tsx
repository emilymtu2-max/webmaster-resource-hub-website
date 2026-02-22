"use client";

import LeafletMap from "../../components/LeafletMap";

export default function MapPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Interactive Map</h1>
      <LeafletMap />
    </main>
  );
}