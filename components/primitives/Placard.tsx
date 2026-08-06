import { cn } from "@/lib/cn";

export type Accent = "red" | "navy" | "sky";

/**
 * The campaign placard — this site's signature block.
 *
 * A sheet of stock with a hard second colour pass offset behind
 * it, like a two-plate poster that shifted on press. Pass
 * `accent={null}` for a plain sheet; the offset block is what
 * marks a card as load-bearing, so it should stay rare.
 *
 * `inverse` flips the sheet to navy — used where a block has to
 * out-weigh everything around it on a cream band.
 */
export function Placard({
  children,
  accent = "red",
  inverse = false,
  interactive = false,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  accent?: Accent | null;
  inverse?: boolean;
  interactive?: boolean;
  className?: string;
  as?: "div" | "li" | "article" | "section";
}) {
  return (
    <Tag
      className={cn(
        "placard",
        accent === "red" && "placard-red",
        accent === "navy" && "placard-navy",
        accent === "sky" && "placard-sky",
        // No accent still needs a shadow colour or the box-shadow
        // falls back to red — transparent removes the pass entirely.
        !accent && "[--placard-accent:transparent]",
        inverse && "placard-inverse",
        interactive && "placard-interactive",
        "p-5 sm:p-6",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * Cycle accents across a grid so no two neighbours match. Three
 * colours over a 3-column grid would stripe the columns, so the
 * sequence is deliberately 4 long against a 3-wide layout.
 */
const CYCLE: Accent[] = ["red", "navy", "sky", "navy"];

export function alternate(index: number): Accent {
  return CYCLE[index % CYCLE.length];
}
