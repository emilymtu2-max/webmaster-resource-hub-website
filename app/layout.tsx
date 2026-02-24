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
  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/resources", label: "Resource Hub" },
    { href: "/map", label: "Interactive Map" },
    { href: "/form-suggestions-page", label: "Suggestions" },
    { href: "/references", label: "References" },
  ];

  return (
    <html lang="en" data-theme="caramellatte">
      <body className="antialiased">
        {/* Navbar */}
        <div className="navbar sticky top-0 z-50 border-b border-base-300 bg-base-100/95 text-base-content shadow-sm backdrop-blur">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              PulseAsia
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 hidden md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="dropdown dropdown-end md:hidden">
              <button
                tabIndex={0}
                className="btn btn-square btn-ghost"
                aria-label="Open navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-10 mt-3 w-56 rounded-box bg-base-100 p-2 shadow"
              >
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

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
                <Link href="/form-suggestions-page">Suggestions</Link>
                <Link href="/map">Interactive Map</Link>
                <Link href="/references">References</Link> {/*Currently footer and header missing map page and top three resources page, but can easily be added here when those pages are created*/}
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
