import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import Layout from "../Layout/Layout";

describe("Homepage Desktop Navigation Layout", () => {
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
