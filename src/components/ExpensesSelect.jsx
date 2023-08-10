import React, { useContext } from "react";
import Context from "../context/Context";
import ExpensesOption from "./ExpensesOption";

const ExpensesSelect = () => {
  const { dataFromAPI } = useContext(Context);
  const optionArr = dataFromAPI
    .reduce((acc, { name }) => {
      if (acc.indexOf(name) === -1) {
        acc.push(name);
      }
      return acc;
    }, [])
    .map((item, index) => <ExpensesOption key={index} children={item} />);

  return <select name="expense-category">{optionArr}</select>;
};

export default ExpensesSelect;
