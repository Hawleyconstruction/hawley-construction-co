// Per-page SEO data — title, canonical, and meta description for every route.
// This file is consumed both by the Vite SSG plugin (build-time HTML injection)
// and by the React SEO component (client-side updates for SPA navigation).
//
// BASE_URL is driven by the VITE_SITE_URL env var at build time.
// Default: https://hawleyremodeling.com
// To deploy to a new domain, set VITE_SITE_URL=https://yournewdomain.com at build time.

export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
}

const BASE: string =
  (import.meta.env && import.meta.env.VITE_SITE_URL
    ? (import.meta.env.VITE_SITE_URL as string)
    : "") || "https://hawleyremodeling.com";

export const PAGE_SEO: Record<string, PageSEO> = {
  "/": {
    title: "Hawley Construction Co. | Kitchen & Bathroom Remodeling Tampa Bay FL | Trex Decks, Additions & Sunrooms",
    description: "Hawley Construction Co. is Tampa Bay's trusted home remodeling contractor. Custom kitchens, bathrooms, additions, sunrooms & Trex decks. Free estimates.",
    canonical: `${BASE}/`,
  },
  "/services": {
    title: "Remodeling & Construction Services in Tampa Bay | Hawley Construction Co.",
    description: "Explore our full range of home remodeling services in Tampa Bay — kitchens, bathrooms, additions, sunrooms, Trex decks, outdoor living & more. Free estimates.",
    canonical: `${BASE}/services`,
  },
  "/services/kitchen-remodeling": {
    title: "Kitchen Remodeling Tampa Bay | Hawley Construction Co.",
    description: "Custom kitchen remodeling in Tampa Bay. Cabinets, countertops, full kitchen renovations. Licensed & insured. Get a free estimate from Hawley Construction Co.",
    canonical: `${BASE}/services/kitchen-remodeling`,
  },
  "/services/bathroom-remodeling": {
    title: "Bathroom Remodeling Tampa Bay | Hawley Construction Co.",
    description: "Expert bathroom remodeling in Tampa Bay. Walk-in showers, vanities, full bath renovations. Licensed & insured contractor. Get a free estimate today.",
    canonical: `${BASE}/services/bathroom-remodeling`,
  },
  "/services/home-additions": {
    title: "Home Additions Tampa Bay | Hawley Construction Co.",
    description: "Expand your home with a custom addition in Tampa Bay. Room additions, second stories, garage conversions. Licensed general contractor. Free estimates.",
    canonical: `${BASE}/services/home-additions`,
  },
  "/services/full-home-remodels": {
    title: "Full Home Remodels Tampa Bay | Hawley Construction Co.",
    description: "Complete whole-home remodeling in Tampa Bay. From concept to completion, Hawley Construction delivers quality craftsmanship. Licensed & insured. Free estimates.",
    canonical: `${BASE}/services/full-home-remodels`,
  },
  "/services/sunrooms": {
    title: "Sunroom Construction Tampa Bay | Hawley Construction Co.",
    description: "Custom sunrooms and Florida rooms built for Tampa Bay's climate. Enjoy year-round indoor-outdoor living. Licensed contractor. Call for a free estimate.",
    canonical: `${BASE}/services/sunrooms`,
  },
  "/services/outdoor-living": {
    title: "Outdoor Living Spaces Tampa Bay | Hawley Construction Co.",
    description: "Custom outdoor living spaces in Tampa Bay — pergolas, outdoor kitchens, covered patios & more. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: `${BASE}/services/outdoor-living`,
  },
  "/services/patios": {
    title: "Custom Patios Tampa Bay | Hawley Construction Co.",
    description: "Beautiful custom patios designed and built for Tampa Bay homes. Pavers, concrete, covered patios. Licensed contractor. Free estimates — call (704) 619-1480.",
    canonical: `${BASE}/services/patios`,
  },
  "/services/windows-doors": {
    title: "Window & Door Installation Tampa Bay | Hawley Construction Co.",
    description: "Professional window and door installation in Tampa Bay. Impact-resistant options available. Licensed & insured. Get a free estimate from Hawley Construction Co.",
    canonical: `${BASE}/services/windows-doors`,
  },
  "/services/custom-cabinetry": {
    title: "Custom Cabinetry Tampa Bay | Hawley Construction Co.",
    description: "Custom cabinetry for kitchens, bathrooms, and living spaces in Tampa Bay. Built to your specs by Hawley Construction Co. Licensed & insured. Free estimates.",
    canonical: `${BASE}/services/custom-cabinetry`,
  },
  "/services/trex-decks": {
    title: "Trex Deck Installation Tampa Bay | Hawley Construction Co.",
    description: "Certified Trex composite deck installation in Tampa Bay. Low-maintenance, weather-resistant decks built to last. Licensed contractor. Free estimates.",
    canonical: `${BASE}/services/trex-decks`,
  },
  "/our-work": {
    title: "Our Recent Remodeling Projects | Hawley Construction Co.",
    description: "Browse Hawley Construction Co.'s portfolio of completed kitchen, bathroom, deck, and home addition projects across Tampa Bay. See the quality for yourself.",
    canonical: `${BASE}/our-work`,
  },
  "/areas/tampa": {
    title: "Remodeling Contractor Tampa, FL | Hawley Construction Co.",
    description: "Hawley Construction Co. serves Tampa, FL with expert kitchen, bathroom, deck, and home addition remodeling. Licensed & insured. Call for a free estimate.",
    canonical: `${BASE}/areas/tampa`,
  },
  "/areas/st-petersburg": {
    title: "Remodeling Contractor St. Petersburg, FL | Hawley Construction Co.",
    description: "Hawley Construction Co. serves St. Petersburg, FL with custom kitchen, bathroom, deck, and addition remodeling. Licensed & insured. Free estimates available.",
    canonical: `${BASE}/areas/st-petersburg`,
  },
  "/areas/clearwater": {
    title: "Remodeling Contractor Clearwater, FL | Hawley Construction Co.",
    description: "Hawley Construction Co. serves Clearwater, FL with quality kitchen, bathroom, deck, and home addition remodeling. Licensed & insured. Call for a free estimate.",
    canonical: `${BASE}/areas/clearwater`,
  },
  "/faq": {
    title: "Frequently Asked Questions | Hawley Construction Co.",
    description: "Answers to common questions about home remodeling in Tampa Bay — timelines, costs, permits, and more. Hawley Construction Co. is here to help.",
    canonical: `${BASE}/faq`,
  },
  "/blog": {
    title: "Remodeling Tips & Trends | Hawley Construction Co. Blog",
    description: "Home remodeling tips, trends, and guides for Tampa Bay homeowners. Expert advice from Hawley Construction Co. on kitchens, bathrooms, decks & more.",
    canonical: `${BASE}/blog`,
  },
  "/blog/top-kitchen-remodeling-trends-tampa": {
    title: "Top Kitchen Remodeling Trends in Tampa | Hawley Construction Co.",
    description: "Discover the top kitchen remodeling trends in Tampa for 2025. From quartz countertops to open layouts, Hawley Construction Co. shares what's popular right now.",
    canonical: `${BASE}/blog/top-kitchen-remodeling-trends-tampa`,
  },
  "/blog/bathroom-remodel-cost-tampa": {
    title: "Bathroom Remodel Cost in Tampa | Hawley Construction Co.",
    description: "How much does a bathroom remodel cost in Tampa, FL? Hawley Construction Co. breaks down average costs, what affects pricing, and how to budget your project.",
    canonical: `${BASE}/blog/bathroom-remodel-cost-tampa`,
  },
  "/blog/benefits-sunroom-florida": {
    title: "Benefits of a Sunroom in Florida | Hawley Construction Co.",
    description: "Why add a sunroom to your Florida home? Hawley Construction Co. explains the benefits of sunrooms and Florida rooms for Tampa Bay homeowners.",
    canonical: `${BASE}/blog/benefits-sunroom-florida`,
  },
  "/blog/trex-deck-vs-wood-deck": {
    title: "Trex Deck vs Wood Deck Comparison | Hawley Construction Co.",
    description: "Trex composite deck vs. wood deck — which is better for Tampa Bay? Hawley Construction Co. compares cost, durability, maintenance, and appearance.",
    canonical: `${BASE}/blog/trex-deck-vs-wood-deck`,
  },
  "/blog/plan-home-addition-tampa-bay": {
    title: "How to Plan a Home Addition in Tampa Bay | Hawley Construction Co.",
    description: "Planning a home addition in Tampa Bay? Hawley Construction Co. walks you through permits, design, budgeting, and what to expect during construction.",
    canonical: `${BASE}/blog/plan-home-addition-tampa-bay`,
  },
  "/contact": {
    title: "Contact Hawley Construction Co. | Free Estimate Tampa Bay",
    description: "Contact Hawley Construction Co. for a free estimate on your Tampa Bay remodeling project. Kitchen, bathroom, deck, additions & more. Call (704) 619-1480.",
    canonical: `${BASE}/contact`,
  },
  "/kitchen-remodeling-st-petersburg": {
    title: "Kitchen Remodeling St. Petersburg, FL | Hawley Construction Co.",
    description: "Expert kitchen remodeling in St. Petersburg, FL. Custom cabinets, countertops, full renovations. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: `${BASE}/kitchen-remodeling-st-petersburg/`,
  },
  "/kitchen-remodeling-st-petersburg/": {
    title: "Kitchen Remodeling St. Petersburg, FL | Hawley Construction Co.",
    description: "Expert kitchen remodeling in St. Petersburg, FL. Custom cabinets, countertops, full renovations. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: `${BASE}/kitchen-remodeling-st-petersburg/`,
  },
  "/trex-deck-builder-tampa-bay": {
    title: "Trex Deck Builder Tampa Bay | Hawley Construction Co.",
    description: "Tampa Bay's trusted Trex deck builder. Custom composite decks built to last in Florida weather. Licensed, insured, free estimates. Call (704) 619-1480.",
    canonical: `${BASE}/trex-deck-builder-tampa-bay/`,
  },
  "/trex-deck-builder-tampa-bay/": {
    title: "Trex Deck Builder Tampa Bay | Hawley Construction Co.",
    description: "Tampa Bay's trusted Trex deck builder. Custom composite decks built to last in Florida weather. Licensed, insured, free estimates. Call (704) 619-1480.",
    canonical: `${BASE}/trex-deck-builder-tampa-bay/`,
  },
  "/sunroom-florida-room-contractor": {
    title: "Sunroom & Florida Room Contractor | Hawley Construction Co.",
    description: "Custom sunrooms and Florida rooms in Tampa Bay. Year-round comfort, built for Florida's climate. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: `${BASE}/sunroom-florida-room-contractor/`,
  },
  "/sunroom-florida-room-contractor/": {
    title: "Sunroom & Florida Room Contractor | Hawley Construction Co.",
    description: "Custom sunrooms and Florida rooms in Tampa Bay. Year-round comfort, built for Florida's climate. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: `${BASE}/sunroom-florida-room-contractor/`,
  },
  "/adu-in-law-suite-builder": {
    title: "ADU & In-Law Suite Builder Tampa Bay | Hawley Construction Co.",
    description: "Custom ADUs and in-law suites built in Tampa Bay. Add living space and value to your home. Licensed & insured general contractor. Free estimates available.",
    canonical: `${BASE}/adu-in-law-suite-builder/`,
  },
  "/adu-in-law-suite-builder/": {
    title: "ADU & In-Law Suite Builder Tampa Bay | Hawley Construction Co.",
    description: "Custom ADUs and in-law suites built in Tampa Bay. Add living space and value to your home. Licensed & insured general contractor. Free estimates available.",
    canonical: `${BASE}/adu-in-law-suite-builder/`,
  },
  "/bathroom-remodeling-st-petersburg": {
    title: "Bathroom Remodeling St. Petersburg, FL | Hawley Construction Co.",
    description: "Expert bathroom remodeling in St. Petersburg, FL. Walk-in showers, vanities, full renovations. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: `${BASE}/bathroom-remodeling-st-petersburg/`,
  },
  "/bathroom-remodeling-st-petersburg/": {
    title: "Bathroom Remodeling St. Petersburg, FL | Hawley Construction Co.",
    description: "Expert bathroom remodeling in St. Petersburg, FL. Walk-in showers, vanities, full renovations. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: `${BASE}/bathroom-remodeling-st-petersburg/`,
  },
  "/general-contractor-st-petersburg": {
    title: "General Contractor St. Petersburg, FL | Hawley Construction Co.",
    description: "Licensed general contractor in St. Petersburg, FL. Kitchens, bathrooms, additions, decks & full home remodels. Hawley Construction Co. — free estimates available.",
    canonical: `${BASE}/general-contractor-st-petersburg/`,
  },
  "/general-contractor-st-petersburg/": {
    title: "General Contractor St. Petersburg, FL | Hawley Construction Co.",
    description: "Licensed general contractor in St. Petersburg, FL. Kitchens, bathrooms, additions, decks & full home remodels. Hawley Construction Co. — free estimates available.",
    canonical: `${BASE}/general-contractor-st-petersburg/`,
  },
};

// Helper: get SEO for a given pathname (strips trailing slash for lookup, except root)
export function getPageSEO(pathname: string): PageSEO {
  // Try exact match first
  if (PAGE_SEO[pathname]) return PAGE_SEO[pathname];
  // Try without trailing slash
  const noTrail = pathname.replace(/\/$/, "") || "/";
  if (PAGE_SEO[noTrail]) return PAGE_SEO[noTrail];
  // Try with trailing slash
  const withTrail = pathname.endsWith("/") ? pathname : pathname + "/";
  if (PAGE_SEO[withTrail]) return PAGE_SEO[withTrail];
  // Default fallback
  return PAGE_SEO["/"];
}
