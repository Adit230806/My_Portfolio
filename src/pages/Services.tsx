import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Home, Building2, Hammer, Lightbulb } from "lucide-react";

const services = [
  { icon: Home, number: "01", title: "Programming", description: "Building efficient and scalable solutions using Python, C, and C++ with a strong focus on logic and performance." },
  { icon: Building2, number: "02", title: "Technologies", description: "Working with modern technologies including Machine Learning, Data Science, and Web Development to create intelligent and interactive systems." },
  { icon: Hammer, number: "03", title: "Tools", description: "Utilizing tools like MATLAB, Multisim, and Proteus for simulation, analysis, and embedded system design." },
  { icon: Lightbulb, number: "04", title: "Problem Solving", description: "Applying analytical thinking and structured approaches to break down complex problems and deliver effective solutions." },
];

const ServicesPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navigation />

      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-minimal text-primary mb-4 block">WHAT I WORK WITH</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6">Skills</h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Comprehensive architectural services from concept through completion.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid gap-0">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group border-t border-border py-12 md:py-16 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 hover:bg-accent/20 transition-colors duration-300 px-6 -mx-6 rounded-sm"
              >
                <div className="flex items-center gap-4 md:w-48 shrink-0">
                  <service.icon size={28} className="text-primary" />
                  <span className="text-minimal text-muted-foreground">{service.number}</span>
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
