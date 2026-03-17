import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";
import { CallButton } from "@/components/call-button";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://rac-electrical.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${BASE_URL}/blog/${post.slug}`,
      images: [{ url: `${BASE_URL}${post.image}`, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-[var(--border)] pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-[var(--text-light)]">
            <Link
              href="/"
              className="hover:text-[var(--primary)] transition-colors"
            >
              Home
            </Link>
            <svg
              className="w-4 h-4 shrink-0"
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
            <span className="hover:text-[var(--primary)] transition-colors">Blog</span>
            <svg
              className="w-4 h-4 shrink-0"
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
            <span className="font-medium text-[var(--dark)]">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <header className="relative">
        <div className="relative aspect-[21/9] max-h-[400px] w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-white bg-[var(--primary)] px-3 py-1 rounded-full mb-3">
              {post.tag}
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              {post.title}
            </h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-none [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[var(--dark)] [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[var(--dark)] [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:text-[var(--text)] [&>p]:leading-relaxed [&>p]:mb-4 [&>ul]:pl-6 [&>ul]:mb-4 [&>ol]:pl-6 [&>ol]:mb-4 [&>ul]:list-disc [&>ol]:list-decimal [&_li]:text-[var(--text)] [&_li]:mb-2 [&_li]:leading-relaxed [&_strong]:text-[var(--dark)] [&_strong]:font-semibold"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
          />
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl text-white mb-4"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Need an Electrician?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Get in touch for a free quote on any electrical project.
            Call us or fill in a contact form and we will get back to you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:07572459534"
              className="inline-flex items-center gap-2 bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              07572 459534
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 lg:py-20 bg-[var(--cream)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl text-[var(--dark)] mb-8 text-center"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white rounded-xl overflow-hidden border border-[var(--border)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg block"
                >
                  <div className="relative aspect-[16/10] bg-gray-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[var(--primary)] bg-[var(--primary-light)] px-3 py-1 rounded-full mb-3">
                      {p.tag}
                    </span>
                    <h3
                      className="text-lg text-[var(--dark)] mb-2"
                      style={{ fontFamily: "var(--font-heading), serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm text-[var(--text-light)] leading-relaxed">
                      {p.description}
                    </p>
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

/** Simple markdown-to-HTML converter for blog content */
function markdownToHtml(md: string): string {
  return md
    .trim()
    .split("\n\n")
    .map((block) => {
      block = block.trim();
      if (!block) return "";

      // Headings
      if (block.startsWith("### "))
        return `<h3>${inline(block.slice(4))}</h3>`;
      if (block.startsWith("## "))
        return `<h2>${inline(block.slice(3))}</h2>`;

      // Ordered list
      if (/^\d+\.\s/.test(block)) {
        const items = block
          .split("\n")
          .map((l) => `<li>${inline(l.replace(/^\d+\.\s+/, ""))}</li>`)
          .join("");
        return `<ol>${items}</ol>`;
      }

      // Unordered list
      if (block.startsWith("- ")) {
        const items = block
          .split("\n")
          .map((l) => `<li>${inline(l.replace(/^-\s+/, ""))}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }

      return `<p>${inline(block)}</p>`;
    })
    .join("\n");
}

function inline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}
