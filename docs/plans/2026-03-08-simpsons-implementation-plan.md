# Simpsons of Sussex Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Repurpose the emergency-electrician-worthing Next.js site into a commercial-forward website for Simpsons of Sussex Electrical Ltd.

**Architecture:** Fork the existing codebase structure. Replace branding (colors, fonts, content), remove location pages, add Projects section. Keep quote form, service cards, reviews, trust badges components. Static TypeScript data files for services, blog, and projects.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript

---

### Task 1: Download Assets from Simpsons of Sussex Website

**Files:**
- Create: `public/images/logo.png`
- Create: `public/images/hero-bg.jpg`
- Create: `public/images/badge-napit.png`
- Create: `public/images/badge-mybuilder.png`
- Create: `public/images/badge-yell.png`
- Create: `public/images/badge-checkatrade.png`
- Create: `public/images/badge-nestpro.png`
- Create: `public/images/service-bespoke-lighting.jpg`
- Create: `public/images/service-commercial.jpg`
- Create: `public/images/service-domestic.jpg`
- Create: `public/images/service-inspection.jpg`
- Create: `public/images/service-smart.jpg`
- Create: `public/images/service-fire-security.jpg`

**Step 1: Use Chrome browser automation to download all images**

Use `mcp__claude-in-chrome__navigate` and `mcp__claude-in-chrome__javascript_tool` to download each image from the Wix static URLs listed in `scrape-data.md`:

| Asset | Source URL |
|-------|-----------|
| Logo | `https://static.wixstatic.com/media/bfb05e_d0443aa18c9643bcada13f961faa630f~mv2.png` |
| Hero BG | `https://static.wixstatic.com/media/3c7c70fc3de546c09ddea86469b7fcf7.jpeg` |
| NAPIT | `https://static.wixstatic.com/media/bfb05e_3e0bc945854941fea6e288266b2551aa~mv2.png` |
| MyBuilder | `https://static.wixstatic.com/media/bfb05e_a4c53cdead6f4cf4b258317f9f68f469~mv2.png` |
| Yell | `https://static.wixstatic.com/media/bfb05e_de335b6f39574d25a0cd72b878636c17~mv2.png` |
| Checkatrade | `https://static.wixstatic.com/media/bfb05e_4d6e876e62dc49d5aee08a09f621fbd4~mv2.png` |
| Nest Pro | `https://static.wixstatic.com/media/bfb05e_0565668c277b40049e9ab8dcfc186912~mv2.png` |
| Bespoke Lighting | `https://static.wixstatic.com/media/377f4c5ac7074f5d8a38c09d2a42378a.jpg` |
| Commercial | `https://static.wixstatic.com/media/11062b_1815bfc891294a9c8d2716cd96de7c87~mv2.jpeg` |
| Domestic | `https://static.wixstatic.com/media/11062b_9bf49bf84acf4c91b390542398afcf48~mv2.jpg` |
| Inspection | `https://static.wixstatic.com/media/7aceeea3e50a47fcb4fa7f219a2a0fe0.jpg` |
| Smart | `https://static.wixstatic.com/media/11062b_164e3e316a9b46b4b41420dc3fd470f5~mv2.jpeg` |
| Fire & Security | `https://static.wixstatic.com/media/11062b_81463760f81c4ef8bf21d0e17f2b583e~mv2.jpg` |

Save each to `public/images/` with the filenames listed above. Use `curl` via Bash if Chrome download is simpler.

**Step 2: Remove old images that won't be reused**

Delete images specific to the Worthing site: `team-*.jpg`, `reviewer-*.jpg`, `van-logo.jpg`, `work-doorstep.jpg`, old `service-*.jpg` numbered files, old `hero-bg.jpg`, old `about-bg.jpg`, old `areas-bg.png`, old `logo.png`. Keep `misc-*.jpg` and `checklist.png` if they're generic enough, otherwise delete.

**Step 3: Commit**

```bash
git add public/images/
git commit -m "feat: replace assets with Simpsons of Sussex images and badges"
```

---

### Task 2: Update Branding - Colors, Fonts, Metadata

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

**Step 1: Update globals.css color variables**

Replace the CSS custom properties:

