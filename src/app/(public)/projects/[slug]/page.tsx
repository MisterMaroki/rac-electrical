import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.metaTitle,
    description: project.metaDescription,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream border-b border-border pt-16 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium text-text">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4 text-white">
            <span className="inline-block bg-accent text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              {project.tag}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl mb-2">{project.title}</h1>
            {project.client && <p className="text-white/80 text-lg">{project.client}</p>}
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      {project.keyStats && (
        <section className="bg-[var(--dark)] py-6">
          <div className="mx-auto max-w-4xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {project.keyStats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl md:text-3xl font-bold text-[var(--accent)]"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Overview + Details Sidebar */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <h2
                className="text-2xl text-[var(--dark)] mb-4"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Project Overview
              </h2>
              <p className="text-[var(--text)] leading-relaxed text-lg">
                {project.description}
              </p>
            </div>
            <div className="bg-cream rounded-xl p-6 h-fit">
              <h3
                className="text-lg text-[var(--primary)] mb-5 pb-3 border-b border-[var(--border)]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Project Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <div>
                    <span className="text-text-light text-xs uppercase tracking-wider font-semibold">Location</span>
                    <p className="text-[var(--text)] font-medium">{project.details.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                  </svg>
                  <div>
                    <span className="text-text-light text-xs uppercase tracking-wider font-semibold">Scope</span>
                    <p className="text-[var(--text)] font-medium">{project.details.scope}</p>
                  </div>
                </div>
                {project.details.duration && (
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                      <span className="text-text-light text-xs uppercase tracking-wider font-semibold">Duration</span>
                      <p className="text-[var(--text)] font-medium">{project.details.duration}</p>
                    </div>
                  </div>
                )}
                {project.details.year && (
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <div>
                      <span className="text-text-light text-xs uppercase tracking-wider font-semibold">Year</span>
                      <p className="text-[var(--text)] font-medium">{project.details.year}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                  </svg>
                  <div>
                    <span className="text-text-light text-xs uppercase tracking-wider font-semibold">Service</span>
                    <p className="text-[var(--text)] font-medium">{project.tag}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {/* The Challenge */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                </div>
                <h2
                  className="text-2xl text-[var(--dark)]"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  The Challenge
                </h2>
              </div>
              <p className="text-[var(--text)] leading-relaxed">{project.challenge}</p>
            </div>

            {/* Our Solution */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 4.556-4.03 8.25-9 8.25S3 16.556 3 12s4.03-8.25 9-8.25 9 3.694 9 8.25Z" />
                  </svg>
                </div>
                <h2
                  className="text-2xl text-[var(--dark)]"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  Our Solution
                </h2>
              </div>
              <p className="text-[var(--text)] leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl text-[var(--dark)]"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              The Results
            </h2>
            <div className="w-12 h-[2px] bg-[var(--accent)] mx-auto mt-3" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {project.results.map((result) => (
              <div
                key={result}
                className="flex items-start gap-3 bg-[var(--cream)] rounded-lg p-4"
              >
                <svg className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-[var(--text)]">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 bg-[var(--dark)]">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[var(--accent)]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-white text-lg sm:text-xl italic leading-relaxed mb-6">
              &ldquo;{project.testimonial.text}&rdquo;
            </blockquote>
            <cite className="not-italic">
              <span className="block text-white font-semibold">{project.testimonial.name}</span>
              <span className="block text-white/60 text-sm">{project.testimonial.role}</span>
            </cite>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2
            className="text-2xl sm:text-3xl mb-3"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Interested in a Similar Project?
          </h2>
          <p className="text-white/80 mb-8">
            Get in touch to discuss your requirements. We offer free, no-obligation quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Get a Quote
            </a>
            <a href="tel:07572459534" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/70 font-semibold px-8 py-3 rounded-lg transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              Call 07572 459534
            </a>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="mx-auto max-w-6xl px-4">
            <h2
              className="text-2xl text-[var(--primary)] mb-8 text-center"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              More Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={p.images[0]} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">{p.tag}</span>
                  </div>
                  <div className="p-5">
                    <h3
                      className="text-lg text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors"
                      style={{ fontFamily: "var(--font-heading), serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-text-light text-sm mt-1">{p.details.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
