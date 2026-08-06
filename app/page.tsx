import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Experience } from "@/components/Experience";
import { CampaignPoster } from "@/components/CampaignPoster";
import { ButtonLink } from "@/components/primitives/Button";
import { Chip } from "@/components/primitives/Chip";
import { Kicker } from "@/components/primitives/Kicker";
import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { Placard } from "@/components/primitives/Placard";
import { MotifRule, MotifWash } from "@/components/primitives/Motif";
import { ballot, creed, hero, initiativesTeaser, pov } from "@/content/landing";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ================= HERO — the campaign poster =================
            Navy ground, halftone screen, oversized FT watermark and a
            cream ballot panel carrying the candidate's name. */}
        {/* `safe center` matters: the band clips its overflow, so plain
            centering would cut the headline off the top on short
            viewports with no way to scroll to it. `safe` falls back to
            flow-from-top exactly when the content does not fit. */}
        <section className="band band-navy relative flex min-h-[calc(100svh-3.75rem)] items-center [align-items:safe_center] overflow-hidden px-5 py-16 sm:px-8 sm:py-20">
          {/* Offset print screen across the whole plate. */}
          <div
            aria-hidden
            className="halftone-coarse halftone-fade-t pointer-events-none absolute inset-0 text-sky"
          />

          {/* The watermark sits behind the copy column only. On lg+ the
              poster takes the right side, so the watermark is pulled
              left of it rather than stacked underneath. */}
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-[38%] hidden -translate-y-1/2 select-none font-display text-[22rem] leading-none font-bold text-paper opacity-[0.045] lg:block xl:text-[26rem]"
          >
            {hero.watermark}
          </span>

          <MotifWash
            name="sitar"
            className="bottom-[-2rem] left-[-3rem] hidden size-72 text-sky opacity-[0.1] lg:block"
          />

          <div className="relative mx-auto w-full max-w-6xl">
            {/* Copy leads on every width; the poster follows it in the
                source order so a phone reads the message before the art. */}
            <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
              <div className="max-w-full">
              <Reveal>
                <Kicker tone="accent">{hero.kicker}</Kicker>
              </Reveal>

              <Reveal index={1}>
                <h1 className="mt-7 font-display text-hero font-bold uppercase text-paper">
                  {hero.headline.map((line, i) => (
                    <span
                      key={line}
                      className={`block ${i === 1 ? "text-sky" : ""}`}
                    >
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>

              {/* The slogan, set as a rotated red seal. */}
              <Reveal index={2}>
                <p className="mt-7">
                  <span className="stamp bg-red px-4 py-2 font-display text-[clamp(0.875rem,2.4vw,1.25rem)] font-bold uppercase tracking-[0.18em] text-paper">
                    {hero.slogan}
                  </span>
                </p>
              </Reveal>

              <Reveal index={3}>
                <p className="mt-8 max-w-lg text-body text-sky">
                  {hero.subline}
                </p>
              </Reveal>

              {/* Ballot panel — the candidate block, printed on cream
                  so it reads as the sticker on a navy poster. */}
              <Reveal index={4}>
                <div className="mt-10 inline-block max-w-full border-2 border-cream bg-cream px-6 py-5 shadow-[6px_6px_0_0_var(--color-red)]">
                  <p className="font-display text-[clamp(1.75rem,5vw,2.75rem)] leading-none font-bold uppercase text-navy">
                    {hero.name}
                  </p>
                  <p className="mt-3 font-mono text-meta font-bold uppercase tracking-[0.16em] text-red">
                    {hero.role}
                  </p>
                </div>
              </Reveal>

              <Reveal index={5}>
                <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-start">
                  <ButtonLink href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                  </ButtonLink>
                  <ButtonLink href={hero.secondaryCta.href} variant="outline">
                    {hero.secondaryCta.label}
                  </ButtonLink>
                </div>
              </Reveal>
              </div>

              {/* The poster. Capped in px rather than a fraction: at
                  1:2.12 a percentage width would grow it taller than
                  the viewport on wide screens. */}
              <Reveal index={6} className="lg:justify-self-end">
                <CampaignPoster
                  priority
                  className="w-full max-w-[300px] sm:max-w-[340px] lg:w-[300px] lg:max-w-none xl:w-[340px]"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================= TALLY BAND =================
            300+ / 1 / 0 — the old headline, kept as a stat row. Lifted
            out of the hero so the poster plate stays one screen tall. */}
        <section className="band band-navy overflow-hidden border-t border-rule">
          <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
            <ul className="flex flex-wrap gap-x-12 gap-y-7">
              {hero.stats.map((stat, i) => (
                <li key={stat.label}>
                  <Reveal index={i}>
                    <p className="font-display text-4xl leading-none font-bold text-paper sm:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-mono text-meta font-bold uppercase tracking-[0.16em] text-sky">
                      {stat.label}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= MOTIF RULE ================= */}
        <div className="band band-cream border-y-2 border-navy/15">
          <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
            <MotifRule className="text-navy/30" />
          </div>
        </div>

        {/* ================= POV ================= */}
        <Section tone="cream" motif="masks">
          <Reveal>
            <Chip variant="red">{pov.chip}</Chip>
            <p className="mt-7 max-w-4xl font-display text-section font-bold uppercase text-navy text-balance">
              {pov.line}
            </p>
          </Reveal>

          <Reveal index={1} className="mt-10">
            <Placard accent="navy" className="max-w-2xl">
              <p className="text-body text-ink">{pov.answer}</p>
            </Placard>
          </Reveal>
        </Section>

        {/* ================= CREED — the red band =================
            One line, no ornament. The tonal peak of the page. */}
        <section className="band band-red overflow-hidden">
          <div
            aria-hidden
            className="halftone pointer-events-none absolute inset-0 text-navy"
          />
          <MotifWash
            name="mic"
            className="top-1/2 right-[-2rem] size-56 -translate-y-1/2 text-paper opacity-[0.12] sm:size-72"
          />
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <Reveal>
              <p className="max-w-3xl font-display text-[clamp(2.25rem,7vw,4.5rem)] leading-[0.95] font-bold uppercase text-paper text-balance">
                {creed.headline}
              </p>
              <p className="mt-6 max-w-xl text-body text-paper/85">
                {creed.subline}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ================= EXPERIENCE / PAST WORK ================= */}
        <Experience />

        {/* ================= PROGRAMS ================= */}
        <Section
          tone="cream"
          motif="film"
          kicker={initiativesTeaser.kicker}
          headline={initiativesTeaser.headline}
          subline={initiativesTeaser.subline}
        >
          <ul className="flex flex-wrap gap-3">
            {initiativesTeaser.items.map((item, i) => (
              // Reveal renders a div, so it sits inside the li — a div
              // may not be a direct child of ul.
              <li key={item}>
                <Reveal index={i}>
                  <Link
                    href={initiativesTeaser.cta.href}
                    className="block transition-colors duration-150"
                  >
                    <Chip
                      variant="quiet"
                      className="border-navy/30 hover:border-red hover:bg-red hover:text-paper"
                    >
                      {item}
                    </Chip>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-12">
            <ButtonLink href={initiativesTeaser.cta.href} variant="navy">
              {initiativesTeaser.cta.label}
            </ButtonLink>
          </Reveal>
        </Section>

        {/* ================= BALLOT CLOSE ================= */}
        <section className="band band-navy overflow-hidden">
          <MotifWash
            name="dance"
            className="right-[-3rem] bottom-[-3rem] size-72 text-sky opacity-[0.1] sm:size-96"
          />
          <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <Reveal>
              <Kicker tone="accent">{ballot.kicker}</Kicker>
            </Reveal>

            <Reveal index={1}>
              <h2 className="mt-7 max-w-4xl font-display text-section font-bold uppercase text-paper text-balance">
                {ballot.headline}
              </h2>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-6 max-w-xl text-body text-sky">
                {ballot.subline}
              </p>
            </Reveal>

            {/* The ballot slip, with the poster alongside it. `items-end`
                bottom-aligns the two so the slip sits on the poster's
                baseline instead of floating against its middle. */}
            <div className="mt-12 flex flex-col gap-12 md:flex-row md:items-end md:gap-14">
              <Reveal index={3} className="min-w-0">
                <div className="inline-block max-w-full border-2 border-cream bg-cream p-6 shadow-[8px_8px_0_0_var(--color-red)] sm:p-8">
                  <p className="font-mono text-meta font-bold uppercase tracking-[0.16em] text-red">
                    {hero.vote}
                  </p>
                  <p className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] leading-none font-bold uppercase text-navy">
                    {ballot.name}
                  </p>
                  <p className="mt-4 max-w-sm font-mono text-meta font-bold uppercase tracking-[0.16em] text-ink-mute">
                    {ballot.role}
                  </p>
                  <div aria-hidden className="rule-stack mt-6">
                    <span className="bg-navy" />
                    <span className="bg-red" />
                    <span className="bg-sky" />
                  </div>
                </div>

                <div className="mt-12">
                  <ButtonLink href={ballot.cta.href}>
                    {ballot.cta.label}
                  </ButtonLink>
                </div>
              </Reveal>

              <Reveal index={4} className="shrink-0">
                <CampaignPoster
                  className="w-full max-w-[260px] sm:max-w-[280px]"
                  sizes="(min-width: 640px) 280px, 260px"
                />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
