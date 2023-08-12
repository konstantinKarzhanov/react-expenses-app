import React, { useRef } from "react";
import ExpensesDetailsList from "./ExpensesDetailsList";
import ExpensesButton from "./ExpensesButton";

const ExpensesListItem = ({ idHandle, dataHandle }) => {
  const editBtn = useRef();
  const deleteBtn = useRef();
  const handleClick = () => {};

  return (
    <li>
      <ExpensesDetailsList idHandle={idHandle} dataHandle={dataHandle} />
      <div onClick={handleClick}>
        <ExpensesButton
          refHandle={editBtn}
          classHandle={"btn--edit"}
          children={"edit"}
        />
        <ExpensesButton
          refHandle={deleteBtn}
          classHandle={"btn--delete"}
          children={"delete"}
        />
      </div>
    </li>
  );
};

export default ExpensesListItem;
