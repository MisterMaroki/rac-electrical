export function LocalBusinessSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rac-electrical.vercel.app";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "RAC Maintenance & Electrical",
    description: "Professional electrician and property maintenance services in Brighton & Hove. Consumer unit upgrades, EICR certificates, CCTV, fire safety, and general property maintenance.",
    telephone: "+447572459534",
    email: "rac_electrical@hotmail.com",
    url: siteUrl,
    areaServed: [
      { "@type": "City", name: "Brighton" },
      { "@type": "City", name: "Hove" },
      { "@type": "AdministrativeArea", name: "Brighton and Hove" },
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  areaServed,
}: {
  name: string;
  description: string;
  areaServed?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Electrician",
      name: "RAC Maintenance & Electrical",
    },
    areaServed: areaServed
      ? { "@type": "City", name: areaServed }
      : { "@type": "AdministrativeArea", name: "Brighton and Hove" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://rac-electrical.vercel.app"}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
