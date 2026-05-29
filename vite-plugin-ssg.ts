/**
 * vite-plugin-ssg.ts
 *
 * Lightweight Vite plugin that runs after the production build and generates
 * a separate index.html for every route in the site.  Each generated file has:
 *   - Unique <title>, <link rel="canonical">, <meta name="description">
 *   - Unique og:title, og:description, og:url, og:image (repo-hosted)
 *   - Unique twitter:title, twitter:description
 *   - Favicon / apple-touch-icon links
 *   - BreadcrumbList JSON-LD schema (all non-root pages)
 *   - Enhanced GeneralContractor JSON-LD schema (every page)
 *   - Service JSON-LD schema (service pages)
 *   - FAQPage JSON-LD schema (FAQ page)
 *   - Pre-rendered <h1> text (hidden, for crawlers)
 *
 * VITE_SITE_URL env var controls the domain used in canonicals, og:url, and sitemap.
 * Default: https://hawleyremodeling.com
 */

import type { Plugin } from "vite";
import fs from "fs";
import path from "path";

// ---------------------------------------------------------------------------
// Base URL — override via VITE_SITE_URL env var at build time
// ---------------------------------------------------------------------------
const BASE =
  process.env.VITE_SITE_URL ||
  "https://hawleyremodeling.com";

// ---------------------------------------------------------------------------
// Business constants (used in schema)
// ---------------------------------------------------------------------------
const BUSINESS = {
  name: "Hawley Construction Co.",
  telephone: "+17046191480",
  email: "landon@hawleyremodeling.com",
  streetAddress: "316 11th Ave NE",
  addressLocality: "St. Petersburg",
  addressRegion: "FL",
  postalCode: "33701",
  addressCountry: "US",
  latitude: 27.7707,
  longitude: -82.6357,
  priceRange: "$$-$$$",
  founder: "Landon Hawley",
  license: "Florida State Certified General Contractor",
};

// ---------------------------------------------------------------------------
// Per-route SEO data
// ---------------------------------------------------------------------------
interface RouteSEO {
  title: string;
  description: string;
  canonical: string;
  h1?: string; // pre-rendered H1 text
  serviceType?: string; // for Service JSON-LD
  breadcrumbs?: { name: string; item: string }[]; // override auto-generated
}

