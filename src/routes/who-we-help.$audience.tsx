import { createFileRoute, notFound } from "@tanstack/react-router";
import { SimplePage } from "@/components/pages/SimplePage";
import { getAudience } from "@/data/site";

export const Route = createFileRoute("/who-we-help/$audience")({
  loader: ({ params }) => {
    const a = getAudience(params.audience);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.name} — Klexford` : "Unavailable — Klexford" },
      { name: "description", content: loaderData?.short ?? "" },
      { property: "og:title", content: loaderData ? `${loaderData.name} — Klexford` : "Klexford" },
      { property: "og:description", content: loaderData?.short ?? "" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const a = Route.useLoaderData();
  return (
    <SimplePage eyebrow="Who We Help" title={a.name} body={a.intro}>
      <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
        {a.needs.map((n) => (
          <li key={n} className="rounded-3xl border bg-surface p-6 text-ink shadow-soft">{n}</li>
        ))}
      </ul>
    </SimplePage>
  );
}
