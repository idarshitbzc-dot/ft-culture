import { cn } from "@/lib/cn";

/* ============================================================
   CULTURAL LINE-ART MOTIFS

   Hand-drawn stroke paths on a 64×64 grid. Deliberately thin,
   open and unfilled: these are meant to read as printer's
   ornament behind the message, never as illustration competing
   with it.

   They inherit `currentColor` and stroke width scales with the
   box, so a motif at 400px stays as light as one at 40px.

   No icon dependency is added for these — a guitar, a sitar and
   a tabla are not in any general icon set, and shipping a whole
   library for the four shapes that do exist would cost more
   than the ten paths below.
   ============================================================ */

export type MotifName =
  | "guitar"
  | "sitar"
  | "tabla"
  | "mic"
  | "lights"
  | "film"
  | "dance"
  | "masks"
  | "brush"
  | "arch";

/** Path geometry only — every motif shares one <svg> wrapper. */
const PATHS: Record<MotifName, React.ReactNode> = {
  // Acoustic guitar: figure-eight body, neck, headstock, strings.
  guitar: (
    <>
      <path d="M25 38c0-6 5-8 5-13s-4-6-4-11c0-4 3-7 7-7s7 3 7 7c0 5-4 6-4 11s5 7 5 13c0 8-5 14-8 14s-8-6-8-14Z" />
      <circle cx="34" cy="38" r="4.5" />
      <path d="M34 7v-4M30 3h8" />
      <path d="M31.5 14v10M36.5 14v10" />
    </>
  ),
  // Sitar: long neck, gourd resonator, curved tuning pegs.
  sitar: (
    <>
      <path d="M18 52c0-6 4-10 9-10s9 4 9 10-4 9-9 9-9-3-9-9Z" />
      <path d="M30 44 48 14" />
      <path d="M46 10c2-3 5-4 7-2s2 5-1 7" />
      <path d="M40 22l4 2M36 29l4 2M32 36l4 2" />
      <circle cx="27" cy="52" r="3" />
    </>
  ),
  // Tabla pair: dayan and bayan, seen three-quarter on.
  tabla: (
    <>
      <ellipse cx="23" cy="27" rx="10" ry="4.5" />
      <path d="M13 27v12c0 3 4.5 5.5 10 5.5s10-2.5 10-5.5V27" />
      <ellipse cx="45" cy="32" rx="8" ry="3.8" />
      <path d="M37 32v9c0 2.5 3.6 4.5 8 4.5s8-2 8-4.5v-9" />
      <circle cx="23" cy="27" r="3" />
      <circle cx="45" cy="32" r="2.4" />
    </>
  ),
  // Stage microphone: capsule, grille lines, yoke, stand.
  mic: (
    <>
      <rect x="26" y="8" width="12" height="24" rx="6" />
      <path d="M29 15h6M29 20h6M29 25h6" />
      <path d="M20 28c0 7.7 6.3 14 14 14s14-6.3 14-14" />
      <path d="M34 42v10M27 56h14" />
    </>
  ),
  // Stage lighting rig: truss bar, two fixtures, light cones.
  lights: (
    <>
      <path d="M8 12h48" />
      <path d="M20 12v5M44 12v5" />
      <path d="M14 17h12l-2 8H16Z" />
      <path d="M38 17h12l-2 8H40Z" />
      <path d="m17 27-6 26M23 27l4 26" />
      <path d="m41 27-4 26M47 27l6 26" />
    </>
  ),
  // Film strip running on the diagonal, with sprocket holes.
  film: (
    <>
      <rect x="10" y="18" width="44" height="28" rx="2" />
      <path d="M10 25h44M10 39h44" />
      <path d="M16 18v7M24 18v7M32 18v7M40 18v7M48 18v7" />
      <path d="M16 39v7M24 39v7M32 39v7M40 39v7M48 39v7" />
    </>
  ),
  // Dancer mid-movement: garba/folk silhouette, open arms.
  dance: (
    <>
      <circle cx="34" cy="12" r="5" />
      <path d="M34 17v16" />
      <path d="m34 20-12-5M34 20l12-9" />
      <path d="m34 33-8 10-3 11M34 33l9 9 1 12" />
      <path d="M20 13c-1.5-1.5-1.5-3 0-4.5" />
      <path d="M48 9c1.5-1.5 3-1.5 4.5 0" />
    </>
  ),
  // Theatre masks: comedy in front, tragedy behind.
  masks: (
    <>
      <path d="M12 20h20v14c0 7-4.5 12-10 12s-10-5-10-12Z" />
      <path d="M17 28c1.5 1.5 3 1.5 4.5 0M23 28c1.5 1.5 3 1.5 4.5 0" />
      <path d="M18 37c2.5 3 6 3 8.5 0" />
      <path d="M32 20h20v14c0 7-4.5 12-10 12s-10-5-10-12" />
      <path d="M37 29c1.5-1.5 3-1.5 4.5 0M43 29c1.5-1.5 3-1.5 4.5 0" />
      <path d="M38 40c2.5-3 6-3 8.5 0" />
    </>
  ),
  // Paint brush with a single loaded stroke.
  brush: (
    <>
      <path d="M40 10 54 24 34 44l-14-14Z" />
      <path d="m20 30-6 14 14-6" />
      <path d="M14 44 8 56" />
      <path d="M44 20 34 30" />
    </>
  ),
  // CEPT-flavoured architecture: repeating vaults on a plinth.
  arch: (
    <>
      <path d="M6 50V34c0-6 4.5-10 10-10s10 4 10 10v16" />
      <path d="M26 50V34c0-6 4.5-10 10-10s10 4 10 10v16" />
      <path d="M46 50V34c0-6 4.5-10 10-10" />
      <path d="M2 50h60M2 56h60" />
      <path d="M16 50V38M36 50V38" />
    </>
  ),
};

