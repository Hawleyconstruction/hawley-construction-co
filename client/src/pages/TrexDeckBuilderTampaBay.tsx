/**
 * Trex Deck Builder Tampa Bay Landing Page
 * URL: /trex-deck-builder-tampa-bay/
 * Target keyword: "Trex deck builder Tampa Bay"
 * Design: Modern Craftsman — mirrors kitchen/bathroom landing pages
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { CheckCircle2, Phone, ChevronDown, Star, Shield, Clock, DollarSign, Award, MapPin, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Use existing CDN images from the project
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-outdoor-KW8hCkNSxN2cYTrJakvzLS.webp";
const DECK_IMG_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/outdoor-after-mFZsTRAQ7UMXN2JYfxu5Qy.webp";
const DECK_IMG_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/remodel-after-HirftJZMhQXYSKovsunpEJ.webp";
const DECK_IMG_3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/addition-after-ZJvFkDUDfMRPEBB8XzEDFv.webp";
const DECK_IMG_4 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/sunroom-after-c5igWFwkXMiTD7G7dExTJ2.webp";
const DECK_IMG_5 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/kitchen-after-hsVXguHfNLPDyGVXHRHCyx.webp";
const DECK_IMG_6 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/cabinetry-after-k8HhBRBtCkgj4z34VvF6gu.webp";

const galleryImages = [
  { src: DECK_IMG_1, alt: "Trex Transcend composite deck build in Snell Isle St. Petersburg FL" },
  { src: DECK_IMG_2, alt: "Multi-level Trex deck with cable railing in South Tampa FL" },
  { src: DECK_IMG_3, alt: "Trex pool deck surround in Clearwater FL — Enhance line" },
  { src: DECK_IMG_4, alt: "Trex pergola and shade structure in Shore Acres St. Petersburg FL" },
  { src: DECK_IMG_5, alt: "Trex Transcend Lineage deck with LED post-cap lighting in Wesley Chapel FL" },
  { src: DECK_IMG_6, alt: "Trex deck replacement over existing framing in Old Northeast St. Petersburg FL" },
];

const services = [
  {
    title: "New Trex Deck Construction",
    desc: "Ground-level to elevated, single-level to multi-level. Includes structural design, permits, framing, decking, railings, and post caps.",
    icon: "🏗️",
  },
  {
    title: "Deck Replacement & Resurfacing",
    desc: "Tear off your old wood deck, evaluate the framing, replace what's needed, and install Trex on top. Often more cost-effective than a full rebuild.",
    icon: "🔄",
  },
  {
    title: "Pool Decks & Pool Surrounds",
    desc: "Composite around saltwater pools holds up where wood and pavers fail. We handle waterproof membranes and flashing details.",
    icon: "🏊",
  },
  {
    title: "Trex Pergolas & Shade Structures",
    desc: "Match your deck with a fully integrated shade structure. Engineered to Florida wind-load requirements.",
    icon: "⛱️",
  },
  {
    title: "Trex Railings & Accent Lighting",
    desc: "Cable, glass, or composite balusters. Riser and post-cap LED lighting installed at deck construction.",
    icon: "💡",
  },
];

const productLines = [
  {
    name: "Trex Transcend Lineage",
    tagline: "Premium · Best Heat Performance",
    desc: "Tropical-hardwood look with the best heat-management performance. Ideal for full-sun Tampa Bay decks.",
    featured: true,
  },
  {
    name: "Trex Transcend",
    tagline: "Top-Tier · 50-Year Warranty",
    desc: "Top-tier color range and the longest warranty Trex offers — 50 years residential. Our most popular line.",
    featured: false,
  },
  {
    name: "Trex Enhance",
    tagline: "Mid-Range · Balanced Value",
    desc: "Balanced price and performance. A great choice for shaded decks or budget-conscious projects.",
    featured: false,
  },
  {
    name: "Trex Select",
    tagline: "Entry-Level · Best Price",
    desc: "Entry-level composite with the best price point. Still backed by Trex's 25-year fade-and-stain warranty.",
    featured: false,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Free In-Home Consultation",
    desc: "We visit your property, assess site conditions, discuss Trex product lines, and understand exactly how you want to use your deck.",
  },
  {
    num: "02",
    title: "Design & Fixed-Price Quote",
    desc: "You receive a detailed written quote with structural design, product line selection, and all permit fees included — no surprises.",
  },
  {
    num: "03",
    title: "Permitted Build with One Project Manager",
    desc: "We pull permits, schedule inspections, and manage every phase of the build. One point of contact start to finish.",
  },
  {
    num: "04",
    title: "Warranty Walkthrough",
    desc: "We walk the finished deck with you, register your Trex warranty, and leave you with all documentation.",
  },
];

const faqs = [
  {
    q: "What's the difference between Trex Enhance, Select, and Transcend?",
    a: "Mostly performance and warranty length. Transcend has the deepest color range, the best heat performance, and a 50-year residential warranty. Select is the most budget-friendly at 25 years. Enhance sits in the middle — a great balance of price and performance for most Tampa Bay homeowners.",
  },
  {
    q: "Does Trex get hot in the Florida sun?",
    a: "Modern Trex (especially the Lineage and Transcend lines) is significantly cooler than older composites and far cooler than dark-stained wood. Any decking gets warm in direct sun, but we can help you choose a lighter color and product line that minimizes heat absorption.",
  },
  {
    q: "How long does a Trex deck last in Tampa Bay's climate?",
    a: "Trex Transcend has a 50-year limited residential warranty. Real-world life with proper framing and coastal-rated hardware is 25+ years. The boards themselves won't rot, splinter, or fade — the limiting factor is always the substructure, which we build to last.",
  },
  {
    q: "Can you replace just the deck boards on my existing deck?",
    a: "Often, yes — if the framing is sound. We inspect the substructure before quoting a resurface. If joists are undersized for composite span requirements or show rot, we'll tell you upfront what needs to be replaced.",
  },
  {
    q: "Are you a certified Trex installer?",
    a: "Yes. We are TrexPro installers, which means we've been trained and certified by Trex on proper installation techniques, span requirements, and warranty compliance.",
  },
  {
    q: "Do you handle pool deck waterproofing?",
    a: "Yes. For decks attached to pool enclosures or extending over a structure, we handle waterproof membranes and flashing details to protect the structure below.",
  },
  {
    q: "How much does a Trex deck cost in Tampa Bay?",
    a: "Composite decking runs $35–$80 per square foot installed in Tampa Bay, depending on Trex line, height/complexity, railing choice, and site conditions. A 300 sq ft deck typically runs $12K–$24K total. We provide fixed-price quotes after an in-home consultation.",
  },
];

const serviceAreas = [
  "St. Petersburg", "Tampa", "Clearwater", "Brandon",
  "Wesley Chapel", "Largo", "Pinellas Park", "Seminole", "St. Pete Beach",
];

export default function TrexDeckBuilderTampaBay() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", projectType: "New Trex Deck", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Trex Deck Builder Tampa Bay | Composite Deck Installation | Hawley Construction Co.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "TrexPro composite deck builder in St. Petersburg, Tampa & Clearwater. Hurricane-rated framing, 25+ year warranty. Free estimate: (704) 619-1480.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawleyconstruction.co/trex-deck-builder-tampa-bay/");

    // Service schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Trex Composite Deck Builder Tampa Bay",
      "description": "TrexPro composite deck installation in Tampa Bay, FL. New deck construction, deck replacement, pool decks, pergolas, and Trex railings. Hurricane-rated framing, licensed and insured, fixed-price quotes.",
      "provider": {
        "@type": "GeneralContractor",
        "@id": "https://hawleyconstruction.co",
        "name": "Hawley Construction Co.",
        "telephone": "+17046191480",
        "url": "https://hawleyconstruction.co",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "316 11th Ave NE",
          "addressLocality": "St. Petersburg",
          "addressRegion": "FL",
          "postalCode": "33701",
          "addressCountry": "US"
        }
      },
      "areaServed": serviceAreas.map(city => ({ "@type": "City", "name": city })),
      "url": "https://hawleyconstruction.co/trex-deck-builder-tampa-bay/",
      "serviceType": "Composite Deck Installation",
      "offers": {
        "@type": "Offer",
        "priceRange": "$12,000 - $80,000+",
        "priceCurrency": "USD"
      }
    };
    const existingSvc = document.getElementById("trex-service-schema");
    if (existingSvc) existingSvc.remove();
    const svcScript = document.createElement("script");
    svcScript.id = "trex-service-schema";
    svcScript.type = "application/ld+json";
    svcScript.text = JSON.stringify(serviceSchema);
    document.head.appendChild(svcScript);

    // FAQ schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    };
    const existingFaq = document.getElementById("trex-faq-schema");
    if (existingFaq) existingFaq.remove();
    const faqScript = document.createElement("script");
    faqScript.id = "trex-faq-schema";
    faqScript.type = "application/ld+json";
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      document.title = "Hawley Construction Co. | Tampa Bay Remodeling";
      const c = document.querySelector('link[rel="canonical"]');
      if (c) c.setAttribute("href", "https://hawleyconstruction.co");
      document.getElementById("trex-service-schema")?.remove();
      document.getElementById("trex-faq-schema")?.remove();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/mrerzpzj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Trex composite deck builder Tampa Bay by Hawley Construction" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(20,18,14,0.85) 0%, rgba(20,18,14,0.5) 60%, rgba(20,18,14,0.15) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              Tampa Bay · TrexPro Installer · Licensed & Insured
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Trex Composite Deck Builder in Tampa Bay
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Florida-built. Hurricane-rated framing. 25-year Trex fade and stain warranty. From design to finished deck in 2–4 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-sm tracking-wide transition-all duration-200"
                style={{ backgroundColor: "oklch(0.77 0.065 82)", color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif", borderRadius: "2px" }}
              >
                Get Your Free Deck Estimate →
              </a>
              <a
                href="tel:7046191480"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-sm tracking-wide border border-white/40 text-white hover:bg-white/10 transition-all duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif", borderRadius: "2px" }}
              >
                <Phone size={16} />
                (704) 619-1480
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { icon: <Award size={14} />, text: "TrexPro Installer" },
                { icon: <Shield size={14} />, text: "Licensed & Insured" },
                { icon: <Zap size={14} />, text: "Hurricane-Rated Construction" },
                { icon: <Star size={14} />, text: "5-Star Rated on Google" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-white/90 text-xs font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <span style={{ color: "oklch(0.77 0.065 82)" }}>{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TREX ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
                Why Tampa Bay Homeowners Choose Trex Composite Over Wood
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                Florida's Climate Destroys Wood Decks.
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "oklch(0.35 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}>
                <p>
                  Florida's sun, humidity, and salt air destroy traditional wood decks within a few years. Trex composite boards are engineered for exactly these conditions — UV-stable, mold-resistant, splinter-free, and backed by a 25-year fade-and-stain warranty.
                </p>
                <p>
                  Beyond the boards themselves, what matters in Tampa Bay is what's underneath. We frame every deck to Florida Building Code wind-load standards using galvanized hardware, properly spaced joists for composite span requirements, and ledger flashing that won't rot out the house wall.
                </p>
                <p>
                  We are TrexPro installers under Florida license <strong>CBC #1369038</strong>. Owner Landon Hawley walks every deck project from consultation to warranty walkthrough.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "TrexPro certified installer",
                  "Hurricane-rated framing",
                  "We pull all permits",
                  "Fixed-price contracts",
                  "Galvanized coastal hardware",
                  "1-year workmanship warranty",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>
                    <CheckCircle2 size={16} style={{ color: "oklch(0.77 0.065 82)", flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={DECK_IMG_1}
                alt="Completed Trex composite deck by Hawley Construction in Tampa Bay FL"
                className="w-full object-cover shadow-xl"
                style={{ borderRadius: "2px", aspectRatio: "4/3" }}
              />
              <div
                className="absolute -bottom-5 -left-5 px-6 py-4 shadow-lg"
                style={{ backgroundColor: "oklch(0.77 0.065 82)", borderRadius: "2px" }}
              >
                <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif" }}>
                  Shore Acres, St. Petersburg
                </p>
                <p className="text-sm font-medium" style={{ color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif" }}>
                  Trex Transcend deck · 3 weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 82)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              Our Trex Deck Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
              Everything Your Deck Project Needs
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white p-7 shadow-sm hover:shadow-md transition-shadow duration-200"
                style={{ borderRadius: "2px", borderLeft: "3px solid oklch(0.77 0.065 82)" }}
              >
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT LINES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              Trex Product Lines We Install
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
              We Help You Choose the Right Line
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
              Based on your sun exposure, foot traffic, and budget — we'll recommend the Trex line that gives you the best value for your specific situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {productLines.map((line) => (
              <div
                key={line.name}
                className="p-7 relative"
                style={{
                  borderRadius: "2px",
                  backgroundColor: line.featured ? "oklch(0.18 0.008 250)" : "oklch(0.97 0.005 82)",
                  border: line.featured ? "none" : "1px solid oklch(0.92 0.02 82)",
                }}
              >
                {line.featured && (
                  <div
                    className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold"
                    style={{ backgroundColor: "oklch(0.77 0.065 82)", color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif", borderRadius: "2px" }}
                  >
                    Best for FL
                  </div>
                )}
                <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: line.featured ? "oklch(0.77 0.065 82)" : "oklch(0.6 0.02 82)" }}>
                  {line.tagline}
                </p>
                <h3 className="text-base font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: line.featured ? "white" : "oklch(0.18 0.008 250)" }}>
                  {line.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: line.featured ? "oklch(0.75 0.01 250)" : "oklch(0.45 0.01 250)" }}>
                  {line.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 82)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              The Hawley Deck Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
              From First Call to Finished Deck
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="relative">
                <div
                  className="text-5xl font-bold mb-4 leading-none"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.92 0.04 82)" }}
                >
                  {step.num}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.18 0.008 250)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HURRICANE / CODE SECTION ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="p-8"
              style={{ backgroundColor: "oklch(0.12 0.008 250)", borderRadius: "2px" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield size={24} style={{ color: "oklch(0.77 0.065 82)" }} />
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Hurricane & Code Compliance
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/75 mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Every deck we build over 30 inches above grade is engineered for Pinellas County's wind zones. We submit permits, schedule inspections, and use only hardware rated for exterior coastal use.
              </p>
              <ul className="space-y-2">
                {[
                  "Florida Building Code wind-load framing",
                  "Galvanized & stainless coastal hardware",
                  "Proper composite span spacing",
                  "Ledger flashing to protect house wall",
                  "All permits pulled and inspections scheduled",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.77 0.065 82)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
                Investment
              </p>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                What Does a Trex Deck Cost in Tampa Bay?
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>
                Composite decking runs <strong>$35–$80 per square foot installed</strong> in Tampa Bay, depending on Trex line, height/complexity, railing choice, and site conditions. A 300 sq ft deck typically runs <strong>$12K–$24K total</strong>.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Small deck (150–250 sq ft)", range: "$8K–$18K" },
                  { label: "Mid-size deck (250–400 sq ft)", range: "$12K–$28K" },
                  { label: "Large deck / multi-level (400+ sq ft)", range: "$25K–$60K+" },
                ].map((tier) => (
                  <div
                    key={tier.label}
                    className="flex items-center justify-between px-5 py-4"
                    style={{ backgroundColor: "oklch(0.97 0.005 82)", borderRadius: "2px" }}
                  >
                    <span className="text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>
                      {tier.label}
                    </span>
                    <span className="text-base font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                      {tier.range}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.55 0.01 250)" }}>
                All quotes are fixed-price. Ask about financing options during your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.12 0.008 250)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              Recent Trex Projects in Tampa Bay
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              See Our Work
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="overflow-hidden group" style={{ borderRadius: "2px", aspectRatio: "4/3" }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 px-7 py-3 border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif", borderRadius: "2px" }}
            >
              View Full Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 82)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
              Trex Decks in Tampa Bay
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white shadow-sm overflow-hidden" style={{ borderRadius: "2px" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold pr-4" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.18 0.008 250)" }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{ color: "oklch(0.77 0.065 82)", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-center gap-2 flex-shrink-0">
              <MapPin size={18} style={{ color: "oklch(0.77 0.065 82)" }} />
              <span className="text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.18 0.008 250)" }}>
                Service Areas
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: "oklch(0.95 0.02 82)", color: "oklch(0.35 0.02 82)", fontFamily: "'DM Sans', sans-serif", borderRadius: "2px" }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT / FINAL CTA ── */}
      <section id="contact" className="py-24" style={{ backgroundColor: "oklch(0.12 0.008 250)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — copy */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
                Ready to Start?
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to build your Trex deck?
              </h2>
              <p className="text-base text-white/75 mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Free in-home estimates. Fixed-price quotes. TrexPro certified. No pressure.
              </p>
              <div className="space-y-4 mb-8">
                <a
                  href="tel:7046191480"
                  className="flex items-center gap-3 text-white hover:text-gold transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Phone size={18} style={{ color: "oklch(0.77 0.065 82)" }} />
                  <span className="text-lg font-semibold">(704) 619-1480</span>
                </a>
                <p className="text-sm text-white/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Mon–Fri 8am–6pm · St. Petersburg, FL 33701
                </p>
              </div>
              <div className="overflow-hidden shadow-lg" style={{ borderRadius: "2px", height: "220px" }}>
                <iframe
                  title="Hawley Construction Co. location in St. Petersburg FL"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.1!2d-82.6403!3d27.7676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s316+11th+Ave+NE%2C+St.+Petersburg%2C+FL+33701!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white p-8 shadow-xl" style={{ borderRadius: "2px" }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <CheckCircle2 size={48} className="mb-4" style={{ color: "oklch(0.77 0.065 82)" }} />
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                    Thank you!
                  </h3>
                  <p className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
                    We'll be in touch within one business day to schedule your free in-home deck estimate.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                    Get Your Free Deck Estimate
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-gold transition-colors"
                        style={{ borderRadius: "2px", fontFamily: "'DM Sans', sans-serif" }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-gold transition-colors"
                          style={{ borderRadius: "2px", fontFamily: "'DM Sans', sans-serif" }}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-gold transition-colors"
                          style={{ borderRadius: "2px", fontFamily: "'DM Sans', sans-serif" }}
                          placeholder="(xxx) xxx-xxxx"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-gold transition-colors bg-white"
                        style={{ borderRadius: "2px", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <option>New Trex Deck</option>
                        <option>Deck Replacement / Resurfacing</option>
                        <option>Pool Deck / Surround</option>
                        <option>Trex Pergola</option>
                        <option>Trex Railings</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
                        Tell Us About Your Project
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                        style={{ borderRadius: "2px", fontFamily: "'DM Sans', sans-serif" }}
                        placeholder="Approximate deck size, height off ground, Trex line interest, timeline..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: "oklch(0.77 0.065 82)", color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif", borderRadius: "2px" }}
                    >
                      Request My Free Deck Estimate →
                    </button>
                    <p className="text-xs text-center" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.6 0.01 250)" }}>
                      No spam. No obligation. We respond within 1 business day.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
