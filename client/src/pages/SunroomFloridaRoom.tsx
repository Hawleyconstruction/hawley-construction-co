/**
 * Sunroom & Florida Room Contractor Landing Page
 * URL: /sunroom-florida-room-contractor/
 * Target keyword: "sunroom Florida room contractor Tampa Bay"
 * Design: Modern Craftsman — mirrors kitchen/bathroom/Trex landing pages
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { CheckCircle2, Phone, ChevronDown, Star, Shield, Clock, Award, MapPin, Zap, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "/images/fallbacks/sunroom-01.jpg"; // local fallback — replace when real sunroom hero photo is available
const FALLBACK_HERO = "/images/fallbacks/sunroom-after-01.jpg"; // local fallback

const IMG1 = "/images/fallbacks/sunroom-after-01.jpg"; // four-season sunroom interior
const IMG2 = "/images/projects/additions/addition-02.jpg"; // home addition with screened porch & deck
const IMG3 = "/images/projects/outdoor-living/outdoor-fireplace-lounge-01.jpg"; // covered outdoor living room
const IMG4 = "/images/projects/kitchen/kitchen-02.jpg"; // full home remodel kitchen
const IMG5 = "/images/projects/kitchen/kitchen-04.jpg"; // kitchen after remodel
const IMG6 = "/images/fallbacks/cabinetry-after-01.jpg"; // custom cabinetry

const galleryImages = [
  { src: IMG1, alt: "Custom four-season Florida room addition in Shore Acres St. Petersburg FL" },
  { src: IMG2, alt: "Three-season sunroom with vaulted ceiling in South Tampa FL" },
  { src: IMG3, alt: "Screened lanai with pool enclosure in Clearwater FL" },
  { src: IMG4, alt: "Pergola with optional roof in Old Northeast St. Petersburg FL" },
  { src: IMG5, alt: "Pool screen enclosure with hurricane-rated framing in Seminole FL" },
  { src: IMG6, alt: "Florida room with matching roofline and HVAC in Wesley Chapel FL" },
];

const services = [
  {
    title: "Three-Season Sunrooms",
    desc: "Single-pane glass, screened panels, ceiling fans. Great for shoulder seasons and storm-protected outdoor living without the cost of full HVAC.",
    icon: "☀️",
  },
  {
    title: "Four-Season Florida Rooms",
    desc: "Double-pane insulated glass, integrated HVAC, finished interior — true living-space additions that count toward heated/cooled square footage on appraisals.",
    icon: "🏠",
  },
  {
    title: "Screened Lanais",
    desc: "Aluminum or hardwood frame, screened panels, designed to integrate with existing pool decks and patios. Custom sizing and screen types.",
    icon: "🌿",
  },
  {
    title: "Pool Enclosures & Screen Rooms",
    desc: "Custom-fit screen enclosures over pools and patios. Hurricane-rated framing, integrated lighting, and proper drainage design.",
    icon: "🏊",
  },
  {
    title: "Pergolas & Covered Outdoor Living",
    desc: "Stained wood, painted, or composite pergolas with optional roof and screening. Designed to complement your home's architecture.",
    icon: "⛱️",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Free In-Home Consultation",
    desc: "We visit your property, assess the existing structure, discuss sunroom types and design options, and understand how you plan to use the space.",
  },
  {
    num: "02",
    title: "Custom Design & Fixed-Price Quote",
    desc: "You receive architectural drawings, product specifications, and a fixed-price quote with all permit fees included — no change orders for scope we defined.",
  },
  {
    num: "03",
    title: "Permitted Build with One PM",
    desc: "We submit permit packages, schedule all required inspections, and manage every phase of construction. One project manager, start to finish.",
  },
  {
    num: "04",
    title: "Final Walkthrough & Warranty",
    desc: "We walk the finished space with you, confirm all systems are operational, and provide all warranty documentation.",
  },
];

const faqs = [
  {
    q: "What's the difference between a sunroom and a Florida room?",
    a: "A Florida room is a true four-season addition with insulated walls and glass, HVAC, and a finished interior — it's a permanent living space. A sunroom is typically a three-season space with single-pane glass and no HVAC, better suited for spring and fall use in Florida's climate.",
  },
  {
    q: "Will a sunroom or Florida room add to the value of my home?",
    a: "Properly permitted four-season Florida rooms count toward heated/cooled square footage on appraisals, which typically increases home value. Three-season sunrooms add livability and appeal but generally don't add to appraised square footage.",
  },
  {
    q: "Do you handle hurricane impact glass?",
    a: "Yes. All our four-season Florida rooms use impact-rated glass that meets Pinellas County's wind zone requirements. Three-season sunrooms can also be built with impact glass upon request.",
  },
  {
    q: "How long does construction take?",
    a: "4–8 weeks for most sunroom additions from permit approval. Full four-season Florida rooms with HVAC integration typically run 8–12 weeks. We provide a detailed schedule at the time of contract.",
  },
  {
    q: "Can you match the existing roofline of my house?",
    a: "Yes — this is one of the key advantages of hiring a full-service general contractor over a prefab kit company. We design every sunroom to look like it was part of the original house, with matching roof pitch, shingles, fascia, siding, and trim.",
  },
  {
    q: "Do you remove existing screen enclosures or lanais during construction?",
    a: "Yes. Demolition and disposal of existing structures are included in our quotes when replacement is part of the scope.",
  },
  {
    q: "Why hire a general contractor instead of a sunroom specialty company?",
    a: "Prefab sunroom companies install kit systems with limited sizes and designs. As a full-service general contractor, we design and build your sunroom as a true custom addition — matching your roofline, integrating HVAC, running proper electrical, and building to Florida Building Code. The result looks and functions like part of the original house.",
  },
];

const serviceAreas = [
  { name: "St. Petersburg", href: "/areas/st-petersburg" },
  { name: "Tampa", href: "/areas/tampa" },
  { name: "Clearwater", href: "/areas/clearwater" },
  { name: "Brandon", href: null },
  { name: "Wesley Chapel", href: null },
  { name: "Largo", href: null },
  { name: "Pinellas Park", href: null },
  { name: "Seminole", href: null },
  { name: "St. Pete Beach", href: null },
];

export default function SunroomFloridaRoom() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", projectType: "Four-Season Florida Room", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    document.title = "Sunroom & Florida Room Contractor | St. Petersburg & Tampa Bay | Hawley Construction Co.";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Custom sunrooms, Florida rooms, and lanai enclosures in St. Petersburg & Tampa Bay. Hurricane-rated, fully permitted, fixed-price quotes. (704) 619-1480.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawleyremodeling.com/sunroom-florida-room-contractor/");

    // Service schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sunroom & Florida Room Contractor Tampa Bay",
      "description": "Custom sunrooms, Florida rooms, screened lanais, and pool enclosures in St. Petersburg & Tampa Bay. Hurricane-rated construction, fully permitted, fixed-price quotes.",
      "provider": {
        "@type": "GeneralContractor",
        "@id": "https://hawleyremodeling.com",
        "name": "Hawley Construction Co.",
        "telephone": "+17046191480",
        "url": "https://hawleyremodeling.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "316 11th Ave NE",
          "addressLocality": "St. Petersburg",
          "addressRegion": "FL",
          "postalCode": "33701",
          "addressCountry": "US"
        }
      },
      "areaServed": serviceAreas.map(a => ({ "@type": "City", "name": a.name })),
      "url": "https://hawleyremodeling.com/sunroom-florida-room-contractor/",
      "serviceType": "Sunroom and Florida Room Construction",
      "offers": {
        "@type": "Offer",
        "priceRange": "$15,000 - $120,000+",
        "priceCurrency": "USD"
      }
    };
    const existingSvc = document.getElementById("sunroom-service-schema");
    if (existingSvc) existingSvc.remove();
    const svcScript = document.createElement("script");
    svcScript.id = "sunroom-service-schema";
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
    const existingFaq = document.getElementById("sunroom-faq-schema");
    if (existingFaq) existingFaq.remove();
    const faqScript = document.createElement("script");
    faqScript.id = "sunroom-faq-schema";
    faqScript.type = "application/ld+json";
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // LocalBusiness schema
    const lbSchema = {
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      "@id": "https://hawleyremodeling.com",
      "name": "Hawley Construction Co.",
      "url": "https://hawleyremodeling.com",
      "telephone": "+17046191480",
      "priceRange": "$$$",
      "image": "https://hawleyremodeling.com/og-image.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "316 11th Ave NE",
        "addressLocality": "St. Petersburg",
        "addressRegion": "FL",
        "postalCode": "33701",
        "addressCountry": "US"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 27.7676, "longitude": -82.6403 },
      "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" }],
      "sameAs": ["https://www.instagram.com/hawleyandsons", "https://hawleyremodeling.com"]
    };
    const existingLb = document.getElementById("sunroom-lb-schema");
    if (existingLb) existingLb.remove();
    const lbScript = document.createElement("script");
    lbScript.id = "sunroom-lb-schema";
    lbScript.type = "application/ld+json";
    lbScript.text = JSON.stringify(lbSchema);
    document.head.appendChild(lbScript);

    return () => {
      document.title = "Hawley Construction Co. | Tampa Bay Remodeling";
      const c = document.querySelector('link[rel="canonical"]');
      if (c) c.setAttribute("href", "https://hawleyremodeling.com");
      document.getElementById("sunroom-service-schema")?.remove();
      document.getElementById("sunroom-faq-schema")?.remove();
      document.getElementById("sunroom-lb-schema")?.remove();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(false);
    try {
      const res = await fetch("https://formspree.io/f/mrerzpzj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'conversion', {
            send_to: 'AW-18172396876/cPy9CKLmgrQcEMyKo91D',
            value: 50.0,
            currency: 'USD',
          });
          (window as any).gtag('event', 'generate_lead', {
            currency: 'USD',
            value: 50,
          });
        }
      } else {
        setFormError(true);
      }
    } catch {
      setFormError(true);
    }
  };

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG1}
            alt="Custom sunroom and Florida room contractor Tampa Bay by Hawley Construction"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_HERO; }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(20,18,14,0.88) 0%, rgba(20,18,14,0.55) 60%, rgba(20,18,14,0.2) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              St. Petersburg · Tampa Bay · Licensed & Insured
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Sunroom & Florida Room Contractor — Tampa Bay
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Custom-built sunrooms, screened lanais, and Florida rooms — designed to fit your home and built to Florida hurricane code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-sm tracking-wide transition-all duration-200"
                style={{ backgroundColor: "oklch(0.77 0.065 82)", color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif", borderRadius: "2px" }}
              >
                Get Your Free Sunroom Estimate →
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
                { icon: <Shield size={14} />, text: "Licensed & Insured" },
                { icon: <Zap size={14} />, text: "Hurricane-Rated Construction" },
                { icon: <Home size={14} />, text: "Custom Design" },
                { icon: <Award size={14} />, text: "Fixed-Price Quotes" },
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

      {/* ── WHY FULL-SERVICE BUILDER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
                Why Hire a Full-Service Builder for Your Sunroom
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                Not a Kit. A Real Addition.
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "oklch(0.35 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}>
                <p>
                  Most "sunroom companies" in Tampa Bay install pre-fab kits — limited sizes, limited designs, and rooflines that rarely match the existing home. As a full-service general contractor, we design and build your sunroom or Florida room as a true addition: custom rooflines, matching siding, proper foundations, integrated electrical and HVAC.
                </p>
                <p>
                  The result looks like it was always part of your house — because it was designed that way from the start. We hold Florida General Contractor license <strong>CBC #1369038</strong> and pull all permits ourselves.
                </p>
                <p>
                  Many clients combine a sunroom with a new{" "}
                  <Link href="/trex-deck-builder-tampa-bay/" style={{ color: "oklch(0.55 0.05 82)", textDecoration: "underline" }}>Trex deck</Link>{" "}
                  or an{" "}
                  <Link href="/adu-in-law-suite-builder/" style={{ color: "oklch(0.55 0.05 82)", textDecoration: "underline" }}>ADU addition</Link>{" "}
                  — we can manage both under one contract.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Custom rooflines that match your home",
                  "Integrated electrical & HVAC",
                  "Proper foundation & footings",
                  "We pull all permits",
                  "Hurricane-rated glass & framing",
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
                src={IMG2}
                alt="Custom Florida room addition matching existing home roofline in Tampa Bay FL"
                className="w-full object-cover shadow-xl"
                style={{ borderRadius: "2px", aspectRatio: "4/3" }}
              />
              <div
                className="absolute -bottom-5 -left-5 px-6 py-4 shadow-lg"
                style={{ backgroundColor: "oklch(0.77 0.065 82)", borderRadius: "2px" }}
              >
                <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif" }}>
                  Old Northeast, St. Petersburg
                </p>
                <p className="text-sm font-medium" style={{ color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif" }}>
                  Four-season Florida room · 8 weeks
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
              Sunroom & Florida Room Types We Build
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
              Every Type of Outdoor Living Addition
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

      {/* ── HURRICANE / CODE + PRICING ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                Every sunroom and Florida room we build is engineered for Pinellas County wind zones (typically 130–160 mph design pressures), with hurricane-rated glass and code-compliant tie-downs. We submit full permit packages and schedule all required inspections.
              </p>
              <ul className="space-y-2">
                {[
                  "130–160 mph wind zone engineering",
                  "Hurricane-rated impact glass (4-season rooms)",
                  "Code-compliant tie-downs and anchoring",
                  "Full permit packages submitted",
                  "All inspections scheduled and managed",
                  "Florida Building Code compliant throughout",
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
                What Does a Sunroom Cost in Tampa Bay?
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>
                Pricing depends on the type of addition, size, glass specification, and HVAC requirements. All quotes are fixed-price — no change orders for scope we defined together.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Screened lanai or pool cage", range: "$15K–$35K" },
                  { label: "Three-season sunroom", range: "$25K–$50K" },
                  { label: "Four-season Florida room with HVAC", range: "$50K–$120K" },
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
                All quotes are fixed-price with permit fees included. Ask about financing options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 82)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              The Hawley Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
              From First Call to Finished Room
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num}>
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

      {/* ── GALLERY ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.12 0.008 250)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              Recent Sunroom & Florida Room Projects
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
              Sunrooms & Florida Rooms in Tampa Bay
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
                area.href ? (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="px-3 py-1 text-xs font-medium hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: "oklch(0.95 0.02 82)", color: "oklch(0.35 0.02 82)", fontFamily: "'DM Sans', sans-serif", borderRadius: "2px", textDecoration: "none" }}
                  >
                    {area.name}
                  </Link>
                ) : (
                  <span
                    key={area.name}
                    className="px-3 py-1 text-xs font-medium"
                    style={{ backgroundColor: "oklch(0.95 0.02 82)", color: "oklch(0.35 0.02 82)", fontFamily: "'DM Sans', sans-serif", borderRadius: "2px" }}
                  >
                    {area.name}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT / FINAL CTA ── */}
      <section id="contact" className="py-24" style={{ backgroundColor: "oklch(0.12 0.008 250)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
                Ready to Start?
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to add a sunroom or Florida room?
              </h2>
              <p className="text-base text-white/75 mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Free in-home estimates. Custom design. Fixed-price contracts. Hurricane-rated construction. No pressure.
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
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium mt-2 hover:opacity-80 transition-opacity"
                  style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  View full contact page →
                </Link>
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

            <div className="bg-white p-8 shadow-xl" style={{ borderRadius: "2px" }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <CheckCircle2 size={48} className="mb-4" style={{ color: "oklch(0.77 0.065 82)" }} />
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                    Thank you!
                  </h3>
                  <p className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
                    We'll be in touch within one business day to schedule your free in-home sunroom estimate.
                  </p>
                </div>
              ) : formError ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="mb-4 text-4xl">⚠️</div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                    Something went wrong
                  </h3>
                  <p className="text-sm mb-4" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
                    We couldn't send your request. Please call us directly at (704) 619-1480 or try again.
                  </p>
                  <button
                    onClick={() => setFormError(false)}
                    className="text-sm underline"
                    style={{ color: "oklch(0.45 0.01 250)" }}
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                    Get Your Free Sunroom Estimate
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
                        <option>Four-Season Florida Room</option>
                        <option>Three-Season Sunroom</option>
                        <option>Screened Lanai</option>
                        <option>Pool Enclosure / Screen Room</option>
                        <option>Pergola / Covered Outdoor Living</option>
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
                        placeholder="Approximate size, existing structure details, timeline, any specific design ideas..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: "oklch(0.77 0.065 82)", color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif", borderRadius: "2px" }}
                    >
                      Request My Free Sunroom Estimate →
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
