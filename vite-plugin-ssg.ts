/**
 * vite-plugin-ssg.ts
 *
 * A lightweight Vite plugin that runs after the production build and generates
 * a separate index.html for every route in the site.  Each generated file has
 * its own unique <title>, <link rel="canonical">, and <meta name="description">
 * baked into the HTML *before* any JavaScript executes.
 *
 * This gives Google's crawler (and every other bot) the correct per-page SEO
 * metadata without requiring a full SSR framework.
 */

import type { Plugin } from "vite";
import fs from "fs";
import path from "path";

interface RouteSEO {
  title: string;
  description: string;
  canonical: string;
}

// All routes that need their own HTML file.
// Trailing-slash variants are included so both URL forms work.
const ROUTES: Record<string, RouteSEO> = {
  "/": {
    title: "Hawley Construction Co. | Kitchen & Bathroom Remodeling Tampa Bay FL | Trex Decks, Additions & Sunrooms",
    description: "Hawley Construction Co. is Tampa Bay's trusted home remodeling contractor. Custom kitchens, bathrooms, additions, sunrooms & Trex decks. Free estimates.",
    canonical: "https://hawleyconstruction.co/",
  },
  "/services": {
    title: "Remodeling & Construction Services in Tampa Bay | Hawley Construction Co.",
    description: "Explore our full range of home remodeling services in Tampa Bay — kitchens, bathrooms, additions, sunrooms, Trex decks, outdoor living & more. Free estimates.",
    canonical: "https://hawleyconstruction.co/services",
  },
  "/services/kitchen-remodeling": {
    title: "Kitchen Remodeling Tampa Bay | Hawley Construction Co.",
    description: "Custom kitchen remodeling in Tampa Bay. Cabinets, countertops, full kitchen renovations. Licensed & insured. Get a free estimate from Hawley Construction Co.",
    canonical: "https://hawleyconstruction.co/services/kitchen-remodeling",
  },
  "/services/bathroom-remodeling": {
    title: "Bathroom Remodeling Tampa Bay | Hawley Construction Co.",
    description: "Expert bathroom remodeling in Tampa Bay. Walk-in showers, vanities, full bath renovations. Licensed & insured contractor. Get a free estimate today.",
    canonical: "https://hawleyconstruction.co/services/bathroom-remodeling",
  },
  "/services/home-additions": {
    title: "Home Additions Tampa Bay | Hawley Construction Co.",
    description: "Expand your home with a custom addition in Tampa Bay. Room additions, second stories, garage conversions. Licensed general contractor. Free estimates.",
    canonical: "https://hawleyconstruction.co/services/home-additions",
  },
  "/services/full-home-remodels": {
    title: "Full Home Remodels Tampa Bay | Hawley Construction Co.",
    description: "Complete whole-home remodeling in Tampa Bay. From concept to completion, Hawley Construction delivers quality craftsmanship. Licensed & insured. Free estimates.",
    canonical: "https://hawleyconstruction.co/services/full-home-remodels",
  },
  "/services/sunrooms": {
    title: "Sunroom Construction Tampa Bay | Hawley Construction Co.",
    description: "Custom sunrooms and Florida rooms built for Tampa Bay's climate. Enjoy year-round indoor-outdoor living. Licensed contractor. Call for a free estimate.",
    canonical: "https://hawleyconstruction.co/services/sunrooms",
  },
  "/services/outdoor-living": {
    title: "Outdoor Living Spaces Tampa Bay | Hawley Construction Co.",
    description: "Custom outdoor living spaces in Tampa Bay — pergolas, outdoor kitchens, covered patios & more. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: "https://hawleyconstruction.co/services/outdoor-living",
  },
  "/services/patios": {
    title: "Custom Patios Tampa Bay | Hawley Construction Co.",
    description: "Beautiful custom patios designed and built for Tampa Bay homes. Pavers, concrete, covered patios. Licensed contractor. Free estimates — call (704) 619-1480.",
    canonical: "https://hawleyconstruction.co/services/patios",
  },
  "/services/windows-doors": {
    title: "Window & Door Installation Tampa Bay | Hawley Construction Co.",
    description: "Professional window and door installation in Tampa Bay. Impact-resistant options available. Licensed & insured. Get a free estimate from Hawley Construction Co.",
    canonical: "https://hawleyconstruction.co/services/windows-doors",
  },
  "/services/custom-cabinetry": {
    title: "Custom Cabinetry Tampa Bay | Hawley Construction Co.",
    description: "Custom cabinetry for kitchens, bathrooms, and living spaces in Tampa Bay. Built to your specs by Hawley Construction Co. Licensed & insured. Free estimates.",
    canonical: "https://hawleyconstruction.co/services/custom-cabinetry",
  },
  "/services/trex-decks": {
    title: "Trex Deck Installation Tampa Bay | Hawley Construction Co.",
    description: "Certified Trex composite deck installation in Tampa Bay. Low-maintenance, weather-resistant decks built to last. Licensed contractor. Free estimates.",
    canonical: "https://hawleyconstruction.co/services/trex-decks",
  },
  "/our-work": {
    title: "Our Recent Remodeling Projects | Hawley Construction Co.",
    description: "Browse Hawley Construction Co.'s portfolio of completed kitchen, bathroom, deck, and home addition projects across Tampa Bay. See the quality for yourself.",
    canonical: "https://hawleyconstruction.co/our-work",
  },
  "/areas/tampa": {
    title: "Remodeling Contractor Tampa, FL | Hawley Construction Co.",
    description: "Hawley Construction Co. serves Tampa, FL with expert kitchen, bathroom, deck, and home addition remodeling. Licensed & insured. Call for a free estimate.",
    canonical: "https://hawleyconstruction.co/areas/tampa",
  },
  "/areas/st-petersburg": {
    title: "Remodeling Contractor St. Petersburg, FL | Hawley Construction Co.",
    description: "Hawley Construction Co. serves St. Petersburg, FL with custom kitchen, bathroom, deck, and addition remodeling. Licensed & insured. Free estimates available.",
    canonical: "https://hawleyconstruction.co/areas/st-petersburg",
  },
  "/areas/clearwater": {
    title: "Remodeling Contractor Clearwater, FL | Hawley Construction Co.",
    description: "Hawley Construction Co. serves Clearwater, FL with quality kitchen, bathroom, deck, and home addition remodeling. Licensed & insured. Call for a free estimate.",
    canonical: "https://hawleyconstruction.co/areas/clearwater",
  },
  "/faq": {
    title: "Frequently Asked Questions | Hawley Construction Co.",
    description: "Answers to common questions about home remodeling in Tampa Bay — timelines, costs, permits, and more. Hawley Construction Co. is here to help.",
    canonical: "https://hawleyconstruction.co/faq",
  },
  "/blog": {
    title: "Remodeling Tips & Trends | Hawley Construction Co. Blog",
    description: "Home remodeling tips, trends, and guides for Tampa Bay homeowners. Expert advice from Hawley Construction Co. on kitchens, bathrooms, decks & more.",
    canonical: "https://hawleyconstruction.co/blog",
  },
  "/blog/top-kitchen-remodeling-trends-tampa": {
    title: "Top Kitchen Remodeling Trends in Tampa | Hawley Construction Co.",
    description: "Discover the top kitchen remodeling trends in Tampa for 2025. From quartz countertops to open layouts, Hawley Construction Co. shares what's popular right now.",
    canonical: "https://hawleyconstruction.co/blog/top-kitchen-remodeling-trends-tampa",
  },
  "/blog/bathroom-remodel-cost-tampa": {
    title: "Bathroom Remodel Cost in Tampa | Hawley Construction Co.",
    description: "How much does a bathroom remodel cost in Tampa, FL? Hawley Construction Co. breaks down average costs, what affects pricing, and how to budget your project.",
    canonical: "https://hawleyconstruction.co/blog/bathroom-remodel-cost-tampa",
  },
  "/blog/benefits-sunroom-florida": {
    title: "Benefits of a Sunroom in Florida | Hawley Construction Co.",
    description: "Why add a sunroom to your Florida home? Hawley Construction Co. explains the benefits of sunrooms and Florida rooms for Tampa Bay homeowners.",
    canonical: "https://hawleyconstruction.co/blog/benefits-sunroom-florida",
  },
  "/blog/trex-deck-vs-wood-deck": {
    title: "Trex Deck vs Wood Deck Comparison | Hawley Construction Co.",
    description: "Trex composite deck vs. wood deck — which is better for Tampa Bay? Hawley Construction Co. compares cost, durability, maintenance, and appearance.",
    canonical: "https://hawleyconstruction.co/blog/trex-deck-vs-wood-deck",
  },
  "/blog/plan-home-addition-tampa-bay": {
    title: "How to Plan a Home Addition in Tampa Bay | Hawley Construction Co.",
    description: "Planning a home addition in Tampa Bay? Hawley Construction Co. walks you through permits, design, budgeting, and what to expect during construction.",
    canonical: "https://hawleyconstruction.co/blog/plan-home-addition-tampa-bay",
  },
  "/contact": {
    title: "Contact Hawley Construction Co. | Free Estimate Tampa Bay",
    description: "Contact Hawley Construction Co. for a free estimate on your Tampa Bay remodeling project. Kitchen, bathroom, deck, additions & more. Call (704) 619-1480.",
    canonical: "https://hawleyconstruction.co/contact",
  },
  "/kitchen-remodeling-st-petersburg": {
    title: "Kitchen Remodeling St. Petersburg, FL | Hawley Construction Co.",
    description: "Expert kitchen remodeling in St. Petersburg, FL. Custom cabinets, countertops, full renovations. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: "https://hawleyconstruction.co/kitchen-remodeling-st-petersburg/",
  },
  "/trex-deck-builder-tampa-bay": {
    title: "Trex Deck Builder Tampa Bay | Hawley Construction Co.",
    description: "Tampa Bay's trusted Trex deck builder. Custom composite decks built to last in Florida weather. Licensed, insured, free estimates. Call (704) 619-1480.",
    canonical: "https://hawleyconstruction.co/trex-deck-builder-tampa-bay/",
  },
  "/sunroom-florida-room-contractor": {
    title: "Sunroom & Florida Room Contractor | Hawley Construction Co.",
    description: "Custom sunrooms and Florida rooms in Tampa Bay. Year-round comfort, built for Florida's climate. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: "https://hawleyconstruction.co/sunroom-florida-room-contractor/",
  },
  "/adu-in-law-suite-builder": {
    title: "ADU & In-Law Suite Builder Tampa Bay | Hawley Construction Co.",
    description: "Custom ADUs and in-law suites built in Tampa Bay. Add living space and value to your home. Licensed & insured general contractor. Free estimates available.",
    canonical: "https://hawleyconstruction.co/adu-in-law-suite-builder/",
  },
  "/bathroom-remodeling-st-petersburg": {
    title: "Bathroom Remodeling St. Petersburg, FL | Hawley Construction Co.",
    description: "Expert bathroom remodeling in St. Petersburg, FL. Walk-in showers, vanities, full renovations. Licensed & insured. Get a free estimate from Hawley Construction.",
    canonical: "https://hawleyconstruction.co/bathroom-remodeling-st-petersburg/",
  },
  "/general-contractor-st-petersburg": {
    title: "General Contractor St. Petersburg, FL | Hawley Construction Co.",
    description: "Licensed general contractor in St. Petersburg, FL. Kitchens, bathrooms, additions, decks & full home remodels. Hawley Construction Co. — free estimates available.",
    canonical: "https://hawleyconstruction.co/general-contractor-st-petersburg/",
  },
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectSEO(html: string, seo: RouteSEO): string {
  // Replace <title>...</title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(seo.title)}</title>`);

  // Replace or inject <meta name="description">
  if (/<meta\s+name="description"/.test(html)) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(seo.description)}" />`
    );
  } else {
    html = html.replace("</head>", `  <meta name="description" content="${escapeHtml(seo.description)}" />\n</head>`);
  }

  // Replace or inject <link rel="canonical">
  if (/<link\s+rel="canonical"/.test(html)) {
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`
    );
  } else {
    html = html.replace("</head>", `  <link rel="canonical" href="${escapeHtml(seo.canonical)}" />\n</head>`);
  }

  // Replace og:title
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`
  );

  // Replace og:description
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`
  );

  // Replace og:url
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, 
    `<meta property="og:url" content="${escapeHtml(seo.canonical)}" />`
  );

  // Replace twitter:title
  if (/<meta\s+name="twitter:title"/.test(html)) {
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/, 
      `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`
    );
  }

  // Replace twitter:description
  if (/<meta\s+name="twitter:description"/.test(html)) {
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/, 
      `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`
    );
  }

  return html;
}

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
          // Root: update index.html in place
          const updated = injectSEO(baseHtml, seo);
          fs.writeFileSync(path.join(outDir, "index.html"), updated, "utf-8");
          generated++;
          continue;
        }

        // Strip leading slash to get relative path
        const relPath = route.replace(/^\//, "");
        const dir = path.join(outDir, relPath);
        fs.mkdirSync(dir, { recursive: true });

        const updated = injectSEO(baseHtml, seo);
        fs.writeFileSync(path.join(dir, "index.html"), updated, "utf-8");
        generated++;
      }

      console.log(`\n✅ vite-plugin-ssg: generated ${generated} pre-rendered HTML files\n`);
    },
  };
}
