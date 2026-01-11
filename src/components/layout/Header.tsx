import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Nuestros Trabajos", href: "#work" },
  { label: "Servicios", href: "#services" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (href: string) => {
    if (href.startsWith("/")) return href;
    return isHome ? href : `/${href}`;
  };

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && href.startsWith("/") && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-medium ease-precise",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="inline-flex items-center"
          >
            <div
              aria-label="KIRV"
              className="block h-[62px] md:h-[78px] w-[172px] md:w-[220px] -my-2 md:-my-3 bg-primary"
              style={{
                WebkitMaskImage: 'url(/img/kirv-main-logo.svg)',
                maskImage: 'url(/img/kirv-main-logo.svg)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskPosition: 'left center',
                maskPosition: 'left center',
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => {
              const href = getHref(item.href);
              const active = isActive(item.href);

              return item.href.startsWith("/") || !isHome ? (
                <Link
                  key={item.label}
                  to={href}
                  className={cn(
                    "font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-medium",
                    active ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={href}
                  className={cn(
                    "font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-medium",
                    active ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-foreground origin-center transition-all duration-medium"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-px bg-foreground transition-all duration-medium"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-foreground origin-center transition-all duration-medium"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navItems.map((item, index) => {
                const href = getHref(item.href);
                const active = isActive(item.href);

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    {item.href.startsWith("/") || !isHome ? (
                      <Link
                        to={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "font-mono text-sm uppercase tracking-[0.15em] transition-colors",
                          active ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                        )}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "font-mono text-sm uppercase tracking-[0.15em] transition-colors",
                          active ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                        )}
                      >
                        {item.label}
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
