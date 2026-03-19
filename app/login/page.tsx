"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveSession, SessionUser } from "@/lib/session";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function parseJsonSafely(response: Response) {
    const text = await response.text();
    if (!text) return {};
    try {
      return JSON.parse(text) as Record<string, any>;
    } catch {
      return {};
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await parseJsonSafely(response);

    setLoading(false);

    if (response.ok && data.success && data.user) {
      saveSession(data.user as SessionUser);
      router.push("/account");
      return;
    }

    setError(data.error || "Invalid credentials");
  };

  return (
    <div className="min-h-screen bg-[#f4ece1] text-gray-900">


      {/* Login Form */}
      <main className="flex flex-col items-center justify-center min-h-[60vh] bg-transparent">
        <div className="w-full max-w-md bg-white/80 dark:bg-black/60 rounded-xl shadow-lg p-8 mt-12 border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">Sign In</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="text-gray-900 font-medium">
              Email
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-gray-900"
                placeholder="you@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="text-gray-900 font-medium">
              Password
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-gray-900"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </label>
            <button
              type="submit"
              className="mt-4 w-full py-2 rounded-md bg-red-900 text-white font-semibold hover:bg-red-850 transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
            {error && (
              <p className="text-red-600 text-center text-sm">{error}</p>
            )}
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <a href="/login/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 flex justify-center items-center bg-transparent border-t border-gray-200 mt-12">
        <span className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} PulseAsia. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
