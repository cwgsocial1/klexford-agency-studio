import { cn } from "@/lib/utils";

export function Eyebrow({ children, tone = "dark", className }: { children: React.ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em]",
        tone === "dark" ? "border-ink/15 bg-surface text-ink" : "border-ink-foreground/20 bg-ink-foreground/5 text-ink-foreground",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  body,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  body?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-5", align === "center" ? "mx-auto max-w-3xl items-center text-center" : "max-w-2xl items-start", className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className={cn("text-section font-medium", tone === "dark" ? "text-ink" : "text-ink-foreground")}>
        {title} {accent && <em className="font-display text-[1.08em] italic text-bronze">{accent}</em>}
      </h2>
      {body && <p className={cn("max-w-xl text-base leading-relaxed md:text-lg", tone === "dark" ? "text-muted-foreground" : "text-ink-foreground/70")}>{body}</p>}
    </div>
  );
}
