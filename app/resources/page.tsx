"use client"
import React, { useState } from "react"
import Link from "next/link"

const resources = [

{
title: "Immigration Advocates Network Legal Services Directory",
category: "Legal",
about:
"Immigrant Advocates Network is a collaborative effort by leading immigrant rights organizations that provide free online tools to increase access to justice for low-income immigrants.",
does:
"Provides an interactive and searchable legal services directory that helps users find nearby immigration legal providers.",
contact: "support@immigrationadvocates.org",
link: "https://www.immigrationadvocates.org/legaldirectory/",
},

{
title: "ILRC Red Card Ordering",
category: "Legal",
about:
"The Immigrant Legal Resource Center provides educational resources that help immigrants understand their constitutional rights.",
does:
"Allows individuals and organizations to print or order Red Cards explaining basic constitutional rights during encounters with immigration authorities.",
contact: "support@immigrationadvocates.org",
link: "https://www.ilrc.org/redcards",
},

{
title: "Asian Counseling and Referral Service (ACRS) Immigration Assistance",
category: "Legal",
about:
"ACRS is a nationally recognized nonprofit serving Asian American, Pacific Islander, immigrant, refugee, and underserved communities in King County.",
does:
"Provides low-cost legal services and resources for citizenship, DACA, permanent residency, and family petitions.",
contact: "(206) 695-7600",
link: "https://acrs.org/services/citizenship-and-immigration-assistance/",
},

{
title: "Asian Bar Association of Washington Legal Clinic",
category: "Legal",
about:
"A nonprofit organization promoting justice, diversity, and professional excellence while focusing on the legal needs of the Asian Pacific community.",
does:
"Offers free legal advice clinics staffed by volunteer attorneys who answer questions about family law, housing, employment, and immigration.",
contact: "legalclinics@abaw.org",
link: "https://www.abaw.org/Legal-Clinics",
},

{
title: "API Chaya Support Services",
category: "Legal",
about:
"API Chaya supports Asian, South Asian, and Pacific Islander survivors of domestic violence, sexual assault, and human trafficking.",
does:
"Provides confidential support, advocacy, safety planning, and community education for survivors.",
contact: "1-877-922-4292",
link: "https://www.apichaya.org/get-help",
},

{
title: "Northwest Immigrant Rights Project (NWIRP)",
category: "Legal",
about:
"A nonprofit legal services organization dedicated to defending the rights of immigrants and refugees.",
does:
"Provides free and low-cost legal assistance for deportation defense, asylum, and immigration benefits.",
contact: "(206) 587-4009",
link: "https://www.nwirp.org/",
},

{
title: "Asian Bar Association of Washington",
category: "Legal",
about:
"A nonprofit organization promoting justice and professional excellence in the legal field for Asian Pacific American communities.",
does:
"Provides networking, legal resources, community advocacy, and professional development opportunities.",
contact: "(253) 383-3951",
link: "https://abaw.org/",
},

{
title: "Tacoma Community House",
category: "Legal",
about:
"A multi-service organization empowering immigrants, refugees, and low-income community members.",
does:
"Provides immigration legal services, adult education programs, and employment support.",
contact: "(253) 383-3951",
link: "https://www.tacomacommunityhouse.org/",
},

{
title: "Seattle Public Library Basic Skills Programs",
category: "Education",
about:
"The Seattle Public Library provides free learning programs that strengthen literacy and digital skills.",
does:
"Offers ESL classes, conversation circles, and tutoring for adults preparing for GED or improving English and math skills.",
contact: "206-386-4636",
link: "https://www.spl.org/programs-and-services/learning/basic-skills-for-adult-learners",
},

{
title: "King County Library System English Language Learning",
category: "Education",
about:
"KCLS provides community-centered educational services across King County libraries.",
does:
"Offers free English Language Learning classes online and in person taught by experienced instructors.",
contact: "(425) 462-9600",
link: "https://kcls.org/adult-learners/#english",
},

{
title: "Kandelia College and Career Programs",
category: "Education",
about:
"A nonprofit focused on helping immigrant and refugee communities transition successfully into education and careers.",
does:
"Provides GED preparation, financial aid workshops, and career coaching programs.",
contact: "(206) 816-3686",
link: "https://www.kandelia.org/",
},

{
title: "CAPAA Educational Opportunity Advocacy",
category: "Education",
about:
"The Washington State Commission on Asian Pacific American Affairs advises the governor on issues affecting Asian Pacific Americans.",
does:
"Advocates for policies that address educational opportunity gaps for Asian Pacific American students.",
contact: "(360) 725-5667",
link: "https://capaa.wa.gov/",
},

{
title: "Refugee Women’s Alliance (ReWA)",
category: "Education",
about:
"A nationally recognized nonprofit serving refugee and immigrant women and families.",
does:
"Offers ESL classes, tutoring, youth programs, and employment assistance.",
contact: "(206) 721-0243",
link: "https://www.rewa.org/",
},

{
title: "Denise Louie Education Center",
category: "Education",
about:
"A nonprofit providing culturally responsive early childhood education to immigrant communities.",
does:
"Offers Head Start, preschool, and early childhood programs for children from birth to five.",
contact: "(206) 767-4999",
link: "https://deniselouie.org/",
},

{
title: "Filipino Community of Seattle Youth Programs",
category: "Education",
about:
"The Filipino Community of Seattle supports Filipino and broader communities with educational and cultural programs.",
does:
"Provides tutoring, mentorship, and youth development programs.",
contact: "(206) 722-9200",
link: "https://www.filcommsea.org/youth-development",
},

{
title: "Seattle Center Festál Cultural Festivals",
category: "Culture",
about:
"Festál partners with Seattle Center to host free cultural festivals celebrating global communities.",
does:
"Hosts over 25 cultural festivals featuring music, dance, art, and food from cultures around the world.",
contact: "Seattle Center",
link: "https://seattlecenter.com/events/featured-events/festal",
},

{
title: "Seattle Japanese Garden",
category: "Culture",
about:
"A traditional Japanese strolling garden located within Washington Park Arboretum.",
does:
"Hosts cultural programs, seasonal events, and educational tours about Japanese garden design and culture.",
contact: "(206) 684-4725",
link: "https://www.seattlejapanesegarden.org/",
},

{
title: "Seattle Buddhist Temple Bon Odori Festival",
category: "Culture",
about:
"A major Buddhist temple serving the Japanese American community in Seattle.",
does:
"Hosts the annual Bon Odori Festival with traditional dancing, food, music, and cultural celebration.",
contact: "(206) 622-4293",
link: "https://seattlebetsuin.org/",
},

{
title: "Vietnamese Cultural Center",
category: "Culture",
about:
"A nonprofit organization dedicated to preserving Vietnamese culture and heritage in the Seattle area.",
does:
"Hosts cultural classes, holiday celebrations, and community events.",
contact: "vietnamese.cultural.center.wa@gmail.com",
link: "https://vietnameseculturalctr.squarespace.com/",
},

{
title: "Sulekha Cultural Events",
category: "Culture",
about:
"Sulekha is a community platform connecting people with cultural events and gatherings.",
does:
"Lists Indian concerts, festivals, and community cultural events across the United States.",
contact: "+1-512-231-9226",
link: "https://events.sulekha.com/",
},

{
title: "Korean Adoptee Family Foundation Events",
category: "Culture",
about:
"A nonprofit supporting Korean adoptees and their families through community programs.",
does:
"Organizes cultural workshops, social events, and heritage celebrations.",
contact: "koraff@koraff.org",
link: "https://www.koraff.org/event",
},

{
title: "Filipino Community Center Cultural Events",
category: "Culture",
about:
"The Filipino Community of Seattle hosts programs and events for Filipino and other communities.",
does:
"Provides cultural celebrations, community lunches, and public gatherings.",
contact: "(206) 722-9200",
link: "https://www.filcommsea.org/upcoming-events",
},

{
title: "Seattle Chinese Garden",
category: "Culture",
about:
"A public garden project preserving Sichuan-style Chinese garden traditions.",
does:
"Hosts festivals, cultural workshops, and Tai Chi classes.",
contact: "(206) 934-5219",
link: "https://www.seattlechinesegarden.org/",
},

{
title: "Panda Fest Asian Food Festival",
category: "Culture",
about:
"Panda Fest organizes large outdoor Asian cultural and food festivals.",
does:
"Hosts Asian food markets, night markets, and cultural performances.",
contact: "Website contact form",
link: "https://www.pandafests.com/",
},

{
title: "Seattle Art Museum Lunar New Year Festival",
category: "Culture",
about:
"The Seattle Art Museum connects art to communities through exhibitions and cultural programs.",
does:
"Hosts annual cultural celebrations including Lunar New Year family festivals.",
contact: "(206) 654-3100",
link: "https://www.seattleartmuseum.org/",
},

{
  title: "Seattle Center Festál Cultural Festivals",
  category: "Culture",
  about:
    "Seattle Center partners with cultural organizations across the region to celebrate global cultures through the Festál cultural festival series.",
  does:
    "Hosts more than 25 free cultural festivals each year featuring music, dance, art, film, and food representing cultures from around the world.",
  contact: "Seattle Center",
  link: "https://seattlecenter.com/events/featured-events/festal",
},

{
title: "Friends of Little Saigon Small Business Fair",
category: "Career",
about:
"Friends of Little Saigon works to preserve and uplift Vietnamese and Southeast Asian communities.",
does:
"Hosts resource fairs offering small business support and guidance.",
contact: "(253) 245-9341",
link: "https://flsseattle.org/what-we-do/small-business/",
},

{
title: "ACRS Employment and Training Services",
category: "Career",
about:
"ACRS provides social services and workforce programs for immigrant communities.",
does:
"Offers job readiness training, vocational ESL, and computer training for job seekers.",
contact: "(206) 695-7600",
link: "https://acrs.org/services/employment-and-training-services/",
},

{
title: "ReWA Employment Training",
category: "Career",
about:
"ReWA provides multicultural services supporting refugee and immigrant families.",
does:
"Offers vocational ESL, job readiness classes, and employment support.",
contact: "(206) 721-0243",
link: "https://www.rewa.org/services/employment-and-vocational-training/",
},

{
title: "Seattle Goodwill Job Training",
category: "Career",
about:
"Seattle Goodwill provides job training and employment services.",
does:
"Offers free classes, career advising, and skills training to help individuals find employment.",
contact: "(206) 329-1000",
link: "https://evergreengoodwill.org/",
},

{
title: "Washington Small Business Development Center",
category: "Career",
about:
"A statewide network of advisors supporting small businesses and entrepreneurs.",
does:
"Provides free business advising for starting and growing businesses.",
contact: "(509) 358-7765",
link: "https://wsbdc.org/",
},

{
title: "Greater Seattle Chinese Chamber of Commerce",
category: "Career",
about:
"A nonprofit supporting economic growth and cultural understanding between the U.S. and China.",
does:
"Provides networking events, advocacy, and resources for Chinese American businesses.",
contact: "info@seattlechinesechamber.org",
link: "https://www.seattlechinesechamber.org/",
},

{
title: "Ventures Small Business Training",
category: "Career",
about:
"Ventures helps low-income entrepreneurs start and grow businesses.",
does:
"Provides business classes, coaching, and micro-lending opportunities.",
contact: "(206) 352-1750",
link: "https://www.venturesnonprofit.org/",
},

{
title: "Seattle Chinatown International District Development Authority",
category: "Career",
about:
"A community development organization supporting Seattle's Chinatown-International District.",
does:
"Provides housing programs, economic development initiatives, and small business support.",
contact: "(206) 624-8977",
link: "https://scidpda.org/",
},

{
title: "International Community Health Services",
category: "Health",
about:
"A Federally Qualified Health Center providing culturally responsive healthcare services.",
does:
"Offers medical, dental, behavioral health, and traditional Chinese medicine services.",
contact: "(206) 788-3700",
link: "https://www.ichs.com/",
},

{
title: "Sea Mar Community Health Centers",
category: "Health",
about:
"A nonprofit providing comprehensive health and social services across Washington.",
does:
"Offers medical care, dental services, behavioral health care, and substance use treatment.",
contact: "(206) 763-5240",
link: "https://www.seamar.org/",
},

{
title: "ACRS Behavioral Health Services",
category: "Health",
about:
"ACRS provides culturally responsive behavioral health services.",
does:
"Offers counseling, substance use treatment, and mental health services.",
contact: "(206) 695-7600",
link: "https://acrs.org/services/behavioral-health-and-wellness/",
},

{
title: "Pacific Islander Health Board of Washington",
category: "Health",
about:
"A community-led organization dedicated to improving the health of Pacific Islander communities.",
does:
"Provides health education, advocacy, and outreach programs.",
contact: "info@pihealthboard.org",
link: "https://www.pihealthboard.org/",
},

{
title: "Kin On Health Care",
category: "Health",
about:
"A nonprofit providing culturally appropriate healthcare services for Asian seniors.",
does:
"Offers assisted living, skilled nursing, and wellness programs.",
contact: "(206) 721-3402",
link: "https://kinon.org/",
},

{
title: "NAMI Washington Mental Health Outreach",
category: "Health",
about:
"The Washington branch of the National Alliance on Mental Illness.",
does:
"Provides support groups, education programs, and advocacy for mental health awareness.",
contact: "(206) 325-1793",
link: "https://www.namiwa.org/",
},

{
title: "Korean Women's Association",
category: "Health",
about:
"A nonprofit providing multilingual human services to immigrant communities.",
does:
"Offers senior care, domestic violence support, and community assistance programs.",
contact: "(253) 535-4202",
link: "https://www.kwacares.org/",
},

]

