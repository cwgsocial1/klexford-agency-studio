import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, CircleDot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/Eyebrow";
import heroAuthor from "@/assets/hero-author.jpg";
import bookCovers from "@/assets/book-covers.jpg";
import ribbon from "@/assets/bronze-ribbon.png";

const capabilities = [
  "Book marketing", "Editing & proofreading", "Cover design", "Interior formatting", "EPUB conversion",
  "Author websites", "E-commerce", "Landing pages", "GoHighLevel", "Booking systems",
  "SEO", "Paid advertising", "Email & SMS", "Brand identity", "Promotional video",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(75%_55%_at_50%_25%,black,transparent)]" />
      <div className="container-k relative">
        <div className="flex flex-col items-center text-center">
          <Link to="/book-author-services/book-marketing" className="animate-rise">
            <Eyebrow className="transition-colors hover:border-bronze">
              Now booking book launches <ArrowUpRight className="h-3 w-3" />
            </Eyebrow>
          </Link>
          <h1 className="text-hero mt-7 max-w-5xl font-medium text-ink animate-rise [animation-delay:80ms]">
            Build your next <em className="font-display text-[1.12em] italic text-bronze">chapter.</em>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-rise [animation-delay:160ms]">
            Klexford brings together book services, websites, automation, marketing and creative expertise to help authors and businesses move their projects forward.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-rise [animation-delay:240ms]">
            <Button asChild size="lg">
              <Link to="/start-a-project">
                Start a Project <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/work">Explore Our Work</Link>
            </Button>
          </div>
        </div>

        {/* Visual composition */}
        <div className="relative mx-auto mt-16 max-w-5xl animate-rise [animation-delay:320ms] md:mt-20">
          <img src={ribbon} alt="" width={1024} height={1024} className="animate-float pointer-events-none absolute -left-24 top-10 z-0 hidden w-56 lg:block" />
          <img src={ribbon} alt="" width={1024} height={1024} className="animate-float pointer-events-none absolute -right-20 -top-10 z-0 hidden w-40 rotate-90 [animation-delay:-2.5s] lg:block" />

          <div className="relative z-10 mx-auto grid grid-cols-12 items-end gap-4">
            {/* Left column cards */}
            <div className="col-span-12 hidden flex-col gap-4 md:col-span-3 md:flex">
              <div className="rounded-3xl bg-bronze-gradient p-5 text-bronze-foreground shadow-float">
                <Sparkles className="h-5 w-5" />
                <p className="mt-8 font-display text-4xl leading-none">5</p>
                <p className="mt-2 text-sm font-medium">connected departments, one coordinator</p>
              </div>
              <div className="rounded-3xl border bg-surface p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <img src={bookCovers} alt="Book cover designs" width={1536} height={1152} className="h-14 w-14 rounded-xl object-cover" />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-ink">Cover & interiors</p>
                    <p className="text-xs text-muted-foreground">Print & EPUB ready</p>
                  </div>
                </div>
                <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-sand px-2.5 py-1 text-[0.7rem] font-medium text-ink">
                  <Check className="h-3 w-3 text-bronze" /> Final files handed over
                </div>
              </div>
            </div>

            {/* Center image */}
            <div className="col-span-12 md:col-span-6">
              <div className="relative overflow-hidden rounded-[2rem] border-8 border-surface shadow-float">
                <img src={heroAuthor} alt="An author reviewing her manuscript at a desk" width={1280} height={1600} className="aspect-[4/4.4] w-full object-cover" />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-ink-foreground/20 bg-ink/70 p-4 text-left text-ink-foreground backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">Launch plan</span>
                    <span className="text-ink-foreground/60">Sample · Week 3 of 8</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-foreground/15">
                    <div className="h-full w-[38%] rounded-full bg-bronze-gradient" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[0.68rem]">
                    {["Positioning", "Assets", "Email", "Launch week"].map((t, i) => (
                      <span key={t} className={i < 2 ? "rounded-full bg-bronze px-2 py-0.5" : "rounded-full border border-ink-foreground/25 px-2 py-0.5 text-ink-foreground/70"}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right column cards */}
            <div className="col-span-12 hidden flex-col gap-4 md:col-span-3 md:flex">
              <div className="rounded-3xl border bg-surface p-4 text-left shadow-card">
                <p className="text-xs font-medium text-muted-foreground">New inquiry</p>
                <p className="mt-1 text-sm font-semibold text-ink">Author · Book marketing</p>
                <div className="mt-4 flex flex-col gap-2">
                  {["New Inquiry", "Qualified", "Discovery", "Proposal"].map((s, i) => (
                    <div key={s} className="flex items-center gap-2 text-xs">
                      <CircleDot className={i <= 1 ? "h-3.5 w-3.5 text-bronze" : "h-3.5 w-3.5 text-border"} />
                      <span className={i <= 1 ? "text-ink" : "text-muted-foreground"}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-ink-gradient rounded-3xl p-5 text-left text-ink-foreground shadow-float">
                <p className="text-xs uppercase tracking-[0.16em] text-bronze-soft">Who we help</p>
                <p className="mt-6 font-display text-3xl leading-tight">Authors & businesses</p>
                <p className="mt-2 text-xs text-ink-foreground/60">Six clear pathways</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capability marquee */}
      <div className="relative mt-20 border-y bg-surface/60 py-6">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...capabilities, ...capabilities].map((c, i) => (
            <span key={i} className="flex items-center gap-12 text-lg text-ink/70">
              <span className={i % 3 === 1 ? "font-display text-2xl italic text-ink" : "font-medium"}>{c}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
