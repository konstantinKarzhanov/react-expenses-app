import React from "react";
import useExpensesContext from "../hooks/useExpensesContext";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ExpensesForm from "../components/ExpensesForm";
import ExpensesList from "../components/ExpensesList";

const ExpensesPage = () => {
  const { descriptionInput, costInput, dateInput, categoryInput } =
    useExpensesContext();

  return (
    <>
      <Header mainTitleHandle="expenses" />
      <Main>
        <ExpensesForm
          refHandle={{
            descriptionInput,
            costInput,
            dateInput,
            categoryInput,
          }}
          idHandle={{
            formId: "expenses-form",
            descriptionInputId: "expense-description",
            costInputId: "expense-cost",
            dateInputId: "expense-date",
            categoryInputId: "expense-category",
          }}
          valueHandle={{
            defaultDescription: "",
            defaultCost: "",
            defaultDate: "",
            defaultCategory: "travel",
          }}
        />
        <ExpensesList />
      </Main>
      <Footer />
    </>
  );
};

export default ExpensesPage;
