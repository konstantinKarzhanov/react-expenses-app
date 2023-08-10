import React, { useContext } from "react";
import Context from "../context/Context";
import ExpensesListItem from "./ExpensesListItem";

const ExpensesList = () => {
  const { dataFromAPI } = useContext(Context);
  // const listArr = dataFromAPI.map(({ id, ...data }) => (
  //   <ExpensesListItem key={id} dataHandle={data} />
  // ));
  const listArr = dataFromAPI
    .reduce((acc, { expenses }) => acc.concat(expenses), [])
    .map((item) => <ExpensesListItem key={item.id} dataHandle={item} />);
  console.log(listArr);
  return <ul>{listArr}</ul>;
};

export default ExpensesList;
