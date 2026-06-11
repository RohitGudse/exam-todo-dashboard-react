// src/components/RecentActivity.jsx
export default function RecentActivity({ activities }) {
  return (
    <div className="card">
      <h3>Recent Activity</h3>
      <ul>
        {activities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}