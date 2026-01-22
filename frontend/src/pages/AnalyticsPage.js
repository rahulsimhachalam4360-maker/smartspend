import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

import "./AnalyticsPage.css";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

function AnalyticsPage() {
  // Dummy data (later connect to backend)
  const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Spend",
        data: [320, 450, 380, 500, 610, 430],
        borderColor: "#00c8ff",
        backgroundColor: "rgba(0,200,255,0.2)",
        tension: 0.4,
      },
    ],
  };

  const categoryData = {
    labels: ["Grocery", "Food", "Shopping", "Travel", "Bills"],
    datasets: [
      {
        label: "Category Spend",
        data: [620, 430, 780, 380, 220],
        backgroundColor: [
          "#00c8ff",
          "#00aaff",
          "#0090ff",
          "#0077ff",
          "#0055ff",
        ],
      },
    ],
  };

  return (
    <div className="analytics-container">
      <h1 className="analytics-title">Expense Analytics</h1>

      {/* LINE CHART */}
      <div className="chart-card">
        <h2>Monthly Spending Trend</h2>
        <Line data={monthlyData} height={80} />
      </div>

      {/* BAR CHART */}
      <div className="chart-card">
        <h2>Category Comparison</h2>
        <Bar data={categoryData} height={80} />
      </div>

      {/* INSIGHTS BOX */}
      <div className="insights-card">
        <h2>Insights</h2>
        <ul>
          <li>📈 Your spending increased by 12% in the last month.</li>
          <li>🛍 Shopping is your highest expense category.</li>
          <li>🍔 Food expenses dropped by 8% this month.</li>
          <li>✈ Travel spending is stable.</li>
        </ul>
      </div>
    </div>
  );
}

export default AnalyticsPage;
