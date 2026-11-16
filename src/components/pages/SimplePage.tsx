import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

export function SimplePage({ eyebrow, title, accent, body, children }: { eyebrow: string; title: string; accent?: string; body?: string; children?: React.ReactNode }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} accent={accent} body={body} />
      {children && <section className="container-k pb-12">{children}</section>}
      <CtaBand />
    </>
  );
}
