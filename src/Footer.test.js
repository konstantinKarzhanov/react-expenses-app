import { render, screen } from "@testing-library/react";
import Footer from "./components/Footer";

test("renders header with h1 element", () => {
  render(<Footer />);
  const headingElement = screen.getByText(/all rights reserved, 2023/);
  expect(headingElement).toBeInTheDocument();
});
