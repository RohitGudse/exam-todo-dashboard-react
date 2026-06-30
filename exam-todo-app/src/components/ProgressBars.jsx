import React from "react";

const ProgressBar = ({ tasks }) => {
  const total = tasks.length;

  const completed = tasks.filter(task => task.completed).length;

  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Progress {percentage}%</h3>

      <div
        style={{
          width: "100%",
          height: "18px",
          background: "#ddd",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            background: "#4CAF50",
            borderRadius: "10px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;