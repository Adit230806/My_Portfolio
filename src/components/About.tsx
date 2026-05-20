import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "2024 – 2028", title: "B.Tech in ENTC", desc: "MIT Academy of Engineering" },
  { num: "2025", title: "IBM Cybersecurity Internship", desc: "Learning experience" },
  { num: "2025", title: "Cisco Cybersecurity Internship", desc: "Learning experience" },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Warm radial glow */}
      <div className="absolute inset-0 bg-gradient-warm pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Sticky Heading */}
          <div className="md:sticky md:top-32 md:self-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-minimal text-primary mb-4 block">ABOUT ME</span>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-8">
                Engineering meets
                <br />
                Innovation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                I'm a second-year B.Tech Electronics and Telecommunication student at MIT Academy of Engineering, graduating in 2028. My passion sits at the intersection of hardware and intelligent software.

                From building AI-driven anomaly detectors to designing pH sensor circuits, I love blending electronics with cutting-edge machine learning and data science to create meaningful solutions.
              </p>

            </motion.div>
          </div>

          {/* Right — Scrolling Steps */}
          <div className="space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              My academic journey and hands-on experience reflect my passion for cybersecurity, embedded systems, and intelligent software. I continuously explore real-world applications through internships and projects.
            </motion.p>

            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="group border-t border-border py-8 flex items-start gap-6 hover:bg-accent/30 transition-colors duration-300 px-4 -mx-4 rounded-sm"
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
      </div>
    </section>
  );
};

export default About;
