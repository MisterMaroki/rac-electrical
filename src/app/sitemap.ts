import { services } from "@/data/services";
import { blogPosts } from "@/data/blog-posts";
import { projects } from "@/data/projects";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rac-electrical.vercel.app";

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: new Date("2026-03-08"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date("2026-03-08"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date("2026-03-08"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-08"),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...servicePages,
    ...blogPages,
    ...projectPages,
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-03-08"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];
}
