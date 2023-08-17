import React from "react";

const Button = ({
  refHandle,
  handleClick,
  classHandle,
  datasetValue,
  children,
}) => {
  return (
    <button
      ref={refHandle}
      onClick={handleClick}
      className={`${classHandle} fw--400 fancy--element`}
      {...(datasetValue ? { [datasetValue]: "" } : {})}
    >
      {children}
    </button>
  );
};

export default Button;
