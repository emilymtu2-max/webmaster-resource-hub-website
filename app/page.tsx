import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="main">
        <Button>Get Started</Button>
        <div className="main__heroContent">
          <div className="main__heroWords">
            <h1>
              Find <span>Support</span>
              <br />
              Explore <span>Culture</span>
              <br />
              Build <span>Community</span>
            </h1>
            <p>
              Our Organization is committed to supporting Asian American immigrants across several
              <br />
              different countries in adjusting to America in the Pacific Northwest
            </p>
            <p className="scrollArrow">Keep Scrolling &darr;</p>
          </div>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-banner-bg">
          <div className="hero-banner-content">
            <h1 className="hero-banner-title">PulseAsia is Built to Help</h1>
            <p className="hero-banner-subtitle">
              Explore our resource hub to find your next step
            </p>
            <Link href="/resources" className="hero-banner-btn">
              Explore More Resources
            </Link>
          </div>
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