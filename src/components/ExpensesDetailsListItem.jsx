import React from "react";

const ExpensesDetailsListItem = ({ classHandle, children }) => {
  return <li className={classHandle}>{children}</li>;
};

export default ExpensesDetailsListItem;