const ROUTES: Record<string, RouteSEO> = {
  "/": {
    title: "Hawley Construction Co. | Kitchen & Bathroom Remodeling Tampa Bay FL | Trex Decks, Additions & Sunrooms",
    description: "Hawley Construction Co. is Tampa Bay's trusted home remodeling contractor. Custom kitchens, bathrooms, additions, sunrooms & Trex decks. Free estimates.",
    canonical: `${BASE}/`,
    h1: "Tampa Bay's Trusted Home Remodeling Contractor",
  },
  "/services": {
    title: "Remodeling & Construction Services in Tampa Bay | Hawley Construction Co.",
    description: "Explore our full range of home remodeling services in Tampa Bay — kitchens, bathrooms, additions, sunrooms, Trex decks, outdoor living & more. Free estimates.",
    canonical: `${BASE}/services`,
    h1: "Our Services",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Services", item: `${BASE}/services` },
    ],
  },
  "/services/kitchen-remodeling": {
    title: "Kitchen Remodeling Tampa Bay | Hawley Construction Co.",
    description: "Custom kitchen remodeling in Tampa Bay. Cabinets, countertops, full kitchen renovations. Licensed & insured. Get a free estimate from Hawley Construction Co.",
    canonical: `${BASE}/services/kitchen-remodeling`,
    h1: "Kitchen Remodeling in Tampa Bay",
    serviceType: "Kitchen Remodeling",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Services", item: `${BASE}/services` },
      { name: "Kitchen Remodeling", item: `${BASE}/services/kitchen-remodeling` },
    ],
  },
  "/services/bathroom-remodeling": {
    title: "Bathroom Remodeling Tampa Bay | Hawley Construction Co.",
    description: "Expert bathroom remodeling in Tampa Bay. Walk-in showers, vanities, full bath renovations. Licensed & insured contractor. Get a free estimate today.",
    canonical: `${BASE}/services/bathroom-remodeling`,
    h1: "Bathroom Remodeling in Tampa Bay",
    serviceType: "Bathroom Remodeling",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Services", item: `${BASE}/services` },
      { name: "Bathroom Remodeling", item: `${BASE}/services/bathroom-remodeling` },
    ],
  },
  "/services/home-additions": {
    title: "Home Additions Tampa Bay | Hawley Construction Co.",
    description: "Expand your home with a custom addition in Tampa Bay. Room additions, second stories, garage conversions. Licensed general contractor. Free estimates.",
    canonical: `${BASE}/services/home-additions`,
    h1: "Home Additions in Tampa Bay",
    serviceType: "Home Additions",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Services", item: `${BASE}/services` },
      { name: "Home Additions", item: `${BASE}/services/home-additions` },
    ],
  },
  "/services/full-home-remodels": {
    title: "Full Home Remodels Tampa Bay | Hawley Construction Co.",
    description: "Complete whole-home remodeling in Tampa Bay. From concept to completion, Hawley Construction delivers quality craftsmanship. Licensed & insured. Free estimates.",
    canonical: `${BASE}/services/full-home-remodels`,
    h1: "Full Home Remodels in Tampa Bay",
    serviceType: "Full Home Remodeling",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Services", item: `${BASE}/services` },
      { name: "Full Home Remodels", item: `${BASE}/services/full-home-remodels` },
    ],
  },
  "/services/sunrooms": {
    title: "Sunroom Construction Tampa Bay | Hawley Construction Co.",
    description: "Custom sunrooms and Florida rooms built for Tampa Bay's climate. Enjoy year-round indoor-outdoor living. Licensed contractor. Call for a free estimate.",
    canonical: `${BASE}/services/sunrooms`,
    h1: "Sunrooms in Tampa Bay",
    serviceType: "Sunroom Construction",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Services", item: `${BASE}/services` },
      { name: "Sunrooms", item: `${BASE}/services/sunrooms` },
    ],
  },
  "/services/outdoor-living": {
    title: "Outdoor Living Spaces Tampa Bay | Hawley Construction Co.",
    description: "Custom outdoor living spaces in Tampa Bay — pergolas, outdoor kitchens, covered patios & more. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: `${BASE}/services/outdoor-living`,
    h1: "Outdoor Living Spaces in Tampa Bay",
    serviceType: "Outdoor Living Construction",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Services", item: `${BASE}/services` },
      { name: "Outdoor Living", item: `${BASE}/services/outdoor-living` },
    ],
  },
  "/services/patios": {
    title: "Custom Patios Tampa Bay | Hawley Construction Co.",
    description: "Beautiful custom patios designed and built for Tampa Bay homes. Pavers, concrete, covered patios. Licensed contractor. Free estimates — call (704) 619-1480.",
    canonical: `${BASE}/services/patios`,
    h1: "Patio Installation in Tampa Bay",
    serviceType: "Patio Installation",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Services", item: `${BASE}/services` },
      { name: "Patios", item: `${BASE}/services/patios` },
    ],
  },
  "/services/windows-doors": {
    title: "Window & Door Installation Tampa Bay | Hawley Construction Co.",
    description: "Professional window and door installation in Tampa Bay. Impact-resistant options available. Licensed & insured. Get a free estimate from Hawley Construction Co.",
    canonical: `${BASE}/services/windows-doors`,
    h1: "Windows & Doors in Tampa Bay",
    serviceType: "Window and Door Installation",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Services", item: `${BASE}/services` },
      { name: "Windows & Doors", item: `${BASE}/services/windows-doors` },
    ],
  },
  "/services/custom-cabinetry": {
    title: "Custom Cabinetry Tampa Bay | Hawley Construction Co.",
    description: "Custom cabinetry for kitchens, bathrooms, and living spaces in Tampa Bay. Built to your specs by Hawley Construction Co. Licensed & insured. Free estimates.",
    canonical: `${BASE}/services/custom-cabinetry`,
    h1: "Custom Cabinetry in Tampa Bay",
    serviceType: "Custom Cabinetry",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Services", item: `${BASE}/services` },
      { name: "Custom Cabinetry", item: `${BASE}/services/custom-cabinetry` },
    ],
  },
  "/services/trex-decks": {
    title: "Trex Deck Installation Tampa Bay | Hawley Construction Co.",
    description: "Certified Trex composite deck installation in Tampa Bay. Low-maintenance, weather-resistant decks built to last. Licensed contractor. Free estimates.",
    canonical: `${BASE}/services/trex-decks`,
    h1: "Trex Deck Installation in Tampa Bay",
    serviceType: "Trex Composite Deck Installation",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Services", item: `${BASE}/services` },
      { name: "Trex Decks", item: `${BASE}/services/trex-decks` },
    ],
  },
  "/our-work": {
    title: "Our Recent Remodeling Projects | Hawley Construction Co.",
    description: "Browse Hawley Construction Co.'s portfolio of completed kitchen, bathroom, deck, and home addition projects across Tampa Bay. See the quality for yourself.",
    canonical: `${BASE}/our-work`,
    h1: "Our Recent Projects",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Our Work", item: `${BASE}/our-work` },
    ],
  },
  "/areas/tampa": {
    title: "Remodeling Contractor Tampa, FL | Hawley Construction Co.",
    description: "Hawley Construction Co. serves Tampa, FL with expert kitchen, bathroom, deck, and home addition remodeling. Licensed & insured. Call for a free estimate.",
    canonical: `${BASE}/areas/tampa`,
    h1: "Tampa's Trusted Home Remodeling Contractor",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Service Areas", item: `${BASE}/areas/tampa` },
      { name: "Tampa", item: `${BASE}/areas/tampa` },
    ],
  },
  "/areas/st-petersburg": {
    title: "Remodeling Contractor St. Petersburg, FL | Hawley Construction Co.",
    description: "Hawley Construction Co. serves St. Petersburg, FL with custom kitchen, bathroom, deck, and addition remodeling. Licensed & insured. Free estimates available.",
    canonical: `${BASE}/areas/st-petersburg`,
    h1: "St. Petersburg's Premier Remodeling Contractor",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Service Areas", item: `${BASE}/areas/st-petersburg` },
      { name: "St. Petersburg", item: `${BASE}/areas/st-petersburg` },
    ],
  },
  "/areas/clearwater": {
    title: "Remodeling Contractor Clearwater, FL | Hawley Construction Co.",
    description: "Hawley Construction Co. serves Clearwater, FL with quality kitchen, bathroom, deck, and home addition remodeling. Licensed & insured. Call for a free estimate.",
    canonical: `${BASE}/areas/clearwater`,
    h1: "Clearwater's Trusted Home Remodeling Experts",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Service Areas", item: `${BASE}/areas/clearwater` },
      { name: "Clearwater", item: `${BASE}/areas/clearwater` },
    ],
  },
  "/faq": {
    title: "Frequently Asked Questions | Hawley Construction Co.",
    description: "Answers to common questions about home remodeling in Tampa Bay — timelines, costs, permits, and more. Hawley Construction Co. is here to help.",
    canonical: `${BASE}/faq`,
    h1: "Frequently Asked Questions",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "FAQ", item: `${BASE}/faq` },
    ],
  },
  "/blog": {
    title: "Remodeling Tips & Trends | Hawley Construction Co. Blog",
    description: "Home remodeling tips, trends, and guides for Tampa Bay homeowners. Expert advice from Hawley Construction Co. on kitchens, bathrooms, decks & more.",
    canonical: `${BASE}/blog`,
    h1: "The Hawley Blog",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Blog", item: `${BASE}/blog` },
    ],
  },
  "/blog/top-kitchen-remodeling-trends-tampa": {
    title: "Top Kitchen Remodeling Trends in Tampa | Hawley Construction Co.",
    description: "Discover the top kitchen remodeling trends in Tampa for 2025. From quartz countertops to open layouts, Hawley Construction Co. shares what's popular right now.",
    canonical: `${BASE}/blog/top-kitchen-remodeling-trends-tampa`,
    h1: "Top Kitchen Remodeling Trends in Tampa",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Blog", item: `${BASE}/blog` },
      { name: "Top Kitchen Remodeling Trends in Tampa", item: `${BASE}/blog/top-kitchen-remodeling-trends-tampa` },
    ],
  },
  "/blog/bathroom-remodel-cost-tampa": {
    title: "Bathroom Remodel Cost in Tampa | Hawley Construction Co.",
    description: "How much does a bathroom remodel cost in Tampa, FL? Hawley Construction Co. breaks down average costs, what affects pricing, and how to budget your project.",
    canonical: `${BASE}/blog/bathroom-remodel-cost-tampa`,
    h1: "Bathroom Remodel Cost in Tampa",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Blog", item: `${BASE}/blog` },
      { name: "Bathroom Remodel Cost in Tampa", item: `${BASE}/blog/bathroom-remodel-cost-tampa` },
    ],
  },
  "/blog/benefits-sunroom-florida": {
    title: "Benefits of a Sunroom in Florida | Hawley Construction Co.",
    description: "Why add a sunroom to your Florida home? Hawley Construction Co. explains the benefits of sunrooms and Florida rooms for Tampa Bay homeowners.",
    canonical: `${BASE}/blog/benefits-sunroom-florida`,
    h1: "Benefits of a Sunroom in Florida",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Blog", item: `${BASE}/blog` },
      { name: "Benefits of a Sunroom in Florida", item: `${BASE}/blog/benefits-sunroom-florida` },
    ],
  },
  "/blog/trex-deck-vs-wood-deck": {
    title: "Trex Deck vs Wood Deck Comparison | Hawley Construction Co.",
    description: "Trex composite deck vs. wood deck — which is better for Tampa Bay? Hawley Construction Co. compares cost, durability, maintenance, and appearance.",
    canonical: `${BASE}/blog/trex-deck-vs-wood-deck`,
    h1: "Trex Deck vs Wood Deck",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Blog", item: `${BASE}/blog` },
      { name: "Trex Deck vs Wood Deck", item: `${BASE}/blog/trex-deck-vs-wood-deck` },
    ],
  },
  "/blog/plan-home-addition-tampa-bay": {
    title: "How to Plan a Home Addition in Tampa Bay | Hawley Construction Co.",
    description: "Planning a home addition in Tampa Bay? Hawley Construction Co. walks you through permits, design, budgeting, and what to expect during construction.",
    canonical: `${BASE}/blog/plan-home-addition-tampa-bay`,
    h1: "How to Plan a Home Addition in Tampa Bay",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Blog", item: `${BASE}/blog` },
      { name: "How to Plan a Home Addition in Tampa Bay", item: `${BASE}/blog/plan-home-addition-tampa-bay` },
    ],
  },
  "/contact": {
    title: "Contact Hawley Construction Co. | Free Estimate Tampa Bay",
    description: "Contact Hawley Construction Co. for a free estimate on your Tampa Bay remodeling project. Kitchen, bathroom, deck, additions & more. Call (704) 619-1480.",
    canonical: `${BASE}/contact`,
    h1: "Get Your Free Estimate",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Contact", item: `${BASE}/contact` },
    ],
  },
  "/kitchen-remodeling-st-petersburg": {
    title: "Kitchen Remodeling St. Petersburg, FL | Hawley Construction Co.",
    description: "Expert kitchen remodeling in St. Petersburg, FL. Custom cabinets, countertops, full renovations. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: `${BASE}/kitchen-remodeling-st-petersburg/`,
    h1: "Kitchen Remodeling in St. Petersburg, FL",
    serviceType: "Kitchen Remodeling",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Kitchen Remodeling St. Petersburg", item: `${BASE}/kitchen-remodeling-st-petersburg/` },
    ],
  },
  "/trex-deck-builder-tampa-bay": {
    title: "Trex Deck Builder Tampa Bay | Hawley Construction Co.",
    description: "Tampa Bay's trusted Trex deck builder. Custom composite decks built to last in Florida weather. Licensed, insured, free estimates. Call (704) 619-1480).",
    canonical: `${BASE}/trex-deck-builder-tampa-bay/`,
    h1: "Trex Deck Builder — Tampa Bay",
    serviceType: "Trex Composite Deck Installation",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Trex Deck Builder Tampa Bay", item: `${BASE}/trex-deck-builder-tampa-bay/` },
    ],
  },
  "/sunroom-florida-room-contractor": {
    title: "Sunroom & Florida Room Contractor | Hawley Construction Co.",
    description: "Custom sunrooms and Florida rooms in Tampa Bay. Year-round comfort, built for Florida's climate. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: `${BASE}/sunroom-florida-room-contractor/`,
    h1: "Sunroom & Florida Room Contractor — Tampa Bay",
    serviceType: "Sunroom Construction",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Sunroom & Florida Room Contractor", item: `${BASE}/sunroom-florida-room-contractor/` },
    ],
  },
  "/adu-in-law-suite-builder": {
    title: "ADU & In-Law Suite Builder Tampa Bay | Hawley Construction Co.",
    description: "Custom ADUs and in-law suites built in Tampa Bay. Add living space and value to your home. Licensed & insured general contractor. Free estimates available.",
    canonical: `${BASE}/adu-in-law-suite-builder/`,
    h1: "ADU & In-Law Suite Builder — Tampa Bay",
    serviceType: "ADU and In-Law Suite Construction",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "ADU & In-Law Suite Builder", item: `${BASE}/adu-in-law-suite-builder/` },
    ],
  },
  "/bathroom-remodeling-st-petersburg": {
    title: "Bathroom Remodeling St. Petersburg, FL | Hawley Construction Co.",
    description: "Expert bathroom remodeling in St. Petersburg, FL. Walk-in showers, vanities, full renovations. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: `${BASE}/bathroom-remodeling-st-petersburg/`,
    h1: "Bathroom Remodeling in St. Petersburg, FL",
    serviceType: "Bathroom Remodeling",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "Bathroom Remodeling St. Petersburg", item: `${BASE}/bathroom-remodeling-st-petersburg/` },
    ],
  },
  "/general-contractor-st-petersburg": {
    title: "General Contractor St. Petersburg, FL | Hawley Construction Co.",
    description: "Licensed general contractor in St. Petersburg, FL. Kitchens, bathrooms, additions, decks & full home remodels. Hawley Construction Co. — free estimates available.",
    canonical: `${BASE}/general-contractor-st-petersburg/`,
    h1: "General Contractor in St. Petersburg, FL",
    serviceType: "General Contracting",
    breadcrumbs: [
      { name: "Home", item: `${BASE}/` },
      { name: "General Contractor St. Petersburg", item: `${BASE}/general-contractor-st-petersburg/` },
    ],
  },
};

