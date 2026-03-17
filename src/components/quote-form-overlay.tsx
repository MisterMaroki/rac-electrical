"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useQuoteForm } from "./quote-form-context";

const serviceOptions = [
  { label: "Emergency", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { label: "Commercial Services", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { label: "Bespoke Lighting Design", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { label: "Domestic Services", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { label: "Inspection & Testing", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { label: "Smart Installations", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { label: "Fire & Security", icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" },
];

const urgencyOptions = [
  { label: "Emergency — Right Now", description: "I need help immediately", color: "bg-red-50 border-red-200 hover:border-red-400" },
  { label: "Today", description: "I need help sometime today", color: "bg-amber-50 border-amber-200 hover:border-amber-400" },
  { label: "This Week", description: "It can wait a few days", color: "bg-blue-50 border-blue-200 hover:border-blue-400" },
  { label: "Just a Quote", description: "I'm looking for pricing", color: "bg-gray-50 border-gray-200 hover:border-gray-400" },
];

export function QuoteFormOverlay() {
  const { isOpen, closeQuoteForm } = useQuoteForm();
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [urgency, setUrgency] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStep(1);
        setService("");
        setUrgency("");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setIsSubmitting(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key closes
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuoteForm();
    },
    [closeQuoteForm]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setIsSubmitting(true);

    // Simulate form submission (replace with real endpoint later)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStep(4);
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-white animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <Image
          src="/images/logo.png"
          alt="RAC Maintenance & Electrical"
          width={160}
          height={40}
          className="h-8 sm:h-10 w-auto brightness-0"
        />
        <button
          onClick={closeQuoteForm}
          className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          aria-label="Close quote form"
        >
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-xl mx-auto px-6 py-10 sm:py-16">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div>
              <h2
                className="text-2xl sm:text-3xl text-[var(--dark)] mb-2 text-center"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                What service are you interested in?
              </h2>
              <p className="text-[var(--text-light)] text-center mb-8">
                Select the service that best matches your needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => {
                      setService(opt.label);
                      setStep(2);
                    }}
                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 hover:border-[var(--primary)] hover:bg-[var(--primary-light)] text-left transition-all duration-200 group"
                  >
                    <div className="w-11 h-11 rounded-full bg-[var(--primary-light)] group-hover:bg-[var(--primary)] flex items-center justify-center shrink-0 transition-colors">
                      <svg
                        className="w-5 h-5 text-[var(--primary)] group-hover:text-white transition-colors"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={opt.icon} />
                      </svg>
                    </div>
                    <span className="font-medium text-[var(--dark)]">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Urgency */}
          {step === 2 && (
            <div>
              <h2
                className="text-2xl sm:text-3xl text-[var(--dark)] mb-2 text-center"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                How urgent is it?
              </h2>
              <p className="text-[var(--text-light)] text-center mb-8">
                This helps us prioritise your request.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {urgencyOptions.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => {
                      setUrgency(opt.label);
                      setStep(3);
                    }}
                    className={`p-5 rounded-xl border-2 text-left transition-all duration-200 ${opt.color}`}
                  >
                    <span className="font-semibold text-[var(--dark)] block">{opt.label}</span>
                    <span className="text-sm text-[var(--text-light)]">{opt.description}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <div>
              <h2
                className="text-2xl sm:text-3xl text-[var(--dark)] mb-2 text-center"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                How can we reach you?
              </h2>
              <p className="text-[var(--text-light)] text-center mb-8">
                We&apos;ll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="quote-name" className="block text-sm font-medium text-[var(--dark)] mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-[var(--dark)]"
                  />
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block text-sm font-medium text-[var(--dark)] mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-[var(--dark)]"
                  />
                </div>
                <div>
                  <label htmlFor="quote-email" className="block text-sm font-medium text-[var(--dark)] mb-1.5">
                    Email <span className="text-[var(--text-light)]">(optional)</span>
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-[var(--dark)]"
                  />
                </div>
                <div>
                  <label htmlFor="quote-message" className="block text-sm font-medium text-[var(--dark)] mb-1.5">
                    Message <span className="text-[var(--text-light)]">(optional)</span>
                  </label>
                  <textarea
                    id="quote-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us more about your project..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-[var(--dark)] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold rounded-lg text-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Quote Request"}
                </button>
              </form>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2
                className="text-2xl sm:text-3xl text-[var(--dark)] mb-3"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Quote Request Sent!
              </h2>
              <p className="text-[var(--text-light)] text-lg mb-8 max-w-md mx-auto">
                Thanks, {name.split(" ")[0]}! We&apos;ll be in touch shortly. For immediate assistance:
              </p>
              <div className="flex flex-col gap-3 max-w-sm mx-auto">
                <a
                  href={`https://wa.me/447572459534?text=${encodeURIComponent(
                    `Hi, I just submitted a quote request on your website.\n\nService: ${service}\nUrgency: ${urgency}\nName: ${name}\nPhone: ${phone}${email ? `\nEmail: ${email}` : ""}${message ? `\nMessage: ${message}` : ""}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold rounded-lg text-lg transition-all duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href="tel:07572459534"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-[var(--dark)] font-bold rounded-lg text-lg transition-all duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call 07572 459534
                </a>
                <button
                  onClick={closeQuoteForm}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-[var(--dark)] font-bold rounded-lg text-lg transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer: Progress dots + Back button */}
      {step < 4 && (
        <div className="px-6 py-5 border-t border-gray-100 flex items-center justify-between">
          <div>
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-1.5 text-sm font-medium text-[var(--text-light)] hover:text-[var(--dark)] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((dot) => (
              <div
                key={dot}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  dot === step
                    ? "bg-[var(--primary)]"
                    : dot < step
                    ? "bg-[var(--primary)]/40"
                    : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          <div className="w-14" /> {/* Spacer for centering dots */}
        </div>
      )}
    </div>
  );
}
