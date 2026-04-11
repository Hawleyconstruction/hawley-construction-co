/**
 * BlogPost Page — Individual article with full SEO-optimized content
 */
import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, Clock, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "./Blog";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-kitchen-mSpoc3xtKks8iMHpTCvAxs.webp";
const BATHROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-bathroom-KW8hCkNSxN2cYTrJakvzLS.webp";
const OUTDOOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-outdoor-living-new-hVfbb6yZQe8ungx9xcEYX8.webp";
const SUNROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-sunroom-screened-TouYoyDabjd4tNaeYJgTRx.webp";
const HOME_ADDITION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-home-addition-new-7k7PkNkc4ssP8WLmYJpDD9.webp";
const TREX_DECK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-trex-deck-2uwLnSueruCa29BoSx4nDJ.webp";

const articleContent: Record<string, { sections: { heading?: string; body: string }[] }> = {
  "top-kitchen-remodeling-trends-tampa": {
    sections: [
      { body: "Tampa Bay homeowners are investing more than ever in kitchen remodels — and for good reason. A well-designed kitchen not only improves daily life but also delivers some of the highest returns on investment of any home improvement project. As we move through 2025, several design trends are dominating kitchen remodels across Tampa, St. Petersburg, Clearwater, and the surrounding areas." },
      { heading: "1. Waterfall Quartz Islands", body: "The waterfall island — where the countertop material cascades down the sides of the island to the floor — continues to be one of the most requested features in Tampa Bay kitchen remodels. Quartz is the material of choice for its durability, low maintenance, and stunning appearance. Popular colors include soft whites with subtle veining, warm creams, and dramatic charcoal tones." },
      { heading: "2. Two-Tone Cabinetry", body: "The all-white kitchen is giving way to more dynamic two-tone designs. A popular combination in Tampa Bay homes is white or cream upper cabinets paired with a navy, forest green, or charcoal lower cabinet. This approach adds visual interest and depth while maintaining a clean, modern aesthetic." },
      { heading: "3. Integrated Appliances", body: "Homeowners are increasingly choosing panel-ready refrigerators, dishwashers, and even range hoods that blend seamlessly with cabinetry. This creates a sleek, furniture-like kitchen aesthetic that feels more like a curated living space than a traditional kitchen." },
      { heading: "4. Statement Backsplashes", body: "Backsplashes are having a moment. Oversized subway tiles in a stacked pattern, zellige-style handmade tiles, and dramatic full-slab backsplashes that match the countertop are all trending in Tampa Bay kitchens. The backsplash has become a focal point rather than an afterthought." },
      { heading: "5. Smart Storage Solutions", body: "With the rise of open-concept living, kitchen storage has become more important than ever. Pull-out pantry systems, deep drawer organizers, corner cabinet solutions, and built-in appliance garages are all popular additions in 2025 kitchen remodels." },
      { heading: "Ready to Remodel Your Tampa Kitchen?", body: "Hawley Construction Co. specializes in premium kitchen remodeling throughout Tampa Bay. Contact us today for a free, no-obligation estimate and let us help you design the kitchen of your dreams." },
    ],
  },
  "bathroom-remodel-cost-tampa": {
    sections: [
      { body: "One of the most common questions we hear from Tampa Bay homeowners is: 'How much does a bathroom remodel cost?' The honest answer is that it depends — on the size of the bathroom, the scope of the project, the materials you choose, and the contractor you hire. Here's a detailed breakdown to help you plan your project budget." },
      { heading: "Budget Bathroom Refresh: $5,000 – $15,000", body: "A budget refresh typically includes new fixtures (toilet, faucets, showerhead), fresh paint, updated lighting, a new vanity, and possibly new flooring. This scope is ideal for guest bathrooms or powder rooms that need a cosmetic update without structural changes." },
      { heading: "Mid-Range Bathroom Remodel: $15,000 – $35,000", body: "A mid-range remodel in Tampa Bay typically includes new tile throughout (floor and shower walls), a new vanity with custom or semi-custom cabinetry, updated plumbing fixtures, new lighting, and possibly a new tub or shower conversion. This is the most common scope for primary bathrooms." },
      { heading: "Luxury Master Bathroom: $35,000 – $80,000+", body: "A luxury master bathroom remodel in Tampa Bay can include a freestanding soaking tub, a custom walk-in shower with multiple showerheads and body sprays, a frameless glass enclosure, heated floors, custom floating vanities, backlit mirrors, and premium large-format tile. The sky is the limit for high-end finishes." },
      { heading: "Factors That Affect Cost in Tampa Bay", body: "Several factors influence bathroom remodeling costs in the Tampa Bay area specifically. Labor costs have increased significantly in recent years due to high demand. Material costs for tile, fixtures, and cabinetry vary widely. The age of your home can affect costs — older homes may require plumbing or electrical upgrades. And the complexity of your design choices plays a significant role." },
      { heading: "Is a Bathroom Remodel Worth It in Tampa?", body: "Absolutely. According to national remodeling data, a mid-range bathroom remodel returns approximately 60-70% of its cost at resale, while a luxury master bath can return 50-60%. But beyond resale value, the daily enjoyment of a beautifully remodeled bathroom is priceless." },
      { heading: "Get an Accurate Estimate for Your Project", body: "The best way to get an accurate cost estimate for your Tampa Bay bathroom remodel is to contact Hawley Construction Co. for a free, no-obligation consultation. We'll assess your space, discuss your goals, and provide a detailed, transparent quote." },
    ],
  },
  "benefits-sunroom-florida": {
    sections: [
      { body: "Florida is known for its sunshine, warm weather, and beautiful outdoor scenery — and a sunroom addition lets you enjoy all of it from the comfort of your home. For Tampa Bay homeowners, a sunroom is one of the most versatile and rewarding home additions you can make." },
      { heading: "Year-Round Enjoyment", body: "Unlike a screened porch or open patio, a properly designed sunroom is usable 365 days a year. Modern sunroom systems feature energy-efficient glass that keeps the space comfortable even during Florida's hottest months, while still flooding the room with natural light." },
      { heading: "Increased Living Space", body: "A sunroom effectively adds a new room to your home without the full cost of a traditional addition. Depending on the size and design, a sunroom can serve as a reading room, home office, playroom, dining room, or casual living space — giving your family more room to spread out and enjoy your home." },
      { heading: "Significant Home Value Increase", body: "Sunrooms consistently rank among the top home additions for return on investment. In the Tampa Bay market, a well-designed sunroom can add significant value to your home and make it more attractive to potential buyers who appreciate the Florida lifestyle." },
      { heading: "Connection to Nature", body: "There's a growing body of research showing that exposure to natural light improves mood, productivity, and overall wellbeing. A sunroom gives you a dedicated space to enjoy natural light and views of your garden or backyard throughout the day." },
      { heading: "Versatile Design Options", body: "Modern sunrooms come in a wide range of styles — from traditional glass-and-aluminum systems to custom wood-framed rooms with floor-to-ceiling windows. At Hawley Construction Co., we design sunrooms that complement your home's existing architecture and reflect your personal style." },
      { heading: "Build Your Florida Sunroom with Hawley Construction", body: "Serving Tampa, St. Petersburg, Clearwater, Bradenton, Sarasota, and Tarpon Springs, Hawley Construction Co. has the expertise to design and build the perfect sunroom for your Florida home. Contact us today for a free estimate." },
    ],
  },
  "trex-deck-vs-wood-deck": {
    sections: [
      { body: "If you're planning to build a deck for your Tampa Bay home, one of the first decisions you'll face is whether to use traditional wood or composite decking like Trex. Both options have their merits, but for Florida homeowners, the choice often comes down to one key factor: how well the material holds up in Florida's demanding climate." },
      { heading: "The Florida Climate Challenge", body: "Florida's combination of intense UV radiation, high humidity, heavy rainfall, and extreme heat is uniquely hard on outdoor building materials. Traditional wood decks — whether pressure-treated pine, cedar, or redwood — are particularly vulnerable to these conditions, requiring significant maintenance to stay in good condition." },
      { heading: "Wood Deck: Pros and Cons", body: "Wood decks have a natural beauty that many homeowners love. They're also typically less expensive upfront. However, in Florida's climate, wood decks require annual cleaning, staining or sealing, and regular inspection for rot, warping, and insect damage. Over a 10-year period, the maintenance costs for a wood deck in Tampa Bay can easily exceed the initial cost savings." },
      { heading: "Trex Composite Decking: Pros and Cons", body: "Trex composite decking is engineered to resist the challenges that destroy wood decks. It won't rot, warp, crack, or splinter. It's highly resistant to UV fading and staining. It requires no painting, staining, or sealing — just an occasional wash with soap and water. And it's backed by a 25-year warranty. The main drawback is a higher upfront cost compared to pressure-treated wood." },
      { heading: "Cost Comparison Over Time", body: "When you factor in maintenance costs over 10-25 years, Trex composite decking is often the more economical choice for Tampa Bay homeowners. A wood deck might cost $15-25 per square foot installed, but annual maintenance can add $500-1,500 per year. A Trex deck costs $25-40 per square foot installed but requires virtually no ongoing maintenance costs." },
      { heading: "Our Recommendation for Tampa Bay Homeowners", body: "For most Tampa Bay homeowners, we recommend Trex composite decking. The combination of Florida's harsh climate, the low maintenance requirements, the 25-year warranty, and the long-term cost savings make it the clear winner for this region. Hawley Construction Co. is a certified Trex installer — contact us for a free deck estimate." },
    ],
  },
  "plan-home-addition-tampa-bay": {
    sections: [
      { body: "Adding to your home is one of the most significant investments you can make as a Tampa Bay homeowner. When done right, a home addition can dramatically improve your quality of life, add significant value to your property, and solve space challenges that have been frustrating your family for years. Here's a step-by-step guide to planning a successful home addition in Tampa Bay." },
      { heading: "Step 1: Define Your Goals and Needs", body: "Before anything else, get clear on what problem you're trying to solve. Are you adding a bedroom for a growing family? Creating an in-law suite for aging parents? Expanding your living room for more entertaining space? The clearer you are about your goals, the better your addition will serve you." },
      { heading: "Step 2: Set a Realistic Budget", body: "Home additions in Tampa Bay typically cost $150-300+ per square foot, depending on the complexity of the project and the finishes you choose. A 400 square foot master suite addition might cost $60,000-120,000. Get clear on your budget before you start designing, and include a 10-15% contingency for unexpected costs." },
      { heading: "Step 3: Understand Tampa Bay Permitting Requirements", body: "All home additions in Tampa Bay require building permits. The permitting process involves submitting architectural drawings, structural engineering plans, and site plans to your local building department. This process can take 4-12 weeks depending on the municipality. An experienced contractor like Hawley Construction Co. will manage this process for you." },
      { heading: "Step 4: Choose the Right Contractor", body: "Your contractor is the most important decision you'll make. Look for a licensed, insured contractor with specific experience in home additions in Tampa Bay. Ask for references from recent addition projects, verify their license with the Florida Department of Business and Professional Regulation, and get at least three detailed quotes." },
      { heading: "Step 5: Design for Seamless Integration", body: "The best home additions look like they were always part of the original home. This means matching exterior materials, rooflines, window styles, and interior finishes. Work with your contractor to ensure the addition integrates seamlessly with your existing home rather than looking like an afterthought." },
      { heading: "Step 6: Plan for the Construction Process", body: "Home additions typically take 3-6 months to complete, depending on size and complexity. During construction, you'll need to plan for some disruption to your daily routine, particularly if the addition connects to heavily used areas of your home. Your contractor should provide a detailed project schedule and keep you informed throughout." },
      { heading: "Start Planning Your Tampa Bay Home Addition", body: "Hawley Construction Co. has extensive experience building home additions throughout Tampa, St. Petersburg, Clearwater, Bradenton, Sarasota, and Tarpon Springs. Contact us today for a free consultation and let us help you plan the perfect addition for your home." },
    ],
  },
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const post = blogPosts.find((p) => p.slug === slug);
  const content = articleContent[slug];

  if (!post || !content) {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Article Not Found
          </h1>
          <Link href="/blog" className="btn-gold inline-block" style={{ borderRadius: "2px" }}>
            View All Articles
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide mb-6"
            style={{ color: "oklch(0.64 0.055 230)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <ArrowLeft size={13} /> All Articles
          </Link>
          <div className="max-w-3xl">
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-3 inline-block"
              style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {post.category}
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
            >
              {post.title}
            </h1>
            <div
              className="flex items-center gap-4 text-sm mb-8"
              style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="flex items-center gap-1"><Calendar size={13} />{post.date}</span>
              <span className="flex items-center gap-1"><Clock size={13} />{post.readTime}</span>
              <span>Hawley Construction Co.</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden" style={{ borderRadius: "2px" }}>
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              {content.sections.map((section, i) => (
                <div key={i} className="mb-6">
                  {section.heading && (
                    <h2
                      className="text-2xl font-bold mb-3"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
                    >
                      {section.heading}
                    </h2>
                  )}
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "oklch(0.45 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {section.body}
                  </p>
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* CTA */}
              <div
                className="p-8 mb-8 text-white"
                style={{ backgroundColor: "oklch(0.18 0.008 250)", borderRadius: "2px" }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Ready to Start Your Project?
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "oklch(0.7 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Contact Hawley Construction Co. for a free, no-obligation estimate. Serving Tampa Bay since 2019.
                </p>
                <Link
                  href="/contact"
                  className="btn-gold block text-center mb-3"
                  style={{ borderRadius: "2px" }}
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:7046191480"
                  className="flex items-center justify-center gap-2 text-sm font-semibold"
                  style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Phone size={14} />
                  704-619-1480
                </a>
              </div>

              {/* Related Posts */}
              <div>
                <h3
                  className="text-lg font-bold mb-5"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
                >
                  Related Articles
                </h3>
                <div className="flex flex-col gap-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="flex gap-3 group"
                    >
                      <div className="w-20 h-16 flex-shrink-0 overflow-hidden" style={{ borderRadius: "2px" }}>
                        <img
                          src={related.img}
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <p
                          className="text-sm font-medium leading-snug group-hover:text-steel transition-colors"
                          style={{ color: "oklch(0.22 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {related.title}
                        </p>
                        <p
                          className="text-xs mt-1"
                          style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {related.readTime}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
