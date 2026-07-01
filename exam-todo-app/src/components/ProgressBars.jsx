import React from "react";

const ProgressBar = ({ tasks = [] }) => {
  // Total number of tasks
  const totalTasks = tasks.length;

  // Number of completed tasks
  const completedTasks = tasks.filter(
    (task) => task.completed === true
  ).length;

  // Number of pending tasks
  const pendingTasks = totalTasks - completedTasks;

  // Calculate completion percentage
  const progressPercentage =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  // Dynamic progress bar color
  const getProgressColor = () => {
    if (progressPercentage === 100) return "#28a745";
    if (progressPercentage >= 70) return "#4CAF50";
    if (progressPercentage >= 40) return "#ff9800";
    return "#f44336";
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        marginBottom: "25px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#333",
          }}
        >
          📊 Task Progress
        </h2>

        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: getProgressColor(),
          }}
        >
          {progressPercentage}%
        </span>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#e0e0e0",
          borderRadius: "50px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progressPercentage}%`,
            height: "100%",
            backgroundColor: getProgressColor(),
            transition: "width 0.5s ease-in-out",
            borderRadius: "50px",
          }}
        ></div>
      </div>

      {/* Statistics */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h4 style={{ margin: "5px 0" }}>📋 Total Tasks</h4>
          <p style={{ margin: 0 }}>{totalTasks}</p>
        </div>

        <div>
          <h4 style={{ margin: "5px 0", color: "green" }}>
            ✅ Completed
          </h4>
          <p style={{ margin: 0 }}>{completedTasks}</p>
        </div>

        <div>
          <h4 style={{ margin: "5px 0", color: "#f44336" }}>
            ⏳ Pending
          </h4>
          <p style={{ margin: 0 }}>{pendingTasks}</p>
        </div>
      </div>

      {/* Status Message */}
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          fontWeight: "bold",
          color: getProgressColor(),
        }}
      >
        {progressPercentage === 100
          ? "🎉 Congratulations! All tasks are completed."
          : `You have completed ${completedTasks} out of ${totalTasks} tasks.`}
      </div>
    </div>
  );
};

export default ProgressBar;