import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";

const facts = [
  { k: "05", v: "Connected service departments" },
  { k: "06", v: "Audience pathways" },
  { k: "01", v: "Coordinator for every project" },
  { k: "∞", v: "Written scope before any work" },
];

export function Intro() {
  return (
    <section className="container-k py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <Reveal>
          <Eyebrow>Who Klexford is</Eyebrow>
          <p className="mt-8 text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-[1.15] tracking-tight text-ink">
            A team of specialists working under one agency brand —{" "}
            <span className="text-muted-foreground">
              so an author's book, a business's website, its follow-up and its marketing are planned{" "}
            </span>
            <em className="font-display italic text-bronze">together,</em>
            <span className="text-muted-foreground"> not in pieces.</span>
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium text-ink transition-colors hover:border-bronze hover:text-bronze">
            How we work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="grid grid-cols-2 gap-3">
          {facts.map((f, i) => (
            <Reveal key={f.v} delay={i * 90}>
              <div className="flex h-full flex-col justify-between rounded-3xl border bg-surface p-6 shadow-soft">
                <span className="font-display text-5xl text-ink">{f.k}</span>
                <span className="mt-8 text-sm text-muted-foreground">{f.v}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
