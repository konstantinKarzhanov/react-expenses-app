import React from "react";
import ExpensesDetailsListItem from "./ExpensesDetailsListItem";

const ExpensesDetailsList = ({ idHandle, dataHandle }) => {
  const listArr = Object.entries(dataHandle).map(([key, value], index) => (
    <ExpensesDetailsListItem
      key={index}
      classHandle={`expense-${key}`}
      children={value}
    />
  ));

  return <ul id={idHandle}>{listArr}</ul>;
};

export default ExpensesDetailsList;
