export function smartAI(message, expenses) {
  const msg = message.toLowerCase();

  // Quick calculations
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  const highest = expenses.length
    ? expenses.reduce((a, b) => (Number(a.amount) > Number(b.amount) ? a : b))
    : null;

  const lowest = expenses.length
    ? expenses.reduce((a, b) => (Number(a.amount) < Number(b.amount) ? a : b))
    : null;

  const categories = {};
  expenses.forEach((e) => {
    categories[e.category] = (categories[e.category] || 0) + Number(e.amount);
  });

  const mostSpentCategory =
    Object.keys(categories).length > 0
      ? Object.entries(categories).sort((a, b) => b[1] - a[1])[0]
      : null;

  const leastSpentCategory =
    Object.keys(categories).length > 0
      ? Object.entries(categories).sort((a, b) => a[1] - b[1])[0]
      : null;

  // --------------------------------------
  // 1. Greeting & Friendly Chat
  // --------------------------------------
  if (msg.includes("hi") || msg.includes("hello")) {
    return "Hey Rahul! 👋 How can I help you today?";
  }

  if (msg.includes("how are you")) {
    return "I'm doing great bro 😎 Ready to help you save more & spend smart!";
  }

  if (msg.includes("joke")) {
    return "😂 Why don’t programmers like nature? Too many bugs!";
  }

  if (msg.includes("tired")) {
    return "Take a small break bro 😌 You've been working hard. Hydrate yourself!";
  }

  if (msg.includes("motivate") || msg.includes("motivation")) {
    return "Bro, consistency is your advantage 💪. Small steps daily create massive changes.";
  }

  // --------------------------------------
  // 2. Expense Insights
  // --------------------------------------
  if (msg.includes("total")) {
    return `Your total spending is ₹${total}. Keep tracking, bro!`;
  }

  if (msg.includes("highest") || msg.includes("biggest") || msg.includes("max")) {
    if (!highest) return "You don't have any expenses yet!";
    return `Your highest expense is **${highest.title}** costing ₹${highest.amount} in the **${highest.category}** category.`;
  }

  if (msg.includes("lowest") || msg.includes("least") || msg.includes("minimum")) {
    if (!lowest) return "You don't have any expenses yet!";
    return `Your lowest expense is **${lowest.title}** costing just ₹${lowest.amount} — nice saving!`;
  }

  if (
    msg.includes("most spent") ||
    msg.includes("high category") ||
    msg.includes("spend most")
  ) {
    if (!mostSpentCategory) return "Add some expenses first bro!";
    return `You spent the most on **${mostSpentCategory[0]}** → ₹${mostSpentCategory[1]}.`;
  }

  if (
    msg.includes("least spent") ||
    msg.includes("low category") ||
    msg.includes("minimum category")
  ) {
    if (!leastSpentCategory) return "Add expenses so I can analyze them!";
    return `Your least spent category is **${leastSpentCategory[0]}** → ₹${leastSpentCategory[1]}. Keep it up bro!`;
  }

  // --------------------------------------
  // 3. Category specific questions
  // --------------------------------------
  if (msg.includes("food") || msg.includes("grocery") || msg.includes("travel")) {
    const cat = msg.includes("food")
      ? "food"
      : msg.includes("grocery")
      ? "grocery"
      : "travel";

    const amount = categories[cat] || 0;

    return `You spent ₹${amount} on **${cat}**. Keep tracking this category.`;
  }

  // --------------------------------------
  // 4. Saving Tips
  // --------------------------------------
  if (msg.includes("save money") || msg.includes("tips")) {
    return (
      "Here are some smart ways to save money 💡:\n" +
      "• Reduce online food orders 🍔\n" +
      "• Set weekly budgets\n" +
      "• Track categories daily\n" +
      "• Buy groceries in bulk 🛒\n" +
      "• Avoid impulse shopping\n\n" +
      "Ask: *“Give personalized tips based on my expenses”*"
    );
  }

  if (msg.includes("personalized") || msg.includes("based on my expenses")) {
    if (!mostSpentCategory) return "Add some expenses so I can analyze them!";
    return (
      `Your highest spending category is **${mostSpentCategory[0]}**.\n\n` +
      "Personalized Tips:\n" +
      "• Try to reduce purchases in this category\n" +
      "• Compare prices before buying\n" +
      "• Set a weekly spending limit\n" +
      "• Track this category more actively\n"
    );
  }

  // --------------------------------------
  // 5. Predictions
  // --------------------------------------
  if (msg.includes("predict") || msg.includes("future")) {
    const estimate = total * 1.1;
    return `Based on your trend, next month you may spend around **₹${estimate.toFixed(
      0
    )}**. Track high categories to reduce this.`;
  }

  // --------------------------------------
  // 6. Fallback smart reply
  // --------------------------------------
  return (
    "I'm here to help bro 😎. Try asking:\n\n" +
    "• Total spending\n" +
    "• Highest / Lowest expense\n" +
    "• Most/Least spent category\n" +
    "• Food/Grocery/Travel spending\n" +
    "• Save money tips\n" +
    "• Personalized financial advice\n" +
    "• Predictions for next month\n" +
    "• Or chat with me casually 😊"
  );
}
