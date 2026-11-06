
import React from "react";

const QuickActions = () => {
  const actions = ["Add Task", "Create Exam"];

  return (
    <div className="card">
      <h3>Quick Actions</h3>

      {actions.map((action, index) => (
        <button key={index} type="button">
          {action}
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
