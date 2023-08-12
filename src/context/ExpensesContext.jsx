import React, { useRef, useState } from "react";

const ExpensesContext = React.createContext();

const ExpensesContextProvider = ({ children }) => {
  const defaultCategory = "uncategorized";
  const descriptionInput = useRef();
  const costInput = useRef();
  const dateInput = useRef();
  const categoryInput = useRef();
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const clearInput = (...args) =>
    args.forEach((item) => {
      if (item === categoryInput.current) {
        setSelectedCategory(defaultCategory);
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
        selectedCategory,
        setSelectedCategory,
        clearInput,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export { ExpensesContextProvider };
export default ExpensesContext;