// ---------------------------------------------------------------------------
// FAQ content for /faq page (pre-rendered schema)
// ---------------------------------------------------------------------------
const FAQ_ITEMS = [
  { q: "How much does a kitchen remodel cost in Tampa Bay?", a: "A kitchen remodel in Tampa Bay costs between $25,000 and $85,000 depending on scope and materials. A minor refresh ranges from $15,000–$30,000. A mid-range remodel costs $35,000–$55,000. A full custom kitchen renovation ranges from $60,000–$100,000+. Hawley Construction provides free detailed estimates for all projects." },
  { q: "How much does a bathroom remodel cost in Florida?", a: "Bathroom remodeling in the Tampa Bay area costs between $12,000 and $50,000. A basic refresh starts at $8,000–$15,000. A standard remodel costs $18,000–$35,000. A luxury master bathroom ranges from $35,000–$60,000+." },
  { q: "How much does a Trex deck cost in Florida?", a: "A Trex composite deck in Florida costs between $45–$85 per square foot installed. A standard 300 sq ft Trex deck costs $13,500–$25,500 installed. Trex decks last 25+ years with no staining or sealing required." },
  { q: "How much does a home addition cost in Tampa?", a: "Home additions in Tampa cost between $150–$350 per square foot. A 400 sq ft addition typically ranges from $60,000–$140,000 total including permits, foundation, framing, and finishes." },
  { q: "How much does a sunroom cost in Florida?", a: "A sunroom addition in Florida costs between $25,000 and $80,000. A three-season sunroom costs $15,000–$35,000. A four-season sunroom with insulated glass and HVAC costs $40,000–$80,000." },
  { q: "How long does a kitchen remodel take?", a: "A kitchen remodel takes 6–12 weeks from demolition to completion. The timeline includes design and material selection (2–4 weeks), permits (1–2 weeks), demolition and rough work (1–2 weeks), cabinetry and countertop installation (2–3 weeks), and finishing (1–2 weeks)." },
  { q: "How long does a bathroom remodel take?", a: "A standard bathroom remodel takes 3–6 weeks. A full master bathroom renovation with custom tile, walk-in shower, and new plumbing takes 5–8 weeks." },
  { q: "What is the remodeling process with Hawley Construction?", a: "The Hawley Construction remodeling process follows 6 steps: (1) Free in-home consultation. (2) Design phase with material selections. (3) Detailed proposal with fixed pricing and timeline. (4) Permit acquisition handled by our team. (5) Construction with daily site cleanup and weekly progress updates. (6) Final walkthrough and quality inspection." },
  { q: "Do you handle permits for remodeling projects?", a: "Yes, Hawley Construction handles all building permits for every project. We submit permit applications, coordinate inspections, and ensure all work meets Florida Building Code requirements." },
  { q: "What services does Hawley Construction offer?", a: "Hawley Construction offers kitchen remodeling, bathroom renovations, home additions, sunroom construction, outdoor living spaces, and Trex composite deck installation. We handle projects from design through completion, including permits, structural work, plumbing, electrical, tile, cabinetry, and finishing." },
  { q: "What areas does Hawley Construction serve?", a: "Hawley Construction serves the entire Tampa Bay metropolitan area including Tampa, St. Petersburg, Clearwater, Brandon, Wesley Chapel, Largo, Dunedin, Safety Harbor, Palm Harbor, Tarpon Springs, Oldsmar, Riverview, and surrounding communities in Hillsborough and Pinellas counties." },
  { q: "Is Hawley Construction licensed and insured?", a: "Yes, Hawley Construction is fully licensed as a General Contractor in the state of Florida, bonded, and carries comprehensive liability insurance and workers' compensation coverage." },
  { q: "Why choose Trex decking over wood in Florida?", a: "Trex composite decking outperforms wood in Florida because it resists moisture, mold, and rot. It won't warp, crack, or splinter like pressure-treated wood. It requires zero staining, sealing, or painting. It resists UV fading with a 25-year warranty." },
];

