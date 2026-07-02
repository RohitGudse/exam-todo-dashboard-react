// src/components/DarkModeToggle.jsx

import React, { useState, useEffect } from "react";

export default function DarkModeToggle() {

  // ----------------------------------------
  // State
  // ----------------------------------------

  const [isDarkMode, setIsDarkMode] = useState(false);

  // ----------------------------------------
  // Apply theme whenever state changes
  // ----------------------------------------

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  // ----------------------------------------
  // Toggle Theme
  // ----------------------------------------

  const handleThemeToggle = () => {
    setIsDarkMode((previousTheme) => !previousTheme);
  };

  // ----------------------------------------
  // Get Theme Label
  // ----------------------------------------

  const getThemeName = () => {
    return isDarkMode ? "Dark Mode" : "Light Mode";
  };

  // ----------------------------------------
  // Get Button Text
  // ----------------------------------------

  const getButtonText = () => {
    return isDarkMode
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
  };

  // ----------------------------------------
  // Get Icon
  // ----------------------------------------

  const getThemeIcon = () => {
    return isDarkMode ? "🌙" : "☀️";
  };

  // ----------------------------------------
  // Component UI
  // ----------------------------------------

  return (
    <div className="theme-container">

      <div className="theme-header">
        <h2>Theme Settings</h2>

        <p>
          Use the button below to switch between
          Light Mode and Dark Mode.
        </p>
      </div>

      <div className="theme-content">

        <h3>
          Current Theme : {getThemeName()}
        </h3>

        <button
          type="button"
          className={`theme-button ${
            isDarkMode ? "dark-button" : "light-button"
          }`}
          onClick={handleThemeToggle}
          aria-label="Toggle Theme"
        >
          <span className="theme-icon">
            {getThemeIcon()}
          </span>

          <span className="button-text">
            {getButtonText()}
          </span>
        </button>

      </div>

      <div className="theme-information">

        <h4>Theme Status</h4>

        <p>
          {isDarkMode
            ? "Dark theme is currently enabled."
            : "Light theme is currently enabled."}
        </p>

        <ul>
          <li>Responsive Theme Switching</li>
          <li>React useState Hook</li>
          <li>React useEffect Hook</li>
          <li>Accessible Button Design</li>
          <li>Reusable Component Structure</li>
        </ul>

      </div>

      <div className="theme-footer">

        <hr />

        <small>
          Theme Preference: {getThemeName()}
        </small>

      </div>

    </div>
  );
}