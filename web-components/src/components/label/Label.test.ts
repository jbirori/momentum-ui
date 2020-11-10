import { fixture, fixtureCleanup, oneEvent } from "@open-wc/testing-helpers";
import "./Label";
import { Label } from "./Label";

const lmLabelTokens = require("./tokens/lm-label-tokens.js");
const mdLabelTokens = require("./tokens/md-label-tokens.js");

describe("Tooltip Tokens", () => {
  test("Lumos Token Import should not be null", () => {
    expect(lmLabelTokens).not.toBeNull();
  });
  test("Lumos Token Import should not be null", () => {
    expect(mdLabelTokens).not.toBeNull();
  });
});

describe("Label", () => {
  afterEach(fixtureCleanup);
  test("should render one Label", async () => {
    const element = await fixture(`<md-label label="Test Label Text"></md-label>`);
    expect(element).not.toBeNull();
  });
  test("should dispatch click", async () => {
    const element = await fixture<Label>(`<md-label label="Test Label Text" htmlFor="firstValue"></md-label>`);
    const event = new MouseEvent("click");
    setTimeout(() => element.handleClick(event));
    const { detail } = await oneEvent(element, "label-click");
    expect(detail).toBeDefined();
    expect(detail.htmlFor).toBe("firstValue");
  });
  test("should render slot if label not initialize in markup", async () => {
    const element = await fixture(`<md-label></md-label>`);
    expect(element.shadowRoot!.querySelectorAll("slot").length).toBe(1);
  });
  test("should render secondary Label", async () => {
    const element = await fixture(`<md-label label="Label" secondaryLabel="Secondary Label"></md-label>`);
    expect(element.getAttribute("secondaryLabel")).not.toBeNull();
  });
});
