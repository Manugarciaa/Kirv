import { motion } from "framer-motion";
import { TechLabel } from "@/components/ui/tech-label";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#4E5CF2] dark:bg-[#4E5CF2]" />
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-black/8 dark:bg-white/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-black/8 via-transparent to-transparent dark:from-white/8" />
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          {/* Logo & Copyright */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                aria-label="KIRV"
                className="h-20 md:h-28 w-56 md:w-80"
                style={{
                  WebkitMaskImage: 'url(/img/kirvlogo.svg)',
                  maskImage: 'url(/img/kirvlogo.svg)',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskPosition: 'left center',
                  maskPosition: 'left center',
                  backgroundColor: '#ffffff',
                }}
              />
              <p className="font-mono text-xs text-white/80 mt-4">
                © {currentYear} KIRV Engineering Studio
              </p>
              <p className="font-mono text-xs text-white/80 mt-1">
                Todos los derechos reservados.
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <TechLabel className="text-white">Navegación</TechLabel>
              <nav className="mt-4 space-y-2">
                {[
                  { name: "Trabajo", id: "work" },
                  { name: "Servicios", id: "services" },
                  { name: "Nosotros", id: "about" },
                  { name: "Contacto", id: "contact" }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block font-mono text-sm text-white/80 hover:text-white transition-colors duration-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <TechLabel className="text-white">Conectar</TechLabel>
              <div className="mt-4 space-y-2">
                <a
                  href="mailto:hello@kirv.io"
                  className="block font-mono text-sm text-white/80 hover:text-white transition-colors duration-medium"
                >
                  hello@kirv.io
                </a>
                <a
                  href="#"
                  className="block font-mono text-sm text-white/80 hover:text-white transition-colors duration-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="block font-mono text-sm text-white/80 hover:text-white dark:text-muted-foreground dark:hover:text-foreground transition-colors duration-medium"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="h-px bg-white mt-12 origin-left"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <TechLabel className="text-white">Excelencia en Ingeniería</TechLabel>
          <span className="font-mono text-xs text-white/80">
            San Miguel de Tucumán, Argentina
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
