/**
 * Portfolio / Our Work Page — Project Gallery
 * SEO-optimized with structured data and keyword-rich content per category
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Project gallery data per service category
const portfolioData = [
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    location: "St. Petersburg, FL",
    description: "Complete kitchen transformation featuring custom white shaker cabinets, quartz waterfall island, herringbone subway tile backsplash, and wide plank hardwood floors.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/kitchen-after-hsVXguHfNLPDyGVXHRHCyx.webp",
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    location: "Tampa, FL",
    description: "Master bathroom renovation with frameless glass walk-in shower, freestanding soaking tub, floating double vanity with quartz top, and large format marble-look porcelain tile.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/bathroom-after-mFZsTRAQ7UMXN2JYfxu5Qy.webp",
  },
  {
    slug: "home-additions",
    title: "Home Additions",
    location: "Clearwater, FL",
    description: "Master suite addition seamlessly blended with existing home structure, featuring new impact windows, extended roofline, covered patio, and upgraded landscaping.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/addition-after-ZJvFkDUDfMRPEBB8XzEDFv.webp",
  },
  {
    slug: "full-home-remodels",
    title: "Full Home Remodel",
    location: "Bradenton, FL",
    description: "Complete open-concept conversion with new flooring throughout, modern kitchen, recessed lighting, impact sliding glass doors, and coastal contemporary finishes.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/remodel-after-HirftJZMhQXYSKovsunpEJ.webp",
  },
  {
    slug: "sunrooms",
    title: "Sunrooms",
    location: "Sarasota, FL",
    description: "Custom four-season sunroom addition with floor-to-ceiling energy-efficient glass panels, polished tile floor, and seamless connection to the main living space.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/sunroom-after-c5igWFwkXMiTD7G7dExTJ2.webp",
  },
  {
    slug: "outdoor-living",
    title: "Outdoor Living",
    location: "Wesley Chapel, FL",
    description: "Complete outdoor living transformation with cedar pergola, built-in outdoor kitchen with stone countertops, gas fire pit, travertine pavers, and landscape lighting.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/outdoor-after-RFc2rKVehVEWPV5GpcVQEW.webp",
  },
  {
    slug: "patios",
    title: "Patio Installation",
    location: "Tarpon Springs, FL",
    description: "Herringbone pattern brick paver patio with curved edges, soldier course border, built-in seating wall, integrated landscape lighting, and tropical landscaping.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/patio-after-h7cpoG8DbswTBZpi7g8JDx.webp",
  },
  {
    slug: "windows-doors",
    title: "Windows & Doors",
    location: "St. Petersburg, FL",
    description: "Full window and door replacement with impact-rated vinyl frames, modern craftsman front door with sidelights, and complete exterior refresh.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/windows-after-HxmvFRS7Fp89og6X5bEH94.webp",
  },
  {
    slug: "custom-cabinetry",
    title: "Custom Cabinetry",
    location: "Tampa, FL",
    description: "Full custom white shaker cabinetry with glass-front uppers, interior lighting, pull-out pantry organizers, soft-close drawers, and brushed brass hardware.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/cabinetry-after-k8HhBRBtCkgj4z34VvF6gu.webp",
  },
  {
    slug: "trex-decks",
    title: "Trex Deck Installation",
    location: "Clearwater, FL",
    description: "Trex composite deck replacement with multi-level design, cable railing system, built-in bench seating, and integrated LED step lighting.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/deck-after-fHq2VWgfu4bzQ7nx4A2z86.webp",
  },
];

export default function Portfolio() {
  useEffect(() => {
    document.title = "Our Work | Project Gallery | Hawley Construction Co.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "View completed projects including kitchen remodels, bathroom renovations, home additions, outdoor living spaces, and more by Hawley Construction Co. in Tampa Bay, FL.");
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawleyremodeling.com/our-work");
    // Inject ImageGallery schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Hawley Construction Co. Project Gallery",
      "description": "Completed home remodeling projects by Hawley Construction Co. in Tampa Bay, Florida.",
      "url": "https://hawleyremodeling.com/our-work",
      "creator": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Hawley Construction Co.",
        "telephone": "+17046191480",
        "url": "https://hawleyremodeling.com"
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
            Project Gallery
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
            A showcase of completed projects across Tampa Bay — each one a testament to quality craftsmanship and attention to detail.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {portfolioData.map((project) => (
              <div key={project.slug} className="group">
                <div
                  className="overflow-hidden img-zoom"
                  style={{ borderRadius: "2px", aspectRatio: "4/3" }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.location} | Hawley Construction Co.`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
