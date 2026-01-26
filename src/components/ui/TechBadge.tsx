import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: string;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export const TechBadge = ({
  children,
  variant = "default",
  className,
}: TechBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full font-mono text-xs font-medium transition-colors",
        variant === "default" && "bg-muted/50 text-muted-foreground border border-border",
        variant === "primary" && "bg-primary/10 text-primary border border-primary/30",
        variant === "secondary" && "bg-secondary/10 text-secondary border border-secondary/30",
        className
      )}
    >
      {children}
    </span>
  );
};
