import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Home, Building2, Hammer, Lightbulb } from "lucide-react";

const services = [
  { icon: Home, number: "01", title: "Programming", description: "Building efficient and scalable solutions using Python, C, and C++ with a strong focus on logic and performance." },
  { icon: Building2, number: "02", title: "Technologies", description: "Working with modern technologies including Machine Learning, Data Science, and Web Development to create intelligent and interactive systems." },
  { icon: Hammer, number: "03", title: "Tools", description: "Utilizing tools like MATLAB, Multisim, and Proteus for simulation, analysis, and embedded system design." },
  { icon: Lightbulb, number: "04", title: "Problem Solving", description: "Applying analytical thinking and structured approaches to break down complex problems and deliver effective solutions." },
];

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-minimal text-primary mb-4 block">SKILLS</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground">
            What I Work With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group border-t border-border py-10 flex items-start gap-6 hover:bg-accent/20 transition-colors duration-300 px-4 -mx-4 rounded-sm"
            >
              <service.icon size={24} className="text-primary mt-1 shrink-0" />
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-minimal text-muted-foreground">{service.number}</span>
                  <h4 className="text-xl font-display text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
