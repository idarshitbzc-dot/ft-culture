import { cn } from "@/lib/cn";
import { Kicker } from "./Kicker";
import { Reveal } from "./Reveal";

/**
 * The site's structural rhythm, repeated everywhere:
 * kicker → huge headline → one italic muted subline → content.
 */
export function Section({
  kicker,
  headline,
  subline,
  children,
  id,
  className,
  headlineTone = "white",
}: {
  kicker?: string;
  headline?: React.ReactNode;
  subline?: string;
  children?: React.ReactNode;
  id?: string;
  className?: string;
  headlineTone?: "white" | "lime" | "magenta";
}) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24", className)}
    >
      {(kicker || headline || subline) && (
        <Reveal className="mb-10 sm:mb-14">
          {kicker && <Kicker className="mb-4">{kicker}</Kicker>}
          {headline && (
            <h2
              className={cn(
                "font-display text-section font-black uppercase text-balance",
                headlineTone === "lime" && "text-lime",
                headlineTone === "magenta" && "text-magenta",
              )}
            >
              {headline}
            </h2>
          )}
          {subline && (
            <p className="mt-4 max-w-xl text-body italic text-mute">{subline}</p>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}
