// Header.js
import React from 'react';
import styles from './layout.module.scss';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };
  return (
    <header className={styles.header}>
      <h1>HealthSim Dashboard</h1>
      <div>
        {/* Placeholder for user profile or notifications icon */}
        <button onClick={toggleTheme}>Switch to {isDark ? 'Light' : 'Dark'} Theme</button>
        <span style={{ marginRight: '1rem' }}>🔔</span>
        <span style={{ fontWeight: 'bold' }}>Hello, User</span>
      </div>
    </header>
  );
};

export default Header;
