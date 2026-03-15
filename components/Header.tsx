"use client";

import Link from "next/link";
import { navLinks } from "@/lib/nav-links";
import AccountButton from "@/components/AccountButton";

export default function Header() {
  return (
    <div className="navbar sticky top-0 z-50 border-b border-base-300 bg-base-100/95 text-red-900 shadow-sm backdrop-blur">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl text-red-900">
          PulseAsia
        </Link>
      </div>
      <div className="hidden md:flex gap-2 text-sm">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="btn btn-ghost text-red-900">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost text-red-900">
            <span className="sr-only">Open navigation</span>
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-56 rounded-box bg-base-100 p-2 shadow"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-red-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <AccountButton />
      </div>
    </div>
  );
}
