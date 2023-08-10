import React, { useContext } from "react";
import Context from "../context/Context";
import ExpensesListItem from "./ExpensesListItem";

const ExpensesList = () => {
  const { dataFromAPI } = useContext(Context);
  const listArr = dataFromAPI["expenses"]
    ? dataFromAPI["expenses"].map(({ id, ...data }) => (
        <ExpensesListItem key={id} dataHandle={data} />
      ))
    : [];
  return <ul>{listArr}</ul>;
};

export default ExpensesList;
