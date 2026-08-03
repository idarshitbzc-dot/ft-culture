/**
 * Manifesto copy. Edit text here — never in components.
 * Source: Darshit_Culture_Secretary_Manifesto_1.pptx (13 slides), verbatim.
 * Section numbering follows the deck's own scheme — slide 7 is labelled
 * "06 — THEME FEST: THE LINEUP" there, and everything else counts from that.
 */

export type NamedItem = {
  title: string;
  body: string;
};

/** Slide 1 — the opening statement. */
export const manifestoHero = {
  kicker: "FACULTY OF TECHNOLOGY · CEPT UNIVERSITY",
  headline: ["300+ STUDENTS.", "ONE STAGE.", "ONE CULTURE."] as const,
  subline: "It's time FT had a rhythm of its own.",
  name: "DARSHIT SHAH",
  role: "FOR CULTURE SECRETARY",
};

/** Slide 2 — why culture matters at all. */
export const whyCulture = {
  kicker: "01 — CULTURE ISN'T EXTRA",
  headline: "CULTURE ISN'T EXTRA. IT'S WHAT MAKES 300+ PEOPLE ONE FT.",
  subline:
    "Classes give you a degree. Culture gives you the years you'll actually talk about.",
  items: [
    {
      title: "CONNECTED",
      body: "Friendships that cross studios, batches and years — not just your own classroom.",
    },
    {
      title: "ALIVE",
      body: "Something on the calendar to look forward to, every single fortnight.",
    },
    {
      title: "MEMORABLE",
      body: "The evenings you'll still be talking about at convocation.",
    },
  ] as NamedItem[],
  closingStatement:
    "In a faculty this size, culture isn't decoration. It's infrastructure.",
  closingNote:
    "It decides whether FT feels like a corridor you pass through — or a place you belong to.",
};

/** Slide 3 — the five gaps. */
export const theGaps = {
  kicker: "02 — WHAT FT NEEDS",
  headline: "THE TALENT IS HERE. THE SYSTEM ISN'T.",
  subline: "Five gaps. All fixable.",
  items: [
    {
      title: "CONSISTENCY",
      body: "Events that don't vanish the moment submissions hit.",
    },
    {
      title: "PARTICIPATION",
      body: "More than the same thirty faces at every event.",
    },
    {
      title: "COMMUNICATION",
      body: "A week's notice — not a poster the night before.",
    },
    {
      title: "INTER-YEAR BONDING",
      body: "Juniors and seniors who actually know each other.",
    },
    {
      title: "QUALITY",
      body: "Real sound, real setup, a real experience.",
    },
  ] as NamedItem[],
};

/** Slide 4 — the vision. */
export const theVision = {
  kicker: "03 — MY VISION",
  headline: "FT, FULLY ALIVE.",
  subline: "Not louder. Better.",
  lead: "A cultural life that looks like us — technical minds with taste.",
  items: [
    {
      title: "ACTIVE",
      body: "Something happening every two weeks. No dead months.",
    },
    {
      title: "INCLUSIVE",
      body: "Performer, organiser or audience — every role counts.",
    },
    {
      title: "EXPRESSIVE",
      body: "Music, film, art, poetry, design — every language of culture.",
    },
    {
      title: "CLASSY",
      body: "Curated and well-produced. Never random, never tacky.",
    },
    {
      title: "CONNECTED",
      body: "One faculty across four years, not four separate crowds.",
    },
    {
      title: "STUDENT-LED",
      body: "Built by FT students, for FT students. I just hold the mic.",
    },
  ] as NamedItem[],
};

/** Slide 5 — the five pillars. */
export const thePillars = {
  kicker: "04 — THE FIVE PILLARS",
  headline: "FIVE PROMISES. ONE STANDARD.",
  items: [
    {
      title: "A CALENDAR THAT HOLDS",
      body: "Published in week one. Followed all semester.",
    },
    {
      title: "QUALITY OVER QUANTITY",
      body: "Fewer, better — every event worth showing up for.",
    },
    {
      title: "STUDENT-LED, ALWAYS",
      body: "Open committees, real ownership, shared credit.",
    },
    {
      title: "YEARS THAT MIX",
      body: "Every event designed to cross batches.",
    },
    {
      title: "TALENT GETS SEEN",
      body: "Stages, features and credit for FT's own.",
    },
  ] as NamedItem[],
};

