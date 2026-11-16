import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: 'Resources — Klexford' },
      { name: "description", content: 'Practical guides and checklists for authors and businesses.' },
      { property: "og:title", content: 'Resources — Klexford' },
      { property: "og:description", content: 'Practical guides and checklists for authors and businesses.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SimplePage eyebrow='Resources' title='Practical guidance' accent='for your next step.' body='Articles and checklists organised into Books & Authors and Business & Digital.' />;
}
