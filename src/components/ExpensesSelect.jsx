import React, { useContext } from "react";
import Context from "../context/Context";
import ExpensesOption from "./ExpensesOption";

const ExpensesSelect = ({ required }) => {
  const { defaultCategory, dataFromAPI } = useContext(Context);
  const optionArr = dataFromAPI
    .reduce((acc, { name }) => {
      if (acc.indexOf(name) === -1) {
        acc.push(name);
      }
      return acc;
    }, [])
    .map((item, index) => (
      <ExpensesOption
        key={index}
        children={item}
        selected={item === defaultCategory}
      />
    ));

  return (
    <select name="expense-category" required={required}>
      {optionArr}
    </select>
  );
};

export default ExpensesSelect;
