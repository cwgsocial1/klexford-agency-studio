import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { departments, audiences } from "@/data/site";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

type MenuKey = "services" | "audiences" | null;

function Dropdown({ id, label, open, setOpen, children }: { id: Exclude<MenuKey, null>; label: string; open: MenuKey; setOpen: (k: MenuKey) => void; children: React.ReactNode }) {
  const isOpen = open === id;
  return (
    <div className="relative" onMouseEnter={() => setOpen(id)} onMouseLeave={() => setOpen(null)}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setOpen(isOpen ? null : id)}
        className={cn("inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors", isOpen ? "bg-sand text-ink" : "text-ink/80 hover:text-ink")}
      >
        {label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <div className={cn("absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-300", isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0")}>
        {children}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState<MenuKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => setOpen(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <nav
        ref={navRef}
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-[1240px] items-center justify-between gap-4 rounded-full border py-2 pl-5 pr-2 transition-all duration-500",
          scrolled ? "border-border bg-surface/85 shadow-card backdrop-blur-xl" : "border-transparent bg-surface/60 backdrop-blur-md",
        )}
      >
        <Logo />

        <div className="hidden items-center gap-0.5 lg:flex">
          <Dropdown id="services" label="Services" open={open} setOpen={setOpen}>
            <div className="w-[640px] rounded-3xl border bg-surface p-3 shadow-float">
              <div className="grid grid-cols-2 gap-1">
                {departments.map((d) => (
                  <Link key={d.slug} to={d.path} onClick={close} className="group flex gap-3 rounded-2xl p-3.5 transition-colors hover:bg-sand">
                    <span className="mt-0.5 font-display text-lg italic text-bronze">{d.index}</span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{d.name}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{d.short}</span>
                    </span>
                  </Link>
                ))}
                <Link to="/book-author-services/book-marketing" onClick={close} className="bg-ink-gradient flex flex-col justify-between rounded-2xl p-4 text-ink-foreground">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-bronze-soft">Flagship</span>
                  <span className="mt-4 flex items-end justify-between">
                    <span className="font-display text-2xl leading-tight">Book Marketing</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
              <Link to="/services" onClick={close} className="mt-2 flex items-center justify-between rounded-2xl border border-dashed px-4 py-3 text-sm font-medium text-ink hover:bg-sand">
                Compare all services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Dropdown>
          <Dropdown id="audiences" label="Who We Help" open={open} setOpen={setOpen}>
            <div className="w-[520px] rounded-3xl border bg-surface p-3 shadow-float">
              <div className="grid grid-cols-2 gap-1">
                {audiences.map((a) => (
                  <Link key={a.slug} to="/who-we-help/$audience" params={{ audience: a.slug }} onClick={close} className="rounded-2xl p-3.5 transition-colors hover:bg-sand">
                    <span className="block text-sm font-semibold text-ink">{a.name}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{a.short}</span>
                  </Link>
                ))}
              </div>
              <Link to="/who-we-help" onClick={close} className="mt-2 flex items-center justify-between rounded-2xl border border-dashed px-4 py-3 text-sm font-medium text-ink hover:bg-sand">
                See every pathway <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Dropdown>
          {(
            [
              { to: "/work", label: "Our Work" },
              { to: "/experts", label: "Team & Experts" },
              { to: "/about", label: "About" },
            ] as const
          ).map((l) => (
            <Link key={l.to} to={l.to} className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink" activeProps={{ className: "text-ink bg-sand" }}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/start-a-project">
              Start a Project <ArrowUpRight />
            </Link>
          </Button>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full overflow-y-auto bg-background sm:max-w-md">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <span className="font-display text-2xl text-ink">Klexford</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 px-4 pb-10">
                <Accordion type="multiple">
                  <AccordionItem value="s">
                    <AccordionTrigger className="text-lg font-medium text-ink">Services</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-1">
                      {departments.map((d) => (
                        <Link key={d.slug} to={d.path} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 text-base text-ink hover:bg-sand">
                          {d.name}
                        </Link>
                      ))}
                      <Link to="/book-author-services/book-marketing" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 text-base text-bronze hover:bg-sand">Book Marketing</Link>
                      <Link to="/services" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 text-base text-muted-foreground hover:bg-sand">All services</Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="a">
                    <AccordionTrigger className="text-lg font-medium text-ink">Who We Help</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-1">
                      {audiences.map((a) => (
                        <Link key={a.slug} to="/who-we-help/$audience" params={{ audience: a.slug }} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 text-base text-ink hover:bg-sand">
                          {a.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-2 flex flex-col">
                  {(
                    [
                      { to: "/work", label: "Our Work" },
                      { to: "/experts", label: "Team & Experts" },
                      { to: "/about", label: "About" },
                      { to: "/resources", label: "Resources" },
                    ] as const
                  ).map((l) => (
                    <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="border-b py-4 text-lg font-medium text-ink">
                      {l.label}
                    </Link>
                  ))}
                </div>
                <Button asChild size="lg" className="mt-8 w-full">
                  <Link to="/start-a-project" onClick={() => setMobileOpen(false)}>
                    Start a Project <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
