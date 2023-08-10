import React from "react";
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
        <ExpensesForm />
        <ExpensesList />
      </Main>
      <Footer />
    </>
  );
};

export default ExpensesPage;
