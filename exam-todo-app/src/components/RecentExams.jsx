const RecentExams = () => {
  const exams = [
    { id: 1, name: "React Test" },
    { id: 2, name: "JavaScript Quiz" },
    { id: 3, name: "Node.js Assessment" },
  ];

  return (
    <section className="card">
      <h3>Recent Exams</h3>

      <ul>
        {exams.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </section>
  );
};

export default RecentExams;