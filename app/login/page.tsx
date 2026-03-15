import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

export default function Login() {
  return (
    <>
      {/* Header */}
      <header className="w-full py-6 flex justify-center items-center bg-[var(--background)] border-b border-gray-200">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-[var(--foreground)]">PulseAsia</span>
        </div>
      </header>

      {/* Login Form */}
      <main className="flex flex-col items-center justify-center min-h-[60vh] bg-[var(--background)]">
        <div className="w-full max-w-md bg-white/80 dark:bg-black/60 rounded-xl shadow-lg p-8 mt-12 border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--foreground)]">Sign In</h2>
          <form className="flex flex-col gap-4">
            <label className="text-[var(--foreground)] font-medium">
              Email
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-[var(--foreground)]"
                placeholder="you@email.com"
                required
              />
            </label>
            <label className="text-[var(--foreground)] font-medium">
              Password
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-[var(--foreground)]"
                placeholder="••••••••"
                required
              />
            </label>
            <button type="submit" className="cta-button cta-button-full mt-4">
              Log In
              <ArrowRightIcon />
            </button>
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
      <footer className="w-full py-4 flex justify-center items-center bg-[var(--background)] border-t border-gray-200 mt-12">
        <span className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} PulseAsia. All rights reserved.
        </span>
      </footer>
    </>
  );
}
