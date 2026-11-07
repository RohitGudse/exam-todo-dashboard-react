
const SubjectCard = (props) => {
  const { name, progress } = props;

  return (
    <div className="subject-card">
      <div className="subject-card-header">
        <h3 className="subject-name">{name}</h3>
        <span className="subject-percentage">{progress}%</span>
      </div>

      <p className="subject-progress">
        Your learning progress
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SubjectCard;
