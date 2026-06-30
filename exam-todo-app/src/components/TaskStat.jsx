import React from "react";

const TaskStats = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          padding: "20px",
          background: "#4CAF50",
          color: "#fff",
          borderRadius: "10px",
          flex: 1,
        }}
      >
        <h3>Total</h3>
        <h2>{total}</h2>
      </div>

      <div
        style={{
          padding: "20px",
          background: "#2196F3",
          color: "#fff",
          borderRadius: "10px",
          flex: 1,
        }}
      >
        <h3>Completed</h3>
        <h2>{completed}</h2>
      </div>

      <div
        style={{
          padding: "20px",
          background: "#f44336",
          color: "#fff",
          borderRadius: "10px",
          flex: 1,
        }}
      >
        <h3>Pending</h3>
        <h2>{pending}</h2>
      </div>
    </div>
  );
};

export default TaskStats;