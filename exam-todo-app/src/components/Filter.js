import React, { useState } from "react";
import "./Filter.css";

export default function Filter({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
}) {
  const handleReset = () => {
    setSearch("");
    setStatus("All");
    setPriority("All");
  };

  return (
    <div className="filter-container">

      <div className="filter-header">
        <h2>Task Filters</h2>
        <p>Search and filter your tasks easily.</p>
      </div>

      <div className="filter-grid">

        {/* Search */}
        <div className="filter-group">
          <label>Search Task</label>
          <input
            type="text"
            placeholder="Search by task title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Status */}
        <div className="filter-group">
          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All Tasks</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Priority */}
        <div className="filter-group">
          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="All">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

      </div>

      <div className="filter-actions">
        <button
          className="reset-btn"
          onClick={handleReset}
        >
          Reset Filters
        </button>
      </div>

    </div>
  );
}