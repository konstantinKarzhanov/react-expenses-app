import React, { useRef } from "react";

const ExpensesContext = React.createContext();

const ExpensesContextProvider = ({ children }) => {
  const descriptionInput = useRef();
  const costInput = useRef();
  const dateInput = useRef();
  const categoryInput = useRef();
  const editBtn = useRef();
  const deleteBtn = useRef();

  return (
    <ExpensesContext.Provider
      value={{
        descriptionInput,
        costInput,
        dateInput,
        categoryInput,
        editBtn,
        deleteBtn,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export { ExpensesContextProvider };
export default ExpensesContext;
