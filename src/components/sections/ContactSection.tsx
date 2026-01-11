import { motion } from "framer-motion";
import { RevealSection } from "@/components/ui/reveal-section";
import { TechLabel } from "@/components/ui/tech-label";
import { AnimatedDivider } from "@/components/ui/animated-divider";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-section bg-secondary/30 relative">
      {/* Architectural lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-0 left-0 right-0 h-px bg-border origin-left"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {/* Left - Intro */}
          <div>
            <RevealSection>
              <TechLabel>Contacto</TechLabel>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mt-4 leading-[1.1]">
                Iniciá una
                <br />
                Conversación
              </h2>
            </RevealSection>

            <AnimatedDivider className="my-6 md:my-8" />

            <RevealSection delay={200}>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
                Tomamos un número limitado de proyectos cada trimestre para asegurar
                enfoque profundo y resultados excepcionales. Contanos sobre tu desafío.
              </p>
            </RevealSection>

            <RevealSection delay={300}>
              <div className="mt-8 md:mt-12 space-y-4">
                <div>
                  <TechLabel>Email</TechLabel>
                  <a
                    href="mailto:hello@kirv.io"
                    className="block font-display text-base md:text-lg text-foreground hover:text-muted-foreground transition-colors duration-medium mt-1"
                  >
                    hello@kirv.io
                  </a>
                </div>
                <div>
                  <TechLabel>Ubicación</TechLabel>
                  <p className="font-display text-base md:text-lg text-foreground mt-1">
                    Remote-First / San Miguel de Tucumán
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Right - Form */}
          <RevealSection delay={200} direction="right">
            <form className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block">
                    <TechLabel>Nombre</TechLabel>
                    <input
                      type="text"
                      className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-medium"
                      placeholder="Tu nombre"
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <TechLabel>Email</TechLabel>
                    <input
                      type="email"
                      className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-medium"
                      placeholder="tu@empresa.com"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block">
                  <TechLabel>Empresa</TechLabel>
                  <input
                    type="text"
                    className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-medium"
                    placeholder="Nombre de la empresa"
                  />
                </label>
              </div>

              <div>
                <label className="block">
                  <TechLabel>Detalles del Proyecto</TechLabel>
                  <textarea
                    rows={4}
                    className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-medium resize-none"
                    placeholder="Describí tu proyecto o desafío..."
                  />
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto mt-2 md:mt-4 inline-flex items-center justify-center gap-3 md:gap-4 font-mono text-xs md:text-sm uppercase tracking-[0.15em] text-primary-foreground bg-primary px-6 md:px-8 py-3 md:py-4 hover:bg-primary/90 transition-colors duration-medium"
              >
                <span>Enviar Mensaje</span>
                <span className="w-4 h-px bg-current" />
              </motion.button>
            </form>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
