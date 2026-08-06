"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "/manifesto", label: "MANIFESTO" },
  { href: "/polls", label: "POLLS" },
  { href: "/suggest", label: "SUGGEST" },
  { href: "/reach-out", label: "REACH OUT" },
];

/**
 * The masthead. A navy bar with a halftone screen and the
 * campaign's three-colour chord pinned along the bottom edge —
 * the same rule that sits under every section heading.
 *
 * The nav scrolls horizontally rather than wrapping on narrow
 * screens, which keeps the bar exactly one row tall at every
 * width and avoids the layout shift a wrapping nav would cause.
 */
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="band band-navy sticky top-0 z-50">
      <div
        aria-hidden
        className="halftone pointer-events-none absolute inset-0 text-sky"
      />

      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3 sm:gap-6 sm:px-8"
      >
        <Link
          href="/"
          aria-label="Darshit Shah for Culture Secretary — home"
          className="shrink-0 font-display text-lg font-bold tracking-[0.02em] text-paper"
        >
          FT<span className="text-red">.</span>
        </Link>

        {/* Scroll container: min-w-0 lets it actually shrink inside
            the flex row instead of pushing the bar wider. */}
        <ul className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto [scrollbar-width:none] sm:gap-6 [&::-webkit-scrollbar]:hidden">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block whitespace-nowrap border-b-2 pb-0.5",
                    "font-display text-meta font-semibold uppercase tracking-[0.16em]",
                    "transition-colors duration-150",
                    active
                      ? "border-red text-paper"
                      : "border-transparent text-sky hover:border-red hover:text-paper",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/manifesto"
          className={cn(
            "hidden shrink-0 rounded-[2px] border-2 border-red bg-red px-4 py-2 sm:inline-block",
            "font-display text-meta font-semibold uppercase tracking-[0.16em] text-paper",
            "transition-colors duration-150 hover:bg-red-deep hover:border-red-deep",
          )}
        >
          Vote Darshit
        </Link>
      </nav>

      {/* The campaign chord, full-bleed along the bottom edge. */}
      <div aria-hidden className="flex h-1 w-full">
        <span className="flex-1 bg-navy-deep" />
        <span className="flex-1 bg-red" />
        <span className="flex-1 bg-cream" />
        <span className="flex-1 bg-sky" />
      </div>
    </header>
  );
}
