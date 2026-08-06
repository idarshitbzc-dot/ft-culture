import { cn } from "@/lib/cn";
import { Kicker } from "./Kicker";
import { Reveal } from "./Reveal";
import { MotifWash, type MotifName } from "./Motif";

export type Tone = "cream" | "navy" | "red";

/**
 * The site's structural rhythm, repeated everywhere:
 * kicker → huge condensed headline → rule stack → one subline → content.
 *
 * `tone` picks which printed band the section sits on. The band
 * class carries the grain texture and re-points --fg / --fg-mute
 * / --rule / --accent, so nothing inside needs a tone-aware class.
 *
 * `motif` parks one large line-art shape in the top-right corner
 * at very low opacity. It is clipped by the band and has pointer
 * events off, so it can never widen the page or eat a click.
 */
export function Section({
  kicker,
  headline,
  subline,
  children,
  id,
  className,
  tone = "cream",
  motif,
  headlineTone = "fg",
}: {
  kicker?: string;
  headline?: React.ReactNode;
  subline?: string;
  children?: React.ReactNode;
  id?: string;
  className?: string;
  tone?: Tone;
  motif?: MotifName;
  headlineTone?: "fg" | "accent";
}) {
  const hasHead = Boolean(kicker || headline || subline);

  return (
    <section
      id={id}
      className={cn(
        "band overflow-hidden",
        tone === "cream" && "band-cream",
        tone === "navy" && "band-navy",
        tone === "red" && "band-red",
        className,
      )}
    >
      {motif && (
        <MotifWash
          name={motif}
          className="top-[-3rem] right-[-4rem] size-64 opacity-[0.07] sm:size-80 lg:size-[26rem]"
        />
      )}

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        {hasHead && (
          <Reveal className="mb-10 sm:mb-14">
            {kicker && <Kicker className="mb-5">{kicker}</Kicker>}
            {headline && (
              <h2
                className={cn(
                  "max-w-4xl font-display text-section font-bold uppercase text-balance",
                  headlineTone === "accent" ? "text-accent" : "text-fg",
                )}
              >
                {headline}
              </h2>
            )}
            {/* The campaign chord. Band-aware on purpose: --accent and
                --fg flip per band, so it stays visible on all three. */}
            {headline && (
              <div aria-hidden className="rule-stack mt-6">
                <span className="bg-accent" />
                <span className="bg-sky" />
                <span className="bg-fg" />
              </div>
            )}
            {subline && (
              <p className="mt-6 max-w-xl text-body text-fg-mute">{subline}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
