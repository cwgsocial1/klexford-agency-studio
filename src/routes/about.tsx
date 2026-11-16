import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: 'About Klexford — Publishing, Digital and Growth Services' },
      { name: "description", content: 'How Klexford plans, coordinates and delivers book, web, automation, marketing and creative work.' },
      { property: "og:title", content: 'About Klexford — Publishing, Digital and Growth Services' },
      { property: "og:description", content: 'How Klexford plans, coordinates and delivers book, web, automation, marketing and creative work.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SimplePage eyebrow='About' title='Helping authors and businesses' accent='move forward.' body='Klexford helps authors and businesses develop their work, strengthen their presence and connect with the people they want to reach.' />;
}
