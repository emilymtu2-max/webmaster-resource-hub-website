// app/page.tsx
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FeatureHero from "@/components/FeatureHero";
import ImpactSection from "@/components/ImpactSection";
import TypingHeroHeadline from "@/components/TypingHeroHeadline";
import FlipWords from "@/components/ui/flip-words";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollVelocity from "@/components/ui/scroll-velocity";

const quickSupportCards = [
  {
    title: "Find Local Help",
    description:
      "Use our Resource Hub to quickly find trusted local organizations, services, and events that can support your transition.",
    href: "/resources",
    imageSrc: "/LocalHelp.jpg",
  },
  {
    title: "Help Out Your Community",
    description:
      "Suggest new resources, share your story, or connect with others to build a stronger, more informed community together.",
    href: "/form-suggestions-page",
    imageSrc: "/HelpOutYourCommunity.jpg",
  },
  {
    title: "Learn and Explore",
    description:
      "Learn more about our mission and how we support Asian American immigrants in the Pacific Northwest.",
    href: "/about",
    imageSrc: "/learnAndExplore.jpg",
  },
];

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

const fictionalHeadlineStrips = [
  {
    key: "headline-strip-1",
    content: (
      <>
    <span className="font-serif italic">Pacific Beacon Daily</span>
    <span className="px-6 font-sans uppercase tracking-[0.2em]">•</span>
    <span className="font-mono uppercase">Lotus City Ledger</span>
    <span className="px-6 font-sans uppercase tracking-[0.2em]">•</span>
    <span className="font-sans font-light tracking-wide">North Harbor Journal</span>
    <span className="px-6 font-sans uppercase tracking-[0.2em]">•</span>
    <span className="font-serif font-semibold">Cedar Bridge Newsroom</span>
      </>
    ),
  },
  {
    key: "headline-strip-2",
    content: (
      <>
    <span className="font-mono tracking-tight">Juniper Metro Review</span>
    <span className="px-6 font-sans uppercase tracking-[0.2em]">•</span>
    <span className="font-serif uppercase tracking-wide">The Orchid Tribune</span>
    <span className="px-6 font-sans uppercase tracking-[0.2em]">•</span>
    <span className="font-sans italic">PNW Mosaic Press</span>
    <span className="px-6 font-sans uppercase tracking-[0.2em]">•</span>
    <span className="font-serif font-light">Coastline Civic Dispatch</span>
      </>
    ),
  },
  {
    key: "headline-strip-3",
    content: (
      <>
    <span className="font-serif">Golden Lantern Weekly</span>
    <span className="px-6 font-sans uppercase tracking-[0.2em]">•</span>
    <span className="font-sans uppercase tracking-[0.08em]">The Cascadia Observer</span>
    <span className="px-6 font-sans uppercase tracking-[0.2em]">•</span>
    <span className="font-mono">Harborline Public Affairs</span>
    <span className="px-6 font-sans uppercase tracking-[0.2em]">•</span>
    <span className="font-serif italic">New Horizon Bulletin</span>
      </>
    ),
  },
];

