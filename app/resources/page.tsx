"use client"
import React, { useEffect, useMemo, useState } from "react"
import Link from "next/link"
const topResources = [
  {
    rank: "01",
    title: "King County Library System (KCLS)",
    subtitle: "Adult Learner ELL Classes",
    category: "Education / Support",
    about:
      "The King County Library System provides community-centered educational services across multiple library branches in King County.",
    details:
      "Free online and in-person English Language Learning classes led by experienced instructors, offered at various times and locations.",
    contact: "Call: (425) 462-9600 or (800) 462-9600",
    imageSrc: "/LocalHelp.jpg",
  },
  {
    rank: "02",
    title: "Asian Counseling and Referral Service (ACRS)",
    subtitle: "Behavioral Health & Wellness Programs",
    category: "Health / Wellness",
    about:
      "ACRS is a nationally recognized nonprofit serving Asian American, Pacific Islander, immigrant, refugee, and underserved communities in King County.",
    details:
      "Provides behavioral health services including mental health counseling, substance use disorder treatment, and problem gambling services.",
    contact: "Call: (206) 695-7600",
    imageSrc: "/girlslaughing.png",
  },
  {
    rank: "03",
    title: "Seattle Japanese Garden",
    subtitle: "Seasonal Programs & Cultural Tours",
    category: "Culture",
    about:
      "A 3.5-acre park of natural beauty and tranquility within Washington Park Arboretum, managed by the City of Seattle and supported by the Arboretum Foundation.",
    details:
      "A classical Japanese strolling garden that hosts seasonal events, cultural programs, and educational tours about Japanese garden design and culture.",
    contact: "Call: (206) 684-4725",
    imageSrc: "/aboutus-culture.jpg",
  },
];
// Simple HeartIcon component (inline SVG)
const HeartIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
    />
  </svg>
)

const FAVORITES_STORAGE_KEY = "pulseasia_resource_favorites"
const FAVORITE_CATEGORY_LABEL = "Liked"

interface Resource {
  title: string
  category: string[]
  about: string
  does: string
  contact: string
  link: string
}