/** Slide 6 — the flagship. Gets the most visual weight on the site. */
export const theBigIdea = {
  kicker: "05 — THE BIG IDEA",
  chip: "FLAGSHIP",
  headline: "THE BIWEEKLY CULTURAL THEME FEST",
  subline: "Every two weeks. One theme. One evening that belongs to FT.",
  body: [
    "A small faculty is a superpower — all 300 of us fit in one hall. So instead of waiting all year for one big fest, FT gets a premium little one every two weeks.",
    "The common hall (or one big classroom) is transformed around a single theme: the decor, the music, the food, the activities — all in sync. Proper speakers. Real ambience. A stage for anyone who wants it.",
  ] as const,
  facts: [
    { title: "EVERY 2 WEEKS", body: "a fixed ritual, not a surprise" },
    { title: "COMMON HALL", body: "or one big classroom, transformed" },
    { title: "ONE THEME", body: "decor, music, food, activities in sync" },
    { title: "REAL SOUND", body: "big speakers, proper setup" },
    { title: "OPEN FORMAT", body: "performances, screenings, games, displays" },
    { title: "LOW COST", body: "big vibe, small budget, zero excuses" },
  ] as NamedItem[],
  closer:
    "Miss one? The next is only fourteen days away. That's not an event. That's a ritual.",
};

/** Slide 7 — the ten themes. */
export const theLineup = {
  kicker: "06 — THEME FEST: THE LINEUP",
  headline: "PICK A FORTNIGHT. ANY FORTNIGHT.",
  items: [
    {
      title: "RETRO NIGHT",
      body: "Old Bollywood, vinyl-era playlists, vintage dress code.",
    },
    {
      title: "DESI EVENING",
      body: "Folk, classics and comfort food, done with taste.",
    },
    {
      title: "AHMEDABAD HERITAGE NIGHT",
      body: "The city's pols, stories and photographs.",
    },
    {
      title: "MONSOON MEHFIL",
      body: "Rain outside — chai, poetry and acoustic sets inside.",
    },
    {
      title: "FILM & MUSIC NIGHT",
      body: "A curated screening with a live opening act.",
    },
    {
      title: "TECH x CULTURE NIGHT",
      body: "Projection art, digital work, playlists built by FT.",
    },
    {
      title: "OPEN MIC NIGHT",
      body: "The floor is anyone's. Five minutes each.",
    },
    {
      title: "GAME NIGHT",
      body: "Charades, pop quiz, cultural games, healthy chaos.",
    },
    {
      title: "GARBA WARM-UP",
      body: "Navratri practice with full sound, weeks early.",
    },
    {
      title: "STREET CULTURE NIGHT",
      body: "Hip-hop, street food and a live graffiti wall.",
    },
  ] as NamedItem[],
  closer: "…and the best themes will come from you. Suggest one, run one.",
};

/** Slide 8 — the seven named programs. */
export const theInitiatives = {
  kicker: "07 — SIGNATURE INITIATIVES",
  headline: "PROGRAMS. NOT ONE-OFFS.",
  subline:
    "Seven named commitments — each one repeatable, ownable, and built to outlast a semester.",
  items: [
    {
      title: "THE COMMON HALL SESSIONS",
      body: "The biweekly theme fest — FT's own cultural ritual.",
    },
    {
      title: "FT OPEN STAGE",
      body: "A monthly open mic: music, stand-up, theatre, anything.",
    },
    {
      title: "JUNIORS x SENIORS TABLE",
      body: "Bonding games, team challenges and honest advice.",
    },
    {
      title: "FT SPOTLIGHT",
      body: "One student's talent featured and staged every month.",
    },
    {
      title: "FESTIVAL CORNERS",
      body: "Small, curated festival celebrations — not just decoration.",
    },
    {
      title: "THE SEMESTER DROP",
      body: "The full cultural calendar, published in week one.",
    },
    {
      title: "THE 48-HOUR RECAP",
      body: "Photos, credits and feedback within two days of every event.",
    },
  ] as NamedItem[],
};

