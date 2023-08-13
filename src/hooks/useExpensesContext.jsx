import { useContext } from "react";
import ExpensesContext from "../context/ExpensesContext";

const useExpensesContext = () => {
  return useContext(ExpensesContext);
};

export default useExpensesContext;
