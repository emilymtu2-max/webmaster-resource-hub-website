'use client';
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from 'react';
import React from 'react';

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  whereFound: string;
  sourceLink: string;
}

export default function SuggestionsFormPage() {
  const router = useRouter();
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
        router.push("/form-suggestions-page");
      }
    } catch {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <nav style={styles.breadcrumb}>
          Home / Resource Hub / <strong>Suggest More Resources</strong>
        </nav>

        <h1 style={styles.title}>Suggest More<br />Resources</h1>
        <p style={styles.subtitle}>
          Do you have any resources/organizations that you'd like us to put on our resource hub?
        </p>

        <div style={styles.form}>
          <div style={styles.row}>
            <input style={styles.input} name="firstName" placeholder="First Name"
              value={form.firstName} onChange={handleChange} />
            <input style={styles.input} name="lastName" placeholder="Last Name"
              value={form.lastName} onChange={handleChange} />
          </div>

          <div style={styles.row}>
            <input style={styles.input} name="phone" placeholder="Phone Number"
              value={form.phone} onChange={handleChange} />
            <input style={styles.input} name="email" placeholder="Email Address"
              value={form.email} onChange={handleChange} />
          </div>

          <textarea style={styles.textarea} name="whereFound"
            placeholder="Where did you find the resource?"
            value={form.whereFound} onChange={handleChange} rows={3} />

          <textarea style={styles.textarea} name="sourceLink"
            placeholder="Paste source's link here~ If not available, describe the source (through book title, store address, etc.)"
            value={form.sourceLink} onChange={handleChange} rows={3} />

          {status === 'success' && (
            <p style={styles.successMsg}>✓ Your suggestion has been submitted!</p>
          )}
          {status && status !== 'success' && (
            <p style={styles.errorMsg}>✗ {status}</p>
          )}

          <button style={styles.button} onClick={handleSubmit}>
            Submit Form
          </button>
        </div>
      </div>
    </main>
  );
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
  button: {
    backgroundColor: '#F5C842',
    color: '#3D0000',
    border: 'none',
    borderRadius: '8px',
    padding: '16px 40px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    marginTop: '8px',
  },
  successMsg: { color: '#90EE90', fontWeight: 'bold' },
  errorMsg: { color: '#FF6B6B', fontWeight: 'bold' },
};