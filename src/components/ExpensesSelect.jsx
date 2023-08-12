import React, { useState } from "react";
import useMainContext from "../hooks/useMainContext";
import ExpensesOption from "./ExpensesOption";

const ExpensesSelect = ({ refHandle, idHandle, nameHandle, required }) => {
  const { defaultCategory, dataFromAPI } = useMainContext();
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

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
