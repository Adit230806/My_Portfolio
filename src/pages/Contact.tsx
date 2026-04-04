import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Instagram, Linkedin, Globe, ArrowUpRight } from "lucide-react";

const ContactPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navigation />

      <section className="pt-40 pb-32 px-6 lg:px-12" ref={ref}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <span className="text-minimal text-primary mb-4 block">GET IN TOUCH</span>
            <h1
              className="font-display font-bold text-foreground leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              Let’s Build
              <br />
              Something Meaningful<span className="text-primary">.</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-minimal text-muted-foreground mb-3">EMAIL</h3>
                <a href="mailto:hello@archstudio.com" className="text-xl text-foreground hover:text-primary transition-colors story-link">
                  adityapadamwar08@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-minimal text-muted-foreground mb-3">PHONE</h3>
                <a href="tel:+1234567890" className="text-xl text-foreground hover:text-primary transition-colors">
                  +91 8625035895
                </a>
              </div>
              <div>
                <h3 className="text-minimal text-muted-foreground mb-3">STUDIO</h3>
                <address className="text-xl text-foreground not-italic">
                  Pune, Maharashtra, India
                </address>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-minimal text-muted-foreground mb-4">FOLLOW</h3>
                <div className="space-y-4">
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
                      <span>{label}</span>
                      <ArrowUpRight size={12} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground leading-relaxed">
                  I approach every project with a focus on performance, clean design, and seamless interaction. My goal is to transform ideas into fast, responsive, and visually engaging digital experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
