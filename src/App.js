import React from "react";
import { Routes, Route } from "react-router-dom";

// hooks
import useOverlayContext from "./hooks/useOverlayContext";

// components
import { MainContextProvider } from "./context/MainContext";
import { ExpensesContextProvider } from "./context/ExpensesContext";
import Overlay from "./components/Overlay";

// pages
import ExpensesPage from "./pages/ExpensesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from './pages/AboutPage';
import InsightsPage from "./pages/InsightsPage";

// styles
import "./App.css";

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
          <Route path="about" element ={<AboutPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </ExpensesContextProvider>
    </MainContextProvider>
  );
}

export default App;
