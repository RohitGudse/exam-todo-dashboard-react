import React from "react";

const EmptyState = ({
  title = "No Tasks Available",
  message = "You don't have any tasks right now. Create a new task to get started.",
  buttonText = "Create New Task",
  onCreateTask,
}) => {
  const handleCreateTask = () => {
    if (typeof onCreateTask === "function") {
      onCreateTask();
    }
  };

  return (
    <section className="empty-state" aria-label="Empty task state">
      <div className="empty-state__container">

        {/* Empty State Icon */}
        <div className="empty-state__icon">
          <span role="img" aria-label="Task">
            📋
          </span>
        </div>

        {/* Heading */}
        <div className="empty-state__content">
          <h2 className="empty-state__title">
            {title}
          </h2>

          {/* Description */}
          <p className="empty-state__message">
            {message}
          </p>

          {/* Action Button */}
          <button
            type="button"
            className="empty-state__button"
            onClick={handleCreateTask}
          >
            <span className="empty-state__button-icon">+</span>
            {buttonText}
          </button>
        </div>

      </div>
    </section>
  );
};

export default EmptyState;