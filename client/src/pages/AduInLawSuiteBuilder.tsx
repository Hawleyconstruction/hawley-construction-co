/**
 * ADU & In-Law Suite Builder Landing Page
 * URL: /adu-in-law-suite-builder/
 * Target keyword: "ADU in-law suite builder St. Petersburg FL"
 * Design: Modern Craftsman — mirrors other landing pages
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { CheckCircle2, Phone, ChevronDown, Shield, Award, Home, MapPin, Zap, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IMG1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/addition-after-ZJvFkDUDfMRPEBB8XzEDFv.webp";
const IMG2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/remodel-after-HirftJZMhQXYSKovsunpEJ.webp";
const IMG3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/outdoor-after-mFZsTRAQ7UMXN2JYfxu5Qy.webp";
const IMG4 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/sunroom-after-c5igWFwkXMiTD7G7dExTJ2.webp";
const IMG5 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/kitchen-after-hsVXguHfNLPDyGVXHRHCyx.webp";
const IMG6 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/cabinetry-after-k8HhBRBtCkgj4z34VvF6gu.webp";

const galleryImages = [
  { src: IMG1, alt: "Detached backyard ADU cottage in Shore Acres St. Petersburg FL" },
  { src: IMG2, alt: "In-law suite addition with private entrance in South Tampa FL" },
  { src: IMG3, alt: "Garage conversion to ADU dwelling unit in Clearwater FL" },
  { src: IMG4, alt: "Above-garage ADU unit in Old Northeast St. Petersburg FL" },
  { src: IMG5, alt: "In-law suite kitchenette and living space in Seminole FL" },
  { src: IMG6, alt: "Custom ADU interior finishes in Wesley Chapel FL" },
];

const aduTypes = [
  {
    title: "Detached Backyard Cottages",
    desc: "Stand-alone structures with their own kitchen, bath, and entrance. Usually 400–900 sq ft. The most flexible ADU option for rental income or multigenerational living.",
    icon: "🏡",
  },
  {
    title: "Garage Conversions",
    desc: "Convert an attached or detached garage into a fully permitted dwelling unit. Often the most cost-effective ADU path since the shell already exists.",
    icon: "🏗️",
  },
  {
    title: "In-Law Suite Additions",
    desc: "Attached additions with private entrance, kitchenette, bath, and living space. Ideal for aging parents who want independence with proximity.",
    icon: "👨‍👩‍👧",
  },
  {
    title: "Above-Garage Units",
    desc: "Two-story additions placing a dwelling unit above an existing or new garage. Maximizes lot usage without consuming backyard space.",
    icon: "🏢",
  },
  {
    title: "First-Floor Conversions",
    desc: "Converting underutilized interior space — bonus rooms, oversized garages, or unused first-floor areas — into a permitted dwelling unit.",
    icon: "🔄",
  },
];

const whatWeHandle = [
  "Zoning compliance research",
  "Architectural design in-house",
  "Structural engineering coordination",
  "Full permit package submission",
  "Foundation and framing",
  "Plumbing and electrical",
  "HVAC installation",
  "Interior finishes",
  "All required inspections",
  "Certificate of occupancy",
];

const processSteps = [
  {
    num: "01",
    title: "Free ADU Consultation & Zoning Check",
    desc: "We visit your property, confirm zoning eligibility, review setback and size rules for your specific parcel, and discuss ADU types that work for your lot.",
  },
  {
    num: "02",
    title: "Custom Design & Fixed-Price Quote",
    desc: "You receive architectural drawings, structural specifications, and a fixed-price quote with all permit and engineering fees included.",
  },
  {
    num: "03",
    title: "Permitted Build with One PM",
    desc: "We submit all permit packages, coordinate inspections, and manage every trade. One project manager from groundbreaking to final walkthrough.",
  },
  {
    num: "04",
    title: "Certificate of Occupancy & Handover",
    desc: "We obtain the certificate of occupancy, walk the finished unit with you, and provide all warranty documentation and utility connection info.",
  },
];

const faqs = [
  {
    q: "Is my property zoned for an ADU?",
    a: "Most residential St. Petersburg zones allow ADUs, but with size and setback rules that vary by neighborhood and parcel. We do a free zoning compliance check during your initial consultation — before you commit to anything.",
  },
  {
    q: "Can I rent out my ADU?",
    a: "St. Petersburg allows long-term ADU rentals in most residential zones. Short-term rental rules (Airbnb, VRBO) are more restrictive and depend on your specific zone. We'll explain exactly what applies to your property during the consultation.",
  },
  {
    q: "How long does an ADU project take?",
    a: "6–12 months from first design meeting to certificate of occupancy, depending on the ADU type and current permit timelines at the City of St. Petersburg. Garage conversions are typically faster; detached cottages take longer due to foundation and utility work.",
  },
  {
    q: "Can I convert my garage into an ADU?",
    a: "Yes, in most cases. The conversion needs to meet residential code for insulation, egress windows, plumbing, and electrical. Your lot also needs to comply with parking requirements after the conversion — we verify this during the zoning check.",
  },
  {
    q: "Do you handle the design, or do I need to hire an architect?",
    a: "We handle architectural design in-house for most ADU projects. For more complex sites or above-garage units requiring structural engineering, we coordinate directly with licensed engineers and architects — you don't need to manage those relationships.",
  },
  {
    q: "Will an ADU add value to my home?",
    a: "Properly permitted ADUs in St. Petersburg typically add significant appraised value — often more than the cost of construction in desirable neighborhoods like Shore Acres, Old Northeast, and Kenwood. Unpermitted units add risk, not value.",
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

export default function AduInLawSuiteBuilder() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", projectType: "Detached Backyard Cottage", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "ADU & In-Law Suite Builder | St. Petersburg, FL | Hawley Construction Co.";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Custom ADUs, in-law suites, and backyard cottages in St. Petersburg & Tampa Bay. Full design-build with permits handled. (704) 619-1480.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawleyremodeling.com/adu-in-law-suite-builder/");

    // Service schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "ADU & In-Law Suite Builder St. Petersburg FL",
      "description": "Custom ADUs, in-law suites, garage conversions, and backyard cottages in St. Petersburg & Tampa Bay. Full design-build with permits handled.",
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
      "url": "https://hawleyremodeling.com/adu-in-law-suite-builder/",
      "serviceType": "ADU and In-Law Suite Construction",
      "offers": {
        "@type": "Offer",
        "priceRange": "$120,000 - $400,000+",
        "priceCurrency": "USD"
      }
    };
    const existingSvc = document.getElementById("adu-service-schema");
    if (existingSvc) existingSvc.remove();
    const svcScript = document.createElement("script");
    svcScript.id = "adu-service-schema";
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
    const existingFaq = document.getElementById("adu-faq-schema");
    if (existingFaq) existingFaq.remove();
    const faqScript = document.createElement("script");
    faqScript.id = "adu-faq-schema";
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
    const existingLb = document.getElementById("adu-lb-schema");
    if (existingLb) existingLb.remove();
    const lbScript = document.createElement("script");
    lbScript.id = "adu-lb-schema";
    lbScript.type = "application/ld+json";
    lbScript.text = JSON.stringify(lbSchema);
    document.head.appendChild(lbScript);

    return () => {
      document.title = "Hawley Construction Co. | Tampa Bay Remodeling";
      const c = document.querySelector('link[rel="canonical"]');
      if (c) c.setAttribute("href", "https://hawleyremodeling.com");
      document.getElementById("adu-service-schema")?.remove();
      document.getElementById("adu-faq-schema")?.remove();
      document.getElementById("adu-lb-schema")?.remove();
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
          <img
            src={IMG1}
            alt="Custom ADU and in-law suite builder St. Petersburg FL by Hawley Construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(20,18,14,0.90) 0%, rgba(20,18,14,0.60) 60%, rgba(20,18,14,0.25) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              St. Petersburg · Tampa Bay · Licensed & Insured
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              ADU & In-Law Suite Builder — St. Petersburg, FL
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Accessory dwelling units, in-law suites, and backyard cottages — designed to fit your lot and built fully permitted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-sm tracking-wide transition-all duration-200"
                style={{ backgroundColor: "oklch(0.77 0.065 82)", color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif", borderRadius: "2px" }}
              >
                Get Your Free ADU Consultation →
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
                { icon: <Building2 size={14} />, text: "Design-Build Specialist" },
                { icon: <Home size={14} />, text: "Permits Handled" },
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

      {/* ── WHY ADU IN ST PETE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
                Why an ADU in St. Petersburg Makes Sense Right Now
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                More Options on a Property You Already Own
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "oklch(0.35 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}>
                <p>
                  Accessory dwelling units have exploded in popularity across St. Petersburg neighborhoods. They give homeowners options: an aging parent who wants independence with proximity, a college-aged child returning home, dedicated home-office space, or rental income on a property you already own.
                </p>
                <p>
                  St. Petersburg's zoning allows ADUs in most residential zones — but the rules around size, setbacks, and rental use vary by neighborhood. We do a free zoning compliance check during your consultation before you commit to anything.
                </p>
                <p>
                  Many clients also take the opportunity to add a{" "}
                  <Link href="/sunroom-florida-room-contractor/" style={{ color: "oklch(0.55 0.05 82)", textDecoration: "underline" }}>screened sunroom</Link>{" "}
                  or upgrade their{" "}
                  <Link href="/bathroom-remodeling-st-petersburg/" style={{ color: "oklch(0.55 0.05 82)", textDecoration: "underline" }}>primary suite bathroom</Link>{" "}
                  as part of the same project.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Rental income potential",
                  "Multigenerational living",
                  "Home office or studio",
                  "Increases property value",
                  "Fully permitted & legal",
                  "Design-build in-house",
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
                alt="In-law suite addition with private entrance in St. Petersburg FL"
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
                  Detached backyard cottage · 650 sq ft
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADU TYPES ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.005 82)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              Types of ADUs We Build
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
              Every ADU Type, Fully Permitted
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aduTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white p-7 shadow-sm hover:shadow-md transition-shadow duration-200"
                style={{ borderRadius: "2px", borderLeft: "3px solid oklch(0.77 0.065 82)" }}
              >
                <div className="text-3xl mb-4">{type.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                  {type.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE HANDLE + PRICING ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div
              className="p-8"
              style={{ backgroundColor: "oklch(0.12 0.008 250)", borderRadius: "2px" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap size={24} style={{ color: "oklch(0.77 0.065 82)" }} />
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  What We Handle — Everything
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/75 mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                ADUs in St. Petersburg involve more permitting and coordination than a typical remodel. We handle all of it — you don't need to manage separate architects, engineers, or permit runners.
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {whatWeHandle.map((item) => (
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
                What Does an ADU Cost in St. Petersburg?
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>
                Most St. Petersburg ADUs run $200–$400 per square foot fully built and finished, depending on complexity, finishes, and site conditions.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Garage conversion to ADU", range: "$80K–$150K" },
                  { label: "In-law suite addition (attached)", range: "$120K–$220K" },
                  { label: "Detached backyard cottage (600 sq ft)", range: "$150K–$240K" },
                  { label: "Above-garage dwelling unit", range: "$180K–$320K" },
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
                All quotes are fixed-price with permit and engineering fees included. Ask about financing options.
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
              From Zoning Check to Certificate of Occupancy
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
              Recent ADU & In-Law Suite Projects
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
              ADUs & In-Law Suites in St. Petersburg
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
                Ready to add an ADU or in-law suite?
              </h2>
              <p className="text-base text-white/75 mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Free zoning check and in-home consultation. Custom design. Fixed-price contracts. We handle all permits. No pressure.
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
                    We'll be in touch within one business day to schedule your free ADU consultation and zoning check.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                    Get Your Free ADU Consultation
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
                        ADU Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-gold transition-colors bg-white"
                        style={{ borderRadius: "2px", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <option>Detached Backyard Cottage</option>
                        <option>Garage Conversion</option>
                        <option>In-Law Suite Addition</option>
                        <option>Above-Garage Unit</option>
                        <option>First-Floor Conversion</option>
                        <option>Not Sure Yet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
                        Tell Us About Your Property & Goals
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                        style={{ borderRadius: "2px", fontFamily: "'DM Sans', sans-serif" }}
                        placeholder="Address, lot size, intended use (rental, family, office), any zoning questions..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: "oklch(0.77 0.065 82)", color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif", borderRadius: "2px" }}
                    >
                      Request My Free ADU Consultation →
                    </button>
                    <p className="text-xs text-center" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.6 0.01 250)" }}>
                      No spam. No obligation. Includes a free zoning compliance check.
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
