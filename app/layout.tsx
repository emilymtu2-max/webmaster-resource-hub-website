// app/layout.tsx

import type { Metadata } from "next";
import Link from "next/link";
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
    <html lang="en">
      <body className="antialiased">
        {/* Navbar */}
        <header className="navbar">
          <div className="navbar__container">
            <Link href="/" id="navbar__logo">
              PulseAsia
            </Link>

            <ul className="navbar__menu">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/resources">Resource Hub</Link>
              </li>
              <li>
<<<<<<< HEAD
=======
                <Link href="/resources">Top Three Resources</Link>
              </li>
              <li>
>>>>>>> deb9d2f5a56e17b5bcd048a87f63b311f8125e7b
                <Link href="/form-suggestions-page">Suggestions</Link>
              </li>
              <li>
                <Link href="/references">References</Link>
              </li>
<<<<<<< HEAD
=======
              <li>
                <Link href="/map">Interactive Maps</Link>
              </li>
>>>>>>> deb9d2f5a56e17b5bcd048a87f63b311f8125e7b
            </ul>
          </div>
        </header>

        {/* Main page content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-left">
              <a href="mailto:ali.samina.star@gmail.com" className="contact-btn">
                Contact Us:
              </a>
              <p>Email: info@pulseasia.com</p>
              <p>Phone: 425-471-4324</p>
              <p className="footer-created">
                Created by students of:
                <br />
                Lake Washington High School
                <br />
                12033 NE 80th St, Kirkland, WA 98033
              </p>
              <p className="footer-copyright">
                ©2025 Pulse Asia. All Rights Reserved.
              </p>
            </div>

            <div className="footer-right">
              <nav className="footer-links">
                <Link href="/about">About Us</Link>
                <Link href="/resources">Resource Hub</Link>
<<<<<<< HEAD
                <Link href="/form-suggestions-page">Suggestions</Link>
                <Link href="/references">References</Link> {/*Currently footer and header missing map page and top three resources page, but can easily be added here when those pages are created*/}
=======
                <Link href="/references">Top Three Resources</Link>
                <Link href="/form-suggestions-page">Suggestions</Link>
                <Link href="/references">References</Link>
                <Link href="/resources">Interactive Maps</Link>
>>>>>>> deb9d2f5a56e17b5bcd048a87f63b311f8125e7b
              </nav>

              <img
                src="/PULSEASIALOGO.png"
                alt="Pulse Asia Logo"
                className="footer-logo"
              />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}