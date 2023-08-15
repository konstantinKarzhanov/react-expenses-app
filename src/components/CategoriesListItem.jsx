import React from "react";
import useMainContext from "../hooks/useMainContext";
import Button from "./Button";

const CategoriesListItem = ({ idHandle, children }) => {
  const { CATEGORIES_URL, deleteItem } = useMainContext();

  const processDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteItem(CATEGORIES_URL, id);
      console.log(`item with id: ${id} has been deleted`);
    }
  };

  const handleClick = () => {
    processDelete(idHandle);
  };

  return (
    <li id={`category-${idHandle}`}>
      <p>{children}</p>
      <Button
        handleClick={handleClick}
        classHandle={"btn--delete"}
        children={"delete"}
      />
    </li>
  );
};

export default CategoriesListItem;
