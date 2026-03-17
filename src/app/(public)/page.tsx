import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { ServiceCard } from "@/components/service-card";
import { ReviewCard } from "@/components/review-card";
import { FAQSection } from "@/components/faq-section";
import { FAQPageSchema } from "@/components/structured-data";
import { StatCounter } from "@/components/stat-counter";
import { QuoteButton } from "@/components/quote-button";

const faqs = [
  {
    question: "What areas do you cover?",
    answer:
      "We are based in Brighton (BN1) and cover Brighton & Hove and the surrounding areas. Whether you need an electrician or property maintenance work, we're happy to discuss your project.",
  },
  {
    question: "Are you fully qualified and insured?",
    answer:
      "Yes. We are fully qualified electricians and fully insured. All work is carried out to the highest standards and in compliance with current regulations.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes, we offer free, no-obligation quotes for all our services. Contact us with your project details and we'll provide a competitive estimate.",
  },
  {
    question: "What electrical services do you offer?",
    answer:
      "We provide a wide range of electrical services including consumer unit upgrades, EICR certificates, rewiring, fault finding, lighting installations, CCTV, fire safety systems, and general electrical maintenance for homes and businesses.",
  },
  {
    question: "Do you offer property maintenance services?",
    answer:
      "Yes, alongside our electrical services we offer general property maintenance including bathroom repairs, plumbing fixes, carpentry, and other handyman services. We're a one-stop shop for property upkeep.",
  },
  {
    question: "How quickly can you respond to emergencies?",
    answer:
      "We understand electrical emergencies can't wait. Call us directly and we'll do our best to respond as quickly as possible. We're available 7 days a week for urgent work across Brighton & Hove.",
  },
];

