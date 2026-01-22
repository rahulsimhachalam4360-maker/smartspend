import React, { useEffect, useState } from "react";
import "./ExpensesPage.css";
import { getExpenses, addExpense, deleteExpense, updateExpense } from "../api";
import EditExpenseModal from "../components/EditExpenseModal";

function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [editing, setEditing] = useState(null);

  // LOAD DATA
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  // ADD EXPENSE
  const handleAdd = async () => {
    const title = prompt("Expense Title:");
    const amount = prompt("Amount:");
    const category = prompt("Category:");

    if (!title || !amount || !category) return;

    await addExpense({ title, amount, category });
    loadData();
  };

  // DELETE EXPENSE
  const handleDelete = async (id) => {
    await deleteExpense(id);
    loadData();
  };

  // SAVE EDIT
  const handleEditSave = async (updated) => {
    await updateExpense(editing.id, updated);
    setEditing(null);
    loadData();
  };

  // FILTER ITEMS
  const filteredExpenses = expenses.filter((exp) => {
    const matchesSearch = exp.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "" || exp.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="expense-page">

      {/* TITLE */}
      <h1 className="page-title">Manage Expenses</h1>

      {/* SEARCH + FILTER + ADD BUTTON */}
      <div className="controls">
        <input
          placeholder="🔍 Search expenses..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="grocery">🛒 Grocery</option>
          <option value="food">🍔 Food</option>
          <option value="shopping">🛍 Shopping</option>
          <option value="bills">💡 Bills</option>
          <option value="travel">✈ Travel</option>
          <option value="other">📦 Other</option>
        </select>

        <button className="add-btn" onClick={handleAdd}>+ Add Expense</button>
      </div>

      {/* EDIT MODAL */}
      {editing && (
        <EditExpenseModal
          expense={editing}
          onClose={() => setEditing(null)}
          onSave={handleEditSave}
        />
      )}

      {/* LIST */}
      <div className="expenses-grid">
        {filteredExpenses.map((exp) => (
          <div key={exp.id} className="expense-card">

            <div className="exp-header">
              <span className="exp-title">{exp.title}</span>
              <span className="exp-amount">${exp.amount}</span>
            </div>

            <div className="exp-footer">
              <span className="exp-category">📌 {exp.category}</span>

              <div className="actions">
                <button className="edit-btn" onClick={() => setEditing(exp)}>
                  Edit
                </button>
                <button className="del-btn" onClick={() => handleDelete(exp.id)}>
                  Delete
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpensesPage;
