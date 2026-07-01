// src/components/ProgressBar.jsx

import React from "react";

const ProgressBar = ({ value = 0, title = "Task Progress" }) => {
  // Ensure value stays between 0 and 100
  const progress = Math.min(Math.max(value, 0), 100);

  // Return progress color
  const getProgressColor = () => {
    if (progress === 100) return "#28a745"; // Green
    if (progress >= 75) return "#4CAF50"; // Light Green
    if (progress >= 50) return "#FFC107"; // Yellow
    if (progress >= 25) return "#FF9800"; // Orange
    return "#F44336"; // Red
  };

  // Return progress message
  const getProgressMessage = () => {
    if (progress === 100) return "🎉 Excellent! All tasks completed.";
    if (progress >= 75) return "🔥 Great job! Almost finished.";
    if (progress >= 50) return "💪 Keep going!";
    if (progress >= 25) return "🚀 Good start!";
    return "📌 Let's begin!";
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            margin: 0,
            color: "#333",
          }}
        >
          {title}
        </h3>

        <span
          style={{
            fontWeight: "bold",
            color: getProgressColor(),
            fontSize: "18px",
          }}
        >
          {progress}%
        </span>
      </div>

      {/* Progress Track */}
      <div
        style={{
          width: "100%",
          height: "18px",
          backgroundColor: "#E0E0E0",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        {/* Progress Fill */}
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: getProgressColor(),
            transition: "width 0.6s ease",
            borderRadius: "30px",
          }}
        />
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#555",
          fontSize: "15px",
        }}
      >
        <span>{getProgressMessage()}</span>

        <span>
          {progress === 100 ? "Completed ✅" : `${100 - progress}% Remaining`}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;