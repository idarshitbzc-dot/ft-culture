import Link from "next/link";

const LINKS = [
  { href: "/manifesto", label: "MANIFESTO" },
  { href: "/polls", label: "POLLS" },
  { href: "/suggest", label: "SUGGEST" },
  { href: "/reach-out", label: "REACH OUT" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto px-5 py-3 sm:px-8"
      >
        <Link
          href="/"
          className="font-display text-base font-black tracking-[-0.02em] text-white"
        >
          FT<span className="text-lime">.</span>
        </Link>
        <ul className="flex items-center gap-4 sm:gap-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="whitespace-nowrap font-mono text-meta font-bold uppercase tracking-[0.12em] text-mute transition-colors duration-150 hover:text-lime"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
