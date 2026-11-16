import { describe, expect, it } from "vitest";
import { getFollowUpSections } from "./inquiry";

describe("inquiry follow-up rules", () => {
  it("shows author fields when any book service is selected", () => {
    expect(getFollowUpSections(["book-marketing"]).author).toBe(true);
    expect(getFollowUpSections(["website"]).author).toBe(false);
  });

  it("asks for manuscript length only when editing or formatting is selected", () => {
    expect(getFollowUpSections(["book-marketing"]).manuscriptLength).toBe(false);
    expect(getFollowUpSections(["editing"]).manuscriptLength).toBe(true);
    expect(getFollowUpSections(["book-design"]).manuscriptLength).toBe(true);
  });

  it("shows platform details for websites or CRM", () => {
    expect(getFollowUpSections(["crm"]).platform).toBe(true);
    expect(getFollowUpSections(["branding"]).platform).toBe(false);
  });

  it("shows campaign questions for Growth Studio work", () => {
    expect(getFollowUpSections(["growth"]).campaign).toBe(true);
    expect(getFollowUpSections(["website"]).campaign).toBe(false);
  });
});
