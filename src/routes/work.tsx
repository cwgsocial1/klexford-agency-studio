import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: 'Our Work — Klexford' },
      { name: "description", content: 'Selected Klexford projects across book services, websites, automation and creative.' },
      { property: "og:title", content: 'Our Work — Klexford' },
      { property: "og:description", content: 'Selected Klexford projects across book services, websites, automation and creative.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SimplePage eyebrow='Our Work' title='Selected work,' accent='clearly explained.' body='Each project shows the context, scope and exactly what Klexford contributed. Concepts are labelled as such.' />;
}
