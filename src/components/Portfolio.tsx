import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    image: "/images/cert-1.png",
    title: "AI Fluency Framework & Foundations",
    category: "AI FRAMEWORKS",
    year: "2024",
    span: "md:col-span-2 md:row-span-2",
    url: "/Certificates/AI Fluency Framework & Foundations.pdf"
  },
  {
    image: "/images/cert-2.png",
    title: "Claude 101",
    category: "AI TOOLS",
    year: "2024",
    span: "md:col-span-1 md:row-span-1",
    url: "/Certificates/Claude 101.pdf"
  },
  {
    image: "/images/cert-3.png",
    title: "AI Fluency for Students",
    category: "LEARNING",
    year: "2024",
    span: "md:col-span-1 md:row-span-1",
    url: "/Certificates/AI Fluency for students.pdf"
  },
  {
    image: "/images/cert-4.png",
    title: "AI Fluency for Nonprofits",
    category: "SOCIAL IMPACT",
    year: "2024",
    span: "md:col-span-3 md:row-span-1",
    url: "/Certificates/AI Fluency for nonprofits.pdf"
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleClick = () => {
    if (project.url) {
      window.open(project.url, '_blank');
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-sm cursor-pointer ${project.span}`}
      onClick={handleClick}
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
            <h3 className="font-display text-2xl md:text-3xl text-foreground italic">{project.title}</h3>
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
    <section id="certificates" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-minimal text-primary mb-4 block tracking-[0.3em]">ACHIEVEMENTS</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground">
            My Certificates
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
