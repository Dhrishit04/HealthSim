import React from 'react';
import styles from './Dashboard.module.scss';
import DashboardWidget from './widgets/DashboardWidget';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <DashboardWidget title="Widget 1" />
      <DashboardWidget title="Widget 2" />
    </div>
  );
};

export default Dashboard;
