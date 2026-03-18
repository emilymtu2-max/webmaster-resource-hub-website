"use client"
import React, { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  Search,
  SlidersHorizontal,
  Bookmark,
  BookOpen,
  Briefcase,
  HeartPulse,
  Globe,
  Scale,
  HelpingHand,
  MessageCircle,
  CreditCard,
  Users,
  Heart,
} from "lucide-react"
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
//  HeartIcon component 
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
},

{
  title: "Helping Link",
  category: ["Education", "Community Programs"],
  about: "Helping Link / Một Dấu Nối is a community organization in Renton, Washington focused on empowering Vietnamese Americans through education and social support services.",
  does: "Provides ESL (English as a Second Language), citizenship preparation, computer education classes, cultural programming, information referrals, and community resources to help Vietnamese immigrants and refugees succeed in the U.S. and strengthen cultural connection.",
  contact: "info@helpinglink.org",
  link: "https://www.helpinglink.org/",
},

{
  title: "Washington State Coalition for Language Access",
  category: ["Education", "Legal", "Community Programs"],
  about: "The Washington State Coalition for Language Access (WASCLA) is a statewide advocacy organization promoting equity in communication for residents with limited English proficiency and Deaf or Hard of Hearing individuals.",
  does: "Works to eliminate language barriers to essential services by providing advocacy, technical assistance, training, collaboration with agencies, and resources like interpreter/translator directories and language access toolkits.",
  contact: "wascla.lep@gmail.com",
  link: "https://wascla.org/",
},

{
  title: "Thriving Asians",
  category: ["Education", "Mentorship", "Community Programs"],
  about: "Thriving Asians is an organization focused on cultivating youth leadership in Asian and Asian American communities, particularly around mental health, resilience, and civic engagement.",
  does: "Supports leadership development opportunities, mentorship, workshops, and community initiatives that empower Asian youth to advocate for mental health, equity, and well-being.",
  contact: "info@thrivingasians.org",
  link: "https://www.thrivingasians.org/",
},

{
  title: "Bhutanese Community Resource Center",
  category: ["Culture", "Community Programs"],
  about: "Bhutanese Community Resource Center supports Bhutanese refugees in Washington by providing resettlement assistance and cultural preservation programs.",
  does: "Offers community support, advocacy, English literacy, job readiness services, cultural events, youth engagement, and resource referrals.",
  contact: "bcrcusa@gmail.com",
  link: "https://www.facebook.com/bcrcusa/",
},

{
  title: "Bainbridge Island Japanese American Community (BIJAC)",
  category: ["Culture", "Education", "Community Programs"],
  about: "BIJAC preserves and shares the history and culture of Japanese Americans from Bainbridge Island, with a focus on community memory and education.",
  does: "Runs educational outreach, oral history projects, cultural events (e.g., Mochi Tsuki), and supports the Bainbridge Island Japanese American Exclusion Memorial.",
  contact: "info@bijac.org",
  link: "https://bijac.org/",
},

{
  title: "Filipino Youth Activities Drill Team",
  category: ["Culture", "Youth Programs", "Community Programs"],
  about: "The Filipino Youth Activities (FYA) Drill Team is the only Filipino-American drill team in the U.S., based in Seattle, WA since 1959.",
  does: "Promotes cultural heritage, discipline, and leadership through performances and community engagement.",
  contact: "FYADrillTeam@gmail.com",
  link: "https://www.facebook.com/FYADrillteam/",
},

{
  title: "India American Community Services (IACS)",
  category: ["Culture", "Community Programs"],
  about: "IACS promotes Indian culture, social cohesion, and educational opportunities within the Indian and Indo-American community in Western Washington.",
  does: "Hosts cultural, social, and educational programs to foster community identity and mutual understanding among diverse populations.",
  contact: "Contactus@iaww.org",
  link: "https://iacswa.org/",
},

{
  title: "Hmong Association of Washington",
  category: ["Culture", "Education", "Community Programs"],
  about: "Hmong Association of Washington preserves Hmong culture and promotes education and community cohesion for the Hmong American community.",
  does: "Provides cultural programming, youth and graduation events, and educational activities celebrating Hmong heritage.",
  contact: "hmong.of.washington@gmail.com",
  link: "https://www.hmongofwa.org/",
},

