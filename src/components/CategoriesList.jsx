import React from "react";
import useMainContext from "../hooks/useMainContext";
import CategoryListItem from "../components/CategoryListItem";

const CategoriesList = () => {
  const { isLoading, fetchError, dataFromAPI } = useMainContext();
  const renderLoading = () => <p>Please wait, data is loading....</p>;
  const renderError = () => (
    <p>{`${fetchError.name}: ${fetchError.message}`}</p>
  );
  const renderData = () => {
    if (dataFromAPI["categories"].length > 0) {
      return (
        <ul>
          {dataFromAPI["categories"].map(({ id, description }) => (
            <CategoryListItem
              key={id}
              idHandle={`category-${id}`}
              children={description}
            />
          ))}
        </ul>
      );
    } else {
      return <p>There is no data to show yet</p>;
    }
  };

  return (
    <>
      {isLoading && renderLoading()}
      {!isLoading && fetchError && renderError()}
      {!isLoading && !fetchError && dataFromAPI["categories"] && renderData()}
    </>
  );
};

export default CategoriesList;
