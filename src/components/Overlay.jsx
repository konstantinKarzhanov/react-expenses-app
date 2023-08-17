import React from "react";
import useOverlayContext from "../hooks/useOverlayContext";
import useExpensesContext from "../hooks/useExpensesContext";
import ExpensesForm from "./ExpensesForm";
import NavigationMenu from "./NavigationMenu";
import "../styles/overlay.css";

const Overlay = () => {
  const { isOverlay, isExpensesEdit, isMenu } = useOverlayContext();
  const {
    editDescriptionInput,
    editCostInput,
    editDateInput,
    editCategoryInput,
    editDescriptionDefaultValue,
    editCostDefaultValue,
    editDateDefaultValue,
    editCategoryDefaultValue,
  } = useExpensesContext();

  return (
    <div className="overlay" {...(isOverlay && { "data-active": "" })}>
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
          valueHandle={{
            defaultDescription: editDescriptionDefaultValue.current,
            defaultCost: editCostDefaultValue.current,
            defaultDate: editDateDefaultValue.current,
            defaultCategory: editCategoryDefaultValue.current,
          }}
        />
      )}
      {isMenu && <NavigationMenu />}
    </div>
  );
};

export default Overlay;
