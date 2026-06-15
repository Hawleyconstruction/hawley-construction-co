/**
 * Footer — Modern Craftsman Design
 * Dark background, gold accents, comprehensive service + area links for SEO internal linking
 * All links verified as 200 status — no 404s
 */
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { label: "Kitchen Remodeling", href: "/kitchen-remodeling-st-petersburg/" },
  { label: "Bathroom Remodeling", href: "/bathroom-remodeling-st-petersburg/" },
  { label: "Trex Decks", href: "/trex-deck-builder-tampa-bay/" },
  { label: "Sunrooms & Florida Rooms", href: "/sunroom-florida-room-contractor/" },
  { label: "ADU & In-Law Suites", href: "/adu-in-law-suite-builder/" },
  { label: "General Contractor", href: "/general-contractor-st-petersburg/" },
  { label: "Home Additions", href: "/services/home-additions" },
  { label: "Full Home Remodels", href: "/services/full-home-remodels" },
  { label: "Custom Cabinetry", href: "/services/custom-cabinetry" },
  { label: "Outdoor Living", href: "/services/outdoor-living" },
];

const serviceAreas = [
  { label: "St. Petersburg", href: "/areas/st-petersburg/" },
  { label: "Tampa", href: "/areas/tampa/" },
  { label: "Clearwater", href: "/areas/clearwater/" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.18 0.008 250)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <a href="/" className="block">
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
              </a>
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

          {/* Our Services */}
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
                  <a
                    href={s.href}
                    className="text-sm transition-colors hover:text-gold"
                    style={{ color: "oklch(0.7 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.label}
                  </a>
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
                <li key={area.href}>
                  <a
                    href={area.href}
                    className="text-sm transition-colors hover:text-gold"
                    style={{ color: "oklch(0.7 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {area.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Our Work", href: "/our-work" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-gold"
                      style={{ color: "oklch(0.7 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Get Started
            </h4>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "oklch(0.7 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Ready to transform your home? Get a free, no-pressure estimate from our team.
            </p>
            <a
              href="/contact"
              className="btn-gold inline-block text-center"
              style={{ borderRadius: "2px" }}
            >
              Get Free Estimate
            </a>
            <div className="mt-8">
              <a
                href="tel:7046191480"
                className="text-lg font-bold hover:text-gold transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.77 0.065 82)" }}
              >
                (704) 619-1480
              </a>
            </div>
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
          <p>&copy; {new Date().getFullYear()} Hawley Construction Co. All rights reserved.</p>
          <p>Licensed &amp; Insured | Tampa Bay, Florida</p>
        </div>
      </div>
    </footer>
  );
}
