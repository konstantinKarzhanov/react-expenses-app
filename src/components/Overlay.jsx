import React from "react";
import useOverlayContext from "../hooks/useOverlayContext";
import useExpensesContext from "../hooks/useExpensesContext";
import ExpensesForm from "./ExpensesForm";

const Overlay = () => {
  const { isExpensesEdit } = useOverlayContext();
  const {
    editDescriptionInput,
    editCostInput,
    editDateInput,
    editCategoryInput,
  } = useExpensesContext();
  return (
    <>
      <p>hello i am overlay</p>
      {isExpensesEdit && (
        <ExpensesForm
          refHandle={{
            descriptionInput: editDescriptionInput,
            costInput: editCostInput,
            dateInput: editDateInput,
            categoryInput: editCategoryInput,
          }}
          idHandle={{
            formId: "edit-expenses-form",
            descriptionInputId: "edit-expense-description",
            costInputId: "edit-expense-cost",
            dateInputId: "edit-expense-date",
            categoryInputId: "edit-expense-category",
          }}
        />
      )}
    </>
  );
};

export default Overlay;