/** Slide 9 — the recurring formats. */
export const eventsWithTaste = {
  kicker: "08 — EVENTS WITH TASTE",
  headline: "EVENTS WITH TASTE.",
  subline: "Curated, not random. Each one designed, not just scheduled.",
  items: [
    {
      title: "FT MEHFIL",
      body: "Music, poetry, storytelling and acoustic evenings.",
    },
    {
      title: "CULTURE & CINEMA NIGHTS",
      body: "Curated screenings — then real conversation.",
    },
    {
      title: "DESIGN x CULTURE SHOWCASE",
      body: "Posters, photos, sketches, models, digital art.",
    },
    {
      title: "AHMEDABAD AFTER HOURS",
      body: "Heritage walks, photowalks and food trails.",
    },
    {
      title: "SOUNDCHECK SATURDAYS",
      body: "Jam sessions and music evenings, plugged in.",
    },
    {
      title: "SKILL SWAP EVENINGS",
      body: "Students teaching students — music to editing.",
    },
    {
      title: "THE WALL OF FT",
      body: "Rotating art, photography, poetry and event memories.",
    },
  ] as NamedItem[],
};

/** Slide 10 lives on its own page — this is the pointer to it. */
export const calendarTeaser = {
  kicker: "09 — THE CALENDAR",
  headline: "THE FT CULTURAL CALENDAR · 2026.",
  subline:
    "A theme fest every 2 weeks · open stage + spotlight every month · published in week one.",
  cta: { label: "SEE THE FULL CALENDAR", href: "/calendar" },
};

/** Slide 11 — how it actually runs. */
export const execution = {
  kicker: "10 — EXECUTION",
  headline: "IDEAS ARE EASY. EXECUTION IS HERE.",
  items: [
    {
      title: "VOLUNTEER CREWS",
      body: "Open sign-ups for every event. No closed circles.",
    },
    {
      title: "SMALL COMMITTEES",
      body: "3–5 students own each event, end to end.",
    },
    {
      title: "MONTHLY PLANNING",
      body: "One open meet a month. Anyone can pitch.",
    },
    {
      title: "CLEAR ANNOUNCEMENTS",
      body: "One channel, one poster, one week's notice.",
    },
    {
      title: "FEEDBACK LOOPS",
      body: "A quick poll after every event. We adjust.",
    },
    {
      title: "SIMPLE BUDGETS",
      body: "Low-cost, transparent, and shared openly.",
    },
    {
      title: "CLUB & FACULTY COLLABS",
      body: "Team up with clubs and other faculties when it fits.",
    },
    {
      title: "SMART VENUES",
      body: "Common hall and big classrooms, used properly.",
    },
  ] as NamedItem[],
};

/**
 * Slide 12 — the tonal drop. Pure typography, no cards, no chips.
 * This section is deliberately undecorated. Do not add ornament here.
 */
export const thePromise = {
  kicker: "11 — MY PROMISE",
  lines: ["NO DEAD MONTHS.", "NO CLOSED CIRCLES.", "NO UNSEEN TALENT."] as const,
  statement: "JUST A FACULTY THAT FEELS ALIVE — EVERY TWO WEEKS, ALL YEAR.",
  note: "And if I ever miss that standard — call it out. It's your culture. I'm just accountable for it.",
};

/** Slide 13 — the close. */
export const theClose = {
  headline: "THIS IS THE PART WHERE FT GETS A CULTURE WORTH SHOWING UP FOR.",
  subline: "300+ students. One stage. One culture. Let's build it together.",
  chip: "VOTE",
  name: "DARSHIT SHAH",
  role: "CULTURE SECRETARY · FACULTY OF TECHNOLOGY",
  tagline: "Every two weeks. All year. For all 300 of us.",
};
