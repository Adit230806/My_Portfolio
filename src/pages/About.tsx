import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";

const steps = [
  { num: "01", title: "Research", desc: "Deep understanding of context, culture, and climate" },
  { num: "02", title: "Collaboration", desc: "Close partnership with clients, engineers, and craftspeople" },
  { num: "03", title: "Innovation", desc: "Sustainable materials and forward-thinking design solutions" },
];

const AboutPage = () => {
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
            <span className="text-minimal text-primary mb-4 block">ABOUT</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6">
              Design Philosophy
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We believe architecture should enhance human experience while respecting
                the natural environment. Our practice focuses on creating spaces that
                are both functional and poetic.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Founded in 2015, our studio has completed over 200 projects across
                residential, commercial, and cultural sectors.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                <div>
                  <span className="text-4xl font-display text-primary">200+</span>
                  <p className="text-minimal text-muted-foreground mt-2">PROJECTS</p>
                </div>
                <div>
                  <span className="text-4xl font-display text-primary">2015</span>
                  <p className="text-minimal text-muted-foreground mt-2">FOUNDED</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-0">
              <h3 className="text-minimal text-muted-foreground mb-6">APPROACH</h3>
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="group border-t border-border py-8 flex items-start gap-6 hover:bg-accent/20 transition-colors duration-300 px-4 -mx-4 rounded-sm"
                >
                  <span className="text-minimal text-primary font-semibold mt-1">{step.num}</span>
                  <div>
                    <h4 className="text-xl font-display text-foreground mb-1">{step.title}</h4>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
