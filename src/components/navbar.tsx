"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { useQuoteForm } from "./quote-form-context";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { openQuoteForm } = useQuoteForm();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const solid = true;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isServiceActive = services.some((s) => pathname === `/${s.slug}`);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.04)] border-b border-gray-200/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/images/logo.png"
                alt="RAC Maintenance & Electrical"
                width={800}
                height={370}
                className={`h-11 w-auto transition-all duration-500 ${solid ? "brightness-0" : "drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"}`}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              <Link
                href="/"
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  solid
                    ? isActive("/")
                      ? "text-[var(--primary)] bg-[var(--primary-light)]"
                      : "text-[var(--dark)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)]"
                    : isActive("/")
                      ? "text-white bg-white/15"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                    solid
                      ? (servicesOpen || isServiceActive)
                        ? "text-[var(--primary)] bg-[var(--primary-light)]"
                        : "text-[var(--dark)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)]"
                      : (servicesOpen || isServiceActive)
                        ? "text-white bg-white/15"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Services
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                      : "opacity-0 -translate-y-2 pointer-events-none scale-[0.97]"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] p-5 w-[560px] ring-1 ring-black/[0.03]">
                    {/* Services Grid */}
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((service) => {
                        const active = pathname === `/${service.slug}`;
                        return (
                          <Link
                            key={service.slug}
                            href={`/${service.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className={`group flex items-start gap-3 p-3 rounded-xl transition-all duration-200 ${
                              active
                                ? "bg-gradient-to-br from-[var(--primary-light)] to-blue-50/50"
                                : "hover:bg-gradient-to-br hover:from-[var(--primary-light)] hover:to-blue-50/50"
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                              active
                                ? "bg-white shadow-sm"
                                : "bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-white group-hover:to-blue-50 group-hover:shadow-sm"
                            }`}>
                              <svg
                                className={`w-5 h-5 transition-colors duration-200 ${
                                  active ? "text-[var(--primary)]" : "text-gray-400 group-hover:text-[var(--primary)]"
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                              </svg>
                            </div>
                            <div className="min-w-0 pt-0.5">
                              <p className={`text-[13px] font-semibold transition-colors duration-200 leading-tight ${
                                active ? "text-[var(--primary)]" : "text-[var(--dark)] group-hover:text-[var(--primary)]"
                              }`}>
                                {service.title}
                              </p>
                              <p className="text-[11px] text-[var(--text-light)] leading-snug mt-1 line-clamp-2">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Footer */}
                    <div className="mt-3 pt-3 border-t border-gray-100/80 flex items-center justify-between">
                      <p className="text-[11px] text-[var(--text-light)]">
                        Your local Brighton electrician
                      </p>
                      <a
                        href="tel:07572459534"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent hover:bg-accent/90 text-white text-xs font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        07572 459534
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    solid
                      ? isActive(link.href)
                        ? "text-[var(--primary)] bg-[var(--primary-light)]"
                        : "text-[var(--dark)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)]"
                      : isActive(link.href)
                        ? "text-white bg-white/15"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="ml-3 pl-3 border-l border-gray-200/60">
                <button
                  onClick={openQuoteForm}
                  className={`group inline-flex items-center gap-2 px-5 py-2.5 font-bold rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${
                    solid
                      ? "bg-accent text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:bg-accent/90"
                      : "bg-white text-[var(--dark)] shadow-lg shadow-black/10 hover:shadow-xl hover:bg-white/95"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Mobile Hamburger — animated bars */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
                solid ? "hover:bg-gray-100" : "hover:bg-white/10"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-5 h-5 relative flex flex-col justify-center items-center">
                <span
                  className={`block h-[2px] w-5 rounded-full transition-all duration-300 absolute ${
                    solid ? "bg-[var(--dark)]" : "bg-white"
                  } ${mobileOpen ? "rotate-45 top-[9px]" : "top-[4px]"}`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full transition-all duration-300 absolute top-[9px] ${
                    solid ? "bg-[var(--dark)]" : "bg-white"
                  } ${mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"}`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full transition-all duration-300 absolute ${
                    solid ? "bg-[var(--dark)]" : "bg-white"
                  } ${mobileOpen ? "-rotate-45 top-[9px]" : "top-[14px]"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-0 top-16 md:top-20 z-50 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 bg-white/95 backdrop-blur-2xl shadow-2xl flex flex-col overflow-y-auto transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-0.5 p-5">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 font-medium rounded-xl transition-colors ${
                isActive("/")
                  ? "text-[var(--primary)] bg-[var(--primary-light)]"
                  : "text-[var(--dark)] hover:bg-[var(--primary-light)]"
              }`}
            >
              <svg className={`w-4.5 h-4.5 ${isActive("/") ? "text-[var(--primary)]" : "text-[var(--text-light)]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-colors w-full text-left ${
                isServiceActive
                  ? "text-[var(--primary)] bg-[var(--primary-light)]"
                  : "text-[var(--dark)] hover:bg-[var(--primary-light)]"
              }`}
            >
              <span className="flex items-center gap-3">
                <svg className={`w-4.5 h-4.5 ${isServiceActive ? "text-[var(--primary)]" : "text-[var(--text-light)]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Services
              </span>
              <svg
                className={`w-4 h-4 text-[var(--text-light)] transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-4 pl-4 border-l-2 border-[var(--primary-light)] space-y-0.5 py-1">
                {services.map((service) => {
                  const active = pathname === `/${service.slug}`;
                  return (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                        active
                          ? "bg-[var(--primary-light)] text-[var(--primary)] font-medium"
                          : "hover:bg-[var(--primary-light)]"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 shrink-0 ${active ? "text-[var(--primary)]" : "text-[var(--primary)]"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                      </svg>
                      <span className={`text-sm ${active ? "text-[var(--primary)]" : "text-[var(--text)]"}`}>{service.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {navLinks.map((link) => {
              const icons: Record<string, string> = {
                Projects: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z",
                Blog: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
                Contact: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              };
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 font-medium rounded-xl transition-colors ${
                    active
                      ? "text-[var(--primary)] bg-[var(--primary-light)]"
                      : "text-[var(--dark)] hover:bg-[var(--primary-light)]"
                  }`}
                >
                  <svg className={`w-4.5 h-4.5 ${active ? "text-[var(--primary)]" : "text-[var(--text-light)]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icons[link.label] || ""} />
                  </svg>
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="p-5 mt-auto space-y-3">
            <button
              onClick={() => { setMobileOpen(false); openQuoteForm(); }}
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-accent text-white font-bold rounded-xl text-base shadow-lg shadow-[var(--accent)]/20 hover:shadow-xl hover:bg-accent/90 transition-all duration-300 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get a Free Quote
            </button>
            <p className="text-center text-[11px] text-[var(--text-light)]">
              Your local Brighton electrician
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
