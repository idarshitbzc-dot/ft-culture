import { cn } from "@/lib/cn";

/**
 * The top-of-section meta label, e.g. `03 — THE VISION`.
 * A short red bar leads it, the way a printed campaign document
 * marks its sections. The bar is decorative and hidden from AT.
 */
export function Kicker({
  children,
  tone = "mute",
  className,
}: {
  children: React.ReactNode;
  tone?: "mute" | "accent";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-meta font-bold uppercase tracking-[0.16em]",
        tone === "accent" ? "text-accent" : "text-fg-mute",
        className,
      )}
    >
      <span aria-hidden className="h-0.5 w-6 shrink-0 bg-current" />
      <span className="min-w-0">{children}</span>
    </p>
  );
}
