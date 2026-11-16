import { createFileRoute } from "@tanstack/react-router";
import { DepartmentPage } from "@/components/pages/DepartmentPage";

export const Route = createFileRoute("/growth-studio")({
  head: () => ({
    meta: [
      { title: 'The Growth Studio — Digital Marketing — Klexford' },
      { name: "description", content: 'SEO, paid advertising, social media, email and SMS marketing with clear reporting.' },
      { property: "og:title", content: 'The Growth Studio — Digital Marketing — Klexford' },
      { property: "og:description", content: 'SEO, paid advertising, social media, email and SMS marketing with clear reporting.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <DepartmentPage slug="growth-studio" />;
}
