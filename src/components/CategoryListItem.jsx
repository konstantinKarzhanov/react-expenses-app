import React from "react";
import useMainContext from "../hooks/useMainContext";
import Button from "./Button";

const CategoryListItem = ({ idHandle, children }) => {
  const { CATEGORIES_URL, deleteItem } = useMainContext();

  const processDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteItem(CATEGORIES_URL, id);
      console.log(`item with id: ${id} has been deleted`);
    }
  };

  const handleClick = (event) => {
    const parentContainer = event.target.parentElement;
    const id = +parentContainer.id.split("-").slice(-1)[0];
    processDelete(id);
  };

  return (
    <li id={idHandle}>
      <p>{children}</p>
      <Button
        handleClick={handleClick}
        classHandle={"btn--delete"}
        children={"delete"}
      />
    </li>
  );
};

export default CategoryListItem;
