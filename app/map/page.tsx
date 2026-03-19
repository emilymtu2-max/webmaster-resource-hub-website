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
{
  name: "Helping Link",
  category: "Education",
  address: "555 S Renton Village Pl #225, Renton, WA 98057",
  lat: 47.46934,
  lng: -122.21239,
},

{
  name: "Washington State Coalition for Language Access (WASCLA)",
  category: "Education",
  address: "1037 NE 65th St. #262, Seattle WA 98115",
  lat: 47.67686,
  lng: -122.31658,
},

{
  name: "Thriving Asians",
  category: "Education",
  address: "New York, USA",
  lat: 40.7128,
  lng: -74.0060,
},
{
  name: "Bhutanese Community Resource Center",
  category: "Culture",
  address: "21400 International Blvd, Suite 302, SeaTac, WA 98198",
  lat: 47.41077,
  lng: -122.29661,
},

{
  name: "Bainbridge Island Japanese American Community (BIJAC)",
  category: "Culture",
  address: "1298 Grow Ave NW, Bainbridge Island, WA 98110",
  lat: 47.63444,
  lng: -122.52463,
},

{
  name: "Filipino Youth Activities Drill Team",
  category: "Culture",
  address: "305 Harrison Street, Seattle, WA 98109",
  lat: 47.62154,
  lng: -122.35165,
},

{
  name: "India American Community Services (IACS)",
  category: "Culture",
  address: "PO Box 404, Bellevue, WA 98009-0404",
  lat: 47.61015,
  lng: -122.20152,
},

{
  name: "Hmong Association of Washington",
  category: "Culture",
  address: "PO BOX 84601, Seattle, WA 98124",
  lat: 47.60621,
  lng: -122.33207,
},

{
  name: "Wing Luke Asian Museum",
  category: "Culture",
  address: "719 S. King Street, Seattle, Washington 98104",
  lat: 47.59825,
  lng: -122.32396,
},

{
  name: "Asian Service Center",
  category: "Culture",
  address: "22727 Hwy 99, Suite 201A, Edmonds WA 98026",
  lat: 47.79262,
  lng: -122.34479,
},
{
  name: "Greater Seattle Chinese Chamber of Commerce",
  category: "Career",
  address: "P.O. Box 3182, Seattle, WA 98114",
  lat: 47.60621,
  lng: -122.33207,
},
{
  name: "WAPI Community Services",
  category: "Health",
  address: "861 Poplar Pl S, Seattle, WA 98144",
  lat: 47.59490,
  lng: -122.30263,
},

{
  name: "National Asian American Pacific Islander Mental Health Association (NAAPIMHA)",
  category: "Health",
  address: "1215 19th St Ste A, Denver, CO 80202",
  lat: 39.75074,
  lng: -104.99894,
},

{
  name: "Anise Health",
  category: "Health",
  address: "285 Nostrand Ave, Unit 116, Brooklyn, NY 11216",
  lat: 40.68287,
  lng: -73.95085,
},

{
  name: "Pacific Asian Counseling Services",
  category: "Health",
  address: "8616 La Tijera Blvd., Suite 200, Los Angeles, CA 90045",
  lat: 33.95984,
  lng: -118.37203,
},

{
  name: "South Asian Public Health Association",
  category: "Health",
  address: "Baltimore, MD",
  lat: 39.29038,
  lng: -76.61219,
},

{
  name: "Asian Mental Health Project",
  category: "Health",
  address: "Fontana, CA 92336, USA.",
  lat: 34.09223,
  lng: -117.43505,
},

{
  name: "Yellow Chair Collective",
  category: "Health",
  address: "303 N Glenoaks Blvd, Burbank, CA 91502",
  lat: 34.18189,
  lng: -118.30902,
},

{
  name: "Asian American Federation",
  category: "Health",
  address: "120 Wall Street, 9th Floor, New York, NY 10005",
  lat: 40.70437,
  lng: -74.00769,
},

{
  name: "Mango Tree Counseling & Consulting",
  category: "Health",
  address: "21 S 11th St #303, Philadelphia, PA 19107",
  lat: 39.95060,
  lng: -75.15802,
},

{
  name: "Mental Health Association for Chinese Communities",
  category: "Health",
  address: "3610 Castro Valley Blvd Ste 210, Castro Valley, CA 94546",
  lat: 37.69414,
  lng: -122.07346,
},

{
  name: "National Asian Pacific American Families Allied for Substance Awareness and Harm Reduction",
  category: "Health",
  address: "1500 W Alhambra Rd Unit 4, Alhambra, CA 91801",
  lat: 34.09438,
  lng: -118.13977,
},

{
  name: "Asian & Pacific Islander American Health Forum",
  category: "Health",
  address: "461 Bush Street, Suite 400, San Francisco, CA 94108",
  lat: 37.79079,
  lng: -122.40390,
},

];

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  return (
    <div className="flex flex-col h-screen">
      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/4 bg-[#f4ece1] p-4 overflow-y-auto text-stone-900 border-r border-red-900/15">
          <h1 className="text-2xl font-bold mb-4 text-red-900">Resources</h1>

          {["Legal", "Health", "Education", "Culture", "Career"].map((category) => {
            const locs = locations.filter((l) => l.category === category);
            if (!locs.length) return null;

            return (
              <div key={category} className="mb-6">
                <h2 className="font-semibold text-lg mb-2 text-red-900">{category}</h2>
                <ul className="space-y-2">
                  {locs.map((loc) => (
                    <li
                      key={loc.name}
                      className="cursor-pointer p-3 rounded-md bg-white border border-red-900/10 shadow-sm transition-colors hover:bg-red-50"
                      onClick={() => setSelectedLocation(loc)}
                    >
                      <strong className="text-stone-900">{loc.name}</strong>
                      <div className="text-sm text-stone-700">{loc.address}</div>
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
