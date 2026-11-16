import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";

export const Route = createFileRoute("/who-we-help/")({
  head: () => ({
    meta: [
      { title: 'Who We Help — Klexford' },
      { name: "description", content: 'Pathways for authors, creators, agencies, home-service, appointment-based and local businesses.' },
      { property: "og:title", content: 'Who We Help — Klexford' },
      { property: "og:description", content: 'Pathways for authors, creators, agencies, home-service, appointment-based and local businesses.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SimplePage eyebrow='Who We Help' title='Find the pathway' accent='built for you.' body='Six audience pathways that point you to the right services, work and next step.' />;
}
