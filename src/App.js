import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import { MainContextProvider } from "./context/MainContext";

// pages
import ExpensesPage from "./pages/ExpensesPage";
import NotFoundPage from "./pages/NotFoundPage";

// styles
import "./App.css";
import Insights from "./Insights";

function App() {
  return (
    <MainContextProvider>
      <Routes>
        <Route path="/" element={<ExpensesPage />}></Route>
        <Route path="expenses" element={<ExpensesPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </MainContextProvider>
  );
}

export default App;
