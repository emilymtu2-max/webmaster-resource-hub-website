"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { saveSession, readSession, SessionUser } from "@/lib/session";
import { capitalizeFirstLetter } from "@/lib/text";

type StatusState = { type: "idle" | "saving" | "success" | "error"; message: string };
const INITIAL_STATUS: StatusState = { type: "idle", message: "" };

export default function AccountSettingsPage() {
  const router = useRouter();
  const [user, setUser] = useState<SessionUser | null>(null);
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    country: "",
    interests: "",
  });
  const [status, setStatus] = useState(INITIAL_STATUS);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const sessionUser = readSession();
    if (!sessionUser) {
      router.push("/login");
      return;
    }

    setUser(sessionUser);
    setForm({
      email: sessionUser.email,
      firstName: sessionUser.firstName,
      country: sessionUser.country,
      interests: sessionUser.interests ?? "",
    });
  }, [router]);

  if (!user) {
    return null;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(INITIAL_STATUS);
    setSaving(true);

    const response = await fetch("/api/auth/account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: user.id,
        email: form.email,
        firstName: form.firstName,
        country: form.country,
        interests: form.interests || null,
        profileImage: user.profileImage ?? null,
      }),
    });

    const responseData = await response.json();
    setSaving(false);

    if (!response.ok || !responseData.success) {
      setStatus({
        type: "error",
        message: responseData.error ?? "Unable to update profile at the moment.",
      });
      return;
    }

    const updatedUser = responseData.user as SessionUser;
    setUser(updatedUser);
    setForm({
      email: updatedUser.email,
      firstName: updatedUser.firstName,
      country: updatedUser.country,
      interests: updatedUser.interests ?? "",
    });
    setStatus({ type: "success", message: "Profile saved." });

    saveSession(updatedUser);
  };

  return (
    <main className="min-h-[70vh] bg-[var(--background)] py-10">
      <div className="max-w-4xl mx-auto rounded-3xl border border-base-200 bg-white/95 p-8 shadow-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Signed in as</p>
            <h1 className="text-3xl font-semibold text-red-900">
              {capitalizeFirstLetter(user.firstName)}
            </h1>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/account")}
            className="btn btn-ghost btn-sm"
          >
            Back
          </button>
        </div>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email
              <input
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-red-500 focus:outline-none"
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                required
              />
            </label>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              First name
              <input
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-red-500 focus:outline-none"
                type="text"
                value={form.firstName}
                onChange={(event) => setForm({ ...form, firstName: event.target.value })}
                required
              />
            </label>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Country
              <input
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-red-500 focus:outline-none"
                type="text"
                value={form.country}
                onChange={(event) => setForm({ ...form, country: event.target.value })}
                required
              />
            </label>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Interests
              <textarea
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-red-500 focus:outline-none"
                value={form.interests}
                onChange={(event) => setForm({ ...form, interests: event.target.value })}
                rows={4}
                placeholder="Tell us more about your focus areas."
              />
            </label>
          </div>

          {status.message ? (
            <p
              className={`text-sm ${
                status.type === "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {status.message}
            </p>
          ) : null}

          <button
            disabled={saving}
            type="submit"
            className="w-full rounded-2xl bg-red-900 px-4 py-3 text-center text-white shadow hover:bg-red-850 disabled:opacity-70 transition-colors"
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
        </form>
      </div>
    </main>
  );
}
