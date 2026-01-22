import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">

      {/* LEFT SIDEBAR */}
      <aside className="sidebar">
        <h2 className="sidebar-logo">SmartSpend</h2>

        <nav className="sidebar-nav">

          <Link to="/" className="nav-item">🏠 Dashboard</Link>
          <Link to="/expenses" className="nav-item">💰 Expenses</Link>
          <Link to="/analytics" className="nav-item">📊 Analytics</Link>
          <Link to="/settings" className="nav-item">⚙️ Settings</Link>
          <Link to="/assistant" className="nav-item">🤖 AI Assistant</Link>

        </nav>

        {/* THEME TOGGLE BOX (optional) */}
        <div className="theme-box">
          🌙 Dark Mode
        </div>
      </aside>

      {/* PAGE CONTENT */}
      <main className="content-area">
        <Outlet />
      </main>

    </div>
  );
}
