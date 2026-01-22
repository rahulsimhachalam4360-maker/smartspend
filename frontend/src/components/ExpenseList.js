import React from "react";

function getCategoryIcon(category) {
  switch (category) {
    case "grocery":
      return "🛒";
    case "food":
      return "🍔";
    case "shopping":
      return "🛍️";
    case "travel":
      return "✈️";
    case "bills":
      return "💡";
    default:
      return "📦";
  }
}

function ExpenseList({ expenses, onDelete, onEdit }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "20px",
        width: "90%",
        margin: "40px auto",
      }}
    >
      {expenses.map((exp) => (
        <div
          key={exp.id}
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            transition: "0.3s",
          }}
        >
          {/* IMAGE */}
          <img
            src={exp.imageUrl || "https://via.placeholder.com/200"}
            alt={exp.title}
            style={{
              width: "100%",
              height: "170px",
              borderRadius: "12px",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />

          {/* TITLE + CATEGORY */}
          <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
            {getCategoryIcon(exp.category)} {exp.title}
          </h2>

          {/* CATEGORY LABEL */}
          <p style={{ color: "#555", margin: "6px 0" }}>
            Category: <b>{exp.category.toUpperCase()}</b>
          </p>

          {/* PRICE */}
          <p style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}>
            ₹ {exp.amount}
          </p>

          {/* RATING */}
          <p style={{ margin: "5px 0", color: "#ffa500" }}>⭐⭐⭐⭐☆ (4.0)</p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <button
              onClick={() => onEdit(exp)}
              style={{
                background: "#007bff",
                padding: "8px 15px",
                borderRadius: "6px",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(exp.id)}
              style={{
                background: "#ff3b30",
                padding: "8px 15px",
                borderRadius: "6px",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
