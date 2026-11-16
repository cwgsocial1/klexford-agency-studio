import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ribbon from "@/assets/bronze-ribbon.png";

export function CtaBand({
  title = "Ready to build",
  accent = "your next chapter?",
  body = "Tell us about your book or business. We'll come back with clear next steps — no obligation to book a call.",
}: {
  title?: string;
  accent?: string;
  body?: string;
}) {
  return (
    <section className="container-k py-20 md:py-28">
      <div className="bg-ink-gradient relative overflow-hidden rounded-[2rem] px-6 py-16 text-center shadow-float md:px-16 md:py-24">
        <div className="bg-dots-light pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_70%_at_50%_100%,black,transparent)]" />
        <div className="bg-glow pointer-events-none absolute -bottom-40 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2" />
        <img src={ribbon} alt="" width={1024} height={1024} loading="lazy" className="animate-float pointer-events-none absolute -right-16 -top-16 hidden w-64 opacity-90 md:block" />
        <img src={ribbon} alt="" width={1024} height={1024} loading="lazy" className="animate-float pointer-events-none absolute -bottom-20 -left-16 hidden w-48 rotate-180 opacity-70 [animation-delay:-3s] md:block" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-section font-medium text-ink-foreground">
            {title} <em className="font-display text-[1.08em] italic text-bronze-soft">{accent}</em>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-ink-foreground/70">{body}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="bronze">
              <Link to="/start-a-project">
                Start a Project <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass">
              <Link to="/tools/visibility-check">Free Visibility Check</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
