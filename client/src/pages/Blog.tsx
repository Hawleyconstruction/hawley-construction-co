/**
 * Blog Page — SEO-optimized articles for Tampa Bay construction topics
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "/images/projects/kitchen/kitchen-02.jpg"; // white shaker cabinets, marble quartz island, wood base
const BATHROOM_IMG = "/images/projects/bathroom/bathroom-01.jpg"; // blue marble walk-in shower, light-blue double vanity
const OUTDOOR_IMG = "/images/projects/outdoor-living/outdoor-fireplace-lounge-01.jpg"; // covered outdoor room with gas fireplace, ceiling fan, TV
const SUNROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-sunroom-screened-TouYoyDabjd4tNaeYJgTRx.webp"; // sunroom — no real photo yet
const HOME_ADDITION_IMG = "/images/projects/additions/addition-02.jpg"; // aerial view of home addition with screened porch and deck
const TREX_DECK_IMG = "/images/projects/decks/trex-deck-01.jpg"; // elevated multi-level Trex composite deck with aluminum railing

export const blogPosts = [
  {
    slug: "top-kitchen-remodeling-trends-tampa",
    title: "Top Kitchen Remodeling Trends in Tampa for 2025",
    excerpt: "Discover the most sought-after kitchen design trends transforming Tampa Bay homes — from waterfall islands and two-tone cabinetry to smart appliances and bold backsplashes.",
    img: HERO_IMG,
    date: "March 15, 2025",
    readTime: "6 min read",
    category: "Kitchen Remodeling",
  },
  {
    slug: "bathroom-remodel-cost-tampa",
    title: "How Much Does a Bathroom Remodel Cost in Tampa?",
    excerpt: "A detailed breakdown of bathroom remodeling costs in the Tampa Bay area — from budget refreshes to full luxury renovations — so you can plan your project with confidence.",
    img: BATHROOM_IMG,
    date: "February 28, 2025",
    readTime: "8 min read",
    category: "Bathroom Remodeling",
  },
  {
    slug: "benefits-sunroom-florida",
    title: "Benefits of Adding a Sunroom to Your Florida Home",
    excerpt: "Why a sunroom addition is one of the smartest investments a Florida homeowner can make — from year-round enjoyment to increased home value and energy efficiency.",
    img: SUNROOM_IMG,
    date: "February 10, 2025",
    readTime: "5 min read",
    category: "Sunrooms",
  },
  {
    slug: "trex-deck-vs-wood-deck",
    title: "Trex Deck vs. Wood Deck: Which is Better for Florida?",
    excerpt: "An honest comparison of composite Trex decking versus traditional wood decking for Tampa Bay homeowners — covering cost, maintenance, durability, and aesthetics.",
    img: TREX_DECK_IMG,
    date: "January 22, 2025",
    readTime: "7 min read",
    category: "Outdoor Living",
  },
  {
    slug: "plan-home-addition-tampa-bay",
    title: "How to Plan a Home Addition in Tampa Bay",
    excerpt: "A step-by-step guide to planning a successful home addition in Tampa Bay — from setting your budget and choosing a contractor to navigating permits and managing the build.",
    img: HOME_ADDITION_IMG,
    date: "January 8, 2025",
    readTime: "9 min read",
    category: "Home Additions",
  },
];

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  useEffect(() => {
    document.title = 'Home Remodeling Blog Tampa Bay | Tips & Trends | Hawley Construction';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Expert home remodeling tips, cost guides, and design trends for Tampa Bay homeowners. Kitchen remodeling, bathroom renovation, Trex decks, sunrooms & more from Hawley Construction Co.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://hawleyremodeling.com/blog');
    return () => {
      document.title = 'Hawley Construction Co. | Tampa Bay Remodeling';
      if (canonical) canonical.setAttribute('href', 'https://hawleyremodeling.com');
    };
  }, []);

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
            Resources & Insights
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Hawley Blog
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "oklch(0.75 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Expert advice, remodeling tips, and inspiration for Tampa Bay homeowners planning their next project.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white shadow-sm overflow-hidden"
            style={{ borderRadius: "2px" }}
          >
            <div className="img-zoom overflow-hidden h-72 lg:h-auto">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                width="1600"
                height="1066"
                loading="eager"
              />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1"
                  style={{
                    backgroundColor: "oklch(0.77 0.065 82 / 0.15)",
                    color: "oklch(0.6 0.06 82)",
                    fontFamily: "'DM Sans', sans-serif",
                    borderRadius: "2px",
                  }}
                >
                  {featured.category}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Featured
                </span>
              </div>
              <h2
                className="text-3xl font-bold mb-4 group-hover:text-steel transition-colors"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
              >
                {featured.title}
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "oklch(0.5 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center gap-4 text-xs"
                  style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="flex items-center gap-1"><Calendar size={12} />{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                </div>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "oklch(0.64 0.055 230)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Read Article <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Other Posts */}
      <section className="pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white shadow-sm overflow-hidden"
                style={{ borderRadius: "2px" }}
              >
                <div className="img-zoom h-52 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                    width="1600"
                    height="1066"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest mb-3 inline-block"
                    style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {post.category}
                  </span>
                  <h3
                    className="text-xl font-bold mb-3 group-hover:text-steel transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "oklch(0.5 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    className="flex items-center justify-between text-xs"
                    style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                    </span>
                    <span
                      className="inline-flex items-center gap-1 font-semibold uppercase tracking-wide"
                      style={{ color: "oklch(0.64 0.055 230)" }}
                    >
                      Read <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
