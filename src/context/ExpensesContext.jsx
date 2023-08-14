import React, { useRef, useState } from "react";

const ExpensesContext = React.createContext();

const ExpensesContextProvider = ({ children }) => {
  const defaultCategory = "uncategorized";

  const descriptionInput = useRef();
  const costInput = useRef();
  const dateInput = useRef();
  const categoryInput = useRef();
  const [category, setCategory] = useState(defaultCategory);

  const editDescriptionInput = useRef();
  const editCostInput = useRef();
  const editDateInput = useRef();
  const editCategoryInput = useRef();
  const [editCategory, setEditCategory] = useState(defaultCategory);

  const clearInput = (...args) =>
    args.forEach((item) => {
      if (item === categoryInput.current) {
        setCategory(defaultCategory);
      } else if (item === editCategoryInput.current) {
        setEditCategory(defaultCategory);
      } else {
        item.value = item.defaultValue;
      }
    });

  return (
    <ExpensesContext.Provider
      value={{
        descriptionInput,
        costInput,
        dateInput,
        categoryInput,
        category,
        setCategory,
        editDescriptionInput,
        editCostInput,
        editDateInput,
        editCategoryInput,
        editCategory,
        setEditCategory,
        clearInput,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export { ExpensesContextProvider };
export default ExpensesContext;
