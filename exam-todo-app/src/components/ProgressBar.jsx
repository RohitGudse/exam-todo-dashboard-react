// src/components/ProgressBar.jsx
export default function ProgressBar({ value }) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          background: "#ddd",
          borderRadius: "8px"
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "12px",
            background: "green",
            borderRadius: "8px"
          }}
        />
      </div>
      <p>{value}% Complete</p>
    </div>
  );
}