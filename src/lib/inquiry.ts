// Inquiry form rules from the Klexford blueprint (section 5 & 9).

export const SERVICE_OPTIONS = [
  { id: "book-marketing", label: "Book marketing & promotion", group: "book" },
  { id: "editing", label: "Editing & proofreading", group: "book" },
  { id: "book-design", label: "Cover design & interior formatting", group: "book" },
  { id: "publishing-support", label: "Publishing support", group: "book" },
  { id: "author-presence", label: "Author website & newsletter", group: "book" },
  { id: "website", label: "Website design & development", group: "website" },
  { id: "crm", label: "CRM & business automation", group: "crm" },
  { id: "growth", label: "Growth Studio — digital marketing", group: "growth" },
  { id: "branding", label: "Branding & creative content", group: "branding" },
] as const;

export type ServiceOptionId = (typeof SERVICE_OPTIONS)[number]["id"];

export const CUSTOMER_TYPES = [
  { id: "authors-publishers", label: "Author or publisher" },
  { id: "creators", label: "Creator or personal brand" },
  { id: "agencies", label: "Agency" },
  { id: "home-services", label: "Home-service business" },
  { id: "appointments", label: "Appointment-based business" },
  { id: "local-businesses", label: "Local business" },
  { id: "other", label: "Something else" },
] as const;

export const TIMELINES = ["As soon as possible", "Within 1 month", "1–3 months", "3+ months", "Not sure yet"];
export const BUDGET_BANDS = ["Under $1,000", "$1,000 – $3,000", "$3,000 – $7,500", "$7,500 – $15,000", "$15,000+", "Not sure yet"];
export const BOOK_STAGES = [
  "Still writing",
  "Manuscript complete",
  "In editing",
  "Ready to publish",
  "Already published",
];

export type FollowUpSections = {
  /** Book title, genre, stage, release date and author links. */
  author: boolean;
  /** Only asked when editing or formatting is selected. */
  manuscriptLength: boolean;
  /** Current platform details for websites or CRM. */
  platform: boolean;
  /** Current channels and goals for campaigns. */
  campaign: boolean;
};

const BOOK_IDS = new Set<string>(
  SERVICE_OPTIONS.filter((s) => s.group === "book").map((s) => s.id),
);

export function getFollowUpSections(selected: readonly string[]): FollowUpSections {
  const has = (id: string) => selected.includes(id);
  return {
    author: selected.some((id) => BOOK_IDS.has(id)),
    manuscriptLength: has("editing") || has("book-design"),
    platform: has("website") || has("crm"),
    campaign: has("growth"),
  };
}

export function isServiceOption(value: unknown): value is ServiceOptionId {
  return typeof value === "string" && SERVICE_OPTIONS.some((s) => s.id === value);
}

export function isCustomerType(value: unknown): value is (typeof CUSTOMER_TYPES)[number]["id"] {
  return typeof value === "string" && CUSTOMER_TYPES.some((c) => c.id === value);
}
