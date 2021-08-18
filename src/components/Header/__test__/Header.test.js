import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passed into title props", () => {
  render(<Header title="MY HEADER" />);
  const headerElement = screen.getByText(/my header/i);
  expect(headerElement).toBeInTheDocument();
});

it("should had a heading role", () => {
  render(<Header title="MY HEADER" />);
  const headerElement = screen.getByRole("heading", { name: "MY HEADER" });
  expect(headerElement).toBeInTheDocument();
});

it("should get the header by title", () => {
  render(<Header title="MY HEADER" />);
  const headerElement = screen.getByTitle("Header");
  expect(headerElement).toBeInTheDocument();
});

it("should get the header of testid header-2", () => {
  render(<Header title="MY HEADER" />);
  const headerElement = screen.getByTestId("header-2");
  expect(headerElement).toBeInTheDocument();
});
