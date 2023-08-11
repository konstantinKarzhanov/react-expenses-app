import React from "react";

const ExpensesOption = ({ children }) => {
  return <option value={children}>{children}</option>;
};

export default ExpensesOption;
