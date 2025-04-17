import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import DashboardWidget from '../components/dashboard/widgets/DashboardWidget';
import {
  FaBars,
  FaHeartbeat,
  FaExclamationTriangle,
  FaHistory,
  FaCog,
  FaPlusCircle,
  FaThLarge
} from 'react-icons/fa';
import { fetchVitalSigns, fetchRiskData } from '../api/endpoints';
import './DashboardPage.scss';

const DashboardPage = () => {
  // State for toggling the main dropdown menu
  const [menuOpen, setMenuOpen] = useState(false);
  // State for toggling the "Widgets" submenu
  const [widgetMenuOpen, setWidgetMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // States for backend data
  const [vitalData, setVitalData] = useState(null);
  const [riskData, setRiskData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Toggle the main menu when the hamburger icon is clicked
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) {
      setWidgetMenuOpen(false);
    }
  };

  // Toggle the Widgets submenu when "Widgets" is clicked
  const toggleWidgetsSubmenu = (e) => {
    e.stopPropagation();
    setWidgetMenuOpen((prev) => !prev);
  };

  // Change the theme state (for both the parent container and DashboardWidget)
  const handleParentThemeChange = (e) => {
    e.stopPropagation();
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Fetch backend data on component mount
  useEffect(() => {
    Promise.all([fetchVitalSigns(), fetchRiskData()])
      .then(([vitalResponse, riskResponse]) => {
        setVitalData(vitalResponse.data);
        setRiskData(riskResponse.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={`dashboardContainer ${theme === 'dark' ? 'darkTheme' : ''}`}>
      <header className="taskbar">
        <h2 className="taskbarTitle">IoT Dashboard</h2>
        <div className="menuIcon" onClick={toggleMenu}>
          <FaBars />
        </div>
        {/* Main Dropdown Menu */}
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
            {/* Widgets submenu */}
            <div className="dropdownItem submenuWrapper" onClick={toggleWidgetsSubmenu}>
              <FaThLarge className="dropdownIcon" />
              <span>Widgets</span>
              {widgetMenuOpen && (
                <div className="submenu" onClick={(e) => e.stopPropagation()}>
                  <DashboardWidget />
                  <button onClick={handleParentThemeChange}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                  </button>
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
      {/* Show the dynamic background only in light theme */}
      {theme === 'light' && <div className="dynamicBackground"></div>}
      {/* Main Dashboard Content: Cards + Dashboard component that renders charts using fetched data */}
      <section className="dashboardContent">
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
        {isLoading ? (
          <p>Loading data...</p>
        ) : (
          <Dashboard vitalData={vitalData} riskData={riskData} theme={theme} />
        )}
      </section>
    </div>
  );
};

export default DashboardPage;