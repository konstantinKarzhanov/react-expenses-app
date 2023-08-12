import React, { useRef } from "react";
import useMainContext from "../hooks/useMainContext";
import ExpensesDetailsList from "./ExpensesDetailsList";
import ExpensesButton from "./ExpensesButton";

const ExpensesListItem = ({ idHandle, dataHandle }) => {
  const { EXPENSES_URL, deleteItem } = useMainContext();
  const editBtn = useRef();
  const deleteBtn = useRef();

  const processEdit = () => {};
  const processDelete = (id) => {
    window.confirm("Are you sure you want to delete this item?") &&
      deleteItem(EXPENSES_URL, id);
    console.log(`item with id: ${id} has been deleted`);
  };

  const handleClick = (event) => {
    const target = event.target.closest("button");
    if (!target) return;
    const parentContainer = target.parentElement;
    const dataId = +parentContainer.previousElementSibling.id
      .split("-")
      .slice(-1)[0];
    target === editBtn.current && processEdit();
    target === deleteBtn.current && processDelete(dataId);
  };

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
