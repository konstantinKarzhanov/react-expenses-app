import React from "react";
import useMainContext from "../hooks/useMainContext";
import useExpensesContext from "../hooks/useExpensesContext";
import ExpensesOption from "./ExpensesOption";

const ExpensesSelect = ({ refHandle, idHandle, nameHandle, required }) => {
  const { dataFromAPI } = useMainContext();
  const { selectedCategory, setSelectedCategory } = useExpensesContext();

  const optionArr = dataFromAPI["categories"]
    ? dataFromAPI["categories"].map(({ id, description }) => (
        <ExpensesOption key={id} children={description} />
      ))
    : [];

  return (
    <select
      ref={refHandle}
      onChange={(event) => setSelectedCategory(event.target.value)}
      id={idHandle}
      name={nameHandle}
      value={selectedCategory}
      required={required}
    >
      {optionArr}
    </select>
  );
};

export default ExpensesSelect;
