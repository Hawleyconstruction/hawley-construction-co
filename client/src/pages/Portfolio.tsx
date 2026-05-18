/**
 * Portfolio / Our Work Page — Before & After Gallery
 * SEO-optimized with structured data and keyword-rich content per category
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Before/After image pairs per service category
const portfolioData = [
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    location: "St. Petersburg, FL",
    description: "Complete kitchen transformation featuring custom white shaker cabinets, quartz waterfall island, herringbone subway tile backsplash, and wide plank hardwood floors.",
    before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/kitchen-before-gnpMvGCrqpA7wDknZQaauG.webp",
    after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/kitchen-after-hsVXguHfNLPDyGVXHRHCyx.webp",
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    location: "Tampa, FL",
    description: "Master bathroom renovation with frameless glass walk-in shower, freestanding soaking tub, floating double vanity with quartz top, and large format marble-look porcelain tile.",
    before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/bathroom-before-dZMyaaPMs3Qj2DwkGzszKr.webp",
    after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/bathroom-after-mFZsTRAQ7UMXN2JYfxu5Qy.webp",
  },
  {
    slug: "home-additions",
    title: "Home Additions",
    location: "Clearwater, FL",
    description: "Master suite addition seamlessly blended with existing home structure, featuring new impact windows, extended roofline, covered patio, and upgraded landscaping.",
    before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/addition-before-YQsLXFf8Tjvsq3mHHYdcNE.webp",
    after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/addition-after-ZJvFkDUDfMRPEBB8XzEDFv.webp",
  },
  {
    slug: "full-home-remodels",
    title: "Full Home Remodel",
    location: "Bradenton, FL",
    description: "Complete open-concept conversion with new flooring throughout, modern kitchen, recessed lighting, impact sliding glass doors, and coastal contemporary finishes.",
    before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/remodel-before-LZT6cJbDV5Gbr9iEzvyULB.webp",
    after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/remodel-after-HirftJZMhQXYSKovsunpEJ.webp",
  },
  {
    slug: "sunrooms",
    title: "Sunrooms",
    location: "Sarasota, FL",
    description: "Custom four-season sunroom addition with floor-to-ceiling energy-efficient glass panels, polished tile floor, and seamless connection to the main living space.",
    before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/sunroom-before-DQF6ERgpuLb4xYYCEANWAu.webp",
    after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/sunroom-after-c5igWFwkXMiTD7G7dExTJ2.webp",
  },
  {
    slug: "outdoor-living",
    title: "Outdoor Living",
    location: "Wesley Chapel, FL",
    description: "Complete outdoor living transformation with cedar pergola, built-in outdoor kitchen with stone countertops, gas fire pit, travertine pavers, and landscape lighting.",
    before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/outdoor-before-Eh4Hc6m3UPYnyNDaDXQ9ot.webp",
    after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/outdoor-after-RFc2rKVehVEWPV5GpcVQEW.webp",
  },
  {
    slug: "patios",
    title: "Patio Installation",
    location: "Tarpon Springs, FL",
    description: "Herringbone pattern brick paver patio with curved edges, soldier course border, built-in seating wall, integrated landscape lighting, and tropical landscaping.",
    before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/patio-before-e4kVYp9T3SGjUR9o3dUSjW.webp",
    after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/patio-after-h7cpoG8DbswTBZpi7g8JDx.webp",
  },
  {
    slug: "windows-doors",
    title: "Windows & Doors",
    location: "St. Petersburg, FL",
    description: "Full window and door replacement with impact-rated vinyl frames, modern craftsman front door with sidelights, and complete exterior refresh.",
    before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/windows-before-2k6UndGC9ZVFnmopH6Mn6o.webp",
    after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/windows-after-HxmvFRS7Fp89og6X5bEH94.webp",
  },
  {
    slug: "custom-cabinetry",
    title: "Custom Cabinetry",
    location: "Tampa, FL",
    description: "Full custom white shaker cabinetry with glass-front uppers, interior lighting, pull-out pantry organizers, soft-close drawers, and brushed brass hardware.",
    before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/cabinetry-before-iuT49PM63oDBRbeWBRtgXo.webp",
    after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/cabinetry-after-k8HhBRBtCkgj4z34VvF6gu.webp",
  },
  {
    slug: "trex-decks",
    title: "Trex Deck Installation",
    location: "Clearwater, FL",
    description: "Trex composite deck replacement with multi-level design, cable railing system, built-in bench seating, and integrated LED step lighting.",
    before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/deck-before-fYQaEnjbn7XaRr2zAGXYsZ.webp",
    after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/deck-after-fHq2VWgfu4bzQ7nx4A2z86.webp",
  },
];

// Before/After slider component
function BeforeAfterCard({ project }: { project: typeof portfolioData[0] }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(x);
  };

  return (
    <div className="group">
      <div
        className="relative overflow-hidden cursor-col-resize select-none"
        style={{ borderRadius: "2px", aspectRatio: "4/3" }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleMove}
      >
        {/* After image (full background) */}
        <img
          src={project.after}
          alt={`${project.title} after - ${project.location}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={project.before}
            alt={`${project.title} before - ${project.location}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ minWidth: "100%", width: `${10000 / sliderPos}%`, maxWidth: "none" }}
          />
        </div>
        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L3 10L7 16" stroke="oklch(0.22 0.01 250)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 4L17 10L13 16" stroke="oklch(0.22 0.01 250)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {/* Labels */}
        <div
          className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white z-10"
          style={{ backgroundColor: "oklch(0.35 0.01 250 / 0.8)", borderRadius: "2px", fontFamily: "'DM Sans', sans-serif" }}
        >
          Before
        </div>
        <div
          className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white z-10"
          style={{ backgroundColor: "oklch(0.55 0.065 82 / 0.9)", borderRadius: "2px", fontFamily: "'DM Sans', sans-serif" }}
        >
          After
        </div>
      </div>
      {/* Project info */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-1">
          <h3
            className="text-lg font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
          >
            {project.title}
          </h3>
          <span
            className="text-xs font-medium"
            style={{ color: "oklch(0.55 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.location}
          </span>
        </div>
        <p
          className="text-sm leading-relaxed mb-3"
          style={{ color: "oklch(0.5 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {project.description}
        </p>
        <Link
          href={`/services/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide"
          style={{ color: "oklch(0.55 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Learn More <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

export default function Portfolio() {
  useEffect(() => {
    document.title = "Our Work | Before & After Gallery | Hawley Construction Co.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "View before and after photos of kitchen remodels, bathroom renovations, home additions, outdoor living spaces, and more by Hawley Construction Co. in Tampa Bay, FL.");
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawleyconstruction.co/our-work");
    // Inject ImageGallery schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Hawley Construction Co. Before & After Gallery",
      "description": "Before and after photos of home remodeling projects by Hawley Construction Co. in Tampa Bay, Florida.",
      "url": "https://hawleyconstruction.co/our-work",
      "creator": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Hawley Construction Co.",
        "telephone": "+17046191480",
        "url": "https://hawleyconstruction.co"
      }
    };
    const existing = document.getElementById("gallery-schema");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "gallery-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("gallery-schema");
      if (el) el.remove();
      document.title = "Hawley Construction Co. | Tampa Bay Remodeling";
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16" style={{ backgroundColor: "oklch(0.18 0.008 250)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Before &amp; After Gallery
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Work
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "oklch(0.7 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Drag the slider to see the transformation. Each project showcases our commitment to quality craftsmanship across Tampa Bay.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {portfolioData.map((project) => (
              <BeforeAfterCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.18 0.008 250)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Transform Your Home?
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "oklch(0.7 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Every project starts with a free consultation. Let's discuss your vision and bring it to life.
          </p>
          <Link href="/contact" className="btn-gold inline-block" style={{ borderRadius: "2px" }}>
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
