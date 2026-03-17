import { Card, CardContent } from "@/components/ui/card";
import AboutHeroBlock from "@/components/shadcn-studio/blocks/about-us-page-01/about-us-page-01";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  BookOpenIcon,
  HeartHandshakeIcon,
  MedalIcon,
  SparklesIcon,
  StarIcon,
  TargetIcon,
  UsersIcon,
} from "lucide-react";

type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

const timelineData: TimelineEntry[] = [
  {
    date: "2019",
    title: "A Small Circle With a Big Problem",
    content:
      "A group of Asian immigrant graduate students at a Pacific Northwest university kept running into the same walls. Confusing visa paperwork, language barriers at every turn, and weekends that felt lonelier than they expected. They started meeting informally, sharing tips, resources, and a lot of home cooked food.",
  },
  {
    date: "2020",
    title: "The Group Chat Became a Movement",
    content:
      "What started as a handful of friends grew into a wider network almost overnight. Word spread across campuses and apartment complexes. People were hungry for connection and practical help. The group formalized into a structured support network and PulseAsia was born.",
  },
  {
    date: "2021",
    title: "First Community Events",
    content:
      "PulseAsia hosted its first public events including cultural celebrations, immigration workshops, and language exchange meetups. Attendance exceeded every expectation. It was clear this community had been waiting for something like this for a long time.",
  },
  {
    date: "2022",
    title: "Building Real Infrastructure",
    content:
      "The team launched its first resource directory and interactive map, making it easier for newly arrived Asian residents to find housing support, legal aid, healthcare, and cultural spaces across the Pacific Northwest.",
  },
  {
    date: "2023",
    title: "Growing the Network",
    content:
      "Partnerships with local organizations, universities, and community leaders helped PulseAsia reach thousands. Volunteers joined from across the region, each bringing their own story and their own reason for showing up.",
  },
  {
    date: "2024",
    title: "A Community That Stands on Its Own",
    content:
      "PulseAsia grew into a recognized voice for the Asian community in the Pacific Northwest, hosting large scale events, supporting families through immigration challenges, and continuing to build the kind of network its founders once wished had existed for them.",
  },
];

const aboutStats = [
  {
    icon: SparklesIcon,
    value: "6+",
    description: "Years of Community Growth",
  },
  {
    icon: TargetIcon,
    value: "40+",
    description: "Resources Highlighted",
  },
  {
    icon: StarIcon,
    value: "5",
    description: "Communities Centered",
  },
  {
    icon: MedalIcon,
    value: "1",
    description: "Shared Regional Hub",
  },
];

const valuesData = [
  {
    icon: HeartHandshakeIcon,
    title: "Community First",
    description:
      "Every decision we make starts with one question. Does this serve our community? We exist for the people, not the other way around.",
  },
  {
    icon: UsersIcon,
    title: "Belonging Without Borders",
    description:
      "No one should feel like a stranger in the place they call home. We create spaces where every background, dialect, and culture is welcomed without hesitation.",
  },
  {
    icon: BookOpenIcon,
    title: "Empowerment Through Knowledge",
    description:
      "Confusion and misinformation hold people back. We cut through the noise and give our community the tools, resources, and confidence to move forward.",
  },
  {
    icon: SparklesIcon,
    title: "Joy as a Foundation",
    description:
      "Resilience does not have to look like struggle. We believe that celebrating culture, sharing laughter, and building genuine friendships are just as important as any resource we provide.",
  },
];

interface Timeline9Props {
  className?: string;
}

const Timeline9 = ({ className }: Timeline9Props) => {
  return (
    <section id="our-story" className={cn("bg-[#FDF6EC] py-24 md:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
        <div className="mb-10 grid w-full grid-cols-[1fr_minmax(0,32rem)_1fr] items-center gap-6">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/fatDoodle.png"
              alt="Doodle accent"
              className="h-32 w-auto object-contain md:h-40"
            />
          </div>
          <h2 className="text-center text-5xl font-bold tracking-tighter text-red-900 sm:text-6xl">
            Our Story
          </h2>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/fatDoodle.png"
              alt="Doodle accent"
              className="h-32 w-auto object-contain md:h-40"
            />
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <Separator
            orientation="vertical"
            className="absolute top-4 left-2 bg-red-900/30"
          />
          {timelineData.map((entry, index) => (
            <div key={index} className="relative mb-10 pl-8">
              <div className="absolute top-3.5 left-0 flex size-4 items-center justify-center rounded-full bg-red-900" />
              <h4 className="rounded-xl py-2 text-2xl font-bold tracking-tight text-red-900 xl:mb-4 xl:px-3">
                {entry.title}
              </h4>

              <h5 className="text-md top-3 -left-28 rounded-xl font-semibold tracking-tight text-red-900/70 xl:absolute">
                {entry.date}
              </h5>

              <Card className="my-5 border-2 border-red-900 bg-white shadow-none">
                <CardContent className="px-6 py-6 xl:px-8">
                  <div className="text-base leading-relaxed text-red-950/85 md:text-lg">
                    {entry.content}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function AboutUs() {
  return (
    <div className="bg-[#FDF6EC]">
      {/* About Us */}
      <AboutHeroBlock stats={aboutStats} />

      <Timeline9 />

      <main className="page-container bg-transparent">
        <section className="mt-12">
          <div className="mx-auto max-w-[92rem]">
            <div className="grid w-full grid-cols-[1fr_minmax(0,36rem)_1fr] items-center gap-6">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/star.png"
                  alt="Star doodle accent"
                  className="h-28 w-auto object-contain md:h-36"
                />
              </div>
              <div className="mx-auto w-full text-center">
                <h2 className="text-5xl font-bold text-base-content md:text-6xl">Our Values</h2>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/star.png"
                  alt="Star doodle accent"
                  className="h-28 w-auto object-contain md:h-36"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="my-12 grid gap-8 md:grid-cols-2">
          {valuesData.map((value) => {
            const Icon = value.icon;

            return (
            <Card key={value.title} className="h-full border-red-900/20 bg-white py-0 shadow-md">
              <CardContent className="flex h-full flex-col gap-6 p-8">
                <div className="flex items-start gap-6">
                  <div className="flex size-16 items-center justify-center rounded-2xl border border-dashed border-red-900/35 bg-red-50 text-red-900">
                    <Icon className="size-7" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-red-900">{value.title}</h3>
                  <p className="text-lg leading-relaxed text-base-content/75">
                    {value.description}
                  </p>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </section>
      </main>

      <TestimonialsSection />

      <br />

      {/* Footer */}
    </div>
  );
}
