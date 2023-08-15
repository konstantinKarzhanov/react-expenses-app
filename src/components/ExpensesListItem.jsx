import React, { useRef } from "react";
import useOverlayContext from "../hooks/useOverlayContext";
import useMainContext from "../hooks/useMainContext";
import useExpensesContext from "../hooks/useExpensesContext";
import ExpensesDetailsList from "./ExpensesDetailsList";
import Button from "./Button";

const ExpensesListItem = ({ idHandle, dataHandle }) => {
  const { isOverlay, setIsOverlay, isExpensesEdit, setIsExpensesEdit } =
    useOverlayContext();
  const { EXPENSES_URL, dataFromAPI, deleteItem } = useMainContext();
  const { editableId, fillEditForm } = useExpensesContext();

  const editBtn = useRef();
  const deleteBtn = useRef();

  const processEdit = (id) => {
    setIsOverlay(!isOverlay);
    setIsExpensesEdit(!isExpensesEdit);

    editableId.current = id;

    const editData = dataFromAPI["expenses"].filter(
      (item) => item.id === id
    )[0];

    fillEditForm(editData);
  };
  const processDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteItem(EXPENSES_URL, id);
      console.log(`item with id: ${id} has been deleted`);
    }
  };

  const handleClick = (event) => {
    const target = event.target.closest("button");
    if (!target) return;
    target === editBtn.current && processEdit(idHandle);
    target === deleteBtn.current && processDelete(idHandle);
  };

  return (
    <li>
      <ExpensesDetailsList
        idHandle={`expense-${idHandle}`}
        dataHandle={dataHandle}
      />
      <div onClick={handleClick}>
        <Button
          refHandle={editBtn}
          classHandle={"btn--edit"}
          children={"edit"}
        />
        <Button
          refHandle={deleteBtn}
          classHandle={"btn--delete"}
          children={"delete"}
        />
      </div>
    </li>
  );
};

export default ExpensesListItem;
