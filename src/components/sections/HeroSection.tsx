import { motion } from "framer-motion";
import { TechLabel } from "@/components/ui/tech-label";
import { Typewriter } from "@/components/ui/typewriter";
import { AnimatedDivider } from "@/components/ui/animated-divider";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useParallax } from "@/hooks/useParallax";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function HeroSection() {
  const parallaxOffset = useParallax(0.3);
  const [active, setActive] = useState(0);
  const { theme } = useTheme();
  const renderTitle = (t: string) => {
    const [first, ...rest] = t.split(" ");
    return (
      <>
        <span className="font-medium">{first}</span> {rest.join(" ")}
      </>
    );
  };

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 920px)");
    if (!mql.matches) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative md:min-h-screen flex items-start md:items-end pb-4 md:pb-24 pt-16 md:pt-32 overflow-hidden bg-background">
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
        <div className="max-w-5xl mx-auto">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
              <TechLabel>
                <Typewriter
                  texts={[
                    "Estudio de Ingeniería",
                    "Estudio de Diseño UX",
                    "Estudio de Inteligencia Artificial",
                    "Estudio de Desarrollo",
                    "Estudio de Automatizaciones",
                  ]}
                  speed={90}
                  pause={1400}
                  className="!text-[#2900D2] dark:!text-[#5B6CFF]"
                />
                <span className="ml-1 inline-block w-px h-[1em] align-middle bg-[#2900D2] dark:bg-[#5B6CFF] animate-pulse" />
              </TechLabel>
          </motion.div>

          <AnimatedDivider className="my-6" delay={400} />

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

          <AnimatedDivider className="my-4 md:my-8" delay={600} />

          {/* Subtitle + Corner Info */}
          <div className="flex items-start justify-between gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl font-light leading-relaxed"
            >
              Somos un equipo de Ingenieros que expertos en convertir ideas en sistemas confiables, claros y funcionales
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden md:block text-right"
            >
              <TechLabel>Est. 2025</TechLabel>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                Fundado por Ingenieros
              </p>
            </motion.div>
          </div>

          {/* Mobile Stacked Cards (eje Z) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-4 md:mt-10 mb-8 md:mb-16 lg:mb-20 lg:hidden"
          >
            <div className="relative max-w-sm md:max-w-md mx-auto h-36 md:h-40 [perspective:1000px] [transform-style:preserve-3d]">
              {[
                {
                  text: "Diseñar una experiencia que enamore.",
                  img: "/img/experiences-background.png",
                },
                {
                  text: "Automatizar procesos con IA.",
                  img: "/img/purple-background.png",
                },
                {
                  text: "Digitalizar procesos clave de tu empresa.",
                  img: "/img/box-background.png",
                },
                {
                  text: "Desarrollar webs a medida.",
                  img: "/img/develop-background.jpg",
                },
              ].map((item, i, arr) => {
                const total = arr.length;
                const rel = (i - active + total) % total;
                const depth = rel;
                const z = -depth * 40;
                const scale = 1 - depth * 0.04;
                const y = -depth * 6;
                const x = depth === 0 ? 0 : (i % 2 === 0 ? 8 : -10) * depth;
                const rot = depth === 0 ? 0 : (i % 2 === 0 ? -2 : 3) * depth;
                const cardClass = depth === 0 ? "shadow-lg" : depth === 1 ? "shadow-md" : "shadow";
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: rel === 0 ? 1 : rel === 1 ? 0.85 : rel === 2 ? 0.7 : 0.55 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className={cn("group absolute inset-0 z-10 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]")}
                    style={{
                      transform: `translateZ(${z}px) translateY(${y}px) translateX(${x}px) rotateZ(${rot}deg) scale(${scale})`,
                    }}
                  >
                    <Card className={cn("relative overflow-hidden border bg-background/80", cardClass)}>
                      <AspectRatio ratio={16 / 5}>
                        <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent" />
                        <div className="absolute inset-0 grid-overlay opacity-15 md:opacity-20" />
                        <div className="absolute inset-0 pointer-events-none">
                          {(() => {
                            const pos = i === 0 ? "bottom-3 right-3" : i === 1 ? "top-3 left-3" : i === 2 ? "top-1/2 right-6 -translate-y-1/2" : "bottom-3 left-6";
                            const size = "h-20 md:h-24 lg:h-28";
                            if (i === 3) {
                              return (
                                <>
                                  <img src="/img/lotus.svg" alt="" aria-hidden="true" className={cn("absolute opacity-90", "bottom-3 right-6", size, "block dark:hidden")} />
                                  <img src="/img/lotus.svg" alt="" aria-hidden="true" className={cn("absolute hidden dark:block filter invert brightness-200 opacity-90", "bottom-3 right-6", size)} />
                                  <img src="/img/lotus.svg" alt="" aria-hidden="true" className={cn("absolute opacity-80", "bottom-2 left-3", "h-6 md:h-7", "block dark:hidden")} />
                                  <img src="/img/lotus.svg" alt="" aria-hidden="true" className={cn("absolute hidden dark:block filter invert brightness-200 opacity-80", "bottom-2 left-3", "h-6 md:h-7")} />
                                </>
                              );
                            }
                            if (i === 0) {
                              return (
                                <>
                                  <img src="/img/paper-crane.svg" alt="" aria-hidden="true" className={cn("absolute opacity-90", pos, size, "block dark:hidden")} />
                                  <img src="/img/paper-crane.svg" alt="" aria-hidden="true" className={cn("absolute hidden dark:block filter invert brightness-200 opacity-90", pos, size)} />
                                  <img src="/img/paper-crane.svg" alt="" aria-hidden="true" className={cn("absolute opacity-80", "bottom-2 left-3", "h-6 md:h-7", "block dark:hidden")} />
                                  <img src="/img/paper-crane.svg" alt="" aria-hidden="true" className={cn("absolute hidden dark:block filter invert brightness-200 opacity-80", "bottom-2 left-3", "h-6 md:h-7")} />
                                </>
                              );
                            }
                            if (i === 1) {
                              return (
                                <>
                                  <img src="/img/dragon.svg" alt="" aria-hidden="true" className={cn("absolute opacity-90", "bottom-0 right-6", "h-28 md:h-36 lg:h-44", "block dark:hidden")} />
                                  <img src="/img/dragon.svg" alt="" aria-hidden="true" className={cn("absolute hidden dark:block filter invert brightness-200 opacity-90", "bottom-0 right-6", "h-28 md:h-36 lg:h-44")} />
                                  <img src="/img/dragon.svg" alt="" aria-hidden="true" className={cn("absolute opacity-80", "bottom-2 left-3", "h-6 md:h-7", "block dark:hidden")} />
                                  <img src="/img/dragon.svg" alt="" aria-hidden="true" className={cn("absolute hidden dark:block filter invert brightness-200 opacity-80", "bottom-2 left-3", "h-6 md:h-7")} />
                                </>
                              );
                            }
                            if (i === 2) {
                              return (
                                <>
                                  <img src="/img/samurai.svg" alt="" aria-hidden="true" className={cn("absolute opacity-90", "top-1/2 right-6 -translate-y-1/2", size, "block dark:hidden")} />
                                  <img src="/img/samurai.svg" alt="" aria-hidden="true" className={cn("absolute hidden dark:block filter invert brightness-200 opacity-90", "top-1/2 right-6 -translate-y-1/2", size)} />
                                  <img src="/img/samurai.svg" alt="" aria-hidden="true" className={cn("absolute opacity-80", "bottom-2 left-3", "h-6 md:h-7", "block dark:hidden")} />
                                  <img src="/img/samurai.svg" alt="" aria-hidden="true" className={cn("absolute hidden dark:block filter invert brightness-200 opacity-80", "bottom-2 left-3", "h-6 md:h-7")} />
                                </>
                              );
                            }
                            return null;
                          })()}
                        </div>
                        <CardHeader className="relative z-10">
                          <div className="inline-block rounded-md px-2.5 py-1.5 bg-background/30 dark:bg-black/12 backdrop-blur-[1px]">
                            <CardTitle className="text-base font-light tracking-tight text-foreground dark:text-white drop-shadow">
                              {renderTitle(item.text)}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <div className="absolute bottom-4 right-4 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <Button variant="outline" size="icon" asChild aria-label="Ver detalle" className="rounded-full bg-background/70 backdrop-blur-sm border-border text-foreground hover:bg-background">
                            <Link to={i === 0 ? "/experiencia" : i === 1 ? "/automatizar" : i === 2 ? "/digitalizar" : i === 3 ? "/desarrollar" : "#"}>
                              <ArrowRight />
                            </Link>
                          </Button>
                        </div>
                        {i === 0 && (
                          <Link to="/experiencia" aria-label="Abrir Diseñar una experiencia" className="absolute inset-0 z-10" />
                        )}
                        {i === 1 && (
                          <Link to="/automatizar" aria-label="Abrir Automatizar procesos con IA" className="absolute inset-0 z-10" />
                        )}
                        {i === 2 && (
                          <Link to="/digitalizar" aria-label="Abrir Digitalizar procesos" className="absolute inset-0 z-10" />
                        )}
                      </AspectRatio>
                    </Card>
                  </motion.div>
                );
              })}
              <Button
                variant="outline"
                size="icon"
                aria-label="Anterior"
                className="absolute -left-10 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-background/50 backdrop-blur-sm text-muted-foreground hover:text-foreground opacity-70 hover:opacity-100 shadow-none"
                onClick={() => setActive((prev) => (prev - 1 + 4) % 4)}
              >
                <ArrowLeft />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Siguiente"
                className="absolute -right-10 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-background/50 backdrop-blur-sm text-muted-foreground hover:text-foreground opacity-70 hover:opacity-100 shadow-none"
                onClick={() => setActive((prev) => (prev + 1) % 4)}
              >
                <ArrowRight />
              </Button>
            </div>
          </motion.div>

          {/* Desktop Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:grid mt-8 md:mt-10 mb-8 md:mb-16 lg:mb-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              {
                text: "Diseñar una experiencia que enamore.",
                img: "/img/experiences-background.png",
              },
              {
                text: "Automatizar procesos con IA.",
                img: "/img/purple-background.png",
              },
              {
                text: "Digitalizar procesos clave de tu empresa.",
                img: "/img/box-background.png",
              },
              {
                text: "Desarrollar webs a medida.",
                img: "/img/develop-background.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: i === 1 ? 24 : i % 2 === 0 ? 24 : -24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className={i === 1 ? "group self-end" : "group"}
              >
                <Card className="relative overflow-hidden border bg-background/80 hover:bg-background transition-colors duration-300">
                  <AspectRatio ratio={i === 0 ? 2 / 3 : i === 1 ? 4 / 3 : i === 2 ? 5 / 6 : 10 / 9}>
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent" />
                    <div className="absolute inset-0 grid-overlay opacity-15 md:opacity-20" />
                    <div className="absolute inset-0 pointer-events-none">
                      {(() => {
                        const pos = i === 0 ? "bottom-3 right-3" : i === 1 ? "top-3 left-3" : i === 2 ? "top-1/2 right-6 -translate-y-1/2" : "bottom-3 left-6";
                        const size = "h-20 md:h-24 lg:h-28";
                        if (i === 3) {
                          return (
                            <>
                              <img src="/img/lotus.svg" alt="" aria-hidden="true" className={cn("absolute opacity-90", pos, size, "block dark:hidden")} />
                              <img src="/img/lotus.svg" alt="" aria-hidden="true" className={cn("absolute hidden dark:block filter invert brightness-200 opacity-90", pos, size)} />
                            </>
                          );
                        }
                        if (i === 0) {
                          return (
                            <>
                              <img src="/img/paper-crane.svg" alt="" aria-hidden="true" className={cn("absolute opacity-90", pos, size, "block dark:hidden")} />
                              <img src="/img/paper-crane.svg" alt="" aria-hidden="true" className={cn("absolute hidden dark:block filter invert brightness-200 opacity-90", pos, size)} />
                            </>
                          );
                        }
                        if (i === 1) {
                          return (
                            <>
                              <img src="/img/dragon.svg" alt="" aria-hidden="true" className={cn("absolute opacity-90", "bottom-0 left-3", "h-28 md:h-36 lg:h-44", "block dark:hidden")} />
                              <img src="/img/dragon.svg" alt="" aria-hidden="true" className={cn("absolute hidden dark:block filter invert brightness-200 opacity-90", "bottom-0 left-3", "h-28 md:h-36 lg:h-44")} />
                            </>
                          );
                        }
                        if (i === 2) {
                          return (
                            <>
                              <img src="/img/samurai.svg" alt="" aria-hidden="true" className={cn("absolute opacity-90", "bottom-2 left-1/2 -translate-x-1/2", size, "block dark:hidden")} />
                              <img src="/img/samurai.svg" alt="" aria-hidden="true" className={cn("absolute hidden dark:block filter invert brightness-200 opacity-90", "bottom-2 left-1/2 -translate-x-1/2", size)} />
                            </>
                          );
                        }
                        return null;
                      })()}
                    </div>
                    <CardHeader className="relative z-10">
                      <div className="inline-block rounded-md px-2.5 py-1.5 bg-background/60 dark:bg-black/12 backdrop-blur-[1px]">
                        <CardTitle className="text-base md:text-lg lg:text-xl font-light tracking-tight text-foreground dark:text-white drop-shadow">
                          {renderTitle(item.text)}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <div className="absolute bottom-4 right-4 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <Button variant="outline" size="icon" asChild aria-label="Ver detalle" className="rounded-full bg-background/70 backdrop-blur-sm border-border text-foreground hover:bg-background">
                        <Link to={i === 0 ? "/experiencia" : i === 1 ? "/automatizar" : i === 2 ? "/digitalizar" : i === 3 ? "/desarrollar" : "#"}>
                          <ArrowRight />
                        </Link>
                      </Button>
                    </div>
                    {i === 0 && (
                      <Link to="/experiencia" aria-label="Abrir Diseñar una experiencia" className="absolute inset-0 z-10" />
                    )}
                    {i === 1 && (
                      <Link to="/automatizar" aria-label="Abrir Automatizar procesos con IA" className="absolute inset-0 z-10" />
                    )}
                    {i === 2 && (
                      <Link to="/digitalizar" aria-label="Abrir Digitalizar procesos" className="absolute inset-0 z-10" />
                    )}
                    {i === 3 && (
                      <Link to="/desarrollar" aria-label="Abrir Desarrollar webs a medida" className="absolute inset-0 z-10" />
                    )}
                  </AspectRatio>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 md:gap-4 font-mono text-xs md:text-sm uppercase tracking-[0.15em] text-foreground"
            >
              <span>Ver Trabajos</span>
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

        
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
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
