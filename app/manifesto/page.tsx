import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Experience } from "@/components/Experience";
import { Chip } from "@/components/primitives/Chip";
import { Kicker } from "@/components/primitives/Kicker";
import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { Placard, alternate } from "@/components/primitives/Placard";
import { MotifWash } from "@/components/primitives/Motif";
import {
  calendarTeaser,
  eventsWithTaste,
  execution,
  manifestoHero,
  theBigIdea,
  theClose,
  theGaps,
  theInitiatives,
  theLineup,
  thePillars,
  thePromise,
  theVision,
  whyCulture,
  type NamedItem,
} from "@/content/manifesto";

/**
 * The repeating placard grid. `accented` draws the offset second
 * colour pass; plain sheets are for secondary content where the
 * accent would dilute what actually matters.
 */
function ItemGrid({
  items,
  columns = 3,
  accented = true,
}: {
  items: NamedItem[];
  columns?: 2 | 3;
  accented?: boolean;
}) {
  return (
    <ul
      className={`grid gap-7 sm:gap-9 ${
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((item, i) => (
        // Reveal renders a div, so it sits inside the li — a div may not
        // be a direct child of ul.
        <li key={item.title}>
          <Reveal index={i} className="h-full">
            <Placard
              accent={accented ? alternate(i) : null}
              className="h-full"
            >
              <h3 className="font-display text-xl font-bold uppercase tracking-[0.01em] text-navy text-balance">
                {item.title}
              </h3>
              <div aria-hidden className="mt-3 h-0.5 w-8 bg-red" />
              <p className="mt-4 text-body text-ink-mute">{item.body}</p>
            </Placard>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ================= HERO (slide 1) ================= */}
        {/* `safe center`: the band clips overflow, so plain centering
            would cut the headline off the top on short viewports. */}
        <section className="band band-navy relative flex min-h-[calc(100svh-3.75rem)] items-center [align-items:safe_center] overflow-hidden px-5 py-16 sm:px-8 sm:py-20">
          <div
            aria-hidden
            className="halftone-coarse halftone-fade-t pointer-events-none absolute inset-0 text-sky"
          />

          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-[-3rem] hidden -translate-y-1/2 select-none font-display text-[26rem] leading-none font-bold text-paper opacity-[0.05] lg:block xl:text-[34rem]"
          >
            FT
          </span>

          <MotifWash
            name="tabla"
            className="right-[7%] bottom-[-1rem] hidden size-64 text-sky opacity-[0.13] lg:block"
          />

          <div className="relative mx-auto w-full max-w-6xl">
            <div className="max-w-full lg:max-w-[62%]">
              <Reveal>
                <Kicker tone="accent">{manifestoHero.kicker}</Kicker>
              </Reveal>

              <Reveal index={1}>
                <h1 className="mt-7 font-display text-hero font-bold uppercase text-paper">
                  {manifestoHero.headline.map((line, i) => (
                    <span
                      key={line}
                      className={`block ${i === 2 ? "text-sky" : ""}`}
                    >
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>

              <Reveal index={2}>
                <div aria-hidden className="rule-stack mt-7">
                  <span className="bg-red" />
                  <span className="bg-sky" />
                  <span className="bg-cream" />
                </div>
                <p className="mt-6 max-w-lg text-body text-sky">
                  {manifestoHero.subline}
                </p>
              </Reveal>

              <Reveal index={3}>
                <div className="mt-10 inline-block max-w-full border-2 border-cream bg-cream px-6 py-5 shadow-[6px_6px_0_0_var(--color-red)]">
                  <p className="font-display text-[clamp(1.75rem,5vw,2.75rem)] leading-none font-bold uppercase text-navy">
                    {manifestoHero.name}
                  </p>
                  <p className="mt-3 font-mono text-meta font-bold uppercase tracking-[0.16em] text-red">
                    {manifestoHero.role}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================= 01 — WHY CULTURE (slide 2) ================= */}
        <Section
          tone="cream"
          motif="masks"
          kicker={whyCulture.kicker}
          headline={whyCulture.headline}
          subline={whyCulture.subline}
        >
          <ItemGrid items={whyCulture.items} />

          <Reveal className="mt-14 sm:mt-16">
            <Placard inverse accent="red" className="max-w-3xl p-7 sm:p-9">
              <p className="font-display text-statement font-bold uppercase text-paper text-balance">
                {whyCulture.closingStatement}
              </p>
              <p className="mt-5 max-w-2xl text-body text-sky">
                {whyCulture.closingNote}
              </p>
            </Placard>
          </Reveal>
        </Section>

        {/* ================= 02 — THE GAPS (slide 3) ================= */}
        <Section
          tone="navy"
          motif="arch"
          kicker={theGaps.kicker}
          headline={theGaps.headline}
          subline={theGaps.subline}
        >
          <ItemGrid items={theGaps.items} />
        </Section>

        {/* ================= 03 — THE VISION (slide 4) ================= */}
        <Section
          tone="cream"
          motif="dance"
          kicker={theVision.kicker}
          headline={theVision.headline}
          subline={theVision.subline}
        >
          <Reveal className="mb-10">
            <p className="max-w-2xl font-display text-statement font-bold uppercase text-red text-balance">
              {theVision.lead}
            </p>
          </Reveal>
          <ItemGrid items={theVision.items} />
        </Section>

        {/* ================= 04 — FIVE PILLARS (slide 5) =================
            A numbered list, not cards: five promises read as a ledger. */}
        <Section
          tone="navy"
          motif="brush"
          kicker={thePillars.kicker}
          headline={thePillars.headline}
        >
          <ul className="flex flex-col">
            {thePillars.items.map((item, i) => (
              <li key={item.title}>
                <Reveal index={i}>
                  <div className="flex items-start gap-5 border-t border-rule py-7 sm:gap-8">
                    <span
                      aria-hidden
                      className="font-display text-4xl leading-none font-bold text-red sm:text-6xl"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-statement font-bold uppercase text-paper text-balance">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-body text-sky">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>

        {/* ================= 05 — THE BIG IDEA (slide 6) =================
            The flagship. Given the red plate — the only section that
            gets it on this page — so it out-weighs everything else. */}
        <section className="band band-red overflow-hidden">
          <div
            aria-hidden
            className="halftone pointer-events-none absolute inset-0 text-navy"
          />
          <MotifWash
            name="lights"
            className="top-[-2rem] right-[-3rem] size-72 text-paper opacity-[0.12] sm:size-96"
          />

          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <Reveal className="mb-10 sm:mb-14">
              <Kicker>{theBigIdea.kicker}</Kicker>
              <p className="mt-5">
                <span className="stamp bg-navy px-4 py-2 font-display text-meta font-semibold uppercase tracking-[0.18em] text-paper">
                  {theBigIdea.chip}
                </span>
              </p>
              <h2 className="mt-7 max-w-4xl font-display text-section font-bold uppercase text-paper text-balance">
                {theBigIdea.headline}
              </h2>
              <p className="mt-6 max-w-xl text-body text-paper/85">
                {theBigIdea.subline}
              </p>
            </Reveal>

            <Reveal className="mb-12">
              <div className="flex max-w-3xl flex-col gap-4">
                {theBigIdea.body.map((para) => (
                  <p key={para} className="text-body text-paper">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <ItemGrid items={theBigIdea.facts} />

            <Reveal className="mt-12">
              <Placard inverse accent={null} className="p-7 sm:p-9">
                <p className="font-display text-statement font-bold uppercase text-paper text-balance">
                  {theBigIdea.closer}
                </p>
              </Placard>
            </Reveal>
          </div>
        </section>

        {/* ================= 06 — THE LINEUP (slide 7) ================= */}
        <Section
          tone="cream"
          motif="guitar"
          kicker={theLineup.kicker}
          headline={theLineup.headline}
        >
          <ItemGrid items={theLineup.items} />

          <Reveal className="mt-12">
            <Link
              href="/suggest"
              className="inline-block max-w-3xl font-display text-statement font-bold uppercase text-red text-balance transition-colors duration-150 hover:text-navy"
            >
              {theLineup.closer}
            </Link>
          </Reveal>
        </Section>

        {/* ================= 07 — INITIATIVES (slide 8) ================= */}
        <Section
          tone="navy"
          motif="film"
          kicker={theInitiatives.kicker}
          headline={theInitiatives.headline}
          subline={theInitiatives.subline}
        >
          <ItemGrid items={theInitiatives.items} />
        </Section>

        {/* ================= 08 — EVENTS WITH TASTE (slide 9) ================= */}
        <Section
          tone="cream"
          motif="sitar"
          kicker={eventsWithTaste.kicker}
          headline={eventsWithTaste.headline}
          subline={eventsWithTaste.subline}
        >
          <ItemGrid items={eventsWithTaste.items} />
        </Section>

        {/* ================= EXPERIENCE / PAST WORK ================= */}
        <Experience />

        {/* ================= 09 — THE CALENDAR (slide 10)
            Copy only. The dates aren't public until week one, so there
            is deliberately nothing to click through to here. */}
        <Section
          tone="cream"
          motif="arch"
          kicker={calendarTeaser.kicker}
          headline={calendarTeaser.headline}
          subline={calendarTeaser.subline}
        />

        {/* ================= 10 — EXECUTION (slide 11) =================
            Plain sheets on purpose: this is the boring machinery, and
            accent blocks here would compete with the flagship. */}
        <Section
          tone="navy"
          motif="tabla"
          kicker={execution.kicker}
          headline={execution.headline}
        >
          <ItemGrid items={execution.items} accented={false} />
        </Section>

        {/* ================= 11 — THE PROMISE (slide 12) =================
            The tonal drop. Pure typography, no cards, no chips, maximum
            size. This is deliberate and structural — do not decorate. */}
        <section className="band band-cream overflow-hidden">
          <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-36">
            <Reveal>
              <Kicker className="mb-10">{thePromise.kicker}</Kicker>
            </Reveal>

            <Reveal index={1}>
              <p className="font-display text-hero font-bold uppercase text-navy">
                {thePromise.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-12 max-w-3xl font-display text-statement font-bold uppercase text-red text-balance">
                {thePromise.statement}
              </p>
            </Reveal>

            <Reveal index={3}>
              <p className="mt-8 max-w-2xl text-body text-ink-mute">
                {thePromise.note}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ================= THE CLOSE (slide 13) ================= */}
        <section className="band band-navy overflow-hidden border-t-4 border-red">
          <MotifWash
            name="mic"
            className="right-[-3rem] bottom-[-3rem] size-72 text-sky opacity-[0.1] sm:size-96"
          />

          <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <Reveal>
              <h2 className="max-w-4xl font-display text-section font-bold uppercase text-paper text-balance">
                {theClose.headline}
              </h2>
            </Reveal>

            <Reveal index={1}>
              <p className="mt-6 max-w-xl text-body text-sky">
                {theClose.subline}
              </p>
            </Reveal>

            <Reveal index={2}>
              <div className="mt-12 inline-block max-w-full border-2 border-cream bg-cream p-6 shadow-[8px_8px_0_0_var(--color-red)] sm:p-8">
                <Chip variant="red">{theClose.chip}</Chip>
                <p className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] leading-none font-bold uppercase text-navy">
                  {theClose.name}
                </p>
                <p className="mt-4 max-w-sm font-mono text-meta font-bold uppercase tracking-[0.16em] text-ink-mute">
                  {theClose.role}
                </p>
              </div>
            </Reveal>

            <Reveal index={3}>
              <p className="mt-10 max-w-2xl font-display text-statement font-bold uppercase text-sky text-balance">
                {theClose.tagline}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
