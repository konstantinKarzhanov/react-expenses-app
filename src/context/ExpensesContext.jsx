import React, { useRef, useState } from "react";

const ExpensesContext = React.createContext();

const ExpensesContextProvider = ({ children }) => {
  const descriptionInput = useRef();
  const costInput = useRef();
  const dateInput = useRef();
  const categoryInput = useRef();

  const editDescriptionInput = useRef();
  const editCostInput = useRef();
  const editDateInput = useRef();
  const editCategoryInput = useRef();

  const editDescriptionDefaultValue = useRef();
  const editCostDefaultValue = useRef();
  const editDateDefaultValue = useRef();
  const editCategoryDefaultValue = useRef();

  const fillEditForm = (data) => {
    editDescriptionDefaultValue.current = data["description"];
    editCostDefaultValue.current = data["cost"];
    editDateDefaultValue.current = data["date"];
    editCategoryDefaultValue.current = data["category"];
  };

  const clearForm = (...args) =>
    args.forEach((item) => {
      item.value = "";
    });

  return (
    <ExpensesContext.Provider
      value={{
        descriptionInput,
        costInput,
        dateInput,
        categoryInput,
        editDescriptionInput,
        editCostInput,
        editDateInput,
        editCategoryInput,
        editDescriptionDefaultValue,
        editCostDefaultValue,
        editDateDefaultValue,
        editCategoryDefaultValue,
        fillEditForm,
        clearForm,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export { ExpensesContextProvider };
export default ExpensesContext;
