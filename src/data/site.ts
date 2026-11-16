import bookCovers from "@/assets/book-covers.jpg";
import websiteScreen from "@/assets/website-screen.jpg";
import studioWork from "@/assets/studio-work.jpg";
import brandIdentity from "@/assets/brand-identity.jpg";
import heroAuthor from "@/assets/hero-author.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import type { ServiceOptionId } from "@/lib/inquiry";

export type DepartmentPath =
  | "/book-author-services"
  | "/website-development"
  | "/crm-automation"
  | "/growth-studio"
  | "/branding-creative";

export type Department = {
  slug: string;
  path: DepartmentPath;
  index: string;
  name: string;
  short: string;
  descriptor?: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  capabilities: string[];
  image: string;
  serviceId: ServiceOptionId;
  offerings: { title: string; body: string }[];
  process: { title: string; body: string }[];
  scopeNotes: string[];
  faqs: { q: string; a: string }[];
};

export const departments: Department[] = [
  {
    slug: "book-author-services",
    path: "/book-author-services",
    index: "01",
    name: "Book & Author Services",
    short: "Book marketing, editing, cover design, formatting and publishing support.",
    headline: "Develop your book. Prepare its launch.",
    headlineAccent: "Reach your readers.",
    intro:
      "Commission a single service or have Klexford coordinate every stage you need — from manuscript editing and cover design to publishing support and a reader-focused launch campaign.",
    capabilities: ["Book marketing", "Editing", "Proofreading", "Cover design", "Interior formatting", "EPUB conversion", "Publishing support"],
    image: bookCovers,
    serviceId: "book-marketing",
    offerings: [
      { title: "Book Marketing & Promotion", body: "Audience and positioning review, launch planning, author email strategy, promotional assets and agreed campaign management." },
      { title: "Editing & Proofreading", body: "Developmental editing, line or copyediting and proofreading, matched to your manuscript's needs." },
      { title: "Book Design & Formatting", body: "Cover design, paperback or hardback interiors, EPUB conversion and promotional design." },
      { title: "Publishing Support", body: "File preparation, upload assistance, metadata research and platform setup within the agreed scope." },
      { title: "Author Presence", body: "Author websites, book landing pages, newsletter setup and reader signup journeys." },
    ],
    process: [
      { title: "Understand the book", body: "Genre, reader, manuscript stage, release date and your goals." },
      { title: "Agree the scope", body: "Deliverables, responsibilities, review rounds and timing in writing." },
      { title: "Prepare & produce", body: "Editing, design, formatting and launch assets reviewed with you." },
      { title: "Launch & review", body: "Campaign activity, reporting and agreed next steps." },
    ],
    scopeNotes: [
      "Start without uploading your manuscript.",
      "Media and platform costs are agreed separately.",
      "We never promise sales, reviews or bestseller status.",
    ],
    faqs: [
      { q: "Can I commission just one service?", a: "Yes. You can book editing, a cover or a launch campaign on its own, or have us coordinate several stages together." },
      { q: "Do I need to share my manuscript to get started?", a: "No. Tell us about the book first — we'll only ask for files once the scope is agreed." },
      { q: "Do you guarantee sales?", a: "No. We plan and deliver campaign work carefully and report on what we can measure, but no honest partner can guarantee sales." },
    ],
  },
  {
    slug: "website-development",
    path: "/website-development",
    index: "02",
    name: "Website Design & Development",
    short: "Author and business websites, e-commerce, landing pages and sales funnels.",
    headline: "Websites built around",
    headlineAccent: "your next business goal.",
    intro:
      "From page planning and copy integration through responsive design, forms, testing, launch and handover — every proposal specifies pages, revisions, integrations, hosting and ownership.",
    capabilities: ["Author websites", "Business websites", "E-commerce", "Landing pages", "Sales funnels"],
    image: websiteScreen,
    serviceId: "website",
    offerings: [
      { title: "Business & author websites", body: "Clear structure, strong copy integration and a design that matches your brand." },
      { title: "E-commerce stores", body: "Product catalogues, checkout and the operations around them." },
      { title: "Landing pages", body: "Focused pages for a launch, offer or campaign." },
      { title: "Sales funnels", body: "Connected journeys from first visit to inquiry or purchase." },
    ],
    process: [
      { title: "Plan the pages", body: "Goals, audience, page list and content responsibility." },
      { title: "Design", body: "Responsive layouts reviewed in agreed rounds." },
      { title: "Build & test", body: "Forms, integrations, speed and accessibility checks." },
      { title: "Launch & hand over", body: "Go live, training and ownership of every account." },
    ],
    scopeNotes: ["Page count, revisions and integrations agreed upfront.", "You own your domain, hosting and content.", "Maintenance offered separately if useful."],
    faqs: [
      { q: "Who writes the copy?", a: "We agree content responsibility in the proposal — you can supply copy, or we can integrate and refine it." },
      { q: "Can you connect the site to a CRM?", a: "Yes. When CRM work is needed, we flag it so our automation lead joins the project." },
    ],
  },
  {
    slug: "crm-automation",
    path: "/crm-automation",
    index: "03",
    name: "CRM & Business Automation",
    short: "GoHighLevel, pipelines, booking systems, integrations and follow-up workflows.",
    headline: "Keep leads organised and",
    headlineAccent: "follow-up consistent.",
    intro:
      "We map your business process before the software — then set up contact fields, pipelines, forms, booking, notifications and agreed email or SMS workflows that hand off to your team at the right moment.",
    capabilities: ["GoHighLevel", "Pipelines", "Booking systems", "Integrations", "Follow-up workflows"],
    image: studioWork,
    serviceId: "crm",
    offerings: [
      { title: "GoHighLevel setup", body: "Accounts, contact fields, pipelines and permissions configured for your team." },
      { title: "Booking & reminders", body: "Calendars, confirmations and reminders that reduce no-shows." },
      { title: "Follow-up workflows", body: "Email and SMS sequences with reply, purchase and opt-out stop rules." },
      { title: "Integrations & reporting", body: "Connect forms, sites and tools; see where every lead stands." },
    ],
    process: [
      { title: "Map the process", body: "How inquiries arrive, who owns them and what happens next." },
      { title: "Configure", body: "Fields, pipelines, forms and workflows built and documented." },
      { title: "Test with sample data", body: "A labelled test lead travels through every stage." },
      { title: "Train & support", body: "Staff handover with optional ongoing administration." },
    ],
    scopeNotes: ["Implementation and ongoing admin are scoped separately.", "Software subscriptions and usage are listed separately.", "Opt-out handling built into every workflow."],
    faqs: [
      { q: "Do I need GoHighLevel already?", a: "No. We can recommend and set it up, or work with the system you already use where it fits." },
      { q: "Will automation replace my team?", a: "No — workflows stop or hand over to a person when a contact replies or reaches a key stage." },
    ],
  },
  {
    slug: "growth-studio",
    path: "/growth-studio",
    index: "04",
    name: "The Growth Studio",
    short: "SEO, paid advertising, social media, email, SMS marketing and reporting.",
    descriptor: "Digital Marketing",
    headline: "Marketing with a clear plan",
    headlineAccent: "and measurable progress.",
    intro:
      "Discovery, channel selection, implementation and review — with campaign fees, ad spend, software and messaging costs always shown separately.",
    capabilities: ["SEO", "Paid advertising", "Social media", "Email marketing", "SMS marketing", "Reporting"],
    image: heroAuthor,
    serviceId: "growth",
    offerings: [
      { title: "Search & visibility", body: "SEO review, search-focused content and agreed optimisation work." },
      { title: "Paid campaigns", body: "Channel planning, ad setup, creative coordination, testing and reporting." },
      { title: "Social media", body: "Content planning, agreed production and posting, campaign coordination." },
      { title: "Email & SMS", body: "Segmentation, newsletters, campaign copy, journeys and performance reporting." },
    ],
    process: [
      { title: "Discovery", body: "Goals, audience, current channels and what's working." },
      { title: "Channel plan", body: "Only the channels that fit — and that we can manage well." },
      { title: "Implement", body: "Campaigns built, launched and monitored." },
      { title: "Review", body: "Clear reporting and decisions on what to do next." },
    ],
    scopeNotes: ["No ranking or revenue promises.", "Ad spend is billed separately from fees.", "Book campaigns run through the author pathway."],
    faqs: [
      { q: "Which channels do you manage?", a: "Search, paid social and search ads, organic social, email and SMS — only where they fit your goals." },
      { q: "How do you report results?", a: "Agreed metrics, shared regularly, with the measurement basis stated next to every number." },
    ],
  },
  {
    slug: "branding-creative",
    path: "/branding-creative",
    index: "05",
    name: "Branding & Creative Content",
    short: "Brand identity, logos, campaign graphics, promotional video and social content.",
    headline: "A clear identity and creative",
    headlineAccent: "work people recognise.",
    intro:
      "Brand identity, logos and visual guidelines, campaign graphics, promotional video and social content — each with agreed creative directions, revisions, file formats and usage rights.",
    capabilities: ["Brand identity", "Logos", "Campaign graphics", "Promotional video", "Social content"],
    image: brandIdentity,
    serviceId: "branding",
    offerings: [
      { title: "Brand identity", body: "Logo, colour, typography and guidelines that hold together." },
      { title: "Campaign graphics", body: "Launch and promotional assets for every channel." },
      { title: "Promotional video", body: "Short-form video for launches, ads and social." },
      { title: "Social content", body: "Consistent, on-brand content systems." },
    ],
    process: [
      { title: "Brief", body: "Objective, audience, formats and references." },
      { title: "Directions", body: "Agreed creative routes presented for feedback." },
      { title: "Refine", body: "Revisions within the agreed rounds." },
      { title: "Hand over", body: "Final files, source files and usage rights." },
    ],
    scopeNotes: ["Source files handed over as agreed.", "Usage rights stated in writing.", "Book covers link with the author team."],
    faqs: [
      { q: "How many logo directions do I get?", a: "The number of directions and revision rounds is set in your proposal before work begins." },
      { q: "Do I own the final files?", a: "Yes — final files and agreed source files are handed over with clear usage rights." },
    ],
  },
];