const reviews = [
  {
    name: "Sarah",
    location: "Brighton, BN1",
    rating: 5,
    text: "Fantastic service from start to finish. The consumer unit upgrade was completed quickly and professionally. Very tidy work and great communication throughout. Would highly recommend to anyone in Brighton.",
  },
  {
    name: "James",
    location: "Hove, BN3",
    rating: 5,
    text: "Called about an emergency fault and they responded the same day. Diagnosed the issue quickly and had everything sorted within a couple of hours. Fair pricing and very knowledgeable. Will definitely use again.",
  },
  {
    name: "Michelle",
    location: "Brighton, BN2",
    rating: 5,
    text: "Used RAC for both electrical work and some property maintenance jobs. Really convenient having one reliable tradesperson for multiple tasks. Quality workmanship and honest pricing every time.",
  },
  {
    name: "David",
    location: "Hove, BN3",
    rating: 5,
    text: "Had an EICR done on my rental property and some remedial work afterwards. Everything was explained clearly, the report was thorough, and the follow-up work was completed to a high standard. Very professional service.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQPageSchema faqs={faqs} />

      {/* ========== HERO ========== */}
      <header
        className="relative min-h-[85vh] flex items-center overflow-hidden py-28 lg:py-32"
        style={{
          background:
            "linear-gradient(145deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.88) 50%, rgba(15,23,42,0.85) 100%), url('/images/hero-bg.jpg') center/cover no-repeat",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <svg className="w-5 h-5 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            <span className="text-white/90 text-sm font-semibold tracking-wide">Brighton&apos;s Trusted Electrician</span>
          </div>

          <h1
            className="text-white text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Brighton&apos;s Trusted{" "}
            <span
              className="text-[var(--accent)] relative inline-block"
              style={{
                backgroundImage: "linear-gradient(90deg, var(--accent), #e8c45a, var(--accent), #e8c45a, var(--accent))",
                backgroundSize: "300% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 6s ease-in-out infinite",
              }}
            >
              Electrician &amp; Property Maintenance
            </span>
          </h1>

          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            RAC Maintenance &amp; Electrical provides professional electrical and property maintenance services across Brighton &amp; Hove. From consumer unit upgrades to bathroom repairs, we deliver quality work at competitive prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <QuoteButton className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-lg text-lg text-[var(--dark)] bg-[var(--accent)] hover:bg-[var(--accent-dark)] transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
              Get A Quote
            </QuoteButton>
            <a
              href="tel:07572459534"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-lg text-lg text-white border-2 border-white/40 hover:bg-white/10 hover:border-white/70 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us
            </a>
          </div>

          {/* Trusted by line with stars */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[var(--accent)]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-white/60 text-sm font-medium tracking-wide">Trusted by homeowners &amp; landlords across Brighton</p>
          </div>
        </div>

        {/* Shimmer animation keyframes */}
        <style>{`
          @keyframes shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            fill="var(--cream)"
            className="block w-full h-[60px]"
          >
            <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </header>

      {/* ========== EMERGENCY CALLOUT ========== */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
                  <svg className="w-4 h-4 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-xs font-bold tracking-wide uppercase">Emergency Service</span>
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  Electrical Emergency?
                </h2>
                <p className="text-white/85 text-base sm:text-lg mb-2">
                  Power out? Sparking socket? Burning smell? Don&apos;t wait &mdash; call us directly for an immediate response.
                </p>
                <p className="text-white/60 text-sm flex items-center justify-center lg:justify-start gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Available 7 days a week &bull; Fast response across Brighton &amp; Hove
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href="tel:07572459534"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-xl text-lg hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 07572 459534
                </a>
                <a
                  href="https://wa.me/447572459534?text=Hi%2C%20I%20have%20an%20electrical%20emergency%20and%20need%20help%20urgently."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#25D366] text-white font-bold rounded-xl text-base hover:bg-[#1fb855] transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block font-semibold text-xs tracking-[0.15em] uppercase text-[var(--primary)] bg-[rgba(207,161,60,0.15)] px-4 py-1.5 rounded-full mb-4">
              What We Do
            </span>
            <h2
              className="text-3xl sm:text-4xl text-[var(--dark)] mb-3"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Our Services
            </h2>
            <p className="text-[var(--text-light)] text-lg max-w-xl mx-auto">
              From electrical installations to property maintenance, we deliver
              quality workmanship across Brighton &amp; Hove.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={`/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT SNAPSHOT ========== */}
      <section
        id="about"
        className="py-20 lg:py-28 relative"
        style={{
          backgroundColor: "var(--cream)",
          backgroundImage: "radial-gradient(circle at 20px 20px, rgba(207,161,60,0.04) 2px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image with Est. badge */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/service-commercial.jpg"
                  alt="RAC Maintenance & Electrical at work in Brighton"
                  width={600}
                  height={400}
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <span className="inline-block font-semibold text-xs tracking-[0.15em] uppercase text-[var(--primary)] bg-[rgba(207,161,60,0.15)] px-4 py-1.5 rounded-full mb-4">
                About Us
              </span>
              <h2
                className="text-3xl sm:text-4xl text-[var(--dark)] mb-6"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Your Local Brighton Electrician
              </h2>
              <p className="text-[var(--text-light)] text-lg mb-6">
                RAC Maintenance &amp; Electrical is a professional electrician based in Brighton, offering a wide range of electrical and property maintenance services. We take pride in delivering quality workmanship, honest pricing, and reliable service to homeowners, landlords, and businesses across Brighton &amp; Hove.
              </p>

              {/* Quote callout */}
              <blockquote className="border-l-4 border-[var(--accent)] bg-white rounded-r-lg px-6 py-4 mb-8 shadow-sm">
                <p className="text-[var(--text)] italic mb-2">
                  &ldquo;We believe in doing the job right the first time &mdash; quality work, fair prices, and no shortcuts.&rdquo;
                </p>
                <cite className="text-sm font-semibold text-[var(--primary)] not-italic">
                  &mdash; RAC Maintenance &amp; Electrical
                </cite>
              </blockquote>

              <h3
                className="text-lg text-[var(--dark)] mb-4"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Why Choose Us
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { label: "Fully Qualified", icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" },
                  { label: "Fully Insured", icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" },
                  { label: "Expert Advice", icon: "M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" },
                  { label: "Clever Solutions", icon: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" },
                  { label: "Reliable & Trustworthy", icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" },
                  { label: "All Work Guaranteed", icon: "M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .982-3.172M12 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-[var(--text)]"
                  >
                    <div className="w-8 h-8 rounded-full bg-[rgba(207,161,60,0.15)] flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-[var(--accent)]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={item.icon} />
                      </svg>
                    </div>
                    {item.label}
                  </li>
                ))}
              </ul>

              <QuoteButton className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--dark)] font-bold rounded-lg text-lg shadow-lg hover:bg-[var(--accent-dark)] transition-all duration-300 hover:-translate-y-0.5">
                Get A Quote
              </QuoteButton>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS COUNTER ========== */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-[var(--primary)]">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(165deg, var(--primary) 0%, var(--primary-dark, #1c2a5a) 50%, var(--dark) 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
            {[
              {
                icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
                end: 10,
                suffix: "+",
                label: "Years Experience",
                description: "Experienced electricians",
              },
              {
                icon: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743",
                end: 100,
                suffix: "+",
                label: "Projects Completed",
                description: "Domestic & commercial",
              },
              {
                icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
                end: 5,
                label: "Star Reviews",
                isStatic: true,
                staticValue: "5.0",
                description: "Customer satisfaction",
              },
              {
                icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
                end: 100,
                suffix: "%",
                label: "Satisfaction Rate",
                description: "All work guaranteed",
              },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`relative text-center py-8 lg:py-10 px-4${i < 3 ? " lg:border-r lg:border-white/10" : ""}`}
              >
                <div className="mb-5">
                  <StatCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    label={stat.label}
                    isStatic={stat.isStatic}
                    staticValue={stat.staticValue}
                  />
                </div>
                <p className="text-white/40 text-xs">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RECENT PROJECTS ========== */}
      <section id="projects" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block font-semibold text-xs tracking-[0.15em] uppercase text-[var(--primary)] bg-[rgba(207,161,60,0.15)] px-4 py-1.5 rounded-full mb-4">
              Our Work
            </span>
            <h2
              className="text-3xl sm:text-4xl text-[var(--dark)] mb-3"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Recent Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block bg-white rounded-xl overflow-hidden border border-[var(--border)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Hover overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-semibold flex items-center gap-1">
                      View Project
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[var(--primary)] bg-[var(--primary-light)] px-3 py-1 rounded-full mb-3">
                    {project.tag}
                  </span>
                  <h3
                    className="text-lg text-[var(--dark)] mb-2"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-light)] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-[var(--primary)] group-hover:text-[var(--primary-dark)] transition-colors">
                    View Project
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Projects button */}
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section id="reviews" className="py-20 lg:py-28 bg-[var(--dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block font-semibold text-xs tracking-[0.15em] uppercase text-[var(--accent)] bg-[rgba(207,161,60,0.15)] px-4 py-1.5 rounded-full mb-4">
              Testimonials
            </span>
            <h2
              className="text-3xl sm:text-4xl text-white mb-4"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              What Our Clients Say
            </h2>
            <p className="text-white/60 text-base mb-6 max-w-xl mx-auto">
              Read what our customers in Brighton &amp; Hove have to say about our work.
            </p>
            {/* Overall rating display */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-4xl font-bold text-[var(--accent)]" style={{ fontFamily: "var(--font-heading), serif" }}>5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--accent)]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/60 text-sm">out of 5 stars</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section
        className="relative py-20 lg:py-24 bg-[var(--primary)] overflow-hidden"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl text-white mb-4"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get in touch for a free, no-obligation quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <QuoteButton className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-lg text-lg text-[var(--dark)] bg-[var(--accent)] hover:bg-[var(--accent-dark)] transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
              Get A Quote
            </QuoteButton>
            <a
              href="tel:07572459534"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-lg text-lg text-white border-2 border-white/40 hover:bg-white/10 hover:border-white/70 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call 07572 459534
            </a>
          </div>
          <p className="text-white/50 text-sm mt-4 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            We typically respond within 24 hours
          </p>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="py-20 lg:py-28 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block font-semibold text-xs tracking-[0.15em] uppercase text-[var(--primary)] bg-[rgba(207,161,60,0.15)] px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2
              className="text-3xl sm:text-4xl text-[var(--dark)] mb-3"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--text-light)] text-lg max-w-xl mx-auto">
              Everything you need to know about our electrical services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQSection faqs={faqs} />

            {/* Can't find your answer CTA */}
            <div className="mt-10 text-center bg-white rounded-xl border border-[var(--border)] p-6 shadow-sm">
              <p className="text-[var(--text)] font-medium mb-3">
                Can&apos;t find your answer?
              </p>
              <a
                href="tel:07572459534"
                className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call us on 07572 459534
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
