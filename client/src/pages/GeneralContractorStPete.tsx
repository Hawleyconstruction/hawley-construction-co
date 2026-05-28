/**
 * General Contractor St. Petersburg Landing Page
 * URL: /general-contractor-st-petersburg/
 * Target keyword: "general contractor St Petersburg FL"
 * Design: Modern Craftsman — mirrors other SEO landing pages
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { CheckCircle2, Phone, ChevronDown, Star, Shield, Clock, DollarSign, Award, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-kitchen-XnFRJvnCqJBpRkzJPxkqBh.webp";
const KITCHEN_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/kitchen-after-hsVXguHfNLPDyGVXHRHCyx.webp";
const BATHROOM_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/bathroom-after-mFZsTRAQ7UMXN2JYfxu5Qy.webp";
const CABINETRY_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/cabinetry-after-k8HhBRBtCkgj4z34VvF6gu.webp";
const REMODEL_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/remodel-after-HirftJZMhQXYSKovsunpEJ.webp";
const ADDITION_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/addition-after-ZJvFkDUDfMRPEBB8XzEDFv.webp";
const SUNROOM_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/sunroom-after-c5igWFwkXMiTD7G7dExTJ2.webp";

const galleryImages = [
  { src: KITCHEN_AFTER, alt: "Custom kitchen remodel by general contractor in St. Petersburg FL" },
  { src: BATHROOM_AFTER, alt: "Luxury bathroom renovation by Hawley Construction in St. Petersburg" },
  { src: CABINETRY_AFTER, alt: "Custom cabinetry installation in St. Petersburg FL home" },
  { src: REMODEL_AFTER, alt: "Full home remodel completed by general contractor in St. Petersburg" },
  { src: ADDITION_AFTER, alt: "Home addition built by Hawley Construction in St. Petersburg FL" },
  { src: SUNROOM_AFTER, alt: "Sunroom addition by licensed general contractor in St. Petersburg" },
];

const services = [
  {
    title: "Kitchen & Bathroom Remodeling",
    desc: "Full kitchen and bathroom renovations from demo to final finish. Custom cabinets, countertops, tile, fixtures, and plumbing — all under one roof.",
    icon: "🏠",
  },
  {
    title: "Home Additions & Room Expansions",
    desc: "Need more space? We design and build room additions, second stories, and garage conversions that blend seamlessly with your existing home.",
    icon: "📐",
  },
  {
    title: "Sunrooms & Florida Rooms",
    desc: "Enjoy year-round indoor-outdoor living with a custom sunroom or Florida room built for St. Petersburg's climate.",
    icon: "☀️",
  },
  {
    title: "Trex Composite Decks",
    desc: "Certified Trex installer. Low-maintenance composite decks that stand up to Florida's heat, humidity, and UV exposure.",
    icon: "🪵",
  },
  {
    title: "Full Home Remodels",
    desc: "Whole-home renovation from concept to completion. We coordinate all trades, pull all permits, and deliver a finished product you'll love.",
    icon: "🔨",
  },
  {
    title: "ADUs & In-Law Suites",
    desc: "Add a detached or attached accessory dwelling unit to your property. Rental income, multigenerational living, or a dedicated home office.",
    icon: "🏡",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Free In-Home Consultation",
    desc: "We visit your property, review your goals, and assess the scope of work — no charge, no obligation.",
  },
  {
    num: "02",
    title: "Design & Fixed-Price Quote",
    desc: "You receive a detailed written proposal with itemized costs. No vague estimates, no change-order surprises.",
  },
  {
    num: "03",
    title: "Permit Procurement & Scheduling",
    desc: "We handle all permits through Pinellas County and the City of St. Petersburg and coordinate all licensed sub-trades.",
  },
  {
    num: "04",
    title: "Build with One Project Manager",
    desc: "A single dedicated point of contact manages your project from day one to final walkthrough.",
  },
  {
    num: "05",
    title: "Final Walkthrough & 1-Year Warranty",
    desc: "We walk through every detail with you at completion. All work is backed by a one-year warranty.",
  },
];

const faqs = [
  {
    q: "Are you a licensed general contractor in Florida?",
    a: "Yes. Hawley Construction Co. holds a Florida Certified General Contractor license. We are fully licensed, bonded, and insured to perform residential construction and remodeling throughout Pinellas and Hillsborough counties.",
  },
  {
    q: "What types of projects do you take on in St. Petersburg?",
    a: "We handle kitchen and bathroom remodels, home additions, sunrooms, Trex composite decks, ADUs, full home renovations, custom cabinetry, window and door replacements, and outdoor living spaces.",
  },
  {
    q: "Do you pull permits for projects in St. Petersburg?",
    a: "Yes. We pull all required permits through the City of St. Petersburg or Pinellas County depending on the project location. Permitted work protects your investment and is required for most structural, plumbing, and electrical work.",
  },
  {
    q: "How long does a typical remodeling project take?",
    a: "Timelines vary by project type. A bathroom remodel typically takes 3–5 weeks. A kitchen remodel runs 6–10 weeks. A home addition or full remodel can take 3–6 months. We provide a detailed schedule before work begins.",
  },
  {
    q: "Do you use subcontractors?",
    a: "We use licensed subcontractors for plumbing, electrical, and HVAC work — as required by Florida law. All other work is performed by our own crew. We vet and manage all subs directly so you have one point of contact.",
  },
  {
    q: "What is your service area?",
    a: "We serve all of St. Petersburg, Tampa, Clearwater, Largo, Seminole, St. Pete Beach, Pinellas Park, and surrounding Pinellas and Hillsborough County communities.",
  },
  {
    q: "How do I get a quote?",
    a: "Call us at (704) 619-1480 or fill out the form on this page. We'll schedule a free in-home consultation, assess your project, and provide a written fixed-price quote — typically within 3–5 business days.",
  },
];

const serviceAreas = [
  { name: "St. Petersburg", href: "/areas/st-petersburg" },
  { name: "Tampa", href: "/areas/tampa" },
  { name: "Clearwater", href: "/areas/clearwater" },
  { name: "Largo", href: null },
  { name: "Seminole", href: null },
  { name: "Pinellas Park", href: null },
  { name: "St. Pete Beach", href: null },
  { name: "Dunedin", href: null },
  { name: "Safety Harbor", href: null },
];

export default function GeneralContractorStPete() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", projectType: "General Contracting", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "General Contractor St. Petersburg, FL | Hawley Construction Co.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Licensed general contractor in St. Petersburg, FL. Kitchens, bathrooms, additions, decks & full home remodels. Hawley Construction Co. — free estimates available.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawleyconstruction.co/general-contractor-st-petersburg/");

    // Service schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "General Contractor St. Petersburg FL",
      "description": "Full-service general contracting in St. Petersburg, FL. Kitchen and bathroom remodeling, home additions, sunrooms, Trex decks, ADUs, and full home renovations. Licensed, insured, fixed-price quotes.",
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
      "url": "https://hawleyconstruction.co/general-contractor-st-petersburg/",
      "serviceType": "General Contracting",
      "offers": {
        "@type": "Offer",
        "priceRange": "$10,000 - $500,000+",
        "priceCurrency": "USD"
      }
    };
    const existingSvc = document.getElementById("gc-service-schema");
    if (existingSvc) existingSvc.remove();
    const svcScript = document.createElement("script");
    svcScript.id = "gc-service-schema";
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
    const existingFaq = document.getElementById("gc-faq-schema");
    if (existingFaq) existingFaq.remove();
    const faqScript = document.createElement("script");
    faqScript.id = "gc-faq-schema";
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
      "priceRange": "$$",
      "image": HERO_IMG,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "316 11th Ave NE",
        "addressLocality": "St. Petersburg",
        "addressRegion": "FL",
        "postalCode": "33701",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 27.7731,
        "longitude": -82.6400
      },
      "areaServed": serviceAreas.map(a => ({ "@type": "City", "name": a.name })),
      "sameAs": ["https://www.facebook.com/hawleyconstruction"],
    };
    const existingLb = document.getElementById("gc-lb-schema");
    if (existingLb) existingLb.remove();
    const lbScript = document.createElement("script");
    lbScript.id = "gc-lb-schema";
    lbScript.type = "application/ld+json";
    lbScript.text = JSON.stringify(lbSchema);
    document.head.appendChild(lbScript);

    // BreadcrumbList schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hawleyconstruction.co/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://hawleyconstruction.co/services" },
        { "@type": "ListItem", "position": 3, "name": "General Contractor St. Petersburg", "item": "https://hawleyconstruction.co/general-contractor-st-petersburg/" },
      ],
    };
    const existingBc = document.getElementById("gc-breadcrumb-schema");
    if (existingBc) existingBc.remove();
    const bcScript = document.createElement("script");
    bcScript.id = "gc-breadcrumb-schema";
    bcScript.type = "application/ld+json";
    bcScript.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(bcScript);

    return () => {
      document.getElementById("gc-service-schema")?.remove();
      document.getElementById("gc-faq-schema")?.remove();
      document.getElementById("gc-lb-schema")?.remove();
      document.getElementById("gc-breadcrumb-schema")?.remove();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xredrbrg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", {
            send_to: "AW-18172396876/cPy9CKLmgrQcEMyKo91D",
            value: 1.0,
            currency: "USD",
          });
          (window as any).gtag("event", "generate_lead", {
            currency: "USD",
            value: 50.0,
          });
        }
      }
    } catch {}
  };

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/65 to-navy/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-white/70 text-sm mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">General Contractor St. Petersburg</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 text-gold text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Licensed General Contractor — St. Petersburg, FL
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            St. Petersburg's Trusted<br />
            <span className="text-gold">General Contractor</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Kitchens, bathrooms, additions, sunrooms, decks, and full home remodels. One licensed contractor. Fixed-price quotes. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#estimate" className="btn-gold text-lg px-8 py-4">
              Get a Free Estimate
            </a>
            <a href="tel:+17046191480" className="btn-outline-white text-lg px-8 py-4 flex items-center gap-2 justify-center">
              <Phone className="w-5 h-5" />
              (704) 619-1480
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy py-6">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Shield className="w-6 h-6 text-gold mx-auto mb-1" />, label: "Licensed & Insured", sub: "FL CGC License" },
            { icon: <Star className="w-6 h-6 text-gold mx-auto mb-1" />, label: "5-Star Rated", sub: "Google Reviews" },
            { icon: <Clock className="w-6 h-6 text-gold mx-auto mb-1" />, label: "On-Time Delivery", sub: "Guaranteed Schedule" },
            { icon: <Award className="w-6 h-6 text-gold mx-auto mb-1" />, label: "1-Year Warranty", sub: "On All Work" },
          ].map((item, i) => (
            <div key={i} className="text-white">
              {item.icon}
              <div className="font-semibold text-sm">{item.label}</div>
              <div className="text-white/60 text-xs">{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              What We Build in St. Petersburg
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a single bathroom remodel to a full home renovation, Hawley Construction handles every phase of the project under one license.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{svc.icon}</div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Recent Projects in St. Petersburg
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A sample of completed work across Pinellas County — from kitchen remodels in Old Northeast to additions in Snell Isle.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-xl group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={i < 3 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/our-work" className="btn-outline-navy">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              How We Work
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              A straightforward process designed to keep you informed and in control from the first call to the final walkthrough.
            </p>
          </div>
          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <span className="font-display text-gold font-bold text-lg">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-gold mb-1">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hawley */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
                Why St. Petersburg Homeowners Choose Hawley
              </h2>
              <div className="space-y-4">
                {[
                  "Florida Certified General Contractor — licensed to pull permits and manage all trades",
                  "Fixed-price quotes — the number we give you is the number you pay",
                  "One project manager on every job — no passing the buck between subs",
                  "All permits pulled and inspections scheduled by us",
                  "1-year warranty on all labor and workmanship",
                  "Locally owned and operated — we live and work in the Tampa Bay area",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={REMODEL_AFTER}
                alt="Completed home remodel by Hawley Construction in St. Petersburg FL"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -left-4 bg-gold text-navy font-display font-bold text-lg px-6 py-3 rounded-xl shadow-lg">
                Free Estimates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about hiring a general contractor in St. Petersburg, FL.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-navy pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
            General Contractor Service Area
          </h2>
          <p className="text-gray-600 mb-8">
            We serve all of Pinellas and Hillsborough County. If you're within 45 minutes of St. Petersburg, we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, i) =>
              area.href ? (
                <Link key={i} href={area.href} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-navy hover:border-gold hover:text-gold transition-colors text-sm font-medium">
                  {area.name}
                </Link>
              ) : (
                <span key={i} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-gray-600 text-sm">
                  {area.name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Estimate Form */}
      <section id="estimate" className="py-20 bg-navy text-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Request a Free Estimate
            </h2>
            <p className="text-white/70">
              Tell us about your project and we'll schedule a free in-home consultation in St. Petersburg or the surrounding area.
            </p>
          </div>
          {submitted ? (
            <div className="bg-gold/20 border border-gold/40 rounded-2xl p-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-gold mb-2">Request Received!</h3>
              <p className="text-white/80">We'll be in touch within 1 business day to schedule your free consultation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold"
              />
              <select
                value={formData.projectType}
                onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold"
              >
                <option value="General Contracting">General Contracting</option>
                <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                <option value="Home Addition">Home Addition</option>
                <option value="Trex Deck">Trex Deck</option>
                <option value="Sunroom / Florida Room">Sunroom / Florida Room</option>
                <option value="ADU / In-Law Suite">ADU / In-Law Suite</option>
                <option value="Full Home Remodel">Full Home Remodel</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold resize-none"
              />
              <button type="submit" className="w-full btn-gold text-lg py-4">
                Send My Estimate Request
              </button>
              <p className="text-white/50 text-xs text-center">
                We respond within 1 business day. No spam, no pressure.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
