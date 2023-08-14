import React from "react";
import useMainContext from "../hooks/useMainContext";
import useExpensesContext from "../hooks/useExpensesContext";
import ExpensesInput from "./ExpensesInput";
import ExpensesSelect from "./ExpensesSelect";
import ExpensesButton from "./ExpensesButton";

const ExpensesForm = ({
  refHandle: { descriptionInput, costInput, dateInput, categoryInput },
  idHandle: {
    formId,
    descriptionInputId,
    costInputId,
    dateInputId,
    categoryInputId,
  },
}) => {
  const { EXPENSES_URL, setIsSubmitted, createItem, addItem } =
    useMainContext();

  const { category, setCategory, editCategory, setEditCategory, clearInput } =
    useExpensesContext();

  const handleChange = (event) => {
    if (!categoryInputId.includes("edit")) {
      setCategory(event.target.value);
    } else {
      setEditCategory(event.target.value);
    }
  };

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
    <form id={formId} onSubmit={handleSubmit}>
      <ExpensesInput
        refHandle={descriptionInput}
        idHandle={descriptionInputId}
        nameHandle="description"
        typeHandle="text"
        placeHolderHandle="avadakedavra"
        required
      />
      <ExpensesInput
        refHandle={costInput}
        idHandle={costInputId}
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
        idHandle={dateInputId}
        nameHandle="date"
        typeHandle="date"
        required
      />
      <ExpensesSelect
        refHandle={categoryInput}
        handleChange={handleChange}
        idHandle={categoryInputId}
        nameHandle="category"
        valueHandle={
          !categoryInputId.includes("edit") ? category : editCategory
        }
        required
      />
      <ExpensesButton classHandle={"btn--submit"} children="add" />
    </form>
  );
};

export default ExpensesForm;
