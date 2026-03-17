import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { getProjectsByServiceType } from "@/data/projects";
import { ServiceSchema, BreadcrumbSchema } from "@/components/structured-data";
import { ContactForm } from "@/components/contact-form";
import { CallButton } from "@/components/call-button";

export async function generateStaticParams() {
  return [
    { service: "consumer-unit-upgrades" },
    { service: "inspection-and-testing" },
    { service: "domestic-services" },
    { service: "fire-and-safety" },
    { service: "cctv-and-security" },
    { service: "property-maintenance" },
  ];
}

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://rac-electrical.vercel.app";

const serviceContent: Record<string, { metaTitle: string; metaDescription: string; intro: string; features: string[] }> = {
  "consumer-unit-upgrades": {
    metaTitle: "Consumer Unit Upgrades Brighton | RAC Maintenance & Electrical",
    metaDescription: "Professional consumer unit and fuseboard upgrades in Brighton. Ensure your home meets current electrical safety regulations with RAC Maintenance & Electrical.",
    intro: "An outdated consumer unit can be a serious safety risk. We replace old fuseboards with modern, regulation-compliant consumer units fitted with RCD protection, giving you and your family peace of mind that your home's electrical distribution is safe and up to date.",
    features: ["Full consumer unit replacements", "RCD protection upgrades", "Metal consumer unit installations", "Regulation compliance upgrades", "Emergency fuseboard repairs", "Completion certificates issued"],
  },
  "inspection-and-testing": {
    metaTitle: "EICR Electrical Testing Brighton | RAC Maintenance & Electrical",
    metaDescription: "Professional electrical inspection and testing. EICR certificates for landlords, homeowners and businesses across Brighton & Hove.",
    intro: "We provide thorough electrical inspections and testing to ensure your property meets current safety standards. Essential for landlords meeting legal requirements, homeowners wanting peace of mind, and commercial property managers ensuring compliance.",
    features: ["EICR certificates", "Landlord safety certificates", "Periodic inspection reports", "Completion certificates", "Pre-purchase electrical surveys", "Commercial electrical testing"],
  },
  "domestic-services": {
    metaTitle: "Domestic Electrician Brighton | RAC Maintenance & Electrical",
    metaDescription: "Complete home electrical services in Brighton & Hove. Socket repairs, rewiring, lighting installations and more from qualified electricians.",
    intro: "Whether you need broken sockets repaired, new lighting installed, or a full rewire, we deliver high-quality domestic electrical work with minimal disruption to your home life. No job is too small.",
    features: ["Socket repairs and replacements", "Lighting installations and downlights", "Full and partial rewiring", "Additional sockets and switches", "Outdoor and garden electrics", "Fault finding and repairs"],
  },
  "fire-and-safety": {
    metaTitle: "Smoke & Heat Alarms Brighton | RAC Maintenance & Electrical",
    metaDescription: "Smoke alarm, heat detector, and carbon monoxide alarm installation in Brighton. Keep your home safe with RAC Maintenance & Electrical.",
    intro: "Properly installed smoke and heat alarms save lives. We install, test, and maintain smoke detectors, heat alarms, and carbon monoxide detectors to keep your home and family protected. We ensure all installations meet current building regulations.",
    features: ["Smoke alarm installation", "Heat detector installation", "Carbon monoxide alarms", "Interlinked alarm systems", "Alarm testing and maintenance", "Landlord compliance alarms"],
  },
  "cctv-and-security": {
    metaTitle: "CCTV Installation Brighton | RAC Maintenance & Electrical",
    metaDescription: "Professional CCTV camera installation and security systems for homes and businesses in Brighton & Hove.",
    intro: "Protect your property with professionally installed CCTV and security systems. We supply and fit high-quality cameras for both residential and commercial properties, giving you peace of mind and deterring unwanted visitors.",
    features: ["HD CCTV camera installation", "Indoor and outdoor cameras", "Remote viewing setup", "Night vision cameras", "DVR/NVR recording systems", "Commercial security solutions"],
  },
  "property-maintenance": {
    metaTitle: "Property Maintenance Brighton | RAC Maintenance & Electrical",
    metaDescription: "Professional property maintenance in Brighton & Hove. Plastering, waterproofing, tiling, bathroom repairs and general property upkeep.",
    intro: "Beyond electrical work, we offer a comprehensive range of property maintenance services. From bathroom ceiling leak repairs and plastering to exterior wall crack repairs and tiling, we handle the jobs that keep your property in top condition.",
    features: ["Bathroom repairs and waterproofing", "Plastering and skimming", "Tiling (walls and floors)", "Exterior wall crack repairs", "General property maintenance", "Leak repair and prevention"],
  },
};