{
  title: "Wing Luke Asian Museum",
  category: ["Culture", "Education", "Community Programs"],
  about: "Wing Luke Museum is a Smithsonian-affiliated art and history museum focused on Asian American, Native Hawaiian, and Pacific Islander experiences.",
  does: "Hosts exhibitions, guided tours, public programs, and community events focused on art, history, heritage, and social equity.",
  contact: "visit@wingluke.org",
  link: "https://www.wingluke.org/",
},

{
  title: "Asian Service Center",
  category: ["Culture", "Career", "Community Programs"],
  about: "Asian Service Center supports Asian immigrant and refugee families through services that enhance economic stability and cultural connection.",
  does: "Offers employment support, housing assistance, and family strengthening services.",
  contact: "Robert.Ha@AsianServiceCenterWA.org",
  link: "https://www.asianservicecenterwa.org/",
},

{
  title: "Greater Seattle Chinese Chamber of Commerce",
  category: ["Career", "Mentorship", "Community Programs"],
  about: "Supports Chinese-owned businesses in the Seattle area by promoting economic development and community engagement.",
  does: "Provides networking events, business seminars, and advocacy to help entrepreneurs and professionals grow their careers.",
  contact: "info@seattlechinesechamber.org",
  link: "https://www.seattlechinesechamber.org/",
},

{
  title: "WAPI Community Services",
  category: ["Health", "Counseling", "Community Programs"],
  about: "Provides culturally competent health and social services for Asian and Pacific Islander communities.",
  does: "Offers mental health counseling, health education, and community support programs.",
  contact: "info@wapicommunity.org",
  link: "https://www.wapicommunity.org/",
},

{
  title: "National Asian American Pacific Islander Mental Health Association (NAAPIMHA)",
  category: ["Health", "Community Programs"],
  about: "Advocates for mental health equity for Asian American and Pacific Islander communities.",
  does: "Provides resources, policy advocacy, and community-based mental health programs.",
  contact: "https://www.naapimha.org/contact-8",
  link: "https://www.naapimha.org/",
},

{
  title: "South Asian Therapists.org",
  category: ["Health", "Counseling"],
  about: "Connects South Asian individuals with culturally competent mental health providers.",
  does: "Maintains a directory of therapists and offers tailored mental health resources.",
  contact: "info@southasiantherapists.org",
  link: "https://southasiantherapists.org/",
},

{
  title: "Filipino Mental Health Initiative of Hawaii",
  category: ["Health", "Community Programs"],
  about: "Focuses on raising awareness and providing support for mental health in the Filipino community.",
  does: "Offers educational workshops, community events, and outreach on mental health topics.",
  contact: "Instagram: @fmhi_hawaii",
  link: "https://www.instagram.com/fmhi_hawaii/",
},

{
  title: "Anise Health",
  category: ["Health", "Counseling"],
  about: "Provides accessible mental health care for Asian American communities.",
  does: "Offers online therapy, counseling, and culturally sensitive mental health resources.",
  contact: "info@anisehealth.co",
  link: "https://www.anisehealth.co/",
},

{
  title: "Pacific Asian Counseling Services",
  category: ["Health", "Counseling", "Community Programs"],
  about: "Provides mental health services to Asian and Pacific Islander communities in Los Angeles.",
  does: "Offers counseling, therapy, and community support programs.",
  contact: "info@pacsla.org",
  link: "https://pacsla.org/",
},

{
  title: "South Asian Public Health Association",
  category: ["Health", "Community Programs"],
  about: "Promotes public health awareness and research within South Asian communities.",
  does: "Provides networking, advocacy, and public health resources.",
  contact: "https://sapha.org/contact/",
  link: "https://sapha.org/",
},

{
  title: "Asian Mental Health Project",
  category: ["Health", "Community Programs"],
  about: "Raises awareness about mental health in Asian communities through education and advocacy.",
  does: "Provides resources, workshops, and campaigns to reduce stigma.",
  contact: "Instagram link",
  link: "https://www.asianmentalhealthproject.com/",
},

{
  title: "Yellow Chair Collective",
  category: ["Health", "Counseling"],
  about: "Provides mental health counseling with an emphasis on Asian American communities.",
  does: "Offers therapy, wellness workshops, and support services.",
  contact: "info@yellowchaircollective.com",
  link: "https://yellowchaircollective.com/",
},

{
  title: "Asian Mental Health Collective",
  category: ["Health", "Community Programs"],
  about: "Supports Asian American mental health through community engagement and education.",
  does: "Provides resources, workshops, and professional networking.",
  contact: "Contact form",
  link: "https://www.asianmhc.org/",
},

