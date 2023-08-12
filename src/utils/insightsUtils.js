export const findHighestCostExpense = (expenses) => {
  return expenses.reduce((maxExpense, currentExpense) => {
    if (currentExpense.cost > maxExpense.cost) {
      return currentExpense;
    }
    return maxExpense;
  }, expenses[0] || {});
};

export const findLowestCostExpense = (expenses) => {
  return expenses.reduce((minExpense, currentExpense) => {
    if (currentExpense.cost < minExpense.cost) {
      return currentExpense;
    }
    return minExpense;
  }, expenses[0] || {});
};
