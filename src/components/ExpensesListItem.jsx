import React from "react";
import ExpensesDetailsList from "./ExpensesDetailsList";

const ExpensesListItem = ({ idHandle, dataHandle }) => {
  return (
    <li>
      <ExpensesDetailsList idHandle={idHandle} dataHandle={dataHandle} />
      <div></div>
    </li>
  );
};

export default ExpensesListItem;
