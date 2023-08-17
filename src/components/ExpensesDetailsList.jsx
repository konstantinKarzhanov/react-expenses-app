import React from "react";
import ExpensesDetailsListItem from "./ExpensesDetailsListItem";
import currencyFormatter from "../utils/currencyFormatter";
import dateFormatter from "../utils/dateFormatter";

const ExpensesDetailsList = ({ idHandle, dataHandle }) => {
  const listArr = Object.entries(dataHandle).map(([key, value], index) => (
    <ExpensesDetailsListItem
      key={index}
      classHandle={`expense-${key}`}
      children={
        typeof value === "number"
          ? currencyFormatter(value)
          : key === "date"
          ? dateFormatter(value)
          : value
      }
    />
  ));

  return (
    <ul
      id={`expense-${idHandle}`}
      className="expense-details-list grid grid-container grid--ai-c grid--ji-c grid--all-gap text-capital"
    >
      {listArr}
    </ul>
  );
};

export default ExpensesDetailsList;
