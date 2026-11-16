import { createFileRoute } from "@tanstack/react-router";
import { DepartmentPage } from "@/components/pages/DepartmentPage";

export const Route = createFileRoute("/website-development")({
  head: () => ({
    meta: [
      { title: 'Website Design & Development — Klexford' },
      { name: "description", content: 'Author and business websites, e-commerce, landing pages and sales funnels.' },
      { property: "og:title", content: 'Website Design & Development — Klexford' },
      { property: "og:description", content: 'Author and business websites, e-commerce, landing pages and sales funnels.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <DepartmentPage slug="website-development" />;
}
