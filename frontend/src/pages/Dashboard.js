import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { getExpenses } from "../api";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [monthlyBudget] = useState(500); // you can change this
  const [remaining, setRemaining] = useState(0);

  // Load expenses from backend
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getExpenses();
    setExpenses(data);

    // CALCULATE TOTAL SPENDING
    const t = data.reduce((sum, e) => sum + Number(e.amount), 0);
    setTotal(t);

    // CALCULATE REMAINING
    setRemaining(monthlyBudget - t);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="stat-card">
        <div className="stat-title">Total Spend</div>
        <div className="stat-value">${total}</div>
      </div>

      <div className="stat-card">
        <div className="stat-title">Monthly Budget</div>
        <div className="stat-value">${monthlyBudget}</div>
      </div>

      <div className="stat-card">
        <div className="stat-title">Remaining</div>
        <div className="stat-value">${remaining}</div>
      </div>

      <p className="dashboard-welcome">
        Welcome to SmartSpend Dashboard!
      </p>
    </div>
  );
};

export default Dashboard;
