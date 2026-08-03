/**
 * The cultural calendar. Edit dates and titles here — never in components.
 * Source: FT_Cultural_Calendar_2026_OneSlide.pptx. Weekdays are real 2026
 * weekdays; if you move a date, fix `day` to match or it will read wrong.
 */

export type EventCategory = "theme-fest" | "festival" | "program";

export type CalendarEvent = {
  /** Day of the month, 1–31. */
  date: number;
  /** Three-letter weekday for that date in 2026. */
  day: string;
  /** Theme-fest sequence number, e.g. `TF 01`. Theme fests only. */
  code?: string;
  title: string;
  category: EventCategory;
};

export type CalendarMonth = {
  label: string;
  events: CalendarEvent[];
};

export const calendarHeader = {
  kicker: "THE FT CULTURAL CALENDAR · 2026",
  headline: "THE DROP SCHEDULE",
  subline: "every 2 weeks: theme fest · every month: open stage + spotlight",
  rules: [
    "A THEME FEST EVERY 2 WEEKS",
    "OPEN STAGE + SPOTLIGHT EVERY MONTH",
    "PUBLISHED IN WEEK ONE",
  ] as const,
};

/** Legend copy, in the order it renders. */
export const categoryLabels: Record<EventCategory, string> = {
  "theme-fest": "THEME FEST — the biweekly ritual",
  festival: "FESTIVAL CORNER",
  program: "PROGRAM EVENT",
};

export const calendarMonths: CalendarMonth[] = [
  {
    label: "AUGUST '26",
    events: [
      { date: 3, day: "Mon", title: "The Semester Drop", category: "program" },
      { date: 14, day: "Fri", code: "TF 01", title: "Open Mic Night", category: "theme-fest" },
      { date: 21, day: "Fri", title: "Juniors x Seniors Table", category: "program" },
      { date: 28, day: "Fri", code: "TF 02", title: "Game Night", category: "theme-fest" },
    ],
  },
  {
    label: "SEPTEMBER '26",
    events: [
      { date: 5, day: "Sat", title: "Engineer's Treasure Hunt", category: "program" },
      { date: 11, day: "Fri", code: "TF 03", title: "Retro Night", category: "theme-fest" },
      { date: 19, day: "Sat", title: "Soundcheck Saturday", category: "program" },
      { date: 25, day: "Fri", code: "TF 04", title: "Film & Music Night", category: "theme-fest" },
    ],
  },
  {
    label: "OCTOBER '26",
    events: [
      { date: 3, day: "Sat", code: "TF 05", title: "Garba Warm-Up", category: "theme-fest" },
      { date: 14, day: "Wed", title: "Navratri", category: "festival" },
      { date: 23, day: "Fri", code: "TF 06", title: "Street Culture Night", category: "theme-fest" },
      { date: 31, day: "Sat", title: "Jrs vs Srs Showdown", category: "program" },
    ],
  },
  {
    label: "NOVEMBER '26",
    events: [
      { date: 6, day: "Fri", title: "Diwali", category: "festival" },
      { date: 13, day: "Fri", code: "TF 07", title: "Heritage Night", category: "theme-fest" },
      { date: 21, day: "Sat", title: "Ahmedabad After Hours", category: "program" },
      { date: 27, day: "Fri", code: "TF 08", title: "Culture & Cinema", category: "theme-fest" },
    ],
  },
  {
    label: "DECEMBER '26",
    events: [
      { date: 4, day: "Fri", code: "TF 09", title: "Tech x Culture Night", category: "theme-fest" },
      { date: 9, day: "Wed", title: "Design x Culture Showcase", category: "program" },
      { date: 14, day: "Mon", title: "The Wall of FT", category: "program" },
      { date: 18, day: "Fri", title: "FT Mehfil — the closer", category: "theme-fest" },
    ],
  },
];

export const calendarNote =
  "sample dates on real 2026 weekdays — the final calendar gets locked with the student committee in week one. the rhythm itself is non-negotiable.";
