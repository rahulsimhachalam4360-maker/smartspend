import React, { useState } from "react";
import "./AIAssistant.css";

function AIAssistant({ expenses }) {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I am your SmartSpend AI assistant. How can I help you?" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    // Generate AI-like response
    const aiResponse = generateAIResponse(input, expenses);

    setTimeout(() => {
      setMessages([...newMessages, { sender: "ai", text: aiResponse }]);
    }, 700);

    setInput("");
  };

  return (
    <div className="ai-container">
      <h2 className="ai-title">💬 SmartSpend AI Assistant</h2>

      <div className="ai-chatbox">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`ai-message ${msg.sender === "user" ? "user" : "ai"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="ai-input-area">
        <input
          className="ai-input"
          placeholder="Ask anything about your expenses..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="ai-send" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

// AI Logic
function generateAIResponse(question, expenses) {
  if (!expenses || expenses.length === 0)
    return "You have no expenses added yet.";

  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const topCategory = [...expenses].sort(
    (a, b) => Number(b.amount) - Number(a.amount)
  )[0];

  if (question.includes("total"))
    return `Your total spending so far is ₹${total}.`;

  if (question.includes("highest") || question.includes("biggest"))
    return `Your highest expense is in "${topCategory.category}" — ₹${topCategory.amount}.`;

  if (question.includes("save") || question.includes("saving"))
    return `Based on your spending trend, reducing your "${topCategory.category}" expenses can help you save around ₹${(
      total * 0.15
    ).toFixed(0)} per month.`;

  return "Here’s a helpful tip: Track your top 3 categories to improve savings! Ask me about totals, highest expense, or savings plan.";
}

export default AIAssistant;
