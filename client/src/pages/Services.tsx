/**
 * Services Page — Modern Craftsman Design
 * Full grid of all 10 services with descriptions and CTAs
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-kitchen-mSpoc3xtKks8iMHpTCvAxs.webp";
const BATHROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-bathroom-KW8hCkNSxN2cYTrJakvzLS.webp";
const OUTDOOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-outdoor-living-new-hVfbb6yZQe8ungx9xcEYX8.webp";
const SUNROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-sunroom-screened-TouYoyDabjd4tNaeYJgTRx.webp";
const HOME_ADDITION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-home-addition-new-7k7PkNkc4ssP8WLmYJpDD9.webp";
const TREX_DECK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-trex-deck-2uwLnSueruCa29BoSx4nDJ.webp";

const services = [
  {
    title: "Kitchen Remodeling",
    slug: "kitchen-remodeling",
    img: HERO_IMG,
    tagline: "The Heart of Your Home, Reimagined",
    desc: "Your kitchen is where life happens — from morning coffee to family dinners. Our kitchen remodeling services in Tampa Bay deliver custom cabinetry, premium countertops, professional-grade appliances, and thoughtful layouts that blend beauty with function. We work with you from design to final installation.",
    benefits: ["Custom cabinetry & storage solutions", "Quartz, granite & marble countertops", "Island design & layout optimization", "Backsplash tile & flooring", "Lighting design & electrical upgrades"],
  },
  {
    title: "Bathroom Remodeling",
    slug: "bathroom-remodeling",
    img: BATHROOM_IMG,
    tagline: "Your Personal Spa Retreat",
    desc: "Transform your bathroom into a luxurious escape. From spa-inspired master bathrooms to efficient guest bath updates, Hawley Construction delivers flawless tile work, custom vanities, walk-in showers, and premium fixtures that elevate your daily routine.",
    benefits: ["Walk-in shower & tub conversions", "Custom vanities & floating cabinets", "Large-format tile & heated floors", "Rainfall showerheads & body sprays", "Frameless glass enclosures"],
  },
  {
    title: "Home Additions",
    slug: "home-additions",
    img: HOME_ADDITION_IMG,
    tagline: "More Space, More Life",
    desc: "When your family grows or your needs change, a well-designed home addition is the smartest investment you can make. We handle everything from architectural planning and permitting to framing, roofing, and interior finishing — seamlessly matching your existing home.",
    benefits: ["Master suite additions", "In-law suites & guest rooms", "Family room expansions", "Second-story additions", "Garage conversions"],
  },
  {
    title: "Full Home Remodels",
    slug: "full-home-remodels",
    img: HERO_IMG,
    tagline: "A Complete Transformation",
    desc: "Ready for a total home transformation? Our full home remodel services take your vision from concept to completion. We coordinate every trade, manage the entire project timeline, and deliver a cohesive, beautifully finished home that exceeds your expectations.",
    benefits: ["Complete project management", "Open-concept floor plan conversions", "Whole-home flooring & paint", "Electrical & plumbing upgrades", "Structural modifications"],
  },
  {
    title: "Sunrooms",
    slug: "sunrooms",
    img: SUNROOM_IMG,
    tagline: "Bring the Florida Sunshine In",
    desc: "Florida's climate is one of its greatest assets — and a sunroom lets you enjoy it year-round. Our custom sunrooms are designed to maximize natural light while keeping you comfortable in every season. Perfect for a reading room, home office, or family gathering space.",
    benefits: ["Energy-efficient glass systems", "Year-round climate comfort", "Seamless interior transition", "Custom flooring & ceiling options", "Permit handling included"],
  },
  {
    title: "Outdoor Living Spaces",
    slug: "outdoor-living",
    img: OUTDOOR_IMG,
    tagline: "Extend Your Living Space Outdoors",
    desc: "Florida's outdoor lifestyle deserves a space worthy of it. We design and build complete outdoor living environments — from covered pergolas and outdoor kitchens to fire pits and seating areas — that become the most-used room in your home.",
    benefits: ["Custom pergolas & shade structures", "Outdoor kitchens & grilling stations", "Fire pits & seating areas", "Landscape lighting integration", "Screen enclosures"],
  },
  {
    title: "Patios",
    slug: "patios",
    img: OUTDOOR_IMG,
    tagline: "The Foundation of Outdoor Living",
    desc: "A beautifully designed patio is the cornerstone of any outdoor space. We install pavers, stamped concrete, natural stone, and tile patios that are built to withstand Florida's climate while looking stunning for years to come.",
    benefits: ["Paver & natural stone installation", "Stamped & decorative concrete", "Drainage & grading solutions", "Covered patio structures", "Seamless indoor-outdoor flow"],
  },
  {
    title: "Windows & Doors",
    slug: "windows-doors",
    img: SUNROOM_IMG,
    tagline: "Impact-Rated Protection, Beautiful Design",
    desc: "New windows and doors can transform the look of your home while dramatically improving energy efficiency and storm protection. We install impact-rated windows and doors that meet Florida building codes and enhance your home's curb appeal.",
    benefits: ["Impact-rated hurricane windows", "Energy Star certified products", "Sliding glass & French doors", "Improved natural light & ventilation", "Increased home value"],
  },
  {
    title: "Custom Cabinetry",
    slug: "custom-cabinetry",
    img: HERO_IMG,
    tagline: "Crafted to Fit Your Life",
    desc: "Custom cabinetry is the difference between a good remodel and a great one. Our craftsmen build cabinets to your exact specifications — for kitchens, bathrooms, home offices, laundry rooms, and more — using premium materials and hardware.",
    benefits: ["Full custom sizing & configuration", "Soft-close hinges & drawer systems", "Wide range of finishes & styles", "Built-in organization solutions", "Matching furniture-grade quality"],
  },
  {
    title: "Trex Decks",
    slug: "trex-decks",
    img: TREX_DECK_IMG,
    tagline: "Low Maintenance, High Impact",
    desc: "Trex composite decking is the gold standard for Florida homeowners who want the look of real wood without the maintenance. Our certified Trex installers build decks that resist fading, staining, and moisture — backed by a 25-year warranty.",
    benefits: ["Trex certified installation", "25-year fade & stain warranty", "No painting, staining, or sealing", "Slip-resistant surface", "Eco-friendly recycled materials"],
  },
];

export default function Services() {
  useEffect(() => {
    document.title = 'Home Remodeling Services Tampa Bay | Hawley Construction Co.';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Explore all home remodeling services by Hawley Construction Co. in Tampa Bay: kitchen remodeling, bathroom renovation, home additions, sunrooms, Trex decks, outdoor living, custom cabinetry, windows & doors. Free estimates.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://hawleyconstruction.co/services');
    return () => {
      document.title = 'Hawley Construction Co. | Tampa Bay Remodeling';
      if (canonical) canonical.setAttribute('href', 'https://hawleyconstruction.co');
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Page Header */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "oklch(0.18 0.008 250)" }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
          >
            What We Do
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Services
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "oklch(0.75 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Premium remodeling and construction services for Tampa Bay homeowners — from kitchen transformations to complete outdoor living spaces.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-white shadow-sm overflow-hidden group"
                style={{ borderRadius: "2px" }}
              >
                <div className="img-zoom h-56 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {service.tagline}
                  </p>
                  <h2
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "oklch(0.5 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {service.desc}
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {service.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: "oklch(0.35 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "oklch(0.77 0.065 82)" }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Link
                      href="/contact"
                      className="btn-gold text-xs"
                      style={{ borderRadius: "2px" }}
                    >
                      Get Free Estimate
                    </Link>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide"
                      style={{ color: "oklch(0.64 0.055 230)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Learn More <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.18 0.008 250)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Start Your Project?
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "oklch(0.75 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Contact us today for a free, no-obligation estimate. Serving Tampa, St. Petersburg, Clearwater, Bradenton, Sarasota &amp; surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-center" style={{ borderRadius: "2px" }}>
              Request Free Estimate
            </Link>
            <a href="tel:7046191480" className="btn-outline-light text-center" style={{ borderRadius: "2px" }}>
              Call 704-619-1480
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
