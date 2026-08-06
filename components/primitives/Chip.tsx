import { cn } from "@/lib/cn";

type ChipVariant = "red" | "navy" | "sky" | "quiet" | "outline";

/**
 * Ballot-strip labels. Square, bordered, letterspaced — they
 * should read like something rubber-stamped onto the sheet.
 * Contrast ratios are noted where they are the deciding factor.
 */
const VARIANTS: Record<ChipVariant, string> = {
  // Paper on red: 4.79:1
  red: "bg-red text-paper border-red",
  // Paper on navy: 14.3:1
  navy: "bg-navy text-paper border-navy",
  // Ink on sky: 9.4:1
  sky: "bg-sky text-ink border-sky",
  // Sits on the band's own ground, edged in the band's rule.
  quiet: "bg-transparent text-fg border-rule",
  outline: "bg-transparent text-fg-mute border-rule",
};

export function Chip({
  children,
  variant = "red",
  className,
}: {
  children: React.ReactNode;
  variant?: ChipVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[2px] border-2 px-3 py-1.5",
        "font-display text-meta font-semibold uppercase tracking-[0.16em]",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
