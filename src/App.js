import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import { ContextProvider } from "./context/Context";

// pages
import ExpensesPage from "./pages/ExpensesPage";
import NotFoundPage from "./pages/NotFoundPage";

// styles
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<ExpensesPage />}></Route>
        <Route path="expenses" element={<ExpensesPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