export const getDepartment = (slug: string) => departments.find((d) => d.slug === slug)!;

export type Audience = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  needs: string[];
  departments: string[];
  faqs: { q: string; a: string }[];
};

export const audiences: Audience[] = [
  {
    slug: "authors-publishers",
    name: "Authors & Publishers",
    short: "Book marketing, preparation, publishing support and author websites.",
    intro: "Lead with a reader-focused launch, and get every stage of the author pathway — editing, design, publishing and your author platform — in one place.",
    needs: ["A clear plan to reach the right readers", "A professionally edited and designed book", "Help with files, metadata and platforms", "An author website and newsletter that grow with you"],
    departments: ["book-author-services", "website-development", "branding-creative"],
    faqs: [
      { q: "I'm still writing — is it too early?", a: "Not at all. Early planning makes editing, cover design and launch timing much easier." },
      { q: "Do you work with small publishers?", a: "Yes. We can support single titles or a list, with one coordinator for each project." },
    ],
  },
  {
    slug: "creators",
    name: "Creators & Personal Brands",
    short: "Portfolio websites, brand identity, content and inquiry management.",
    intro: "Turn attention into opportunity with a polished identity, a portfolio that converts, and a calm system for managing inquiries.",
    needs: ["A recognisable personal brand", "A portfolio site that wins work", "Consistent content", "Organised inquiries and bookings"],
    departments: ["branding-creative", "website-development", "crm-automation"],
    faqs: [{ q: "Can you help me manage brand deals?", a: "We can set up forms and a pipeline so every inquiry is tracked and followed up." }],
  },
  {
    slug: "agencies",
    name: "Agencies",
    short: "Scoped delivery support, websites, creative work and automation.",
    intro: "Extend your team with scoped delivery support. We agree communication, responsibilities and deliverables upfront for every partner project.",
    needs: ["Reliable overflow capacity", "Clear scope and communication", "Websites, creative and automation expertise", "Work delivered to your standards"],
    departments: ["website-development", "branding-creative", "crm-automation"],
    faqs: [{ q: "Do you work white-label?", a: "We agree how we're credited and who speaks to the end client as part of each scope." }],
  },
  {
    slug: "home-services",
    name: "Home-Service Businesses",
    short: "Including cleaning businesses — websites, estimate inquiries, follow-up and campaigns.",
    intro: "From cleaning to repairs: a site that earns estimate requests, and a workflow that makes sure every lead gets a fast, consistent follow-up.",
    needs: ["More estimate requests", "Quick, consistent follow-up", "Local visibility", "Repeat and referral business"],
    departments: ["website-development", "crm-automation", "growth-studio"],
    faqs: [{ q: "Can you help a cleaning business?", a: "Yes — cleaning businesses are a core part of this pathway." }],
  },
  {
    slug: "appointments",
    name: "Appointment-Based Businesses",
    short: "Booking, CRM, reminders, websites and customer communication.",
    intro: "Show how bookings move into a managed workflow — online scheduling, reminders and follow-up that keep your calendar full.",
    needs: ["Easy online booking", "Fewer no-shows", "Organised client records", "Thoughtful follow-up"],
    departments: ["crm-automation", "website-development", "growth-studio"],
    faqs: [{ q: "Will it work with my calendar?", a: "We'll review your current tools and recommend the simplest reliable setup." }],
  },
  {
    slug: "local-businesses",
    name: "Local Businesses",
    short: "Business websites, visibility, branding and organised customer inquiries.",
    intro: "A trustworthy brand, a clear website and an organised way to handle every customer inquiry in your area.",
    needs: ["A professional first impression", "Being found locally", "Clear brand presence", "Organised inquiries"],
    departments: ["website-development", "branding-creative", "growth-studio"],
    faqs: [{ q: "Where do I start?", a: "Most local businesses start with a free visibility check or a website conversation." }],
  },
];

