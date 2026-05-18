/**
 * ServiceDetail Page — Individual service deep-dive
 * SEO-optimized with keyword-rich content per service + FAQ schema for AI search
 */
import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { CheckCircle2, Phone, ArrowLeft, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-kitchen-mSpoc3xtKks8iMHpTCvAxs.webp";
const BATHROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-hero-bathroom-KW8hCkNSxN2cYTrJakvzLS.webp";
const OUTDOOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-outdoor-living-new-hVfbb6yZQe8ungx9xcEYX8.webp";
const SUNROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-sunroom-screened-TouYoyDabjd4tNaeYJgTRx.webp";
const HOME_ADDITION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-home-addition-new-7k7PkNkc4ssP8WLmYJpDD9.webp";
const TREX_DECK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/hawley-trex-deck-2uwLnSueruCa29BoSx4nDJ.webp";

// Before/After gallery data per service
const galleryData: Record<string, { before: string; after: string; caption: string }[]> = {
  "kitchen-remodeling": [
    { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/kitchen-before-gnpMvGCrqpA7wDknZQaauG.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/kitchen-after-hsVXguHfNLPDyGVXHRHCyx.webp", caption: "Full kitchen remodel — St. Petersburg, FL" },
  ],
  "bathroom-remodeling": [
    { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/bathroom-before-dZMyaaPMs3Qj2DwkGzszKr.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/bathroom-after-mFZsTRAQ7UMXN2JYfxu5Qy.webp", caption: "Master bathroom renovation — Tampa, FL" },
  ],
  "home-additions": [
    { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/addition-before-YQsLXFf8Tjvsq3mHHYdcNE.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/addition-after-ZJvFkDUDfMRPEBB8XzEDFv.webp", caption: "Master suite addition — Clearwater, FL" },
  ],
  "full-home-remodels": [
    { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/remodel-before-LZT6cJbDV5Gbr9iEzvyULB.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/remodel-after-HirftJZMhQXYSKovsunpEJ.webp", caption: "Open-concept conversion — Bradenton, FL" },
  ],
  "sunrooms": [
    { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/sunroom-before-DQF6ERgpuLb4xYYCEANWAu.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/sunroom-after-c5igWFwkXMiTD7G7dExTJ2.webp", caption: "Four-season sunroom — Sarasota, FL" },
  ],
  "outdoor-living": [
    { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/outdoor-before-Eh4Hc6m3UPYnyNDaDXQ9ot.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/outdoor-after-RFc2rKVehVEWPV5GpcVQEW.webp", caption: "Outdoor living space — Wesley Chapel, FL" },
  ],
  "patios": [
    { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/patio-before-e4kVYp9T3SGjUR9o3dUSjW.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/patio-after-h7cpoG8DbswTBZpi7g8JDx.webp", caption: "Paver patio installation — Tarpon Springs, FL" },
  ],
  "windows-doors": [
    { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/windows-before-2k6UndGC9ZVFnmopH6Mn6o.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/windows-after-HxmvFRS7Fp89og6X5bEH94.webp", caption: "Impact window & door replacement — St. Petersburg, FL" },
  ],
  "custom-cabinetry": [
    { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/cabinetry-before-iuT49PM63oDBRbeWBRtgXo.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/cabinetry-after-k8HhBRBtCkgj4z34VvF6gu.webp", caption: "Custom cabinetry — Tampa, FL" },
  ],
  "trex-decks": [
    { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/deck-before-fYQaEnjbn7XaRr2zAGXYsZ.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540279873/mqBaZEe8cowVKqLebSdcGQ/deck-after-fHq2VWgfu4bzQ7nx4A2z86.webp", caption: "Trex composite deck — Clearwater, FL" },
  ],
};

// FAQ data for AI search optimization (FAQ schema injected per page)
const faqData: Record<string, { q: string; a: string }[]> = {
  "kitchen-remodeling": [
    { q: "How much does a kitchen remodel cost in Tampa Bay?", a: "Kitchen remodel costs in Tampa Bay typically range from $25,000 to $100,000+ depending on the scope, materials, and size of the kitchen. A mid-range kitchen remodel averages $40,000–$65,000, while a full luxury remodel with custom cabinetry and high-end appliances can exceed $100,000. Hawley Construction Co. provides free, detailed estimates tailored to your specific project." },
    { q: "How long does a kitchen remodel take in Tampa?", a: "A typical kitchen remodel in Tampa Bay takes 4–8 weeks from demolition to completion, depending on the scope of work. Projects involving structural changes, custom cabinetry, or special-order materials may take longer. We provide a detailed project timeline before work begins." },
    { q: "Do I need a permit for a kitchen remodel in Florida?", a: "In Florida, permits are required for kitchen remodels that involve electrical, plumbing, or structural changes. Hawley Construction Co. handles all permit applications and inspections as part of our service, so you don't have to worry about compliance." },
    { q: "What is the best countertop material for a Tampa Bay kitchen?", a: "Quartz is the most popular countertop choice for Tampa Bay kitchens because it resists heat, stains, and humidity better than natural stone. Granite is also an excellent choice for its durability and natural beauty. We help homeowners select the best material for their lifestyle and budget during our design consultation." },
  ],
  "bathroom-remodeling": [
    { q: "How much does a bathroom remodel cost in Tampa Bay?", a: "Bathroom remodel costs in Tampa Bay range from $10,000 for a basic guest bath update to $50,000+ for a full master bathroom renovation with luxury finishes. The average master bath remodel runs $20,000–$35,000. We provide free estimates with transparent, itemized pricing." },
    { q: "How long does a bathroom renovation take?", a: "A standard bathroom remodel typically takes 2–4 weeks. A full master bathroom renovation with custom tile, new plumbing fixtures, and custom vanity can take 4–6 weeks. We keep you informed of the timeline throughout the project." },
    { q: "Can you convert a tub to a walk-in shower in Tampa?", a: "Yes — tub-to-shower conversions are one of our most popular bathroom remodeling services in Tampa Bay. We handle all plumbing modifications, waterproofing, tile installation, and glass enclosure installation. This is a great way to modernize your bathroom and add value to your home." },
    { q: "What tile is best for a Florida bathroom?", a: "Large-format porcelain tile is the top choice for Florida bathrooms because it resists humidity, is easy to clean, and creates a seamless, spa-like look. Marble-look porcelain is extremely popular in Tampa Bay for its luxury appearance without the maintenance of real stone." },
  ],
  "home-additions": [
    { q: "How much does a home addition cost in Tampa Bay?", a: "Home addition costs in Tampa Bay typically range from $150 to $300+ per square foot, depending on the complexity of the addition, materials, and finishes. A 400 sq ft master suite addition might cost $80,000–$120,000. Hawley Construction Co. provides free, detailed estimates for all home addition projects." },
    { q: "Do I need a permit for a home addition in Florida?", a: "Yes — all home additions in Florida require building permits. Hawley Construction Co. handles the entire permit process, including architectural plans, permit applications, and all required inspections, so you can focus on enjoying your new space." },
    { q: "How long does a home addition take to build?", a: "A typical home addition takes 3–6 months from permit approval to completion, depending on size and complexity. Second-story additions and larger projects may take longer. We provide a detailed project schedule before construction begins." },
    { q: "Will a home addition match the rest of my house?", a: "Absolutely. Matching your existing home's architecture, roofline, exterior materials, and interior finishes is a top priority for every addition we build. We carefully select materials and details that make the addition look like it was always part of the original home." },
  ],
  "full-home-remodels": [
    { q: "How much does a full home remodel cost in Tampa Bay?", a: "Full home remodel costs in Tampa Bay vary widely based on the size of the home and scope of work. Most whole-home renovations range from $100,000 to $400,000+. We provide a detailed, room-by-room estimate after an initial consultation and walkthrough." },
    { q: "How long does a full home remodel take?", a: "A full home remodel typically takes 4–12 months depending on the scope of work. We develop a detailed project schedule and keep you informed of progress throughout the renovation." },
    { q: "Can I live in my home during a full remodel?", a: "This depends on the scope of the project. For phased remodels, we often structure the work so you can remain in the home. For extensive renovations involving the kitchen, multiple bathrooms, or structural work, temporary relocation may be more comfortable. We discuss this during the planning phase." },
    { q: "Do you handle open-concept conversions in Tampa Bay homes?", a: "Yes — open-concept conversions are one of our most requested full-home remodel services. We handle structural assessments, load-bearing wall removal, beam installation, and all finishing work to create a seamless open floor plan." },
  ],
  "sunrooms": [
    { q: "How much does a sunroom cost in Tampa Bay?", a: "Sunroom additions in Tampa Bay typically cost between $30,000 and $80,000 depending on size, glass system, and finishes. A basic three-season room starts around $25,000, while a fully climate-controlled four-season sunroom with premium glass can exceed $80,000. We provide free estimates." },
    { q: "Do sunrooms add value to a home in Florida?", a: "Yes — sunrooms are one of the best home additions for Florida properties. They add usable square footage, enhance indoor-outdoor living, and typically return 50–70% of their cost in added home value. In Tampa Bay's competitive real estate market, a well-built sunroom is a strong selling point." },
    { q: "Do I need a permit for a sunroom in Florida?", a: "Yes — sunroom additions require building permits in Florida. Hawley Construction Co. manages the entire permit process, including structural engineering if required, permit applications, and all inspections." },
    { q: "What is the difference between a sunroom and a Florida room?", a: "A Florida room (also called a screen room or lanai) is typically screened rather than fully enclosed with glass. A sunroom uses glass walls and roof panels to create a fully enclosed, climate-controlled space. Hawley Construction Co. builds both, and we help you choose the right option for your lifestyle and budget." },
  ],
  "outdoor-living": [
    { q: "How much does an outdoor living space cost in Tampa Bay?", a: "Outdoor living space projects in Tampa Bay range from $15,000 for a basic covered patio to $80,000+ for a full outdoor kitchen, pergola, fire pit, and entertainment area. The average outdoor living project runs $25,000–$50,000. We provide free, detailed estimates." },
    { q: "What is the best material for an outdoor kitchen in Florida?", a: "Stainless steel appliances and concrete block or stone construction are the best choices for outdoor kitchens in Florida due to their resistance to heat, humidity, and salt air. We design outdoor kitchens that are built to withstand Florida's climate while looking beautiful year-round." },
    { q: "Do I need a permit for a pergola or outdoor kitchen in Florida?", a: "Permits are typically required for permanent structures like pergolas, covered patios, and outdoor kitchens in Florida. Hawley Construction Co. handles all permitting as part of our outdoor living projects." },
    { q: "How do I maintain an outdoor living space in Tampa Bay?", a: "Florida's heat and humidity require some specific maintenance. We recommend annual sealing of natural stone and pavers, regular cleaning of outdoor kitchen appliances, and periodic inspection of electrical connections. We provide maintenance guidance for every project we complete." },
  ],
  "patios": [
    { q: "How much does a patio cost in Tampa Bay?", a: "Patio installation costs in Tampa Bay range from $8,000 to $40,000+ depending on size, materials, and complexity. A basic paver patio averages $12,000–$20,000, while a multi-level patio with built-in features can cost significantly more. We provide free estimates." },
    { q: "What is the best patio material for Florida?", a: "Concrete pavers and porcelain tile are the most popular patio materials in Tampa Bay because they handle heat, humidity, and rain well. Travertine is also popular for its natural beauty and cool surface temperature underfoot. We help you select the best material for your project." },
    { q: "How long does patio installation take?", a: "A standard patio installation takes 1–2 weeks depending on size and complexity. Projects involving excavation, drainage work, or large-format tile may take longer. We provide a detailed timeline before work begins." },
    { q: "Do I need a permit for a patio in Florida?", a: "Permits are required for some patio projects in Florida, particularly those involving covered structures or significant grading. Hawley Construction Co. determines permit requirements and handles all applications as part of our service." },
  ],
  "windows-doors": [
    { q: "How much do impact windows cost in Tampa Bay?", a: "Impact window replacement in Tampa Bay typically costs $800–$1,500 per window installed, depending on size and style. A full home window replacement averages $15,000–$40,000. The investment pays off through lower insurance premiums, improved energy efficiency, and hurricane protection." },
    { q: "Are impact windows required in Tampa Bay?", a: "Florida building codes require impact-rated or protected windows in new construction and major renovations in wind-borne debris regions, which includes most of Tampa Bay. Even if not required, impact windows are strongly recommended for hurricane protection and can significantly reduce homeowner's insurance premiums." },
    { q: "How long does window replacement take?", a: "Most window replacement projects take 1–3 days for a standard home. Larger homes or projects involving custom-sized windows may take longer. We work efficiently to minimize disruption to your daily routine." },
    { q: "Do impact windows reduce energy bills in Florida?", a: "Yes — impact windows with Low-E glass coatings significantly reduce heat gain, which is the primary driver of cooling costs in Florida. Most Tampa Bay homeowners see a noticeable reduction in their electric bills after impact window installation." },
  ],
  "custom-cabinetry": [
    { q: "How much does custom cabinetry cost in Tampa Bay?", a: "Custom cabinetry in Tampa Bay typically costs $500–$1,500+ per linear foot installed, depending on materials, finishes, and complexity. A full custom kitchen cabinet installation averages $25,000–$60,000. We provide detailed estimates based on your specific design." },
    { q: "What is the difference between custom and semi-custom cabinets?", a: "Custom cabinets are built to your exact specifications — any size, any configuration, any finish. Semi-custom cabinets are factory-built in standard sizes with limited customization options. Custom cabinetry maximizes your space, lasts longer, and delivers a truly unique result." },
    { q: "How long does custom cabinetry take to build and install?", a: "Custom cabinetry typically takes 6–10 weeks from design approval to installation. This includes fabrication time and finishing. We coordinate the installation with the rest of your remodel timeline to keep the project on schedule." },
    { q: "What wood species are best for kitchen cabinets in Florida?", a: "Maple and cherry are popular choices for Tampa Bay kitchens because they are stable in Florida's humidity. Painted MDF cabinets are also excellent for humid environments as they resist warping better than solid wood. We recommend the best materials based on your kitchen's conditions." },
  ],
  "trex-decks": [
    { q: "How much does a Trex deck cost in Tampa Bay?", a: "Trex composite deck installation in Tampa Bay typically costs $35–$60 per square foot installed, including framing, decking, and railing. A 400 sq ft deck averages $14,000–$24,000. While the upfront cost is higher than pressure-treated wood, Trex requires virtually no maintenance and carries a 25-year warranty." },
    { q: "Why choose Trex over wood decking in Florida?", a: "Florida's climate is hard on traditional wood decks — the heat, humidity, UV exposure, and termites cause warping, cracking, fading, and rot. Trex composite decking resists all of these issues — it won't warp, crack, splinter, rot, or fade. It never needs painting, staining, or sealing, making it the ideal low-maintenance choice for Tampa Bay homeowners." },
    { q: "How long does Trex deck installation take?", a: "A standard Trex deck installation takes 1–2 weeks depending on size and complexity. Projects requiring permits, complex framing, or custom features may take longer. We handle all permitting and provide a detailed project timeline." },
    { q: "Does Trex decking get hot in Florida sun?", a: "Trex decking does absorb heat in direct sunlight, as does any dark-colored surface. However, Trex's newer product lines are engineered with heat-dispersing technology that keeps surface temperatures more comfortable than older composite products. Choosing lighter colors and adding shade structures can also significantly reduce surface temperature." },
  ],
};

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
    img: HOME_ADDITION_IMG,
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
    img: TREX_DECK_IMG,
    metaDesc: "Certified Trex deck installation in Tampa, St. Petersburg, Clearwater & surrounding areas. Low-maintenance composite decking with 25-year warranty. Free estimates.",
    intro: "Trex composite decking is the gold standard for Florida homeowners who want the beauty of a real wood deck without the maintenance. As certified Trex installers, Hawley Construction Co. builds stunning composite decks throughout Tampa Bay that are built to last.",
    body: "Florida's climate is hard on traditional wood decks — the heat, humidity, and UV exposure cause warping, cracking, fading, and rot. Trex composite decking is engineered to resist all of these issues, maintaining its beauty year after year with minimal maintenance.\n\nOur Trex deck installations are designed to maximize your outdoor living space and complement your home's architecture. We handle everything from design and permitting to framing, decking installation, and railing systems. Every deck we build is backed by Trex's industry-leading 25-year warranty.",
    benefits: ["Certified Trex installation", "25-year fade & stain warranty", "No painting, staining, or sealing required", "Slip-resistant surface texture", "Eco-friendly recycled materials", "Wide range of colors & finishes", "Custom railing systems", "Permit coordination"],
    cta: "Build the deck of your dreams. Contact Hawley Construction Co. for a free Trex deck estimate in Tampa Bay.",
  },
};

// Before/After Slider component for service pages
function BeforeAfterSlider({ item }: { item: { before: string; after: string; caption: string } }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(x);
  };

  return (
    <div>
      <div
        className="relative overflow-hidden cursor-col-resize select-none"
        style={{ borderRadius: "2px", aspectRatio: "4/3" }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleMove}
      >
        <img
          src={item.after}
          alt={`After - ${item.caption}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
          <img
            src={item.before}
            alt={`Before - ${item.caption}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ minWidth: "100%", width: `${10000 / sliderPos}%`, maxWidth: "none" }}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L3 10L7 16" stroke="oklch(0.22 0.01 250)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 4L17 10L13 16" stroke="oklch(0.22 0.01 250)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div
          className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white z-10"
          style={{ backgroundColor: "oklch(0.35 0.01 250 / 0.8)", borderRadius: "2px", fontFamily: "'DM Sans', sans-serif" }}
        >
          Before
        </div>
        <div
          className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white z-10"
          style={{ backgroundColor: "oklch(0.55 0.065 82 / 0.9)", borderRadius: "2px", fontFamily: "'DM Sans', sans-serif" }}
        >
          After
        </div>
      </div>
      <p
        className="mt-2 text-sm font-medium"
        style={{ color: "oklch(0.4 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
      >
        {item.caption}
      </p>
    </div>
  );
}

// FAQ Accordion component
function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="mt-12">
      <span className="section-divider" />
      <h2
        className="text-2xl font-bold mb-6"
        style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 250)" }}
      >
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border bg-white overflow-hidden"
            style={{ borderColor: "oklch(0.88 0.005 250)", borderRadius: "2px" }}
          >
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span
                className="font-semibold text-sm leading-snug"
                style={{ color: "oklch(0.22 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {faq.q}
              </span>
              <ChevronDown
                size={16}
                className="flex-shrink-0 transition-transform duration-200"
                style={{
                  color: "oklch(0.55 0.065 82)",
                  transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            {openIndex === i && (
              <div
                className="px-5 pb-4 text-sm leading-relaxed"
                style={{ color: "oklch(0.5 0.01 250)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const service = serviceData[slug];
  const faqs = faqData[slug] || [];
  const gallery = galleryData[slug] || [];

  // Inject FAQ schema + Service schema for AI search engines + set page title/meta
  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Hawley Construction Co.`;
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', service.metaDesc);
      // Update canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `https://hawleyconstruction.co/services/${slug}`);
      // Inject Service schema
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.intro,
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Hawley Construction Co.",
          "telephone": "+17046191480",
          "url": "https://hawleyconstruction.co"
        },
        "areaServed": ["Tampa", "St. Petersburg", "Clearwater", "Brandon", "Wesley Chapel", "Bradenton", "Sarasota"],
        "url": `https://hawleyconstruction.co/services/${slug}`
      };
      const existingService = document.getElementById('service-schema');
      if (existingService) existingService.remove();
      const serviceScript = document.createElement('script');
      serviceScript.id = 'service-schema';
      serviceScript.type = 'application/ld+json';
      serviceScript.text = JSON.stringify(serviceSchema);
      document.head.appendChild(serviceScript);
    }
    if (faqs.length > 0) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      };
      const existing = document.getElementById("faq-schema");
      if (existing) existing.remove();
      const script = document.createElement("script");
      script.id = "faq-schema";
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    return () => {
      const existing = document.getElementById("faq-schema");
      if (existing) existing.remove();
      const existingSvc = document.getElementById('service-schema');
      if (existingSvc) existingSvc.remove();
      // Reset title and canonical
      document.title = 'Hawley Construction Co. | Tampa Bay Remodeling';
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', 'https://hawleyconstruction.co');
    };
  }, [slug]);

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
              {faqs.length > 0 && <FaqAccordion faqs={faqs} />}
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
