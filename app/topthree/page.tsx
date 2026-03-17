"use client"
import React from "react"

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

export default function HighlightedResourcesPage() {
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
          <ul className="list rounded-box bg-white shadow-md">
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
    </div>
  )
}