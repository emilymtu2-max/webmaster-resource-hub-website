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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselCards = [
  {
    title: "Jomari's Story",
    person: "Jomari",
    resourceCategory: "community events",
    description:
      "When I first moved to Seattle from the Philippines, I felt lost and overwhelmed. But through community events and local resources, I found a supportive network that helped me thrive.”",
  },
  {
    title: "Chaerin's Journey",
    person: "Chaerin",
    resourceCategory: "legal and educational resources",
    description:
      "PulseAsia connected me to legal guidance and educational opportunities that transformed my family's life. We are now thriving in our new home.",
  },
  {
    title: "Yuji's Experience",
    person: "Yuji",
    resourceCategory: "mental health resources",
    description:
      "I was able to find culturally aware mental health support through PulseAsia, which made a huge difference in my adjustment to life in the Pacific Northwest.",
  },
  {
    title: "Tanush's Path",
    person: "Peiying",
    resourceCategory: "cultural resources",
    description:
      "Thanks to PulseAsia, I discovered local cultural events that helped me connect with my heritage and build a supportive community in my new city.",
  },
  {
    title: "Rahul's Story",
    person: "Gojo",
    resourceCategory: "community support resources",
    description:
      "PulseAsia provided me with resources and connections that made my transition to life in the Pacific Northwest smoother and more fulfilling. I found a community that truly understands and supports me.",
  },
  {
    title: "Megumi's Journey",
    person: "Megumi",
    resourceCategory: "community connection resources",
    description:
      "Through PulseAsia, I found a network of support that helped me navigate the challenges of adjusting to life in the Pacific Northwest. The resources and community connections I gained were invaluable in helping me thrive in my new home.",
  },
];

const profileImages = ["/OldLadyPfp.png", "/ManPfp.png", "/WomanPfp.png"];

function CarouselDemo() {
  return (
    <Carousel className="mx-auto w-full">
      <CarouselContent>
        {carouselCards.map((card, index) => (
          <CarouselItem key={card.title} className="basis-full md:basis-1/2">
            <div className="p-1">
              <Card className="min-h-[20rem] border-red-900/20 bg-base-100 py-0 text-red-900 md:min-h-[28rem]">
                <CardHeader className="gap-4 pt-6">
                  <div className="flex items-start justify-between gap-6">
                    <div className="avatar">
                      <div className="w-16 rounded-xl">
                        <img
                          src={profileImages[index % profileImages.length]}
                          alt="Testimonial profile"
                        />
                      </div>
                    </div>
                    <CardAction className="text-sm uppercase tracking-[0.18em] text-red-900/65">
                      Testimonial
                    </CardAction>
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-3xl md:text-4xl">{card.title}</CardTitle>
                    <CardDescription className="text-base text-red-900/70 md:text-lg">
                      Community story from the Pacific Northwest
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-lg leading-relaxed text-red-950/80 md:text-xl">
                    {card.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4 pb-6 pt-0">
                  <p className="text-xs leading-relaxed text-red-900/65 md:text-sm">
                    {card.person} used {card.resourceCategory}. Check them out.
                  </p>
                  <Link href="/resources" className="cta-button">
                    Visit Resource Hub
                    <ArrowRightIcon />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-red-900 py-20">
      <div className="mx-auto w-full max-w-[92rem] px-4 md:px-8 lg:px-10">
        <div className="grid w-full grid-cols-[1fr_minmax(0,44rem)_1fr] items-center gap-6">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/yellowStarish.png"
              alt="Yellow doodle accent"
              className="h-28 w-auto object-contain md:h-36"
            />
          </div>
          <div className="mx-auto w-full text-center">
            <h2 className="text-balance text-5xl font-bold text-white md:text-6xl">Testimonials</h2>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/yellowStarish.png"
              alt="Yellow doodle accent"
              className="h-28 w-auto object-contain md:h-36"
            />
          </div>
        </div>
        <p className="mx-auto mt-2 max-w-4xl text-center text-xl text-white/80 md:text-2xl">
          These immigrant stories highlight the real impact of our work and the importance of accessible resources and community support for Asian American
        </p>
      </div>
      <div className="page-container max-w-[92rem] mt-6">
        <CarouselDemo />
      </div>
    </section>
  );
}
