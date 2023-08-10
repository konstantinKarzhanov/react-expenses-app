import React from "react";

const ExpensesOption = ({ children, selected }) => {
  return (
    <option value={children} selected={selected}>
      {children}
    </option>
  );
};

export default ExpensesOption;
