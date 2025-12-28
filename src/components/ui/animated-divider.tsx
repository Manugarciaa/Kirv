import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface AnimatedDividerProps {
  className?: string;
  delay?: number;
}

export function AnimatedDivider({ className, delay = 0 }: AnimatedDividerProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.5 });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "h-px bg-border origin-left transition-transform duration-slow ease-mechanical",
          isVisible ? "scale-x-100" : "scale-x-0"
        )}
        style={{ transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}
