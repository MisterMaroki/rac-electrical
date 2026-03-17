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
    duration?: string;
    year?: string;
  };
  challenge: string;
  solution: string;
  results: string[];
  keyStats?: { label: string; value: string }[];
  testimonial?: {
    text: string;
    name: string;
    role: string;
  };
  metaTitle: string;
  metaDescription: string;
}

export const projects: Project[] = [
  {
    slug: "bathroom-ceiling-repair-brighton",
    title: "Bathroom Ceiling Leak Repair",
    serviceType: "property-maintenance",
    tag: "Property Maintenance",
    description:
      "Complete bathroom ceiling repair following water damage, including removal of damaged plaster, green board installation, re-plastering, and full waterproofing to prevent future leaks.",
    images: ["/images/service-domestic.jpg"],
    details: {
      scope: "Ceiling leak repair, plastering, and waterproofing",
      location: "Brighton",
      duration: "3 days",
      year: "2025",
    },
    challenge:
      "A homeowner in Brighton had a persistent bathroom ceiling leak that had caused significant water damage. The existing plasterboard had deteriorated and was showing signs of mould. The ceiling needed to be fully repaired and waterproofed to prevent any recurrence, and the work needed to be completed quickly to minimise disruption to the household.",
    solution:
      "We removed the damaged ceiling plaster and replaced it with moisture-resistant green board, which is specifically designed for wet areas like bathrooms. The green board was then skimmed with a waterproof plaster finish. We applied a waterproofing membrane to the ceiling and the surrounding walls near the shower area to create a fully sealed barrier against future moisture ingress. The ceiling was finished smooth and left ready for painting.",
    results: [
      "Damaged ceiling fully removed and replaced with moisture-resistant green board",
      "Waterproof plaster finish applied to prevent future moisture damage",
      "Waterproofing membrane installed around the shower area",
      "Clean, smooth finish ready for decoration",
      "Work completed within 3 days with minimal disruption",
    ],
    keyStats: [
      { label: "Duration", value: "3 days" },
      { label: "Area Treated", value: "Full ceiling" },
      { label: "Waterproofed", value: "Yes" },
      { label: "Finish", value: "Smooth skim" },
    ],
    testimonial: {
      text: "RAC Maintenance & Electrical did a brilliant job repairing our bathroom ceiling. The leak had been causing us problems for months and they sorted it out quickly and professionally. The finish is excellent and we have had no issues since.",
      name: "Homeowner",
      role: "Brighton",
    },
    metaTitle:
      "Bathroom Ceiling Leak Repair Brighton | RAC Maintenance & Electrical",
    metaDescription:
      "Bathroom ceiling leak repair in Brighton with green board, waterproof plastering, and moisture-resistant finishing by RAC Maintenance & Electrical.",
  },
  {
    slug: "consumer-unit-upgrade-hove",
    title: "Consumer Unit Upgrade",
    serviceType: "consumer-unit-upgrades",
    tag: "Electrical",
    description:
      "Full consumer unit replacement in a residential property, upgrading from an outdated fuseboard to a modern unit with RCD protection and full circuit labelling.",
    images: ["/images/service-inspection.jpg"],
    details: {
      scope: "Consumer unit replacement and testing",
      location: "Hove",
      duration: "1 day",
      year: "2025",
    },
    challenge:
      "A homeowner in Hove had an old rewirable fuse box that lacked RCD protection and was no longer compliant with current wiring regulations. Several circuits were tripping intermittently, and the board was showing signs of age with discoloured components. The property needed a full consumer unit upgrade to bring it up to the 18th Edition standard and ensure the safety of the household.",
    solution:
      "We replaced the old fuseboard with a brand new metal consumer unit fitted with individual MCBs for each circuit and dual RCD protection for comprehensive earth fault coverage. All circuits were tested and verified, with any minor faults rectified as part of the upgrade. The new board was clearly labelled for easy identification of each circuit. A full electrical installation certificate was issued upon completion.",
    results: [
      "Old rewirable fuse box replaced with modern 18th Edition consumer unit",
      "Full RCD protection installed across all circuits",
      "All circuits tested, verified, and clearly labelled",
      "Minor wiring faults identified and rectified",
      "Electrical installation certificate issued",
      "Work completed in a single day",
    ],
    keyStats: [
      { label: "Duration", value: "1 day" },
      { label: "RCD Protected", value: "100%" },
      { label: "Circuits", value: "10" },
      { label: "Certified", value: "Yes" },
    ],
    testimonial: {
      text: "Really pleased with the consumer unit upgrade. The team from RAC Maintenance & Electrical were professional, tidy, and explained everything clearly. The new board looks great and we feel much safer knowing the electrics are up to standard.",
      name: "Homeowner",
      role: "Hove",
    },
    metaTitle:
      "Consumer Unit Upgrade Hove | RAC Maintenance & Electrical",
    metaDescription:
      "Consumer unit upgrade in Hove by RAC Maintenance & Electrical. Old fuseboard replaced with modern 18th Edition board, full RCD protection, and certification.",
  },
  {
    slug: "cctv-installation-brighton",
    title: "CCTV Installation",
    serviceType: "cctv-and-security",
    tag: "Security",
    description:
      "Residential CCTV camera installation providing full coverage of the front and rear of a property, with remote viewing via smartphone.",
    images: ["/images/service-domestic.jpg"],
    details: {
      scope: "CCTV camera installation and configuration",
      location: "Brighton",
      duration: "1 day",
      year: "2025",
    },
    challenge:
      "A homeowner in Brighton wanted to improve the security of their property after a spate of break-ins in the local area. They needed a CCTV system that covered the front entrance, driveway, and rear garden, with the ability to view the cameras remotely from their phone. The installation needed to be neat and unobtrusive, with cables concealed where possible.",
    solution:
      "We installed a four-camera CCTV system with high-definition cameras positioned to cover the front door, driveway, rear garden, and side passage. All cabling was routed internally and through the loft space to keep the exterior clean and tidy. The system was connected to a DVR with ample storage for continuous recording, and we configured the homeowner's smartphone for remote live viewing and playback. Motion detection alerts were set up so the homeowner receives instant notifications when activity is detected.",
    results: [
      "Four HD cameras installed covering all entry points",
      "All cabling neatly concealed through internal routing",
      "DVR with continuous recording and ample storage",
      "Remote viewing configured on homeowner's smartphone",
      "Motion detection alerts set up for real-time notifications",
      "Installation completed in a single day",
    ],
    keyStats: [
      { label: "Cameras", value: "4" },
      { label: "Coverage", value: "Full" },
      { label: "Remote Access", value: "Yes" },
      { label: "Duration", value: "1 day" },
    ],
    testimonial: {
      text: "Very happy with our new CCTV system. RAC Maintenance & Electrical did a clean, professional installation and took the time to show us how to use the app. We feel much more secure knowing we can see what is happening at home from anywhere.",
      name: "Homeowner",
      role: "Brighton",
    },
    metaTitle:
      "CCTV Installation Brighton | RAC Maintenance & Electrical",
    metaDescription:
      "Residential CCTV installation in Brighton by RAC Maintenance & Electrical. Four HD cameras, concealed cabling, remote smartphone viewing, and motion alerts.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByServiceType(serviceType: string): Project[] {
  return projects.filter((p) => p.serviceType === serviceType);
}
