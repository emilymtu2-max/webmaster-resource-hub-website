"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { clearSession, onSessionUpdate, readSession, SessionUser } from "@/lib/session";
import { capitalizeFirstLetter } from "@/lib/text";

export default function AccountPage() {
  const [user, setUser] = useState<SessionUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    setUser(readSession());
    return onSessionUpdate((updated) => setUser(updated));
  }, []);

  const displayName = user ? capitalizeFirstLetter(user.firstName) : "";
  const avatarInitials = useMemo(() => {
    if (!displayName) return "?";
    return displayName
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .substring(0, 2)
      .toUpperCase();
  }, [displayName]);

  if (!user) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#f4ece1] text-center">
        <div className="p-6 rounded-2xl shadow-lg bg-white/70 border border-gray-200 max-w-md">
          <div className="flex flex-col items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold text-gray-600">
              ?
            </div>
            <h1 className="text-2xl font-semibold text-red-900 mb-2">Account</h1>
          </div>
          <p className="text-base text-gray-600 mb-4">
            You are not currently signed in. Create or log into your account to keep your profile data available across sessions.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/login" className="btn btn-outline btn-sm">
              Log In
            </Link>
            <Link href="/login/signup" className="btn btn-primary btn-sm">
              Sign Up
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[70vh] bg-[#f4ece1] py-12">
      <div className="max-w-4xl mx-auto bg-white/90 dark:bg-black/70 rounded-3xl border border-base-200 shadow-xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="avatar placeholder w-24 h-24">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-3xl font-bold text-white">
              {avatarInitials}
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-red-900">{displayName}</h1>
            <p className="text-gray-500">{user.email}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-wider">
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600">{user.country}</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600">{user.interests ?? "Community Member"}</span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-3 flex-wrap">
          <Link href="/account/settings" className="btn btn-primary btn-sm">
            Edit profile
          </Link>
          <button
            type="button"
            onClick={() => {
              clearSession();
              router.push("/");
            }}
            className="btn btn-outline btn-sm"
          >
            Sign out
          </button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50">
            <h2 className="text-lg font-semibold text-gray-800">Profile Summary</h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              This view is your private account dashboard. It shows the email you used to register, the community you come from, and any interests you shared during signup.
            </p>
            <ul className="mt-4 text-sm text-gray-600 space-y-1">
              <li>
                <span className="font-semibold">Email:</span> {user.email}
              </li>
              <li>
                <span className="font-semibold">Country:</span> {user.country}
              </li>
              <li>
                <span className="font-semibold">Interests:</span> {user.interests ?? "Not set"}
              </li>
            </ul>
          </article>
          <article className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50">
            <h2 className="text-lg font-semibold text-gray-800">What’s next?</h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Use this account page as a launchpad—bookmark it to quickly return to your story or share resources tailored to your profile. There aren’t any hidden tokens; the data shown here is stored locally in your browser session.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/form-suggestions-page" className="btn btn-outline btn-sm">
                Suggest Resources😭✌️💔
              </Link>
              <Link href="/resources" className="btn btn-primary btn-sm">
                Explore resources
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
