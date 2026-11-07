
import React from "react";

const quickActions = [
  {
    id: 1,
    label: "Add Task",
  },
  {
    id: 2,
    label: "Create Exam",
  },
];

function QuickActions() {
  const renderActions = () => {
    return quickActions.map(({ id, label }) => (
      <button key={id} type="button" className="quick-action-btn">
        {label}
      </button>
    ));
  };

  return (
    <section className="card">
      <h3>Quick Actions</h3>
      <div className="quick-actions-list">
        {renderActions()}
      </div>
    </section>
  );
}

export default QuickActions;
