import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Klexford — Build your next chapter" },
      { name: "description", content: "Book services, websites, automation, marketing and creative expertise for authors and businesses." },
      { property: "og:title", content: "Klexford — Build your next chapter" },
      { property: "og:description", content: "Publishing, Digital and Growth Services for authors and businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Intro />
      <CtaBand />
    </>
  );
}
