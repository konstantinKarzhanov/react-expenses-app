import React from "react";
import useMainContext from "../hooks/useMainContext";
import ExpensesListItem from "./ExpensesListItem";

const ExpensesList = () => {
  const { isLoading, fetchError, dataFromAPI } = useMainContext();

  const renderLoading = () => <p>Please wait, data is loading....</p>;

  const renderError = () => (
    <p>{`${fetchError.name}: ${fetchError.message}`}</p>
  );

  const renderData = () => (
    <ul>
      {dataFromAPI["expenses"].map(({ id, ...data }) => (
        <ExpensesListItem
          key={id}
          idHandle={`expense-${id}`}
          dataHandle={data}
        />
      ))}
    </ul>
  );

  return (
    <>
      {isLoading && renderLoading()}
      {!isLoading && fetchError && renderError()}
      {!isLoading && !fetchError && dataFromAPI["expenses"] && renderData()}
    </>
  );
};

export default ExpensesList;
