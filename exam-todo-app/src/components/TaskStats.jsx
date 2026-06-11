// src/components/TaskStats.jsx
const TaskStats = ({ total, completed, pending }) => {
  return (
    <div className="card">
      <h3>Task Statistics</h3>
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {pending}</p>
    </div>
  );
};

export default TaskStats;