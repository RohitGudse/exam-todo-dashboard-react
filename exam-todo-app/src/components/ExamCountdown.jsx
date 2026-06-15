// src/components/ExamCountdown.jsx
import { useEffect, useState } from "react";

export default function ExamCountdown({ examDate }) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const target = new Date(examDate);
    const today = new Date();
    const diff = Math.ceil(
      (target - today) / (1000 * 60 * 60 * 24)
    );
    setDays(diff);
  }, [examDate]);

  return (
    <div className="card">
      <h3>Exam Countdown</h3>
      <p>{days} Days Remaining</p>
    </div>
  );
}