const faqItems = [
  {
    value: "faq-1",
    question: "What kinds of resources can I find through PulseAsia?",
    answer:
      "PulseAsia helps surface legal, cultural, educational, wellness, and community-based resources across the Pacific Northwest so users can find support closer to home.",
  },
  {
    value: "faq-2",
    question: "Is PulseAsia only for one specific Asian community?",
    answer:
      "No. PulseAsia is designed to support multiple Asian communities while still making room for more culturally specific resources as the hub grows.",
  },
  {
    value: "faq-3",
    question: "Can I suggest a resource or organization to be added?",
    answer:
      "Yes. Community submissions are part of how the hub expands, and users can share programs, services, or local organizations they believe others should know about.",
  },
  {
    value: "faq-4",
    question: "How should I start if I am not sure what help I need?",
    answer:
      "Start with the Resource Hub or map view. Those sections make it easier to browse by region, need, and type of support so you can narrow down what fits best.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/homeimage.jpg)",
        }}
      >
        <div className="hero-content w-full px-6 text-center text-neutral-content md:px-10">
          <div className="mx-auto flex min-h-[22rem] w-full max-w-7xl flex-col items-center justify-center">
            <TypingHeroHeadline />
            <Link href="/resources" className="cta-button">
              Explore Resources
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-24">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-10">
          <div className="mx-auto w-full max-w-[92rem] text-center">
            <h2 className="text-5xl font-bold md:text-6xl">PulseAsia Makes Headlines</h2>
            <p className="mx-auto mt-6 max-w-[78rem] text-xl leading-relaxed text-base-content/75 md:text-2xl">
              From local stories to national coverage, PulseAsia&apos;s impact on the
              Asian community is being noticed. See what the world is saying about us.
              (Note: The following features are for display purposes only. All
              publications, companies, and stories shown are fictitious and do not
              represent real organizations or events.)
            </p>
          </div>
        </div>

        <div className="mt-14 w-full overflow-hidden">
          <ScrollVelocity
            texts={fictionalHeadlineStrips}
            velocity={70}
            className="px-8 text-[2.1rem] text-amber-200/80 md:px-10 md:text-[3.2rem]"
            parallaxClassName="h-[84px] md:h-[108px]"
            scrollerClassName="font-medium tracking-[-0.015em]"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="hero min-h-[52vh] w-full bg-base-100">
          <div className="hero-content w-full max-w-[92rem] flex-col px-4 py-12 lg:flex-row md:px-8 lg:px-10">
            <img
              src="/heroImage.png"
              alt="Community map call to action"
              className="w-full max-w-2xl rounded-2xl object-cover"
            />
            <div className="max-w-3xl">
              <h2 className="text-5xl font-bold leading-tight text-red-900 md:text-6xl lg:text-7xl">
                Bringing Smiles Home In The Pacific Northwest
              </h2>
              <p className="py-6 text-xl leading-relaxed text-base-content/75 md:text-2xl">
                The Pacific Northwest is home to a vibrant, growing Asian community
                with numerous oppurtunities. Lucky for you, we&apos;ve mapped it all
                out. From cultural hubs to local resources, find what&apos;s close to
                home. Explore the map and start discovering.
              </p>
              <Link href="/map" className="cta-button">
                Explore the Map
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto w-full space-y-8 px-4 md:px-8 lg:px-10 ">
          <FeatureHero
            imageSrc="/Whhwhy.png"
            imageAlt="Community support"
            title="Why Pulse Asia Exists"
            description="Too many people arrive in a new country full of hope, only to find themselves lost in language barriers, tangled in visa confusion, and quietly struggling with isolation they never expected. The cultural disconnect is real, and it is heavy.
            Pulse Asia exists to change that. We are here to make sure no one in the Asian community has to figure it out alone."
            buttonLabel="Learn More"
            buttonHref="/stat"
            imageClassName="h-[30rem] w-auto max-w-none md:h-[36rem] lg:ml-[-8rem] lg:h-[52rem] lg:scale-110"
          />
        </div>
      </section>

      <ImpactSection />

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

      {/* Quick Support Section */}
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
                  What can PulseAsia Do For You?
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-balance text-xl text-base-content/70 md:text-2xl">
                  Whether you&apos;re looking for local resources, trying to understand
                  your options, or ready to take the next step, PulseAsia is here to
                  support you every step of the way.
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

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {quickSupportCards.map((card) => (
                <Card key={card.title} className="overflow-hidden py-0">
                  <div className="aspect-[4/3] w-full border-b border-base-300 bg-base-200">
                    <img
                      src={card.imageSrc}
                      alt={card.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="pt-6">
                    <CardTitle className="text-3xl">{card.title}</CardTitle>
                    <CardDescription className="text-lg">
                      PulseAsia support pathway
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-lg leading-relaxed text-base-content/75">
                      {card.description}
                    </p>
                  </CardContent>
                  <CardFooter className="pb-6 pt-0">
                    <Link href={card.href} className="cta-button cta-button-full">
                      Explore
                      <ArrowRightIcon />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="hero min-h-[52vh] w-full"
        style={{
          backgroundImage: "url(/indiabeauty.jpg)",
        }}
      >
        <div className="hero-overlay bg-slate-950/45"></div>
        <div className="hero-content w-full max-w-none px-4 py-16 text-neutral-content md:px-8 lg:px-10">
          <div className="w-full max-w-[92rem]">
            <h2 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Your Knowledge is
              <span className="inline-block align-baseline text-amber-100">
                <FlipWords
                  words={["Power", "Connection", "Impact", "Support"]}
                  className="text-amber-100"
                  duration={2600}
                />
              </span>
            </h2>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85 md:text-2xl">
              Help us connect our community by adding programs, events, or services
              you know about.
            </p>
            <Link href="/form-suggestions-page" className="cta-button mt-8">
              Share Now
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28">
        <div className="mx-auto w-full max-w-[92rem] px-4 md:px-8 lg:px-10">
          <div className="grid w-full grid-cols-[1fr_minmax(0,44rem)_1fr] items-center gap-6">
            <div className="flex justify-center lg:justify-start">
              <img
                src="/exclLeft.png"
                alt="Left exclamation accent"
                className="h-28 w-auto object-contain md:h-36"
              />
            </div>
            <div className="mx-auto w-full text-center">
              <h2 className="text-balance text-5xl font-bold md:text-6xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-base-content/70 md:text-2xl">
                Quick answers for common questions about how PulseAsia works and how
                to start finding support.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/exclRight.png"
                alt="Right exclamation accent"
                className="h-28 w-auto object-contain md:h-36"
              />
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <Card>
              <CardContent className="px-6 py-4 md:px-8">
                <Accordion type="single" collapsible defaultValue="faq-1">
                  {faqItems.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </>
  );
}
