/**
 * Home Page — Modern Craftsman Design
 * Hero → Trust Stats → Services Grid → Gallery → Why Choose Us → Reviews → CTA → Contact
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Phone, Star, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-kitchen-mSpoc3xtKks8iMHpTCvAxs.webp";
const BATHROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-bathroom-KW8hCkNSxN2cYTrJakvzLS.webp";
const OUTDOOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-outdoor-living-new-hVfbb6yZQe8ungx9xcEYX8.webp";
const SUNROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-sunroom-screened-TouYoyDabjd4tNaeYJgTRx.webp";
const HOME_ADDITION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-home-addition-new-7k7PkNkc4ssP8WLmYJpDD9.webp";
const TREX_DECK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-trex-deck-2uwLnSueruCa29BoSx4nDJ.webp";

const services = [
  { title: "Kitchen Remodeling", desc: "Custom kitchens designed for the way you live — from quartz countertops to custom cabinetry.", slug: "kitchen-remodeling", img: HERO_IMG },
  { title: "Bathroom Remodeling", desc: "Transform your bathroom into a spa-like retreat with premium tile, fixtures, and finishes.", slug: "bathroom-remodeling", img: BATHROOM_IMG },
  { title: "Home Additions", desc: "Expand your living space with expertly crafted additions that blend seamlessly with your home.", slug: "home-additions", img: HOME_ADDITION_IMG },
  { title: "Sunrooms", desc: "Bring the Florida sunshine indoors with a beautiful, energy-efficient sunroom addition.", slug: "sunrooms", img: SUNROOM_IMG },
  { title: "Outdoor Living", desc: "Create the ultimate outdoor retreat with custom patios, pergolas, and outdoor kitchens.", slug: "outdoor-living", img: OUTDOOR_IMG },
  { title: "Trex Decks", desc: "Low-maintenance composite decking that looks stunning and lasts for decades.", slug: "trex-decks", img: TREX_DECK_IMG },
];

const stats = [
  { value: "100+", label: "Remodels Completed" },
  { value: "5+", label: "Years of Experience" },
  { value: "7", label: "Cities Served" },
  { value: "5★", label: "Average Rating" },
];

const whyUs = [
  "Clear communication from start to finish",
  "Premium quality materials sourced locally",
  "Experienced craftsmen on every project",
  "Clean, organized job sites daily",
  "On-time project completion guaranteed",
  "Licensed, bonded & fully insured",
];

const reviews = [
  {
    name: "Jennifer M.",
    location: "Tampa, FL",
    text: "Landon and his team completely transformed our kitchen. From the initial consultation to the final walkthrough, every detail was handled with care. The quartz countertops and custom cabinetry are absolutely stunning. We couldn't be happier!",
    rating: 5,
  },
  {
    name: "Robert & Lisa K.",
    location: "Clearwater, FL",
    text: "We hired Hawley Construction for a full master bathroom remodel and they exceeded every expectation. The tile work is flawless, the fixtures are exactly what we wanted, and they finished on schedule. Highly recommend to anyone in the Tampa Bay area.",
    rating: 5,
  },
  {
    name: "David T.",
    location: "St. Petersburg, FL",
    text: "Our Trex deck turned out better than we imagined. The crew was professional, respectful of our property, and cleaned up every day. The deck is beautiful and we've already gotten so many compliments from neighbors.",
    rating: 5,
  },
  {
    name: "Amanda S.",
    location: "Bradenton, FL",
    text: "We added a sunroom to our home and it's become our favorite room in the house. Hawley Construction handled the entire process, including permits. The quality of the work is top-notch and the price was very fair.",
    rating: 5,
  },
  {
    name: "Michael & Karen P.",
    location: "Sarasota, FL",
    text: "After getting quotes from three contractors, we chose Hawley Construction and are so glad we did. Their attention to detail on our kitchen remodel was incredible. Landon was always available to answer questions and kept us informed throughout.",
    rating: 5,
  },
  {
    name: "Chris W.",
    location: "Tarpon Springs, FL",
    text: "The outdoor living space Hawley Construction built for us has completely changed how we use our backyard. The pergola, outdoor kitchen, and patio are all beautifully done. Our family spends every evening out there now.",
    rating: 5,
  },
];

// Intersection observer hook for scroll animations
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// Animated counter
function Counter({ target, suffix = "" }: { target: number | string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.5);
  const numTarget = typeof target === "string" ? parseInt(target) : target;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(numTarget / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= numTarget) { setCount(numTarget); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, numTarget]);

  return <span ref={ref}>{typeof target === "string" && isNaN(numTarget) ? target : count}{suffix}</span>;
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    document.title = "Hawley Construction Co. | Tampa Bay Remodeling";
  }, []);

  const servicesSection = useInView();
  const statsSection = useInView();
  const gallerySection = useInView();
  const whySection = useInView();
  const reviewsSection = useInView();
  const ctaSection = useInView();

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-start overflow-hidden"
        style={{ minHeight: "100svh" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Luxury kitchen remodel Tampa Bay"
            className="w-full h-full object-cover"
            onLoad={() => setHeroLoaded(true)}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, oklch(0.12 0.008 250 / 0.88) 0%, oklch(0.12 0.008 250 / 0.55) 55%, transparent 100%)",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <div
              className={`transition-all duration-700 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
                style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Tampa Bay's Premier Remodeling Contractor
              </p>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Transforming Homes Across Tampa Bay
              </h1>
              <p
                className="text-lg md:text-xl mb-8 leading-relaxed"
                style={{ color: "oklch(0.88 0.005 80)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                High-Quality Kitchens, Bathrooms, Additions &amp; Outdoor Living Spaces — crafted with precision for the way you live.
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
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: "linear-gradient(to bottom, transparent, white)" }}
          />
        </div>
      </section>

      {/* ─── TRUST STATS ─── */}
      <section
        ref={statsSection.ref}
        style={{ backgroundColor: "oklch(0.18 0.008 250)" }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  statsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="text-4xl md:text-5xl font-bold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.77 0.065 82)" }}
                >
                  {stat.value.includes("+") ? (
                    <><Counter target={parseInt(stat.value)} />+</>
                  ) : stat.value.includes("★") ? (
                    "5★"
                  ) : (
                    <Counter target={parseInt(stat.value)} />
                  )}
                </div>
                <div
                  className="text-sm uppercase tracking-widest"
                  style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section ref={servicesSection.ref} className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`mb-14 transition-all duration-700 ${
              servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="section-divider" />
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
            >
              Our Services
            </h2>
            <p
              className="text-lg max-w-xl"
              style={{ color: "oklch(0.5 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
            >
              From kitchen transformations to outdoor living spaces — we handle every aspect of your home remodel with care and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group block bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 ${
                  servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms`, borderRadius: "2px" }}
              >
                <div className="img-zoom h-52 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "oklch(0.5 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {service.desc}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide transition-colors group-hover:gap-2"
                    style={{ color: "oklch(0.64 0.055 230)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Learn More <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="btn-gold inline-block"
              style={{ borderRadius: "2px" }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── GALLERY / BEFORE & AFTER ─── */}
      <section
        ref={gallerySection.ref}
        className="py-20 md:py-28"
        style={{ backgroundColor: "oklch(0.95 0.005 80)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`mb-14 transition-all duration-700 ${
              gallerySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="section-divider" />
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
            >
              Our Work
            </h2>
            <p
              className="text-lg max-w-xl"
              style={{ color: "oklch(0.5 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
            >
              A selection of recent projects across the Tampa Bay area — each one a testament to quality craftsmanship.
            </p>
          </div>

          {/* Asymmetric gallery grid with new after photos */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div
              className={`md:col-span-7 img-zoom overflow-hidden transition-all duration-700 ${
                gallerySection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ borderRadius: "2px" }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/kitchen-after-hsVXguHfNLPDyGVXHRHCyx.webp"
                alt="Kitchen remodel after - Tampa Bay"
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
            <div
              className={`md:col-span-5 img-zoom overflow-hidden transition-all duration-700 delay-100 ${
                gallerySection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ borderRadius: "2px" }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/bathroom-after-mFZsTRAQ7UMXN2JYfxu5Qy.webp"
                alt="Bathroom remodel after - Tampa Bay"
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
            <div
              className={`md:col-span-4 img-zoom overflow-hidden transition-all duration-700 delay-200 ${
                gallerySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ borderRadius: "2px" }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/sunroom-after-c5igWFwkXMiTD7G7dExTJ2.webp"
                alt="Sunroom addition after - Tampa Bay"
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>
            <div
              className={`md:col-span-4 img-zoom overflow-hidden transition-all duration-700 delay-300 ${
                gallerySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ borderRadius: "2px" }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/outdoor-after-RFc2rKVehVEWPV5GpcVQEW.webp"
                alt="Outdoor living space after - Tampa Bay"
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>
            <div
              className={`md:col-span-4 img-zoom overflow-hidden transition-all duration-700 delay-[400ms] ${
                gallerySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ borderRadius: "2px" }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/deck-after-fHq2VWgfu4bzQ7nx4A2z86.webp"
                alt="Trex deck installation after - Tampa Bay"
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* View All link */}
          <div className="mt-10 text-center">
            <Link
              href="/our-work"
              className="btn-gold inline-block"
              style={{ borderRadius: "2px" }}
            >
              View All Before &amp; After Photos
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section ref={whySection.ref} className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-700 ${
                whySection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className="section-divider" />
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
              >
                Why Homeowners Choose Hawley Construction
              </h2>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "oklch(0.5 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
              >
                We believe your home deserves the same care and attention we'd give our own. Every project is handled with professionalism, transparency, and an unwavering commitment to quality.
              </p>
              <ul className="flex flex-col gap-4">
                {whyUs.map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      whySection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "oklch(0.77 0.065 82)" }}
                    />
                    <span
                      className="text-base"
                      style={{ color: "oklch(0.35 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="btn-gold inline-block"
                  style={{ borderRadius: "2px" }}
                >
                  Start Your Project
                </Link>
              </div>
            </div>

            <div
              className={`relative transition-all duration-700 delay-200 ${
                whySection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="img-zoom overflow-hidden" style={{ borderRadius: "2px" }}>
                <img
                  src={OUTDOOR_IMG}
                  alt="Quality construction Tampa Bay"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -left-6 p-6 shadow-xl"
                style={{
                  backgroundColor: "oklch(0.18 0.008 250)",
                  borderRadius: "2px",
                  minWidth: "180px",
                }}
              >
                <div
                  className="text-4xl font-bold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.77 0.065 82)" }}
                >
                  100+
                </div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Happy Homeowners
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section
        ref={reviewsSection.ref}
        className="py-20 md:py-28"
        style={{ backgroundColor: "oklch(0.95 0.005 80)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`mb-14 text-center transition-all duration-700 ${
              reviewsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="section-divider mx-auto" />
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
            >
              What Our Clients Say
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "oklch(0.5 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Real reviews from real Tampa Bay homeowners who trusted us with their most important investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className={`bg-white p-7 shadow-sm transition-all duration-700 ${
                  reviewsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms`, borderRadius: "2px" }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="oklch(0.77 0.065 82)" color="oklch(0.77 0.065 82)" />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed mb-5 italic"
                  style={{ color: "oklch(0.45 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  "{review.text}"
                </p>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "oklch(0.22 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {review.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(0.64 0.055 230)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {review.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "oklch(0.64 0.055 230)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Proudly Serving
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Tampa", "St. Pete Beach", "St. Petersburg", "Clearwater", "Bradenton", "Tarpon Springs", "Sarasota"].map((area) => (
              <span
                key={area}
                className="px-4 py-2 text-sm font-medium border"
                style={{
                  borderColor: "oklch(0.77 0.065 82)",
                  color: "oklch(0.37 0.01 250)",
                  fontFamily: "'DM Sans', sans-serif",
                  borderRadius: "2px",
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section
        ref={ctaSection.ref}
        className="relative py-24 overflow-hidden"
        style={{ backgroundColor: "oklch(0.18 0.008 250)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-700 ${
              ctaSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Start Your Project?
            </h2>
            <p
              className="text-lg mb-10"
              style={{ color: "oklch(0.75 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact Hawley Construction Co. today for a free, no-obligation estimate. We serve Tampa, St. Petersburg, Clearwater, Bradenton, Sarasota, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-gold text-center"
                style={{ borderRadius: "2px" }}
              >
                Request Free Estimate
              </Link>
              <a
                href="tel:7046191480"
                className="btn-outline-light text-center flex items-center justify-center gap-2"
                style={{ borderRadius: "2px" }}
              >
                <Phone size={15} />
                Call 704-619-1480
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
