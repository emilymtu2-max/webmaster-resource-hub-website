import { Card, CardContent } from "@/components/ui/card";
import FeatureHero from "@/components/FeatureHero";
import InfoCard from "@/components/InfoCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const quickSupportCards = [
  {
    title: "Find Local Help",
    description:
      "Use our Resource Hub to quickly find trusted local organizations, services, and events that can support your transition.",
  },
  {
    title: "Help Out Your Community",
    description:
      "Suggest new resources, share your story, or connect with others to build a stronger, more informed community together.",
  },
  {
    title: "Learn and Explore",
    description:
      "Learn more about our mission and how we support Asian American immigrants in the Pacific Northwest.",
  },
];

const carouselCards = [
  {
    title: "Jomari's Story",
    description: "“When I first moved to Seattle from the Philippines, I felt lost and overwhelmed. But through community events and local resources, I found a supportive network that helped me thrive.”",
  },
  {
    title: "Samina's Journey",
    description: "PulseAsia connected me to legal guidance and educational opportunities that transformed my family's life. We are now thriving in our new home.",
  },
  {
    title: "Yuji's Experience",
    description: "I was able to find culturally aware mental health support through PulseAsia, which made a huge difference in my adjustment to life in the Pacific Northwest.",
  },
  {
    title: "Peiying's Path",
    description: "Thanks to PulseAsia, I discovered local cultural events that helped me connect with my heritage and build a supportive community in my new city.",
  },
  {
    title: "Gojo's Story",
    description: "PulseAsia provided me with resources and connections that made my transition to life in the Pacific Northwest smoother and more fulfilling. I found a community that truly understands and supports me.",
  },
  {
    title: "Megumi's Journey",
    description: "Through PulseAsia, I found a network of support that helped me navigate the challenges of adjusting to life in the Pacific Northwest. The resources and community connections I gained were invaluable in helping me thrive in my new home.",
  },
];

function CarouselDemo() {
  return (
    <Carousel className="mx-auto w-full">
      <CarouselContent>
        {carouselCards.map((card) => (
          <CarouselItem key={card.title} className="basis-full md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex min-h-[32rem] flex-col justify-center p-12 md:min-h-[42rem]">
                  <h3 className="text-5xl font-semibold">{card.title}</h3>
                  <p className="mt-6 text-2xl leading-relaxed text-base-content/70">
                    {card.description}
                  </p>
                </CardContent>
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
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-6 text-6xl font-bold md:text-7xl">
              Find Support, Explore Culture, Build Community
            </h1>
            <p className="mb-6 text-xl md:text-2xl">
              Our Organization is committed to supporting Asian American immigrants across
              several different countries in adjusting to America in the Pacific Northwest
            </p>
            <button className="btn btn-primary text-lg text-primary-content md:text-xl">
              Explore Resources
            </button>
          </div>
        </div>
      </div>

      {/* Quick Support Section */}
      <section className="py-32">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-10">
          <h2 className="text-center text-5xl font-bold md:text-6xl">
            What can PulseAsia Do For You?
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-center text-xl text-base-content/70 md:text-2xl">
            Whether you&apos;re looking for local resources, trying to understand your
            options, or ready to take the next step, PulseAsia is here to support you every
            step of the way.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {quickSupportCards.map((card) => (
              <InfoCard
                key={card.title}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-28">
        <div className="page-container max-w-[92rem]">
          <CarouselDemo />
        </div>
      </section>

      {/* Community Section */}
      <section className="py-28">
        <div className="mx-auto w-full space-y-8 px-4 md:px-8 lg:px-10">
          <FeatureHero
            imageSrc="/indiabeauty.jpg"
            imageAlt="Community support"
            title="Your Knowedge is Power"
            description="Help us connect our community by adding programs, events, or services you know about."
            buttonLabel="Share Now"
            buttonHref="/form-suggestions-page"
          />
        </div>
      </section>
    </>
  );
}