/**
 * A single line-art motif. Decorative by default — it carries
 * aria-hidden unless you give it a title, which is the only case
 * where it should be exposed to assistive tech.
 */
export function Motif({
  name,
  className,
  strokeWidth = 1.5,
  title,
}: {
  name: MotifName;
  className?: string;
  strokeWidth?: number;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={cn("shrink-0", className)}
    >
      {title && <title>{title}</title>}
      {PATHS[name]}
    </svg>
  );
}

/** Every motif, in the order they read best as a repeating set. */
export const ALL_MOTIFS: MotifName[] = [
  "guitar",
  "mic",
  "tabla",
  "film",
  "dance",
  "sitar",
  "masks",
  "brush",
  "lights",
  "arch",
];

/**
 * A horizontal strip of motifs, evenly spaced — used as a
 * printer's rule between bands and inside the footer.
 * Purely decorative, so the whole strip is hidden from AT.
 *
 * Ten motifs do not fit across a phone: at 390px they overflow
 * and the strip ends on a half-drawn shape. Rather than scroll
 * or shrink them past legibility, the later ones are simply
 * dropped until the viewport can hold them.
 */
/* Six fit a 390px phone with room to spare (6×28 + 5×16 = 248 of
   350 available); eight fit from 26rem; all ten from 40rem up. */
const VISIBILITY = [
  "",
  "",
  "",
  "",
  "",
  "",
  "hidden xs:block",
  "hidden xs:block",
  "hidden sm:block",
  "hidden sm:block",
];

export function MotifRule({
  className,
  count = 10,
  from = 0,
}: {
  className?: string;
  count?: number;
  from?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex items-center justify-between gap-4 overflow-hidden",
        className,
      )}
    >
      {Array.from({ length: count }, (_, i) => (
        <Motif
          key={i}
          name={ALL_MOTIFS[(i + from) % ALL_MOTIFS.length]}
          className={cn("size-7 shrink-0 sm:size-8", VISIBILITY[i] ?? "")}
          strokeWidth={1.4}
        />
      ))}
    </div>
  );
}

/**
 * Large, very low-opacity motif parked in a corner of a section.
 * Pointer-events are off and it is clipped by the band, so it can
 * never intercept a click or widen the page on a small screen.
 */
export function MotifWash({
  name,
  className,
  strokeWidth = 0.9,
}: {
  name: MotifName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <Motif
      name={name}
      strokeWidth={strokeWidth}
      className={cn("pointer-events-none absolute select-none", className)}
    />
  );
}
