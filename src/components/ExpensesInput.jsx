import React from "react";

const ExpensesInput = ({
  typeHandle,
  placeHolderHandle,
  minHandle,
  maxHandle,
  stepHandle,
}) => {
  return (
    <input
      type={typeHandle}
      placeholder={placeHolderHandle}
      min={minHandle}
      max={maxHandle}
      step={stepHandle}
    />
  );
};

export default ExpensesInput;