const resources = [
  {
    title: "Immigration Advocates Network Legal Services Directory",
    category: ["Legal", "Volunteer", "Counseling", "Community Programs"],
    about:
      "Immigrant Advocates Network is a collaborative effort by leading immigrant rights organizations that provide free online tools to increase access to justice for low-income immigrants.",
    does:
      "Provides an interactive and searchable legal services directory that helps users find nearby immigration legal providers.",
    contact: "support@immigrationadvocates.org",
    link: "https://www.immigrationadvocates.org/legaldirectory/",
  },
  {
    title: "ILRC Red Card Ordering",
    category: ["Legal", "Education", "Community Programs"],
    about:
      "The Immigrant Legal Resource Center provides educational resources that help immigrants understand their constitutional rights.",
    does:
      "Allows individuals and organizations to print or order Red Cards explaining basic constitutional rights during encounters with immigration authorities.",
    contact: "support@immigrationadvocates.org",
    link: "https://www.ilrc.org/redcards",
  },
  {
    title: "Asian Counseling and Referral Service (ACRS) Immigration Assistance",
    category: ["Legal", "Counseling", "Community Programs"],
    about:
      "ACRS is a nationally recognized nonprofit serving Asian American, Pacific Islander, immigrant, refugee, and underserved communities in King County.",
    does:
      "Provides low-cost legal services and resources for citizenship, DACA, permanent residency, and family petitions.",
    contact: "(206) 695-7600",
    link: "https://acrs.org/services/citizenship-and-immigration-assistance/",
  },
  {
    title: "Asian Bar Association of Washington Legal Clinic",
    category: ["Legal", "Volunteer", "Community Programs"],
    about:
      "A nonprofit organization promoting justice, diversity, and professional excellence while focusing on the legal needs of the Asian Pacific community.",
    does:
      "Offers free legal advice clinics staffed by volunteer attorneys who answer questions about family law, housing, employment, and immigration.",
    contact: "legalclinics@abaw.org",
    link: "https://www.abaw.org/Legal-Clinics",
  },
  {
    title: "API Chaya Support Services",
    category: ["Legal", "Counseling", "Community Programs", "Mentorship"],
    about:
      "API Chaya supports Asian, South Asian, and Pacific Islander survivors of domestic violence, sexual assault, and human trafficking.",
    does:
      "Provides confidential support, advocacy, safety planning, and community education for survivors.",
    contact: "1-877-922-4292",
    link: "https://www.apichaya.org/get-help",
  },
  {
    title: "Northwest Immigrant Rights Project (NWIRP)",
    category: ["Legal", "Volunteer", "Community Programs"],
    about:
      "A nonprofit legal services organization dedicated to defending the rights of immigrants and refugees.",
    does:
      "Provides free and low-cost legal assistance for deportation defense, asylum, and immigration benefits.",
    contact: "(206) 587-4009",
    link: "https://www.nwirp.org/",
  },
  {
    title: "Asian Bar Association of Washington",
    category: ["Legal", "Volunteer", "Mentorship", "Community Programs"],
    about:
      "A nonprofit organization promoting justice and professional excellence in the legal field for Asian Pacific American communities.",
    does:
      "Provides networking, legal resources, community advocacy, and professional development opportunities.",
    contact: "(253) 383-3951",
    link: "https://abaw.org/",
  },
  {
    title: "Tacoma Community House",
    category: ["Legal", "Education", "Community Programs", "Mentorship"],
    about:
      "A multi-service organization empowering immigrants, refugees, and low-income community members.",
    does:
      "Provides immigration legal services, adult education programs, and employment support.",
    contact: "(253) 383-3951",
    link: "https://www.tacomacommunityhouse.org/",
  },
  {
    title: "Seattle Public Library Basic Skills Programs",
    category: ["Education", "Volunteer", "Mentorship"],
    about:
      "The Seattle Public Library provides free learning programs that strengthen literacy and digital skills.",
    does:
      "Offers ESL classes, conversation circles, and tutoring for adults preparing for GED or improving English and math skills.",
    contact: "206-386-4636",
    link: "https://www.spl.org/programs-and-services/learning/basic-skills-for-adult-learners",
  },
  {
    title: "King County Library System English Language Learning",
    category: ["Education", "Volunteer", "Mentorship"],
    about:
      "KCLS provides community-centered educational services across King County libraries.",
    does:
      "Offers free English Language Learning classes online and in person taught by experienced instructors.",
    contact: "(425) 462-9600",
    link: "https://kcls.org/adult-learners/#english",
  },
  {
    title: "Kandelia College and Career Programs",
    category: ["Education", "Career", "Mentorship", "Financial Aid"],
    about:
      "A nonprofit focused on helping immigrant and refugee communities transition successfully into education and careers.",
    does:
      "Provides GED preparation, financial aid workshops, and career coaching programs.",
    contact: "(206) 816-3686",
    link: "https://www.kandelia.org/",
  },
  {
    title: "CAPAA Educational Opportunity Advocacy",
    category: ["Education", "Volunteer", "Community Programs"],
    about:
      "The Washington State Commission on Asian Pacific American Affairs advises the governor on issues affecting Asian Pacific Americans.",
    does:
      "Advocates for policies that address educational opportunity gaps for Asian Pacific American students.",
    contact: "(360) 725-5667",
    link: "https://capaa.wa.gov/",
  },
  {
    title: "Refugee Women’s Alliance (ReWA)",
    category: ["Education", "Counseling", "Community Programs"],
    about:
      "A nationally recognized nonprofit serving refugee and immigrant women and families.",
    does: "Offers ESL classes, tutoring, youth programs, and employment assistance.",
    contact: "(206) 721-0243",
    link: "https://www.rewa.org/",
  },
  {
    title: "Denise Louie Education Center",
    category: ["Education", "Volunteer", "Community Programs"],
    about:
      "A nonprofit providing culturally responsive early childhood education to immigrant communities.",
    does:
      "Offers Head Start, preschool, and early childhood programs for children from birth to five.",
    contact: "(206) 767-4999",
    link: "https://deniselouie.org/",
  },
  {
    title: "Filipino Community of Seattle Youth Programs",
    category: ["Education", "Mentorship", "Volunteer", "Community Programs"],
    about:
      "The Filipino Community of Seattle supports Filipino and broader communities with educational and cultural programs.",
    does: "Provides tutoring, mentorship, and youth development programs.",
    contact: "(206) 722-9200",
    link: "https://www.filcommsea.org/youth-development",
  },

  // --- Culture Section ---
  {
    title: "Seattle Japanese Garden",
    category: ["Culture", "Volunteer", "Community Programs"],
    about: "A traditional Japanese strolling garden located within Washington Park Arboretum.",
    does:
      "Hosts cultural programs, seasonal events, and educational tours about Japanese garden design and culture.",
    contact: "(206) 684-4725",
    link: "https://www.seattlejapanesegarden.org/",
  },
  {
    title: "Seattle Buddhist Temple Bon Odori Festival",
    category: ["Culture", "Volunteer", "Community Programs"],
    about: "A major Buddhist temple serving the Japanese American community in Seattle.",
    does:
      "Hosts the annual Bon Odori Festival with traditional dancing, food, music, and cultural celebration.",
    contact: "(206) 622-4293",
    link: "https://seattlebetsuin.org/",
  },
  {
    title: "Vietnamese Cultural Center",
    category: ["Culture", "Volunteer", "Community Programs"],
    about:
      "A nonprofit organization dedicated to preserving Vietnamese culture and heritage in the Seattle area.",
    does: "Hosts cultural classes, holiday celebrations, and community events.",
    contact: "vietnamese.cultural.center.wa@gmail.com",
    link: "https://vietnameseculturalctr.squarespace.com/",
  },

  // --- Career Section ---
{
  title: "Friends of Little Saigon Small Business Fair",
  category: ["Career", "Volunteer", "Community Programs", "Mentorship"],
  about:
    "Friends of Little Saigon works to preserve and uplift Vietnamese and Southeast Asian communities.",
  does: "Hosts resource fairs offering small business support and guidance.",
  contact: "(253) 245-9341",
  link: "https://flsseattle.org/what-we-do/small-business/",
},
{
  title: "ACRS Employment and Training Services",
  category: ["Career", "Volunteer", "Mentorship", "Community Programs"],
  about: "ACRS provides social services and workforce programs for immigrant communities.",
  does:
    "Offers job readiness training, vocational ESL, and computer training for job seekers.",
  contact: "(206) 695-7600",
  link: "https://acrs.org/services/employment-and-training-services/",
},
{
  title: "ReWA Employment Training",
  category: ["Career", "Volunteer", "Mentorship", "Community Programs"],
  about: "ReWA provides multicultural services supporting refugee and immigrant families.",
  does: "Offers vocational ESL, job readiness classes, and employment support.",
  contact: "(206) 721-0243",
  link: "https://www.rewa.org/services/employment-and-vocational-training/",
},
{
  title: "Seattle Goodwill Job Training",
  category: ["Career", "Volunteer", "Mentorship", "Community Programs"],
  about: "Seattle Goodwill provides job training and employment services.",
  does: "Offers free classes, career advising, and skills training to help individuals find employment.",
  contact: "(206) 329-1000",
  link: "https://evergreengoodwill.org/",
},
{
  title: "Washington Small Business Development Center",
  category: ["Career", "Volunteer", "Mentorship", "Financial Aid", "Community Programs"],
  about:
    "A statewide network of advisors supporting small businesses and entrepreneurs.",
  does: "Provides free business advising for starting and growing businesses.",
  contact: "(509) 358-7765",
  link: "https://wsbdc.org/",
},
{
  title: "Greater Seattle Chinese Chamber of Commerce",
  category: ["Career", "Volunteer", "Community Programs", "Mentorship"],
  about:
    "A nonprofit supporting economic growth and cultural understanding between the U.S. and China.",
  does: "Provides networking events, advocacy, and resources for Chinese American businesses.",
  contact: "info@seattlechinesechamber.org",
  link: "https://www.seattlechinesechamber.org/",
},
{
  title: "Ventures Small Business Training",
  category: ["Career", "Volunteer", "Mentorship", "Financial Aid", "Community Programs"],
  about:
    "Ventures helps low-income entrepreneurs start and grow businesses.",
  does: "Provides business classes, coaching, and micro-lending opportunities.",
  contact: "(206) 352-1750",
  link: "https://www.venturesnonprofit.org/",
},

// --- Health Section ---
{
  title: "International Community Health Services",
  category: ["Health", "Counseling", "Volunteer", "Community Programs"],
  about:
    "A Federally Qualified Health Center providing culturally responsive healthcare services.",
  does:
    "Offers medical, dental, behavioral health, and traditional Chinese medicine services.",
  contact: "(206) 788-3700",
  link: "https://www.ichs.com/",
},
{
  title: "Sea Mar Community Health Centers",
  category: ["Health", "Counseling", "Volunteer", "Community Programs"],
  about:
    "A nonprofit providing comprehensive health and social services across Washington.",
  does: "Offers medical care, dental services, behavioral health care, and substance use treatment.",
  contact: "(206) 763-5240",
  link: "https://www.seamar.org/",
},
{
  title: "ACRS Behavioral Health Services",
  category: ["Health", "Counseling", "Volunteer", "Community Programs"],
  about: "ACRS provides culturally responsive behavioral health services.",
  does: "Offers counseling, substance use treatment, and mental health services.",
  contact: "(206) 695-7600",
  link: "https://acrs.org/services/behavioral-health-and-wellness/",
},
{
  title: "Pacific Islander Health Board of Washington",
  category: ["Health", "Counseling", "Volunteer", "Community Programs"],
  about:
    "A community-led organization dedicated to improving the health of Pacific Islander communities.",
  does: "Provides health education, advocacy, and outreach programs.",
  contact: "info@pihealthboard.org",
  link: "https://www.pihealthboard.org/",
},
{
  title: "Kin On Health Care",
  category: ["Health", "Counseling", "Volunteer", "Community Programs"],
  about:
    "A nonprofit providing culturally appropriate healthcare services for Asian seniors.",
  does: "Offers assisted living, skilled nursing, and wellness programs.",
  contact: "(206) 721-3402",
  link: "https://kinon.org/",
},
{
  title: "NAMI Washington Mental Health Outreach",
  category: ["Health", "Counseling", "Volunteer", "Community Programs"],
  about: "The Washington branch of the National Alliance on Mental Illness.",
  does: "Provides support groups, education programs, and advocacy for mental health awareness.",
  contact: "(206) 325-1793",
  link: "https://www.namiwa.org/",
},
{
  title: "Korean Women's Association",
  category: ["Health", "Counseling", "Volunteer", "Community Programs", "Mentorship"],
  about:
    "A nonprofit providing multilingual human services to immigrant communities.",
  does: "Offers senior care, domestic violence support, and community assistance programs.",
  contact: "(253) 535-4202",
  link: "https://www.kwacares.org/",
},

// --- Culture Section (additional) ---
{
  title: "Seattle Art Museum Lunar New Year Festival",
  category: ["Culture", "Volunteer", "Community Programs"],
  about:
    "The Seattle Art Museum connects art to communities through exhibitions and cultural programs.",
  does:
    "Hosts annual cultural celebrations including Lunar New Year family festivals.",
  contact: "(206) 654-3100",
  link: "https://www.seattleartmuseum.org/",
},
{
  title: "Seattle Center Festál Cultural Festivals",
  category: ["Culture", "Volunteer", "Community Programs"],
  about:
    "Seattle Center partners with cultural organizations across the region to celebrate global cultures through the Festál cultural festival series.",
  does:
    "Hosts more than 25 free cultural festivals each year featuring music, dance, art, film, and food representing cultures from around the world.",
  contact: "Seattle Center",
  link: "https://seattlecenter.com/events/featured-events/festal",
},
{
  title: "Panda Fest Asian Food Festival",
  category: ["Culture", "Volunteer", "Community Programs"],
  about: "Panda Fest organizes large outdoor Asian cultural and food festivals.",
  does: "Hosts Asian food markets, night markets, and cultural performances.",
  contact: "Website contact form",
  link: "https://www.pandafests.com/",
}

];


