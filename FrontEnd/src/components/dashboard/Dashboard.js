// Dashboard.js
import React from 'react';
import styles from './Dashboard.module.scss';
import DashboardWidget from './widgets/DashboardWidget';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.widgetGrid}>
        <DashboardWidget title="Vitals Overview">
          <p>Track your heart rate, blood pressure, and more in real time.</p>
        </DashboardWidget>
        <DashboardWidget title="Risk Scores">
          <p>View your latest risk assessments and potential alerts.</p>
        </DashboardWidget>
        <DashboardWidget title="Activity Logs">
          <p>Analyze your daily steps, workout sessions, and sleep patterns.</p>
        </DashboardWidget>
      </div>
    </div>
  );
};

export default Dashboard;