// ---------------------------------------------------------------------------
// Enhanced GeneralContractor schema (same on every page, uses @id for cross-ref)
// ---------------------------------------------------------------------------
function buildGeneralContractorSchema(): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${BASE}/#business`,
    name: BUSINESS.name,
    image: `${BASE}/og-image.png`,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    url: BASE,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Tampa" },
      { "@type": "City", name: "St. Petersburg" },
      { "@type": "City", name: "Clearwater" },
      { "@type": "City", name: "Largo" },
      { "@type": "City", name: "Dunedin" },
      { "@type": "City", name: "Safety Harbor" },
      { "@type": "City", name: "Brandon" },
      { "@type": "City", name: "Wesley Chapel" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction & Remodeling Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Remodeling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodeling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trex Deck Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sunroom Construction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ADU & In-Law Suite Construction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Additions" } },
      ],
    },
    founder: { "@type": "Person", name: BUSINESS.founder },
    sameAs: [
      "https://www.instagram.com/hawleyandsons",
      BASE,
    ],
  };
  return JSON.stringify(schema);
}

// ---------------------------------------------------------------------------
// BreadcrumbList schema
// ---------------------------------------------------------------------------
function buildBreadcrumbSchema(breadcrumbs: { name: string; item: string }[]): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
  return JSON.stringify(schema);
}

