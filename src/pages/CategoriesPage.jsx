import React from "react";
import { CategoriesContextProvider } from "../context/CategoriesContext";
import CategoriesForm from "../components/CategoriesForm";
import CategoriesList from "../components/CategoriesList";

const CategoriesPage = () => {
  return (
    <CategoriesContextProvider>
      <CategoriesForm />
      <CategoriesList />
    </CategoriesContextProvider>
  );
};

export default CategoriesPage;
