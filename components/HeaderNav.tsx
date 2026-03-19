"use client";
import Image from "next/image";
import Link from "next/link";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
  StarIcon,
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
import AccountButton from "@/components/AccountButton";

const topLevelLinks = [
  { href: "/about", label: "About Us" },
  { href: "/resources", label: "Resource Hub" },
  { href: "/references", label: "Reference Page" },
];

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
  {
    href: "/topthree",
    label: "Highlighted Resources",
    description: "Explore our top recommended resources for support and education.",
    icon: StarIcon,
  },
];

export default function HeaderNav() {
  return (
    <div className="sticky top-0 z-[1200] overflow-visible">
      <div className="navbar border-b border-transparent bg-base-100/95 text-red-900 shadow-sm backdrop-blur h-20">
        <div className="page-container flex w-full items-center justify-between gap-4 md:grid md:grid-cols-[auto_1fr_auto]">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="btn btn-ghost gap-2 px-3 py-2 text-red-900 hover:bg-transparent hover:ring-0 focus:ring-0 focus:outline-none focus-visible:outline-none"
            >
              <Image
                src="/PULSEASIALOGO.png"
                width={40}
                height={40}
                alt="PulseAsia Logo"
                className="h-10 w-auto"
                priority
              />
              <span className="text-xl font-bold text-red-900">PulseAsia</span>
            </Link>
          </div>

          {/* Center nav links */}
          <div className="hidden md:flex md:justify-center">
            <ul className="flex list-none items-center gap-1 px-1">
              {topLevelLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-red-900 transition-[transform,color,background-color] duration-200 hover:scale-105 hover:bg-base-200 hover:text-red-900 focus-visible:outline-none"
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
                        className={`${navigationMenuTriggerStyle()} bg-transparent text-red-900 transition-[transform,color,background-color] duration-200 hover:scale-105 hover:bg-base-200 hover:text-red-900 focus:bg-base-200 focus-visible:outline-none data-[state=open]:bg-base-200 data-[state=open]:text-red-900`}
                      >
                        More
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="z-[1300] w-[320px] rounded-xl border-transparent bg-base-100 p-2 shadow-lg">
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

          {/* Right side: account + mobile menu */}
          <div className="flex items-center gap-3">
            <AccountButton />
            <div className="md:hidden">
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
                  className="menu dropdown-content z-[1300] mt-3 w-56 rounded-box bg-base-100 p-2 shadow"
                >
                  {[...topLevelLinks, ...groupedNavLinks].map((link) => (
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
      </div>
    </div>
  );
}