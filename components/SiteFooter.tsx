import Link from "next/link";
import { MotifRule } from "@/components/primitives/Motif";

const LINKS = [
  { href: "/manifesto", label: "MANIFESTO" },
  { href: "/polls", label: "POLLS" },
  { href: "/suggest", label: "SUGGEST" },
  { href: "/reach-out", label: "REACH OUT" },
];

/**
 * The campaign colophon. Closes every page on the deepest navy
 * in the palette, with the full motif strip as a printer's rule
 * across the top — the cultural vocabulary stated once, plainly,
 * at the end of the sheet.
 */
export function SiteFooter() {
  return (
    <footer className="band band-navy border-t-4 border-red bg-navy-deep">
      <div
        aria-hidden
        className="halftone-coarse halftone-fade-b pointer-events-none absolute inset-x-0 top-0 h-48 text-sky"
      />

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <MotifRule className="text-sky/45" />

        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-meta font-semibold uppercase tracking-[0.16em] text-sky">
              Sanskriti Ki Awaaz
            </p>
            <p className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] leading-[0.95] font-bold uppercase text-paper">
              One FT.
              <br />
              One Culture.
            </p>
            <div aria-hidden className="rule-stack mt-6">
              <span className="bg-red" />
              <span className="bg-sky" />
              <span className="bg-cream" />
            </div>
          </div>

          <div className="md:text-right">
            <p className="font-display text-2xl font-bold uppercase tracking-[0.02em] text-paper">
              Darshit Shah
            </p>
            <p className="mt-2 font-mono text-meta font-bold uppercase tracking-[0.16em] text-sky">
              Culture Secretary
              <br />
              Faculty of Technology · CEPT
            </p>
          </div>
        </div>

        <nav
          aria-label="Footer"
          className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-rule pt-8"
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-meta font-semibold uppercase tracking-[0.16em] text-sky transition-colors duration-150 hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-8 text-sm text-sky">
          A student campaign for the Faculty of Technology, CEPT University.
        </p>
      </div>
    </footer>
  );
}
