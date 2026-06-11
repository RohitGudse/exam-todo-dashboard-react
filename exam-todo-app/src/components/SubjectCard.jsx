// src/components/SubjectCard.jsx
export default function SubjectCard({ name, progress }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Progress: {progress}%</p>
    </div>
  );
}