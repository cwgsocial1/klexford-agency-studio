import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  accent,
  body,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  body?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44", className)}>
      <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      <div className="container-k relative flex flex-col items-center text-center">
        <Eyebrow className="animate-rise">{eyebrow}</Eyebrow>
        <h1 className="text-hero mt-7 max-w-5xl font-medium text-ink animate-rise [animation-delay:80ms]">
          {title}{" "}
          {accent && <em className="font-display text-[1.08em] italic text-bronze">{accent}</em>}
        </h1>
        {body && (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-rise [animation-delay:160ms]">
            {body}
          </p>
        )}
        {children && <div className="mt-9 animate-rise [animation-delay:240ms]">{children}</div>}
      </div>
    </section>
  );
}
