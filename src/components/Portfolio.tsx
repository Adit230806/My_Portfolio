import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { image: project1, title: "Minimal Residence", category: "RESIDENTIAL", year: "2024", span: "md:col-span-2 md:row-span-2" },
  { image: project2, title: "Corporate HQ", category: "COMMERCIAL", year: "2023", span: "md:col-span-1 md:row-span-1" },
  { image: project3, title: "Cultural Center", category: "CULTURAL", year: "2023", span: "md:col-span-1 md:row-span-1" },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-sm ${project.span}`}
    >
      <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-end p-6 md:p-8">
          <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-minimal text-primary">{project.category}</span>
              <span className="text-minimal text-muted-foreground">{project.year}</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground">{project.title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-minimal text-primary mb-4 block">SELECTED WORK</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground">
            Our Projects
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
