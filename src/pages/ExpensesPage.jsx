import React from "react";
import useMainContext from "../hooks/useMainContext";
import { ExpensesContextProvider } from "../context/ExpensesContext";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ExpensesForm from "../components/ExpensesForm";
import ExpensesList from "../components/ExpensesList";
import Overlay from "../components/Overlay";

const ExpensesPage = () => {
  const { isOverlayShown } = useMainContext();
  return (
    <>
      <ExpensesContextProvider>
        {isOverlayShown && <Overlay />}
        <Header mainTitleHandle="expenses" />
        <Main>
          <ExpensesForm idHandle="expenses-form" />
          <ExpensesList />
        </Main>
        <Footer />
      </ExpensesContextProvider>
    </>
  );
};

export default ExpensesPage;
