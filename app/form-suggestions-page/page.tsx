'use client';

import { useState, ChangeEvent } from 'react';
<<<<<<< HEAD
import React from 'react';
import { ArrowRightIcon } from "lucide-react";
=======
>>>>>>> 3063e78f13efaa58afcf556e50600e70cc383442

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
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus(null);
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ firstName: '', lastName: '', phone: '', email: '', whereFound: '', sourceLink: '' });
      } else {
        const data = await res.json();
        setStatus(data.error || 'error');
      }
    } catch {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-[#FDF6EC] py-12 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <div className="breadcrumbs text-[#8B1A1A] text-sm mb-6 opacity-70">
          <ul>
            <li>Home</li>
            <li>Resource Hub</li>
            <li><strong>Suggest More Resources</strong></li>
          </ul>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-[#6B0000] leading-tight mb-4">
          Suggest More Resources
        </h1>
        <p className="text-[#6B0000] text-base mb-10 max-w-xl opacity-80">
          Do you have any resources or organizations that you'd like us to add to our resource hub? Fill out the form below!
        </p>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-5">

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              className="input border border-[#e0c9b0] bg-[#FDF6EC] text-[#6B0000] placeholder-[#b08060] rounded-xl w-full focus:outline-none focus:border-[#8B1A1A]"
              value={form.firstName}
              onChange={handleChange}
            />
            <input
              name="lastName"
              placeholder="Last Name"
              className="input border border-[#e0c9b0] bg-[#FDF6EC] text-[#6B0000] placeholder-[#b08060] rounded-xl w-full focus:outline-none focus:border-[#8B1A1A]"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="phone"
              placeholder="Phone Number"
              className="input border border-[#e0c9b0] bg-[#FDF6EC] text-[#6B0000] placeholder-[#b08060] rounded-xl w-full focus:outline-none focus:border-[#8B1A1A]"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email Address"
              className="input border border-[#e0c9b0] bg-[#FDF6EC] text-[#6B0000] placeholder-[#b08060] rounded-xl w-full focus:outline-none focus:border-[#8B1A1A]"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Where found */}
          <textarea
            name="whereFound"
            placeholder="Where did you find the resource?"
            className="textarea border border-[#e0c9b0] bg-[#FDF6EC] text-[#6B0000] placeholder-[#b08060] rounded-xl w-full focus:outline-none focus:border-[#8B1A1A] resize-none"
            value={form.whereFound}
            onChange={handleChange}
            rows={3}
          />

          {/* Source link */}
          <textarea
            name="sourceLink"
            placeholder="Paste source's link here~ If not available, describe the source (through book title, store address, etc.)"
            className="textarea border border-[#e0c9b0] bg-[#FDF6EC] text-[#6B0000] placeholder-[#b08060] rounded-xl w-full focus:outline-none focus:border-[#8B1A1A] resize-none"
            value={form.sourceLink}
            onChange={handleChange}
            rows={3}
          />

          {/* Status messages */}
          {status === 'success' && (
            <div className="alert bg-green-50 border border-green-300 text-green-700 rounded-xl">
              <span>✓ Your suggestion has been submitted successfully!</span>
            </div>
          )}
          {status && status !== 'success' && (
            <div className="alert bg-red-50 border border-red-300 text-red-700 rounded-xl">
              <span>✗ {status}</span>
            </div>
          )}

<<<<<<< HEAD
          <button className="cta-button mt-2 w-fit" onClick={handleSubmit}>
=======
          {/* Submit button */}
          <button
            className="btn bg-[#6B0000] text-white border-none font-bold w-fit px-10 hover:bg-[#8B1A1A] rounded-xl"
            onClick={handleSubmit}
          >
>>>>>>> 3063e78f13efaa58afcf556e50600e70cc383442
            Submit Form
            <ArrowRightIcon />
          </button>

        </div>
      </div>
    </main>
  );
<<<<<<< HEAD
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    backgroundColor: '#6B0000',
    padding: '40px 0',
    minHeight: '60vh',
  },
  container: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '0 24px',
  },
  breadcrumb: {
    color: '#F5C842',
    fontSize: '14px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '52px',
    fontWeight: 'bold',
    color: '#F5C842',
    lineHeight: 1.1,
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#fff',
    marginBottom: '36px',
    maxWidth: '540px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  input: {
    backgroundColor: '#8B1A1A',
    border: 'none',
    borderRadius: '8px',
    padding: '18px 16px',
    color: '#fff',
    fontSize: '15px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  },
  textarea: {
    backgroundColor: '#8B1A1A',
    border: 'none',
    borderRadius: '8px',
    padding: '18px 16px',
    color: '#fff',
    fontSize: '15px',
    outline: 'none',
    resize: 'vertical',
    width: '100%',
    boxSizing: 'border-box',
  },
  successMsg: { color: '#90EE90', fontWeight: 'bold' },
  errorMsg: { color: '#FF6B6B', fontWeight: 'bold' },
};
=======
}
>>>>>>> 3063e78f13efaa58afcf556e50600e70cc383442
