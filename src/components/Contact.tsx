import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Globe, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-32 bg-card overflow-hidden">
      {/* Warm glow */}
      <div className="absolute inset-0 bg-gradient-warm pointer-events-none opacity-40" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Massive CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-minimal text-primary mb-6 block">GET IN TOUCH</span>
          <h2
            className="font-display font-bold text-foreground leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 10vw, 8rem)" }}
          >
            Let's Build
            <br />
            Something<span className="text-primary">.</span>
          </h2>
          <Link
            to="/contact"
            className="magnetic-btn inline-flex items-center gap-3 mt-10 px-8 py-4 border border-primary rounded-full text-primary text-minimal hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            LET'S CONNECT
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        {/* Footer Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-12 pt-12 border-t border-border"
        >
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-minimal text-muted-foreground mb-4">CONTACT</h4>
            <a href="mailto:hello@archstudio.com" className="block text-foreground hover:text-primary transition-colors story-link">
              adityapadamwar08@gmail.com
            </a>
            <a href="tel:+1234567890" className="block text-foreground hover:text-primary transition-colors">
              +91 8625035895
            </a>
            <address className="text-muted-foreground not-italic text-sm mt-4">
              Pune, Maharashtra, India
            </address>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-minimal text-muted-foreground mb-4">FOLLOW</h4>
            <div className="space-y-3">
              {[
                { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/adiii_2308?igsh=MXAzc3psaGpjemx3Mw%3D%3D&utm_source=qr" },
                { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/aditya-padamwar" },
                { icon: Globe, label: "GitHub", link: "https://github.com/Adit230806" },
              ].map(({ icon: Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <Icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="flex md:justify-end items-end">
            <button
              onClick={scrollToTop}
              className="magnetic-btn flex items-center gap-2 text-minimal text-muted-foreground hover:text-primary transition-colors"
            >
              BACK TO TOP
              <ArrowUp size={14} />
            </button>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-sm text-muted-foreground">
            ADITYA PADAMWAR<span className="text-primary">.</span> © {new Date().getFullYear()}
          </span>
          <span className="text-minimal text-muted-foreground">
            ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
