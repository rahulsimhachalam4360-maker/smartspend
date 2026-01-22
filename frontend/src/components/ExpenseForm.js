import React, { useState } from "react";

function ExpenseForm({ onAdd }) {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense.title || !expense.amount || !expense.category) return;

    onAdd(expense);
    setExpense({ title: "", amount: "", category: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#f7f7f7",
        padding: "20px",
        borderRadius: "10px",
        width: "350px",
        margin: "auto",
      }}
    >
      <h2>Add Expense</h2>

      {/* Title */}
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={expense.title}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      {/* Amount */}
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={expense.amount}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      {/* Dropdown Category */}
      <select
        name="category"
        value={expense.category}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
        }}
      >
        <option value="">Select Category</option>
        <option value="grocery">🛒 Grocery</option>
        <option value="food">🍔 Food</option>
        <option value="travel">✈️ Travel</option>
        <option value="shopping">🛍️ Shopping</option>
        <option value="bills">💡 Bills</option>
        <option value="other">📦 Other</option>
      </select>
<input
  type="text"
  name="imageUrl"
  placeholder="Image URL (optional)"
  value={expense.imageUrl}
  onChange={handleChange}
  style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
/>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          background: "black",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
