
import React from "react";

const UpcomingTasks = () => {
  const tasks = [
    "Complete React Project",
    "Prepare for Exam"
  ];

  return (
    <section className="card">
      <h3>Upcoming Tasks</h3>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingTasks;
