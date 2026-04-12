/**
 * Contact Page — Lead capture form with all required fields
 * Phone, email, county, project type, message
 */
import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-kitchen-mSpoc3xtKks8iMHpTCvAxs.webp";

const projectTypes = [
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Home Addition",
  "Full Home Remodel",
  "Sunroom",
  "Outdoor Living Space",
  "Patio",
  "Windows & Doors",
  "Custom Cabinetry",
  "Trex Deck",
  "Other",
];

const counties = [
  "Hillsborough County (Tampa)",
  "Pinellas County (St. Pete / Clearwater)",
  "Manatee County (Bradenton)",
  "Sarasota County",
  "Pasco County",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    county: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/mrerzpzj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          county: formData.county,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data?.errors?.[0]?.message || "Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    color: "oklch(0.22 0.01 250)",
    backgroundColor: "white",
    border: "1px solid oklch(0.88 0.008 80)",
    borderRadius: "2px",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.75rem",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    color: "oklch(0.37 0.01 250)",
    marginBottom: "0.4rem",
    display: "block",
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Page Header */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "oklch(0.18 0.008 250)" }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Let's Talk
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get Your Free Estimate
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "oklch(0.75 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Tell us about your project and we'll get back to you within 24 hours with a free, no-obligation estimate.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <span className="section-divider" />
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
              >
                Contact Information
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.5 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
              >
                We're ready to help you transform your Tampa Bay home. Reach out by phone, email, or fill out the form and we'll be in touch shortly.
              </p>

              <div className="flex flex-col gap-6 mb-10">
                <a
                  href="tel:7046191480"
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.77 0.065 82 / 0.15)", borderRadius: "2px" }}
                  >
                    <Phone size={16} style={{ color: "oklch(0.6 0.06 82)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Phone
                    </p>
                    <p
                      className="text-base font-semibold group-hover:text-steel transition-colors"
                      style={{ color: "oklch(0.22 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      704-619-1480
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hawleyconstructioncompany@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.77 0.065 82 / 0.15)", borderRadius: "2px" }}
                  >
                    <Mail size={16} style={{ color: "oklch(0.6 0.06 82)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Email
                    </p>
                    <p
                      className="text-sm font-medium group-hover:text-steel transition-colors break-all"
                      style={{ color: "oklch(0.22 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      hawleyconstructioncompany@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.77 0.065 82 / 0.15)", borderRadius: "2px" }}
                  >
                    <MapPin size={16} style={{ color: "oklch(0.6 0.06 82)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Service Area
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.22 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Tampa · St. Petersburg · Clearwater<br />
                      Bradenton · Sarasota · Tarpon Springs<br />
                      St. Pete Beach & Surrounding Areas
                    </p>
                  </div>
                </div>
              </div>

              {/* Why contact us */}
              <div
                className="p-6"
                style={{ backgroundColor: "oklch(0.95 0.005 80)", borderRadius: "2px" }}
              >
                <h3
                  className="text-base font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
                >
                  What to Expect
                </h3>
                {[
                  "Response within 24 hours",
                  "Free, no-obligation estimate",
                  "No pressure, no hard sell",
                  "Transparent pricing & timeline",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={14} style={{ color: "oklch(0.77 0.065 82)" }} />
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.45 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  className="bg-white p-12 text-center shadow-sm"
                  style={{ borderRadius: "2px" }}
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: "oklch(0.77 0.065 82 / 0.15)", borderRadius: "50%" }}
                  >
                    <CheckCircle2 size={32} style={{ color: "oklch(0.6 0.06 82)" }} />
                  </div>
                  <h2
                    className="text-3xl font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
                  >
                    Thank You!
                  </h2>
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: "oklch(0.5 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    We've received your request and will be in touch within 24 hours. If you need to reach us sooner, please call us directly at{" "}
                    <a href="tel:7046191480" className="font-semibold" style={{ color: "oklch(0.64 0.055 230)" }}>
                      704-619-1480
                    </a>.
                  </p>
                  <a
                    href="tel:7046191480"
                    className="btn-gold inline-block"
                    style={{ borderRadius: "2px" }}
                  >
                    Call Us Now
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 md:p-10 shadow-sm"
                  style={{ borderRadius: "2px" }}
                >
                  <h2
                    className="text-2xl font-bold mb-8"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
                  >
                    Tell Us About Your Project
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label style={labelStyle} htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="phone">Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(813) 555-0100"
                        value={formData.phone}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label style={labelStyle} htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="county">County *</label>
                      <select
                        id="county"
                        name="county"
                        required
                        value={formData.county}
                        onChange={handleChange}
                        style={inputStyle}
                      >
                        <option value="">Select your county</option>
                        {counties.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label style={labelStyle} htmlFor="projectType">Type of Project *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-8">
                    <label style={labelStyle} htmlFor="message">Tell Us More About Your Project</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Describe your project, timeline, budget range, or any specific questions you have..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full text-center"
                    style={{ borderRadius: "2px", opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? "Sending..." : "Request Free Estimate"}
                  </button>

                  {error && (
                    <p
                      className="text-sm text-center mt-3 font-medium"
                      style={{ color: "oklch(0.55 0.18 27)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {error}
                    </p>
                  )}
                  <p
                    className="text-xs text-center mt-4"
                    style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    We respond within 24 hours. No spam, no pressure.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