export const getAudience = (slug: string) => audiences.find((a) => a.slug === slug);

export type Project = {
  slug: string;
  title: string;
  client: string;
  kind: "Case study" | "Concept";
  departments: string[];
  audience: string;
  summary: string;
  image: string;
  contribution: string;
};

export const projects: Project[] = [
  {
    slug: "through-ziklag",
    title: "Through Ziklag",
    client: "Author project",
    kind: "Case study",
    departments: ["book-author-services"],
    audience: "authors-publishers",
    summary: "Book preparation and launch support for a faith-based title.",
    contribution: "Details shared once materials and client permission are confirmed.",
    image: bookCovers,
  },
  {
    slug: "author-website",
    title: "Author website & reader signup",
    client: "Illustrative concept",
    kind: "Concept",
    departments: ["website-development", "book-author-services"],
    audience: "authors-publishers",
    summary: "A book-first author site with newsletter signup and launch landing page.",
    contribution: "Demonstration of structure, design and reader journey.",
    image: websiteScreen,
  },
  {
    slug: "brand-system",
    title: "Studio brand system",
    client: "Illustrative concept",
    kind: "Concept",
    departments: ["branding-creative"],
    audience: "local-businesses",
    summary: "Identity, stationery and colour system for a boutique practice.",
    contribution: "Demonstration of identity, guidelines and print assets.",
    image: brandIdentity,
  },
  {
    slug: "booking-workflow",
    title: "Booking & follow-up workflow",
    client: "Illustrative concept",
    kind: "Concept",
    departments: ["crm-automation"],
    audience: "appointments",
    summary: "Inquiry-to-booking pipeline with reminders and staff handoff.",
    contribution: "Demonstration with clearly labelled sample data.",
    image: studioWork,
  },
];

