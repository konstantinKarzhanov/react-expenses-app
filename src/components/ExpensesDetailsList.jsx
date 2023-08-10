import React from "react";
import ExpensesDetailsListItem from "./ExpensesDetailsListItem";

const ExpensesDetailsList = ({ dataHandle }) => {
  const listArr = Object.entries(dataHandle).map((item, index) => {
    return (
      <ExpensesDetailsListItem
        key={index}
        idHandle={item[0]}
        children={item[1]}
      />
    );
  });
  return <ul id={dataHandle.id}>{listArr}</ul>;
};

export default ExpensesDetailsList;
