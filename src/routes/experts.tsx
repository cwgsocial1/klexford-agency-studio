import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";

export const Route = createFileRoute("/experts")({
  head: () => ({
    meta: [
      { title: 'Team & Experts — Klexford' },
      { name: "description", content: 'Meet the Klexford core team and approved collaborators behind every service.' },
      { property: "og:title", content: 'Team & Experts — Klexford' },
      { property: "og:description", content: 'Meet the Klexford core team and approved collaborators behind every service.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SimplePage eyebrow='Team & Experts' title='The people behind' accent='every project.' body='A core team and approved collaborators, coordinated by Klexford on every inquiry.' />;
}
