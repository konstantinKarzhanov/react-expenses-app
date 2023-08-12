import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import { MainContextProvider } from "./context/MainContext";

// pages
import ExpensesPage from "./pages/ExpensesPage";
import NotFoundPage from "./pages/NotFoundPage";
import InsightsPage from "./pages/InsightsPage";

// styles
import "./App.css";

function App() {
  return (
    // <MainContextProvider>
    //   <Routes>
    //     <Route path="/" element={<ExpensesPage />}></Route>
    //     <Route path="expenses" element={<ExpensesPage />}></Route>
    //     <Route path="*" element={<NotFoundPage />}></Route>
    //     <Route path="insights" element={<InsightsPage />}></Route>
    //   </Routes>
    // </MainContextProvider>
    <InsightsPage />
  );
}

export default App;
