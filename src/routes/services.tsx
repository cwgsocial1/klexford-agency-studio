import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: 'Services — Klexford' },
      { name: "description", content: "Compare Klexford's five service departments: books, websites, automation, growth and creative." },
      { property: "og:title", content: 'Services — Klexford' },
      { property: "og:description", content: "Compare Klexford's five service departments: books, websites, automation, growth and creative." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SimplePage eyebrow='Services' title='Five departments,' accent='one coordinated team.' body='Commission one service or a connected package — each with a clear scope and a single inquiry owner.' />;
}
