import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const certifications = [
    {
      image: "/images/cert-1.png",
      title: "AI Fluency Framework & Foundations",
      issuer: "Anthropic",
      category: "AI FRAMEWORKS",
      year: "2024",
      description: "Comprehensive understanding of AI fluency frameworks and foundational concepts for building AI-ready organizations.",
      url: "/Certificates/AI Fluency Framework & Foundations.pdf",
    },
    {
      image: "/images/cert-2.png",
      title: "Claude 101",
      issuer: "Anthropic",
      category: "AI TOOLS",
      year: "2024",
      description: "Hands-on proficiency with Claude AI — prompt engineering, use-case design, and responsible AI interaction.",
      url: "/Certificates/Claude 101.pdf",
    },
    {
      image: "/images/cert-3.png",
      title: "AI Fluency for Students",
      issuer: "Anthropic",
      category: "LEARNING",
      year: "2024",
      description: "Applied AI literacy for academic contexts, covering ethical use, critical thinking, and productivity with AI tools.",
      url: "/Certificates/AI Fluency for students.pdf",
    },
    {
      image: "/images/cert-4.png",
      title: "AI Fluency for Nonprofits",
      issuer: "Anthropic",
      category: "SOCIAL IMPACT",
      year: "2024",
      description: "Leveraging AI to amplify nonprofit missions — automation, outreach, and impact-driven workflows.",
      url: "/Certificates/AI Fluency for nonprofits.pdf",
    },
  ];

  const categories = ["ALL", "AI FRAMEWORKS", "AI TOOLS", "LEARNING", "SOCIAL IMPACT"];
  const filtered =
    activeCategory === "ALL"
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navigation />

      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="container mx-auto" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-minimal text-primary mb-4 block">ACHIEVEMENTS</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6">
              My Certifications
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              A curated collection of certifications reflecting my commitment to continuous learning and AI fluency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-16 px-6 lg:px-12">
        <div className="container mx-auto flex flex-wrap gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-minimal transition-colors duration-300 pb-1 border-b ${
                activeCategory === cat
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Certification Cards */}
      <section className="pb-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {filtered.map((cert, i) => (
              <motion.div
                key={`${cert.title}-${activeCategory}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => window.open(cert.url, "_blank")}
              >
                <div className="relative overflow-hidden rounded-sm mb-6">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-[50vh] object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-500 flex items-end p-6">
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                      <span className="text-minimal text-primary">{cert.category}</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{cert.description}</p>
                <div className="flex gap-6 text-minimal text-muted-foreground">
                  <span>{cert.issuer}, {cert.year}</span>
                  <span>{cert.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-8">
            Ready to Start<span className="text-primary">?</span>
          </h2>
          <Link
            to="/contact"
            className="magnetic-btn inline-flex items-center gap-2 px-8 py-4 border border-primary rounded-full text-primary text-minimal hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            GET IN TOUCH <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Work;
