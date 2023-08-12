import React from "react";

const ExpensesButton = ({ refHandle, children }) => {
  return <button ref={refHandle}>{children}</button>;
};

export default ExpensesButton;
