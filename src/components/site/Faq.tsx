import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="divide-y divide-border rounded-3xl border bg-surface px-6 shadow-soft md:px-8">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`f-${i}`} className="border-0">
          <AccordionTrigger className="py-6 text-left text-base font-medium text-ink hover:no-underline md:text-lg">{f.q}</AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
