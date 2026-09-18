import React from "react";

const NotificationPanel = () => {
  const notificationCount = 3;

  return (
    <section className="card" aria-label="Notifications">
      <div className="card-header">
        <h3>Notifications</h3>
        <span className="notification-badge">
          {notificationCount}
        </span>
      </div>

      <p>
        You have {notificationCount} new notifications.
      </p>
    </section>
  );
};

export default NotificationPanel;