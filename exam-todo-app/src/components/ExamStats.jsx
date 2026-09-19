import React from "react";

const examStats = [
  { label: "Total Exams", value: 25 },
  { label: "Completed", value: 18 },
];

const ExamStats = () => {
  return (
    <section className="card">
      <h3>Exam Statistics</h3>

      <div className="exam-stats">
        {examStats.map(({ label, value }) => (
          <div className="stat-item" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExamStats;