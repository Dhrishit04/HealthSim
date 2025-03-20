// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './layout.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.navList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
