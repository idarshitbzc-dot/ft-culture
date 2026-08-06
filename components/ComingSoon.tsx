import { SiteHeader } from "@/components/SiteHeader";
import { ButtonLink } from "@/components/primitives/Button";
import { Kicker } from "@/components/primitives/Kicker";
import { Reveal } from "@/components/primitives/Reveal";
import { MotifWash, type MotifName } from "@/components/primitives/Motif";
import type { ComingSoonPage } from "@/content/comingSoon";

/**
 * The holding state for pages whose content isn't ready to show.
 * Deliberately reads as a commitment with a date attached rather
 * than an empty screen — these URLs are linked from the header,
 * the footer and the manifesto.
 *
 * Given its own navy plate so a holding page still looks like
 * part of the campaign rather than a gap in it.
 */
export function ComingSoon({
  page,
  motif = "lights",
}: {
  page: ComingSoonPage;
  motif?: MotifName;
}) {
  return (
    <>
      <SiteHeader />
      <main>
        {/* `safe center`: the band clips overflow, so plain centering
            would cut the headline off the top on short viewports. */}
        <section className="band band-navy relative flex min-h-[calc(100svh-3.75rem)] items-center [align-items:safe_center] overflow-hidden px-5 py-16 sm:px-8 sm:py-20">
          <div
            aria-hidden
            className="halftone-coarse halftone-fade-t pointer-events-none absolute inset-0 text-sky"
          />

          <MotifWash
            name={motif}
            className="right-[-3rem] bottom-[-2rem] size-64 text-sky opacity-[0.12] sm:size-80 lg:size-96"
          />

          <div className="relative mx-auto w-full max-w-6xl">
            <div className="max-w-full lg:max-w-[64%]">
              <Reveal>
                <Kicker tone="accent">{page.kicker}</Kicker>
              </Reveal>

              <Reveal index={1}>
                <h1 className="mt-7 font-display text-[clamp(2.25rem,7vw,4.5rem)] leading-[0.95] font-bold uppercase text-paper text-balance">
                  {page.headline}
                </h1>
              </Reveal>

              <Reveal index={2}>
                <div aria-hidden className="rule-stack mt-7">
                  <span className="bg-red" />
                  <span className="bg-sky" />
                  <span className="bg-cream" />
                </div>
                <p className="mt-6 max-w-lg text-body text-sky">
                  {page.subline}
                </p>
              </Reveal>

              <Reveal index={3} className="mt-10">
                {/* Cream sheet on navy: the promise has to be the
                    most legible thing on the plate. */}
                <div className="max-w-2xl border-2 border-cream bg-cream p-6 shadow-[7px_7px_0_0_var(--color-red)] sm:p-8">
                  <p className="text-body text-ink">{page.promise}</p>
                </div>
              </Reveal>

              <Reveal index={4} className="mt-10">
                <ButtonLink href={page.cta.href} variant="outline">
                  {page.cta.label}
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
