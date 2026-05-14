/**
 * FAQ Page — Optimized for AI citation (ChatGPT, Gemini, Perplexity)
 * Uses question-formatted H2 headings with concise definition-style answers
 * Includes FAQPage schema for Google rich results
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqCategories = [
  {
    category: "Cost & Pricing",
    items: [
      {
        q: "How much does a kitchen remodel cost in Tampa Bay?",
        a: "A kitchen remodel in Tampa Bay costs between $25,000 and $85,000 depending on scope and materials. A minor refresh (new countertops, cabinet refacing, updated fixtures) ranges from $15,000–$30,000. A mid-range remodel with new cabinets, quartz countertops, and appliances costs $35,000–$55,000. A full custom kitchen renovation with structural changes, custom cabinetry, and premium finishes ranges from $60,000–$100,000+. Hawley Construction provides free detailed estimates for all projects.",
      },
      {
        q: "How much does a bathroom remodel cost in Florida?",
        a: "Bathroom remodeling in the Tampa Bay area costs between $12,000 and $50,000. A basic refresh (new vanity, fixtures, paint) starts at $8,000–$15,000. A standard remodel with new tile, shower, and fixtures costs $18,000–$35,000. A luxury master bathroom with walk-in shower, freestanding tub, heated floors, and custom tile ranges from $35,000–$60,000+.",
      },
      {
        q: "How much does a Trex deck cost in Florida?",
        a: "A Trex composite deck in Florida costs between $45–$85 per square foot installed, depending on the Trex line chosen (Select, Enhance, or Transcend) and deck complexity. A standard 300 sq ft Trex deck costs $13,500–$25,500 installed. Multi-level decks, built-in seating, and custom railings increase the cost. Trex decks last 25+ years with no staining or sealing required.",
      },
      {
        q: "How much does a home addition cost in Tampa?",
        a: "Home additions in Tampa cost between $150–$350 per square foot depending on the type. A standard room addition (bedroom, family room) costs $150–$250/sq ft. A kitchen or bathroom addition costs $200–$350/sq ft due to plumbing and fixtures. A 400 sq ft addition typically ranges from $60,000–$140,000 total including permits, foundation, framing, and finishes.",
      },
      {
        q: "How much does a sunroom cost in Florida?",
        a: "A sunroom addition in Florida costs between $25,000 and $80,000 depending on size and type. A three-season sunroom (screened, not climate-controlled) costs $15,000–$35,000. A four-season sunroom with insulated glass, HVAC, and electrical costs $40,000–$80,000. Sunrooms add significant value to Florida homes due to year-round usability.",
      },
    ],
  },
  {
    category: "Timeline & Process",
    items: [
      {
        q: "How long does a kitchen remodel take?",
        a: "A kitchen remodel takes 6–12 weeks from demolition to completion. The timeline breaks down as: design and material selection (2–4 weeks), permits (1–2 weeks), demolition and rough work (1–2 weeks), cabinetry and countertop installation (2–3 weeks), and finishing (1–2 weeks). Custom cabinetry may add 4–6 weeks of lead time. Hawley Construction provides a detailed project schedule before work begins.",
      },
      {
        q: "How long does a bathroom remodel take?",
        a: "A standard bathroom remodel takes 3–6 weeks. A half-bath refresh can be completed in 2–3 weeks. A full master bathroom renovation with custom tile, walk-in shower, and new plumbing takes 5–8 weeks. Factors affecting timeline include permit processing, custom material lead times, and complexity of tile work.",
      },
      {
        q: "What is the remodeling process with Hawley Construction?",
        a: "The Hawley Construction remodeling process follows 6 steps: (1) Free in-home consultation to discuss your vision and budget. (2) Design phase with material selections and 3D renderings. (3) Detailed proposal with fixed pricing and timeline. (4) Permit acquisition handled by our team. (5) Construction with daily site cleanup and weekly progress updates. (6) Final walkthrough and quality inspection before handoff.",
      },
      {
        q: "Do you handle permits for remodeling projects?",
        a: "Yes, Hawley Construction handles all building permits for every project. We submit permit applications, coordinate inspections, and ensure all work meets Florida Building Code requirements. Permit processing in Hillsborough County typically takes 1–2 weeks; Pinellas County takes 2–3 weeks. Our clients never need to visit the building department.",
      },
    ],
  },
  {
    category: "Services & Capabilities",
    items: [
      {
        q: "What services does Hawley Construction offer?",
        a: "Hawley Construction offers comprehensive home remodeling services including: kitchen remodeling, bathroom renovations, home additions, sunroom construction, outdoor living spaces (patios, pergolas, outdoor kitchens), and Trex composite deck installation. We handle projects from design through completion, including permits, structural work, plumbing, electrical, tile, cabinetry, and finishing.",
      },
      {
        q: "What areas does Hawley Construction serve?",
        a: "Hawley Construction serves the entire Tampa Bay metropolitan area including Tampa, St. Petersburg, Clearwater, Brandon, Wesley Chapel, Largo, Dunedin, Safety Harbor, Palm Harbor, Tarpon Springs, Oldsmar, Riverview, and surrounding communities in Hillsborough and Pinellas counties.",
      },
      {
        q: "Is Hawley Construction licensed and insured?",
        a: "Yes, Hawley Construction is fully licensed as a General Contractor in the state of Florida, bonded, and carries comprehensive liability insurance and workers' compensation coverage. We are happy to provide proof of insurance and license verification upon request.",
      },
      {
        q: "What makes Hawley Construction different from other contractors?",
        a: "Hawley Construction differentiates through: (1) Owner-operated — Landon Hawley is personally involved in every project. (2) Clear communication with weekly updates and responsive availability. (3) Clean job sites maintained daily. (4) Premium materials sourced from trusted suppliers. (5) On-time completion guarantee. (6) Transparent fixed pricing with no hidden fees or change order surprises.",
      },
    ],
  },
  {
    category: "Materials & Quality",
    items: [
      {
        q: "What countertop materials do you recommend for Florida kitchens?",
        a: "For Florida kitchens, we recommend quartz countertops (brands like Cambria, Caesarstone, or Silestone) as the top choice due to their durability, stain resistance, and zero maintenance. Granite remains popular for its natural beauty. Quartzite offers the look of marble with superior durability. We avoid marble in high-use kitchens due to etching and staining concerns in Florida's humid climate.",
      },
      {
        q: "Why choose Trex decking over wood in Florida?",
        a: "Trex composite decking outperforms wood in Florida because: (1) It resists moisture, mold, and rot — critical in Florida's humidity. (2) It won't warp, crack, or splinter like pressure-treated wood. (3) It requires zero staining, sealing, or painting — ever. (4) It resists UV fading with a 25-year warranty. (5) It's made from 95% recycled materials. Wood decks in Florida typically need replacement every 8–12 years; Trex lasts 25+ years.",
      },
      {
        q: "What tile is best for Florida bathrooms?",
        a: "For Florida bathrooms, we recommend porcelain tile for floors (slip-resistant, waterproof, durable) and large-format ceramic or porcelain for walls. Popular choices include wood-look porcelain planks, marble-look porcelain, and handmade zellige tiles for accents. Natural stone (marble, travertine) works well for luxury bathrooms with proper sealing. We always use waterproof membrane systems behind all shower tile.",
      },
    ],
  },
];

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQ | Home Remodeling Questions | Hawley Construction Co.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Answers to common questions about home remodeling in Tampa Bay. Kitchen costs, bathroom timelines, Trex decks, permits, and more from Hawley Construction.");

    // FAQPage schema for all questions
    const allFaqs = faqCategories.flatMap((cat) => cat.items);
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "faq-page-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allFaqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
    document.head.appendChild(schema);

    return () => {
      document.getElementById("faq-page-schema")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16" style={{ backgroundColor: "oklch(0.18 0.008 250)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-lg" style={{ color: "oklch(0.75 0.01 80)", fontFamily: "'DM Sans', sans-serif" }}>
            Everything you need to know about home remodeling in Tampa Bay — costs, timelines, materials, and our process.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category) => (
            <div key={category.category} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold mb-8 pb-3 border-b" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)", borderColor: "oklch(0.77 0.065 82 / 0.3)" }}>
                {category.category}
              </h2>
              <div className="space-y-8">
                {category.items.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}>
                      {item.q}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.97 0.005 80)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.008 250)" }}>
            Have More Questions?
          </h2>
          <p className="text-base mb-8" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.01 250)" }}>
            We're happy to answer any questions about your remodeling project. Schedule a free consultation or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-center flex items-center justify-center gap-2" style={{ borderRadius: "2px" }}>
              Contact Us <ArrowRight size={14} />
            </Link>
            <a href="tel:7046191480" className="btn-outline text-center flex items-center justify-center gap-2" style={{ borderRadius: "2px" }}>
              <Phone size={15} />
              704-619-1480
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