// ---------------------------------------------------------------------------
// Service schema
// ---------------------------------------------------------------------------
function buildServiceSchema(serviceType: string): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    provider: {
      "@type": "GeneralContractor",
      "@id": `${BASE}/#business`,
      name: BUSINESS.name,
      telephone: BUSINESS.telephone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.streetAddress,
        addressLocality: BUSINESS.addressLocality,
        addressRegion: BUSINESS.addressRegion,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.addressCountry,
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Tampa Bay, FL",
    },
  };
  return JSON.stringify(schema);
}

// ---------------------------------------------------------------------------
// FAQPage schema (for /faq)
// ---------------------------------------------------------------------------
function buildFaqPageSchema(): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return JSON.stringify(schema);
}

// ---------------------------------------------------------------------------
// HTML helpers
// ---------------------------------------------------------------------------
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectSEO(html: string, route: string, seo: RouteSEO): string {
  // ---- Basic meta ----
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(seo.title)}</title>`);

  if (/<meta\s+name="description"/.test(html)) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(seo.description)}" />`
    );
  } else {
    html = html.replace("</head>", `  <meta name="description" content="${escapeHtml(seo.description)}" />\n</head>`);
  }

  if (/<link\s+rel="canonical"/.test(html)) {
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`
    );
  } else {
    html = html.replace("</head>", `  <link rel="canonical" href="${escapeHtml(seo.canonical)}" />\n</head>`);
  }

  // ---- OG tags ----
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, 
    `<meta property="og:url" content="${escapeHtml(seo.canonical)}" />`
  );
  // Update og:image to repo-hosted version
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/, 
    `<meta property="og:image" content="${BASE}/og-image.png" />`
  );

  // ---- Twitter tags ----
  if (/<meta\s+name="twitter:title"/.test(html)) {
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/, 
      `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`
    );
  }
  if (/<meta\s+name="twitter:description"/.test(html)) {
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/, 
      `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`
    );
  }
  // Update twitter:image to repo-hosted version
  if (/<meta\s+name="twitter:image"/.test(html)) {
    html = html.replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/, 
      `<meta name="twitter:image" content="${BASE}/og-image.png" />`
    );
  }

  // ---- Favicon links (replace CloudFront apple-touch-icon, add missing favicons) ----
  // Replace CloudFront apple-touch-icon with repo-hosted
  html = html.replace(
    /<link\s+rel="apple-touch-icon"[^>]*>/,
    `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />`
  );
  // Inject favicon links before </head> if not already present
  if (!html.includes('rel="icon"')) {
    html = html.replace(
      "</head>",
      `  <link rel="icon" type="image/x-icon" href="/favicon.ico" />\n` +
      `  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />\n` +
      `  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />\n` +
      `</head>`
    );
  }

  // ---- Replace GeneralContractor schema in <head> with enhanced version ----
  html = html.replace(
    /<script type="application\/ld\+json">\s*\{[^<]*"@type":\s*"GeneralContractor"[^<]*<\/script>/s,
    `<script type="application/ld+json">${buildGeneralContractorSchema()}</script>`
  );

  // ---- Inject BreadcrumbList schema (non-root pages) ----
  if (route !== "/" && seo.breadcrumbs && seo.breadcrumbs.length > 1) {
    html = html.replace(
      "</head>",
      `  <script type="application/ld+json">${buildBreadcrumbSchema(seo.breadcrumbs)}</script>\n</head>`
    );
  }

  // ---- Inject Service schema (service pages) ----
  if (seo.serviceType) {
    html = html.replace(
      "</head>",
      `  <script type="application/ld+json">${buildServiceSchema(seo.serviceType)}</script>\n</head>`
    );
  }

  // ---- Inject FAQPage schema for /faq ----
  if (route === "/faq") {
    html = html.replace(
      "</head>",
      `  <script type="application/ld+json">${buildFaqPageSchema()}</script>\n</head>`
    );
  }

  // ---- Pre-rendered H1 (hidden from visual UI, visible to crawlers) ----
  if (seo.h1) {
    // Inject immediately after <body> tag
    html = html.replace(
      /<body([^>]*)>/,
      `<body$1>\n  <h1 style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;padding:0;margin:-1px;">${escapeHtml(seo.h1)}</h1>`
    );
  }

  return html;
}

