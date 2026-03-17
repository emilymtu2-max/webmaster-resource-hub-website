'use client';

import { useState, ChangeEvent } from 'react';

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  whereFound: string;
  sourceLink: string;
}

export default function SuggestionsFormPage() {
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', phone: '', email: '',
    whereFound: '', sourceLink: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        window.location.href = '/form';
      }
    } catch {
      console.error('Something went wrong.');
    }
  };

  const inputClass = "w-full bg-[#F5E6D0] text-[#6B0000] placeholder-[#b08060] rounded-xl px-4 py-3 border-2 border-[#D4A574] focus:outline-none focus:border-[#6B0000] transition-all";

  return (
    <main
      className="min-h-screen py-12 px-6"
      style={{
        backgroundImage: "url('/lantern-bg.avif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl font-bold text-[#6B0000] leading-tight mb-4">
          Suggest More Resources
        </h1>

        {/* Subtitle box */}
        <div className="bg-[#6B0000] rounded-xl px-5 py-3 mb-8 border border-[#8B1A1A] w-fit">
          <p className="text-[#F5E6D0] text-base font-medium">
            Do you have any resources or organizations that you'd like us to add to our resource hub? Fill out the form below!
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#e8d5c0] p-8 flex flex-col gap-5">

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              className={inputClass}
              value={form.firstName}
              onChange={handleChange}
            />
            <input
              name="lastName"
              placeholder="Last Name"
              className={inputClass}
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="phone"
              placeholder="Phone Number"
              className={inputClass}
              value={form.phone}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email Address"
              className={inputClass}
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Where found */}
          <textarea
            name="whereFound"
            placeholder="Where did you find the resource?"
            className={`${inputClass} resize-none`}
            value={form.whereFound}
            onChange={handleChange}
            rows={3}
          />

          {/* Source link */}
          <textarea
            name="sourceLink"
            placeholder="Paste source's link here~ If not available, describe the source (through book title, store address, etc.)"
            className={`${inputClass} resize-none`}
            value={form.sourceLink}
            onChange={handleChange}
            rows={3}
          />

          {/* Submit button */}
          <button
            className="bg-[#6B0000] text-white font-bold rounded-xl px-10 py-3 w-fit hover:bg-[#8B1A1A] shadow-[0_4px_14px_rgba(107,0,0,0.4)] hover:shadow-[0_4px_20px_rgba(107,0,0,0.6)] transition-all cursor-pointer"
            onClick={handleSubmit}
          >
            Submit Form
          </button>

        </div>
      </div>
    </main>
  );
}