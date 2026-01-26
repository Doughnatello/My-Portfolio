import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "neon" | "gradient";
  hover?: boolean;
}

export const GlowCard = ({
  children,
  className,
  variant = "default",
  hover = true,
}: GlowCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-xl p-6 transition-all duration-300",
        variant === "default" && "glass border border-border",
        variant === "neon" && "glass border border-primary/30",
        variant === "gradient" && "gradient-border glass",
        hover && "tech-card",
        className
      )}
    >
      {children}
    </div>
  );
};
