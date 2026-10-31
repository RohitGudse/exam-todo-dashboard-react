
import React from "react";

const examData = [
  { id: 1, subject: "Mathematics", date: "10 Apr", status: "Upcoming" },
  { id: 2, subject: "Science", date: "12 Apr", status: "Upcoming" },
  { id: 3, subject: "English", date: "15 Apr", status: "Upcoming" },
  { id: 4, subject: "Computer Science", date: "18 Apr", status: "Upcoming" },
];
export default function ExamTable() {
  return (
    <div className="exam-container">
      <h2 className="exam-title">Upcoming Exam Schedule</h2>

      <div className="table-wrapper">
        <table className="exam-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Subject</th>
              <th>Exam Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {examData.map((exam) => (
              <tr key={exam.id}>
                <td>{exam.id}</td>
                <td>{exam.subject}</td>
                <td>{exam.date}</td>
                <td>
                  <span className="exam-status">
                    {exam.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}