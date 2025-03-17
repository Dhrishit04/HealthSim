import React from 'react';
import styles from './widget.module.scss';

const DashboardWidget = ({ title, children }) => {
  return (
    <div className={styles.widget}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default DashboardWidget;
