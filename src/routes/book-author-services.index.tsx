import { createFileRoute } from "@tanstack/react-router";
import { DepartmentPage } from "@/components/pages/DepartmentPage";

export const Route = createFileRoute("/book-author-services/")({
  head: () => ({
    meta: [
      { title: 'Book & Author Services — Klexford' },
      { name: "description", content: 'Book marketing, editing, cover design, formatting and publishing support for authors.' },
      { property: "og:title", content: 'Book & Author Services — Klexford' },
      { property: "og:description", content: 'Book marketing, editing, cover design, formatting and publishing support for authors.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <DepartmentPage slug="book-author-services" />;
}
