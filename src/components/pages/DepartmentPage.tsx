import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/Eyebrow";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq } from "@/components/site/Faq";
import { getDepartment } from "@/data/site";

export function DepartmentPage({ slug }: { slug: string }) {
  const d = getDepartment(slug);
  return (
    <>
      <PageHero eyebrow={d.descriptor ? `${d.name} · ${d.descriptor}` : d.name} title={d.headline} accent={d.headlineAccent} body={d.intro}>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/start-a-project" search={{ service: d.serviceId }}>
              Start a Project <ArrowUpRight />
            </Link>
          </Button>
          {d.slug === "book-author-services" && (
            <Button asChild size="lg" variant="outline">
              <Link to="/book-author-services/book-marketing">Book Marketing</Link>
            </Button>
          )}
        </div>
      </PageHero>
      <section className="container-k">
        <img src={d.image} alt={d.name} loading="lazy" className="aspect-[16/8] w-full rounded-[2rem] border-8 border-surface object-cover shadow-float" />
      </section>
      <section className="container-k py-24">
        <SectionHeading eyebrow="What's included" title="Services in" accent="this department" />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {d.offerings.map((o, i) => (
            <div key={o.title} className="rounded-3xl border bg-surface p-7 shadow-soft">
              <span className="font-display text-2xl italic text-bronze">0{i + 1}</span>
              <h3 className="mt-6 text-xl font-medium text-ink">{o.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-ink-gradient py-24 text-ink-foreground">
        <div className="container-k">
          <SectionHeading tone="light" eyebrow="How it works" title="A clear process," accent="start to finish" />
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {d.process.map((p, i) => (
              <div key={p.title} className="rounded-3xl border border-ink-foreground/15 bg-ink-foreground/5 p-6">
                <span className="font-display text-4xl text-bronze-soft">{i + 1}</span>
                <h3 className="mt-6 text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-foreground/70">{p.body}</p>
              </div>
            ))}
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {d.scopeNotes.map((n) => (
              <li key={n} className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/15 px-4 py-2 text-sm text-ink-foreground/80">
                <Check className="h-4 w-4 text-bronze-soft" /> {n}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container-k max-w-3xl py-24">
        <SectionHeading eyebrow="FAQ" title="Common" accent="questions" />
        <div className="mt-12"><Faq items={d.faqs} /></div>
      </section>
      <CtaBand />
    </>
  );
}
