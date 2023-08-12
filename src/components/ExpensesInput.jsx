import React from "react";

const ExpensesInput = ({
  refHandle,
  idHandle,
  nameHandle,
  typeHandle,
  placeHolderHandle,
  minHandle,
  maxHandle,
  stepHandle,
  required,
}) => {
  return (
    <input
      ref={refHandle}
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
