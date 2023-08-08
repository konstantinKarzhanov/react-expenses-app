import React from "react";
import Datapoint from "./Datapoint";
import { useState, useEffect } from "react";

const Insights = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("http://localhost:5000/expenses");
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    dataFetch();
  }, []);

  const valueForCategory = new Set();

  for (const obj of data) {
    valueForCategory.add(obj.category);
  }

  const valueArray = Array.from(valueForCategory);
  console.log(valueArray);

  let highestCost = 0;
  for (const obj of data) {
    if (typeof obj.cost === "number" && obj.cost > highestCost) {
      highestCost = obj.cost;
    }
  }

  let lowestCost = highestCost;
  for (const obj of data) {
    if (typeof obj.cost === "number" && obj.cost < lowestCost) {
      lowestCost = obj.cost;
    }
  }

  let totalSpending = 0;
  for (const obj of data) {
    totalSpending += obj.cost;
  }

  const percentage = (category, dataSet) => {
    let categorySpent = 0;
    for (const obj of dataSet) {
      if (typeof obj.cost === "number" && obj.category === category) {
        categorySpent += obj.cost;
      }
    }
    return categorySpent;
  };

  return (
    <>
      <div>Expenses Insights</div>
      <div>
        Lets take a look at the different categories you are spending your money
        on
      </div>
      <div>
        {valueArray.map((value) => (
          <Datapoint dataPoint={value} />
        ))}
      </div>
      <div>Your most expensive expense was ${highestCost}</div>
      <div>Your least expensive expense was ${lowestCost}</div>
      <div>Total Spent: ${totalSpending}</div>
      <div>total amount on Bills = ${percentage("Bills", data)}</div>
      <div>
        Percentage of total spending on Bills
        {Math.round((percentage("Bills", data) / totalSpending) * 100)}%
      </div>
    </>
  );
};

export default Insights;
