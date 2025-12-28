import { motion } from "framer-motion";
import { TechLabel } from "@/components/ui/tech-label";
import { AnimatedDivider } from "@/components/ui/animated-divider";
import { useParallax } from "@/hooks/useParallax";

export function HeroSection() {
  const parallaxOffset = useParallax(0.3);

  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-24 md:pt-32 overflow-hidden bg-background">
      {/* Grid Background */}
      <div
        className="absolute inset-0 grid-overlay opacity-20 md:opacity-30 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      />

      {/* Architectural Lines - Hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="absolute left-[10%] top-0 w-px h-full bg-border origin-top"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute right-[10%] top-0 w-px h-full bg-border origin-top"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="absolute left-0 top-[30%] w-full h-px bg-border origin-left"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <TechLabel>Estudio de Ingeniería</TechLabel>
          </motion.div>

          <AnimatedDivider className="my-8" delay={400} />

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-foreground leading-[0.95]"
          >
            Sistemas precisos
            <br />
            <span className="text-muted-foreground">para problemas complejos</span>
          </motion.h1>

          <AnimatedDivider className="my-6 md:my-8" delay={600} />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl font-light leading-relaxed"
          >
            Somos ingenieros construyendo infraestructura de software fundamental.
            Metodología rigurosa. Resultados medibles.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 md:gap-4 font-mono text-xs md:text-sm uppercase tracking-[0.15em] text-foreground"
            >
              <span>Ver Trabajo</span>
              <span className="w-8 md:w-12 h-px bg-foreground transition-all duration-medium group-hover:w-16 md:group-hover:w-20" />
            </a>
            <a
              href="#contact"
              className="font-mono text-xs md:text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-medium"
            >
              Contacto
            </a>
          </motion.div>
        </div>

        {/* Bottom Corner Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bottom-24 right-6 lg:right-12 text-right hidden md:block"
        >
          <TechLabel>Est. 2025</TechLabel>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            Fundado por Ingenieros
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          {/* Vertical Line */}
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-muted-foreground" />

          {/* Chevron Arrow */}
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            className="text-muted-foreground"
          >
            <path
              d="M1 1L8 8L15 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
