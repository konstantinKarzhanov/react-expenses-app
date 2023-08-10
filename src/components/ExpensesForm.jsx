import React, { useContext } from "react";
import Context from "../context/Context";
import ExpensesInput from "./ExpensesInput";
import ExpensesSelect from "./ExpensesSelect";
import ExpensesButton from "./ExpensesButton";

const ExpensesForm = () => {
  const { expensesFormID } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form id={expensesFormID} onSubmit={handleSubmit}>
      <ExpensesInput
        typeHandle="text"
        placeHolderHandle="avadakedavra"
        required
      />
      <ExpensesInput
        typeHandle="number"
        placeHolderHandle="$ 00.00"
        minHandle="0"
        maxHandle="999999.99"
        stepHandle="0.01"
        required
      />
      <ExpensesInput typeHandle="date" required />
      <ExpensesSelect required />
      <ExpensesButton children="add" />
    </form>
  );
};

export default ExpensesForm;