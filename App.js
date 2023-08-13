import ExpenseCategoryBox from './ExpenseCategoryBox';
import React from 'react';
import expenseCategories from './expenseCategories.json';

function App() {
    return (
        <div className="App">
            {expenseCategories.map(category => (
                <ExpenseCategoryBox
                    key={category.label}
                    label={category.label}
                    maxBudget={category.maxBudget}
                />
            ))}
        </div>
    );
}

export default App;

