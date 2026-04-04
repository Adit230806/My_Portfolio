import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const projects = [
    { image: "/projects/project-1.jpg", title: "Minimal Residence", location: "New York", category: "RESIDENTIAL", area: "450 SQM", year: "2024", description: "A contemporary home focusing on light, space, and material honesty." },
    { image: "/projects/project-2.jpg", title: "Corporate HQ", location: "London", category: "COMMERCIAL", area: "1200 SQM", year: "2023", description: "Modern office space emphasizing collaboration and natural elements." },
    { image: "/projects/project-3.jpg", title: "Cultural Center", location: "Tokyo", category: "CULTURAL", area: "800 SQM", year: "2023", description: "Public architecture that bridges tradition with contemporary design." },
    { image: "/projects/project-1.jpg", title: "Urban Loft", location: "Berlin", category: "RESIDENTIAL", area: "180 SQM", year: "2024", description: "Industrial heritage meets contemporary living." },
    { image: "/projects/project-2.jpg", title: "Gallery Space", location: "Paris", category: "CULTURAL", area: "600 SQM", year: "2022", description: "Minimalist gallery designed to showcase art without distraction." },
    { image: "/projects/project-3.jpg", title: "Boutique Hotel", location: "Milan", category: "HOSPITALITY", area: "2400 SQM", year: "2023", description: "Luxury hospitality redefined through architectural restraint." },
  ];

  const categories = ["ALL", "RESIDENTIAL", "COMMERCIAL", "CULTURAL", "HOSPITALITY"];
  const filtered = activeCategory === "ALL" ? projects : projects.filter(p => p.category === activeCategory);

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
            <span className="text-minimal text-primary mb-4 block">PORTFOLIO</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6">Our Work</h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              A curated selection of architectural projects, each telling a unique story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-16 px-6 lg:px-12">
        <div className="container mx-auto flex flex-wrap gap-6">
          {categories.map(cat => (
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

      {/* Projects */}
      <section className="pb-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {filtered.map((project, i) => (
              <motion.div
                key={`${project.title}-${activeCategory}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-sm mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-[50vh] object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-500 flex items-end p-6">
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                      <span className="text-minimal text-primary">{project.category}</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex gap-6 text-minimal text-muted-foreground">
                  <span>{project.location}, {project.year}</span>
                  <span>{project.area}</span>
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
