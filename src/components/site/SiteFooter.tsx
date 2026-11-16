import { Link } from "@tanstack/react-router";
import { departments, audiences } from "@/data/site";
import { Logo } from "./Logo";

const explore = [
  { to: "/work", label: "Our Work" },
  { to: "/resources", label: "Resources" },
  { to: "/tools", label: "Tools" },
  { to: "/tools/visibility-check", label: "Free Visibility Check" },
  { to: "/experts", label: "Team & Experts" },
  { to: "/become-an-expert", label: "Become an Expert" },
  { to: "/about", label: "About" },
  { to: "/start-a-project", label: "Start a Project" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink-gradient relative overflow-hidden text-ink-foreground">
      <div className="bg-dots-light pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="container-k relative pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_0.6fr]">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-6 text-sm leading-relaxed text-ink-foreground/70">
              Klexford supports authors, brands and business teams with book services, websites, automation, marketing and creative work.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-bronze-soft">Publishing, Digital and Growth Services</p>
          </div>
          <FooterGroup title="Services">
            {departments.map((d) => (
              <FooterLink key={d.slug} to={d.path}>{d.name}</FooterLink>
            ))}
          </FooterGroup>
          <FooterGroup title="Who We Help">
            {audiences.map((a) => (
              <li key={a.slug}>
                <Link to="/who-we-help/$audience" params={{ audience: a.slug }} className="text-sm text-ink-foreground/70 transition-colors hover:text-ink-foreground">
                  {a.name}
                </Link>
              </li>
            ))}
          </FooterGroup>
          <FooterGroup title="Explore">
            {explore.map((l) => (
              <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>
            ))}
          </FooterGroup>
          <FooterGroup title="Legal">
            <FooterLink to="/privacy">Privacy</FooterLink>
            <FooterLink to="/terms">Terms</FooterLink>
          </FooterGroup>
        </div>

        <div className="mt-20 select-none overflow-hidden">
          <p aria-hidden="true" className="font-display text-[22vw] leading-[0.8] text-ink-foreground/[0.06] lg:text-[15rem]">Klexford</p>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-ink-foreground/10 pt-6 text-xs text-ink-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Klexford. All rights reserved.</p>
          <p>Book services · Websites · Automation · Marketing · Creative</p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze-soft">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: React.ComponentProps<typeof Link>["to"]; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-sm text-ink-foreground/70 transition-colors hover:text-ink-foreground">
        {children}
      </Link>
    </li>
  );
}