// ---------------------------------------------------------------------------
// Plugin
// ---------------------------------------------------------------------------
export function viteSsgPlugin(): Plugin {
  return {
    name: "vite-ssg-per-route",
    apply: "build",
    closeBundle() {
      const outDir = path.resolve(process.cwd(), "dist/public");
      const baseHtml = fs.readFileSync(path.join(outDir, "index.html"), "utf-8");

      let generated = 0;

      for (const [route, seo] of Object.entries(ROUTES)) {
        if (route === "/") {
          const updated = injectSEO(baseHtml, route, seo);
          fs.writeFileSync(path.join(outDir, "index.html"), updated, "utf-8");
          generated++;
          continue;
        }

        const relPath = route.replace(/^\//, "");
        const dir = path.join(outDir, relPath);
        fs.mkdirSync(dir, { recursive: true });

        const updated = injectSEO(baseHtml, route, seo);
        fs.writeFileSync(path.join(dir, "index.html"), updated, "utf-8");
        generated++;
      }

      // ---- Generate 404.html ----
      const notFoundSeo: RouteSEO = {
        title: "Page Not Found | Hawley Construction Co.",
        description: "The page you're looking for doesn't exist. Return to Hawley Construction Co.'s homepage or contact us for help.",
        canonical: `${BASE}/404`,
        h1: "Page Not Found",
      };
      const notFoundHtml = injectSEO(baseHtml, "/404", notFoundSeo);
      fs.writeFileSync(path.join(outDir, "404.html"), notFoundHtml, "utf-8");
      generated++;

      console.log(`\n✅ vite-plugin-ssg: generated ${generated} pre-rendered HTML files (including 404.html)\n`);
      console.log(`   VITE_SITE_URL used: ${BASE}\n`);
    },
  };
}
