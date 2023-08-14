import React from "react";

const ExpensesButton = ({ refHandle, handleClick, classHandle, children }) => {
  return (
    <button ref={refHandle} onClick={handleClick} className={classHandle}>
      {children}
    </button>
  );
};

export default ExpensesButton;