export default function ResourcesPage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeType, setActiveType] = useState("All")
  const [favorites, setFavorites] = useState<string[]>([])

  const categories = ["All", "Legal", "Education", "Career", "Health", "Culture"]
  const types = ["All", "Volunteer", "Counseling", "Financial Aid", "Community Programs", "Mentorship"]

  const favoriteSet = useMemo(() => new Set(favorites), [favorites])

  // Loading favorites from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem(FAVORITES_STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setFavorites(parsed)
        }
      } catch {
        // ignore invalid data
      }
    }
  }, [])

  // Saving favorites to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (title: string) => {
    setFavorites((prev) =>
      prev.includes(title) ? prev.filter((fav) => fav !== title) : [...prev, title]
    )
  }

  const searchTerm = search.trim().toLowerCase()

  // Filter resources based on category, type, and search term
  const filteredResources = resources.filter((r) => {
    const matchesSearch =
      !searchTerm ||
      r.title.toLowerCase().includes(searchTerm) ||
      r.about.toLowerCase().includes(searchTerm)

    if (!matchesSearch) return false

    const matchesCategory = activeCategory === "All" || r.category.includes(activeCategory)
    const matchesType = activeType === "All" || r.category.includes(activeType)

    return matchesCategory && matchesType
  })

  return (
    <div className="min-h-screen flex flex-col">

      
      {/* PAGE TITLE */}
       <section className="py-32">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-10">
          <div className="mx-auto max-w-[92rem]">
            <div className="grid w-full grid-cols-[1fr_minmax(0,44rem)_1fr] items-center gap-6">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/doodlered.png"
                  alt="Red doodle accent"
                  className="h-28 w-auto object-contain md:h-36"
                />
              </div>
              <div className="mx-auto w-full text-center">
                <h2 className="text-balance text-5xl font-bold md:text-6xl">
                  Highlighted Resources
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-balance text-xl text-base-content/70 md:text-2xl">
                  From our large database of resources, here are some of the most popular and impactful organizations that our community has found helpful. Explore these highlighted resources to find support, education, and connection.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/yellowStarish.png"
                  alt="Yellow doodle accent"
                  className="h-32 w-auto object-contain md:h-40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto w-full max-w-[92rem] px-4 md:px-8 lg:px-10">
          <ul className="list rounded-box bg-base-100 shadow-md">
            <li className="p-4 pb-2 text-xs tracking-wide opacity-60">
              Top Three Resources
            </li>

            {topResources.map((resource) => (
              <li key={resource.rank} className="list-row">
                <div className="tabular-nums text-4xl font-thin opacity-30">
                  {resource.rank}
                </div>
                <div>
                  <img
                    className="size-14 rounded-box object-cover"
                    src={resource.imageSrc}
                    alt={resource.title}
                  />
                </div>
                <div className="list-col-grow">
                  <div className="text-lg font-semibold">{resource.title}</div>
                  <div className="text-xs font-semibold uppercase opacity-60">
                    {resource.subtitle} • {resource.category}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-base-content/75">
                    <span className="font-medium text-base-content">About:</span>{" "}
                    {resource.about}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-base-content/75">
                    <span className="font-medium text-base-content">What it does:</span>{" "}
                    {resource.details}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-base-content/75">
                    <span className="font-medium text-base-content">Contact:</span>{" "}
                    {resource.contact}
                  </p>
                </div>
                <a
                  href="/resources"
                  className="btn btn-square btn-ghost"
                  aria-label={`View ${resource.title}`}
                >
                  <svg
                    className="size-[1.2em]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M6 3L20 12 6 21 6 3z"></path>
                    </g>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

       <section className="py-32">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-10">
          <div className="mx-auto max-w-[92rem]">
            <div className="grid w-full grid-cols-[1fr_minmax(0,44rem)_1fr] items-center gap-6">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/yellowStarish.png"
                  alt="Yellow doodle accent"
                  className="h-28 w-auto object-contain md:h-36"
                />
              </div>
              <div className="mx-auto w-full text-center">
                <h2 className="text-balance text-5xl font-bold md:text-6xl">
                  Resource Hub
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-balance text-xl text-base-content/70 md:text-2xl">
                  A curated collection of organizations, tools, and programs that support immigrant communities and promote education, legal access, and cultural awareness.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/doodlered.png"
                  alt="Red doodle accent"
                  className="h-32 w-auto object-contain md:h-40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SEARCH + FILTERS BACKGROUND */}
      <div
        className="flex flex-col items-center justify-center p-8 gap-4"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6983438/pexels-photo-6983438.jpeg')",
          backgroundSize: "cover",       // cover the container without repeating
          backgroundPosition: "center",  // center the image
          backgroundRepeat: "no-repeat", // prevent tiling
          backgroundAttachment: "fixed",  // keep it fixed while scrolling
          minHeight: "400px",            
          width: "100%",
        }}
          >

      {/* RESOURCE SEARCH */}
      <div className="flex items-center border rounded-full px-6 py-3 w-full max-w-6xl bg-white shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-500 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-lg"
        />
      </div>

      {/* FILTERS */}
      <div className="flex flex-col items-center gap-6 p-4">
        {/* Category Filter */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-semibold text-lg text-white">Categories</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full border min-w-[120px] text-center transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-[#ffc15e] text-black border-[#ffc15e]"
                    : "bg-white text-black border-gray-300 hover:bg-[#ffc15e]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-semibold text-lg text-white">Types</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-full border min-w-[120px] text-center transition-colors duration-200 ${
                  activeType === type
                    ? "bg-[#ffc15e] text-black border-[#ffc15e]"
                    : "bg-white text-black border-gray-300 hover:bg-[#ffc15e]/40"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 bg-black">

      {/* RESOURCE CARDS */}
      <div
        className="resources-container p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 bg-cover bg-center"
      >
        {filteredResources.map((r) => {
          const isFavorited = favoriteSet.has(r.title)
          return (
            <div key={r.title} className="card relative shadow-xl p-5 rounded-lg text-white bg-[#6A0909]/90 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  {r.category.join(", ")}
                </span>
                <button
                  type="button"
                  onClick={() => toggleFavorite(r.title)}
                  aria-pressed={isFavorited}
                  aria-label={`${isFavorited ? "Unsave" : "Save"} ${r.title}`}
                  className={`ml-auto rounded-full p-2 transition focus-visible:ring focus-visible:ring-white/70 ${
                    isFavorited ? "bg-white/10 text-pink-300" : "bg-white/10 text-white/70 hover:text-white"
                  }`}
                >
                  <HeartIcon className="h-5 w-5" />
                </button>
              </div>
              <h3 className="resource-title text-xl font-semibold mb-2">{r.title}</h3>

              <div className="resource-section mb-2">
                <h4 className="font-semibold">About the Organization</h4>
                <p>{r.about}</p>
              </div>

              <div className="resource-section mb-2">
                <h4 className="font-semibold">What the Resource Does</h4>
                <p>{r.does}</p>
              </div>

              <div className="resource-section mb-2">
                <h4 className="font-semibold">Contact Information</h4>
                <p>{r.contact}</p>
              </div>

              <Link href={r.link} target="_blank" className="btn btn-primary mt-2">
                VIEW RESOURCE →
              </Link>
            </div>
          )
        })}
          {filteredResources.length === 0 && (
            <p className="text-center text-gray-500">No resources found.</p>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}
