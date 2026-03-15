"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveSession, SessionUser } from "@/lib/session";

const asianCountries = [
  "Afghanistan",
  "Armenia",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Bhutan",
  "Brunei",
  "Cambodia",
  "China",
  "Cyprus",
  "Georgia",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Israel",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Lebanon",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "Nepal",
  "North Korea",
  "Oman",
  "Pakistan",
  "Palestine",
  "Philippines",
  "Qatar",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "South Korea",
  "Sri Lanka",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Thailand",
  "Timor-Leste",
  "Turkey",
  "Turkmenistan",
  "United Arab Emirates",
  "Uzbekistan",
  "Vietnam",
  "Yemen",
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
  const formIsValid =
    firstName.trim().length > 0 &&
    country.trim().length > 0 &&
    validateEmail(email) &&
    Object.values(passwordValid).every(Boolean);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formIsValid) {
      setStatusMessage("Please complete the required fields correctly.");
      return;
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, firstName, country, interests }),
    });
    const data = await res.json();
    if (data.success && data.user) {
      setStatusMessage("Signup successful—welcome!");
      saveSession(data.user as SessionUser);
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
            <div className="grid gap-4">
              <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
                First name
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="Enter your first name"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  placeholder="name@example.com"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none"
                />
                {emailTouched && !validateEmail(email) && (
                  <span className="text-xs text-red-600">Please enter a valid email address.</span>
                )}
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  onBlur={() => setPasswordTouched(true)}
                  placeholder="Create a secure password"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none"
                />
                {passwordTouched && (
                  <ul className="text-xs text-gray-600 space-y-0.5">
                    <li className={passwordValid.length ? "text-green-600" : "text-gray-400"}>
                      • At least 8 characters
                    </li>
                    <li className={passwordValid.number ? "text-green-600" : "text-gray-400"}>
                      • Contains a number
                    </li>
                    <li className={passwordValid.special ? "text-green-600" : "text-gray-400"}>
                      • Includes a special symbol
                    </li>
                  </ul>
                )}
              </label>

              <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
                Country of residence
                <select
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none"
                >
                  <option value="" disabled>
                    Select your country
                  </option>
                  {asianCountries.map((nation) => (
                    <option key={nation} value={nation}>
                      {nation}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
                Interests or focus areas
                <textarea
                  value={interests}
                  onChange={(event) => setInterests(event.target.value)}
                  placeholder="Tell us about what you want to learn, share, or explore"
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none"
                />
                <span className="text-xs text-gray-500">Optional—this helps us match you with better resources.</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!formIsValid}
              className={`mt-4 w-full py-2 rounded-md font-semibold transition ${
                formIsValid ? "bg-blue-600 text-white hover:bg-red-900" : "bg-blue-200 text-red-850 cursor-not-allowed"
              }`}
            >
              Sign Up
            </button>

            {statusMessage && (
              <p className="text-sm text-center text-gray-600">{statusMessage}</p>
            )}
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
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
