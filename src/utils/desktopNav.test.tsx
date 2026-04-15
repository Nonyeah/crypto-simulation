import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Layout from "../Layout/Layout";
import Dashboard from "../Routes/Dashboard";
import Balance from "../Routes/Balance";
import { userEvent } from "@testing-library/user-event";
import Markets from "../Routes/Markets";
import { BrowserRouter } from "react-router-dom";

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
    const close = within(cryptopanel).getAllByRole("paragraph")[0];
    await startEvent.click(close);
    setTimeout(() => expect(cryptopanel).not.toBeInTheDocument(), 2000);
  });
});

describe("Did main crypto table mount test", () => {
  it("Confirms that the main crypto table mounts on the home page", () => {
    render(
      <BrowserRouter>
        <Markets />
      </BrowserRouter>,
    );
    const marketstable = screen.getByRole("rowgroup", {
      name: /main crypto table/i,
    });
    expect(marketstable).toBeInTheDocument();
  });
});

describe("Do the market top navigation buttons work test 1", () => {
  it("Holding button shows text in container when clicked", async () => {
    const startEvent = userEvent.setup();
    render(
      <BrowserRouter>
        <Markets />
      </BrowserRouter>,
    );
    const buttonlinks = screen.getByRole("list", { name: /market buttons/i });
    const holdingButton = within(buttonlinks).getByRole("button", {
      name: /holding/i,
    });
    await startEvent.click(holdingButton);
    expect(
      screen.getByText(/Holding coin prices will be displayed here/i),
    ).toBeInTheDocument();
  });
});

describe("Do the market top navigation buttons work test 2", () => {
  it.only("shows crypto coin table when 'most traded' button is clicked", async() => {
    const startEvent = userEvent.setup();
    render(
      <BrowserRouter>
        <Markets />
      </BrowserRouter>,
    );
    const list = screen.getByRole("list", { name: /market buttons/i });
    const tradedButton = within(list).getByRole("button", {
      name: /most traded/i,
    });
    await startEvent.click(tradedButton);
    expect(
      screen.getByRole("rowgroup", { name: /main crypto table/i }),
    ).toBeInTheDocument();
  });
});
