/**
 * Deck Builder Tampa Bay — wood & composite decks
 * URL: /trex-deck-builder-tampa-bay/  (Google Ads "Real deck campaign" landing page)
 * Design: Modern Craftsman — same palette/type as the other landing pages, plainer copy.
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
const sans = { fontFamily: "'DM Sans', sans-serif" };
const serif = { fontFamily: "'Playfair Display', serif" };

const HERO_IMG = "/images/projects/decks/trex-deck-01.webp";

const photos = [
  { src: "/images/projects/decks/trex-deck-02.webp", alt: "Grey composite deck with white railing and dark balusters" },
  { src: "/images/projects/decks/trex-deck-03.webp", alt: "Two-tone composite deck around a pool on the water" },
  { src: "/images/projects/outdoor-living/covered-porch-01.webp", alt: "Covered porch with cedar posts, wood skirting and cable railing" },
];

const services = [
  { title: "New decks", desc: "Ground-level or raised, attached to the house or freestanding." },
  { title: "Deck replacement", desc: "Old boards off, framing checked and fixed, new wood or composite on top." },
  { title: "Repairs & re-framing", desc: "Rotted joists, soft spots, loose railings and failing stairs." },
  { title: "Stairs & railings", desc: "Wood, composite, aluminum or cable rail." },
  { title: "Waterproof decks", desc: "Watertight decks and balconies that keep the space underneath dry." },
  { title: "Pool decks", desc: "Decking around pools and inside screened enclosures." },
  { title: "Pergolas & covers", desc: "Shade over part or all of the deck." },
];

const steps = [
  { num: "1", title: "Call or send the form", desc: "Tell us what you have in mind. A rough size and a couple of photos help." },
  { num: "2", title: "We come take a look", desc: "We measure, check what's under any existing deck, and talk through wood vs. composite. Free." },
  { num: "3", title: "You get a fixed price", desc: "A written quote covering materials, labor and permits. The price doesn't move once you sign." },
  { num: "4", title: "We build it", desc: "Permits pulled, inspections scheduled, and a final walk-through with you when it's done." },
];

const faqs = [
  {
    q: "Should I go with wood or composite?",
    a: "If keeping the cost down matters most, pressure-treated wood is the way to go — just plan on sealing it. If you don't want to spend weekends on upkeep, composite costs more up front but needs almost nothing after. We build both and will give you prices for each so you can compare.",
  },
  {
    q: "How long does a wood deck last in Florida?",
    a: "A pressure-treated deck that's cleaned and sealed regularly commonly lasts 10–15 years here. Without that upkeep, the sun and rain shorten its life quite a bit.",
  },
  {
    q: "How long does a composite deck last?",
    a: "The boards won't rot or splinter, and many composite lines carry 25- to 50-year limited warranties. What usually decides how long any deck lasts is the framing underneath, so that's where we're careful.",
  },
  {
    q: "Can you just replace the boards on my existing deck?",
    a: "Often, yes — if the framing is sound. We check the joists before we quote. If they're rotted or spaced too wide for the new boards, we'll tell you up front what needs replacing.",
  },
  {
    q: "Do you build waterproof decks?",
    a: "Yes. We build waterproof decks and balconies so the area underneath stays dry. Tell us what's below the deck and we'll go over the options when we come out.",
  },
  {
    q: "Do you pull permits?",
    a: "Yes. We pull the permit and schedule the inspections as part of the job.",
  },
  {
    q: "What does a deck cost?",
    a: "It depends on size, height, railing and materials. We come out, measure and give you a fixed price in writing before any work starts.",
  },
  {
    q: "What composite brands do you install?",
    a: "We install the major composite and PVC brands, including Trex, and follow each manufacturer's installation rules so your warranty stays valid.",
  },
];

const serviceAreas = [
  { name: "St. Petersburg", href: "/areas/st-petersburg" },
  { name: "Tampa", href: "/areas/tampa" },
  { name: "Clearwater", href: "/areas/clearwater" },
  { name: "Largo", href: null },
  { name: "Pinellas Park", href: null },
  { name: "Seminole", href: null },
  { name: "St. Pete Beach", href: null },
  { name: "Brandon", href: null },
  { name: "Wesley Chapel", href: null },
];

export default function TrexDeckBuilderTampaBay() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", projectType: "Not sure yet — wood or composite", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    // Jump to a section when arriving with a #hash (used by ad sitelinks)
    const hash = window.location.hash.slice(1);
    if (hash) {
      const t = window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ block: "start" }), 150);
      return () => window.clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    document.title = "Deck Builder Tampa Bay | Wood & Composite Decks | Hawley Construction Co.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Wood, composite and waterproof decks in St. Petersburg, Tampa & Clearwater. New decks, deck replacement and repairs. Permits handled, fixed-price quotes. (704) 619-1480.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawleyremodeling.com/trex-deck-builder-tampa-bay/");

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Deck Builder Tampa Bay — Wood & Composite Decks",
      "description": "Wood, composite and waterproof deck construction, deck replacement and deck repair in Tampa Bay, FL. Permits handled, fixed-price quotes.",
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
      "url": "https://hawleyremodeling.com/trex-deck-builder-tampa-bay/",
      "serviceType": "Deck construction"
    };
    document.getElementById("trex-service-schema")?.remove();
    const svcScript = document.createElement("script");
    svcScript.id = "trex-service-schema";
    svcScript.type = "application/ld+json";
    svcScript.text = JSON.stringify(serviceSchema);
    document.head.appendChild(svcScript);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    };
    document.getElementById("trex-faq-schema")?.remove();
    const faqScript = document.createElement("script");
    faqScript.id = "trex-faq-schema";
    faqScript.type = "application/ld+json";
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    const lbSchema = {
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      "@id": "https://hawleyremodeling.com",
      "name": "Hawley Construction Co.",
      "url": "https://hawleyremodeling.com",
      "telephone": "+17046191480",
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
    document.getElementById("trex-lb-schema")?.remove();
    const lbScript = document.createElement("script");
    lbScript.id = "trex-lb-schema";
    lbScript.type = "application/ld+json";
    lbScript.text = JSON.stringify(lbSchema);
    document.head.appendChild(lbScript);

    return () => {
      document.title = "Hawley Construction Co. | Tampa Bay Remodeling";
      const c = document.querySelector('link[rel="canonical"]');
      if (c) c.setAttribute("href", "https://hawleyremodeling.com");
      document.getElementById("trex-service-schema")?.remove();
      document.getElementById("trex-faq-schema")?.remove();
      document.getElementById("trex-lb-schema")?.remove();
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

  const inputClass = "w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-gold transition-colors";
  const labelClass = "block text-xs font-semibold uppercase tracking-wide mb-1";

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Raised deck with black aluminum railing behind a brick home" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(20,18,14,0.88) 0%, rgba(20,18,14,0.6) 55%, rgba(20,18,14,0.2) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
          <div className="max-w-2xl">
            <p className="text-sm mb-4 text-white/80" style={sans}>
              Hawley Construction · St. Petersburg &amp; Tampa Bay
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" style={serif}>
              Wood and composite decks, built right.
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed" style={sans}>
              We build new decks, waterproof decks, replace worn-out ones, and fix the framing underneath — in pressure-treated wood or composite like Trex. Permits handled, and a fixed price before we start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-4 font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: GOLD, color: INK, ...sans, borderRadius: "2px" }}
              >
                Get a free estimate
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
              Licensed &amp; insured · Permits pulled · Free on-site estimates
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section id="what-we-build" className="py-20 scroll-mt-20" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12" style={{ ...serif, color: INK }}>
            What we build
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {services.map((svc) => (
              <div key={svc.title} className="pt-5" style={{ borderTop: "1px solid oklch(0.88 0.02 82)" }}>
                <h3 className="text-lg font-bold mb-2" style={{ ...serif, color: INK }}>{svc.title}</h3>
                <p className="text-sm leading-relaxed" style={{ ...sans, color: MUTED }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10" style={{ ...serif, color: INK }}>
            How it works
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <li key={s.num} className="flex flex-col gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-sm font-bold" style={{ ...sans, backgroundColor: CREAM, color: INK, borderRadius: "999px" }}>
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
      <section id="our-work" className="py-20 scroll-mt-20" style={{ backgroundColor: CREAM }}>
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
      <section id="faq" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10" style={{ ...serif, color: INK }}>
            Common questions
          </h2>
          <div className="divide-y" style={{ borderTop: "1px solid oklch(0.9 0.01 82)", borderBottom: "1px solid oklch(0.9 0.01 82)" }}>
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
      <section className="py-12" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <MapPin size={18} style={{ color: GOLD }} />
            <span className="text-sm font-semibold" style={{ ...sans, color: INK }}>We build decks in</span>
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

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24" style={{ backgroundColor: NIGHT }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white" style={serif}>
                Tell us about your deck
              </h2>
              <p className="text-base text-white/75 mb-8 leading-relaxed" style={sans}>
                Send the form or give us a call. We'll set up a time to come out, take measurements and give you a price — no charge, no pressure.
              </p>
              <a href="tel:7046191480" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity mb-2" style={sans}>
                <Phone size={18} style={{ color: GOLD }} />
                <span className="text-lg font-semibold">(704) 619-1480</span>
              </a>
              <p className="text-sm text-white/60 mb-8" style={sans}>
                Mon–Fri 8am–6pm · 316 11th Ave NE, St. Petersburg, FL 33701
              </p>
              <div className="overflow-hidden" style={{ borderRadius: "2px", height: "220px" }}>
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

            <div className="bg-white p-8" style={{ borderRadius: "2px" }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <CheckCircle2 size={48} className="mb-4" style={{ color: GOLD }} />
                  <h3 className="text-xl font-bold mb-2" style={{ ...serif, color: INK }}>Thank you!</h3>
                  <p className="text-sm" style={{ ...sans, color: MUTED }}>
                    We'll be in touch within one business day to set up your free estimate.
                  </p>
                </div>
              ) : formError ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <h3 className="text-xl font-bold mb-2" style={{ ...serif, color: INK }}>Something went wrong</h3>
                  <p className="text-sm mb-4" style={{ ...sans, color: MUTED }}>
                    We couldn't send your request. Please call us at (704) 619-1480 or try again.
                  </p>
                  <button onClick={() => setFormError(false)} className="text-sm underline" style={{ color: MUTED }}>
                    Try again
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-6" style={{ ...serif, color: INK }}>Get a free deck estimate</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className={labelClass} style={{ ...sans, color: MUTED }}>Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                        style={{ borderRadius: "2px", ...sans }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass} style={{ ...sans, color: MUTED }}>Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass}
                          style={{ borderRadius: "2px", ...sans }}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className={labelClass} style={{ ...sans, color: MUTED }}>Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className={inputClass}
                          style={{ borderRadius: "2px", ...sans }}
                          placeholder="(xxx) xxx-xxxx"
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass} style={{ ...sans, color: MUTED }}>Project</label>
                      <select
                        value={formData.projectType}
                        onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                        className={`${inputClass} bg-white`}
                        style={{ borderRadius: "2px", ...sans }}
                      >
                        <option>Not sure yet — wood or composite</option>
                        <option>New wood deck</option>
                        <option>New composite deck</option>
                        <option>Deck replacement / resurfacing</option>
                        <option>Deck repair</option>
                        <option>Waterproof deck</option>
                        <option>Pool deck</option>
                        <option>Stairs or railings</option>
                        <option>Pergola / cover</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass} style={{ ...sans, color: MUTED }}>About your project</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                        style={{ borderRadius: "2px", ...sans }}
                        placeholder="Rough size, how high off the ground, wood or composite, timing..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: GOLD, color: INK, ...sans, borderRadius: "2px" }}
                    >
                      Request my free estimate
                    </button>
                    <p className="text-xs text-center" style={{ ...sans, color: "oklch(0.6 0.01 250)" }}>
                      We'll reply within one business day.
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
