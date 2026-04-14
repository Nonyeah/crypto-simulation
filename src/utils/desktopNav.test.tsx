import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Layout from "../Layout/Layout";
import Dashboard from "../Routes/Dashboard";
import Balance from "../Routes/Balance";
import userEvent from "@testing-library/user-event";

describe("Desktop and mobile layout test", () => {
  it("renders desktop and mobile navigation menu", () => {
    render(<Layout />);
    expect(
      screen.getByRole("navigation", { name: /desktop navigation/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: /browser navigation/i }),
    ).toBeInTheDocument();
  });
});

describe("Desktop dropdown menu visibility test", () => {
  it("Shows dropdown menu on hover and hides menu on mouseout", async () => {
    const startEvent = userEvent.setup();
    render(<Layout />);
    const outerList = screen.getByRole("navigation", {
      name: /desktop navigation/i,
    }); //ok
    const hiddenList = within(outerList).getByRole("list", {
      name: /buy crypto(?!via)/i,
    });
    const targetList = within(outerList).getByRole("listitem", {
      name: /buy crypto(?!via)/i,
    });
    expect(hiddenList).toHaveClass("hideinner");
    await startEvent.hover(targetList);
    expect(hiddenList).toHaveClass("showinner");
    await startEvent.unhover(targetList);
    expect(hiddenList).toHaveClass("hideinner");
  });
});

describe("Fund account banner visibility test", () => {
  it("Tests whether fund account block shows on screen when 'not completed' button is clicked", async () => {
    const startEvent = userEvent.setup();
    render(<Dashboard />);
    const button = screen.getByRole("button", { name: /add funds/i });
    await startEvent.click(button);
    const fundcontainer = screen.getByLabelText("funding block display");
    expect(fundcontainer).toBeInTheDocument();
  });
});

describe("Show balance banner crypto selection test", () => {
  it("shows crypto selection banner when USDT arrow button is clicked ", async () => {
    render(<Balance />);
    const startEvent = userEvent.setup();
    const button = screen.getByRole("button", { name: /select crypto/i });
    await startEvent.click(button);
    const cryptopanel = screen.getByLabelText("crypto coin container");
    expect(cryptopanel).toBeInTheDocument();
  });
});
