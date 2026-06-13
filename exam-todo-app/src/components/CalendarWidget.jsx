const CalendarWidget = () => {
  return (
    <div className="card">
      <h3>Calendar</h3>
      <p>{new Date().toDateString()}</p>
    </div>
  );
};

export default CalendarWidget;