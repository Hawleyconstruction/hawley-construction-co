/**
 * Kitchen Remodeling St. Petersburg Landing Page
 * URL: /kitchen-remodeling-st-petersburg/
 * Target keyword: "kitchen remodeler St Petersburg FL"
 * Design: Modern Craftsman — matches existing site style
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { CheckCircle2, Phone, ChevronDown, Star, Shield, Clock, DollarSign, Award, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-kitchen-mSpoc3xtKks8iMHpTCvAxs.webp";
const KITCHEN_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/kitchen-after-hsVXguHfNLPDyGVXHRHCyx.webp";
const KITCHEN_BEFORE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/kitchen-before-gnpMvGCrqpA7wDknZQaauG.webp";
const OUTDOOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-outdoor-living-new-hVfbb6yZQe8ungx9xcEYX8.webp";
const CABINETRY_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/cabinetry-after-k8HhBRBtCkgj4z34VvF6gu.webp";
const REMODEL_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/remodel-after-HirftJZMhQXYSKovsunpEJ.webp";
const PATIO_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/patio-after-h7cpoG8DbswTBZpi7g8JDx.webp";

const galleryImages = [
  { src: KITCHEN_AFTER, alt: "Open-concept kitchen renovation in Old Northeast St. Petersburg with quartz waterfall island" },
  { src: KITCHEN_BEFORE, alt: "Before kitchen remodel in Snell Isle St. Petersburg FL" },
  { src: CABINETRY_AFTER, alt: "Custom white shaker cabinetry kitchen remodel in Crescent Lake St. Petersburg" },
  { src: REMODEL_AFTER, alt: "Open-concept kitchen and living area conversion in Historic Kenwood St. Petersburg" },
  { src: OUTDOOR_IMG, alt: "Outdoor summer kitchen installation in Shore Acres St. Petersburg FL" },
  { src: PATIO_AFTER, alt: "Covered lanai kitchen with paver patio in St. Petersburg Florida" },
];

const services = [
  {
    title: "Full Kitchen Renovations",
    desc: "Cabinets, counters, flooring, lighting, appliances, plumbing rework — the whole space, designed and built as one cohesive project.",
    icon: "🍳",
  },
  {
    title: "Cabinet Replacement & Refacing",
    desc: "From custom inset cabinetry to budget-conscious refacing and door swaps, we match the right cabinet solution to your goals.",
    icon: "🗄️",
  },
  {
    title: "Countertop & Backsplash Upgrades",
    desc: "Quartz, quartzite, granite, butcher block, or marble. Schluter or hand-set tile backsplashes. Stand-alone projects or part of a larger remodel.",
    icon: "🪨",
  },
  {
    title: "Open-Concept Conversions",
    desc: "Removing load-bearing walls between your kitchen and living areas requires engineering, permits, and structural reframing. We handle all of it.",
    icon: "🏗️",
  },
  {
    title: "Outdoor & Summer Kitchens",
    desc: "Tampa Bay's climate makes outdoor kitchens a year-round investment. We build covered prep areas, lanai kitchens, and full outdoor entertaining spaces.",
    icon: "🌴",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Free In-Home Consultation",
    desc: "We come to you, measure the space, and listen to what you actually want from your kitchen.",
  },
  {
    num: "02",
    title: "Design & Fixed-Price Quote",
    desc: "You receive a clear written quote with itemized materials and labor — no surprises later.",
  },
  {
    num: "03",
    title: "Build with One Dedicated Project Manager",
    desc: "A single point of contact for your entire project. You'll always know who to call.",
  },
  {
    num: "04",
    title: "Final Walkthrough & 1-Year Warranty",
    desc: "We don't disappear after the last tile is set. Every project comes with a one-year warranty on our work.",
  },
];

const pricingTiers = [
  {
    label: "Refresh",
    range: "$30K–$50K",
    desc: "New counters, backsplash, paint, lighting, and select cabinet updates.",
    color: "oklch(0.95 0.02 82)",
  },
  {
    label: "Mid-Range Remodel",
    range: "$50K–$100K",
    desc: "Full cabinet replacement, new appliances, flooring, layout adjustments.",
    color: "oklch(0.77 0.065 82)",
    featured: true,
  },
  {
    label: "Premium Remodel",
    range: "$100K+",
    desc: "Custom cabinetry, structural changes, high-end appliances, designer finishes.",
    color: "oklch(0.25 0.02 82)",
  },
];

const faqs = [
  {
    q: "How long does a kitchen remodel take in St. Petersburg?",
    a: "Most full kitchen remodels run 6–10 weeks from demolition to final walkthrough. Cabinet lead times can push this 1–2 weeks if you choose custom.",
  },
  {
    q: "Do you handle permits and HOA approvals?",
    a: "Yes. We pull every required permit through Pinellas County or the City of St. Petersburg and coordinate any HOA approvals.",
  },
  {
    q: "Can my family live in the house during the remodel?",
    a: "For most kitchen projects, yes — we'll set up a temporary kitchenette in another part of the home. Whole-home renovations are case-by-case.",
  },
  {
    q: "Are your quotes fixed or estimates?",
    a: "Fixed. Once we sign a contract, the price doesn't change unless you request a scope change in writing.",
  },
  {
    q: "Do you offer financing for kitchen projects?",
    a: "We work with several home improvement lenders. Talk to us about options during your consultation.",
  },
  {
    q: "What brands and materials do you work with?",
    a: "Cabinetry from KraftMaid, Wellborn, and custom local shops. Quartz from Cambria, Caesarstone, and Silestone. Appliances from KitchenAid, Wolf, Sub-Zero, GE Profile, Bosch, and Thermador. Final selections are yours.",
  },
  {
    q: "What if I have a load-bearing wall I want removed?",
    a: "We can remove load-bearing walls — it requires structural engineering, a beam install, and permits, all of which we handle.",
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

export default function KitchenRemodelingStPete() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", projectType: "Kitchen Remodeling", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // SEO meta
    document.title = "Kitchen Remodeling St. Petersburg FL | Hawley Construction Co.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Trusted kitchen remodelers serving St. Petersburg & Tampa Bay. Fixed-price quotes, licensed & insured, free in-home estimate. Call (704) 619-1480.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawleyconstruction.co/kitchen-remodeling-st-petersburg/");

    // Service schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Kitchen Remodeling St. Petersburg FL",
      "description": "Full kitchen remodeling services in St. Petersburg, FL. Custom cabinetry, countertops, open-concept conversions, outdoor kitchens. Licensed, insured, fixed-price quotes.",
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
      "areaServed": serviceAreas.map(a => ({ "@type": "City", "name": a.name })),
      "url": "https://hawleyconstruction.co/kitchen-remodeling-st-petersburg/",
      "serviceType": "Kitchen Remodeling",
      "offers": {
        "@type": "Offer",
        "priceRange": "$30,000 - $150,000+",
        "priceCurrency": "USD"
      }
    };
    const existingSvc = document.getElementById("kitchen-service-schema");
    if (existingSvc) existingSvc.remove();
    const svcScript = document.createElement("script");
    svcScript.id = "kitchen-service-schema";
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
    const existingFaq = document.getElementById("kitchen-faq-schema");
    if (existingFaq) existingFaq.remove();
    const faqScript = document.createElement("script");
    faqScript.id = "kitchen-faq-schema";
    faqScript.type = "application/ld+json";
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // LocalBusiness schema
    const lbSchema = {
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      "@id": "https://hawleyconstruction.co",
      "name": "Hawley Construction Co.",
      "url": "https://hawleyconstruction.co",
      "telephone": "+17046191480",
      "priceRange": "$$$",
      "image": "https://hawleyconstruction.co/og-image.png",
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
      "sameAs": ["https://www.instagram.com/hawleyandsons", "https://hawleyconstruction.co"]
    };
    const existingLb = document.getElementById("kitchen-lb-schema");
    if (existingLb) existingLb.remove();
    const lbScript = document.createElement("script");
    lbScript.id = "kitchen-lb-schema";
    lbScript.type = "application/ld+json";
    lbScript.text = JSON.stringify(lbSchema);
    document.head.appendChild(lbScript);

    return () => {
      document.title = "Hawley Construction Co. | Tampa Bay Remodeling";
      const c = document.querySelector('link[rel="canonical"]');
      if (c) c.setAttribute("href", "https://hawleyconstruction.co");
      document.getElementById("kitchen-service-schema")?.remove();
      document.getElementById("kitchen-faq-schema")?.remove();
      document.getElementById("kitchen-lb-schema")?.remove();
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
          <img src={HERO_IMG} alt="Kitchen remodeling St. Petersburg FL by Hawley Construction" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(20,18,14,0.82) 0%, rgba(20,18,14,0.45) 60%, rgba(20,18,14,0.15) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              St. Petersburg, FL · Licensed & Insured
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kitchen Remodeling in St. Petersburg, FL
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              From design to final tile — your dream kitchen, delivered in 4–8 weeks. Licensed, insured, fixed-price quotes before we start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-sm tracking-wide transition-all duration-200"
                style={{ backgroundColor: "oklch(0.77 0.065 82)", color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif", borderRadius: "2px" }}
              >
                Get Your Free In-Home Estimate →
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
            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { icon: <Shield size={14} />, text: "Licensed & Insured" },
                { icon: <Clock size={14} />, text: "5+ Years Serving Tampa Bay" },
                { icon: <Star size={14} />, text: "5-Star Rated on Google" },
                { icon: <DollarSign size={14} />, text: "Fixed-Price Quotes" },
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

      {/* ── WHY HAWLEY ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
                Why St. Petersburg Homeowners Choose Hawley
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                Local Expertise. Personal Accountability.
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "oklch(0.35 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}>
                <p>
                  Hawley Construction Co. has been building and remodeling kitchens across St. Petersburg and the Tampa Bay area for 5+ years. Owner Landon Hawley personally walks every project from first consultation to final walkthrough, which is why we still get most of our work from referrals in neighborhoods like <strong>Old Northeast, Snell Isle, Crescent Lake, Historic Kenwood,</strong> and <strong>Shore Acres</strong>.
                </p>
                <p>
                  Every kitchen we build is permitted, fully licensed, and insured under Florida license <strong>CBC #1369038</strong>. We pull our own permits, coordinate every trade, and hand you a written fixed-price quote before we start — so there are no surprise change orders halfway through.
                </p>
                <p>
                  Many of our kitchen clients also take the opportunity to update their{" "}
                  <Link href="/bathroom-remodeling-st-petersburg/" style={{ color: "oklch(0.55 0.05 82)", textDecoration: "underline" }}>primary bathroom</Link>{" "}
                  or add an{" "}
                  <Link href="/sunroom-florida-room-contractor/" style={{ color: "oklch(0.55 0.05 82)", textDecoration: "underline" }}>outdoor kitchen or sunroom</Link>{" "}
                  — we can bundle both projects into a single contract and schedule.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "We pull all permits",
                  "Fixed-price contracts",
                  "One project manager",
                  "1-year workmanship warranty",
                  "Licensed & insured",
                  "Free in-home estimates",
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
                src={KITCHEN_AFTER}
                alt="Completed kitchen remodel by Hawley Construction in St. Petersburg FL"
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
                  Full kitchen renovation · 7 weeks
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
              Our Kitchen Remodeling Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
              Everything Your Kitchen Needs
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

      {/* ── PROCESS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              The Hawley Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
              How We Build Your Kitchen
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

      {/* ── GALLERY ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.12 0.008 250)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              Recent St. Petersburg Kitchen Projects
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

      {/* ── PRICING ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              Investment & Financing
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
              Most Full Kitchen Remodels Fall in Three Tiers
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.45 0.01 250)" }}>
              We provide fixed-price quotes — no estimates that creep up during the project. Ask about financing options during your consultation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.label}
                className={`p-8 ${tier.featured ? "shadow-xl scale-105" : "shadow-sm"}`}
                style={{
                  borderRadius: "2px",
                  backgroundColor: tier.featured ? "oklch(0.77 0.065 82)" : "oklch(0.97 0.005 82)",
                  border: tier.featured ? "none" : "1px solid oklch(0.92 0.02 82)",
                }}
              >
                <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "'DM Sans', sans-serif", color: tier.featured ? "oklch(0.18 0.008 250)" : "oklch(0.55 0.02 82)" }}>
                  {tier.label}
                </p>
                <p className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: tier.featured ? "oklch(0.18 0.008 250)" : "oklch(0.18 0.008 250)" }}>
                  {tier.range}
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: tier.featured ? "oklch(0.22 0.01 250)" : "oklch(0.45 0.01 250)" }}>
                  {tier.desc}
                </p>
                {tier.featured && (
                  <div className="mt-4 flex items-center gap-1">
                    <Award size={14} style={{ color: "oklch(0.18 0.008 250)" }} />
                    <span className="text-xs font-semibold" style={{ color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif" }}>Most Popular</span>
                  </div>
                )}
              </div>
            ))}
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
              Kitchen Remodeling in St. Petersburg
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white shadow-sm overflow-hidden"
                style={{ borderRadius: "2px" }}
              >
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
                    style={{
                      color: "oklch(0.77 0.065 82)",
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
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
                    style={{
                      backgroundColor: "oklch(0.95 0.02 82)",
                      color: "oklch(0.35 0.02 82)",
                      fontFamily: "'DM Sans', sans-serif",
                      borderRadius: "2px",
                      textDecoration: "none",
                    }}
                  >
                    {area.name}
                  </Link>
                ) : (
                  <span
                    key={area.name}
                    className="px-3 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: "oklch(0.95 0.02 82)",
                      color: "oklch(0.35 0.02 82)",
                      fontFamily: "'DM Sans', sans-serif",
                      borderRadius: "2px",
                    }}
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
            {/* Left — copy */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
                Ready to Start?
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to start your kitchen project?
              </h2>
              <p className="text-base text-white/75 mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Free in-home estimates. Fixed-price quotes. No pressure.
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
              {/* Embedded map */}
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
                    We'll be in touch within one business day to schedule your free in-home estimate.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                    Get Your Free In-Home Estimate
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
                        <option>Kitchen Remodeling</option>
                        <option>Cabinet Replacement</option>
                        <option>Countertop Upgrade</option>
                        <option>Open-Concept Conversion</option>
                        <option>Outdoor Kitchen</option>
                        <option>Full Home Remodel</option>
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
                        placeholder="Describe your kitchen project, timeline, and any specific goals..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: "oklch(0.77 0.065 82)", color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif", borderRadius: "2px" }}
                    >
                      Request My Free Estimate →
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
