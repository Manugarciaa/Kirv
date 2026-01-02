import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { TechLabel } from "@/components/ui/tech-label";
import { AnimatedDivider } from "@/components/ui/animated-divider";
import { RevealSection } from "@/components/ui/reveal-section";
import { Button } from "@/components/ui/button";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  url: string;
};

const categories = ["todos", "producto", "ingeniería", "ia", "diseño UX"] as const;

const allPosts: Post[] = [
  {
    id: "p-001",
    title: "Cómo hacer tu web más rápida con 6 líneas de código",
    excerpt:
      "Implementación práctica de Speculation Rules API para prefetch y prerender que acelera navegaciones en Chromium.",
    category: "ingeniería",
    date: "2025-11-15",
    url: "https://medium.com/@gugueh.design/como-hacer-tu-web-m%C3%A1s-rapida-con-6-lineas-de-c%C3%B3digo-0f0288380d34",
  },
  {
    id: "p-002",
    title: "La era de los agentes IA",
    excerpt:
      "Cómo agentes y automatización con n8n ordenan flujos, integran CRM y elevan la velocidad de respuesta.",
    category: "ia",
    date: "2025-10-13",
    url: "https://medium.com/@gugueh.design/la-era-de-los-agentes-ia-eddcbf6964fe",
  },
  {
    id: "p-003",
    title: "Cómo revolucionamos el intercambio de libros en la era digital",
    excerpt:
      "Caso BookStar: diseño y producto para conectar lectores y facilitar el intercambio con una experiencia moderna.",
    category: "diseño UX",
    date: "2025-09-20",
    url: "https://www.behance.net/gallery/235700941/BookStar-Exchange-Books-and-Connect-With-Readers",
  },
  {
    id: "p-004",
    title: "Gerty: Asistente clínico — UX/UI para profesionales y estudiantes",
    excerpt:
      "Exploración de una app médica que organiza información y apoya decisiones, cuidando usabilidad y seguridad.",
    category: "producto",
    date: "2025-08-12",
    url: "https://www.behance.net/gallery/209086875/Gerty-Clinical-Medical-Assistant-UX-UI-Design",
  },
];

export default function Blog() {
  const [selected, setSelected] = useState<(typeof categories)[number]>("todos");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const posts = useMemo(() => {
    if (selected === "todos") return allPosts;
    return allPosts.filter((p) => p.category === selected);
  }, [selected]);

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
            <div className="mb-8 md:mb-10">
              <RevealSection>
                <TechLabel>Blog</TechLabel>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mt-3 leading-[1.1]">
                  Ideas, procesos y práctica
                </h1>
              </RevealSection>
            </div>

            <AnimatedDivider className="my-6 md:my-8" />

            <RevealSection delay={150}>
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selected === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelected(cat)}
                    className={
                      selected === cat
                        ? "bg-foreground text-background"
                        : "bg-transparent border-border text-muted-foreground hover:bg-background"
                    }
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </RevealSection>

            <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post, i) => (
                <RevealSection key={post.id} delay={i * 100}>
                  <motion.a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="block relative overflow-hidden border bg-background/80 p-6 md:p-7"
                  >
                    <div className="absolute inset-0 grid-overlay opacity-10" />
                    <TechLabel>{post.category}</TechLabel>
                    <h3 className="mt-3 font-display text-xl md:text-2xl font-medium tracking-tight text-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full hover:bg-[#2900D2] dark:hover:bg-[#5B6CFF] hover:text-background transition-colors duration-medium"
                        asChild
                      >
                        <a href={post.url} target="_blank" rel="noopener noreferrer">Leer</a>
                      </Button>
                    </div>
                  </motion.a>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>
        {showTop && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="fixed bottom-4 right-4 md:hidden z-50">
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-full bg-background/70 backdrop-blur-sm border-border text-foreground hover:bg-background"
            >
              ↑
            </Button>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
}