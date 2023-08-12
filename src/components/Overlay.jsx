import React from "react";
import ExpensesForm from "./ExpensesForm";

const Overlay = () => {
  return (
    <>
      <p>hello i am overlay</p>
      <ExpensesForm idHandle="edit-expense-form" />
    </>
  );
};

export default Overlay;
