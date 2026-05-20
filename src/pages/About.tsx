import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";

const steps = [
  { num: "01", title: "Problem Solving", desc: "Understanding user needs and breaking down complex problems into simple solutions." },
  { num: "02", title: "Development", desc: "Building fast, functional, and visually engaging digital experiences." },
  { num: "03", title: "Optimization", desc: "Continuously improving performance, scalability, and user experience." },
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
              How I Work
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I design and build digital experiences that are fast, functional,
                and visually engaging. My focus is on creating clean interfaces and
                smooth user interactions that feel intuitive and modern.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                I have worked on a range of projects, from small personal websites to
                large-scale applications, and I am always eager to take on new challenges.
              </p>

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
