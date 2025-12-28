import { motion } from "framer-motion";
import { RevealSection } from "@/components/ui/reveal-section";
import { TechLabel } from "@/components/ui/tech-label";
import { AnimatedDivider } from "@/components/ui/animated-divider";

const services = [
  {
    id: "01",
    title: "Arquitectura de Sistemas",
    description:
      "Diseñando infraestructura escalable y resiliente desde primeros principios. Construimos bases que soportan el crecimiento sin acumular deuda técnica.",
  },
  {
    id: "02",
    title: "Ingeniería de Plataformas",
    description:
      "Construyendo plataformas internas para desarrolladores que aceleran la entrega. Herramientas estandarizadas, flujos automatizados, sistemas observables.",
  },
  {
    id: "03",
    title: "Infraestructura de Datos",
    description:
      "Construyendo pipelines y almacenes que transforman datos en bruto en inteligencia accionable. Procesamiento en tiempo real a escala.",
  },
  {
    id: "04",
    title: "Ingeniería de Seguridad",
    description:
      "Implementando estrategias de defensa en profundidad. Arquitecturas zero-trust, cumplimiento continuo y frameworks de respuesta a incidentes.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-section relative">
      {/* Architectural accent */}
      <div className="absolute left-0 top-0 w-px h-full bg-border hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <RevealSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-4 mb-12 md:mb-16">
            <div>
              <TechLabel>Servicios</TechLabel>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mt-4">
                Qué Construimos
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
              Cada proyecto comienza entendiendo el problema profundamente antes de
              proponer soluciones.
            </p>
          </div>
        </RevealSection>

        <AnimatedDivider className="mb-0" />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
            <RevealSection key={service.id} delay={index * 100}>
              <motion.div
                whileHover={{ backgroundColor: "hsl(var(--secondary))" }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="p-6 sm:p-8 md:p-10 lg:p-12 border-b md:border-r border-border last:border-r-0 md:last:border-r group cursor-default"
              >
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <span className="font-mono text-xs text-muted-foreground">
                    {service.id}
                  </span>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="w-2 h-2 bg-foreground"
                  />
                </div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-medium text-foreground mb-3 md:mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
