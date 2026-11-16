import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("h-7 w-7", className)}>
      <rect width="32" height="32" rx="9" className="fill-ink" />
      <path d="M11 8v16" className="stroke-ink-foreground" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M22.5 8 14 16l8.5 8" className="stroke-bronze" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link to="/" aria-label="Klexford home" className={cn("group inline-flex items-center gap-2.5", className)}>
      <LogoMark className="transition-transform duration-500 group-hover:rotate-[8deg]" />
      <span
        className={cn(
          "font-display text-[1.65rem] leading-none",
          tone === "dark" ? "text-ink" : "text-ink-foreground",
        )}
      >
        Klexford
      </span>
    </Link>
  );
}
