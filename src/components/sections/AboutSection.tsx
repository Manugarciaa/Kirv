import { motion } from "framer-motion";
import { RevealSection } from "@/components/ui/reveal-section";
import { TechLabel } from "@/components/ui/tech-label";
import { AnimatedDivider } from "@/components/ui/animated-divider";

const principles = [
  {
    number: "I",
    title: "Entender primero",
    description: "Escuchamos, preguntamos y analizamos antes de proponer cualquier solución.",
  },
  {
    number: "II",
    title: "Simplificamos el Ruido",
    description: "Buscamos simplicidad. Si algo puede hacerse más claro, lo hacemos.",
  },
  {
    number: "III",
    title: "Diseñamos sistemas que se usan, se mantienen y se mejoran con el tiempo.",
    description: "Si no puedes medirlo, no puedes mejorarlo. La telemetría es ciudadana de primera clase.",
  },
];

const stats = [
  { value: "3", label: "Ingenieros en el Equipo" },
  { value: "100%", label: "Enfoque en Calidad" },
  { value: "∞", label: "Desafíos Aceptados" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-section relative">
      {/* Background grid accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full grid-overlay opacity-20 pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <RevealSection>
              <TechLabel>Nosotros</TechLabel>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground mt-4 mb-6 md:mb-8">
                Fundado por
                <br />
                Ingenieros
              </h2>
            </RevealSection>

            <AnimatedDivider className="mb-6 md:mb-8" />

            <RevealSection delay={200}>
              <div className="space-y-4 md:space-y-6">
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Somos tres ingenieros informáticos unidos por la pasión de tratar con
                  problemas complejos y resolverlos bien.
                  Trabajamos combinando el ingenio, diseño y criterio con un toque de creatividad.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                   Nos tomamos el tiempo de entender antes de construir
                    y preferimos soluciones simples que se puedan sostener en el tiempo.
                </p>
              </div>
            </RevealSection>

            {/* Stats */}
            <RevealSection delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mt-8 md:mt-12 pt-8 md:pt-12 border-t border-border">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <div className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-foreground">
                      {stat.value}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </RevealSection>
          </div>

          {/* Right Column - Principles */}
          <div className="lg:pl-12 lg:border-l border-border">
            <RevealSection>
              <TechLabel>Principios</TechLabel>
            </RevealSection>

            <div className="mt-6 md:mt-8 space-y-0">
              {principles.map((principle, index) => (
                <RevealSection key={principle.number} delay={100 + index * 100}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="py-6 md:py-8 border-b border-border group"
                  >
                    <div className="flex items-start gap-4 md:gap-6">
                      <span className="font-mono text-xs text-muted-foreground pt-1">
                        {principle.number}
                      </span>
                      <div>
                        <h3 className="font-display text-base sm:text-lg md:text-xl font-medium text-foreground mb-2 tracking-tight">
                          {principle.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
