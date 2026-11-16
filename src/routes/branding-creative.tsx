import { createFileRoute } from "@tanstack/react-router";
import { DepartmentPage } from "@/components/pages/DepartmentPage";

export const Route = createFileRoute("/branding-creative")({
  head: () => ({
    meta: [
      { title: 'Branding & Creative Content — Klexford' },
      { name: "description", content: 'Brand identity, logos, campaign graphics, promotional video and social content.' },
      { property: "og:title", content: 'Branding & Creative Content — Klexford' },
      { property: "og:description", content: 'Brand identity, logos, campaign graphics, promotional video and social content.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <DepartmentPage slug="branding-creative" />;
}