export default function ResourcesPage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...new Set(resources.map((r) => r.category))]

  const filteredResources = resources.filter((r) => {
    const matchesCategory =
      activeCategory === "All" || r.category === activeCategory
    const matchesSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.about.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen flex flex-col">

      {/* PAGE TITLE */}
      <section className="resources-hero p-6 bg-gray-50 text-center">
        <h1 className="text-3xl font-bold mb-2">Resource Hub</h1>
        <p>
          A curated collection of organizations, tools, and programs that support immigrant communities and promote education, legal access, and cultural awareness.
        </p>
      </section>

      {/* SEARCH BAR */}
      <div className="resources-search p-4 flex justify-center">
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input border rounded p-2 w-full max-w-md"
        />
      </div>

      {/* CATEGORY FILTERS */}
      <div className="resource-filters flex justify-center space-x-2 p-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`filter-btn px-3 py-1 rounded border ${
              activeCategory === cat ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* RESOURCE CARDS */}
      <div className="resources-container p-4 flex-1 overflow-y-auto space-y-4 max-h-[600px]">
        {filteredResources.map((r) => (
          <div key={r.title} className="card shadow-lg p-4 bg-white rounded">
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

            <Link
              href={r.link}
              target="_blank"
              className="btn btn-primary mt-2"
            >
              VIEW RESOURCE →
            </Link>
          </div>
        ))}
        {filteredResources.length === 0 && (
          <p className="text-center text-gray-500">No resources found.</p>
        )}
      </div>

      {/* FOOTER */}
      <footer className="site-footer bg-gray-100 p-4 text-center mt-4">
        <p>© 2026 PulseAsia</p>
        <p>Empowering communities through education, access to resources, and cultural awareness.</p>
      </footer>
    </div>
  )
}
