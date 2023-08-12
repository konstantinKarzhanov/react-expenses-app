import React from "react";
import useExpensesContext from "../hooks/useExpensesContext";

const ExpensesInput = ({
  idHandle,
  nameHandle,
  typeHandle,
  placeHolderHandle,
  minHandle,
  maxHandle,
  stepHandle,
  required,
}) => {
  const { descriptionInput, costInput, dateInput } = useExpensesContext();
  return (
    <input
      ref={
        idHandle === "expense-description"
          ? descriptionInput
          : idHandle === "expense-cost"
          ? costInput
          : dateInput
      }
      id={idHandle}
      name={nameHandle}
      type={typeHandle}
      placeholder={placeHolderHandle}
      min={minHandle}
      max={maxHandle}
      step={stepHandle}
      required={required}
    />
  );
};

export default ExpensesInput;
