import React from "react";
import { Routes, Route } from "react-router-dom";

// hooks
import useOverlayContext from "./hooks/useOverlayContext";

// components
import { MainContextProvider } from "./context/MainContext";
import { ExpensesContextProvider } from "./context/ExpensesContext";
import Overlay from "./components/Overlay";
import ExpensesButton from "./components/ExpensesButton";

// pages
import ExpensesPage from "./pages/ExpensesPage";
import NotFoundPage from "./pages/NotFoundPage";

// styles
import "./App.css";
import Insights from "./Insights";

function App() {
  const { isOverlay, handleClick } = useOverlayContext();

  return (
    <MainContextProvider>
      <ExpensesContextProvider>
        {isOverlay && <Overlay />}
        <Routes>
          <Route path="/" element={<ExpensesPage />}></Route>
          <Route path="expenses" element={<ExpensesPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <ExpensesButton
          handleClick={handleClick}
          classHandle="btn--menu"
          children="menu"
        />
      </ExpensesContextProvider>
    </MainContextProvider>
  );
}

export default App;
