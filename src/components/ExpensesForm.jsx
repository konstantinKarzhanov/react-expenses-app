import React from "react";
import useMainContext from "../hooks/useMainContext";
import ExpensesInput from "./ExpensesInput";
import ExpensesSelect from "./ExpensesSelect";
import ExpensesButton from "./ExpensesButton";

const ExpensesForm = () => {
  const { expensesFormID, setIsSubmitted } = useMainContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form id={expensesFormID} onSubmit={handleSubmit}>
      <ExpensesInput
        idHandle="expense-description"
        nameHandle="description"
        typeHandle="text"
        placeHolderHandle="avadakedavra"
        required
      />
      <ExpensesInput
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
        idHandle="expense-date"
        nameHandle="date"
        typeHandle="date"
        required
      />
      <ExpensesSelect
        idHandle="expense-category"
        nameHandle="category"
        required
      />
      <ExpensesButton children="add" />
    </form>
  );
};

export default ExpensesForm;
