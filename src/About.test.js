import { render, screen } from "@testing-library/react";
import About from "./pages/AboutPage";

test("renders text and li elements in About Page", () => {
  render(<About />);

  const linkElement = screen.getByText(/Code Authors:/i);
  expect(linkElement).toBeInTheDocument();

  const listItems = screen.getAllByRole("listitem");

  expect(listItems.length).toBeGreaterThan(0);
});
