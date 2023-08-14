// styles
import "./App.css";

import { Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import CategoriesPage from "./pages/CategoriesPage";
import { ExpensesContextProvider } from "./context/ExpensesContext";
// pages
import ExpensesPage from "./pages/ExpensesPage";
import InsightsPage from "./pages/InsightsPage";
import { MainContextProvider } from "./context/MainContext";
import NotFoundPage from "./pages/NotFoundPage";
import Overlay from "./components/Overlay";
import React from "react";
// hooks
import useOverlayContext from "./hooks/useOverlayContext";

// components

function App() {
  const { isOverlay } = useOverlayContext();

  return (
    <MainContextProvider>
      <ExpensesContextProvider>
        {isOverlay && <Overlay />}
        <Routes>
          <Route path="/" element={<ExpensesPage />}></Route>
          <Route path="expenses" element={<ExpensesPage />}></Route>
          <Route path="insights" element={<InsightsPage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="categories" element={<CategoriesPage />}></Route>
        </Routes>
      </ExpensesContextProvider>
    </MainContextProvider>
  );
}

export default App;
