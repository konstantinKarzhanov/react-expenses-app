import ExpenseCategoryBox from './ExpenseCategoryBox';
import React from 'react';

function App() {
    return (
        <div className="App">
            <ExpenseCategoryBox label="Groceries" />
            <ExpenseCategoryBox label="Dining" />
            {/* Add more category boxes */}
        </div>
    );
}

export default App;
