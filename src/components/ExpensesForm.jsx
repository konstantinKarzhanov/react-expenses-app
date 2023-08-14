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
  valueHandle: {
    defaultDescription,
    defaultCost,
    defaultDate,
    defaultCategory,
  },
}) => {
  const { EXPENSES_URL, setIsSubmitted, createItem, addItem, updateItem } =
    useMainContext();

  const {
    editableId,
    editDescriptionInput,
    editCostInput,
    editDateInput,
    editCategoryInput,
    clearForm,
  } = useExpensesContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.id.includes("edit")) {
      updateItem(EXPENSES_URL, editableId.current, {
        id: editableId.current,
        [editDescriptionInput.current.name]: editDescriptionInput.current.value,
        [editCategoryInput.current.name]: editCategoryInput.current.value,
        [editDateInput.current.name]: editDateInput.current.value,
        [editCostInput.current.name]: editCostInput.current.value,
      });
    } else {
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
    }

    clearForm(descriptionInput.current, costInput.current, dateInput.current);
    setIsSubmitted(true);
  };

  return (
    <form id={formId} onSubmit={handleSubmit}>
      <ExpensesInput
        refHandle={descriptionInput}
        idHandle={descriptionInputId}
        nameHandle="description"
        valueHandle={defaultDescription}
        typeHandle="text"
        placeHolderHandle="avadakedavra"
        required
      />
      <ExpensesInput
        refHandle={costInput}
        idHandle={costInputId}
        nameHandle="cost"
        valueHandle={defaultCost}
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
        valueHandle={defaultDate}
        typeHandle="date"
        required
      />
      <ExpensesSelect
        refHandle={categoryInput}
        idHandle={categoryInputId}
        nameHandle="category"
        valueHandle={defaultCategory}
        required
      />
      <ExpensesButton classHandle={"btn--submit"} children="add" />
    </form>
  );
};

export default ExpensesForm;
