import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";

export const Route = createFileRoute("/tools/")({
  head: () => ({
    meta: [
      { title: 'Tools — Klexford' },
      { name: "description", content: 'Checklists and reviews that help you prepare or assess a project.' },
      { property: "og:title", content: 'Tools — Klexford' },
      { property: "og:description", content: 'Checklists and reviews that help you prepare or assess a project.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SimplePage eyebrow='Tools' title='Prepare with' accent='confidence.' body='Book Launch Checklist, Website Inquiry Checklist and the Free Visibility Check.' />;
}
