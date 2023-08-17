import { render, screen } from "@testing-library/react";
import Header from "./components/Header";

test("renders header with h1 element", () => {
  render(<Header />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});
