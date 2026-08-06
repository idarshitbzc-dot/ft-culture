import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { Motif } from "@/components/primitives/Motif";
import { experience } from "@/content/experience";

/** One motif per credential, in the order the entries are listed. */
const ICONS = ["arch", "dance"] as const;

/**
 * Experience / Past Work.
 *
 * Deliberately NOT a résumé: no dates, no durations, no bullets.
 * Each credential is a numbered placard — the role stated large,
 * the organisation beneath it, and one line of proof. Numbering
 * them makes two entries read as a record rather than a short
 * list, which is the whole reason this section earns its band.
 */
export function Experience() {
  return (
    <Section
      id="experience"
      tone="navy"
      motif="lights"
      kicker={experience.kicker}
      headline={experience.headline}
      subline={experience.subline}
    >
      <ul className="grid gap-8 sm:gap-10 md:grid-cols-2">
        {experience.items.map((item, i) => (
          // Reveal renders a div, so it sits inside the li — a div
          // may not be a direct child of ul.
          <li key={`${item.role}-${item.org}`}>
            <Reveal index={i} className="h-full">
              <article className="placard placard-red relative flex h-full flex-col p-6 sm:p-8">
                {/* Corner motif, clipped by the placard's own box. */}
                <Motif
                  name={ICONS[i % ICONS.length]}
                  strokeWidth={1}
                  className="pointer-events-none absolute top-4 right-4 size-16 text-navy opacity-10 sm:size-20"
                />

                <span
                  aria-hidden
                  className="font-display text-5xl leading-none font-bold text-red sm:text-6xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 font-display text-[clamp(1.375rem,3.2vw,1.875rem)] leading-[1.1] font-bold uppercase text-navy text-balance">
                  {item.role}
                </h3>

                <p className="mt-2 font-mono text-meta font-bold uppercase tracking-[0.16em] text-red">
                  {item.org}
                </p>

                <div aria-hidden className="rule-stack mt-5 !w-14">
                  <span className="bg-navy" />
                  <span className="bg-red" />
                  <span className="bg-sky" />
                </div>

                <p className="mt-5 text-body text-ink-mute">{item.proof}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal index={2} className="mt-12">
        <p className="font-display text-statement font-bold uppercase text-sky text-balance">
          {experience.closer}
        </p>
      </Reveal>
    </Section>
  );
}
