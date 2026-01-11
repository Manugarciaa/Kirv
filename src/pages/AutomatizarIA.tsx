import { motion } from "framer-motion";
import { TechLabel } from "@/components/ui/tech-label";
import { AnimatedDivider } from "@/components/ui/animated-divider";
import { RevealSection } from "@/components/ui/reveal-section";
import { WorkSectionCompact } from "@/components/sections/WorkSectionCompact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const AutomatizarIA = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <section className="py-12 md:py-20 lg:py-24 bg-secondary/30 relative">
          <div className="absolute inset-0 grid-overlay opacity-20 md:opacity-30 pointer-events-none" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-0 left-0 right-0 h-px bg-border origin-left"
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
              <div className="relative">
                <RevealSection>
                  <div className="hidden md:flex items-center gap-3">
                    <Link to="/" className="group inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-medium">
                      <motion.div whileHover={{ x: -2 }} transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}>
                        <ArrowLeft className="w-4 h-4" />
                      </motion.div>
                    </Link>
                    <TechLabel>Automatización con IA</TechLabel>
                  </div>
                  <div className="relative inline-block">
                    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mt-3 leading-[1.1]">
                      Automatizar procesos con IA.
                    </h1>
                    <img
                      src="/img/dragon.svg"
                      alt=""
                      aria-hidden="true"
                      className="absolute -bottom-1 right-5 md:right-0 h-16 md:h-24 lg:h-28 opacity-35 pointer-events-none dark:filter dark:invert dark:brightness-200"
                    />
                  </div>
                </RevealSection>

                <AnimatedDivider className="my-6 md:my-8" />

                <RevealSection delay={200}>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
                    Automatizamos flujos y tomas de decisión con modelos y pipelines
                    confiables. Reducimos tiempos operativos y elevamos la calidad
                    con soluciones IA integradas al negocio.
                  </p>
                </RevealSection>
              </div>

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

        <div className="-mt-6 md:-mt-8 lg:-mt-10">
          <WorkSectionCompact />
        </div>
        {showTop && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="fixed bottom-4 right-4 md:hidden z-50">
            <Button variant="outline" size="icon" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="rounded-full bg-background/70 backdrop-blur-sm border-border text-foreground hover:bg-background">
              <ArrowUp className="w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AutomatizarIA;