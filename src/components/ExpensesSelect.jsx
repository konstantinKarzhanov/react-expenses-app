import React, { useState } from "react";
import useMainContext from "../hooks/useMainContext";
import useExpensesContext from "../hooks/useExpensesContext";
import ExpensesOption from "./ExpensesOption";

const ExpensesSelect = ({ idHandle, nameHandle, required }) => {
  const { defaultCategory, dataFromAPI } = useMainContext();
  const { categoryInput } = useExpensesContext();
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const optionArr = dataFromAPI["categories"]
    ? dataFromAPI["categories"].map(({ id, description }) => (
        <ExpensesOption key={id} children={description} />
      ))
    : [];

  return (
    <select
      ref={categoryInput}
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
