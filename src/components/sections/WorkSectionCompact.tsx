import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { RevealSection } from "@/components/ui/reveal-section";
import { TechLabel } from "@/components/ui/tech-label";
import { AnimatedDivider } from "@/components/ui/animated-divider";

const projects = [
  {
    id: "001",
    title: "Migración de Infraestructura",
    client: "SaaS Empresarial",
    year: "2026",
    description:
      "Migración sin tiempo de inactividad de monolito heredado a arquitectura de microservicios distribuidos. Reducción del 40% en costos operativos.",
  },
  {
    id: "002",
    title: "Plataforma de Análisis en Tiempo Real",
    client: "Servicios Financieros",
    year: "2026",
    description:
      "Pipeline de procesamiento de datos con latencia submilisegundo manejando más de 2M eventos por segundo con entrega garantizada.",
  },
  {
    id: "003",
    title: "Plataforma para Desarrolladores",
    client: "Startup Tecnológica",
    year: "2025",
    description:
      "Plataforma interna que reduce el tiempo de despliegue de horas a minutos. Aprovisionamiento de infraestructura autoservicio.",
  },
  {
    id: "004",
    title: "Automatización de Ventas con IA",
    client: "Retail Omnicanal",
    year: "2025",
    description:
      "Flujos de n8n integrados a CRM para clasificar consultas, responder automáticamente y alertar al equipo en tiempo real.",
  },
  {
    id: "005",
    title: "Observabilidad End-to-End",
    client: "HealthTech",
    year: "2026",
    description:
      "Stack de logs, métricas y trazas con alertas proactivas. MTTR reducido 35% y claridad en responsabilidades de servicios.",
  },
  {
    id: "006",
    title: "Portal de Clientes a Medida",
    client: "Servicios Profesionales",
    year: "2025",
    description:
      "Sitio y backend a medida con onboarding guiado, permisos granulares y reportes descargables.",
  },
  {
    id: "007",
    title: "ETL de Datos Financieros",
    client: "FinTech",
    year: "2026",
    description:
      "Normalización y enriquecimiento de datos provenientes de múltiples fuentes. Calidad y consistencia auditables.",
  },
  {
    id: "008",
    title: "Capa de Autorización Centralizada",
    client: "Enterprise",
    year: "2025",
    description:
      "Modelo de RBAC/ABAC con políticas versionadas y revisión de cambios. Menor complejidad en los servicios.",
  },
  {
    id: "009",
    title: "Diseño UX de Flujos Críticos",
    client: "EdTech",
    year: "2025",
    description:
      "Rediseño de flujos de evaluación y retroalimentación. Menos fricción, más claridad y métricas de finalización al alza.",
  },
];

export function WorkSectionCompact() {
  const perPage = 3;
  const pages = useMemo(() => {
    const chunks: typeof projects[] = [] as any;
    for (let i = 0; i < projects.length; i += perPage) {
      chunks.push(projects.slice(i, i + perPage));
    }
    return chunks;
  }, []);
  const [page, setPage] = useState(0);

  return (
    <section id="work" className="pt-3 md:pt-4 lg:pt-5 pb-16 md:pb-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <RevealSection>
          <div className="mb-8 md:mb-10">
            <TechLabel>Trabajo Seleccionado</TechLabel>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mt-4">
              Casos de Estudio
            </h2>
          </div>
        </RevealSection>

        <AnimatedDivider className="mb-0" />

        <div className="divide-y divide-border mt-2">
          {pages[page].map((project, index) => (
            <RevealSection key={project.id} delay={index * 150}>
              <motion.article
                whileHover={{ x: 12 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="py-8 md:py-12 lg:py-14 cursor-pointer group"
              >
                <div className="grid grid-cols-12 gap-3 md:gap-6 lg:gap-8 items-start">
                  <div className="col-span-2 sm:col-span-1">
                    <span className="font-mono text-xs text-muted-foreground">{project.id}</span>
                  </div>
                  <div className="col-span-10 sm:col-span-11 md:col-span-7">
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-2 md:mb-3 tracking-tight group-hover:text-foreground/80 transition-colors duration-medium">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>
                  <div className="col-span-10 col-start-3 sm:col-span-11 sm:col-start-2 md:col-span-4 md:col-start-auto flex flex-row md:flex-col md:items-end gap-3 md:gap-2 mt-3 md:mt-0">
                    <TechLabel>{project.client}</TechLabel>
                    <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                  </div>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="h-px bg-foreground mt-6 md:mt-8 origin-left"
                />
              </motion.article>
            </RevealSection>
          ))}
        </div>

        <div className="mt-3 md:mt-4 flex justify-end gap-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className={`inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.15em] px-4 py-2 border rounded-full transition-colors duration-medium ${
              page === 0
                ? "text-muted-foreground border-border cursor-not-allowed"
                : "text-foreground border-border hover:bg-foreground hover:text-background"
            }`}
            aria-label="Página anterior"
          >
            ←
          </button>
          <button
            onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
            disabled={page === pages.length - 1}
            className={`inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.15em] px-4 py-2 border rounded-full transition-colors duration-medium ${
              page === pages.length - 1
                ? "text-muted-foreground border-border cursor-not-allowed"
                : "text-foreground border-border hover:bg-foreground hover:text-background"
            }`}
            aria-label="Página siguiente"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}