const serviceImages: Record<string, string> = {
  "consumer-unit-upgrades": "/images/service-domestic.jpg",
  "inspection-and-testing": "/images/service-inspection.jpg",
  "domestic-services": "/images/service-domestic.jpg",
  "fire-and-safety": "/images/service-fire-security.jpg",
  "cctv-and-security": "/images/service-commercial.jpg",
  "property-maintenance": "/images/service-bespoke-lighting.jpg",
};

const guarantees = [
  {
    title: "Fully Qualified",
    description: "Qualified electricians with years of hands-on experience.",
    icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
  },
  {
    title: "Fully Insured",
    description: "Complete public liability insurance on every job.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    title: "Expert Advice",
    description: "Honest, professional guidance tailored to your project.",
    icon: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z",
  },
  {
    title: "Clever Solutions",
    description: "Creative, practical approaches to every electrical challenge.",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
  {
    title: "Reliable & Trustworthy",
    description: "We turn up when we say we will and do what we promise.",
    icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
  },
  {
    title: "All Work Guaranteed",
    description: "Every job comes with a full workmanship guarantee.",
    icon: "M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const content = serviceContent[service];
  if (!content) return {};

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `${BASE_URL}/${service}` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const svc = services.find((s) => s.slug === service);
  if (!svc) return notFound();

  const content = serviceContent[service];
  if (!content) return notFound();

  const otherServices = services.filter((s) => s.slug !== svc.slug);
  const relatedProjects = getProjectsByServiceType(service);
  const heroImage = serviceImages[service];

  return (
    <>
      <ServiceSchema name={svc.title} description={content.metaDescription} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: svc.title, href: `/${svc.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-[var(--border)] pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-[var(--text-light)]">
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium text-[var(--dark)]">{svc.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <header className="relative py-20 lg:py-28 overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage}
            alt={svc.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} />
            </svg>
          </div>
          <br />
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            <span className="text-white/90 text-xs font-semibold tracking-wide">Qualified &amp; Fully Insured</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            {svc.title}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            {svc.description}
          </p>
          <CallButton />
        </div>
      </header>

      {/* Emergency response strip */}
      <div className="bg-[var(--dark)] text-white py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Fast Response Times
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            Fully Qualified
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            5.0 Star Rated
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            All Work Guaranteed
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
            Free Quotes
          </span>
        </div>
      </div>

      {/* Intro & Features */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-[var(--text)] leading-relaxed">{content.intro}</p>
              <div className="mt-8">
                <a
                  href="tel:07572459534"
                  className="inline-flex items-center gap-2 bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  07572 459534
                </a>
              </div>
            </div>
            <div>
              <h2
                className="text-xl font-bold text-[var(--dark)] mb-4"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                What We Offer
              </h2>
              <ul className="space-y-3">
                {content.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-[var(--text)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl text-[var(--dark)] text-center mb-12"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((g) => (
              <div key={g.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--border)] border-l-[3px] border-l-[var(--accent)] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[rgba(207,161,60,0.12)] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={g.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[var(--dark)] mb-2" style={{ fontFamily: "var(--font-heading), serif" }}>
                  {g.title}
                </h3>
                <p className="text-sm text-[var(--text-light)] leading-relaxed">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl text-[var(--dark)] text-center mb-4"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Related Projects
            </h2>
            <p className="text-center text-[var(--text-light)] mb-10 max-w-2xl mx-auto">
              Take a look at some of our recent {svc.title.toLowerCase()} projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="bg-white rounded-xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 block"
                >
                  <div className="relative aspect-[16/10] bg-gray-100">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                      {project.tag}
                    </span>
                    <h3
                      className="text-lg text-[var(--dark)] mb-2"
                      style={{ fontFamily: "var(--font-heading), serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-light)] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Services */}
      <section className="py-16 lg:py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl text-[var(--dark)] text-center mb-10"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Our Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="cursor-pointer bg-white rounded-xl p-6 border border-[var(--border)] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[var(--dark)] mb-2" style={{ fontFamily: "var(--font-heading), serif" }}>
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--text-light)] leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl text-[var(--dark)] text-center mb-4"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-center text-[var(--text-light)] mb-10">
            Interested in {svc.title.toLowerCase()}? Get in touch for a free quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-[var(--text-light)]">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Free Quotes
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Quick Response
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              Fully Qualified
            </span>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
