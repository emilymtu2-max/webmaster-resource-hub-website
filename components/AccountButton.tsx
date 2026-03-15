"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { capitalizeFirstLetter } from "@/lib/text";
import { onSessionUpdate, readSession, SessionUser } from "@/lib/session";

interface AccountButtonProps {
  className?: string;
}

export default function AccountButton({ className = "" }: AccountButtonProps) {
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    setUser(readSession());
    return onSessionUpdate((updated) => setUser(updated));
  }, []);

  const displayName = user ? capitalizeFirstLetter(user.firstName) : "Guest";
  const initials = useMemo(() => {
    if (!user) return "?";
    return displayName.charAt(0).toUpperCase();
  }, [displayName, user]);

  const isGuest = !user;

  return (
    <Link
      href="/account"
      className={`group inline-flex items-center gap-3 rounded-full border border-transparent px-3 py-1 transition hover:border-gray-300 ${className}`}
      aria-label="Open account page"
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
          isGuest ? "bg-gray-300 text-gray-600" : "bg-gradient-to-br from-red-500 to-orange-400 text-white"
        }`}
      >
        {initials}
      </span>
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">Signed in as</span>
        <span className="text-sm font-semibold text-red-900">{displayName}</span>
      </span>
    </Link>
  );
}
