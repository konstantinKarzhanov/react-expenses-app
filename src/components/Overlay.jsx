import React from "react";
import useOverlayContext from "../hooks/useOverlayContext";
import ExpensesForm from "./ExpensesForm";

const Overlay = () => {
  const { isExpensesEdit } = useOverlayContext();
  return (
    <>
      <p>hello i am overlay</p>
      {isExpensesEdit && (
        <ExpensesForm
          idHandle={{
            form: "edit-expenses-form",
            descriptionInput: "edit-expense-description",
            costInput: "edit-expense-cost",
            dateInput: "edit-expense-date",
            categoryInput: "edit-expense-category",
          }}
        />
      )}
    </>
  );
};

export default Overlay;
