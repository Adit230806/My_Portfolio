import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const categories = ["ALL", "SUSTAINABILITY", "DESIGN", "URBAN PLANNING"];
  const filtered = activeCategory === "ALL"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navigation />

      <section className="pt-40 pb-20 px-6 lg:px-12" ref={ref}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-minimal text-primary mb-4 block">JOURNAL</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6">Insights</h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Exploring the intersection of architecture, design, and human experience.
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

      {/* Posts Grid */}
      <section className="pb-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="relative overflow-hidden rounded-sm mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-64 object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="text-minimal bg-background/80 backdrop-blur-sm px-3 py-1 text-primary rounded-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-minimal text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="font-display text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">Stay Informed</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">Subscribe for the latest insights on architecture and design</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-minimal rounded-sm">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
