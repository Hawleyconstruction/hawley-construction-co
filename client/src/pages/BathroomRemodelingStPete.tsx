/**
 * Bathroom Remodeling St. Petersburg Landing Page
 * URL: /bathroom-remodeling-st-petersburg/
 * Target keyword: "bathroom remodeler St Petersburg FL"
 * Design: Modern Craftsman — mirrors kitchen landing page
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { CheckCircle2, Phone, ChevronDown, Star, Shield, Clock, DollarSign, Award, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "/images/projects/bathroom/bathroom-01.jpg"; // blue marble shower + light-blue double vanity
const BATHROOM_AFTER = "/images/projects/bathroom/bathroom-03.jpg"; // white marble shower + freestanding tub
const BATHROOM_BEFORE = "/images/projects/bathroom/bathroom-01.jpg"; // reuse hero as before-state placeholder
const KITCHEN_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/kitchen-after-hsVXguHfNLPDyGVXHRHCyx.webp";
const CABINETRY_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/cabinetry-after-k8HhBRBtCkgj4z34VvF6gu.webp";
const REMODEL_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/remodel-after-HirftJZMhQXYSKovsunpEJ.webp";
const WINDOWS_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/windows-after-HxmvFRS7Fp89og6X5bEH94.webp";
const ADDITION_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/addition-after-ZJvFkDUDfMRPEBB8XzEDFv.webp";
const SUNROOM_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/sunroom-after-c5igWFwkXMiTD7G7dExTJ2.webp";

const galleryImages = [
  { src: "/images/projects/bathroom/bathroom-05.jpg", alt: "Airy primary bathroom remodel in St. Petersburg FL with double vanity, gold fixtures, and marble countertop by Hawley Construction", width: 1600, height: 1064 },
  { src: "/images/projects/bathroom/bathroom-02.jpg", alt: "Luxury bathroom remodel in Tampa Bay FL with dark tile, floating double vanity, Calacatta quartz countertop, and gold pendant lights by Hawley Construction", width: 1600, height: 1067 },
  { src: "/images/projects/bathroom/bathroom-04.jpg", alt: "Modern walk-in shower remodel in St. Petersburg FL with white subway tile, patterned niche, matte black fixtures, and frameless glass door by Hawley Construction", width: 1600, height: 2000 },
  { src: "/images/projects/bathroom/bathroom-06.jpg", alt: "Bathroom remodel in Tampa Bay FL with custom wood linen cabinet, hex tile floor, and glass walk-in shower with blue accent tile by Hawley Construction", width: 1600, height: 2000 },
];

const services = [
  {
    title: "Full Bathroom Renovations",
    desc: "Demo to finish: layout, plumbing, tile, vanity, lighting, paint. One contractor, one fixed price, one project manager.",
    icon: "🚿",
  },
  {
    title: "Walk-In & Curbless Showers",
    desc: "Custom tile, frameless glass, niches, benches, linear drains. Built waterproof to last using Schluter or equivalent systems.",
    icon: "🪟",
  },
  {
    title: "Aging-in-Place Upgrades",
    desc: "Grab bars, zero-threshold showers, raised vanities, lever handles — done with style, not the institutional look.",
    icon: "♿",
  },
  {
    title: "Tub-to-Shower Conversions",
    desc: "One of the most requested upgrades in St. Petersburg. We remove the old tub, reframe, and install a custom tile shower.",
    icon: "🔄",
  },
  {
    title: "Primary Suite Remodels",
    desc: "Combining bedroom, bath, and closet into one cohesive space. We handle structural work, plumbing, electrical, and all finishes.",
    icon: "🛁",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Free In-Home Consultation",
    desc: "We come to you, measure the space, and listen to what you actually want from your bathroom.",
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
    label: "Cosmetic Refresh",
    range: "$8K–$15K",
    desc: "Paint, vanity, light fixtures, mirror, and hardware updates.",
    featured: false,
  },
  {
    label: "Mid-Range Remodel",
    range: "$20K–$40K",
    desc: "New tile, custom shower, vanity, layout tweaks, and upgraded fixtures.",
    featured: true,
  },
  {
    label: "Luxury Remodel",
    range: "$40K–$80K+",
    desc: "Full gut, custom tile, freestanding tub, premium fixtures, expanded footprint.",
    featured: false,
  },
];

const faqs = [
  {
    q: "How long does a bathroom remodel take in St. Petersburg?",
    a: "Most bathroom remodels run 3–5 weeks. Custom tile work and shower glass can extend lead times by 1–2 weeks depending on availability.",
  },
  {
    q: "Can I still use my other bathroom during construction?",
    a: "Yes. We work in one bathroom at a time and seal the work area off from the rest of your home so you're not disrupted.",
  },
  {
    q: "What about waterproofing — how do I know it will last?",
    a: "Every shower and wet area we install uses Schluter or equivalent waterproofing systems backed by manufacturer warranties. We don't cut corners on waterproofing.",
  },
  {
    q: "Can you do an aging-in-place bathroom that doesn't look like a hospital?",
    a: "Absolutely. Most ADA-friendly features can be designed beautifully — curbless showers and elegant grab bars look better than ever in modern bathrooms.",
  },
  {
    q: "Do you handle plumbing and electrical permits?",
    a: "Yes. We pull all required permits through Pinellas County or the City of St. Petersburg and coordinate with licensed sub-trades for plumbing and electrical work.",
  },
  {
    q: "What fixture and tile brands do you install?",
    a: "Fixtures from Kohler, Toto, Delta, Moen, and Brizo. Tile from Marazzi, Daltile, and Walker Zanger. Final selections are always yours — we guide you through the options.",
  },
  {
    q: "How much does a bathroom remodel cost in St. Petersburg?",
    a: "Costs range from $8,000 for a cosmetic refresh to $80,000+ for a full luxury primary suite renovation. The average mid-range bathroom remodel in St. Petersburg runs $20,000–$40,000. We provide fixed-price quotes after an in-home consultation.",
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

export default function BathroomRemodelingStPete() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", projectType: "Bathroom Remodeling", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Bathroom Remodeling St. Petersburg FL | Hawley Construction Co.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Custom bathroom remodels in St. Petersburg & Tampa Bay. Walk-in showers, soaking tubs, aging-in-place upgrades. Free estimate: (704) 619-1480.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawleyremodeling.com/bathroom-remodeling-st-petersburg/");

    // Service schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Bathroom Remodeling St. Petersburg FL",
      "description": "Full bathroom remodeling services in St. Petersburg, FL. Walk-in showers, tub-to-shower conversions, aging-in-place upgrades, primary suite remodels. Licensed, insured, fixed-price quotes.",
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
      "url": "https://hawleyremodeling.com/bathroom-remodeling-st-petersburg/",
      "serviceType": "Bathroom Remodeling",
      "offers": {
        "@type": "Offer",
        "priceRange": "$8,000 - $80,000+",
        "priceCurrency": "USD"
      }
    };
    const existingSvc = document.getElementById("bathroom-service-schema");
    if (existingSvc) existingSvc.remove();
    const svcScript = document.createElement("script");
    svcScript.id = "bathroom-service-schema";
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
    const existingFaq = document.getElementById("bathroom-faq-schema");
    if (existingFaq) existingFaq.remove();
    const faqScript = document.createElement("script");
    faqScript.id = "bathroom-faq-schema";
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
    const existingLb = document.getElementById("bathroom-lb-schema");
    if (existingLb) existingLb.remove();
    const lbScript = document.createElement("script");
    lbScript.id = "bathroom-lb-schema";
    lbScript.type = "application/ld+json";
    lbScript.text = JSON.stringify(lbSchema);
    document.head.appendChild(lbScript);

    return () => {
      document.title = "Hawley Construction Co. | Tampa Bay Remodeling";
      const c = document.querySelector('link[rel="canonical"]');
      if (c) c.setAttribute("href", "https://hawleyremodeling.com");
      document.getElementById("bathroom-service-schema")?.remove();
      document.getElementById("bathroom-faq-schema")?.remove();
      document.getElementById("bathroom-lb-schema")?.remove();
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
            src={HERO_IMG}
            alt="Luxury bathroom remodel in St. Petersburg, FL with blue marble walk-in shower and custom double vanity by Hawley Construction"
            className="w-full h-full object-cover"
            width="1600"
            height="1066"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(20,18,14,0.82) 0%, rgba(20,18,14,0.45) 60%, rgba(20,18,14,0.15) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
              St. Petersburg, FL · Licensed & Insured
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Bathroom Remodeling in St. Petersburg, FL
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Walk-in showers, freestanding tubs, custom tile work. Fixed-price quotes, licensed contractors, 1-year workmanship warranty.
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
                Why St. Petersburg Homeowners Trust Hawley With Their Bathrooms
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
                Bathrooms Are Deceptively Complex.
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "oklch(0.35 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}>
                <p>
                  Behind every beautiful walk-in shower is plumbing rework, waterproofing, structural framing, and tile installation that has to last decades. We've been remodeling bathrooms across Tampa Bay for 5+ years — from compact powder rooms to luxury primary suites — under Florida license <strong>CBC #1369038</strong>.
                </p>
                <p>
                  Owner Landon Hawley personally walks every bathroom project from first consultation to final walkthrough. We pull our own permits, coordinate every trade, and hand you a written fixed-price quote before we start — so there are no surprise change orders halfway through your renovation.
                </p>
                <p>
                  Many clients also remodel their{" "}
                  <Link href="/kitchen-remodeling-st-petersburg/" style={{ color: "oklch(0.55 0.05 82)", textDecoration: "underline" }}>kitchen</Link>{" "}
                  at the same time, or add a{" "}
                  <Link href="/adu-in-law-suite-builder/" style={{ color: "oklch(0.55 0.05 82)", textDecoration: "underline" }}>primary suite addition</Link>{" "}
                  — we can coordinate both projects under one contract.
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
                src={BATHROOM_AFTER}
                alt="Completed bathroom remodel in St. Petersburg FL with white marble shower, freestanding soaking tub, and dark wood double vanity by Hawley Construction"
                className="w-full object-cover shadow-xl"
                style={{ borderRadius: "2px", aspectRatio: "4/3" }}
                width="1600"
                height="1066"
                loading="lazy"
              />
              <div
                className="absolute -bottom-5 -left-5 px-6 py-4 shadow-lg"
                style={{ backgroundColor: "oklch(0.77 0.065 82)", borderRadius: "2px" }}
              >
                <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif" }}>
                  Snell Isle, St. Petersburg
                </p>
                <p className="text-sm font-medium" style={{ color: "oklch(0.18 0.008 250)", fontFamily: "'DM Sans', sans-serif" }}>
                  Primary bathroom renovation · 4 weeks
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
              Our Bathroom Remodeling Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
              Everything Your Bathroom Needs
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
              How We Build Your Bathroom
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
              Recent St. Petersburg Bathroom Projects
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
                  width={img.width}
                  height={img.height}
                  loading="lazy"
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
              Bathroom Remodel Investment Tiers
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
                <p className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
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
              Bathroom Remodeling in St. Petersburg
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
            {/* Left — copy */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}>
                Ready to Start?
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to start your bathroom project?
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
                        <option>Bathroom Remodeling</option>
                        <option>Walk-In Shower</option>
                        <option>Tub-to-Shower Conversion</option>
                        <option>Aging-in-Place Upgrade</option>
                        <option>Primary Suite Remodel</option>
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
                        placeholder="Describe your bathroom project, timeline, and any specific goals..."
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
