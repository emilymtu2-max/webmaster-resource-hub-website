"use client";

import { useState } from "react";
import LeafletMapInner from "../../components/LeafletMapInner";

const locations = [
  {
    name: "Northwest Immigrant Rights Project",
    category: "Legal",
    address: "615 2nd Ave Suite 400, Seattle, WA 98104",
    lat: 47.6035,
    lng: -122.3346,
  },
  {
    name: "Asian Counseling & Referral Service (ACRS)",
    category: "Legal",
    address: "3639 Martin Luther King Jr Way S, Seattle, WA 98144",
    lat: 47.5707,
    lng: -122.2966,
  },
  {
    name: "International Community Health Services",
    category: "Health",
    address: "720 8th Ave S, Seattle, WA 98104",
    lat: 47.5967,
    lng: -122.3222,
  },
  {
    name: "Seattle Japanese Garden",
    category: "Culture",
    address: "1075 Lake Washington Blvd E, Seattle, WA 98112",
    lat: 47.6295,
    lng: -122.2969,
  },
  {
    name: "Refugee Women’s Alliance (ReWA)",
    category: "Education",
    address: "4008 Martin Luther King Jr Way S, Seattle, WA 98108",
    lat: 47.5674,
    lng: -122.2970,
  },
  {
    name: "Seattle Goodwill Job Training",
    category: "Career",
    address: "1400 S Lane St, Seattle, WA 98144",
    lat: 47.5973,
    lng: -122.3135,
  },
  
];

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  return (
    <div className="flex flex-col h-screen">
      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Resources</h1>

          {["Legal", "Health", "Education", "Culture", "Career"].map((category) => {
            const locs = locations.filter((l) => l.category === category);
            if (!locs.length) return null;

            return (
              <div key={category} className="mb-6">
                <h2 className="font-semibold text-lg mb-2">{category}</h2>
                <ul className="space-y-2">
                  {locs.map((loc) => (
                    <li
                      key={loc.name}
                      className="cursor-pointer p-2 rounded hover:bg-gray-200"
                      onClick={() => setSelectedLocation(loc)}
                    >
                      <strong>{loc.name}</strong>
                      <div className="text-sm text-gray-600">{loc.address}</div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Map */}
        <div className="flex-1">
          <LeafletMapInner locations={locations} selectedLocation={selectedLocation} />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center text-sm">
        © 2026 Community Resource Map
      </footer>
    </div>
  );
}