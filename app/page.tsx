import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
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
          backgroundImage:
            "url(/homeimage.jpg)",
        }}
  >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> Find Support, Explore Culture, Build Community </h1>
            <p className="mb-5">
            Our Organization is committed to supporting Asian American immigrants across several different countries in adjusting to America in the Pacific Northwest
            </p>
              <button className="btn btn-primary text-primary-content">Explore Resources</button>
           </div>
         </div>
      </div>

      <section className="py-10">
        <div className="mx-auto flex w-full max-w-6xl justify-center px-4">
          <CarouselDemo />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-arrow-circle left">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <polyline
              points="20,8 12,16 20,24"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="testimonial-card">
          <h3 className="testimonial-heading">
            COMMITTED TO SUPPORTING ASIAN AMERICAN IMMIGRANT LIFE IN THE PACIFIC NORTHWEST
          </h3>

          <div className="testimonial-image">
            <Image
              src="/manstudying.jpg"
              alt="Testimonial"
              width={500}
              height={300}
            />
          </div>

          <div className="testimonial-content">
            <p>
              “When I first moved to Seattle from the Philippines, I felt lost...
            </p>
            <p className="testimonial-author">
              - Jomari Dela Cruz (Father and Business Owner)
            </p>
          </div>
        </div>

        <div className="testimonial-arrow-circle right">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <polyline
              points="12,8 20,16 12,24"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="community-container">
          <div className="community-text">
            <h2>
              Your
              <br />
              knowledge,
              <br />
              Our
              <br />
              community
            </h2>
            <p>
              Help us connect our community by adding programs,
              <br />
              events, or services you know about.
            </p>
            <Link href="/form-suggestions-page" className="community-btn">
              Share Now
            </Link>
          </div>

          <div className="community-image">
            <Image
              src="/indiabeauty.jpg"
              alt="Community"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>
    </>
  );
}
