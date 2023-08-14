import React from "react";

const ExpensesButton = ({ refHandle, classHandle, children }) => {
  return (
    <button ref={refHandle} className={classHandle}>
      {children}
    </button>
  );
};

export default ExpensesButton;
