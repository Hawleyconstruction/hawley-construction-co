/**
 * Footer — Modern Craftsman Design
 * Dark background, gold accents, service area list, contact info
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-logo-modern-K7nsMoUjXa4vQaiXbz97jj.webp";

const services = [
  { label: "Kitchen Remodeling", href: "/kitchen-remodeling-st-petersburg/" },
  { label: "Bathroom Remodeling", href: "/bathroom-remodeling-st-petersburg/" },
  { label: "Trex Deck Builder Tampa Bay", href: "/trex-deck-builder-tampa-bay/" },
  { label: "Sunroom & Florida Room Contractor", href: "/sunroom-florida-room-contractor/" },
  { label: "ADU & In-Law Suite Builder", href: "/adu-in-law-suite-builder/" },
  { label: "Home Additions", href: "/services/home-additions" },
  { label: "Full Home Remodels", href: "/services/full-home-remodels" },
  { label: "Outdoor Living Spaces", href: "/services/outdoor-living" },
  { label: "Patios", href: "/services/patios" },
  { label: "Windows & Doors", href: "/services/windows-doors" },
  { label: "Custom Cabinetry", href: "/services/custom-cabinetry" },
];

const serviceAreas = [
  { label: "Tampa", href: "/areas/tampa" },
  { label: "St. Petersburg", href: "/areas/st-petersburg" },
  { label: "Clearwater", href: "/areas/clearwater" },
  { label: "Bradenton", href: "" },
  { label: "Tarpon Springs", href: "" },
  { label: "Sarasota", href: "" },
  { label: "Wesley Chapel", href: "" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.18 0.008 250)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div
                className="text-2xl font-bold tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif", color: "white" }}
              >
                HAWLEY
              </div>
              <div
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Construction Co.
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "oklch(0.7 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Transforming homes across Tampa Bay with premium craftsmanship and attention to detail.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:7046191480"
                className="flex items-center gap-2 text-sm hover:text-gold transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.77 0.065 82)" }}
              >
                <Phone size={14} />
                704-619-1480
              </a>
              <a
                href="mailto:hawleyconstructioncompany@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-gold transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.7 0.01 250)" }}
              >
                <Mail size={14} />
                hawleyconstructioncompany@gmail.com
              </a>
              <div
                className="flex items-start gap-2 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.7 0.01 250)" }}
              >
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                Serving the Greater Tampa Bay Area
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Our Services
            </h4>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors hover:text-gold"
                    style={{ color: "oklch(0.7 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Service Areas
            </h4>
            <ul className="flex flex-col gap-2">
              {serviceAreas.map((area) => (
                <li key={area.label}>
                  {area.href ? (
                    <Link
                      href={area.href}
                      className="text-sm transition-colors hover:text-gold"
                      style={{ color: "oklch(0.7 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {area.label}
                    </Link>
                  ) : (
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.7 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {area.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + CTA */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 mb-8">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Our Work", href: "/our-work" },
                { label: "FAQ", href: "/faq" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold"
                    style={{ color: "oklch(0.7 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="btn-gold inline-block text-center"
              style={{ borderRadius: "2px" }}
            >
              Get Free Estimate
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderTop: "1px solid oklch(1 0 0 / 10%)",
            color: "oklch(0.5 0.01 250)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <p>© {new Date().getFullYear()} Hawley Construction Co. All rights reserved.</p>
          <p>Licensed & Insured | Tampa Bay, Florida</p>
        </div>
      </div>
    </footer>
  );
}
