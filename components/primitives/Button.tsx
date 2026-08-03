import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "fill" | "outline";

const VARIANTS: Record<Variant, string> = {
  fill: "bg-lime text-bg hover:bg-white",
  outline: "border border-lime text-lime hover:bg-lime hover:text-bg",
};

const BASE =
  "inline-flex items-center justify-center rounded-full px-6 py-3.5 " +
  "font-mono text-meta font-bold uppercase tracking-[0.12em] " +
  "transition-colors duration-150";

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
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
