import React, { useState } from "react";

function EditExpenseModal({ expense, onClose, onSave }) {
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);

  const handleSave = () => {
    onSave({ title, amount, category });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h3>Edit Expense</h3>

        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input value={category} onChange={(e) => setCategory(e.target.value)} />

        <div className="modal-buttons">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="close-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditExpenseModal;
