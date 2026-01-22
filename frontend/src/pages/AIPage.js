import React from "react";
import AIAssistant from "../components/AIAssistant";

function AIPage({ expenses }) {
  return (
    <div style={{ padding: "20px" }}>
      <AIAssistant expenses={expenses} />
    </div>
  );
}

export default AIPage;
