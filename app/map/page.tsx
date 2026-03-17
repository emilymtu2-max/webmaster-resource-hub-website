"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const LeafletMapInner = dynamic(
  () => import("../../components/LeafletMapInner"),
  { ssr: false }
);

const locations = [
{
name: "Immigration Advocates Network Legal Services Directory",
category: "Legal",
address: "9725 3rd Ave NE, Suite 405, Seattle, WA 98115",
lat: 47.7002014,
lng: -122.3270796,
},
{
name: "ILRC Red Card Ordering",
category: "Legal",
address: "1663 Mission Street, Suite 602, San Francisco, CA 94103",
lat: 37.7712444,
lng: -122.419365,
},
{
name: "Asian Counseling & Referral Service (ACRS)",
category: "Legal",
address: "3639 Martin Luther King Jr Way S, Seattle, WA 98144",
lat: 47.5707,
lng: -122.2966,
},
{
name: "Asian Bar Association of Washington Legal Clinic",
category: "Legal",
address: "611 S. Lane Street, Second Floor, Seattle, WA 98104",
lat: 47.5976,
lng: -122.3219,
},
{
name: "API Chaya Support Services",
category: "Legal",
address: "PO Box 14047, Seattle, WA 98114",
lat: 47.6062,
lng: -122.3321,
},
{
name: "Northwest Immigrant Rights Project",
category: "Legal",
address: "615 2nd Ave Suite 400, Seattle, WA 98104",
lat: 47.6035,
lng: -122.3346,
},
{
name: "Asian Bar Association of Washington",
category: "Legal",
address: "3639 Martin Luther King Jr. Way S, Seattle, WA 98144",
lat: 47.5707,
lng: -122.2966,
},
{
name: "Tacoma Community House",
category: "Legal",
address: "1314 S L St, Tacoma, WA 98405",
lat: 47.2497,
lng: -122.4543,
},
{
name: "Seattle Public Library Basic Skills Programs",
category: "Education",
address: "1000 4th Ave, Seattle, WA 98104",
lat: 47.6067,
lng: -122.3325,
},
{
name: "King County Library System English Language Learning",
category: "Education",
address: "15990 NE 85th St, Redmond, WA 98052",
lat: 47.6787,
lng: -122.1280,
},
{
name: "Kandelia College and Career Programs",
category: "Education",
address: "3829B S Edmunds St, Seattle, WA 98118",
lat: 47.5476,
lng: -122.2830,
},
{
name: "CAPAA Educational Opportunity Advocacy",
category: "Education",
address: "1110 Capitol Way South, Olympia, WA 98501",
lat: 47.0362,
lng: -122.9007,
},
{
name: "Refugee Women’s Alliance (ReWA)",
category: "Education",
address: "4008 Martin Luther King Jr Way S, Seattle, WA 98108",
lat: 47.5674,
lng: -122.2970,
},
{
name: "Denise Louie Education Center",
category: "Education",
address: "7101 62nd Ave NE #3, Seattle, WA 98115",
lat: 47.6805,
lng: -122.2646,
},
{
name: "Filipino Community of Seattle Youth Programs",
category: "Education",
address: "5740 Martin Luther King Jr Way S, Seattle, WA 98118",
lat: 47.5496,
lng: -122.2839,
},
{
name: "Seattle Japanese Garden",
category: "Culture",
address: "1075 Lake Washington Blvd E, Seattle, WA 98112",
lat: 47.6295,
lng: -122.2969,
},
{
name: "Seattle Buddhist Temple Bon Odori Festival",
category: "Culture",
address: "1427 South Main Street, Seattle, WA 98144",
lat: 47.5993,
lng: -122.3126,
},
{
name: "Vietnamese Cultural Center",
category: "Culture",
address: "2236 SW Orchard St, Seattle, WA 98106",
lat: 47.5349,
lng: -122.3645,
},
{
name: "Sulekha Cultural Events",
category: "Culture",
address: "3000 Landerholm Cir SE, Bellevue, WA 98007",
lat: 47.5858,
lng: -122.1480,
},
{
name: "Korean Adoptee Family Foundation Events",
category: "Culture",
address: "Bellevue Church of Christ, 10419 SE 11th St, Bellevue, WA 98004",
lat: 47.6020,
lng: -122.1984,
},
{
name: "Filipino Community Center Cultural Events",
category: "Culture",
address: "5740 Martin Luther King Jr Way S, Seattle, WA 98118",
lat: 47.5496,
lng: -122.2839,
},
{
name: "Seattle Chinese Garden",
category: "Culture",
address: "6000 16th Ave SW, Seattle, WA 98106",
lat: 47.5495,
lng: -122.3850,
},
{
name: "Panda Fest Asian Food Festival",
category: "Culture",
address: "305 Harrison St, Seattle, WA 98109",
lat: 47.6205,
lng: -122.3493,
},
{
name: "Seattle Art Museum Lunar New Year Festival",
category: "Culture",
address: "1400 E Prospect St, Seattle, WA 98112",
lat: 47.6298,
lng: -122.2949,
},
{
name: "Seattle Center Festál Cultural Festivals",
category: "Culture",
address: "305 Harrison St, Seattle, WA 98109",
lat: 47.6205,
lng: -122.3493,
},
{
name: "Friends of Little Saigon Small Business Fair",
category: "Career",
address: "1227 S Weller St, Seattle, WA",
lat: 47.5976,
lng: -122.3157,
},
{
name: "ACRS Employment and Training Services",
category: "Career",
address: "3639 Martin Luther King Jr. Way S, Seattle, WA 98144",
lat: 47.5707,
lng: -122.2966,
},
{
name: "ReWA Employment Training",
category: "Career",
address: "4008 Martin Luther King Jr. Way S., Seattle, WA 98108",
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
{
name: "Washington Small Business Development Center",
category: "Career",
address: "40 Lake Bellevue Dr #100, Bellevue, WA 98005",
lat: 47.5776,
lng: -122.1526,
},
{
name: "Greater Seattle Chinese Chamber of Commerce",
category: "Career",
address: "675 S King St, Seattle, WA 98104",
lat: 47.5984,
lng: -122.3230,
},
{
name: "Ventures Small Business Training",
category: "Career",
address: "2100 24th Ave S, Seattle, WA 98144",
lat: 47.5845,
lng: -122.3020,
},
{
name: "International Community Health Services",
category: "Health",
address: "720 8th Ave S, Seattle, WA 98104",
lat: 47.5967,
lng: -122.3222,
},
{
name: "Sea Mar Community Health Centers",
category: "Health",
address: "3801 150th Ave SE, Bellevue, WA 98006",
lat: 47.5738,
lng: -122.1407,
},
{
name: "ACRS Behavioral Health Services",
category: "Health",
address: "3639 Martin Luther King Jr. Way S, Seattle, WA 98144",
lat: 47.5707,
lng: -122.2966,
},
{
name: "Pacific Islander Health Board of Washington",
category: "Health",
address: "5210 12th St E Suite B, Fife, WA 98424",
lat: 47.2390,
lng: -122.3576,
},
{
name: "Kin On Health Care",
category: "Health",
address: "4416 S. Brandon Street, Seattle, WA 98118",
lat: 47.5536,
lng: -122.2813,
},
{
name: "NAMI Washington Mental Health Outreach",
category: "Health",
address: "4326 337th Pl SE, Fall City, WA",
lat: 47.5670,
lng: -121.8886,
},
{
name: "Korean Women's Association",
category: "Health",
address: "3625 Perkins Lane SW, Lakewood, WA",
lat: 47.1719,
lng: -122.5180,
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