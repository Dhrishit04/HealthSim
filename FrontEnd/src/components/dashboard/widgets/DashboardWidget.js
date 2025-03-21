import React, { useState } from 'react';
import styles from './widget.module.scss';




const DashboardWidget = () => {
  // Local state to track theme: "light" or "dark"
  const [theme, setTheme] = useState('light');

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    // Insert global or context-based theme toggling logic here if desired
  };

  return (
    <div
      className={`${styles.widgetContainer} ${
        theme === 'dark' ? styles.darkTheme : ''
      }`}
    >
      <h2 className={styles.widgetTitle}>Widgets</h2>
      <p className={styles.widgetDescription}>
        Manage and view your additional tools, settings, and data insights here.
      </p>

      {/* Theme Toggle Button */}
      <button onClick={toggleTheme} className={styles.themeButton}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>

      {/* Example Widget #1: Medication Reminder */}
      <div className={styles.medicationReminderWidget}>
        <h3>Medication Reminder</h3>
        <p>Stay on top of your medication schedule with timely reminders.</p>
      </div>

      {/* Example Widget #2: Steps Tracker */}
      <div className={styles.stepsTrackerWidget}>
        <h3>Steps Tracker</h3>
        <p>Track your daily step count and activity level.</p>
      </div>
    </div>
  );
};

export default DashboardWidget;
