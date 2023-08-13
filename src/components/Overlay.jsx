import React from "react";
import useOverlayContext from "../hooks/useOverlayContext";
import ExpensesForm from "./ExpensesForm";

const Overlay = () => {
  const { isExpensesEdit } = useOverlayContext();
  return (
    <>
      <p>hello i am overlay</p>
      {isExpensesEdit && <ExpensesForm idHandle="edit-expense-form" />}
    </>
  );
};

export default Overlay;
