import React from "react";
import { Routes, Route } from "react-router-dom";

// hooks
import useOverlayContext from "./hooks/useOverlayContext";

// components
import { MainContextProvider } from "./context/MainContext";
import { ExpensesContextProvider } from "./context/ExpensesContext";
import Overlay from "./components/Overlay";
import Button from "./components/Button";
import Footer from "./components/Footer";

// pages
import ExpensesPage from "./pages/ExpensesPage";
import CategoriesPage from "./pages/CategoriesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import InsightsPage from "./pages/InsightsPage";

// styles
import "./App.css";

function App() {
  const body = document.querySelector("body");
  const { isOverlay, handleClick } = useOverlayContext();

  body.dataset.blockedScroll = isOverlay;

  return (
    <>
      <div className="overlap" {...(isOverlay && { "data-active": "" })}></div>
      <div className="container bg-c--gradient">
        <MainContextProvider>
          <ExpensesContextProvider>
            <Overlay />
            <Routes>
              <Route path="/" element={<ExpensesPage />}></Route>
              <Route path="home" element={<ExpensesPage />}></Route>
              <Route path="expenses" element={<ExpensesPage />}></Route>
              <Route path="categories" element={<CategoriesPage />}></Route>
              <Route path="insights" element={<InsightsPage />}></Route>
              <Route path="about" element={<AboutPage />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
            <Button
              handleClick={handleClick}
              classHandle="btn--menu"
              datasetValue={isOverlay && "data-visible-menu"}
              children={!isOverlay ? "menu" : "close"}
            />
          </ExpensesContextProvider>
        </MainContextProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
