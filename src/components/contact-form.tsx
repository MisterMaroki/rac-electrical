"use client";

import { useState, useRef } from "react";

const serviceOptions = [
  "Commercial Services",
  "Bespoke Lighting Design",
  "Domestic Services",
  "Inspection & Testing",
  "Smart Installations",
  "Fire & Security",
  "Other",
];

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        formRef.current?.reset();
      }, 3000);
    }, 1000);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-[var(--text)] mb-1.5"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--text)] placeholder:text-[var(--text-light)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[var(--text)] mb-1.5"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Your phone number"
          className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--text)] placeholder:text-[var(--text-light)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--text)] mb-1.5"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--text)] placeholder:text-[var(--text-light)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
        />
      </div>

      {/* Service Needed */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-[var(--text)] mb-1.5"
        >
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Describe Your Issue */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--text)] mb-1.5"
        >
          Describe Your Issue
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--text)] placeholder:text-[var(--text-light)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-y"
        />
      </div>

      {/* Success Message */}
      {success && (
        <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
          Thanks! We&apos;ll call you back shortly.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={sending}
        className="w-full px-8 py-4 bg-[var(--accent)] text-white font-bold rounded-lg text-lg shadow-lg hover:bg-[var(--accent-dark)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {sending ? "Sending..." : "Get Free Quote"}
      </button>
    </form>
  );
}
