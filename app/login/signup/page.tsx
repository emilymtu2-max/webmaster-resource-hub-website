"use client";
import { useState } from "react";

const asianCountries = [
  "China",
  "India",
  "Vietnam",
  "Philippines",
  "Korea",
  "Japan",
  "Thailand",
  "Myanmar (Burma)",
  "Cambodia",
  "Laos",
  "Nepal",
  "Pakistan",
  "Bangladesh",
  "Indonesia",
  "Malaysia",
  "Singapore",
  "Taiwan",
  "Sri Lanka",
  "Mongolia",
  "Other",
];

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password: string) {
  return {
    length: password.length >= 8,
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    number: /\d/.test(password),
  };
}

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [interests, setInterests] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const passwordValid = validatePassword(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, firstName, country, interests }),
    });
    const data = await res.json();
    if (data.success) {
      if (data.user) {
        saveSession(data.user as SessionUser);
      }
      setStatusMessage("Signup successful—welcome!");
      router.push("/account");
    } else {
      setStatusMessage(data.error || "Signup failed");
    }
  };

  return (
    <>
      {/* Header */}
      <header className="w-full py-6 flex justify-center items-center bg-[var(--background)] border-b border-gray-200">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-[var(--foreground)]">PulseAsia</span>
        </div>
      </header>

      {/* Signup Form */}
      <main className="flex flex-col items-center justify-center min-h-[60vh] bg-[var(--background)]">
        <div className="w-full max-w-md bg-white/80 dark:bg-black/60 rounded-xl shadow-lg p-8 mt-12 border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--foreground)]">Sign Up</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="text-[var(--foreground)] font-medium">
              Email
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-[var(--foreground)]"
                placeholder="you@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                required
              />
              {emailTouched && (
                <span className="ml-2">
                  {validateEmail(email) ? (
                    <span className="text-green-600">✔️</span>
                  ) : (
                    <span className="text-red-600">❌ Not a valid email.</span>
                  )}
                </span>
              )}
            </label>
            <label className="text-[var(--foreground)] font-medium">
              Password
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-[var(--foreground)]"
                placeholder="At least 8 characters, 1 special character, 1 number"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onBlur={() => setPasswordTouched(true)}
                required
              />
              <div className="flex flex-col gap-1 mt-2 text-xs">
                <span className="flex items-center gap-1">
                  {passwordTouched ? (
                    passwordValid.length ? (
                      <span className="text-green-600">✔️</span>
                    ) : (
                      <span className="text-red-600">❌</span>
                    )
                  ) : (
                    <span className="text-gray-400">•</span>
                  )}
                  Minimum 8 characters
                </span>
                <span className="flex items-center gap-1">
                  {passwordTouched ? (
                    passwordValid.special ? (
                      <span className="text-green-600">✔️</span>
                    ) : (
                      <span className="text-red-600">❌</span>
                    )
                  ) : (
                    <span className="text-gray-400">•</span>
                  )}
                  At least 1 special character
                </span>
                <span className="flex items-center gap-1">
                  {passwordTouched ? (
                    passwordValid.number ? (
                      <span className="text-green-600">✔️</span>
                    ) : (
                      <span className="text-red-600">❌</span>
                    )
                  ) : (
                    <span className="text-gray-400">•</span>
                  )}
                  At least 1 number
                </span>
              </div>
            </label>
            <label className="text-[var(--foreground)] font-medium">
              First Name
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-[var(--foreground)]"
                placeholder="Your first name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
              />
            </label>
            <label className="text-[var(--foreground)] font-medium">
              Country you are immigrating from
              <select
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-[var(--foreground)]"
                value={country}
                onChange={e => setCountry(e.target.value)}
                required
              >
                <option value="">Select a country</option>
                {asianCountries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </label>
            <label className="text-[var(--foreground)] font-medium">
              What are you most interested in? (Optional)
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-[var(--foreground)]"
                placeholder="e.g. Community events, job resources, language help"
                value={interests}
                onChange={e => setInterests(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="mt-4 w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
              <ArrowRightIcon />
            </button>
            {statusMessage && (
              <p className="text-sm text-center text-gray-600">{statusMessage}</p>
            )}
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log in
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
