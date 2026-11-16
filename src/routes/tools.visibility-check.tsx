import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";

export const Route = createFileRoute("/tools/visibility-check")({
  head: () => ({
    meta: [
      { title: 'Free Visibility Check — Klexford' },
      { name: "description", content: 'Request a human-reviewed visibility check of one public book, author or business page.' },
      { property: "og:title", content: 'Free Visibility Check — Klexford' },
      { property: "og:description", content: 'Request a human-reviewed visibility check of one public book, author or business page.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SimplePage eyebrow='Free Visibility Check' title='A clear look at' accent='one public page.' body='A manual review of one URL with up to three observations and two practical next steps. No ranking or sales promises.' />;
}
