/**
 * City Landing Page — SEO-optimized city-specific pages
 * Targets "kitchen remodeling [city]", "bathroom remodel [city]", etc.
 * Uses question-formatted headings for AI citation optimization
 */
import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { Phone, CheckCircle2, ArrowRight, MapPin, Star, Clock, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-kitchen-mSpoc3xtKks8iMHpTCvAxs.webp";
const BATHROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-bathroom-KW8hCkNSxN2cYTrJakvzLS.webp";
const OUTDOOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-outdoor-living-new-hVfbb6yZQe8ungx9xcEYX8.webp";

interface CityData {
  name: string;
  slug: string;
  county: string;
  population: string;
  description: string;
  neighborhoods: string[];
  zipCodes: string[];
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  whyContent: string;
  faqItems: { q: string; a: string }[];
}

const cityData: Record<string, CityData> = {
  tampa: {
    name: "Tampa",
    slug: "tampa",
    county: "Hillsborough County",
    population: "400,000+",
    description: "Tampa is the largest city in the Tampa Bay metropolitan area and one of the fastest-growing cities in Florida. Homeowners in Tampa are investing in kitchen remodeling, bathroom renovations, and outdoor living spaces to increase their home value and quality of life.",
    neighborhoods: ["South Tampa", "Westchase", "Carrollwood", "Seminole Heights", "Hyde Park", "Davis Islands", "Palma Ceia", "Bayshore", "Channelside", "Ybor City"],
    zipCodes: ["33601", "33602", "33603", "33604", "33605", "33606", "33607", "33609", "33610", "33611", "33612", "33613", "33614", "33615", "33616", "33617", "33618", "33619", "33620", "33621", "33624", "33625", "33626", "33629", "33634", "33635"],
    metaTitle: "Home Remodeling Tampa FL | Kitchen & Bathroom Contractor | Hawley Construction",
    metaDescription: "Tampa's trusted home remodeling contractor. Custom kitchens, bathrooms, additions & Trex decks. Licensed & insured. Free estimates. Call (704) 619-1480.",
    heroHeading: "Tampa's Trusted Home Remodeling Contractor",
    heroSubheading: "Custom kitchens, bathrooms, home additions, and outdoor living spaces for Tampa homeowners. Licensed, insured, and committed to quality craftsmanship.",
    whyContent: "Tampa homeowners choose Hawley Construction because we understand the unique needs of Florida homes. From hurricane-rated additions to moisture-resistant bathroom materials, we build with Tampa's climate in mind. Our team serves all Tampa neighborhoods including South Tampa, Westchase, Carrollwood, Seminole Heights, and Hyde Park.",
    faqItems: [
      { q: "How much does a kitchen remodel cost in Tampa?", a: "A kitchen remodel in Tampa typically costs between $25,000 and $75,000 depending on the scope. A minor refresh with new countertops and cabinet refacing starts around $15,000, while a full custom kitchen renovation with structural changes ranges from $50,000 to $100,000+. Hawley Construction provides free detailed estimates for all Tampa kitchen projects." },
      { q: "How long does a bathroom remodel take in Tampa?", a: "A standard bathroom remodel in Tampa takes 3-6 weeks from demolition to completion. Factors that affect timeline include permit processing (typically 1-2 weeks in Hillsborough County), custom tile work, and fixture lead times. Hawley Construction provides a detailed project timeline before work begins." },
      { q: "Do I need a permit for home remodeling in Tampa?", a: "Yes, most remodeling projects in Tampa require a building permit from Hillsborough County. This includes kitchen remodels involving plumbing or electrical changes, bathroom renovations, home additions, and deck construction. Hawley Construction handles all permit applications and inspections as part of our service." },
      { q: "What areas of Tampa do you serve?", a: "Hawley Construction serves all of Tampa and surrounding areas including South Tampa, Westchase, Carrollwood, Seminole Heights, Hyde Park, Davis Islands, Palma Ceia, Bayshore, Channelside, and New Tampa. We also serve nearby communities in Hillsborough County." },
    ],
  },
  "st-petersburg": {
    name: "St. Petersburg",
    slug: "st-petersburg",
    county: "Pinellas County",
    population: "260,000+",
    description: "St. Petersburg is known for its beautiful waterfront homes, historic bungalows, and vibrant arts district. Homeowners in St. Pete are renovating kitchens, updating bathrooms, and adding outdoor living spaces to take advantage of the city's year-round sunshine and coastal lifestyle.",
    neighborhoods: ["Downtown St. Pete", "Old Northeast", "Snell Isle", "Shore Acres", "Kenwood", "Crescent Heights", "Historic Uptown", "Jungle Terrace", "Pasadena", "Tierra Verde"],
    zipCodes: ["33701", "33702", "33703", "33704", "33705", "33706", "33707", "33708", "33709", "33710", "33711", "33712", "33713", "33714", "33715", "33716"],
    metaTitle: "Home Remodeling St. Petersburg FL | Kitchen & Bath Renovation | Hawley Construction",
    metaDescription: "St. Petersburg's premier remodeling contractor. Kitchen renovations, bathroom remodels, Trex decks & sunrooms. Free estimates. Call (704) 619-1480.",
    heroHeading: "St. Petersburg's Premier Remodeling Contractor",
    heroSubheading: "Transforming St. Pete homes with custom kitchens, spa-like bathrooms, sunrooms, and composite decks designed for the Florida coastal lifestyle.",
    whyContent: "St. Petersburg homeowners trust Hawley Construction because we specialize in renovations that complement the city's unique architectural character — from historic bungalow updates in Old Northeast to modern coastal kitchens in Shore Acres. We use moisture-resistant materials and coastal-grade finishes that withstand St. Pete's salt air and humidity.",
    faqItems: [
      { q: "How much does a kitchen remodel cost in St. Petersburg?", a: "Kitchen remodeling in St. Petersburg typically ranges from $25,000 to $80,000. Historic homes in Old Northeast and Snell Isle may require additional structural work, increasing costs by 10-20%. Hawley Construction provides free in-home estimates for all St. Pete kitchen renovation projects." },
      { q: "What is the best decking material for St. Petersburg homes?", a: "Trex composite decking is the best choice for St. Petersburg homes due to its resistance to moisture, salt air, and UV fading. Unlike wood decking that warps and rots in Florida's humid climate, Trex decks maintain their appearance for 25+ years with minimal maintenance. Hawley Construction is a certified Trex deck builder serving all of St. Pete." },
      { q: "Do I need a permit for remodeling in Pinellas County?", a: "Yes, most remodeling projects in St. Petersburg require permits from Pinellas County or the City of St. Petersburg building department. Kitchen and bathroom remodels involving plumbing, electrical, or structural changes all require permits. Hawley Construction manages the entire permitting process for our St. Pete clients." },
      { q: "How long does a sunroom addition take in St. Petersburg?", a: "A sunroom addition in St. Petersburg typically takes 6-10 weeks from permit approval to completion. The timeline includes foundation work (1-2 weeks), framing and roofing (2-3 weeks), and finishing with windows, electrical, and interior work (2-3 weeks). Permit processing in Pinellas County adds 2-3 weeks." },
    ],
  },
  clearwater: {
    name: "Clearwater",
    slug: "clearwater",
    county: "Pinellas County",
    population: "120,000+",
    description: "Clearwater is a beautiful coastal city known for its award-winning beaches and family-friendly neighborhoods. Homeowners in Clearwater are investing in home remodeling to modernize their properties, increase energy efficiency, and create indoor-outdoor living spaces that take advantage of the Gulf Coast climate.",
    neighborhoods: ["Clearwater Beach", "Countryside", "Safety Harbor", "Dunedin", "Palm Harbor", "Belleair", "Indian Rocks Beach", "Largo", "Seminole", "Oldsmar"],
    zipCodes: ["33755", "33756", "33759", "33760", "33761", "33762", "33763", "33764", "33765", "33767"],
    metaTitle: "Home Remodeling Clearwater FL | Kitchen & Bath Contractor | Hawley Construction",
    metaDescription: "Clearwater's trusted remodeling contractor. Custom kitchens, bathrooms, outdoor living & Trex decks. Licensed & insured. Free estimates. Call (704) 619-1480.",
    heroHeading: "Clearwater's Trusted Home Remodeling Experts",
    heroSubheading: "Custom kitchen renovations, bathroom remodels, outdoor living spaces, and Trex decks for Clearwater homeowners. Quality craftsmanship with coastal durability.",
    whyContent: "Clearwater homeowners choose Hawley Construction for our expertise in coastal Florida renovations. We select materials specifically rated for salt air exposure, high humidity, and hurricane conditions. From waterfront kitchen remodels in Clearwater Beach to outdoor living spaces in Countryside, we deliver lasting quality throughout the Clearwater area.",
    faqItems: [
      { q: "How much does a bathroom remodel cost in Clearwater?", a: "Bathroom remodeling in Clearwater ranges from $12,000 for a basic refresh to $45,000+ for a luxury master bathroom renovation. Popular upgrades include walk-in showers with frameless glass, freestanding tubs, and heated flooring. Hawley Construction provides free estimates for all Clearwater bathroom projects." },
      { q: "What outdoor living features are popular in Clearwater?", a: "Popular outdoor living features in Clearwater include screened-in lanais, outdoor kitchens with built-in grills, Trex composite decks, pergolas, and pool deck renovations. Clearwater's year-round warm climate makes outdoor living spaces one of the highest-ROI home improvements in the area." },
      { q: "How do I choose a remodeling contractor in Clearwater?", a: "When choosing a remodeling contractor in Clearwater, verify their Florida contractor license, check Google reviews, ask for references from local projects, confirm they carry liability insurance and workers' compensation, and get a detailed written estimate. Hawley Construction is fully licensed, insured, and provides transparent pricing for all Clearwater projects." },
      { q: "Do you serve Clearwater Beach and surrounding areas?", a: "Yes, Hawley Construction serves all of Clearwater including Clearwater Beach, Countryside, Safety Harbor, Dunedin, Palm Harbor, Belleair, Indian Rocks Beach, Largo, Seminole, and Oldsmar. We provide free in-home consultations throughout the greater Clearwater area." },
    ],
  },
};

export default function CityLanding() {
  const { city } = useParams<{ city: string }>();
  const data = cityData[city || ""];

  useEffect(() => {
    if (data) {
      document.title = data.metaTitle;
      // Set meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", data.metaDescription);

      // Add LocalBusiness schema for this city
      const schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.id = "city-schema";
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        name: "Hawley Construction Co.",
        description: data.description,
        url: `https://hawleyremodeling.com/areas/${data.slug}`,
        telephone: "+1-704-619-1480",
        areaServed: {
          "@type": "City",
          name: data.name,
          containedInPlace: { "@type": "State", name: "Florida" },
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: data.name,
          addressRegion: "FL",
          addressCountry: "US",
        },
        priceRange: "$$-$$$$",
        openingHours: "Mo-Fr 08:00-18:00",
      });
      document.head.appendChild(schema);

      // Add FAQ schema
      const faqSchema = document.createElement("script");
      faqSchema.type = "application/ld+json";
      faqSchema.id = "city-faq-schema";
      faqSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      });
      document.head.appendChild(faqSchema);

      return () => {
        document.getElementById("city-schema")?.remove();
        document.getElementById("city-faq-schema")?.remove();
      };
    }
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-charcoal" style={{ fontFamily: "'Playfair Display', serif" }}>
            Area Not Found
          </h1>
          <p className="mt-4 text-charcoal/70">
            <Link href="/" className="text-gold hover:underline">Return to homepage</Link>
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt={`Home remodeling in ${data.name}, Florida`} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.12 0.008 250 / 0.9) 0%, oklch(0.12 0.008 250 / 0.6) 55%, transparent 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} style={{ color: "oklch(0.77 0.065 82)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
                Serving {data.name}, {data.county}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              {data.heroHeading}
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: "oklch(0.88 0.005 80)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              {data.heroSubheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gold text-center" style={{ borderRadius: "2px" }}>
                Get a Free Estimate
              </Link>
              <a href="tel:7046191480" className="btn-outline-light text-center flex items-center justify-center gap-2" style={{ borderRadius: "2px" }}>
                <Phone size={15} />
                Call Now: 704-619-1480
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8" style={{ backgroundColor: "oklch(0.18 0.008 250)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-1">
              <Shield size={24} style={{ color: "oklch(0.77 0.065 82)" }} />
              <span className="text-sm font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Star size={24} style={{ color: "oklch(0.77 0.065 82)" }} />
              <span className="text-sm font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>5-Star Rated</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Clock size={24} style={{ color: "oklch(0.77 0.065 82)" }} />
              <span className="text-sm font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>On-Time Guarantee</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <MapPin size={24} style={{ color: "oklch(0.77 0.065 82)" }} />
              <span className="text-sm font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>Local to {data.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About / Why Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                Why {data.name} Homeowners Choose Hawley Construction
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>
                {data.whyContent}
              </p>
              <ul className="space-y-3">
                {["Free in-home consultations", "Transparent pricing with no hidden fees", "All permits handled by our team", "Premium materials with manufacturer warranties", "Clean job sites maintained daily", "On-time project completion"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.77 0.065 82)" }} />
                    <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={BATHROOM_IMG} alt={`Bathroom remodel in ${data.name} FL`} className="w-full h-48 object-cover" style={{ borderRadius: "2px" }} />
              <img src={OUTDOOR_IMG} alt={`Outdoor living space in ${data.name} FL`} className="w-full h-48 object-cover" style={{ borderRadius: "2px" }} />
              <img src={HERO_IMG} alt={`Kitchen remodeling in ${data.name} FL`} className="w-full h-48 object-cover col-span-2" style={{ borderRadius: "2px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "oklch(0.97 0.005 80)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
            Our Remodeling Services in {data.name}
          </h2>
          <p className="text-center text-base mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>
            Hawley Construction provides comprehensive home remodeling services throughout {data.name} and {data.county}.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Kitchen Remodeling", desc: `Transform your ${data.name} kitchen with custom cabinetry, quartz countertops, and modern fixtures. We handle everything from design to installation.`, slug: "kitchen-remodeling" },
              { title: "Bathroom Remodeling", desc: `Create a spa-like bathroom retreat in your ${data.name} home. Walk-in showers, freestanding tubs, and premium tile work.`, slug: "bathroom-remodeling" },
              { title: "Home Additions", desc: `Expand your ${data.name} home with a seamless addition. Extra bedrooms, family rooms, or in-law suites built to match your existing architecture.`, slug: "home-additions" },
              { title: "Sunrooms", desc: `Enjoy Florida sunshine year-round with a custom sunroom addition. Energy-efficient glass, climate control, and seamless indoor-outdoor flow.`, slug: "sunrooms" },
              { title: "Outdoor Living", desc: `Create the ultimate ${data.name} outdoor retreat with custom patios, pergolas, outdoor kitchens, and fire features.`, slug: "outdoor-living" },
              { title: "Trex Decks", desc: `Low-maintenance composite decking perfect for ${data.name}'s climate. Resists moisture, fading, and requires no staining or sealing.`, slug: "trex-decks" },
            ].map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-white p-6 shadow-sm hover:shadow-md transition-all" style={{ borderRadius: "2px" }}>
                <h3 className="text-lg font-bold mb-3 group-hover:text-gold transition-colors" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>
                  {service.desc}
                </p>
                <span className="text-sm font-semibold flex items-center gap-1 text-gold">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
            Neighborhoods We Serve in {data.name}
          </h2>
          <p className="text-center text-base mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>
            Hawley Construction provides home remodeling services throughout {data.name} and the surrounding {data.county} area, including:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {data.neighborhoods.map((n) => (
              <span key={n} className="px-4 py-2 bg-white text-sm font-medium shadow-sm" style={{ borderRadius: "2px", fontFamily: "'DM Sans', sans-serif", color: "oklch(0.25 0.01 250)" }}>
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section — Critical for AI citation */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "oklch(0.97 0.005 80)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
            Frequently Asked Questions About Remodeling in {data.name}
          </h2>
          <p className="text-center text-base mb-12" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>
            Common questions from {data.name} homeowners about our remodeling services.
          </p>
          <div className="space-y-6">
            {data.faqItems.map((item, i) => (
              <div key={i} className="bg-white p-6 shadow-sm" style={{ borderRadius: "2px" }}>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                  {item.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "oklch(0.18 0.008 250)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Transform Your {data.name} Home?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.75 0.01 80)", fontFamily: "'DM Sans', sans-serif" }}>
            Schedule a free in-home consultation with Hawley Construction. We'll discuss your vision, provide a detailed estimate, and create a timeline for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-center" style={{ borderRadius: "2px" }}>
              Schedule Free Consultation
            </Link>
            <a href="tel:7046191480" className="btn-outline-light text-center flex items-center justify-center gap-2" style={{ borderRadius: "2px" }}>
              <Phone size={15} />
              Call: 704-619-1480
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
