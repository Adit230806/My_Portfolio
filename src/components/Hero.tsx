import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat ken-burns"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </div>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Warm orange glow */}
      <div className="absolute inset-0 bg-gradient-warm opacity-60" />

      {/* Content */}
      <div className="relative z-10 w-full pb-24 md:pb-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 80, skewY: 3 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-foreground leading-[0.85] tracking-tighter"
            style={{ fontSize: "clamp(3rem, 15vw, 12rem)" }}
          >
            MINIMAL
            <br />
            <span className="text-primary">ARCH</span>ITECTURE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-muted-foreground text-lg md:text-xl max-w-lg font-light tracking-wide"
          >
            Creating spaces that inspire through thoughtful design and uncompromising quality
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-pulse"
      >
        <span className="text-minimal text-muted-foreground">SCROLL</span>
        <ChevronDown size={16} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
