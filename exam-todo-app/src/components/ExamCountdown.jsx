
export default function ExamCountdown({ examDate }) {
  const calculateDays = () => {
    const currentDate = new Date();
    const exam = new Date(examDate);

    currentDate.setHours(0, 0, 0, 0);
    exam.setHours(0, 0, 0, 0);

    const difference = exam.getTime() - currentDate.getTime();

    return Math.max(0, Math.ceil(difference / (1000 * 60 * 60 * 24)));
  };

  const remainingDays = calculateDays();

  return (
    <div className="card">
      <h3>Exam Countdown</h3>
      <p>
        {remainingDays > 0
          ? `${remainingDays} Days Remaining`
          : "Exam Day is Here!"}
      </p>
    </div>
  );
}
