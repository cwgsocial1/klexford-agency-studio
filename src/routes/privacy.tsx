import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: 'Privacy — Klexford' },
      { name: "description", content: 'How Klexford collects and uses personal information.' },
      { property: "og:title", content: 'Privacy — Klexford' },
      { property: "og:description", content: 'How Klexford collects and uses personal information.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SimplePage eyebrow='Legal' title='Privacy' accent='notice.' body="This notice will describe Klexford's actual data and analytics practices before launch." />;
}
