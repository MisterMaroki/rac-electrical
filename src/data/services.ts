export type ServiceInfo = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string; // SVG path data for inline SVG icons
};

export const services: ServiceInfo[] = [
  {
    slug: "consumer-unit-upgrades",
    title: "Consumer Unit Upgrades",
    shortTitle: "Consumer Units",
    description:
      "Fuseboard and consumer unit replacements and upgrades to meet current regulations. We ensure your home's electrical distribution is safe, compliant, and up to date.",
    icon: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.194-.14 1.743",
  },
  {
    slug: "inspection-and-testing",
    title: "Electrical Inspection & Testing",
    shortTitle: "Inspection & Testing",
    description:
      "EICR landlord certificates, periodic inspections, and completion certificates for landlords, homeowners, and commercial properties.",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
  {
    slug: "domestic-services",
    title: "Domestic Electrical Services",
    shortTitle: "Domestic",
    description:
      "Socket repairs, rewiring, lighting installations, downlights, and general electrical work for homes across Brighton and Hove.",
    icon: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  },
  {
    slug: "fire-and-safety",
    title: "Fire & Safety Systems",
    shortTitle: "Fire & Safety",
    description:
      "Smoke alarms, heat detectors, carbon monoxide alarms, and fire alarm installation to keep your home and family safe.",
    icon: "M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z",
  },
  {
    slug: "cctv-and-security",
    title: "CCTV & Security",
    shortTitle: "CCTV & Security",
    description:
      "CCTV camera installation and security systems for homes and businesses. Protect your property with professionally installed surveillance.",
    icon: "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z",
  },
  {
    slug: "property-maintenance",
    title: "Property Maintenance",
    shortTitle: "Maintenance",
    description:
      "Plastering, waterproofing, tiling, bathroom repairs, exterior wall crack repairs, and general property upkeep across Brighton and Hove.",
    icon: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.194-.14 1.743",
  },
];

export function getServiceBySlug(slug: string): ServiceInfo | undefined {
  return services.find((s) => s.slug === slug);
}
