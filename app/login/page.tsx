"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveSession, SessionUser } from "@/lib/session";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = (await response.json()) as {
      success?: boolean;
      error?: string;
      user?: SessionUser;
    };

    setLoading(false);

    if (response.ok && data.success && data.user) {
      saveSession(data.user);
      router.push("/account");
      return;
    }

    setError(data.error || "Invalid credentials");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] bg-[var(--background)] px-4">
      <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-xl p-8 border border-gray-100">
        <p className="text-sm font-medium text-center text-gray-500">Sign in to access your personalized space</p>
        <h1 className="text-3xl font-semibold text-center text-red-900 mt-3 mb-6">Log In</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@email.com"
            />
          </label>
          <label className="text-sm font-medium text-gray-700">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
            />
          </label>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-3 w-full py-2 rounded-lg bg-red-900 text-white font-semibold shadow hover:bg-red-850 transition disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Log In"}
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-gray-500">
          Don&apos;t have an account? <Link href="/login/signup" className="text-blue-600 underline">Sign up</Link>
        </p>
      </div>
    </main>
  );
}