```css
@theme {
  --color-primary: #273878;
  --color-primary-dark: #131c3c;
  --color-primary-light: #e8ecf5;
  --color-accent: #cfa13c;
  --color-accent-dark: #b8912f;
  --color-accent-light: #ffeed6;
  --color-dark: #131c3c;
  --color-dark-mid: #1f1e1d;
  --color-cream: #faf9f5;
  --color-cream-alt: #f5f3ee;
  --color-text: #1f1e1d;
  --color-text-light: #64748b;
  --color-border: #e2e8f0;
}
```

**Step 2: Update layout.tsx fonts and metadata**

Replace `Young_Serif` with `Playfair_Display` and `Outfit` with `Inter` from `next/font/google`.

Update metadata:
- Title template: `"%s | Simpsons of Sussex Electrical Ltd"`
- Default title: `"Simpsons of Sussex Electrical Ltd | Commercial & Domestic Electricians in Sussex"`
- Description: `"Family-run electrical contractors in Sussex & the South East. Commercial, domestic, bespoke lighting, smart installations, inspection & testing. NAPIT members."`

**Step 3: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: update branding to Simpsons of Sussex colors and fonts"
```

---

### Task 3: Update Services Data

**Files:**
- Modify: `src/data/services.ts`

**Step 1: Replace all 6 services**

Replace the services array with Simpsons' 6 services. Keep the same `ServiceInfo` type. Use appropriate SVG icon paths for each:

```typescript
export const services: ServiceInfo[] = [
  {
    slug: "commercial-services",
    title: "Commercial Electrical Services",
    shortTitle: "Commercial",
    description: "Comprehensive electrical solutions for pubs, hotels, clubs, restaurants, retail and industrial spaces. From full fit-outs to maintenance contracts.",
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  },
  {
    slug: "bespoke-lighting-design",
    title: "Bespoke Lighting Design",
    shortTitle: "Bespoke Lighting",
    description: "Transform spaces with tailored lighting solutions. We work with architects and designers to create stunning lighting for homes, gardens, commercial and retail environments.",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
  {
    slug: "domestic-services",
    title: "Domestic Electrical Services",
    shortTitle: "Domestic",
    description: "Complete home electrical services including rewiring, fuseboard upgrades, socket and lighting installations, and general maintenance.",
    icon: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  },
  {
    slug: "inspection-and-testing",
    title: "Inspection & Testing",
    shortTitle: "Inspection & Testing",
    description: "EICR electrical safety certificates, periodic inspections, and testing for landlords, homeowners, and commercial properties. NAPIT certified.",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
  {
    slug: "smart-installations",
    title: "Smart Home & Office Installations",
    shortTitle: "Smart Installations",
    description: "Smart home and office solutions including Lightwave, Hive, and Google Nest systems. Control lighting, heating, appliances, and security remotely.",
    icon: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  },
  {
    slug: "fire-and-security",
    title: "Fire & Security Systems",
    shortTitle: "Fire & Security",
    description: "Fire alarm installation, emergency lighting, CCTV, intruder alarms, and access control systems for commercial and domestic properties.",
    icon: "M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z",
  },
];
```

**Step 2: Commit**

```bash
git add src/data/services.ts
git commit -m "feat: update services data for Simpsons of Sussex"
```

---

### Task 4: Create Projects Data File

**Files:**
- Create: `src/data/projects.ts`

**Step 1: Create the projects data structure**

```typescript
export interface Project {
  slug: string;
  title: string;
  client?: string;
  serviceType: string;
  tag: string;
  description: string;
  images: string[];
  details: {
    scope: string;
    location: string;
  };
  metaTitle: string;
  metaDescription: string;
}

export const projects: Project[] = [
  // Placeholder projects - Daniel will provide real ones
  {
    slug: "restaurant-lighting-brighton",
    title: "Restaurant Lighting Redesign",
    client: "Local Brighton Restaurant",
    serviceType: "bespoke-lighting-design",
    tag: "Commercial",
    description: "Complete lighting redesign for a popular Brighton restaurant, creating an intimate dining atmosphere with energy-efficient LED solutions and smart dimming controls.",
    images: ["/images/service-commercial.jpg"],
    details: {
      scope: "Full lighting design and installation",
      location: "Brighton",
    },
    metaTitle: "Restaurant Lighting Redesign | Simpsons of Sussex",
    metaDescription: "Bespoke lighting redesign for a Brighton restaurant by Simpsons of Sussex Electrical Ltd.",
  },
  {
    slug: "hotel-electrical-fit-out",
    title: "Hotel Electrical Fit-Out",
    serviceType: "commercial-services",
    tag: "Commercial",
    description: "Complete electrical fit-out for a boutique hotel including power distribution, lighting, fire alarms, and smart room controls across 20 rooms.",
    images: ["/images/service-bespoke-lighting.jpg"],
    details: {
      scope: "Full electrical installation",
      location: "Sussex",
    },
    metaTitle: "Hotel Electrical Fit-Out | Simpsons of Sussex",
    metaDescription: "Complete hotel electrical fit-out by Simpsons of Sussex Electrical Ltd.",
  },
  {
    slug: "smart-home-hove",
    title: "Smart Home Installation",
    serviceType: "smart-installations",
    tag: "Domestic",
    description: "Full smart home setup with Google Nest integration, Lightwave lighting controls, and automated heating across a 4-bedroom family home.",
    images: ["/images/service-smart.jpg"],
    details: {
      scope: "Smart home design and installation",
      location: "Hove",
    },
    metaTitle: "Smart Home Installation Hove | Simpsons of Sussex",
    metaDescription: "Smart home installation with Nest and Lightwave by Simpsons of Sussex Electrical Ltd.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByServiceType(serviceType: string): Project[] {
  return projects.filter((p) => p.serviceType === serviceType);
}
```

**Step 2: Commit**

```bash
git add src/data/projects.ts
git commit -m "feat: add projects data file with placeholder projects"
```

---

### Task 5: Update Blog Posts Data

**Files:**
- Modify: `src/data/blog-posts.ts`

**Step 1: Replace blog posts with Simpsons-relevant content**

Keep the same `BlogPost` interface. Replace the 3 emergency-focused posts with content relevant to Simpsons' services:

1. **"How Bespoke Lighting Can Transform Your Space"** (tag: Lighting) - about the impact of custom lighting design for homes and commercial spaces
2. **"A Guide to Electrical Inspection & Testing (EICR)"** (tag: Safety) - what landlords and business owners need to know
3. **"Smart Home Technology: Is It Worth the Investment?"** (tag: Smart Home) - overview of smart home benefits and systems they install

Each post should have full markdown content (300-500 words), metaTitle, metaDescription, and reference an appropriate service image.

**Step 2: Commit**

```bash
git add src/data/blog-posts.ts
git commit -m "feat: update blog posts for Simpsons of Sussex"
```

---

### Task 6: Remove Location Data and Routes

**Files:**
- Delete: `src/data/locations.ts`
- Delete: `src/data/service-locations.ts`
- Delete: `src/app/(public)/areas/` (entire directory)
- Modify: `src/app/sitemap.ts`
- Modify: `src/components/footer.tsx` (remove areas links)

**Step 1: Delete location files and routes**

```bash
rm src/data/locations.ts
rm src/data/service-locations.ts
rm -rf src/app/\(public\)/areas/
```

**Step 2: Update sitemap.ts**

Remove area page entries. Add blog and project page entries instead:

```typescript
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog-posts";
import { projects } from "@/data/projects";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://simpsonsofsussex.co.uk";

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
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: remove location pages and update sitemap for Simpsons"
```

---

### Task 7: Update Navbar Component

**Files:**
- Modify: `src/components/navbar.tsx`

**Step 1: Update navbar content**

- Replace logo image path to new `logo.png`
- Update company name references to "Simpsons of Sussex"
- Change nav links: Services (dropdown), Projects, Blog, Contact
- Remove "Areas" or location-related links
- Update phone number to `07716 327971` (mobile) and `01273 567894` (landline)
- Update color classes: teal references → navy (`primary`), amber references → gold (`accent`)
- "Get a Quote" button should use gold accent color

**Step 2: Commit**

```bash
git add src/components/navbar.tsx
git commit -m "feat: update navbar for Simpsons of Sussex branding"
```

---

### Task 8: Update Footer Component

**Files:**
- Modify: `src/components/footer.tsx`

**Step 1: Update footer content**

- Replace company name and description
- Update service links to new 6 services
- Remove areas/locations column entirely
- Replace with Projects link or useful links column
- Update contact info: phones, email (accounts@simpsonsofsussex.co.uk)
- Add Facebook link (https://www.facebook.com/simpsonsofsussex)
- Update copyright to "Simpsons of Sussex Electrical Ltd"
- Update color classes to navy/gold scheme

**Step 2: Commit**

```bash
git add src/components/footer.tsx
git commit -m "feat: update footer for Simpsons of Sussex"
```

---

### Task 9: Update Homepage

**Files:**
- Modify: `src/app/(public)/page.tsx`

**Step 1: Rewrite homepage content**

Major content changes (keep the same section structure from design doc):

1. **Hero**: "Sussex's Trusted Commercial & Domestic Electrical Contractor", subtext about family-run / NAPIT, CTAs: "Get a Quote" (gold) + "Call Now" (outline)
2. **Trust Bar**: Add accreditation badge images (NAPIT, Checkatrade, MyBuilder, Yell, Nest Pro) using the downloaded badge PNGs
3. **Services Grid**: Render from updated services data, Commercial and Bespoke Lighting first
4. **About Snapshot**: Use Simpsons about text from scrape data. MD Daniel Simpson, family-run, NAPIT members
5. **Stats Counter**: Update stats (adjust years experience, remove "callouts" phrasing, use appropriate numbers)
6. **Recent Projects**: Show 2-3 project cards from projects data
7. **Testimonials**: Replace with Karen, Nigel, Lee, Charlie reviews from scrape data
8. **CTA Banner**: Navy background, gold button, phone number
9. **Remove**: Areas section, team section (no team photos for Simpsons), response times section (not emergency-focused)

Update all color classes throughout: teal → primary (navy), amber → accent (gold).

**Step 2: Commit**

```bash
git add src/app/\(public\)/page.tsx
git commit -m "feat: rebuild homepage for Simpsons of Sussex"
```

---

### Task 10: Update Service Pages

**Files:**
- Modify: `src/app/(public)/[service]/page.tsx`

**Step 1: Update service page content**

- Update `generateStaticParams` to use new service slugs
- Write unique `serviceContent` for each of the 6 new services with metaTitle, metaDescription, intro paragraphs
- Remove "Areas Served" grid section (no location pages)
- Add "Related Projects" section that pulls from projects data by serviceType
- Update all color classes to navy/gold
- Update structured data references
- Update "Why Choose Us" guarantees to match Simpsons (Fully Qualified, Fully Insured, Expert Advice, Clever Solutions, Reliable & Trustworthy, All Work Guaranteed)

**Step 2: Commit**

```bash
git add src/app/\(public\)/\[service\]/page.tsx
git commit -m "feat: update service pages for Simpsons of Sussex"
```

---

### Task 11: Update Blog Pages

**Files:**
- Modify: `src/app/(public)/blog/[slug]/page.tsx`

**Step 1: Update blog page styling and content**

- Update `generateStaticParams` to use new blog post slugs
- Update CTA section text (remove emergency electrician references)
- Update color classes to navy/gold
- Keep markdown-to-HTML parser as-is
- Update structured data

**Step 2: Commit**

```bash
git add src/app/\(public\)/blog/
git commit -m "feat: update blog pages for Simpsons of Sussex"
```

---

### Task 12: Create Projects Pages

**Files:**
- Create: `src/app/(public)/projects/page.tsx`
- Create: `src/app/(public)/projects/[slug]/page.tsx`

**Step 1: Create projects listing page**

`/projects` page with:
- Hero banner ("Our Projects")
- Filter buttons by tag (All, Commercial, Domestic)
- Grid of project cards showing image, title, tag badge, short description
- Link to individual project pages

**Step 2: Create project detail page**

`/projects/[slug]` page with:
- Breadcrumb (Home > Projects > Project Name)
- Hero image
- Project title, tag, client name
- Description text
- Key details (scope, location)
- Image gallery (simple grid for now)
- CTA to get a quote
- Related projects

**Step 3: Add generateStaticParams for both pages**

**Step 4: Commit**

```bash
git add src/app/\(public\)/projects/
git commit -m "feat: add projects listing and detail pages"
```

---

### Task 13: Create Contact Page

**Files:**
- Create: `src/app/(public)/contact/page.tsx`

**Step 1: Create dedicated contact page**

Page with:
- Hero section ("Get In Touch")
- Two-column layout:
  - Left: Contact form (reuse ContactForm component)
  - Right: Contact details (phone numbers, email, Facebook link)
- Navy/gold styling

**Step 2: Commit**

```bash
git add src/app/\(public\)/contact/
git commit -m "feat: add dedicated contact page"
```

---

### Task 14: Update Remaining Components

**Files:**
- Modify: `src/components/quote-form-overlay.tsx`
- Modify: `src/components/contact-form.tsx`
- Modify: `src/components/trust-badges.tsx`
- Modify: `src/components/call-button.tsx`
- Modify: `src/components/structured-data.tsx`
- Modify: `src/components/service-card.tsx`
- Modify: `src/components/review-card.tsx`

**Step 1: Update quote form overlay**

- Update service options to match new 6 services
- Remove "Urgency" step (not emergency-focused) - go from service selection straight to contact details
- Update color classes to navy/gold
- Update phone number in confirmation step

**Step 2: Update contact form**

- Update service dropdown options to new 6 services
- Update color classes

**Step 3: Update trust badges**

- Replace with accreditation badge images (NAPIT, Checkatrade, MyBuilder, Yell, Nest Pro) instead of text+icon badges
- Or keep as text badges but update content: "NAPIT Certified", "Fully Insured", "Family Run", "All Work Guaranteed"

**Step 4: Update call button**

- Change phone number to `07716327971`
- Update default styling to gold accent

**Step 5: Update structured data**

- Update LocalBusinessSchema: company name, phone, email, description
- Remove old address, update areaServed to Sussex/South East
- Update ServiceSchema references

**Step 6: Update service-card and review-card color classes**

**Step 7: Commit**

```bash
git add src/components/
git commit -m "feat: update all components for Simpsons of Sussex branding"
```

---

### Task 15: Update Environment and Config

**Files:**
- Modify: `.env.local`
- Modify: `src/app/robots.ts`
- Modify: `src/app/(public)/layout.tsx`

**Step 1: Update .env.local**

```
NEXT_PUBLIC_SITE_URL=https://simpsonsofsussex.co.uk
NEXT_PUBLIC_PHONE=07716327971
NEXT_PUBLIC_PHONE_DISPLAY=07716 327971
NEXT_PUBLIC_LANDLINE=01273567894
NEXT_PUBLIC_LANDLINE_DISPLAY=01273 567894
NEXT_PUBLIC_EMAIL=accounts@simpsonsofsussex.co.uk
```

**Step 2: Update robots.ts**

Update sitemap URL to new domain.

**Step 3: Update public layout**

Ensure navbar, footer, quote form context all render correctly with new data.

**Step 4: Commit**

```bash
git add .env.local src/app/robots.ts src/app/\(public\)/layout.tsx
git commit -m "feat: update environment config for Simpsons of Sussex"
```

---

### Task 16: Build and Fix Errors

**Step 1: Run build**

```bash
npm run build
```

**Step 2: Fix any TypeScript or build errors**

Address missing imports, type errors from removed location data, broken references to old services, etc.

**Step 3: Run dev server and visually check**

```bash
npm run dev
```

Verify all pages render correctly:
- Homepage
- Each service page
- Blog listing/detail
- Projects listing/detail
- Contact page

**Step 4: Commit fixes**

```bash
git add -A
git commit -m "fix: resolve build errors and verify all pages render"
```

---

### Task 17: Final Polish and Review

**Step 1: Visual review of all pages**

Use Chrome automation to screenshot each page and verify:
- Navy/gold branding is consistent
- No leftover Worthing/emergency references
- All images load
- Mobile responsive
- Quote form works
- Navigation works

**Step 2: Fix any remaining issues**

**Step 3: Final commit**

```bash
git add -A
git commit -m "chore: final polish and cleanup"
```
