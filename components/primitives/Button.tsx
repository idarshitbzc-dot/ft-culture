import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "fill" | "outline" | "navy";

/**
 * Campaign buttons are printed blocks, not pills: square corners,
 * a hard ink edge and an offset second pass that collapses on
 * press. `active:` returns the sheet to the page so a tap reads
 * as physically pressing the placard down.
 */
const VARIANTS: Record<Variant, string> = {
  // Paper on red = 4.79:1.
  fill:
    "bg-red text-paper border-red shadow-[4px_4px_0_0_var(--color-navy)] " +
    "hover:bg-red-deep hover:border-red-deep",
  // Navy on cream = 13:1; paper on navy = 14.3:1.
  navy:
    "bg-navy text-paper border-navy shadow-[4px_4px_0_0_var(--color-red)] " +
    "hover:bg-navy-deep hover:border-navy-deep",
  // Inherits the band's foreground, so it works on all three grounds.
  outline:
    "bg-transparent text-fg border-current shadow-[4px_4px_0_0_var(--color-accent)] " +
    "hover:bg-fg hover:text-cream",
};

const BASE =
  "inline-flex max-w-full items-center justify-center gap-2 " +
  "border-2 rounded-[2px] px-6 py-3.5 text-center " +
  "font-display text-meta font-semibold uppercase tracking-[0.16em] " +
  "transition-[background-color,color,box-shadow,transform,border-color] duration-150 " +
  // Long labels wrap inside the button instead of overflowing the row.
  "break-words " +
  "active:translate-x-[3px] active:translate-y-[3px] active:shadow-none " +
  "motion-reduce:active:translate-x-0 motion-reduce:active:translate-y-0";

export function ButtonLink({
  href,
  children,
  variant = "fill",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(BASE, VARIANTS[variant], className)}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "fill",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={cn(
        BASE,
        VARIANTS[variant],
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
