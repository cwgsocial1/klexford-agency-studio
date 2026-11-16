import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";

export const Route = createFileRoute("/start-a-project")({
  validateSearch: (search: Record<string, unknown>): { service?: string; audience?: string } => ({
    ...(typeof search.service === "string" ? { service: search.service } : {}),
    ...(typeof search.audience === "string" ? { audience: search.audience } : {}),
  }),
  head: () => ({
    meta: [
      { title: 'Start a Project — Klexford' },
      { name: "description", content: 'Tell Klexford about your book or business project and get clear next steps.' },
      { property: "og:title", content: 'Start a Project — Klexford' },
      { property: "og:description", content: 'Tell Klexford about your book or business project and get clear next steps.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SimplePage eyebrow='Start a Project' title='Tell us about' accent='your project.' body='Share your goals, services needed, timeline and budget band. Booking a call is optional.' />;
}
