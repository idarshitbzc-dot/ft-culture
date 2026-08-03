/**
 * Holding copy for the three pages that need a backend before they can work.
 * These are live, public pages — the tone is a promise, not an apology.
 */

export type ComingSoonPage = {
  kicker: string;
  headline: string;
  subline: string;
  /** The sticker card body — what this page will actually do. */
  promise: string;
  /** Where to send someone who arrived here wanting something to read. */
  cta: { label: string; href: string };
};

export const pollsSoon: ComingSoonPage = {
  kicker: "OPENS WITH THE FIRST THEME FEST",
  headline: "YOU PICK THE NIGHT.",
  subline: "one tap. no login. results the second you vote.",
  promise:
    "every theme fest gets put to a vote before it happens — retro night, game night, garba warm-up, whatever you want next. the poll opens here with the first fest of the semester. no dead months means no dead polls either.",
  cta: { label: "SEE THE LINEUP", href: "/manifesto" },
};

export const suggestSoon: ComingSoonPage = {
  kicker: "OPENS WITH THE FIRST THEME FEST",
  headline: "SUGGEST ONE. RUN ONE.",
  subline: "anonymous by default. juniors, this one's for you.",
  promise:
    "the best themes will come from you — that's the whole point. this box opens with the first fest, it defaults to anonymous, and every suggestion gets read. the good ones get built, and you get credited for them.",
  cta: { label: "READ THE MANIFESTO", href: "/manifesto" },
};

export const reachOutSoon: ComingSoonPage = {
  kicker: "OPENS WITH THE FIRST THEME FEST",
  headline: "ONE CHANNEL. ALWAYS OPEN.",
  subline: "event requests, collaborations, and the things that went wrong.",
  promise:
    "communication was one of the five gaps, so this page is the fix — one place to pitch an event, offer a collab, or call out a standard i missed. it opens with the first fest. until then, the manifesto says what i'm accountable for.",
  cta: { label: "READ THE MANIFESTO", href: "/manifesto" },
};
