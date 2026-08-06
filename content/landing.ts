/**
 * Landing page copy. Edit text here — never in components.
 */

export const hero = {
  kicker: "FACULTY OF TECHNOLOGY · CEPT UNIVERSITY",
  /** The poster line. Kept to three words per row on purpose. */
  headline: ["ONE FT.", "ONE CULTURE."] as const,
  slogan: "SANSKRITI KI AWAAZ",
  subline: "A whole cultural year. Actually planned. Actually happening.",
  name: "DARSHIT SHAH",
  role: "FOR CULTURE SECRETARY",
  vote: "VOTE DARSHIT SHAH",
  watermark: "FT",
  stats: [
    { value: "300+", label: "STUDENTS" },
    { value: "1", label: "STAGE" },
    { value: "0", label: "EXCUSES" },
  ] as const,
  primaryCta: { label: "READ THE MANIFESTO", href: "/manifesto" },
  secondaryCta: { label: "VOTE IN THE POLL", href: "/polls" },
};

export const pov = {
  chip: "POV",
  line: "you're two years into FT and your best memory here is still orientation week.",
  answer:
    "that's not a you problem. that's a system problem. the talent has always been here. the calendar hasn't.",
};

/** The one-line thesis, set as a full red band between sections. */
export const creed = {
  headline: "CULTURE ISN'T EXTRA.",
  subline: "In a faculty this size, it's infrastructure.",
};

export const initiativesTeaser = {
  kicker: "THE PROGRAMS",
  headline: "SEVEN THINGS THAT RUN ALL YEAR",
  subline: "Not one-offs. Programs.",
  items: [
    "THE COMMON HALL SESSIONS",
    "FT OPEN STAGE",
    "JUNIORS x SENIORS TABLE",
    "FT SPOTLIGHT",
    "FESTIVAL CORNERS",
    "THE SEMESTER DROP",
    "THE 48-HOUR RECAP",
  ] as const,
  cta: { label: "READ THE MANIFESTO", href: "/manifesto" },
};

/** The closing ballot block that ends the landing page. */
export const ballot = {
  kicker: "ON POLLING DAY",
  headline: "PICK A FORTNIGHT. ANY FORTNIGHT.",
  subline: "Every two weeks. All year. For all 300 of us.",
  name: "DARSHIT SHAH",
  role: "CULTURE SECRETARY · FACULTY OF TECHNOLOGY",
  cta: { label: "READ THE MANIFESTO", href: "/manifesto" },
};
