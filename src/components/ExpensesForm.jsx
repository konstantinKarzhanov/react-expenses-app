import React from "react";
import useMainContext from "../hooks/useMainContext";
import useExpensesContext from "../hooks/useExpensesContext";
import ExpensesInput from "./ExpensesInput";
import ExpensesSelect from "./ExpensesSelect";
import ExpensesButton from "./ExpensesButton";

const ExpensesForm = () => {
  const { EXPENSES_URL, expensesFormID, setIsSubmitted, createItem, addItem } =
    useMainContext();
  const { descriptionInput, costInput, dateInput, categoryInput } =
    useExpensesContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    addItem(
      EXPENSES_URL,
      createItem(
        "expenses",
        descriptionInput.current,
        categoryInput.current,
        dateInput.current,
        costInput.current
      )
    );
    setIsSubmitted(true);
  };

  return (
    <form id={expensesFormID} onSubmit={handleSubmit}>
      <ExpensesInput
        refHandle={descriptionInput}
        idHandle="expense-description"
        nameHandle="description"
        typeHandle="text"
        placeHolderHandle="avadakedavra"
        required
      />
      <ExpensesInput
        refHandle={costInput}
        idHandle="expense-cost"
        nameHandle="cost"
        typeHandle="number"
        placeHolderHandle="$ 00.00"
        minHandle="0"
        maxHandle="999999.99"
        stepHandle="0.01"
        required
      />
      <ExpensesInput
        refHandle={dateInput}
        idHandle="expense-date"
        nameHandle="date"
        typeHandle="date"
        required
      />
      <ExpensesSelect
        refHandle={categoryInput}
        idHandle="expense-category"
        nameHandle="category"
        required
      />
      <ExpensesButton classHandle={"btn--submit"} children="add" />
    </form>
  );
};

export default ExpensesForm;