export type Expert = {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  relationship: "Core team" | "Collaborator";
  image: string;
  bio: string;
  departments: string[];
  projectTypes: string[];
};

// Placeholder profiles — replace with approved team names, photos and roles before launch.
export const experts: Expert[] = [
  {
    slug: "daniel-okafor",
    name: "Daniel Okafor",
    role: "Founder & Project Lead",
    specialty: "Strategy & coordination",
    relationship: "Core team",
    image: team1,
    bio: "Coordinates multi-service projects and makes sure every scope has a clear owner from inquiry to handover.",
    departments: ["book-author-services", "growth-studio"],
    projectTypes: ["Book launches", "Multi-service packages", "Ongoing growth plans"],
  },
  {
    slug: "claire-whitman",
    name: "Claire Whitman",
    role: "Lead Editor",
    specialty: "Editing & publishing",
    relationship: "Core team",
    image: team2,
    bio: "Guides manuscripts from developmental edit through proofreading and publication-ready files.",
    departments: ["book-author-services"],
    projectTypes: ["Developmental editing", "Copyediting", "Publishing support"],
  },
  {
    slug: "amara-bello",
    name: "Amara Bello",
    role: "Growth Strategist",
    specialty: "Marketing & campaigns",
    relationship: "Core team",
    image: team3,
    bio: "Plans reader- and customer-focused campaigns across search, social, email and SMS.",
    departments: ["growth-studio", "book-author-services"],
    projectTypes: ["Book marketing", "Paid campaigns", "Email journeys"],
  },
  {
    slug: "kenji-park",
    name: "Kenji Park",
    role: "Web & Automation Lead",
    specialty: "Websites & CRM",
    relationship: "Core team",
    image: team4,
    bio: "Builds websites and connected workflows that keep inquiries organised and follow-up consistent.",
    departments: ["website-development", "crm-automation"],
    projectTypes: ["Author websites", "GoHighLevel setup", "Booking systems"],
  },
];

