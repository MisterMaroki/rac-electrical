import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Electrical tips, guides and industry insights from RAC Maintenance & Electrical. Expert advice on lighting, safety, property maintenance and more.",
};

export default function BlogPage() {
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
            <span className="font-medium text-text">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-primary py-16 md:py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Blog</h1>
          <p className="text-lg text-white/80">
            Tips, guides and insights from our team of qualified electricians.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-xl text-primary mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-light text-sm line-clamp-2">{post.description}</p>
                  <span className="inline-block mt-4 text-accent font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-heading text-3xl mb-4">Need Electrical Advice?</h2>
          <p className="text-white/80 mb-8">Get in touch for a free, no-obligation quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Get a Quote
            </a>
            <a href="tel:07572459534" className="inline-block border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-lg transition-colors">
              Call 07572 459534
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
