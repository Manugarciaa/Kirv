import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TechLabelProps {
  children: ReactNode;
  className?: string;
}

export function TechLabel({ children, className }: TechLabelProps) {
  return (
    <span
      className={cn(
        "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
