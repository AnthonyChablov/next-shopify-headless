// Page.test.tsx
import { describe, it, expect } from "vitest";
import Page from "@/app/page";

describe("Page Component", () => {
  it("should render correctly in the dom ", () => {
    render(<Page />);
    const page = screen.getByRole("page");
    expect(containerElement).toBeEmptyDOMElement();
  });
});
