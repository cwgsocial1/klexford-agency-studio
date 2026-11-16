import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: 'Terms — Klexford' },
      { name: "description", content: 'The terms that apply to Klexford services and this website.' },
      { property: "og:title", content: 'Terms — Klexford' },
      { property: "og:description", content: 'The terms that apply to Klexford services and this website.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SimplePage eyebrow='Legal' title='Terms' accent='of service.' body='Service terms will be published here before launch.' />;
}
