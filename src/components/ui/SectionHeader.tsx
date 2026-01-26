import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="inline-block font-mono text-sm text-primary uppercase tracking-widest mb-4">
          <span className="text-muted-foreground">{"// "}</span>
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        <span className="text-foreground">{title.split(" ").slice(0, -1).join(" ")} </span>
        <span className="text-primary neon-text">{title.split(" ").slice(-1)}</span>
      </h2>
      {description && (
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
