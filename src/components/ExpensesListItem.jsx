import React from "react";
import useExpensesContext from "../context/ExpensesContext";
import ExpensesDetailsList from "./ExpensesDetailsList";
import ExpensesButton from "./ExpensesButton";

const ExpensesListItem = ({ idHandle, dataHandle }) => {
  const { editBtn, deleteBtn } = useExpensesContext();
  const handleClick = () => {};

  return (
    <li>
      <ExpensesDetailsList idHandle={idHandle} dataHandle={dataHandle} />
      <div onClick={handleClick}>
        <ExpensesButton refHandle={editBtn} children={"edit"} />
        <ExpensesButton refHandle={deleteBtn} children={"delete"} />
      </div>
    </li>
  );
};

export default ExpensesListItem;
