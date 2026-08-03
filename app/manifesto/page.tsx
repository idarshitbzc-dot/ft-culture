import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { ButtonLink } from "@/components/primitives/Button";
import { Chip } from "@/components/primitives/Chip";
import { Kicker } from "@/components/primitives/Kicker";
import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { Sticker, alternate } from "@/components/primitives/Sticker";
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
 * The repeating card grid. `accented` draws sticker cards with alternating
 * offset blocks; plain cards are for secondary content where the accent
 * would dilute what actually matters.
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
      className={`grid gap-6 sm:gap-8 ${
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((item, i) => (
        // Reveal renders a div, so it sits inside the li — a div may not
        // be a direct child of ul.
        <li key={item.title}>
          <Reveal index={i} className="h-full">
            <Sticker
              accent={accented ? alternate(i) : null}
              className="h-full"
            >
              <h3 className="font-display text-xl font-black uppercase tracking-[-0.02em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-body text-mute">{item.body}</p>
            </Sticker>
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
        {/* ---------------- HERO (slide 1) ---------------- */}
        <section className="relative flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden px-5 py-16 sm:px-8">
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-[-2rem] hidden -translate-y-1/2 select-none font-display text-[24rem] leading-none font-black text-watermark lg:block xl:text-[30rem]"
          >
            FT
          </span>

          <div className="relative mx-auto w-full max-w-6xl">
            <div className="max-w-full lg:max-w-[58%]">
              <Reveal>
                <Kicker tone="lime">{manifestoHero.kicker}</Kicker>
              </Reveal>

              <Reveal index={1}>
                <h1 className="mt-6 font-display text-hero font-black uppercase">
                  {manifestoHero.headline.map((line, i) => (
                    <span
                      key={line}
                      className={`block ${i === 2 ? "text-lime" : "text-white"}`}
                    >
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>

              <Reveal index={2}>
                <p className="mt-6 max-w-lg text-body italic text-mute">
                  {manifestoHero.subline}
                </p>
              </Reveal>

              <Reveal index={3}>
                <div className="mt-10">
                  <div className="h-1 w-16 bg-magenta" />
                  <p className="mt-4 font-display text-statement font-black uppercase text-white">
                    {manifestoHero.name}
                  </p>
                  <Chip className="mt-4">{manifestoHero.role}</Chip>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- 01 — WHY CULTURE (slide 2) ---------------- */}
        <Section
          kicker={whyCulture.kicker}
          headline={whyCulture.headline}
          subline={whyCulture.subline}
        >
          <ItemGrid items={whyCulture.items} />

          <Reveal className="mt-12 sm:mt-16">
            <p className="max-w-3xl font-display text-statement font-black uppercase text-white text-balance">
              {whyCulture.closingStatement}
            </p>
            <p className="mt-4 max-w-2xl text-body italic text-mute">
              {whyCulture.closingNote}
            </p>
          </Reveal>
        </Section>

        {/* ---------------- 02 — THE GAPS (slide 3) ---------------- */}
        <Section
          kicker={theGaps.kicker}
          headline={theGaps.headline}
          subline={theGaps.subline}
        >
          <ItemGrid items={theGaps.items} />
        </Section>

        {/* ---------------- 03 — THE VISION (slide 4) ---------------- */}
        <Section
          kicker={theVision.kicker}
          headline={theVision.headline}
          subline={theVision.subline}
        >
          <Reveal className="mb-10">
            <p className="max-w-2xl text-body text-white">{theVision.lead}</p>
          </Reveal>
          <ItemGrid items={theVision.items} />
        </Section>

        {/* ---------------- 04 — FIVE PILLARS (slide 5) ---------------- */}
        <Section kicker={thePillars.kicker} headline={thePillars.headline}>
          <ul className="flex flex-col">
            {thePillars.items.map((item, i) => (
              <li key={item.title}>
                <Reveal index={i}>
                  <div className="flex items-start gap-5 border-t border-line py-7 sm:gap-8">
                    {/* Large display numeral — magenta is safe at this size. */}
                    <span
                      aria-hidden
                      className={`font-display text-4xl font-black leading-none sm:text-6xl ${
                        i % 2 === 0 ? "text-lime" : "text-magenta"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-statement font-black uppercase text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-body text-mute">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>

        {/* ---------------- 05 — THE BIG IDEA (slide 6) ----------------
            The flagship. Carries the most visual weight on the site. */}
        <Section kicker={theBigIdea.kicker}>
          <Reveal className="mb-10 sm:mb-14">
            <Chip variant="magenta">{theBigIdea.chip}</Chip>
            <h2 className="mt-6 font-display text-section font-black uppercase text-lime text-balance">
              {theBigIdea.headline}
            </h2>
            <p className="mt-4 max-w-xl text-body italic text-mute">
              {theBigIdea.subline}
            </p>
          </Reveal>

          <Reveal className="mb-12">
            <div className="flex max-w-3xl flex-col gap-4">
              {theBigIdea.body.map((para) => (
                <p key={para} className="text-body text-white">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <ItemGrid items={theBigIdea.facts} />

          <Reveal className="mt-12">
            <Sticker accent="lime">
              <p className="font-display text-statement font-black uppercase text-white text-balance">
                {theBigIdea.closer}
              </p>
            </Sticker>
          </Reveal>
        </Section>

        {/* ---------------- 06 — THE LINEUP (slide 7) ---------------- */}
        <Section kicker={theLineup.kicker} headline={theLineup.headline}>
          <ItemGrid items={theLineup.items} />

          <Reveal className="mt-12">
            <Link
              href="/suggest"
              className="inline-block font-display text-statement font-black uppercase text-lime transition-opacity duration-150 hover:opacity-80"
            >
              {theLineup.closer}
            </Link>
          </Reveal>
        </Section>

        {/* ---------------- 07 — INITIATIVES (slide 8) ---------------- */}
        <Section
          kicker={theInitiatives.kicker}
          headline={theInitiatives.headline}
          subline={theInitiatives.subline}
        >
          <ItemGrid items={theInitiatives.items} />
        </Section>

        {/* ---------------- 08 — EVENTS WITH TASTE (slide 9) ---------------- */}
        <Section
          kicker={eventsWithTaste.kicker}
          headline={eventsWithTaste.headline}
          subline={eventsWithTaste.subline}
        >
          <ItemGrid items={eventsWithTaste.items} />
        </Section>

        {/* ---------------- 09 — THE CALENDAR (slide 10) ---------------- */}
        <Section
          kicker={calendarTeaser.kicker}
          headline={calendarTeaser.headline}
          subline={calendarTeaser.subline}
        >
          <Reveal>
            <ButtonLink href={calendarTeaser.cta.href}>
              {calendarTeaser.cta.label}
            </ButtonLink>
          </Reveal>
        </Section>

        {/* ---------------- 10 — EXECUTION (slide 11) ----------------
            Plain cards on purpose: this is the boring machinery, and
            accent blocks here would compete with the flagship. */}
        <Section kicker={execution.kicker} headline={execution.headline}>
          <ItemGrid items={execution.items} accented={false} />
        </Section>

        {/* ---------------- 11 — THE PROMISE (slide 12) ----------------
            The tonal drop. Pure typography, no cards, no chips, maximum
            size. This is deliberate and structural — do not decorate. */}
        <section className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-36">
          <Reveal>
            <Kicker className="mb-10">{thePromise.kicker}</Kicker>
          </Reveal>

          <Reveal index={1}>
            <p className="font-display text-hero font-black uppercase text-white">
              {thePromise.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>

          <Reveal index={2}>
            <p className="mt-12 max-w-3xl font-display text-statement font-black uppercase text-lime text-balance">
              {thePromise.statement}
            </p>
          </Reveal>

          <Reveal index={3}>
            <p className="mt-8 max-w-2xl text-body italic text-mute">
              {thePromise.note}
            </p>
          </Reveal>
        </section>

        {/* ---------------- THE CLOSE (slide 13) ---------------- */}
        <section className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal>
              <h2 className="max-w-4xl font-display text-section font-black uppercase text-white text-balance">
                {theClose.headline}
              </h2>
            </Reveal>

            <Reveal index={1}>
              <p className="mt-6 max-w-xl text-body italic text-mute">
                {theClose.subline}
              </p>
            </Reveal>

            <Reveal index={2}>
              <div className="mt-12">
                <Chip>{theClose.chip}</Chip>
                <p className="mt-4 font-display text-statement font-black uppercase text-white">
                  {theClose.name}
                </p>
                <p className="mt-2 font-mono text-meta font-bold uppercase tracking-[0.12em] text-mute">
                  {theClose.role}
                </p>
                <p className="mt-8 font-display text-xl font-black uppercase text-lime">
                  {theClose.tagline}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
