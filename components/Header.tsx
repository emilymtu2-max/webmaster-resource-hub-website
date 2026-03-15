"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readSession, onSessionUpdate, SessionUser } from "@/lib/session";
import { capitalizeFirstLetter } from "@/lib/text";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/resources", label: "Resource Hub" },
  { href: "/map", label: "Interactive Map" },
  { href: "/form-suggestions-page", label: "Suggestions" },
  { href: "/references", label: "References" },
  { href: "/stat", label: "Immigration Stats" },
];

export default function Header() {
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    setUser(readSession());
    return onSessionUpdate((updated) => setUser(updated));
  }, []);

  const displayName = user ? capitalizeFirstLetter(user.firstName) : null;
  const initials = displayName ? displayName.charAt(0).toUpperCase() : "?";

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
      <div className="flex-none">
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
        <Link
          href="/account"
          className="group flex items-center gap-3 ml-4 rounded-full border border-transparent px-3 py-1 hover:border-gray-300 text-left"
        >
          <div className="avatar">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-400 text-white flex items-center justify-center text-lg font-bold">
              {initials}
            </div>
          </div>
          <div className="hidden md:flex flex-col text-right transition-colors duration-150 group-hover:text-gray-600">
            <span className="text-xs uppercase text-gray-400">{user ? "Signed in as" : "Guest"}</span>
            <span className="text-sm font-semibold text-gray-700">
              {displayName ?? "Not logged in"}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
