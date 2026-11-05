/**
 * Bathroom Remodeling — /bathroom-remodeling-st-petersburg/
 * ChatGPT Ads + Google "Real bathroom" landing page. Same look as the kitchen and deck pages:
 * plain copy, options from a simple refresh to a full primary bath, free in-home consultation.
 * Section anchors: #options, #how-it-works, #our-work, #faq, #quote (and #contact for older links).
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { CheckCircle2, Phone, ChevronDown, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GOLD = "oklch(0.77 0.065 82)";
const INK = "oklch(0.18 0.008 250)";
const BODY = "oklch(0.35 0.01 250)";
const MUTED = "oklch(0.45 0.01 250)";
const CREAM = "oklch(0.97 0.005 82)";
const NIGHT = "oklch(0.12 0.008 250)";
const LINE = "oklch(0.88 0.02 82)";
const sans = { fontFamily: "'DM Sans', sans-serif" };
const serif = { fontFamily: "'Playfair Display', serif" };

const PAGE_URL = "https://hawleyremodeling.com/bathroom-remodeling-st-petersburg/";
const HERO_IMG = "/images/projects/bathroom/bathroom-01.webp";

const photos = [
  { src: "/images/projects/bathroom/bathroom-05.webp", alt: "Primary bathroom remodel with double vanity, gold fixtures and marble countertop" },
  { src: "/images/projects/bathroom/bathroom-02.webp", alt: "Bathroom remodel with dark tile, floating double vanity and quartz countertop" },
  { src: "/images/projects/bathroom/bathroom-04.webp", alt: "Walk-in shower with white subway tile, tiled niche, black fixtures and frameless glass" },
];

const options = [
  {
    title: "Bathroom refresh",
    desc: "Keep the layout. New vanity and countertop, mirror, lighting, toilet, faucets and hardware, plus new tile floors, new tile inside the shower and fresh paint.",
    fits: "Good when the bathroom works fine but looks dated.",
  },
  {
    title: "Tub-to-shower conversion",
    desc: "The old tub comes out and a tiled walk-in shower goes in, with frameless glass, a niche, an optional bench and a low or no curb.",
    fits: "Good when getting in and out of the tub is a hassle.",
  },
  {
    title: "Full bathroom remodel",
    desc: "Down to the studs: new layout, plumbing moved where needed, tile floors and walls, a custom shower, new vanity and lighting.",
    fits: "Good when the whole bathroom needs a new look.",
  },
  {
    title: "Primary bathroom",
    desc: "A bigger curbless shower with high-pressure shower jets, heated floors, a freestanding tub, double vanity, custom storage, high-end tile and finishes, and more.",
    fits: "Good when you want the bathroom to feel like a retreat.",
  },
];

const handles = [
  "Curbless and walk-in showers",
  "High-pressure shower jets and body sprays",
  "Heated tile floors",
  "Tub-to-shower conversions",
  "Vanities and countertops",
  "Tile floors and walls",
  "Frameless shower glass",
  "Shower niches and benches",
  "Toilets, sinks and faucets",
  "Lighting and exhaust fans",
  "Grab bars and other safety upgrades",
  "Permits and inspections",
];

const steps = [
  { num: "1", title: "Call or send the form", desc: "Tell us roughly what you want done. A few photos of your bathroom help." },
  { num: "2", title: "Free in-home consultation", desc: "We come to your house, measure, and talk through what you want and what you want to spend. No charge, no pressure." },
  { num: "3", title: "You get a written price", desc: "A fixed-price quote, with a couple of options at different price points if you'd like to compare." },
  { num: "4", title: "We do the work", desc: "Permits pulled, inspections scheduled, and a final walk-through with you when it's done." },
];

const faqs = [
  {
    q: "Can you just replace my tub with a walk-in shower?",
    a: "Yes. It's one of the most requested jobs we do. We take out the tub, fix any framing or plumbing, waterproof the walls and floor, then tile the shower and install the glass.",
  },
  {
    q: "How much does a bathroom remodel cost?",
    a: "It depends on how much you change. A new vanity, lighting and fixtures costs far less than a full gut with a custom shower. At the free consultation we'll price options that fit your budget, and you'll get a fixed price in writing before any work starts.",
  },
  {
    q: "Is the in-home consultation really free?",
    a: "Yes. We come out, measure and go over options at no charge, and you're under no obligation to hire us.",
  },
  {
    q: "How long does a bathroom remodel take?",
    a: "Smaller updates go quicker. Most full bathroom remodels take 3–5 weeks, a little longer if you're waiting on custom glass or special-order tile. You'll get a schedule with your quote.",
  },
  {
    q: "Can I use my other bathroom while you work?",
    a: "Yes. We work on one bathroom at a time and keep the work area closed off from the rest of the house.",
  },
  {
    q: "How do you keep a new shower from leaking?",
    a: "Every shower gets a waterproofing system under the tile (Schluter or equivalent), not just cement board and grout. It's the part you never see, and it's what decides whether a shower lasts.",
  },
  {
    q: "Can you make a bathroom safer without it looking like a hospital?",
    a: "Yes. Step-free showers, grab bars that look like towel bars, comfort-height toilets and better lighting can all be done in a way that looks like a normal, nice bathroom.",
  },
  {
    q: "Do you pull permits?",
    a: "Yes. If the job needs one (plumbing, electrical or structural work usually does), we pull the permit and schedule the inspections.",
  },
];

const serviceAreas = [
  { name: "St. Petersburg", href: "/areas/st-petersburg" },
  { name: "Tampa", href: "/areas/tampa" },
  { name: "Clearwater", href: "/areas/clearwater" },
  { name: "St. Pete Beach", href: null },
  { name: "Largo", href: null },
  { name: "Pinellas Park", href: null },
  { name: "Seminole", href: null },
  { name: "Dunedin", href: null },
  { name: "Brandon", href: null },
  { name: "Wesley Chapel", href: null },
];

const projectTypes = [
  "Not sure yet",
  "Bathroom refresh (vanity, fixtures, lighting)",
  "Tub-to-shower conversion",
  "Walk-in shower",
  "Full bathroom remodel",
  "Primary bathroom",
  "Safety / aging-in-place upgrades",
  "Other",
];

export default function BathroomRemodelingStPete() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", projectType: projectTypes[0], message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  // Jump to a section when arriving with a #hash (ad sitelinks use #quote / #contact)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const t = window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ block: "start" }), 150);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    document.title = "Bathroom Remodeling St. Petersburg FL | Free In-Home Consultation | Hawley Construction Co.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Bathroom remodeling in St. Pete, Tampa & Clearwater, from vanity and fixture updates to walk-in showers and full remodels. Free in-home consultation and a fixed-price quote. (704) 619-1480.");
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", PAGE_URL);

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Bathroom Remodeling in St. Petersburg & Tampa Bay",
      "description": "Bathroom refreshes, tub-to-shower conversions, walk-in showers and full bathroom remodels in St. Petersburg and Tampa Bay, FL. Free in-home consultation and fixed-price quotes.",
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
          "addressCountry": "US",
        },
      },
      "areaServed": serviceAreas.map(a => ({ "@type": "City", "name": a.name })),
      "url": PAGE_URL,
      "serviceType": "Bathroom remodeling",
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    };
    const add = (id: string, data: object) => {
      document.getElementById(id)?.remove();
      const s = document.createElement("script");
      s.id = id;
      s.type = "application/ld+json";
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
    };
    add("bath-svc-schema", serviceSchema);
    add("bath-svc-faq-schema", faqSchema);

    return () => {
      document.title = "Hawley Construction Co. | Tampa Bay Remodeling";
      const c = document.querySelector('link[rel="canonical"]');
      if (c) c.setAttribute("href", "https://hawleyremodeling.com");
      document.getElementById("bath-svc-schema")?.remove();
      document.getElementById("bath-svc-faq-schema")?.remove();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(false);
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mrerzpzj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, page: "/bathroom-remodeling-st-petersburg/" }),
      });
      if (res.ok) {
        setSubmitted(true);
        // Google Ads + GA4 + ChatGPT lead tracking (index.html routes these and screens spam)
        if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
          (window as any).gtag("event", "conversion", {
            send_to: "AW-18172396876/cPy9CKLmgrQcEMyKo91D",
            value: 50.0,
            currency: "USD",
          });
          (window as any).gtag("event", "generate_lead", { currency: "USD", value: 50 });
        }
      } else {
        setFormError(true);
      }
    } catch {
      setFormError(true);
    } finally {
      setLoading(false);
    }
  };

  const set = (k: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFormData(prev => ({ ...prev, [k]: e.target.value }));

  const inputClass = "w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-gold transition-colors bg-white";
  const labelClass = "block text-xs font-semibold uppercase tracking-wide mb-1";
  const fieldStyle = { borderRadius: "2px", ...sans };

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Bathroom remodel with blue marble walk-in shower and light blue double vanity" className="w-full h-full object-cover" width="1600" height="1066" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(20,18,14,0.88) 0%, rgba(20,18,14,0.62) 55%, rgba(20,18,14,0.2) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
          <div className="max-w-2xl">
            <p className="text-sm mb-4 text-white/80" style={sans}>
              Hawley Construction · St. Petersburg &amp; Tampa Bay
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" style={serif}>
              Bathroom remodeling in Tampa Bay
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed" style={sans}>
              A new vanity and tile, a walk-in shower where the old tub was, or a full primary bath. We come to your house for a free consultation, go over your dream bathroom, then give you a fixed price in writing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#quote"
                className="inline-flex items-center justify-center px-7 py-4 font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: GOLD, color: INK, ...sans, borderRadius: "2px" }}
              >
                Book a free in-home consultation
              </a>
              <a
                href="tel:7046191480"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-sm tracking-wide border border-white/40 text-white hover:bg-white/10 transition-all duration-200"
                style={{ ...sans, borderRadius: "2px" }}
              >
                <Phone size={16} />
                (704) 619-1480
              </a>
            </div>
            <p className="text-sm text-white/75" style={sans}>
              Free in-home consultation · Fixed-price quotes · Permits handled
            </p>
          </div>
        </div>
      </section>

      {/* ── OPTIONS ── */}
      <section id="options" className="py-20 scroll-mt-20" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ ...serif, color: INK }}>
            Big job or small job? We do it all.
          </h2>
          <p className="text-base mb-12 max-w-2xl leading-relaxed" style={{ ...sans, color: BODY }}>
            Not every bathroom needs to be gutted. Here's how most jobs break down.
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {options.map((o) => (
              <div key={o.title} className="pt-5" style={{ borderTop: `2px solid ${GOLD}` }}>
                <h3 className="text-xl font-bold mb-3" style={{ ...serif, color: INK }}>{o.title}</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ ...sans, color: BODY }}>{o.desc}</p>
                <p className="text-sm leading-relaxed" style={{ ...sans, color: MUTED }}>{o.fits}</p>
              </div>
            ))}
          </div>
          <p className="text-base mt-12 leading-relaxed" style={{ ...sans, color: BODY }}>
            Not sure which one you need? That's what the free consultation is for.{" "}
            <a href="#quote" className="font-semibold underline" style={{ color: INK }}>Book a time</a> and we'll price a couple of options so you can choose.
          </p>
        </div>
      </section>

      {/* ── WHAT WE HANDLE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10" style={{ ...serif, color: INK }}>
            What we handle
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
            {handles.map((h) => (
              <li key={h} className="flex items-start gap-2 pb-4" style={{ borderBottom: `1px solid ${LINE}` }}>
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                <span className="text-sm" style={{ ...sans, color: BODY }}>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 scroll-mt-20" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10" style={{ ...serif, color: INK }}>
            How it works
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <li key={s.num} className="flex flex-col gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-sm font-bold bg-white" style={{ ...sans, color: INK, borderRadius: "999px" }}>
                  {s.num}
                </span>
                <h3 className="text-base font-bold" style={{ ...sans, color: INK }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ ...sans, color: MUTED }}>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── OUR WORK ── */}
      <section id="our-work" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10" style={{ ...serif, color: INK }}>
            Our work
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {photos.map((p) => (
              <div key={p.src} className="overflow-hidden" style={{ borderRadius: "2px", aspectRatio: "4/3" }}>
                <img src={p.src} alt={p.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 scroll-mt-20" style={{ backgroundColor: CREAM }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10" style={{ ...serif, color: INK }}>
            Common questions
          </h2>
          <div className="divide-y" style={{ borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-base font-semibold pr-4" style={{ ...sans, color: INK }}>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{ color: GOLD, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-sm leading-relaxed" style={{ ...sans, color: MUTED }}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <MapPin size={18} style={{ color: GOLD }} />
            <span className="text-sm font-semibold" style={{ ...sans, color: INK }}>We remodel bathrooms in</span>
          </div>
          <p className="text-sm" style={{ ...sans, color: BODY }}>
            {serviceAreas.map((area, i) => (
              <span key={area.name}>
                {area.href ? (
                  <Link href={area.href} style={{ color: BODY, textDecoration: "underline" }}>{area.name}</Link>
                ) : area.name}
                {i < serviceAreas.length - 1 ? " · " : ""}
              </span>
            ))}
            {" "}and nearby.
          </p>
        </div>
      </section>

      {/* ── CONSULTATION FORM ── */}
      <section id="quote" className="py-24 scroll-mt-20 relative" style={{ backgroundColor: NIGHT }}>
        <span id="contact" className="absolute top-0 left-0 scroll-mt-20" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white" style={serif}>
                Book your free in-home consultation
              </h2>
              <p className="text-base text-white/75 mb-8 leading-relaxed" style={sans}>
                Send the form or give us a call. We'll set up a time to come look at your bathroom, take measurements and go over options that fit your budget. No charge, no obligation.
              </p>
              <a href="tel:7046191480" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity mb-2" style={sans}>
                <Phone size={18} style={{ color: GOLD }} />
                <span className="text-lg font-semibold">(704) 619-1480</span>
              </a>
              <p className="text-sm text-white/60" style={sans}>
                Mon–Fri 8am–6pm · 316 11th Ave NE, St. Petersburg, FL 33701
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8" style={{ borderRadius: "2px" }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 size={48} className="mb-4" style={{ color: GOLD }} />
                  <h3 className="text-xl font-bold mb-2" style={{ ...serif, color: INK }}>Thank you!</h3>
                  <p className="text-sm" style={{ ...sans, color: MUTED }}>
                    We'll be in touch within one business day to set up your free in-home consultation.
                  </p>
                </div>
              ) : formError ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <h3 className="text-xl font-bold mb-2" style={{ ...serif, color: INK }}>Something went wrong</h3>
                  <p className="text-sm mb-4" style={{ ...sans, color: MUTED }}>
                    We couldn't send your request. Please call us at (704) 619-1480 or try again.
                  </p>
                  <button type="button" onClick={() => setFormError(false)} className="text-sm underline" style={{ color: MUTED }}>
                    Try again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="q-name" className={labelClass} style={{ ...sans, color: MUTED }}>Name *</label>
                    <input id="q-name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={set("name")} className={inputClass} style={fieldStyle} placeholder="Your full name" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="q-phone" className={labelClass} style={{ ...sans, color: MUTED }}>Phone *</label>
                      <input id="q-phone" name="phone" type="tel" required autoComplete="tel" value={formData.phone} onChange={set("phone")} className={inputClass} style={fieldStyle} placeholder="(xxx) xxx-xxxx" />
                    </div>
                    <div>
                      <label htmlFor="q-email" className={labelClass} style={{ ...sans, color: MUTED }}>Email *</label>
                      <input id="q-email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={set("email")} className={inputClass} style={fieldStyle} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="q-type" className={labelClass} style={{ ...sans, color: MUTED }}>What do you want done?</label>
                    <select id="q-type" name="projectType" value={formData.projectType} onChange={set("projectType")} className={inputClass} style={fieldStyle}>
                      {projectTypes.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="q-message" className={labelClass} style={{ ...sans, color: MUTED }}>Anything else?</label>
                    <textarea id="q-message" name="message" rows={4} value={formData.message} onChange={set("message")} className={`${inputClass} resize-none`} style={fieldStyle} placeholder="Your city, what you'd like changed, and when you're hoping to start." />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: GOLD, color: INK, ...sans, borderRadius: "2px" }}
                  >
                    {loading ? "Sending..." : "Book my free consultation"}
                  </button>
                  <p className="text-xs text-center" style={{ ...sans, color: "oklch(0.6 0.01 250)" }}>
                    We'll reply within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
