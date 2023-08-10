import React, { useState, useContext } from "react";
import Context from "../context/Context";
import ExpensesOption from "./ExpensesOption";

const ExpensesSelect = ({ required }) => {
  const { defaultCategory, dataFromAPI } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const optionArr = dataFromAPI["categories"]
    ? dataFromAPI["categories"].map(({ id, description }) => (
        <ExpensesOption key={id} children={description} />
      ))
    : [];

  return (
    <select
      onChange={(event) => setSelectedCategory(event.target.value)}
      name="expense-category"
      value={selectedCategory}
      required={required}
    >
      {optionArr}
    </select>
  );
};

export default ExpensesSelect;
