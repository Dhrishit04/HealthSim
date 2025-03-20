// Header.js
import React from 'react';
import styles from './layout.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>HealthSim Dashboard</h1>
      <div>
        {/* Placeholder for user profile or notifications icon */}
        <span style={{ marginRight: '1rem' }}>🔔</span>
        <span style={{ fontWeight: 'bold' }}>Hello, User</span>
      </div>
    </header>
  );
};

export default Header;
