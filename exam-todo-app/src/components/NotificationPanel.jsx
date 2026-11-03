
import React, { useState } from "react";
import "./NotificationPanel.css";

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Your profile was updated successfully.", read: false },
    { id: 2, message: "You have a new message.", read: false },
    { id: 3, message: "Your order has been confirmed.", read: false },
  ]);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const markAsRead = (id) => {
    setNotifications((previous) =>
      previous.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((previous) =>
      previous.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  return (
    <section className="notification-panel">
      <div className="notification-header">
        <h2>Notifications</h2>
        <span className="notification-count">{unreadCount}</span>
      </div>

      <div className="notification-summary">
        You have {unreadCount} unread notifications.
      </div>

      {notifications.length > 0 ? (
        <ul className="notification-list">
          {notifications.map((item) => (
            <li
              key={item.id}
              className={item.read ? "read" : "unread"}
            >
              <span>{item.message}</span>

              {!item.read && (
                <button onClick={() => markAsRead(item.id)}>
                  Mark as read
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No notifications available.</p>
      )}

      {unreadCount > 0 && (
        <button
          className="mark-all-button"
          onClick={markAllAsRead}
        >
          Mark all as read
        </button>
      )}
    </section>
  );
};

export default NotificationPanel;
