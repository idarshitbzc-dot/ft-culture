import { SiteHeader } from "@/components/SiteHeader";
import { Chip } from "@/components/primitives/Chip";
import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { Sticker, alternate } from "@/components/primitives/Sticker";
import {
  calendarHeader,
  calendarMonths,
  calendarNote,
  categoryLabels,
  type CalendarEvent,
} from "@/content/calendar";

/** Swatch colours for the legend, matching the event rows below it. */
const LEGEND_SWATCH: Record<string, string> = {
  "theme-fest": "bg-lime",
  festival: "bg-magenta",
  program: "bg-mute",
};

function EventRow({ event }: { event: CalendarEvent }) {
  const isThemeFest = event.category === "theme-fest";

  return (
    <li className="flex gap-4 border-t border-line pt-4 first:border-t-0 first:pt-0">
      {/* Fixed-width date gutter keeps every title on the same left edge. */}
      <div className="w-9 shrink-0 pt-0.5">
        <p
          className={`font-mono text-meta font-bold ${
            isThemeFest ? "text-lime" : "text-mute"
          }`}
        >
          {String(event.date).padStart(2, "0")}
        </p>
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-mute">
          {event.day}
        </p>
      </div>

      <div className="min-w-0 flex-1">
        <p
          className={`text-body ${
            isThemeFest ? "font-medium text-white" : "text-mute"
          }`}
        >
          {event.title}
        </p>
        {event.code && (
          <Chip className="mt-2">{event.code}</Chip>
        )}
        {event.category === "festival" && (
          <Chip variant="magenta" className="mt-2">
            FESTIVAL CORNER
          </Chip>
        )}
      </div>
    </li>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Section
          kicker={calendarHeader.kicker}
          headline={calendarHeader.headline}
          subline={calendarHeader.subline}
        >
          {/* The three rules the whole calendar is built on. */}
          <Reveal>
            <ul className="flex flex-wrap gap-3">
              {calendarHeader.rules.map((rule) => (
                <li key={rule}>
                  <Chip variant="quiet">{rule}</Chip>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Legend */}
          <Reveal index={1}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {(
                Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>
              ).map((key) => (
                <li key={key} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className={`size-2.5 shrink-0 rounded-full ${LEGEND_SWATCH[key]}`}
                  />
                  <span className="font-mono text-meta font-bold uppercase tracking-[0.12em] text-mute">
                    {categoryLabels[key]}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Months */}
          <ul className="mt-12 grid gap-8 sm:mt-16 sm:gap-10 md:grid-cols-2">
            {calendarMonths.map((month, i) => (
              // Reveal renders a div, so it sits inside the li — a div may not
              // be a direct child of ul.
              <li key={month.label}>
                <Reveal index={i} className="h-full">
                  <Sticker accent={alternate(i)} className="h-full">
                    <h3 className="font-display text-statement font-black uppercase text-white">
                      {month.label}
                    </h3>
                    <ul className="mt-6 flex flex-col gap-4">
                      {month.events.map((event) => (
                        <EventRow
                          key={`${month.label}-${event.date}`}
                          event={event}
                        />
                      ))}
                    </ul>
                  </Sticker>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-12 sm:mt-16">
            <p className="max-w-xl text-body italic text-mute">{calendarNote}</p>
          </Reveal>
        </Section>
      </main>
    </>
  );
}
