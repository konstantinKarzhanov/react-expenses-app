import React from "react";
import useMainContext from "../hooks/useMainContext";
import useExpensesContext from "../hooks/useExpensesContext";
import ExpensesInput from "./ExpensesInput";
import ExpensesSelect from "./ExpensesSelect";
import ExpensesButton from "./ExpensesButton";

const ExpensesForm = ({ idHandle }) => {
  const { EXPENSES_URL, setIsSubmitted, createItem, addItem } =
    useMainContext();

  const { descriptionInput, costInput, dateInput, categoryInput, clearInput } =
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

    clearInput(
      descriptionInput.current,
      costInput.current,
      dateInput.current,
      categoryInput.current
    );
    setIsSubmitted(true);
  };

  return (
    <form id={idHandle.form} onSubmit={handleSubmit}>
      <ExpensesInput
        refHandle={descriptionInput}
        idHandle={idHandle.descriptionInput}
        nameHandle="description"
        typeHandle="text"
        placeHolderHandle="avadakedavra"
        required
      />
      <ExpensesInput
        refHandle={costInput}
        idHandle={idHandle.costInput}
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
        idHandle={idHandle.dateInput}
        nameHandle="date"
        typeHandle="date"
        required
      />
      <ExpensesSelect
        refHandle={categoryInput}
        idHandle={idHandle.categoryInput}
        nameHandle="category"
        required
      />
      <ExpensesButton classHandle={"btn--submit"} children="add" />
    </form>
  );
};

export default ExpensesForm;