{
  title: "Asian American Federation",
  category: ["Health", "Community Programs"],
  about: "Works to improve health outcomes and social services for Asian American communities.",
  does: "Provides mental health resources and supports community programs.",
  contact: "info@aafederation.org",
  link: "https://mentalhealth.aafederation.org/#resourcesForProviders",
},

{
  title: "Mango Tree Counseling & Consulting",
  category: ["Health", "Counseling"],
  about: "Provides culturally competent mental health services for South Asian communities.",
  does: "Offers counseling, workshops, and consulting services.",
  contact: "associate@mangotreecc.com",
  link: "https://mangotreecc.com/",
},

{
  title: "Mental Health Association for Chinese Communities",
  category: ["Health", "Counseling", "Community Programs"],
  about: "Provides mental health services and advocacy for Chinese communities.",
  does: "Offers counseling, outreach, and educational programs.",
  contact: "info@mhacc-usa.org",
  link: "https://www.mhacc-usa.org/",
},

{
  title: "NAPAFASA",
  category: ["Health", "Community Programs"],
  about: "Promotes substance awareness and harm reduction in Asian Pacific American families.",
  does: "Provides education, resources, and support to reduce substance-related harm.",
  contact: "hello@napafasa.org",
  link: "https://napafasa.org/",
},

{
  title: "Asian & Pacific Islander American Health Forum",
  category: ["Health", "Community Programs"],
  about: "A national nonprofit advancing health equity for Asian American, Native Hawaiian, and Pacific Islander communities.",
  does: "Engages in policy advocacy, research, and partnerships to improve health outcomes.",
  contact: "info@apiahf.org",
  link: "https://www.apiahf.org/",
},
];


export default function ResourcesPage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeType, setActiveType] = useState("All")
  const [favorites, setFavorites] = useState<string[]>([])

  const categories = ["All", "Legal", "Education", "Career", "Health", "Culture", "Liked"]
  const types = ["All", "Volunteer", "Counseling", "Financial Aid", "Community Programs", "Mentorship"]

  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    const categoryFromUrl = params.get("category")
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl)
    }
  }, [categories])

  const categoryIconMap: Record<string, React.ElementType> = {
    All: Bookmark,
    Legal: Scale,
    Education: BookOpen,
    Career: Briefcase,
    Health: HeartPulse,
    Culture: Globe,
    Liked: Heart,

  }

  const typeIconMap: Record<string, React.ElementType> = {
    All: Users,
    Volunteer: HelpingHand,
    Counseling: MessageCircle,
    "Financial Aid": CreditCard,
    "Community Programs": Users,
    Mentorship: BookOpen,
  }

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

      const matchesCategory =
      activeCategory === "All"
      ? true
      : activeCategory === "Liked"
      ? favoriteSet.has(r.title)
      : r.category.includes(activeCategory)

      const matchesType =
      activeType === "All" || r.category.includes(activeType)

      return matchesCategory && matchesType
  })

  return (
    <div className="min-h-screen flex flex-col">
      
      
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
        <Search className="w-6 h-6 text-gray-500 mr-3" />
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
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-white" />
            <h3 className="font-semibold text-lg text-white">Categories</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const Icon = categoryIconMap[cat] || Bookmark
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border min-w-[120px] text-center transition-colors duration-200 ${
                    activeCategory === cat
                      ? "bg-[#ffc15e] text-black border-[#ffc15e]"
                      : "bg-white text-black border-gray-300 hover:bg-[#ffc15e]/40"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Type Filter */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-white" />
            <h3 className="font-semibold text-lg text-white">Types</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {types.map((type) => {
              const Icon = typeIconMap[type] || Users
              return (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border min-w-[120px] text-center transition-colors duration-200 ${
                    activeType === type
                      ? "bg-[#ffc15e] text-black border-[#ffc15e]"
                      : "bg-white text-black border-gray-300 hover:bg-[#ffc15e]/40"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {type}
                </button>
              )
            })}
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
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">
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
              <h3 className="resource-title text-xl font-bold text-white mb-2">{r.title}</h3>

              <div className="resource-section mb-2">
                <h4 className="font-bold text-white">About the Organization</h4>
                <p className="text-white">{r.about}</p>
              </div>

              <div className="resource-section mb-2">
                <h4 className="font-bold text-white">What the Resource Does</h4>
                <p className="text-white">{r.does}</p>
              </div>

              <div className="resource-section mb-2">
                <h4 className="font-bold text-white">Contact Information</h4>
                <p className="text-white">{r.contact}</p>
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
