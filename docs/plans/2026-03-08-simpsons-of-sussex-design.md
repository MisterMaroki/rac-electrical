# Simpsons of Sussex Website Design

Repurpose the emergency-electrician-worthing codebase for Simpsons of Sussex Electrical Ltd. Commercial-forward positioning with domestic secondary. Emergency work comes through insurance deals so doesn't need pushing.

## Company Info

- **Name:** Simpsons Of Sussex Electrical Ltd
- **MD:** Daniel Simpson
- **Team:** Currently 2 (was 4)
- **Base:** Brighton, covers Sussex & South East
- **Accreditations:** NAPIT, MyBuilder, Yell, Checkatrade, Google Nest Pro
- **Phone:** 01273 567894 (landline), 07716 327971 (mobile)
- **Email:** accounts@simpsonsofsussex.co.uk
- **Facebook:** facebook.com/simpsonsofsussex

## Pages

- `/` — Homepage
- `/[service]` — 6 service pages (Bespoke Lighting, Commercial, Domestic, Inspection & Testing, Smart Installations, Fire & Security)
- `/blog/[slug]` — Blog posts (static data)
- `/projects/[slug]` — Project showcase (static data, CMS later)
- `/contact` — Contact page

No location/area pages. Can add later.

## Branding

### Colors (from existing brand)
- Primary Navy: `#273878`
- Primary Dark: `#131c3c`
- Accent Gold: `#cfa13c`
- Accent Dark: `#b8912f`
- Accent Light: `#ffeed6`
- Cream: `#faf9f5`
- Text: `#1f1e1d`
- Text Light: `#64748b`
- Border: `#e2e8f0`

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

### Visual Feel
Premium but approachable. Navy backgrounds with gold accents. Clean white cards on cream. Family business, not corporate.

## Homepage Layout (top to bottom)

1. **Navbar** — Navy bg, logo left, nav links (Services dropdown, Projects, Blog, Contact), phone + gold "Get a Quote" button right
2. **Hero** — Full-width bg image, "Sussex's Trusted Commercial & Domestic Electrical Contractor", family-run/NAPIT subtext, two CTAs (Get a Quote gold, Call Now outline)
3. **Trust Bar** — Accreditation logos (NAPIT, Checkatrade, MyBuilder, Yell, Nest Pro)
4. **Services Grid** — 6 cards with icons. Commercial Services and Bespoke Lighting first
5. **About Snapshot** — Image + text split. Family-run, experienced team
6. **Stats Counter** — Animated (years experience, projects, reviews, etc.)
7. **Recent Projects** — 2-3 featured project cards
8. **Testimonials** — Karen, Nigel, Lee, Charlie reviews with stars
9. **CTA Banner** — Navy bg, gold quote button, phone number
10. **Footer** — Services links, contact info, Facebook, accreditations, copyright

## Service Pages

Hero banner, detailed description, benefits list, related projects, quote CTA, FAQ section.

## Blog

Same pattern as Worthing site. Static markdown content in data file. Girl in office will write posts — CMS later if they buy.

## Projects (New)

Data in `projects.ts`: title, slug, client (optional), service type tag, description, images array, key details (scope, location, timeline). Listing page with filter by service type. Detail page with image gallery.

## Contact Page

Contact form (name, email, phone, message), phone numbers, email. Map embed optional/later.

## Quote Form Overlay

Same multi-step pattern as Worthing site. Step 1: service type, Step 2: project details, Step 3: contact info. Accessible from navbar button on all pages.

## What's Removed from Worthing Site

- All `/areas/` routes and location pages
- `locations.ts` and `service-locations.ts` data files
- Teal/amber color scheme
- Young Serif + Outfit fonts

## What's New

- Projects section (blog-like data pattern with image gallery)
- `/contact` dedicated page
- Navy/gold branding
- Playfair Display + Inter fonts
- Commercial-first service ordering

## Assets

Scraped from current simpsonsofsussex.co.uk — logo, service images, accreditation badges. Daniel will send more photos over time.
