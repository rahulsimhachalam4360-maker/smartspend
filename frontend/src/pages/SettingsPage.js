import React from "react";
import "./SettingsPage.css";

export default function SettingsPage() {
  return (
    <div className="settings-page-wrapper">
      <div className="page-container">

        <h1 className="page-title">Settings</h1>

        {/* PROFILE CARD */}
        <div className="glass-card">
          <h2>👤 Profile</h2>
          <p>
            Name: <strong>Rahul Simhachalam</strong>
          </p>
          <p>Email: rahul@example.com</p>
          <p>Role: Full Stack Developer</p>
        </div>

        {/* INFO NOTE */}
        <div className="glass-card">
          <h2>ℹ️ App Info</h2>
          <p>SmartSpend v1.0</p>
          <p>Expense Tracking & Analytics Application</p>
        </div>

      </div>
    </div>
  );
}
