/**
 * Navbar — Modern Craftsman Design
 * Sticky header with backdrop blur, gold accent on scroll
 * Logo: Hawley Construction Co. modernized mark
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-logo-modern-K7nsMoUjXa4vQaiXbz97jj.webp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Areas", href: "/areas/tampa" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="flex flex-col leading-none">
                <span
                  className="text-xl font-bold tracking-wide"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: scrolled || !isHome ? "oklch(0.18 0.008 250)" : "white",
                  }}
                >
                  HAWLEY
                </span>
                <span
                  className="text-[9px] font-semibold tracking-[0.18em] uppercase"
                  style={{
                    color: "oklch(0.77 0.065 82)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Construction Co.
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm font-500 tracking-wide transition-colors duration-200 ${
                    location === link.href
                      ? "text-gold"
                      : scrolled || !isHome
                      ? "text-charcoal hover:text-gold"
                      : "text-white hover:text-gold"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:7046191480"
                className="flex items-center gap-2 text-sm font-semibold"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: scrolled || !isHome ? "#4F5458" : "white",
                }}
              >
                <Phone size={15} />
                704-619-1480
              </a>
              <Link
                href="/contact"
                className="btn-gold text-xs"
                style={{ borderRadius: "2px" }}
              >
                Free Estimate
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className={`md:hidden p-2 ${
                scrolled || !isHome ? "text-charcoal" : "text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-base font-medium py-1 transition-colors ${
                  location === link.href ? "text-gold" : "text-charcoal hover:text-gold"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:7046191480"
              className="flex items-center gap-2 text-base font-semibold text-charcoal"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Phone size={16} />
              704-619-1480
            </a>
            <Link
              href="/contact"
              className="btn-gold text-center"
              style={{ borderRadius: "2px" }}
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile sticky call button */}
      <a
        href="tel:7046191480"
        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 bg-gold text-dark font-semibold px-5 py-3 shadow-lg"
        style={{
          borderRadius: "2px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.875rem",
          backgroundColor: "oklch(0.77 0.065 82)",
          color: "oklch(0.18 0.008 250)",
        }}
      >
        <Phone size={16} />
        Call Now
      </a>
    </>
  );
}
