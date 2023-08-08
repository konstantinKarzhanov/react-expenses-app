import React from "react";

const Insights = () => {
  async function dataFetch() {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    console.log(data);
  }

  dataFetch();
  return (
    <>
      <div>Place Holder nav bar for App Navigation</div>
    </>
  );
};

export default Insights;
