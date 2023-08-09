import './ExpenseCategoryBox.css'; // Make sure to adjust the path to your CSS file

import React, { useState } from 'react';

function ExpenseCategoryBox({ label }) {
    const [progress, setProgress] = useState(0);

    // Calculate the progress bar color based on the progress value
    let progressBarColor = '#2ecc71';
    if (progress > 50) {
        progressBarColor = '#f39c12';
    }
    if (progress > 90) {
        progressBarColor = '#e74c3c';
    }

    const handleAddProgress = () => {
        if (progress < 100) {
            setProgress(prevProgress => prevProgress + 10);
        }
    };

    const message = progress >= 100 ? "YOU HAVE REACHED MAXIMUM AMOUNT OF BUDGET" : "";

    return (
        <div className="category-box" style={{ borderColor: progressBarColor }}>
            <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: progressBarColor }}></div>
            <div className="message">{message}</div>
            <div className="label">{label}</div>
            <button className="add-button" onClick={handleAddProgress}>ADD</button>
        </div>
    );
}

export default ExpenseCategoryBox;
