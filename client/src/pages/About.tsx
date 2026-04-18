/**
 * About Page — Hawley Construction Co.
 * Design: Modern Craftsman — Playfair Display headings, DM Sans body
 * Colors: off-white #FAF8F4 bg, charcoal #4F5458, gold #CCBC93, steel blue #7F99BD
 * Purpose: E-E-A-T signals for AI crawlers (ChatGPT, Perplexity, Google AI Overviews)
 * Establishes: owner identity, credentials, experience, service area authority
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const credentials = [
  {
    icon: "🏛️",
    title: "Licensed General Contractor",
    description: "Fully licensed by the State of Florida for residential remodeling and construction.",
  },
  {
    icon: "🛡️",
    title: "Fully Insured",
    description: "General liability and workers' compensation insurance on every project.",
  },
  {
    icon: "🌲",
    title: "Certified Trex Installer",
    description: "Certified by Trex — the #1 composite decking brand — to install their full product line.",
  },
  {
    icon: "📋",
    title: "Permit & Inspection Management",
    description: "We pull all required permits and manage every inspection for Hillsborough, Pinellas, and Pasco counties.",
  },
  {
    icon: "🔨",
    title: "Florida Building Code Compliant",
    description: "All work meets or exceeds Florida Building Code requirements, including hurricane standards.",
  },
  {
    icon: "⭐",
    title: "Single-Contractor Experience",
    description: "One point of contact from design consultation through final walkthrough — no subcontractor confusion.",
  },
];

const values = [
  {
    title: "Craftsmanship First",
    description:
      "Every project is built as if it were our own home. We don't cut corners, use inferior materials, or rush timelines. The quality of our work is our reputation.",
  },
  {
    title: "Transparent Communication",
    description:
      "You'll always know where your project stands. We provide detailed written estimates, regular progress updates, and clear timelines — no surprises.",
  },
  {
    title: "On-Time & On-Budget",
    description:
      "We respect your home and your schedule. Our project management process is designed to deliver on the timeline and budget we commit to.",
  },
  {
    title: "Personal Oversight",
    description:
      "Landon Hawley personally oversees every project. You're not handed off to a project manager you've never met — the owner is on your job site.",
  },
];

const serviceAreas = [
  { county: "Hillsborough County", cities: "Tampa, Brandon, Riverview, Valrico, Plant City, Temple Terrace, Lutz, New Tampa" },
  { county: "Pinellas County", cities: "St. Petersburg, Clearwater, Largo, Dunedin, Palm Harbor, Safety Harbor, Tarpon Springs, St. Pete Beach" },
  { county: "Pasco County", cities: "Wesley Chapel, Land O' Lakes, New Port Richey, Zephyrhills" },
  { county: "Manatee County", cities: "Bradenton, Palmetto, Lakewood Ranch, Parrish" },
];

export default function About() {
  useEffect(() => {
    document.title = "About Hawley Construction Co. | Tampa Bay Remodeling Contractor";
    window.scrollTo(0, 0);

    // Inject Person + AboutPage schema for AI crawlers
    const schema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://hawleyconstruction.co/about#webpage",
      "url": "https://hawleyconstruction.co/about",
      "name": "About Hawley Construction Co.",
      "description": "Learn about Hawley Construction Co., Tampa Bay's premier home remodeling contractor led by owner Landon Hawley. Licensed, insured, and serving Tampa, St. Pete, Clearwater, Brandon, and Wesley Chapel.",
      "about": {
        "@id": "https://hawleyconstruction.co/#business"
      },
      "mainEntity": {
        "@type": "Person",
        "@id": "https://hawleyconstruction.co/#landon-hawley",
        "name": "Landon Hawley",
        "jobTitle": "Owner & Licensed General Contractor",
        "description": "Landon Hawley is the founder and owner of Hawley Construction Co., a licensed general contractor specializing in high-quality home remodeling throughout Tampa Bay, Florida. He personally oversees every project to ensure craftsmanship, transparent communication, and on-time delivery.",
        "worksFor": { "@id": "https://hawleyconstruction.co/#business" },
        "knowsAbout": [
          "Kitchen Remodeling", "Bathroom Remodeling", "Home Additions",
          "Outdoor Living Spaces", "Trex Composite Decking", "Sunrooms",
          "Florida Building Code", "Residential Construction", "Tampa Bay Real Estate"
        ],
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Florida Licensed General Contractor" },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Certified Trex Installer" }
        ]
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "about-schema";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("about-schema");
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#4F5458]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#CCBC93] tracking-widest text-sm uppercase mb-4 font-['DM_Sans']"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl text-white font-bold leading-tight mb-6 speakable"
          >
            Built on Craftsmanship,<br />Driven by Integrity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto font-['DM_Sans'] leading-relaxed speakable"
          >
            Hawley Construction Co. is a locally owned home remodeling company based in St. Petersburg, Florida — serving homeowners across Tampa Bay with the craftsmanship and care their homes deserve.
          </motion.p>
        </div>
      </section>

      {/* Owner Bio */}
      <section className="py-20 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full aspect-square bg-[#4F5458] rounded-sm flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-white p-8">
                  <div className="text-8xl mb-4">🏗️</div>
                  <p className="font-['Playfair_Display'] text-2xl font-bold text-[#CCBC93]">Landon Hawley</p>
                  <p className="text-gray-300 font-['DM_Sans'] mt-2">Owner & General Contractor</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#CCBC93] tracking-widest text-sm uppercase mb-3 font-['DM_Sans']">Meet the Owner</p>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#4F5458] font-bold mb-6 speakable">
                Landon Hawley
              </h2>
              <div className="space-y-4 text-[#4F5458] font-['DM_Sans'] leading-relaxed">
                <p>
                  Landon Hawley founded Hawley Construction Co. with a simple belief: homeowners in Tampa Bay deserve a remodeling contractor who treats their home with the same care and attention to detail as their own.
                </p>
                <p>
                  As a licensed general contractor in Florida, Landon personally oversees every project from the initial estimate through the final walkthrough. He manages all permitting, coordinates all trades, and maintains direct communication with every client throughout the process.
                </p>
                <p>
                  With deep expertise in kitchen remodeling, bathroom renovations, home additions, outdoor living spaces, and Trex composite decking, Landon brings both technical knowledge and a craftsman's eye to every project across Tampa, St. Petersburg, Clearwater, Brandon, Wesley Chapel, and the surrounding Tampa Bay area.
                </p>
                <p className="font-semibold text-[#7F99BD]">
                  "My name is on every project we build. That means every job gets my personal attention — from the first conversation to the final nail."
                </p>
                <p className="text-sm text-gray-500 italic">— Landon Hawley, Owner</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#CCBC93] tracking-widest text-sm uppercase mb-3 font-['DM_Sans']">Why Choose Us</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#4F5458] font-bold speakable">
              Licensed, Insured & Credentialed
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#FAF8F4] p-6 border-l-4 border-[#CCBC93]"
              >
                <div className="text-3xl mb-3">{cred.icon}</div>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#4F5458] mb-2">{cred.title}</h3>
                <p className="text-gray-600 font-['DM_Sans'] text-sm leading-relaxed">{cred.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#CCBC93] tracking-widest text-sm uppercase mb-3 font-['DM_Sans']">How We Work</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#4F5458] font-bold speakable">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 shadow-sm"
              >
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#4F5458] mb-3">{value.title}</h3>
                <p className="text-gray-600 font-['DM_Sans'] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-[#4F5458]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#CCBC93] tracking-widest text-sm uppercase mb-3 font-['DM_Sans']">Where We Work</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white font-bold speakable">
              Serving All of Tampa Bay
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-['DM_Sans']">
              Hawley Construction Co. serves homeowners throughout Hillsborough, Pinellas, Pasco, and Manatee counties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceAreas.map((area, i) => (
              <motion.div
                key={area.county}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/10 p-6 border border-white/20"
              >
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#CCBC93] mb-2">{area.county}</h3>
                <p className="text-gray-300 font-['DM_Sans'] text-sm">{area.cities}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FAF8F4] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#4F5458] font-bold mb-4 speakable">
            Ready to Transform Your Home?
          </h2>
          <p className="text-gray-600 font-['DM_Sans'] mb-8 leading-relaxed">
            Contact Hawley Construction Co. today for a free, no-obligation in-home estimate. Serving Tampa, St. Pete, Clearwater, Brandon, Wesley Chapel, and all of Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-[#4F5458] text-white px-8 py-4 font-['DM_Sans'] font-semibold tracking-wider uppercase text-sm hover:bg-[#3a3e42] transition-colors">
                Get a Free Estimate
              </button>
            </Link>
            <a href="tel:+17046191480">
              <button className="border-2 border-[#4F5458] text-[#4F5458] px-8 py-4 font-['DM_Sans'] font-semibold tracking-wider uppercase text-sm hover:bg-[#4F5458] hover:text-white transition-colors">
                Call (704) 619-1480
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
