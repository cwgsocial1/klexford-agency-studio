import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";

export const Route = createFileRoute("/become-an-expert")({
  head: () => ({
    meta: [
      { title: 'Become an Expert — Klexford' },
      { name: "description", content: 'Apply to collaborate with Klexford on book, web, automation, marketing or creative delivery.' },
      { property: "og:title", content: 'Become an Expert — Klexford' },
      { property: "og:description", content: 'Apply to collaborate with Klexford on book, web, automation, marketing or creative delivery.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SimplePage eyebrow='Become an Expert' title='Collaborate' accent='with Klexford.' body="Share your specialty, portfolio and availability. Applying doesn't create a public profile or working arrangement automatically." />;
}
