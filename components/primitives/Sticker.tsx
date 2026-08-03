import { cn } from "@/lib/cn";

export type Accent = "lime" | "magenta";

/**
 * The signature component. A dark card with a hard offset block of accent
 * colour behind it. Pass `accent={null}` for a plain card — plain cards are
 * for secondary content, the accent block marks what matters.
 */
export function Sticker({
  children,
  accent = "lime",
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  accent?: Accent | null;
  className?: string;
  as?: "div" | "li" | "article" | "section";
}) {
  return (
    <Tag
      className={cn(
        accent ? "sticker" : "rounded-[14px] border border-line bg-card",
        accent === "lime" && "sticker-lime",
        accent === "magenta" && "sticker-magenta",
        "p-5 sm:p-6",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Alternate accents across a grid so no two adjacent cards match. */
export function alternate(index: number): Accent {
  return index % 2 === 0 ? "lime" : "magenta";
}
