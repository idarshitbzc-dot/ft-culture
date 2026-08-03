import { cn } from "@/lib/cn";

type ChipVariant = "lime" | "magenta" | "quiet" | "outline";

const VARIANTS: Record<ChipVariant, string> = {
  // Near-black text on lime: 17.1:1
  lime: "bg-lime text-bg",
  // Near-black text on magenta: 6.2:1
  magenta: "bg-magenta text-bg",
  // Lime text on the inset surface: 14.3:1
  quiet: "bg-card-2 text-lime",
  outline: "border border-line text-mute",
};

export function Chip({
  children,
  variant = "lime",
  className,
}: {
  children: React.ReactNode;
  variant?: ChipVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1.5",
        "font-mono text-meta font-bold uppercase tracking-[0.12em]",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
