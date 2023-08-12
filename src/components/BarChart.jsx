import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ barData }) => {
  return (
    <>
      <div className="graph-container">
        <Bar data={barData} />
      </div>
      <div>Testing</div>
    </>
  );
};

export default BarChart;
