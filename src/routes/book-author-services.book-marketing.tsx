import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";

export const Route = createFileRoute("/book-author-services/book-marketing")({
  head: () => ({
    meta: [
      { title: 'Book Marketing — Klexford' },
      { name: "description", content: 'Reader-focused positioning, launch planning, author email strategy and campaign management.' },
      { property: "og:title", content: 'Book Marketing — Klexford' },
      { property: "og:description", content: 'Reader-focused positioning, launch planning, author email strategy and campaign management.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SimplePage eyebrow='Book Marketing' title='Reach the readers' accent='your book was written for.' body='Positioning review, launch planning, author platform improvements, promotional assets and selected channels — with no guaranteed sales or bestseller claims.' />;
}
