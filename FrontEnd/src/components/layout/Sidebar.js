import React from 'react';
import styles from './layout.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>History</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