export const getExpert = (slug: string) => experts.find((e) => e.slug === slug);

export const resources = [
  { title: "Preparing for a book launch: a 90-day outline", category: "Books & Authors", read: "8 min", dept: "book-author-services", summary: "What to plan, write and design in the months before release day." },
  { title: "Author website essentials", category: "Books & Authors", read: "6 min", dept: "website-development", summary: "The pages, signup and links every author site needs from day one." },
  { title: "Handing over your manuscript", category: "Books & Authors", read: "5 min", dept: "book-author-services", summary: "Files, formats and notes that make editing and formatting smoother." },
  { title: "Why leads go cold — and how to follow up", category: "Business & Digital", read: "7 min", dept: "crm-automation", summary: "A practical look at speed, consistency and handoff in follow-up." },
  { title: "Planning a campaign you can measure", category: "Business & Digital", read: "6 min", dept: "growth-studio", summary: "Setting goals, choosing channels and agreeing what to report." },
  { title: "Is your business ready for a CRM?", category: "Business & Digital", read: "5 min", dept: "crm-automation", summary: "Signs it's time, and what to map before choosing software." },
] as const;

export const testimonials = [
  { quote: "Klexford took the guesswork out of my launch. Every step was explained, scoped and delivered exactly as agreed.", name: "Sample feedback", role: "Author — replace with approved testimonial" },
  { quote: "One coordinator, a clear plan and a website and follow-up system that finally work together.", name: "Sample feedback", role: "Business owner — replace with approved testimonial" },
  { quote: "Thoughtful creative work and honest reporting. It felt like an extension of our own team.", name: "Sample feedback", role: "Agency partner — replace with approved testimonial" },
];

export const ways = [
  { title: "Scoped project", body: "A single, clearly defined deliverable — a website, a cover, a CRM setup — with fixed scope, review rounds and handover.", items: ["Written scope & timeline", "Agreed review rounds", "Full handover"] },
  { title: "Launch or campaign", body: "A coordinated book launch or marketing campaign with preparation, launch activity and review.", items: ["Positioning & plan", "Assets & channels", "Reporting & review"], featured: true },
  { title: "Monthly plan", body: "Ongoing management for campaigns, content or automation once the foundations are in place.", items: ["Monthly priorities", "Regular reporting", "Cancel with notice"] },
];

export const processSteps = [
  { title: "Understand", body: "We learn your goals, audience and where the project stands today." },
  { title: "Agree scope", body: "Deliverables, responsibilities, review rounds, timing and fees — in writing." },
  { title: "Deliver & review", body: "Work produced, reviewed with you and refined within agreed rounds." },
  { title: "Hand over or support", body: "Complete handover, or ongoing support where it's useful." },
];
