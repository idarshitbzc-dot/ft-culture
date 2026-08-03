import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { ButtonLink } from "@/components/primitives/Button";
import { Chip } from "@/components/primitives/Chip";
import { Kicker } from "@/components/primitives/Kicker";
import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { Sticker } from "@/components/primitives/Sticker";
import { hero, initiativesTeaser, pov } from "@/content/landing";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ---------------- HERO ---------------- */}
        <section className="relative flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden px-5 py-16 sm:px-8">
          {/* Watermark is confined to the right edge and only shown at lg+,
              where the headline column is capped well clear of it. */}
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-[-2rem] hidden -translate-y-1/2 select-none font-display text-[24rem] leading-none font-black text-watermark lg:block xl:text-[30rem]"
          >
            {hero.watermark}
          </span>

          <div className="relative mx-auto w-full max-w-6xl">
            <div className="max-w-full lg:max-w-[58%]">
              <Reveal>
                <Kicker tone="lime">{hero.kicker}</Kicker>
              </Reveal>

              <Reveal index={1}>
                <h1 className="mt-6 font-display text-hero font-black uppercase">
                  {hero.headline.map((line, i) => (
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
                  {hero.subline}
                </p>
              </Reveal>

              <Reveal index={3}>
                <div className="mt-10">
                  <div className="h-1 w-16 bg-magenta" />
                  <p className="mt-4 font-display text-statement font-black uppercase text-white">
                    {hero.name}
                  </p>
                  <Chip className="mt-4">{hero.role}</Chip>
                </div>
              </Reveal>

              <Reveal index={4}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-start">
                  <ButtonLink href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                  </ButtonLink>
                  <ButtonLink href={hero.secondaryCta.href} variant="outline">
                    {hero.secondaryCta.label}
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- POV ---------------- */}
        <Section>
          <Reveal>
            <Chip variant="magenta">{pov.chip}</Chip>
            <p className="mt-6 max-w-4xl font-display text-section font-black text-white text-balance">
              {pov.line}
            </p>
          </Reveal>

          <Reveal index={1} className="mt-10">
            <Sticker accent="lime" className="max-w-2xl">
              <p className="text-body text-white">{pov.answer}</p>
            </Sticker>
          </Reveal>
        </Section>

        {/* ---------------- INITIATIVES TEASER ---------------- */}
        <Section
          kicker={initiativesTeaser.kicker}
          headline={initiativesTeaser.headline}
          subline={initiativesTeaser.subline}
        >
          <ul className="flex flex-wrap gap-3">
            {initiativesTeaser.items.map((item, i) => (
              // Reveal renders a div, so it sits inside the li — a div may not
              // be a direct child of ul.
              <li key={item}>
                <Reveal index={i}>
                  <Link href={initiativesTeaser.cta.href}>
                    <Chip variant="quiet">{item}</Chip>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-10">
            <ButtonLink href={initiativesTeaser.cta.href}>
              {initiativesTeaser.cta.label}
            </ButtonLink>
          </Reveal>
        </Section>
      </main>
    </>
  );
}
