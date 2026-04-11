/**
 * ServiceDetail Page — Individual service deep-dive
 * SEO-optimized with keyword-rich content per service
 */
import { useParams, Link } from "wouter";
import { CheckCircle2, Phone, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-kitchen-mSpoc3xtKks8iMHpTCvAxs.webp";
const BATHROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-bathroom-KW8hCkNSxN2cYTrJakvzLS.webp";
const OUTDOOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-outdoor-living-new-hVfbb6yZQe8ungx9xcEYX8.webp";
const SUNROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-home-addition-new-7k7PkNkc4ssP8WLmYJpDD9.webp";

const serviceData: Record<string, {
  title: string; tagline: string; img: string; metaDesc: string;
  intro: string; body: string; benefits: string[]; cta: string;
}> = {
  "kitchen-remodeling": {
    title: "Kitchen Remodeling in Tampa Bay",
    tagline: "Tampa Bay's Premier Kitchen Remodeling Contractor",
    img: HERO_IMG,
    metaDesc: "Expert kitchen remodeling in Tampa, St. Petersburg, Clearwater & surrounding areas. Custom cabinets, quartz countertops, islands & more. Free estimates.",
    intro: "A beautifully remodeled kitchen is one of the highest-return investments you can make in your Tampa Bay home. At Hawley Construction Co., we specialize in transforming outdated kitchens into stunning, functional spaces that reflect your personal style and the way your family lives.",
    body: "From custom cabinetry and quartz waterfall islands to professional-grade appliances and designer backsplashes, our kitchen remodeling team handles every detail with precision. We serve homeowners throughout Tampa, St. Petersburg, Clearwater, Bradenton, and Sarasota.\n\nOur process begins with a thorough design consultation where we learn about your lifestyle, aesthetic preferences, and budget. We then create a detailed plan that maximizes your kitchen's potential — whether that means opening up a wall for an open-concept layout, adding an island, or completely reconfiguring the space.\n\nEvery kitchen remodel we complete is backed by our commitment to quality materials, experienced craftsmanship, and transparent communication throughout the entire project.",
    benefits: ["Custom semi-custom & full-custom cabinetry", "Quartz, granite & marble countertops", "Waterfall island design", "Herringbone & subway tile backsplashes", "Under-cabinet & pendant lighting", "Wide-plank hardwood & LVP flooring", "Appliance selection & installation", "Plumbing & electrical upgrades"],
    cta: "Ready to transform your Tampa Bay kitchen? Contact Hawley Construction Co. for a free, no-obligation estimate.",
  },
  "bathroom-remodeling": {
    title: "Bathroom Remodeling in Tampa Bay",
    tagline: "Luxury Bathroom Renovations Across Tampa Bay",
    img: BATHROOM_IMG,
    metaDesc: "Premium bathroom remodeling in Tampa, Clearwater, St. Petersburg & surrounding areas. Walk-in showers, custom vanities, spa bathrooms. Free estimates.",
    intro: "Your bathroom should be a sanctuary — a place to start and end your day in comfort and style. Hawley Construction Co. delivers luxury bathroom remodels throughout Tampa Bay that transform ordinary bathrooms into spa-like retreats.",
    body: "Whether you're dreaming of a freestanding soaking tub, a frameless glass walk-in shower with rainfall showerhead, or a custom floating vanity with backlit mirror, our team has the expertise to bring your vision to life.\n\nWe work with homeowners in Tampa, St. Petersburg, Clearwater, Bradenton, Tarpon Springs, and Sarasota to create bathrooms that combine beautiful design with lasting quality. Our tile setters, plumbers, and finish carpenters work in coordination to deliver a seamless, stress-free remodeling experience.\n\nFrom master bathroom renovations to guest bath updates and powder room refreshes, no project is too large or too small for the Hawley Construction team.",
    benefits: ["Walk-in shower design & installation", "Freestanding & alcove tub installation", "Custom vanities & floating cabinets", "Large-format porcelain & marble tile", "Heated floor systems", "Frameless glass shower enclosures", "Rainfall & body spray systems", "Backlit mirror & vanity lighting"],
    cta: "Transform your Tampa Bay bathroom into a luxury retreat. Contact us for a free estimate today.",
  },
  "home-additions": {
    title: "Home Additions in Tampa Bay",
    tagline: "Expand Your Home, Expand Your Life",
    img: SUNROOM_IMG,
    metaDesc: "Custom home additions in Tampa, St. Petersburg, Clearwater & surrounding areas. Master suites, in-law suites, room additions. Licensed & insured. Free estimates.",
    intro: "When your family grows or your needs change, a thoughtfully designed home addition is the smartest investment you can make. Hawley Construction Co. builds seamless home additions throughout Tampa Bay that feel like they were always part of your home.",
    body: "Our home addition services cover everything from master suite additions and in-law suites to family room expansions and second-story additions. We handle the entire process — from architectural planning and permit acquisition to framing, roofing, insulation, and interior finishing.\n\nEvery addition we build is designed to match your existing home's architecture, materials, and style. We work with structural engineers when needed and coordinate all inspections to ensure your addition meets Florida building codes.\n\nServing homeowners in Tampa, St. Petersburg, Clearwater, Bradenton, Sarasota, and Tarpon Springs, we bring the same level of craftsmanship and attention to detail to every project, regardless of size.",
    benefits: ["Master suite & bedroom additions", "In-law suite & guest room additions", "Family room & living space expansions", "Second-story additions", "Garage conversions to living space", "Permit acquisition & management", "Architectural coordination", "Seamless exterior matching"],
    cta: "Need more space? Contact Hawley Construction Co. for a free home addition consultation in Tampa Bay.",
  },
  "full-home-remodels": {
    title: "Full Home Remodels in Tampa Bay",
    tagline: "Complete Home Transformations",
    img: HERO_IMG,
    metaDesc: "Full home remodeling services in Tampa Bay. Complete interior renovations, open-concept conversions, whole-home updates. Licensed contractor. Free estimates.",
    intro: "Sometimes a single room update isn't enough — you need a complete home transformation. Hawley Construction Co. manages full home remodels from start to finish, coordinating every trade and delivering a cohesive, beautifully finished result.",
    body: "Our full home remodel services are ideal for homeowners who have purchased an older home and want to modernize it, or for those who are ready to completely reimagine their current space. We handle open-concept conversions, whole-home flooring and paint, kitchen and bathroom remodels, electrical and plumbing upgrades, and structural modifications.\n\nAs your single point of contact, we manage the entire project timeline, coordinate all subcontractors, and keep you informed at every step. Our goal is to make the remodeling process as smooth and stress-free as possible while delivering results that exceed your expectations.",
    benefits: ["Complete project management", "Open-concept floor plan conversions", "Whole-home flooring installation", "Full kitchen & bathroom remodels", "Electrical & plumbing system upgrades", "Interior painting & trim work", "Structural wall removal", "Permit coordination"],
    cta: "Ready for a complete home transformation? Contact Hawley Construction Co. for a free consultation.",
  },
  "sunrooms": {
    title: "Sunrooms in Tampa Bay",
    tagline: "Florida Living, Year-Round",
    img: SUNROOM_IMG,
    metaDesc: "Custom sunroom additions in Tampa, St. Petersburg, Clearwater & surrounding areas. Energy-efficient glass rooms, Florida rooms, three-season rooms. Free estimates.",
    intro: "Florida's sunshine is one of its greatest gifts — and a custom sunroom lets you enjoy it 365 days a year. Hawley Construction Co. designs and builds beautiful sunrooms throughout Tampa Bay that seamlessly connect your indoor and outdoor living spaces.",
    body: "Our sunrooms are engineered for Florida's climate, featuring energy-efficient glass systems that keep you cool in summer and comfortable year-round. Whether you want a bright reading room, a home office with a view, or a casual family gathering space, we'll design a sunroom that perfectly fits your home and lifestyle.\n\nWe handle all aspects of the sunroom addition — from foundation work and framing to glass installation, electrical, flooring, and finishing. Our team manages all permits and inspections, ensuring your new sunroom meets Florida building codes and is built to last.",
    benefits: ["Energy-efficient glass systems", "Year-round climate comfort", "Custom flooring options", "Electrical & lighting installation", "Permit handling included", "Seamless home integration", "Multiple glass & frame styles", "Screen room options available"],
    cta: "Bring the Florida sunshine indoors. Contact Hawley Construction Co. for a free sunroom estimate.",
  },
  "outdoor-living": {
    title: "Outdoor Living Spaces in Tampa Bay",
    tagline: "The Ultimate Florida Outdoor Experience",
    img: OUTDOOR_IMG,
    metaDesc: "Custom outdoor living spaces in Tampa, St. Petersburg, Clearwater & surrounding areas. Pergolas, outdoor kitchens, fire pits, screen enclosures. Free estimates.",
    intro: "Florida's climate is made for outdoor living — and Hawley Construction Co. builds the outdoor spaces that make the most of it. From covered pergolas and outdoor kitchens to fire pits and screen enclosures, we create complete outdoor environments that become the heart of your home.",
    body: "Our outdoor living projects are designed to extend your usable living space beyond your walls, creating areas that are perfect for entertaining, relaxing, and enjoying the Florida lifestyle. We work with homeowners throughout Tampa, St. Petersburg, Clearwater, Bradenton, Sarasota, and Tarpon Springs to design and build outdoor spaces that are as beautiful as they are functional.\n\nEvery outdoor living project includes careful planning for drainage, electrical, and structural integrity to ensure your investment looks great and performs well for years to come.",
    benefits: ["Custom pergola & shade structures", "Outdoor kitchens & grilling stations", "Fire pits & seating walls", "Screen enclosures & pool cages", "Landscape lighting integration", "Drainage & grading solutions", "Outdoor audio & TV installation", "Seamless indoor-outdoor flow"],
    cta: "Create your dream outdoor living space. Contact Hawley Construction Co. for a free estimate.",
  },
  "patios": {
    title: "Patio Installation in Tampa Bay",
    tagline: "Beautiful Patios Built to Last",
    img: OUTDOOR_IMG,
    metaDesc: "Professional patio installation in Tampa, St. Petersburg, Clearwater & surrounding areas. Pavers, stamped concrete, natural stone. Licensed contractor. Free estimates.",
    intro: "A beautifully designed patio is the foundation of any great outdoor space. Hawley Construction Co. installs premium patios throughout Tampa Bay using pavers, natural stone, stamped concrete, and porcelain tile that are built to withstand Florida's climate.",
    body: "Our patio installations are designed to complement your home's architecture and create a seamless transition from indoors to outdoors. We handle all aspects of the project — from site preparation and drainage to material selection, installation, and finishing.\n\nWhether you're looking for a simple backyard patio, a multi-level entertaining space, or a pool deck renovation, our team has the experience and expertise to deliver a result you'll love.",
    benefits: ["Paver & natural stone installation", "Stamped & decorative concrete", "Porcelain tile outdoor installation", "Proper drainage & grading", "Covered patio structures", "Pool deck installation & renovation", "Lighting integration", "Seating wall construction"],
    cta: "Ready to upgrade your outdoor space? Contact Hawley Construction Co. for a free patio estimate.",
  },
  "windows-doors": {
    title: "Windows & Doors in Tampa Bay",
    tagline: "Impact Protection, Beautiful Design",
    img: SUNROOM_IMG,
    metaDesc: "Impact-rated windows and doors installation in Tampa, St. Petersburg, Clearwater & surrounding areas. Hurricane protection, energy efficiency. Free estimates.",
    intro: "New windows and doors are one of the most impactful upgrades you can make to your Tampa Bay home — improving energy efficiency, storm protection, curb appeal, and home value all at once. Hawley Construction Co. installs premium impact-rated windows and doors throughout the Tampa Bay area.",
    body: "Florida homeowners face unique challenges when it comes to windows and doors — from hurricane-force winds to intense UV exposure and humidity. Our impact-rated products are engineered to meet these challenges while providing beautiful aesthetics and superior energy performance.\n\nWe work with leading manufacturers to offer a wide range of styles, finishes, and configurations to match your home's architecture and your personal taste. All installations are performed by our experienced team and meet Florida building codes.",
    benefits: ["Impact-rated hurricane windows", "Energy Star certified products", "Sliding glass & French doors", "Entry door replacement", "Improved natural light & ventilation", "UV protection & glare reduction", "Increased home value", "Permit coordination"],
    cta: "Protect and beautify your home. Contact Hawley Construction Co. for a free windows & doors estimate.",
  },
  "custom-cabinetry": {
    title: "Custom Cabinetry in Tampa Bay",
    tagline: "Crafted to Fit Your Life, Perfectly",
    img: HERO_IMG,
    metaDesc: "Custom cabinetry in Tampa, St. Petersburg, Clearwater & surrounding areas. Kitchen cabinets, bathroom vanities, built-ins. Premium quality. Free estimates.",
    intro: "Custom cabinetry is the detail that separates a good remodel from an exceptional one. At Hawley Construction Co., our craftsmen build cabinets to your exact specifications — for kitchens, bathrooms, home offices, laundry rooms, and more.",
    body: "Unlike stock or semi-custom cabinets, our fully custom cabinetry is built to fit your space perfectly, maximizing every inch of storage while delivering furniture-grade quality and finish. We offer a wide range of door styles, finishes, hardware, and organizational accessories to create a truly personalized result.\n\nFrom shaker-style kitchen cabinets with soft-close drawers to floating bathroom vanities and built-in home office systems, our cabinetry is built to last and designed to impress.",
    benefits: ["Full custom sizing & configuration", "Soft-close hinges & drawer systems", "Wide range of finishes & door styles", "Built-in organizational accessories", "Furniture-grade quality construction", "Kitchen, bath & built-in applications", "Premium hardware selection", "Matching trim & millwork"],
    cta: "Elevate your home with custom cabinetry. Contact Hawley Construction Co. for a free consultation.",
  },
  "trex-decks": {
    title: "Trex Deck Installation in Tampa Bay",
    tagline: "The Gold Standard in Composite Decking",
    img: OUTDOOR_IMG,
    metaDesc: "Certified Trex deck installation in Tampa, St. Petersburg, Clearwater & surrounding areas. Low-maintenance composite decking with 25-year warranty. Free estimates.",
    intro: "Trex composite decking is the gold standard for Florida homeowners who want the beauty of a real wood deck without the maintenance. As certified Trex installers, Hawley Construction Co. builds stunning composite decks throughout Tampa Bay that are built to last.",
    body: "Florida's climate is hard on traditional wood decks — the heat, humidity, and UV exposure cause warping, cracking, fading, and rot. Trex composite decking is engineered to resist all of these issues, maintaining its beauty year after year with minimal maintenance.\n\nOur Trex deck installations are designed to maximize your outdoor living space and complement your home's architecture. We handle everything from design and permitting to framing, decking installation, and railing systems. Every deck we build is backed by Trex's industry-leading 25-year warranty.",
    benefits: ["Certified Trex installation", "25-year fade & stain warranty", "No painting, staining, or sealing required", "Slip-resistant surface texture", "Eco-friendly recycled materials", "Wide range of colors & finishes", "Custom railing systems", "Permit coordination"],
    cta: "Build the deck of your dreams. Contact Hawley Construction Co. for a free Trex deck estimate in Tampa Bay.",
  },
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Service Not Found
          </h1>
          <Link href="/services" className="btn-gold inline-block" style={{ borderRadius: "2px" }}>
            View All Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "oklch(0.18 0.008 250)" }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${service.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide mb-6"
            style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <ArrowLeft size={13} /> All Services
          </Link>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "oklch(0.77 0.065 82)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {service.tagline}
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {service.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="img-zoom overflow-hidden mb-10" style={{ borderRadius: "2px" }}>
                <img src={service.img} alt={service.title} className="w-full h-80 object-cover" />
              </div>
              <p
                className="text-xl leading-relaxed mb-6 font-medium"
                style={{ color: "oklch(0.35 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {service.intro}
              </p>
              {service.body.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "oklch(0.5 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Benefits */}
              <div className="bg-white p-8 mb-6 shadow-sm" style={{ borderRadius: "2px" }}>
                <span className="section-divider" />
                <h3
                  className="text-xl font-bold mb-5"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
                >
                  What's Included
                </h3>
                <ul className="flex flex-col gap-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.77 0.065 82)" }} />
                      <span className="text-sm" style={{ color: "oklch(0.35 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div
                className="p-8 text-white"
                style={{ backgroundColor: "oklch(0.18 0.008 250)", borderRadius: "2px" }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Ready to Get Started?
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "oklch(0.7 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {service.cta}
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
