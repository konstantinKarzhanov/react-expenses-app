import React from "react";
import { useState, useEffect } from "react";
import BarChart from "./BarChart";

const Insights = () => {
  const [data, setData] = useState([]);
  const [barData, setBarData] = useState({
    labels: [],
    datasets: [
      {
        label: "Expenses",
        data: [],
      },
    ],
  });

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      setData(data);
    };
    dataFetch();
    const labels = data.map((category) => category.name);
    const categoryTotalsArray = [];

    data.forEach((categoryData) => {
      const expenses = categoryData.expenses;

      let categoryTotal = 0;
      expenses.forEach((expense) => {
        categoryTotal += expense.cost;
      });

      categoryTotalsArray.push(categoryTotal);
    });
    setBarData({
      labels: labels,
      datasets: [
        {
          label: "Expenses",
          data: categoryTotalsArray,
        },
      ],
    });
  }, [data]);

  const categoryNames = [];

  for (const category of data) {
    categoryNames.push(category.name);
  }

  function findExpenseWithHighestCost(data) {
    let highestCost = 0;
    let highestCostExpense = 0;

    for (const category of data) {
      for (const expense of category.expenses) {
        if (expense.cost > highestCost) {
          highestCost = expense.cost;
          highestCostExpense = expense;
        }
      }
    }

    return highestCostExpense;
  }

  const expenseWithHighestCost = findExpenseWithHighestCost(data);

  function findExpenseWithLowestCost(data) {
    let lowestCost = Number.POSITIVE_INFINITY;
    let lowestCostExpense = 0;

    for (const category of data) {
      for (const expense of category.expenses) {
        if (expense.cost < lowestCost) {
          lowestCost = expense.cost;
          lowestCostExpense = expense;
        }
      }
    }

    return lowestCostExpense;
  }

  const expenseWithLowestCost = findExpenseWithLowestCost(data);

  return (
    <>
      <h1 id="header-text">Expenses Insights</h1>
      <div id="sub-header-text">
        Lets take a look at the categories you spent money on this month
      </div>
      <div id="category-container">
        {categoryNames.map((categoryName, index) => (
          <div className="data-category" key={index}>
            {categoryName}
          </div>
        ))}
      </div>

      <div className="cost-container">
        <div className="cost-title">Your Highest Cost Expense:</div>
        {/* The highest cost expense was: ${expenseWithHighestCost.cost} for{" "}
        {expenseWithHighestCost.description} */}
        <div className="cost-details">
          ${expenseWithHighestCost.cost} for{" "}
          {expenseWithHighestCost.description}
        </div>
      </div>

      <div className="cost-container">
        <div className="cost-title">Your Lowest Cost Expense:</div>
        <div className="cost-details">
          ${expenseWithLowestCost.cost} for {expenseWithLowestCost.description}
        </div>
      </div>
      <BarChart chartData={barData} />
    </>
  );
};

export default Insights;
