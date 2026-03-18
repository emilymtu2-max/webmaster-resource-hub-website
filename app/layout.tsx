import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import FooterCta from "@/components/FooterCta";
import HeaderNav from "@/components/HeaderNav";
import "./globals.css";
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = {
  title: "PulseAsia",
  description: "Supporting Asian American immigrants in the Pacific Northwest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="caramellatte">
      <body className="bg-base-100 text-base-content antialiased">
        <HeaderNav />
        <main>{children}</main>
        <FooterCta />

        <footer className="footer bg-base-200 p-10 text-base-content sm:footer-horizontal">
          <aside>
            <img
              src="/PULSEASIALOGO.png"
              alt="Pulse Asia Logo"
              className="h-48 w-48rounded-md object-contain"
            />
          </aside>

          <nav>
            <h6 className="footer-title">Categories Of Help</h6>
            <Link href="/resources?category=Legal" className="link link-hover">
              Legal
            </Link>
            <Link href="/resources?category=Education" className="link link-hover">
              Educational
            </Link>
            <Link href="/resources?category=Career" className="link link-hover">
              Career/Employment
            </Link>
            <Link href="/resources?category=Culture" className="link link-hover">
              Culture
            </Link>
            <Link href="/resources?category=Health" className="link link-hover">
              Health/Wellness
            </Link>
          </nav>

          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <Link href="/about" className="link link-hover">
              About Us
            </Link>
            <Link href="/resources" className="link link-hover">
              Resource Hub
            </Link>
            <Link href="/map" className="link link-hover">
              Interactive Map
            </Link>
            <Link href="/form-suggestions-page" className="link link-hover">
              Suggestions
            </Link>
            <Link href="/references" className="link link-hover">
              References
            </Link>
            <Link href="/stat" className="link link-hover">
              Immigration Stats
            </Link>
          </nav>

          <nav>
            <h6 className="footer-title">Connect With Us</h6>
            <a href="mailto:info@pulseasia.com" className="cta-button cta-button-sm w-fit">
              Contact Us
              <ArrowRightIcon />
            </a>
            <a className="link link-hover">98034 118th Ct Street, Seattle, WA</a>
            <a href="tel:+11234567890" className="link link-hover">
              (123) 456-7890
            </a>
            <a href="mailto:info@pulseasia.com" className="link link-hover">
              info@pulseasia.com
            </a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
