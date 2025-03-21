import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaHeartbeat,
  FaExclamationTriangle,
  FaHistory,
  FaCog,
  FaPlusCircle,
  FaThLarge
} from 'react-icons/fa';
import './DashboardPage.scss';

const DashboardPage = () => {
  // State for toggling the main dropdown menu
  const [menuOpen, setMenuOpen] = useState(false);

  // State for toggling the "Widgets" submenu
  const [widgetMenuOpen, setWidgetMenuOpen] = useState(false);

  // Track theme: "light" or "dark"
  const [theme, setTheme] = useState('light');

  // Toggle the main menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // If closing the main menu, also close the widget submenu
    if (menuOpen) setWidgetMenuOpen(false);
  };

  // Toggle the Widgets submenu (on click)
  const toggleWidgetsSubmenu = (e) => {
    e.stopPropagation(); // Stop click from closing the main menu
    setWidgetMenuOpen(!widgetMenuOpen);
  };

  // Theme toggle (light ↔ dark)
  const handleThemeChange = (e) => {
    e.stopPropagation(); // Prevent submenu close
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Close the menu if user clicks outside the menu area
  const handleOutsideClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setWidgetMenuOpen(false);
    }
  };

  return (
    <div
      className={`dashboardContainer ${theme === 'dark' ? 'darkTheme' : ''}`}
      onClick={handleOutsideClick}
    >
      {/* Stop clicks in the header from propagating and closing the menu */}
      <header className="taskbar" onClick={(e) => e.stopPropagation()}>
        <h2 className="taskbarTitle">IoT Dashboard</h2>
        <div className="menuIcon" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Main dropdown menu */}
        {menuOpen && (
          <nav className="dropdownMenu">
            <Link to="/history" className="dropdownItem">
              <FaHistory className="dropdownIcon" />
              History
            </Link>
            <Link to="/settings" className="dropdownItem">
              <FaCog className="dropdownIcon" />
              Settings
            </Link>

            {/* Widgets (submenu) */}
            <div
              className="dropdownItem submenuWrapper"
              onClick={toggleWidgetsSubmenu}
            >
              <FaThLarge className="dropdownIcon" />
              <span>Widgets</span>

              {widgetMenuOpen && (
                <div className="submenu" onClick={(e) => e.stopPropagation()}>
                  <button onClick={handleThemeChange}>Theme Change</button>
                </div>
              )}
            </div>

            <Link to="/additional-data" className="dropdownItem">
              <FaPlusCircle className="dropdownIcon" />
              Additional Data
            </Link>
          </nav>
        )}
      </header>

      {/* Dynamic animated background (shown in light mode by default) */}
      {theme === 'light' && <div className="dynamicBackground"></div>}

      {/* Main dashboard content */}
      <section className="dashboardContent" onClick={(e) => e.stopPropagation()}>
        <div className="card">
          <FaHeartbeat className="cardIcon" />
          <h2>Vital Signs</h2>
          <p>Monitor your real-time heart rate, blood pressure, etc.</p>
        </div>
        <div className="card">
          <FaExclamationTriangle className="cardIcon" />
          <h2>Risk Score</h2>
          <p>Stay updated on your health risk assessment at a glance.</p>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
