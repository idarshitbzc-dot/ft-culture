import Image from "next/image";
import { cn } from "@/lib/cn";

/** Intrinsic size of the source art — a tall 1:2.12 portrait. */
const W = 862;
const H = 1825;

/**
 * The campaign poster, framed as a placard.
 *
 * The art already carries its own navy/red/cream halftone treatment,
 * so the frame stays minimal: a cream edge and the same hard offset
 * pass every other card on the site uses. No radius, no blur.
 *
 * `priority` should be set only on the hero instance — it is the LCP
 * element there, and preloading the second copy lower down the page
 * would compete with it for bandwidth.
 */
export function CampaignPoster({
  className,
  priority = false,
  sizes = "(min-width: 1280px) 340px, (min-width: 1024px) 300px, 280px",
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "border-2 border-cream bg-navy",
        "shadow-[7px_7px_0_0_var(--color-red)] md:shadow-[10px_10px_0_0_var(--color-red)]",
        className,
      )}
    >
      <Image
        src="/darshit-culture-poster.png"
        alt="Campaign poster — Culture with Darshit. Vote FT."
        width={W}
        height={H}
        sizes={sizes}
        priority={priority}
        // `block` kills the inline-image baseline gap that would
        // otherwise show as a sliver of navy under the artwork.
        className="block h-auto w-full"
      />
    </div>
  );
}
