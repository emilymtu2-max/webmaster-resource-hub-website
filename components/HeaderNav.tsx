"use client";

import Link from "next/link";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/lib/nav-links";

const groupedNavLinks = [
  {
    href: "/map",
    label: "Interactive Map",
    description: "Browse community resources by location across the region.",
    icon: CircleDashedIcon,
  },
  {
    href: "/form-suggestions-page",
    label: "Suggestions",
    description: "Share ideas for resources or improvements we should add next.",
    icon: CircleAlertIcon,
  },
  {
    href: "/stat",
    label: "Immigration Stats",
    description: "Explore data and context that shape the resource hub.",
    icon: CircleCheckIcon,
  },
];

export default function HeaderNav() {
  return (
    <div className="navbar sticky top-0 z-50 border-b border-transparent bg-base-100/95 text-red-900 shadow-sm backdrop-blur">
      <div className="page-container grid w-full grid-cols-[auto_1fr] items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
        <div className="flex-none">
          <Link href="/" className="btn btn-ghost text-xl text-red-900">
            PulseAsia
          </Link>
        </div>

        <div className="hidden justify-center md:flex md:justify-self-center">
          <ul className="flex list-none items-center gap-1 px-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-red-900 transition-colors hover:bg-base-200 hover:text-red-900 focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <NavigationMenu viewport={false} className="flex-none">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`${navigationMenuTriggerStyle()} bg-transparent text-red-900 hover:bg-base-200 hover:text-red-900 focus:bg-base-200 data-[state=open]:bg-base-200 data-[state=open]:text-red-900`}
                    >
                      More
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-[320px] rounded-xl border-transparent bg-base-100 p-2 shadow-lg">
                      <ul className="grid gap-1">
                        {groupedNavLinks.map((link) => {
                          const Icon = link.icon;

                          return (
                            <li key={link.href}>
                              <NavigationMenuLink asChild>
                                <Link href={link.href} className="rounded-lg px-3 py-3">
                                  <div className="flex items-start gap-3">
                                    <Icon className="mt-0.5 size-4 shrink-0 text-red-900" />
                                    <div className="flex flex-col gap-1 text-sm">
                                      <div className="leading-none font-medium text-red-900">
                                        {link.label}
                                      </div>
                                      <div className="line-clamp-2 text-muted-foreground">
                                        {link.description}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
          </ul>
        </div>

        <div className="hidden md:block" />

        <div className="ml-auto md:hidden">
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="btn btn-square btn-ghost text-red-900"
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
              {[...navLinks, ...groupedNavLinks].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-red-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
