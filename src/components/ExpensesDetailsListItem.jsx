import React from "react";

const ExpensesDetailsListItem = ({ idHandle, children }) => {
  return (
    <li className={`expense-${idHandle === "id" ? "category" : idHandle}`}>
      {idHandle === "id" ? children.split("-")[0] : children}
    </li>
  );
};

export default ExpensesDetailsListItem;
