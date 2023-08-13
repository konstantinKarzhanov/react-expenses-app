import React from "react";
import { ExpensesContextProvider } from "../context/ExpensesContext";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ExpensesForm from "../components/ExpensesForm";
import ExpensesList from "../components/ExpensesList";

const ExpensesPage = () => {
  return (
    <>
      <Header mainTitleHandle="expenses" />
      <Main>
        <ExpensesContextProvider>
          <ExpensesForm />
        </ExpensesContextProvider>
        <ExpensesList />
      </Main>
      <Footer />
    </>
  );
};

export default ExpensesPage;
