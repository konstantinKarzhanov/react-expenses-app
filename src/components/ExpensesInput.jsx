import React from "react";

const ExpensesInput = ({
  typeHandle,
  placeHolderHandle,
  minHandle,
  maxHandle,
  stepHandle,
  required,
}) => {
  return (
    <input
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
