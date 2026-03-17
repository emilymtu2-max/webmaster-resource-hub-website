import type { ComponentType } from "react";

import { ArrowRightIcon } from "lucide-react";

import FlipWords from "@/components/ui/flip-words";

type StatItem = {
  icon: ComponentType;
  value: string;
  description: string;
}[];

const AboutUs = ({ stats }: { stats: StatItem }) => {
  return (
    <section className="bg-[#FDF6EC] py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center md:mb-16 lg:mb-24">
          <h2 className="text-4xl font-bold tracking-tight text-red-900 md:text-5xl lg:text-6xl">
            Pulse Asia is a
            <span className="inline-block align-baseline text-amber-500">
              <FlipWords
                words={[
                  "Resource Hub",
                  "Family",
                  "Home",
                  "Safe Place",
                ]}
                className="text-amber-500"
                duration={2600}
              />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            PulseAsia was built to make the Pacific Northwest feel more navigable,
            connected, and welcoming for Asian immigrant communities. What began as
            a small support network has grown into a hub for resources, cultural
            connection, and belonging.
          </p>
          <a href="#our-story" className="cta-button">
            Read more
            <ArrowRightIcon />
          </a>
        </div>

        <div className="relative mb-8 h-full w-full max-lg:space-y-6 sm:mb-16 lg:mb-24">
          <img
            src="/aboutus-banner.jpg"
            alt="About us illustration"
            className="h-full max-h-[30rem] w-full rounded-lg object-cover"
          />

          <div className="bg-white grid gap-10 rounded-md border border-red-900 p-8 sm:max-lg:grid-cols-2 lg:absolute lg:-bottom-25 lg:left-1/2 lg:w-3/4 lg:-translate-x-1/2 lg:grid-cols-4 lg:px-10 xl:w-max">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-2.5 text-center">
                <div className="flex size-7 items-center justify-center text-red-900 [&>svg]:size-7">
                  <stat.icon />
                </div>
                <span className="text-2xl font-semibold text-red-900">{stat.value}</span>
                <p className="text-lg text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
