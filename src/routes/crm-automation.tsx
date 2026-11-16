import { createFileRoute } from "@tanstack/react-router";
import { DepartmentPage } from "@/components/pages/DepartmentPage";

export const Route = createFileRoute("/crm-automation")({
  head: () => ({
    meta: [
      { title: 'CRM & Business Automation — Klexford' },
      { name: "description", content: 'GoHighLevel setup, pipelines, booking systems and follow-up workflows.' },
      { property: "og:title", content: 'CRM & Business Automation — Klexford' },
      { property: "og:description", content: 'GoHighLevel setup, pipelines, booking systems and follow-up workflows.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <DepartmentPage slug="crm-automation" />;
}
