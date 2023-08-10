import React from "react";
import ExpensesDetailsListItem from "./ExpensesDetailsListItem";

const ExpensesDetailsList = ({ dataHandle }) => {
  const listArr = Object.entries(dataHandle).map((item, index) => (
    <ExpensesDetailsListItem
      key={index}
      classHandle={`expense-${item[0]}`}
      children={item[1]}
    />
  ));
  return <ul>{listArr}</ul>;
};

export default ExpensesDetailsList;
