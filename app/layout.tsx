// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "PulseAsia",
  description: "Supporting Asian American immigrants in the Pacific Northwest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
                <Link href="/aboutus">About Us</Link>
              </li>
              <li>
                <Link href="/resourcesPage">Resource Hub</Link>
              </li>
              <li>
                <Link href="/topthreeresources">Top Three Resources</Link>
              </li>
              <li>
                <Link href="/suggestions">Suggestions</Link>
              </li>
              <li>
                <Link href="/references">References</Link>
              </li>
              <li>
                <Link href="/interactiveMap">Interactive Maps</Link>
              </li>
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
              <p className="footer-copyright">©2025 Pulse Asia. All Rights Reserved.</p>
            </div>

            <div className="footer-right">
              <nav className="footer-links">
                <Link href="/aboutus">About Us</Link>
                <Link href="/resourcesPage">Resource Hub</Link>
                <Link href="/topthreeresources">Top Three Resources</Link>
                <Link href="/suggestions">Suggestions</Link>
                <Link href="/references">References</Link>
                <Link href="/interactiveMap">Interactive Maps</Link>
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
