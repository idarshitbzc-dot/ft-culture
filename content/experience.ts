/**
 * Experience / Past Work. Written as campaign evidence, not as a
 * CV: each entry is a role that was actually held and a single
 * line on what it proves. Resist adding dates, durations or
 * bullet lists here — the moment it reads like a résumé it stops
 * doing the job the section exists to do.
 */

export type Credential = {
  /** The role held — the claim being made. */
  role: string;
  /** Where it was held. */
  org: string;
  /** One line on what the role actually demanded. */
  proof: string;
};

export const experience = {
  kicker: "THE RECEIPTS",
  headline: "EXPERIENCE THAT ALREADY SHOWS UP.",
  subline: "Built through real cultural work — not a first attempt.",
  items: [
    {
      role: "Sponsorship Team Leader",
      org: "SCET, Surat",
      proof:
        "Led the team that funded the events. Budgets, pitches and follow-through with people outside the campus.",
    },
    {
      role: "Cultural Head",
      org: "Ochhav — Patan, Gujarat",
      proof:
        "Owned a cultural programme end to end. Planning, crews, stage and the night itself.",
    },
  ] as Credential[],
  closer: "Two roles. Both cultural. Both delivered.",
};
