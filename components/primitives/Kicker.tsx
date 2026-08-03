import { cn } from "@/lib/cn";

/** The top-of-section meta label, e.g. `03 — THE VISION`. */
export function Kicker({
  children,
  tone = "mute",
  className,
}: {
  children: React.ReactNode;
  tone?: "mute" | "lime";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-meta font-bold uppercase tracking-[0.12em]",
        tone === "lime" ? "text-lime" : "text-mute",
        className,
      )}
    >
      {children}
    </p>
  );
}
