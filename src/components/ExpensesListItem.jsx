import React from "react";
import ExpensesDetailsList from "./ExpensesDetailsList";

const ExpensesListItem = ({ dataHandle }) => {
  return (
    <li>
      <ExpensesDetailsList dataHandle={dataHandle} />
      <div></div>
    </li>
  );
};

export default ExpensesListItem;
