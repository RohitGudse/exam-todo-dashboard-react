// src/components/RecentActivity.jsx

import React from "react";

export default function RecentActivity(props) {
  // Extract activities from props
  const { activities } = props;

  // Function to display message when no activities exist
  const renderEmptyState = () => {
    return (
      <div className="empty-activity">
        <p>No recent activities found.</p>
      </div>
    );
  };

  // Function to render activity list
  const renderActivityList = () => {
    return (
      <ul className="activity-list">
        {activities.map((activity, index) => {
          return (
            <li
              key={index}
              className="activity-item"
            >
              <div className="activity-number">
                {index + 1}
              </div>

              <div className="activity-content">
                <span>{activity}</span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="card recent-activity-card">
      <div className="card-header">
        <h3 className="card-title">
          Recent Activity
        </h3>
      </div>

      <div className="card-body">
        {Array.isArray(activities) && activities.length > 0
          ? renderActivityList()
          : renderEmptyState()}
      </div>

      <div className="card-footer">
        <small>
          Total Activities:{" "}
          {Array.isArray(activities)
            ? activities.length
            : 0}
        </small>
      </div>
    </div>
  );
}