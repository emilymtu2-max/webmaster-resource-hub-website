"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { saveSession } from "@/lib/session"; // Uncomment if you have this
// import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Or your icon library

const asianCountries = [
  // ...country list...
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
      // if (data.user) saveSession(data.user as SessionUser); // Uncomment if you have this
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
            {/* ...all your input fields as before... */}
            <button
              type="submit"
              className="mt-4 w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
              {/* <ArrowRightIcon /> */}
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