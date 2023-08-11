import React from "react";
import useMainContext from "../hooks/useMainContext";
import ExpensesListItem from "./ExpensesListItem";

const ExpensesList = () => {
  const { dataFromAPI } = useMainContext();
  const listArr = dataFromAPI["expenses"]
    ? dataFromAPI["expenses"].map(({ id, ...data }) => (
        <ExpensesListItem
          key={id}
          idHandle={`expense-${id}`}
          dataHandle={data}
        />
      ))
    : [];
  return <ul>{listArr}</ul>;
};

export default ExpensesList;
